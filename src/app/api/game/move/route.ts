import { auth } from "@/auth";
import { getDb } from "@/lib/db";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "No autorizado" }, { status: 401 });
  }

  const { direction } = await request.json();
  if (!direction || !["north", "south", "east", "west"].includes(direction)) {
    return Response.json({ error: "Dirección inválida" }, { status: 400 });
  }

  const db = await getDb();

  const { rows: [progress] } = await db.query("SELECT * FROM player_progress WHERE user_id = $1", [session.user.id]);

  if (!progress) {
    return Response.json({ error: "Progreso no encontrado" }, { status: 404 });
  }

  const inventory = progress.inventory as number[];

  const { rows: [connection] } = await db.query("SELECT * FROM scene_connections WHERE from_scene_id = $1 AND direction = $2", [progress.current_scene_id, direction]);

  if (!connection) {
    return Response.json({ error: "No hay camino en esa dirección" }, { status: 400 });
  }

  if (connection.required_item_id && !inventory.includes(connection.required_item_id)) {
    // Special case: -1 means exploration gate (need 130 visited scenes)
    if (connection.required_item_id === -1) {
      const visitedScenes = progress.visited_scenes as number[];
      if (visitedScenes.length < 130) {
        return Response.json({ error: "Camino bloqueado", message: connection.blocked_message || "Necesitas explorar más." }, { status: 403 });
      }
    } else {
      return Response.json({ error: "Camino bloqueado", message: connection.blocked_message || "Necesitas un objeto para pasar." }, { status: 403 });
    }
  }

  // Remove used item from inventory (except final items: Espada id=14, Frasco id=15)
  const finalItems = [14, 15];
  if (connection.required_item_id && !finalItems.includes(connection.required_item_id)) {
    const idx = inventory.indexOf(connection.required_item_id);
    if (idx !== -1) inventory.splice(idx, 1);
  }

  // Deadly scenes: if you arrive without protection, you die (get sent back)
  const deadlyScenes: Record<number, { itemId: number; message: string }> = {
    45: { itemId: 5, message: "La Gorgona te mira a los ojos. Tu cuerpo se endurece... te conviertes en piedra. Despiertas en el lugar anterior, como si fuera un sueño." },
    35: { itemId: 3, message: "El espíritu del lago te arrastra bajo el agua negra. No puedes respirar... Despiertas empapado en el lugar anterior." },
  };

  const deadly = deadlyScenes[connection.to_scene_id];
  if (deadly && !inventory.includes(deadly.itemId)) {
    // Check if player has Corona de Cristal (item 19) — saves from one death
    if (inventory.includes(19)) {
      const idx = inventory.indexOf(19);
      inventory.splice(idx, 1);
      await db.query("UPDATE player_progress SET inventory = $1, updated_at = NOW() WHERE user_id = $2", [JSON.stringify(inventory), session.user.id]);
      return Response.json({ success: false, died: false, message: "La Corona de Cristal brilla intensamente y se hace pedazos — su luz te protege del peligro. La corona se sacrificó por ti." }, { status: 200 });
    }
    // Don't move, return death message
    return Response.json({ success: false, died: true, message: deadly.message }, { status: 200 });
  }

  const visitedScenes = progress.visited_scenes as number[];
  const firstVisit = !visitedScenes.includes(connection.to_scene_id);
  if (firstVisit) {
    visitedScenes.push(connection.to_scene_id);
  }

  await db.query("UPDATE player_progress SET current_scene_id = $1, visited_scenes = $2, inventory = $3, updated_at = NOW() WHERE user_id = $4", [connection.to_scene_id, JSON.stringify(visitedScenes), JSON.stringify(inventory), session.user.id]);

  return Response.json({ success: true, sceneId: connection.to_scene_id, firstVisit });
}
