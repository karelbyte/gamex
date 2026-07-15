import Database from "better-sqlite3";

const db = new Database("data/gamex.db");

// Add connections (scenes already inserted)
const conns = [
  // Access from Loc 74 (Ciénaga de los Olvidados) south -> 101
  { from: 74, dir: "south", to: 101, req: null, msg: null },
  { from: 101, dir: "north", to: 74, req: null, msg: null },
  // Internal connections  
  { from: 101, dir: "south", to: 102, req: null, msg: null },
  { from: 102, dir: "north", to: 101, req: null, msg: null },
  { from: 102, dir: "east", to: 103, req: null, msg: null },
  { from: 102, dir: "west", to: 106, req: null, msg: null },
  { from: 102, dir: "south", to: 105, req: null, msg: null },
  { from: 103, dir: "west", to: 102, req: null, msg: null },
  { from: 103, dir: "north", to: 104, req: null, msg: null },
  { from: 104, dir: "south", to: 103, req: null, msg: null },
  { from: 104, dir: "west", to: 105, req: null, msg: null },
  { from: 105, dir: "east", to: 104, req: null, msg: null },
  { from: 105, dir: "north", to: 102, req: null, msg: null },
  { from: 105, dir: "west", to: 108, req: null, msg: null },
  { from: 106, dir: "east", to: 102, req: null, msg: null },
  { from: 106, dir: "north", to: 107, req: null, msg: null },
  { from: 106, dir: "south", to: 110, req: null, msg: null },
  { from: 107, dir: "south", to: 106, req: null, msg: null },
  { from: 107, dir: "east", to: 108, req: null, msg: null },
  { from: 108, dir: "west", to: 107, req: null, msg: null },
  { from: 108, dir: "east", to: 105, req: null, msg: null },
  { from: 108, dir: "north", to: 109, req: null, msg: null },
  { from: 109, dir: "south", to: 108, req: null, msg: null },
  { from: 110, dir: "north", to: 106, req: null, msg: null },
];

const insertConn = db.prepare("INSERT OR IGNORE INTO scene_connections (from_scene_id, direction, to_scene_id, required_item_id, blocked_message) VALUES (?, ?, ?, ?, ?)");
const seedConns = db.transaction(() => {
  for (const c of conns) insertConn.run(c.from, c.dir, c.to, c.req, c.msg);
});
seedConns();
console.log(`${conns.length} connections added`);

// Trap NPC: Pozo Susurrante (Loc 107) - takes gold, gives nothing useful
db.prepare("INSERT OR IGNORE INTO npcs (id, name, dialogue, scene_id, gives_item_id, needs_item_id) VALUES (11, 'Pozo Susurrante', 'Tira algo de valor... te concederé un deseo... solo necesito algo brillante...', 107, null, 16)").run();
console.log("Trap NPC added");

db.close();
console.log("Done! Connections + trap for Aldea Olvidada.");
