import Database from "better-sqlite3";

const db = new Database("data/gamex.db");

// Duende Dormido (id=2, scene 25): if player has Farol (item 2), the gnome wakes up
// and gives the player a hint about the Cuerda de Raíces location
db.prepare(`UPDATE npcs SET 
  dialogue = 'Zzz... zzz... (ronca profundamente. Una luz azul podría despertarlo...)',
  needs_item_id = 2,
  gives_item_id = null
  WHERE id = 2`).run();

// Gato de Tres Ojos (id=6, scene 70): gives free hints about what's ahead
// No needs_item_id, no gives_item_id - handled with special logic
db.prepare(`UPDATE npcs SET 
  dialogue = 'Todos se pierden aquí. Pero tú hueles a destino. Pregúntame y te guiaré... gratis, por esta vez.',
  needs_item_id = null,
  gives_item_id = null
  WHERE id = 6`).run();

console.log("NPCs updated");
db.close();
