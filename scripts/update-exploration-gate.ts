import Database from "better-sqlite3";

const db = new Database("data/gamex.db");
db.prepare("UPDATE scene_connections SET blocked_message = 'El bosque susurra: No has descubierto suficientes secretos. Explora más antes de enfrentar tu destino. (Necesitas explorar al menos 130 locaciones)' WHERE from_scene_id = 99 AND direction = 'north'").run();
console.log("Updated to 130");
db.close();
