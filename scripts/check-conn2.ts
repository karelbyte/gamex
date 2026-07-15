import Database from "better-sqlite3";
const db = new Database("data/gamex.db");
// Look for scenes near zone 4 with a free direction
for (const id of [56, 52, 67, 71, 73]) {
  const conns = db.prepare("SELECT direction FROM scene_connections WHERE from_scene_id = ?").all(id) as { direction: string }[];
  const dirs = conns.map(c => c.direction);
  const free = ["north","south","east","west"].filter(d => !dirs.includes(d));
  console.log(`Scene ${id}: used=${dirs.join(",")} free=${free.join(",") || "NONE"}`);
}
db.close();
