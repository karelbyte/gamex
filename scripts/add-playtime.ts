import Database from "better-sqlite3";

const db = new Database("data/gamex.db");
const cols = db.prepare("PRAGMA table_info(player_progress)").all() as { name: string }[];
if (!cols.find((c) => c.name === "play_time")) {
  db.exec("ALTER TABLE player_progress ADD COLUMN play_time INTEGER DEFAULT 0");
  console.log("Column play_time added");
} else {
  console.log("Column play_time already exists");
}
db.close();
