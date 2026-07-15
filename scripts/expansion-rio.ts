import Database from "better-sqlite3";

const db = new Database("data/gamex.db");

// Check scene 82 free directions
const conns82 = db.prepare("SELECT direction FROM scene_connections WHERE from_scene_id = 82").all() as { direction: string }[];
console.log("Scene 82 used:", conns82.map(c => c.direction));

// --- SCENES 121-130 ---
const scenes = [
  { id: 121, name: "Fondo del Pozo", description: "Caes en agua helada. La cadena del pozo cuelga arriba como un hilo de plata. Una corriente suave te empuja hacia un túnel lateral. Las paredes del pozo se abren a un sistema de cuevas que nadie ha visto en siglos.", zone: 9 },
  { id: 122, name: "Playa Subterránea", description: "Arena negra como obsidiana pulida. Hongos del tamaño de sombrillas brillan con luz azul. Una balsa de madera atada a una estalagmita espera pacientemente. El río fluye tranquilo hacia la oscuridad.", zone: 9 },
  { id: 123, name: "Rápidos Oscuros", description: "La corriente se vuelve violenta. El agua negra ruge entre rocas afiladas. Sin una balsa, serías arrastrado como una hoja. Con ella, es como montar un caballo salvaje de agua y espuma oscura.", zone: 9 },
  { id: 124, name: "Gruta de los Murciélagos", description: "Miles de murciélagos cuelgan del techo como un manto vivo. Algunos abren un ojo al sentirte. El guano cubre todo. Un pasaje estrecho entre la roca se abre al fondo — demasiado pequeño para los murciélagos.", zone: 9 },
  { id: 125, name: "Cascada Interior", description: "Agua cae desde cincuenta metros arriba con un rugido ensordecedor. Detrás de la cortina de agua, una cueva seca con grabados antiguos. Los grabados muestran una ruta — un mapa del río completo.", zone: 9 },
  { id: 126, name: "Lago Profundo", description: "El río se ensancha en un lago subterráneo tan claro que ves el fondo a cien metros. Allá abajo, algo brilla — ¿oro? ¿cristal? ¿un recuerdo? No puedes alcanzarlo sin nadar hacia las profundidades.", zone: 9 },
  { id: 127, name: "Isla de Huesos", description: "Una isla formada enteramente por huesos de prisioneros que no lograron escapar. Cráneos apilados como ladrillos. Entre los huesos, mensajes tallados: nombres, fechas, últimas palabras. Cientos de historias que terminaron aquí.", zone: 9 },
  { id: 128, name: "Compuertas Antiguas", description: "Un mecanismo de piedra enorme controla el flujo del río. Engranajes de roca tallada, palancas de hueso de gigante. Glifos brillan en las compuertas — el mecanismo aún funciona, solo necesita que alguien lo opere.", zone: 9 },
  { id: 129, name: "Salida al Bosque", description: "La luz natural golpea tus ojos después de la oscuridad. El río te escupe en una poza tranquila rodeada de helechos. Reconoces el lugar — estás cerca del Precipicio. Un atajo que ahorra horas de camino.", zone: 9 },
  { id: 130, name: "Cámara del Prisionero", description: "Una celda excavada en la roca con marcas de días contados — miles. En la pared, una carta tallada con un clavo: palabras de amor desesperado de un príncipe joven, prisionero de su propio padre, escribiendo a Elara.", zone: 9 },
];

const insertScene = db.prepare("INSERT INTO scenes (id, name, description, zone) VALUES (?, ?, ?, ?)");
const seedScenes = db.transaction(() => {
  for (const s of scenes) insertScene.run(s.id, s.name, s.description, s.zone);
});
seedScenes();
console.log("10 scenes added (121-130)");

// --- ITEMS ---
db.prepare("INSERT INTO items (id, name, emoji, description, scene_id) VALUES (21, 'Balsa', '🛶', 'Una balsa de madera resistente atada con cuerdas de raíz. Permite navegar el río subterráneo sin peligro.', 122)").run();
db.prepare("INSERT INTO items (id, name, emoji, description, scene_id) VALUES (22, 'Mensaje del Príncipe', '💌', 'Una carta de amor tallada en piedra. El príncipe era prisionero de su padre antes de volverse el Señor de las Sombras. Otra capa de tragedia.', 130)").run();
console.log("2 items added (21, 22)");

// --- NPCs ---
db.prepare("INSERT INTO npcs (id, name, dialogue, scene_id, gives_item_id, needs_item_id) VALUES (14, 'Prisionero Fantasma', 'Yo casi escapé... el río me llevó hasta aquí. La salida está al este, pasando las compuertas. Pero los rápidos te matarán sin una balsa. Hay una en la playa negra.', 127, null, null)").run();
db.prepare("INSERT INTO npcs (id, name, dialogue, scene_id, gives_item_id, needs_item_id) VALUES (15, 'Mecanismo Parlante', 'Los glifos se iluminan y una voz de piedra resuena: COMPUERTAS OPERATIVAS. DESTINO: BOSQUE EXTERIOR. PRECAUCIÓN: CORRIENTE ACTIVA. ¿ABRIR? Las compuertas se abren solas.', 128, null, null)").run();
console.log("2 NPCs added (14, 15)");

// --- CONNECTIONS ---
// Scene 82 has north, east, west used. "south" goes to 79. Need to check again...
// Actually 82 south->79 is used. Let me add a special "down" equivalent.
// Better: use the existing west connection from 82 to 85, and add 82 south to 121 replacing current
// Wait - let's check what 82 actually has

const connsAll = db.prepare("SELECT * FROM scene_connections WHERE from_scene_id = 82").all();
console.log("Scene 82 connections:", JSON.stringify(connsAll));

db.close();
