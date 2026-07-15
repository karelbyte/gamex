import Database from "better-sqlite3";

const db = new Database("data/gamex.db");

// Check scene 76 free directions
const conns76 = db.prepare("SELECT direction FROM scene_connections WHERE from_scene_id = 76").all() as { direction: string }[];
const free76 = ["north","south","east","west"].filter(d => !conns76.map(c => c.direction).includes(d));
console.log("Scene 76 free:", free76);

// --- SCENES 141-150 ---
const scenes = [
  { id: 141, name: "Puerta de los Gigantes", description: "Una puerta de diez metros de alto, abierta de par en par. Tallados en la piedra cuentan el origen: gigantes plantando árboles diminutos que crecieron hasta ser un bosque. Ellos lo crearon. Todo empezó aquí.", zone: 11 },
  { id: 142, name: "Avenida de Colosos", description: "Estatuas de gigantes de piedra flanquean el camino como guardianes silenciosos. Cada uno tiene una expresión distinta: alegría, tristeza, furia, paz. Emociones del tamaño de montañas congeladas en roca.", zone: 11 },
  { id: 143, name: "Gran Salón", description: "Una mesa con platos del tamaño de bañeras. Comida petrificada en los platos — un banquete interrumpido hace milenios. Sillas volcadas. Se fueron con prisa. O fueron obligados a irse.", zone: 11 },
  { id: 144, name: "Observatorio", description: "Un telescopio gigante apunta al cielo a través de un agujero en la bóveda. Muestra constelaciones que no existen — el cielo de otro mundo. Los gigantes no eran de aquí. Vinieron de las estrellas.", zone: 11 },
  { id: 145, name: "Armería", description: "Armas del tamaño de árboles en soportes. Espadas, hachas, martillos — todos enormes. Pero una daga gigante es del tamaño perfecto de una espada humana. Fue hecha para alguien pequeño. Para ti.", zone: 11 },
  { id: 146, name: "Dormitorios", description: "Gigantes dormidos. Tres de ellos, cubiertos de musgo de siglos. Respiran — lento, profundo, como la tierra misma. No están muertos. Esperan. Si haces ruido, uno podría despertar.", zone: 11 },
  { id: 147, name: "Jardín Interior", description: "El bosque original antes de la maldición. Aquí dentro es verde, luminoso, lleno de vida. Mariposas doradas. Flores que huelen a esperanza. Un contraste brutal con el exterior. Así era todo antes.", zone: 11 },
  { id: 148, name: "Sala del Consejo", description: "Grabados en las paredes explican todo: los gigantes plantaron el bosque como protección para el mundo. El príncipe corrompió su creación. El consejo decidió dormir hasta que alguien arreglara las cosas.", zone: 11 },
  { id: 149, name: "Corazón de Piedra", description: "Un cristal enorme incrustado en la roca — el gemelo del de las minas. Este mantiene el bosque vivo, incluso corrupto. Sin él, todo moriría. No puedes tocarlo. Solo entender su propósito.", zone: 11 },
  { id: 150, name: "Cima de la Fortaleza", description: "El punto más alto del mundo. Ves todo: el bosque, la torre, el camino que recorriste. Las nubes están al alcance de la mano. Un lugar para entender la magnitud de lo que hiciste — o lo que falta por hacer.", zone: 11 },
];

const insertScene = db.prepare("INSERT INTO scenes (id, name, description, zone) VALUES (?, ?, ?, ?)");
const seedScenes = db.transaction(() => {
  for (const s of scenes) insertScene.run(s.id, s.name, s.description, s.zone);
});
seedScenes();
console.log("10 scenes added (141-150)");

// --- ITEMS ---
db.prepare("INSERT INTO items (id, name, emoji, description, scene_id) VALUES (25, 'Daga de Gigante', '🗡️', 'Una daga gigante del tamaño de una espada humana. Igual de poderosa que la Espada de Cristal — corta la oscuridad.', 145)").run();
db.prepare("INSERT INTO items (id, name, emoji, description, scene_id) VALUES (26, 'Semilla Dorada', '🌱', 'Una semilla del jardín original de los gigantes. Si la plantas en el final del Perdón, el bosque florece al instante.', 147)").run();
console.log("2 items added (25, 26)");

// --- NPCs ---
db.prepare("INSERT INTO npcs (id, name, dialogue, scene_id, gives_item_id, needs_item_id) VALUES (19, 'Gigante Dormido', 'El gigante murmura entre sueños con voz de terremoto: El corazón... mantiene todo vivo... no lo toques... solo comprende... cuando el bosque sane... despertaremos...', 146, null, null)").run();
db.prepare("INSERT INTO npcs (id, name, dialogue, scene_id, gives_item_id, needs_item_id) VALUES (20, 'Guardián del Consejo', 'Un autómata de piedra cobra vida al acercarte. Solo puedes hacerle una pregunta. Responde: Los gigantes esperan. El bosque puede sanar. Depende de tu elección final. Vuelve a quedar inmóvil.', 148, null, null)").run();
console.log("2 NPCs added (19, 20)");

// --- CONNECTIONS ---
// Scene 76 has no free directions. Let me check again with the expansion data
const connsNow = db.prepare("SELECT direction FROM scene_connections WHERE from_scene_id = 76").all() as { direction: string }[];
console.log("Scene 76 directions now:", connsNow.map(c => c.direction));

// All occupied. Try scene 73 (Campo de Batalla) or find another
for (const id of [73, 71, 77, 141]) {
  const c = db.prepare("SELECT direction FROM scene_connections WHERE from_scene_id = ?").all(id) as { direction: string }[];
  const free = ["north","south","east","west"].filter(d => !c.map(x => x.direction).includes(d));
  if (free.length > 0) console.log(`Scene ${id} has free: ${free.join(",")}`);
}

db.close();
