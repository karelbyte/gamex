import Database from "better-sqlite3";

const db = new Database("data/gamex.db");

// --- SCENES 101-110 ---
const scenes = [
  { id: 101, name: "Entrada de la Aldea Quemada", description: "Un arco de piedra calcinada marca la entrada. El cartel está derretido — solo queda una 'A' legible. Más allá, los cimientos de casas se dibujan entre la ceniza como cicatrices en la tierra.", zone: 7 },
  { id: 102, name: "Plaza del Mercado", description: "Los fantasmas repiten su rutina de mercado. Una mujer paga con monedas invisibles. Un niño corre con pan que no existe. No te ven. Están atrapados en el último día antes del fuego.", zone: 7 },
  { id: 103, name: "Casa del Herrero", description: "La forja está fría pero el yunque brilla con un calor antiguo. Herramientas derretidas cuelgan de ganchos. Un fantasma corpulento martillea metal invisible — cada golpe resuena aunque nada es real.", zone: 7 },
  { id: 104, name: "Escuela Abandonada", description: "Pupitres diminutos cubiertos de ceniza. En las paredes, dibujos de niños: un príncipe con corona, una princesa con flores, un bosque verde y feliz. El último dibujo muestra fuego.", zone: 7 },
  { id: 105, name: "Iglesia Sin Techo", description: "El techo se consumió pero las paredes resisten. Los vitrales rotos muestran al príncipe como un héroe — matando dragones, salvando aldeanos. La versión de la historia que él quería contar.", zone: 7 },
  { id: 106, name: "Casa de Elara", description: "Una casa modesta con un jardín muerto. La puerta está abierta. Dentro, un vestido blanco cuelga intacto — lo único que no ardió. Fotos borradas en las paredes. Un florero con flores secas de siglos.", zone: 7 },
  { id: 107, name: "Pozo de los Deseos", description: "Un pozo de piedra con monedas derretidas y fusionadas en el fondo. Los deseos de los aldeanos murieron con ellos. El pozo susurra: 'Tira algo... te concederé un deseo...' No confíes.", zone: 7 },
  { id: 108, name: "Torre del Reloj", description: "El reloj se detuvo a las 3:33. Los engranajes están fundidos. Desde arriba ves toda la aldea — el patrón de destrucción muestra que el fuego empezó desde un solo punto: la plaza.", zone: 7 },
  { id: 109, name: "Cementerio de la Aldea", description: "Tumbas con nombres borrados por el tiempo. Flores de ceniza adornan cada lápida. Un fantasma anciano sentado en una tumba te mira con ojos culpables. Este sí te ve.", zone: 7 },
  { id: 110, name: "Sótano Secreto", description: "Bajo la casa de Elara, una habitación secreta con un escritorio. Un diario abierto, la tinta aún legible después de siglos. Las palabras de Elara cuentan una verdad que nadie más conoce.", zone: 7 },
];

const insertScene = db.prepare("INSERT INTO scenes (id, name, description, zone) VALUES (?, ?, ?, ?)");
const seedScenes = db.transaction(() => {
  for (const s of scenes) insertScene.run(s.id, s.name, s.description, s.zone);
});
seedScenes();
console.log("10 scenes added (101-110)");

// --- ITEMS ---
// Item 17: Diario de Elara (Loc 110)
// Item 18: Medalla del Herrero (Loc 103)
// Item 19: Llave del Sótano (from NPC in Loc 109)
db.prepare("INSERT INTO items (id, name, emoji, description, scene_id) VALUES (17, 'Diario de Elara', '📖', 'El diario de Elara. Sus palabras revelan que amaba al príncipe pero su padre la obligó a rechazarlo.', 110)").run();
db.prepare("INSERT INTO items (id, name, emoji, description, scene_id) VALUES (18, 'Medalla del Herrero', '🏅', 'Una medalla de bronce con el símbolo de un martillo. El herrero la forjó con orgullo.', 103)").run();
console.log("2 items added (17, 18)");

// --- NPCs ---
db.prepare("INSERT INTO npcs (id, name, dialogue, scene_id, gives_item_id, needs_item_id) VALUES (8, 'Fantasma del Herrero', 'Yo forjé esa espada para él... para el príncipe. Era un buen muchacho antes de que la oscuridad lo tomara. Toma mi medalla — es lo único real que me queda.', 103, 18, null)").run();
db.prepare("INSERT INTO npcs (id, name, dialogue, scene_id, gives_item_id, needs_item_id) VALUES (9, 'Fantasma de la Maestra', 'Los niños dibujaban al príncipe como un héroe... hasta el último día. Debajo de la casa de Elara hay un sótano. Su padre escondió la verdad ahí.', 104, null, null)").run();
db.prepare("INSERT INTO npcs (id, name, dialogue, scene_id, gives_item_id, needs_item_id) VALUES (10, 'Fantasma del Padre de Elara', 'Fui yo... yo la obligué a rechazarlo. Creí que un príncipe oscuro no era digno de ella. Mira lo que causé. Toma — la llave del sótano. Lee lo que ella escribió.', 109, null, null)").run();
console.log("3 NPCs added (8, 9, 10)");

// --- CONNECTIONS ---
const conns = [
  // Access from existing map
  { from: 67, dir: "west", to: 101, req: null, msg: null },
  { from: 101, dir: "east", to: 67, req: null, msg: null },
  // Internal connections
  { from: 101, dir: "north", to: 102, req: null, msg: null },
  { from: 102, dir: "south", to: 101, req: null, msg: null },
  { from: 102, dir: "north", to: 105, req: null, msg: null },
  { from: 102, dir: "east", to: 103, req: null, msg: null },
  { from: 102, dir: "west", to: 106, req: null, msg: null },
  { from: 103, dir: "west", to: 102, req: null, msg: null },
  { from: 103, dir: "north", to: 104, req: null, msg: null },
  { from: 104, dir: "south", to: 103, req: null, msg: null },
  { from: 104, dir: "west", to: 105, req: null, msg: null },
  { from: 105, dir: "east", to: 104, req: null, msg: null },
  { from: 105, dir: "south", to: 102, req: null, msg: null },
  { from: 105, dir: "west", to: 108, req: null, msg: null },
  { from: 106, dir: "east", to: 102, req: null, msg: null },
  { from: 106, dir: "north", to: 107, req: null, msg: null },
  { from: 106, dir: "south", to: 110, req: null, msg: "La puerta del sótano está cerrada. Necesitas una llave." },
  { from: 107, dir: "south", to: 106, req: null, msg: null },
  { from: 107, dir: "east", to: 108, req: null, msg: null },
  { from: 108, dir: "west", to: 107, req: null, msg: null },
  { from: 108, dir: "east", to: 105, req: null, msg: null },
  { from: 108, dir: "north", to: 109, req: null, msg: null },
  { from: 109, dir: "south", to: 108, req: null, msg: null },
  { from: 110, dir: "north", to: 106, req: null, msg: null },
];

const insertConn = db.prepare("INSERT INTO scene_connections (from_scene_id, direction, to_scene_id, required_item_id, blocked_message) VALUES (?, ?, ?, ?, ?)");
const seedConns = db.transaction(() => {
  for (const c of conns) insertConn.run(c.from, c.dir, c.to, c.req, c.msg);
});
seedConns();
console.log(`${conns.length} connections added`);

// --- TRAP: Pozo de los Deseos (Loc 107) ---
// Handled via NPC logic - if player has Bolsa de Oro and interacts, they lose it
db.prepare("INSERT INTO npcs (id, name, dialogue, scene_id, gives_item_id, needs_item_id) VALUES (11, 'Pozo Susurrante', 'Tira algo de valor... te concederé un deseo... solo necesito algo brillante...', 107, null, 16)").run();
console.log("Trap NPC added (Pozo)");

// Make the father NPC give access to sótano by making loc 106->110 require interaction
// Actually simpler: loc 110 is accessible from 106 south without item req (story driven)
// The NPC just gives lore context. Remove the blocked message.
db.prepare("UPDATE scene_connections SET required_item_id = null, blocked_message = null WHERE from_scene_id = 106 AND direction = 'south'").run();
console.log("Sótano access opened (story-driven, no item needed)");

db.close();
console.log("Done! Aldea Olvidada expansion complete.");
