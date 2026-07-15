import { auth } from "@/auth";
import { getDb } from "@/lib/db";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "No autorizado" }, { status: 401 });
  }

  const { npcId } = await request.json();
  if (!npcId) {
    return Response.json({ error: "NPC ID requerido" }, { status: 400 });
  }

  const db = await getDb();

  const { rows: [progress] } = await db.query("SELECT * FROM player_progress WHERE user_id = $1", [session.user.id]);

  if (!progress) {
    return Response.json({ error: "Progreso no encontrado" }, { status: 404 });
  }

  const { rows: [npc] } = await db.query("SELECT * FROM npcs WHERE id = $1 AND scene_id = $2", [npcId, progress.current_scene_id]);

  if (!npc) {
    return Response.json({ error: "NPC no encontrado en esta locación" }, { status: 400 });
  }

  const inventory = progress.inventory as number[];

  // NPC that gives item without needing anything (like the fairy in scene 12)
  if (npc.gives_item_id && !npc.needs_item_id) {
    if (inventory.includes(npc.gives_item_id)) {
      return Response.json({ message: `${npc.name} ya te dio lo que tenía.`, traded: false });
    }
    inventory.push(npc.gives_item_id);
    await db.query("UPDATE player_progress SET inventory = $1, updated_at = NOW() WHERE user_id = $2", [JSON.stringify(inventory), session.user.id]);
    const { rows: [item] } = await db.query("SELECT * FROM items WHERE id = $1", [npc.gives_item_id]);
    return Response.json({ message: `${npc.name} te entregó: ${item.emoji} ${item.name}`, traded: true, item });
  }

  // NPC that needs an item to give another
  if (npc.gives_item_id && npc.needs_item_id) {
    if (inventory.includes(npc.gives_item_id)) {
      return Response.json({ message: `${npc.name} ya te dio lo que tenía.`, traded: false });
    }
    if (!inventory.includes(npc.needs_item_id)) {
      const { rows: [neededItem] } = await db.query("SELECT * FROM items WHERE id = $1", [npc.needs_item_id]);
      return Response.json({ message: `${npc.name} necesita: ${neededItem.emoji} ${neededItem.name}`, traded: false });
    }
    // Do the trade: remove needed item, add given item
    const idx = inventory.indexOf(npc.needs_item_id);
    inventory.splice(idx, 1);
    inventory.push(npc.gives_item_id);
    await db.query("UPDATE player_progress SET inventory = $1, updated_at = NOW() WHERE user_id = $2", [JSON.stringify(inventory), session.user.id]);
    const { rows: [givenItem] } = await db.query("SELECT * FROM items WHERE id = $1", [npc.gives_item_id]);
    return Response.json({ message: `${npc.name} te entregó: ${givenItem.emoji} ${givenItem.name}`, traded: true, item: givenItem });
  }

  // NPC that needs an item but gives info (tip) instead of an item
  if (!npc.gives_item_id && npc.needs_item_id) {
    if (!inventory.includes(npc.needs_item_id)) {
      // Special messages per NPC
      if (npc.id === 2) {
        return Response.json({ message: "El duende ronca profundamente. Quizás una luz brillante lo despertaría...", traded: false });
      }
      const { rows: [neededItem] } = await db.query("SELECT * FROM items WHERE id = $1", [npc.needs_item_id]);
      return Response.json({ message: `${npc.name} necesita: ${neededItem.emoji} ${neededItem.name}`, traded: false });
    }

    // Duende Dormido (id=2): don't consume the Farol, just give a tip
    if (npc.id === 2) {
      return Response.json({ message: "'¡Aaah! ¡Esa luz! ¿Dónde...?' El duende despierta sobresaltado. 'Escucha... en el Árbol Hueco hay una cuerda de raíces. La necesitarás para cruzar el precipicio. Ahora déjame dormir...' Se vuelve a dormir.", traded: false });
    }

    // Duende del Laberinto (id=3): consume the gold and give tip
    const idx = inventory.indexOf(npc.needs_item_id);
    inventory.splice(idx, 1);
    await db.query("UPDATE player_progress SET inventory = $1, updated_at = NOW() WHERE user_id = $2", [JSON.stringify(inventory), session.user.id]);

    // Find the next blocked connection the player hasn't passed yet
    const visitedScenes = progress.visited_scenes as number[];
    const placeholders = visitedScenes.map((_: number, i: number) => `$${i + 1}`).join(",");
    const { rows: [blockedConn] } = await db.query(
      `SELECT sc.*, i.name as item_name, i.emoji as item_emoji, s.name as scene_name FROM scene_connections sc JOIN items i ON i.id = sc.required_item_id JOIN scenes s ON s.id = sc.from_scene_id WHERE sc.required_item_id IS NOT NULL AND sc.to_scene_id NOT IN (${placeholders}) LIMIT 1`,
      visitedScenes
    );

    if (blockedConn) {
      return Response.json({ message: `'${blockedConn.item_emoji} ${blockedConn.item_name}... búscala bien. La necesitarás en ${blockedConn.scene_name}', dice el duende con una sonrisa astuta.`, traded: true });
    }
    return Response.json({ message: "'Hmm, no veo más obstáculos en tu camino. Ve con cuidado.', dice el duende contando las monedas.", traded: true });
  }

  // Cadenas del Pozo (id=16): transports player to underground river (scene 121)
  if (npc.id === 16) {
    const visitedScenes = progress.visited_scenes as number[];
    if (!visitedScenes.includes(121)) visitedScenes.push(121);
    await db.query("UPDATE player_progress SET current_scene_id = 121, visited_scenes = $1, updated_at = NOW() WHERE user_id = $2", [JSON.stringify(visitedScenes), session.user.id]);
    return Response.json({ message: "Te agarras de las cadenas y desciendes al pozo. El agua fría te recibe abajo. Una corriente te arrastra hacia un sistema de cuevas oculto.", traded: true, transported: true });
  }

  // Grieta en la Muralla (id=21): transports player to giants fortress (scene 141)
  if (npc.id === 21) {
    const visitedScenes = progress.visited_scenes as number[];
    if (!visitedScenes.includes(141)) visitedScenes.push(141);
    await db.query("UPDATE player_progress SET current_scene_id = 141, visited_scenes = $1, updated_at = NOW() WHERE user_id = $2", [JSON.stringify(visitedScenes), session.user.id]);
    return Response.json({ message: "Te deslizas por la grieta entre las piedras enormes. Del otro lado, una fortaleza titánica se revela — la obra de los gigantes que plantaron este bosque.", traded: true, transported: true });
  }

  // Gato de Tres Ojos (id=6): gives free hints about next item needed
  if (npc.id === 6) {
    const visitedScenes = progress.visited_scenes as number[];
    const invPlaceholders = inventory.length > 0 ? inventory.map((_: number, i: number) => `$${i + 1}`).join(",") : "-1";
    const { rows: [blockedConn] } = await db.query(
      `SELECT sc.*, i.name as item_name, i.emoji as item_emoji, i.scene_id as item_scene_id, s2.name as item_scene_name FROM scene_connections sc JOIN items i ON i.id = sc.required_item_id JOIN scenes s2 ON s2.id = i.scene_id WHERE sc.required_item_id IS NOT NULL AND sc.required_item_id NOT IN (${invPlaceholders}) LIMIT 1`,
      inventory
    );

    if (blockedConn) {
      return Response.json({ message: `El gato ronronea. '${blockedConn.item_emoji} ${blockedConn.item_name}... la encontrarás en ${blockedConn.item_scene_name}. No me preguntes cómo lo sé.' Su tercer ojo parpadea.`, traded: false });
    }
    return Response.json({ message: "'Tienes todo lo que necesitas. Solo sigue adelante. El final está cerca.' El gato sonríe con sus tres ojos.", traded: false });
  }

  // NPC with no trade (just dialogue)
  return Response.json({ message: npc.dialogue, traded: false });
}
