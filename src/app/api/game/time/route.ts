import { auth } from "@/auth";
import { getDb } from "@/lib/db";
import { NextRequest } from "next/server";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "No autorizado" }, { status: 401 });
  }

  const db = await getDb();
  const { rows: [progress] } = await db.query("SELECT play_time FROM player_progress WHERE user_id = $1", [session.user.id]);

  return Response.json({ playTime: progress?.play_time || 0 });
}

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "No autorizado" }, { status: 401 });
  }

  const { playTime } = await request.json();
  const db = await getDb();
  await db.query("UPDATE player_progress SET play_time = $1 WHERE user_id = $2", [playTime, session.user.id]);

  return Response.json({ success: true });
}
