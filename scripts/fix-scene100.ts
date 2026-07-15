import Database from "better-sqlite3";

const db = new Database("data/gamex.db");
db.prepare("INSERT OR IGNORE INTO scene_connections (from_scene_id, direction, to_scene_id, required_item_id, blocked_message) VALUES (100, 'south', 99, null, null)").run();
console.log("Connection 100->south->99 added");
db.close();
