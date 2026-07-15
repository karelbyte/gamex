import Database from "better-sqlite3";
const db = new Database("data/gamex.db");
console.log("67 west:", JSON.stringify(db.prepare("SELECT * FROM scene_connections WHERE from_scene_id = 67 AND direction = 'west'").all()));
console.log("67 all:", JSON.stringify(db.prepare("SELECT * FROM scene_connections WHERE from_scene_id = 67").all()));
db.close();
