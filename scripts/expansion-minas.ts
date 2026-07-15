import Database from "better-sqlite3";

const db = new Database("data/gamex.db");

// Check free directions for scene 69
const conns69 = db.prepare("SELECT direction FROM scene_connections WHERE from_scene_id = 69").all() as { direction: string }[];
const used69 = conns69.map(c => c.direction);
const free69 = ["north","south","east","west"].filter(d => !used69.includes(d));
console.log("Scene 69 free directions:", free69);

// Check nearby scenes for free direction
for (const id of [62, 54, 81]) {
  const conns = db.prepare("SELECT direction FROM scene_connections WHERE from_scene_id = ?").all(id) as { direction: string }[];
  const dirs = conns.map(c => c.direction);
  const free = ["north","south","east","west"].filter(d => !dirs.includes(d));
  console.log(`Scene ${id}: free=${free.join(",") || "NONE"}`);
}

db.close();
