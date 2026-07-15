import Database from "better-sqlite3";

const db = new Database("data/gamex.db");

// Transport NPC in scene 76 (Murallas Derruidas) to enter the fortress
db.prepare("INSERT INTO npcs (id, name, dialogue, scene_id, gives_item_id, needs_item_id) VALUES (21, 'Grieta en la Muralla', 'Entre las piedras caídas ves una grieta lo suficientemente grande para pasar. Del otro lado, una construcción inmensa se extiende — la fortaleza original de los gigantes. ¿Entrar?', 76, null, null)").run();
console.log("Transport NPC added to scene 76");

// Internal connections
const conns = [
  // Return from 141 to 76
  { from: 141, dir: "south", to: 76, req: null, msg: null },
  // Internal
  { from: 141, dir: "north", to: 142, req: null, msg: null },
  { from: 142, dir: "south", to: 141, req: null, msg: null },
  { from: 142, dir: "north", to: 143, req: null, msg: null },
  { from: 142, dir: "east", to: 144, req: null, msg: null },
  { from: 142, dir: "west", to: 145, req: null, msg: null },
  { from: 143, dir: "south", to: 142, req: null, msg: null },
  { from: 143, dir: "east", to: 146, req: null, msg: null },
  { from: 143, dir: "west", to: 147, req: null, msg: null },
  { from: 144, dir: "west", to: 142, req: null, msg: null },
  { from: 144, dir: "north", to: 148, req: null, msg: null },
  { from: 145, dir: "east", to: 142, req: null, msg: null },
  { from: 145, dir: "north", to: 147, req: null, msg: null },
  { from: 146, dir: "west", to: 143, req: null, msg: null },
  { from: 146, dir: "north", to: 148, req: null, msg: null },
  { from: 146, dir: "east", to: 149, req: null, msg: null },
  { from: 147, dir: "east", to: 143, req: null, msg: null },
  { from: 147, dir: "south", to: 145, req: null, msg: null },
  { from: 147, dir: "north", to: 150, req: null, msg: null },
  { from: 148, dir: "south", to: 144, req: null, msg: null },
  { from: 148, dir: "west", to: 146, req: null, msg: null },
  { from: 148, dir: "east", to: 149, req: null, msg: null },
  { from: 149, dir: "west", to: 148, req: null, msg: null },
  { from: 149, dir: "south", to: 146, req: null, msg: null },
  { from: 149, dir: "north", to: 150, req: null, msg: null },
  { from: 150, dir: "south", to: 149, req: null, msg: null },
  { from: 150, dir: "west", to: 147, req: null, msg: null },
];

const insertConn = db.prepare("INSERT OR IGNORE INTO scene_connections (from_scene_id, direction, to_scene_id, required_item_id, blocked_message) VALUES (?, ?, ?, ?, ?)");
const seedConns = db.transaction(() => {
  for (const c of conns) insertConn.run(c.from, c.dir, c.to, c.req, c.msg);
});
seedConns();
console.log(`${conns.length} connections added`);

db.close();
console.log("Done! Fortaleza de los Gigantes expansion complete.");
