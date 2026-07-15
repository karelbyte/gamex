import Database from "better-sqlite3";

const db = new Database("data/gamex.db");

// Create alt descriptions table
db.exec(`
  CREATE TABLE IF NOT EXISTS scene_alt_descriptions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    scene_id INTEGER NOT NULL,
    condition_type TEXT NOT NULL,
    condition_item_id INTEGER,
    description TEXT NOT NULL,
    FOREIGN KEY (scene_id) REFERENCES scenes(id)
  );
`);

// Insert alternative descriptions
const insert = db.prepare("INSERT INTO scene_alt_descriptions (scene_id, condition_type, condition_item_id, description) VALUES (?, ?, ?, ?)");

const alts = [
  // has_item = player has the item -> show this description
  // not_has_item = player does NOT have the item -> show this description (override default)
  [31, "has_item", 2, "La llama azul revela cristales en las paredes que reflejan la luz como un cielo estrellado subterráneo. Los huesos en el suelo crujen bajo tus pies. La cueva se extiende más allá de lo que la luz alcanza."],
  [31, "not_has_item", 2, "La oscuridad es total. No puedes ver tu propia mano. Algo respira dentro. Necesitas una fuente de luz para explorar este lugar."],
  [35, "has_item", 3, "El lago es un espejo perfecto. El espíritu te mira sin ojos. Tu amuleto de hueso brilla — el espíritu asiente y te deja pasar en paz."],
  [35, "not_has_item", 3, "El lago es un espejo perfecto. Un espíritu translúcido flota sobre la superficie. Te mira con ojos vacíos y hambrientos. Sin protección, este lugar es tu tumba."],
  [45, "has_item", 5, "Levantas el espejo roto. La Gorgona se ve a sí misma y grita — un sonido que rompe más espejos. Se retira a las sombras, furiosa pero impotente. El camino queda libre."],
  [45, "not_has_item", 5, "Las estatuas de piedra te rodean con expresiones de terror. En las sombras, serpientes sisean. La Gorgona avanza — si la miras, serás piedra. Necesitas algo para reflejar su mirada."],
  [50, "has_item", 6, "Tocas la flauta de hueso. La melodía es triste, antigua. El Guardián baja la espada lentamente, como recordando algo. Se hace a un lado y la luz de sus ojos se apaga un momento — como lágrimas de fuego."],
  [50, "not_has_item", 6, "El Guardián levanta su espada flamígera. Es una armadura sin cuerpo, sostenida por una voluntad antigua. No puedes pasar por la fuerza. Algo lo calmaría... una melodía quizás."],
  [55, "has_item", 7, "Viertes la Sangre de Luna en la depresión. La puerta suspira — un sonido orgánico y perturbador. Las venas rojas brillan intensamente y la piedra se abre como una herida."],
  [55, "not_has_item", 7, "La puerta pulsa como algo vivo. La depresión en forma de gota pide algo. Los árboles se inclinan hacia ella como adorándola. No hay forma de abrirla sin lo que pide."],
  [60, "has_item", 8, "Presentas la Corona de Espinas. El Rey Duende se levanta — sus ojos brillan. 'La corona del Rey Antiguo... Entonces eres digno.' Se inclina y te abre el camino."],
  [60, "not_has_item", 8, "El Rey Duende te mira con desprecio. '¿Qué eres tú para presentarte sin tributo ante un rey?' Sus guardias levantan lanzas de hueso. No te dejará pasar sin prueba de respeto."],
  [85, "has_item", 12, "La Llave de Plata encaja perfectamente. La reja se abre con un sonido musical — como una nota de arpa. Las gárgolas cierran los ojos, como dándote la bienvenida."],
  [85, "not_has_item", 12, "La reja no cede. La cerradura de plata brilla burlándose de tus intentos. Las gárgolas te miran con sonrisas pétreas. La torre se alza imposible detrás."],
  [90, "has_item", 13, "El Manto de Sombras te envuelve en oscuridad. Los Centinelas miran a través de ti — eres invisible, eres sombra, eres nada. Pasas entre ellos como un fantasma."],
  [90, "not_has_item", 13, "Los Centinelas cobran vida al detectarte. Sus ojos se encienden rojos y las espadas apuntan a tu garganta. Son demasiados. No puedes pasar sin ser invisible."],
  [100, "has_item", 14, "Elara está aquí. Las cadenas de sombra la atan. Levantas la Espada de Cristal — corta las cadenas como si fueran humo. Pero sus ojos abiertos no te ven. Necesitas algo más para despertarla."],
  [100, "not_has_item", 14, "Elara está aquí. Dormida con los ojos abiertos — un sueño maldito. Cadenas de sombra la atan a la torre. No puedes romperlas con las manos. Necesitas algo que corte la oscuridad."],
];

const seedAlts = db.transaction(() => {
  for (const alt of alts) {
    insert.run(alt[0], alt[1], alt[2], alt[3]);
  }
});
seedAlts();

console.log(`${alts.length} alt descriptions added`);
db.close();
