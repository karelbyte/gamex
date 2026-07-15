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

  const visitedScenes = progress.visited_scenes as number[];
  const inventory = progress.inventory as number[];

  if (visitedScenes.length === 0) {
    return Response.json({ nodes: [], edges: [], currentSceneId: progress.current_scene_id, blockedScenes: [] });
  }

  const vsPlaceholders = visitedScenes.map((_: number, i: number) => `$${i + 1}`).join(",");
  const invPlaceholders = inventory.length > 0 ? inventory.map((_: number, i: number) => `$${i + visitedScenes.length + 1}`).join(",") : "-1";

  const { rows: nodes } = await db.query(`SELECT id, name, zone FROM scenes WHERE id IN (${vsPlaceholders})`, visitedScenes);

  const { rows: edges } = await db.query(
    `SELECT from_scene_id, direction, to_scene_id FROM scene_connections WHERE from_scene_id IN (${vsPlaceholders}) AND to_scene_id IN (${vsPlaceholders})`,
    [...visitedScenes, ...visitedScenes]
  );

  // Find visited scenes that have at least one blocked connection (requires item player doesn't have)
  const { rows: blockedConns } = inventory.length > 0
    ? await db.query(
        `SELECT DISTINCT from_scene_id FROM scene_connections WHERE from_scene_id IN (${vsPlaceholders}) AND required_item_id IS NOT NULL AND required_item_id NOT IN (${invPlaceholders})`,
        [...visitedScenes, ...inventory]
      )
    : await db.query(
        `SELECT DISTINCT from_scene_id FROM scene_connections WHERE from_scene_id IN (${vsPlaceholders}) AND required_item_id IS NOT NULL AND required_item_id NOT IN (-1)`,
        visitedScenes
      );

  const blockedScenes = blockedConns.map((r: { from_scene_id: number }) => r.from_scene_id);

  return Response.json({ nodes, edges, currentSceneId: progress.current_scene_id, blockedScenes });
}
