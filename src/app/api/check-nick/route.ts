import { getDb } from "@/lib/db";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { nick } = await request.json();

  if (!nick || nick.length < 3) {
    return Response.json({ error: "Nick debe tener al menos 3 caracteres" }, { status: 400 });
  }

  const db = await getDb();
  const { rows: [existing] } = await db.query("SELECT id FROM users WHERE nick = $1", [nick]);

  return Response.json({ exists: !!existing });
}
