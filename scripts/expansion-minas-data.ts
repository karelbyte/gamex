import Database from "better-sqlite3";

const db = new Database("data/gamex.db");

// --- SCENES 111-120 ---
const scenes = [
  { id: 111, name: "Boca de la Mina", description: "Rieles oxidados se pierden en la oscuridad. Vagonetas volcadas con cristales incrustados. Un cartel de hueso dice: 'Minas de los Gigantes — Prohibido el paso'. El aire vibra con una frecuencia que sientes en los dientes.", zone: 8 },
  { id: 112, name: "Galería Principal", description: "Vetas de cristal recorren las paredes como venas luminosas. Cada paso produce un eco musical. Los cristales atrapan luz de algún lugar — no hay antorchas pero puedes ver. Hermoso y perturbador.", zone: 8 },
  { id: 113, name: "Caverna del Eco", description: "Cada sonido se amplifica mil veces. Tu respiración suena como un huracán. Los cristales en el techo vibran con cada frecuencia. Un lugar peligroso para hacer ruido. Silencio absoluto recomendado.", zone: 8 },
  { id: 114, name: "Lago Subterráneo", description: "Agua cristalina tan pura que parece invisible. Peces de cristal nadan dejando estelas de luz. En un islote diminuto, un cofre brilla bajo el agua. La belleza aquí es tan intensa que duele.", zone: 8 },
  { id: 115, name: "Puente de Cristal", description: "Un puente completamente transparente cruza un abismo. Puedes ver kilómetros de caída a través del suelo que pisas. Es cristal — no se romperá. Probablemente. Cada paso es un acto de fe visual.", zone: 8 },
  { id: 116, name: "Nido de Gusanos de Cristal", description: "Criaturas traslúcidas del tamaño de un brazo mastican la roca, convirtiendo piedra en cristal. Sus cuerpos brillan con lo que digieren. Son más curiosos que hostiles — si no les molestas.", zone: 8 },
  { id: 117, name: "Cámara del Gigante", description: "El esqueleto de un gigante yace contra la pared, su pico de minero aún en la mano. Mide diez metros. En las paredes, tallados de gigantes trabajando felices. Este murió solo, el último de su especie.", zone: 8 },
  { id: 118, name: "Forja de Cristal", description: "Un horno que moldea cristal con calor. Aún funciona — el fuego es de un color imposible, entre rosa y dorado. Moldes de espadas, escudos, coronas. Los gigantes eran artesanos, no guerreros.", zone: 8 },
  { id: 119, name: "Sala del Trono de Cristal", description: "Un trono tallado en un solo cristal enorme. La corona del rey gigante descansa en el asiento — del tamaño perfecto para una cabeza humana. Como si supieran que alguien vendría a tomarla.", zone: 8 },
  { id: 120, name: "Veta Madre", description: "Un cristal del tamaño de una casa, pulsante con luz propia. El corazón de la montaña. Sientes su latido en el pecho. Es antiguo — más viejo que el bosque, más viejo que los gigantes. Es la semilla de todo.", zone: 8 },
];

const insertScene = db.prepare("INSERT INTO scenes (id, name, description, zone) VALUES (?, ?, ?, ?)");
const seedScenes = db.transaction(() => {
  for (const s of scenes) insertScene.run(s.id, s.name, s.description, s.zone);
});
seedScenes();
console.log("10 scenes added (111-120)");

// --- ITEMS ---
// Item 19: Corona de Cristal (Loc 119) - protects from one death
// Item 20: Pico del Gigante (Loc 117) - opens shortcut
db.prepare("INSERT INTO items (id, name, emoji, description, scene_id) VALUES (19, 'Corona de Cristal', '👑', 'Una corona tallada en cristal puro. Brilla con luz interna. Protege a quien la porta de un destino fatal... una vez.', 119)").run();
db.prepare("INSERT INTO items (id, name, emoji, description, scene_id) VALUES (20, 'Pico del Gigante', '⛏️', 'Un pico de minero enorme pero que pesa menos de lo esperado. Puede romper cualquier pared de roca.', 117)").run();
console.log("2 items added (19, 20)");

// --- NPCs ---
db.prepare("INSERT INTO npcs (id, name, dialogue, scene_id, gives_item_id, needs_item_id) VALUES (12, 'Espíritu del Gigante', 'Fuimos los primeros... plantamos el bosque como jardín. El príncipe lo corrompió con su dolor. Mi pico puede abrir caminos que la oscuridad cerró. Tómalo.', 117, null, null)").run();
db.prepare("INSERT INTO npcs (id, name, dialogue, scene_id, gives_item_id, needs_item_id) VALUES (13, 'Gusano de Cristal Manso', 'El gusano más grande te observa con ojos de prisma. No es hostil — inclina su cabeza cristalina como un perro curioso. Si le ofreces algo orgánico, te dejará pasar.', 116, null, 11)").run();
console.log("2 NPCs added (12, 13)");

// --- CONNECTIONS ---
const conns = [
  // Access from Loc 81 (Jardín de Estatuas) south -> 111
  { from: 81, dir: "south", to: 111, req: null, msg: null },
  { from: 111, dir: "north", to: 81, req: null, msg: null },
  // Internal
  { from: 111, dir: "south", to: 112, req: null, msg: null },
  { from: 112, dir: "north", to: 111, req: null, msg: null },
  { from: 112, dir: "east", to: 113, req: null, msg: null },
  { from: 112, dir: "west", to: 114, req: null, msg: null },
  { from: 112, dir: "south", to: 115, req: null, msg: null },
  { from: 113, dir: "west", to: 112, req: null, msg: null },
  { from: 113, dir: "south", to: 116, req: null, msg: null },
  { from: 114, dir: "east", to: 112, req: null, msg: null },
  { from: 114, dir: "south", to: 118, req: null, msg: null },
  { from: 115, dir: "north", to: 112, req: null, msg: null },
  { from: 115, dir: "east", to: 116, req: null, msg: null },
  { from: 115, dir: "south", to: 117, req: null, msg: null },
  { from: 116, dir: "west", to: 115, req: null, msg: null },
  { from: 116, dir: "north", to: 113, req: null, msg: null },
  { from: 116, dir: "south", to: 119, req: null, msg: null },
  { from: 117, dir: "north", to: 115, req: null, msg: null },
  { from: 117, dir: "east", to: 119, req: null, msg: null },
  { from: 117, dir: "south", to: 120, req: null, msg: null },
  { from: 118, dir: "north", to: 114, req: null, msg: null },
  { from: 118, dir: "east", to: 119, req: null, msg: null },
  { from: 119, dir: "west", to: 118, req: null, msg: null },
  { from: 119, dir: "north", to: 116, req: null, msg: null },
  { from: 119, dir: "south", to: 120, req: null, msg: null },
  { from: 120, dir: "north", to: 117, req: null, msg: null },
  { from: 120, dir: "east", to: 119, req: null, msg: null },
];

const insertConn = db.prepare("INSERT OR IGNORE INTO scene_connections (from_scene_id, direction, to_scene_id, required_item_id, blocked_message) VALUES (?, ?, ?, ?, ?)");
const seedConns = db.transaction(() => {
  for (const c of conns) insertConn.run(c.from, c.dir, c.to, c.req, c.msg);
});
seedConns();
console.log(`${conns.length} connections added`);

db.close();
console.log("Done! Minas de Cristal expansion complete.");
