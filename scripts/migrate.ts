import Database from "better-sqlite3";

const db = new Database("data/gamex.db");
const cols = db.prepare("PRAGMA table_info(player_progress)").all() as { name: string }[];
if (!cols.find((c) => c.name === "message_log")) {
  db.exec("ALTER TABLE player_progress ADD COLUMN message_log TEXT DEFAULT '[]'");
  console.log("Column message_log added");
} else {
  console.log("Column message_log already exists");
}
db.close();
