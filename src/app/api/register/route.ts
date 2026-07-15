import { getDb } from "@/lib/db";
import { hash } from "bcryptjs";
import { NextRequest } from "next/server";
import { randomUUID } from "crypto";

export async function POST(request: NextRequest) {
  try {
    const { nick, password } = await request.json();

    if (!nick || nick.length < 3) {
      return Response.json({ error: "Nick debe tener al menos 3 caracteres" }, { status: 400 });
    }
    if (!password || password.length < 4) {
      return Response.json({ error: "Contraseña debe tener al menos 4 caracteres" }, { status: 400 });
    }

    const db = await getDb();

    const { rows: [existing] } = await db.query("SELECT id FROM users WHERE nick = $1", [nick]);
    if (existing) {
      return Response.json({ error: "Ese nick ya está tomado" }, { status: 400 });
    }

    const passwordHash = await hash(password, 12);
    const userId = randomUUID();

    await db.query("INSERT INTO users (id, nick, password_hash) VALUES ($1, $2, $3)", [userId, nick, passwordHash]);
    await db.query("INSERT INTO player_progress (id, user_id, current_scene_id, inventory, visited_scenes) VALUES ($1, $2, 1, '[]', '[1]')", [randomUUID(), userId]);

    return Response.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Register error:", error);
    return Response.json({ error: "Error interno" }, { status: 500 });
  }
}
