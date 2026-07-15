import { auth } from "@/auth";
import { getDb } from "@/lib/db";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "No autorizado" }, { status: 401 });
  }

  const { itemId } = await request.json();
  if (!itemId) {
    return Response.json({ error: "Item ID requerido" }, { status: 400 });
  }

  const db = await getDb();

  const { rows: [progress] } = await db.query("SELECT * FROM player_progress WHERE user_id = $1", [session.user.id]);

  if (!progress) {
    return Response.json({ error: "Progreso no encontrado" }, { status: 404 });
  }

  const { rows: [item] } = await db.query("SELECT * FROM items WHERE id = $1 AND scene_id = $2", [itemId, progress.current_scene_id]);

  if (!item) {
    return Response.json({ error: "Objeto no encontrado en esta locación" }, { status: 400 });
  }

  const inventory = progress.inventory as number[];
  if (inventory.includes(itemId)) {
    return Response.json({ error: "Ya tienes este objeto" }, { status: 400 });
  }

  inventory.push(itemId);
  await db.query("UPDATE player_progress SET inventory = $1, updated_at = NOW() WHERE user_id = $2", [JSON.stringify(inventory), session.user.id]);

  return Response.json({ success: true, item });
}
