import Database from "better-sqlite3";
import path from "path";
import { scenes } from "./data/scenes";
import { items } from "./data/items";
import { npcs } from "./data/npcs";
import { connections } from "./data/connections";
import fs from "fs";

const dbDir = path.resolve(process.cwd(), "data");
if (!fs.existsSync(dbDir)) fs.mkdirSync(dbDir, { recursive: true });

const dbPath = path.join(dbDir, "gamex.db");
const db = new Database(dbPath);
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

// Create tables
db.exec(`
  DROP TABLE IF EXISTS player_progress;
  DROP TABLE IF EXISTS npcs;
  DROP TABLE IF EXISTS items;
  DROP TABLE IF EXISTS scene_connections;
  DROP TABLE IF EXISTS scenes;
  DROP TABLE IF EXISTS users;

  CREATE TABLE users (
    id TEXT PRIMARY KEY,
    nick TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE scenes (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT,
    zone INTEGER NOT NULL
  );

  CREATE TABLE scene_connections (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    from_scene_id INTEGER NOT NULL,
    direction TEXT NOT NULL,
    to_scene_id INTEGER NOT NULL,
    required_item_id INTEGER,
    blocked_message TEXT,
    UNIQUE(from_scene_id, direction),
    FOREIGN KEY (from_scene_id) REFERENCES scenes(id)
  );

  CREATE TABLE items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    emoji TEXT NOT NULL,
    description TEXT NOT NULL,
    scene_id INTEGER NOT NULL,
    FOREIGN KEY (scene_id) REFERENCES scenes(id)
  );

  CREATE TABLE npcs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    dialogue TEXT NOT NULL,
    scene_id INTEGER NOT NULL,
    gives_item_id INTEGER,
    needs_item_id INTEGER,
    FOREIGN KEY (scene_id) REFERENCES scenes(id)
  );

  CREATE TABLE player_progress (
    id TEXT PRIMARY KEY,
    user_id TEXT UNIQUE NOT NULL,
    current_scene_id INTEGER DEFAULT 1,
    inventory TEXT DEFAULT '[]',
    visited_scenes TEXT DEFAULT '[1]',
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
`);

console.log("Tables created.");

// Seed scenes
const insertScene = db.prepare("INSERT INTO scenes (id, name, description, zone) VALUES (?, ?, ?, ?)");
const seedScenes = db.transaction(() => {
  for (const s of scenes) insertScene.run(s.id, s.name, s.description, s.zone);
});
seedScenes();
console.log(`${scenes.length} scenes inserted.`);

// Seed items
const insertItem = db.prepare("INSERT INTO items (id, name, emoji, description, scene_id) VALUES (?, ?, ?, ?, ?)");
const seedItems = db.transaction(() => {
  for (const i of items) insertItem.run(i.id, i.name, i.emoji, i.description, i.sceneId);
});
seedItems();
console.log(`${items.length} items inserted.`);

// Seed npcs
const insertNpc = db.prepare("INSERT INTO npcs (id, name, dialogue, scene_id, gives_item_id, needs_item_id) VALUES (?, ?, ?, ?, ?, ?)");
const seedNpcs = db.transaction(() => {
  for (const n of npcs) insertNpc.run(n.id, n.name, n.dialogue, n.sceneId, n.givesItemId, n.needsItemId);
});
seedNpcs();
console.log(`${npcs.length} NPCs inserted.`);

// Seed connections
const insertConn = db.prepare("INSERT INTO scene_connections (from_scene_id, direction, to_scene_id, required_item_id, blocked_message) VALUES (?, ?, ?, ?, ?)");
const seedConns = db.transaction(() => {
  for (const c of connections) insertConn.run(c.fromSceneId, c.direction, c.toSceneId, c.requiredItemId, c.blockedMessage);
});
seedConns();
console.log(`${connections.length} connections inserted.`);

db.close();
console.log("Done! DB at:", dbPath);
