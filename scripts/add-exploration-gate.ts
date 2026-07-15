import Database from "better-sqlite3";

const db = new Database("data/gamex.db");

// Update connection from scene 99 north -> 100 to require 120 explored scenes
// We'll handle this in the move API logic, not as an item requirement
// Instead, add a blocked message to the existing connection
db.prepare("UPDATE scene_connections SET required_item_id = -1, blocked_message = 'El bosque susurra: No has descubierto suficientes secretos. Explora más antes de enfrentar tu destino. (Necesitas explorar al menos 120 locaciones)' WHERE from_scene_id = 99 AND direction = 'north'").run();

console.log("Exploration gate added: scene 99->100 now requires 120 explored scenes (item_id = -1 as special flag)");
db.close();
