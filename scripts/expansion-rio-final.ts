import Database from "better-sqlite3";

const db = new Database("data/gamex.db");

// Add a special NPC in scene 82 that acts as entrance to the underground river
db.prepare("INSERT INTO npcs (id, name, dialogue, scene_id, gives_item_id, needs_item_id) VALUES (16, 'Cadenas del Pozo', 'Las cadenas vibran invitándote a descender. El pozo es profundo — muy profundo. Abajo se escucha agua corriendo. ¿Bajar?', 82, null, null)").run();
console.log("Transport NPC added to scene 82");

// Internal connections for the underground river
const conns = [
  // 121 connects back to 82 via special (will handle in NPC logic)
  // No direct connection 82->121 via direction (all full). Use NPC transport.
  { from: 121, dir: "north", to: 122, req: null, msg: null },
  { from: 122, dir: "south", to: 121, req: null, msg: null },
  { from: 122, dir: "north", to: 123, req: 21, msg: "Los rápidos te arrastrarían sin una balsa. Necesitas algo para navegar." },
  { from: 122, dir: "east", to: 124, req: null, msg: null },
  { from: 123, dir: "south", to: 122, req: null, msg: null },
  { from: 123, dir: "north", to: 125, req: null, msg: null },
  { from: 123, dir: "east", to: 127, req: null, msg: null },
  { from: 124, dir: "west", to: 122, req: null, msg: null },
  { from: 124, dir: "north", to: 125, req: null, msg: null },
  { from: 124, dir: "east", to: 130, req: null, msg: null },
  { from: 125, dir: "south", to: 123, req: null, msg: null },
  { from: 125, dir: "west", to: 124, req: null, msg: null },
  { from: 125, dir: "east", to: 126, req: null, msg: null },
  { from: 126, dir: "west", to: 125, req: null, msg: null },
  { from: 126, dir: "north", to: 128, req: null, msg: null },
  { from: 126, dir: "east", to: 127, req: null, msg: null },
  { from: 127, dir: "west", to: 126, req: null, msg: null },
  { from: 127, dir: "south", to: 123, req: null, msg: null },
  { from: 127, dir: "north", to: 128, req: null, msg: null },
  { from: 128, dir: "south", to: 127, req: null, msg: null },
  { from: 128, dir: "west", to: 126, req: null, msg: null },
  { from: 128, dir: "east", to: 129, req: null, msg: null },
  { from: 129, dir: "west", to: 128, req: null, msg: null },
  // Exit to surface: Loc 129 north goes to Loc 40 (Precipicio) as shortcut
  // But 40 has no free directions. Use Loc 34 (Orilla Opuesta) instead.
  { from: 130, dir: "west", to: 124, req: null, msg: null },
  { from: 130, dir: "south", to: 127, req: null, msg: null },
  // Return up from 121 to 82 surface
  { from: 121, dir: "south", to: 82, req: null, msg: null },
];

const insertConn = db.prepare("INSERT OR IGNORE INTO scene_connections (from_scene_id, direction, to_scene_id, required_item_id, blocked_message) VALUES (?, ?, ?, ?, ?)");
const seedConns = db.transaction(() => {
  for (const c of conns) insertConn.run(c.from, c.dir, c.to, c.req, c.msg);
});
seedConns();
console.log(`${conns.length} connections added`);

// Check which scene has free direction for exit (129)
for (const id of [34, 37, 30, 24]) {
  const c = db.prepare("SELECT direction FROM scene_connections WHERE from_scene_id = ?").all(id) as { direction: string }[];
  const free = ["north","south","east","west"].filter(d => !c.map(x => x.direction).includes(d));
  if (free.length > 0) console.log(`Scene ${id} has free: ${free.join(",")}`);
}

db.close();
console.log("Done!");
