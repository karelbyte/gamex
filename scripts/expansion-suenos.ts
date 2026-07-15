import Database from "better-sqlite3";

const db = new Database("data/gamex.db");

// Check scene 98 free directions
const conns98 = db.prepare("SELECT direction FROM scene_connections WHERE from_scene_id = 98").all() as { direction: string }[];
const free98 = ["north","south","east","west"].filter(d => !conns98.map(c => c.direction).includes(d));
console.log("Scene 98 free:", free98);

// --- SCENES 131-140 ---
const scenes = [
  { id: 131, name: "Entrada al Sueño", description: "Cruzas un espejo que no refleja — y el mundo cambia. Los colores se invierten: el cielo es verde, la tierra es azul. Todo flota ligeramente. Estás dentro de un sueño. El sueño de Elara.", zone: 10 },
  { id: 132, name: "Campo de Flores Parlantes", description: "Flores enormes de colores imposibles susurran recuerdos de Elara. 'Su primera risa...' 'El día que bailó...' 'Cuando él la vio por primera vez...' Cada flor guarda un momento feliz robado.", zone: 10 },
  { id: 133, name: "Cielo Caminable", description: "Caminas sobre nubes sólidas como algodón. Debajo ves el bosque entero como un mapa — cada locación que visitaste, diminuta. Arriba, estrellas que parpadean como ojos. La perspectiva de un dios dormido.", zone: 10 },
  { id: 134, name: "Casa de la Infancia", description: "La casa de Elara cuando era niña. Todo es perfecto: jardín florecido, olor a pan, risas infantiles. Pero las esquinas se difuminan. Es un recuerdo, no un lugar. En una mesa, algo brilla con calidez real.", zone: 10 },
  { id: 135, name: "Baile Eterno", description: "Un salón de baile donde figuras sin rostro danzan un vals infinito. La música te jala — quiere que te unas. Que bailes para siempre. Que olvides por qué viniste. La trampa más hermosa del Señor.", zone: 10 },
  { id: 136, name: "Espejo del Tiempo", description: "Un espejo gigante que no muestra tu reflejo — muestra tu futuro si no rescatas a Elara. Te ves viejo, solo, el bosque consumiéndote. Te ves convirtiéndote en sombra. Motivación para seguir.", zone: 10 },
  { id: 137, name: "Biblioteca Infinita", description: "Estantes que se extienden hasta el infinito. Cada libro contiene un posible final para esta historia. Algunos felices, muchos trágicos. Un bibliotecario sin rostro ordena destinos como si fueran ficción.", zone: 10 },
  { id: 138, name: "Jardín Marchito", description: "Aquí las pesadillas de Elara se manifiestan. Flores marchitas con dientes. Árboles que susurran insultos. El cielo es rojo sangre. Todo lo que ella teme tiene forma aquí. Su dolor hecho paisaje.", zone: 10 },
  { id: 139, name: "Trono de Espinas Soñado", description: "Elara — una versión onírica de ella — sentada en un trono de espinas. Ojos abiertos pero no te ve. 'No quiero despertar', murmura. 'Aquí no duele.' La prisión que eligió ella misma dentro del sueño.", zone: 10 },
  { id: 140, name: "Corazón del Sueño", description: "Un cristal flotante que pulsa como un corazón. Es lo que mantiene el sueño vivo. Si lo tomas, el sueño se debilita — las cadenas de Elara en el mundo real se aflojan. El poder de romper desde dentro.", zone: 10 },
];

const insertScene = db.prepare("INSERT INTO scenes (id, name, description, zone) VALUES (?, ?, ?, ?)");
const seedScenes = db.transaction(() => {
  for (const s of scenes) insertScene.run(s.id, s.name, s.description, s.zone);
});
seedScenes();
console.log("10 scenes added (131-140)");

// --- ITEMS ---
db.prepare("INSERT INTO items (id, name, emoji, description, scene_id) VALUES (23, 'Cristal del Despertar', '💎', 'El corazón del sueño de Elara. Su poder puede despertar un alma dormida — alternativa a las Lágrimas.', 140)").run();
db.prepare("INSERT INTO items (id, name, emoji, description, scene_id) VALUES (24, 'Memoria Feliz', '✨', 'Un recuerdo cálido materializado de la infancia de Elara. Si lo llevas al rescate, ella sonreirá al despertar.', 134)").run();
console.log("2 items added (23, 24)");

// --- NPCs ---
db.prepare("INSERT INTO npcs (id, name, dialogue, scene_id, gives_item_id, needs_item_id) VALUES (17, 'Elara Soñada', 'No quiero despertar. Aquí no hay dolor. Aquí él no puede herirme. ¿Por qué quieres sacarme de aquí? ...Pero tus ojos son amables. Quizás afuera no sea tan terrible.', 139, null, null)").run();
db.prepare("INSERT INTO npcs (id, name, dialogue, scene_id, gives_item_id, needs_item_id) VALUES (18, 'Bibliotecario Sin Rostro', 'El bibliotecario pasa páginas con dedos de humo. Cada libro es un final posible. Te muestra uno: el final donde la perdonas a ella por no haber luchado. Cierra el libro. Ya decidirás.', 137, null, null)").run();
console.log("2 NPCs added (17, 18)");

// --- CONNECTIONS ---
const conns = [
  // Access from scene 98 east -> 131 (Jardín Superior has "east" free)
  { from: 98, dir: "east", to: 131, req: null, msg: null },
  { from: 131, dir: "west", to: 98, req: null, msg: null },
  // Internal
  { from: 131, dir: "north", to: 132, req: null, msg: null },
  { from: 131, dir: "east", to: 136, req: null, msg: null },
  { from: 132, dir: "south", to: 131, req: null, msg: null },
  { from: 132, dir: "north", to: 133, req: null, msg: null },
  { from: 132, dir: "east", to: 134, req: null, msg: null },
  { from: 133, dir: "south", to: 132, req: null, msg: null },
  { from: 133, dir: "east", to: 135, req: null, msg: null },
  { from: 134, dir: "west", to: 132, req: null, msg: null },
  { from: 134, dir: "north", to: 135, req: null, msg: null },
  { from: 134, dir: "east", to: 138, req: null, msg: null },
  { from: 135, dir: "south", to: 134, req: null, msg: null },
  { from: 135, dir: "west", to: 133, req: null, msg: null },
  { from: 135, dir: "east", to: 137, req: null, msg: null },
  { from: 136, dir: "west", to: 131, req: null, msg: null },
  { from: 136, dir: "north", to: 138, req: null, msg: null },
  { from: 137, dir: "west", to: 135, req: null, msg: null },
  { from: 137, dir: "south", to: 139, req: null, msg: null },
  { from: 138, dir: "west", to: 134, req: null, msg: null },
  { from: 138, dir: "south", to: 136, req: null, msg: null },
  { from: 138, dir: "east", to: 139, req: null, msg: null },
  { from: 139, dir: "west", to: 138, req: null, msg: null },
  { from: 139, dir: "north", to: 137, req: null, msg: null },
  { from: 139, dir: "east", to: 140, req: null, msg: null },
  { from: 140, dir: "west", to: 139, req: null, msg: null },
];

const insertConn = db.prepare("INSERT OR IGNORE INTO scene_connections (from_scene_id, direction, to_scene_id, required_item_id, blocked_message) VALUES (?, ?, ?, ?, ?)");
const seedConns = db.transaction(() => {
  for (const c of conns) insertConn.run(c.from, c.dir, c.to, c.req, c.msg);
});
seedConns();
console.log(`${conns.length} connections added`);

db.close();
console.log("Done! Jardín de los Sueños expansion complete.");
