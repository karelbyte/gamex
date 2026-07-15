import Database from "better-sqlite3";
const db = new Database("data/gamex.db");
for (const id of [64, 74, 81, 84]) {
  const conns = db.prepare("SELECT direction FROM scene_connections WHERE from_scene_id = ?").all(id) as { direction: string }[];
  const dirs = conns.map(c => c.direction);
  const free = ["north","south","east","west"].filter(d => !dirs.includes(d));
  console.log(`Scene ${id}: used=${dirs.join(",")} free=${free.join(",") || "NONE"}`);
}
db.close();
