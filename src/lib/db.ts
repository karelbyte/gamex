import { Pool } from "pg";
import path from "path";
import fs from "fs";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/gamex",
});

let _initialized = false;

export async function getDb(): Promise<Pool> {
  if (!_initialized) {
    _initialized = true;
    try {
      const { rows } = await pool.query("SELECT COUNT(*)::int as c FROM scenes");
      if (rows[0].c === 0) await seedDatabase();
    } catch {
      await seedDatabase();
    }
  }
  return pool;
}

async function seedDatabase() {
  console.log("Database empty. Auto-seeding...");

  const seedPath = path.join(process.cwd(), "prisma", "data", "seed-data.json");
  const seedData: { scenes: any[]; items: any[]; npcs: any[]; connections: any[]; altDescriptions: any[]; sceneImages: any[] } = JSON.parse(fs.readFileSync(seedPath, "utf8"));
  const { scenes, items, npcs, connections, altDescriptions, sceneImages } = seedData;

  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      nick TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
    CREATE TABLE IF NOT EXISTS scenes (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT NOT NULL,
      image_url TEXT,
      zone INTEGER NOT NULL
    );
    CREATE TABLE IF NOT EXISTS scene_connections (
      id SERIAL PRIMARY KEY,
      from_scene_id INTEGER NOT NULL REFERENCES scenes(id),
      direction TEXT NOT NULL,
      to_scene_id INTEGER NOT NULL,
      required_item_id INTEGER,
      blocked_message TEXT,
      UNIQUE(from_scene_id, direction)
    );
    CREATE TABLE IF NOT EXISTS items (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      emoji TEXT NOT NULL,
      description TEXT NOT NULL,
      scene_id INTEGER NOT NULL REFERENCES scenes(id)
    );
    CREATE TABLE IF NOT EXISTS npcs (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      dialogue TEXT NOT NULL,
      scene_id INTEGER NOT NULL REFERENCES scenes(id),
      gives_item_id INTEGER,
      needs_item_id INTEGER
    );
    CREATE TABLE IF NOT EXISTS player_progress (
      id TEXT PRIMARY KEY,
      user_id TEXT UNIQUE NOT NULL REFERENCES users(id),
      current_scene_id INTEGER DEFAULT 1,
      inventory JSONB DEFAULT '[]',
      visited_scenes JSONB DEFAULT '[1]',
      message_log JSONB DEFAULT '[]',
      play_time INTEGER DEFAULT 0,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    );
    CREATE TABLE IF NOT EXISTS scene_alt_descriptions (
      id SERIAL PRIMARY KEY,
      scene_id INTEGER NOT NULL REFERENCES scenes(id),
      condition_type TEXT NOT NULL,
      condition_item_id INTEGER,
      description TEXT NOT NULL
    );
  `);

  for (const s of scenes) {
    await pool.query("INSERT INTO scenes (id, name, description, zone) VALUES ($1, $2, $3, $4) ON CONFLICT (id) DO NOTHING", [s.id, s.name, s.description, s.zone]);
  }
  for (const i of items) {
    await pool.query("INSERT INTO items (id, name, emoji, description, scene_id) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (id) DO NOTHING", [i.id, i.name, i.emoji, i.description, i.sceneId]);
  }
  for (const n of npcs) {
    await pool.query("INSERT INTO npcs (id, name, dialogue, scene_id, gives_item_id, needs_item_id) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT (id) DO NOTHING", [n.id, n.name, n.dialogue, n.sceneId, n.givesItemId, n.needsItemId]);
  }
  for (const c of connections) {
    await pool.query("INSERT INTO scene_connections (from_scene_id, direction, to_scene_id, required_item_id, blocked_message) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (from_scene_id, direction) DO NOTHING", [c.fromSceneId, c.direction, c.toSceneId, c.requiredItemId, c.blockedMessage]);
  }
  for (const a of altDescriptions) {
    await pool.query("INSERT INTO scene_alt_descriptions (scene_id, condition_type, condition_item_id, description) VALUES ($1, $2, $3, $4)", [a.sceneId, a.conditionType, a.conditionItemId, a.description]);
  }
  for (const s of sceneImages) {
    await pool.query("UPDATE scenes SET image_url = $1 WHERE id = $2", [s.imageUrl, s.id]);
  }

  console.log(`Seeded: ${scenes.length} scenes, ${items.length} items, ${npcs.length} npcs, ${connections.length} connections, ${altDescriptions.length} alt descriptions`);
}
