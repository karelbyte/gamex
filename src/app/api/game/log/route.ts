import { auth } from "@/auth";
import { getDb } from "@/lib/db";
import { NextRequest } from "next/server";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "No autorizado" }, { status: 401 });
  }

  const db = await getDb();
  const { rows: [progress] } = await db.query("SELECT message_log FROM player_progress WHERE user_id = $1", [session.user.id]);

  if (!progress) {
    return Response.json({ log: [] });
  }

  return Response.json({ log: (progress.message_log as any[]) || [] });
}

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "No autorizado" }, { status: 401 });
  }

  const { log } = await request.json();

  const db = await getDb();
  await db.query("UPDATE player_progress SET message_log = $1, updated_at = NOW() WHERE user_id = $2", [JSON.stringify(log), session.user.id]);

  return Response.json({ success: true });
}
