import { auth } from "@/auth";
import { getDb } from "@/lib/db";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "No autorizado" }, { status: 401 });
  }

  const db = await getDb();

  const { rows: [progress] } = await db.query("SELECT * FROM player_progress WHERE user_id = $1", [session.user.id]);

  if (!progress) {
    return Response.json({ error: "Progreso no encontrado" }, { status: 404 });
  }

  const { rows: [scene] } = await db.query("SELECT * FROM scenes WHERE id = $1", [progress.current_scene_id]);

  const inventory = progress.inventory as number[];
  const visitedScenes = progress.visited_scenes as number[];

  // Check for alternative descriptions based on player inventory
  const { rows: altDescs } = await db.query("SELECT * FROM scene_alt_descriptions WHERE scene_id = $1", [progress.current_scene_id]);

  let description = scene.description;
  for (const alt of altDescs) {
    if (alt.condition_type === "has_item" && inventory.includes(alt.condition_item_id)) {
      description = alt.description;
      break;
    }
    if (alt.condition_type === "not_has_item" && !inventory.includes(alt.condition_item_id)) {
      description = alt.description;
      break;
    }
  }

  const { rows: connections } = await db.query("SELECT sc.*, s.name as to_scene_name FROM scene_connections sc JOIN scenes s ON s.id = sc.to_scene_id WHERE sc.from_scene_id = $1", [progress.current_scene_id]);

  const { rows: sceneItems } = await db.query("SELECT * FROM items WHERE scene_id = $1", [progress.current_scene_id]);

  const { rows: npcs } = await db.query("SELECT * FROM npcs WHERE scene_id = $1", [progress.current_scene_id]);

  let inventoryItems: any[] = [];
  if (inventory.length > 0) {
    const params = inventory.map((_: number, i: number) => `$${i + 1}`).join(",");
    const { rows } = await db.query(`SELECT * FROM items WHERE id IN (${params})`, inventory);
    inventoryItems = rows;
  }

  const directions = connections.map((conn) => {
    let blocked = false;
    if (conn.required_item_id === -1) {
      blocked = visitedScenes.length < 130;
    } else if (conn.required_item_id) {
      blocked = !inventory.includes(conn.required_item_id);
    }
    return {
      direction: conn.direction,
      toSceneId: conn.to_scene_id,
      toSceneName: conn.to_scene_name,
      blocked,
      blockedMessage: blocked ? conn.blocked_message : null,
    };
  });

  const availableItems = sceneItems.filter((item) => !inventory.includes(item.id));

  // Check if game is completed (scene 100 with both final items)
  // Espada de Cristal (14) OR Daga de Gigante (25) + Frasco de Lágrimas (15) OR Cristal del Despertar (23)
  const hasSword = inventory.includes(14) || inventory.includes(25);
  const hasAwaken = inventory.includes(15) || inventory.includes(23);
  const gameCompleted = scene.id === 100 && hasSword && hasAwaken;

  return Response.json({
    scene: { id: scene.id, name: scene.name, description, imageUrl: scene.image_url, zone: scene.zone },
    directions,
    availableItems,
    npcs,
    inventory: inventoryItems,
    visitedScenes,
    gameCompleted,
  });
}
