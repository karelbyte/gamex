import Database from "better-sqlite3";

const db = new Database("data/gamex.db");

// Add gold bag item in scene 30 (Cámara de los Ecos)
db.prepare(
  "INSERT INTO items (id, name, emoji, description, scene_id) VALUES (16, 'Bolsa de Oro', '💰', 'Una bolsa de cuero llena de monedas de oro antiguas. Alguien la valorará.', 30)"
).run();

// Update the gnome NPC: needs gold (item 16), gives a tip (no item, custom logic)
db.prepare(
  `UPDATE npcs SET needs_item_id = 16, dialogue = 'Te perdiste, ¿eh? Todos se pierden. Yo conozco todos los caminos... por un precio. Dame oro y te diré dónde hallar lo que necesitas.' WHERE id = 3`
).run();

console.log("Gold bag added to scene 30, gnome updated");
db.close();
