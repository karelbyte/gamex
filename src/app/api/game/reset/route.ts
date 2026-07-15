import { auth } from "@/auth";
import { getDb } from "@/lib/db";

export async function POST() {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "No autorizado" }, { status: 401 });
  }

  const db = await getDb();

  await db.query("UPDATE player_progress SET current_scene_id = 1, inventory = '[]', visited_scenes = '[1]', message_log = '[]', play_time = 0, updated_at = NOW() WHERE user_id = $1", [session.user.id]);

  return Response.json({ success: true });
}
