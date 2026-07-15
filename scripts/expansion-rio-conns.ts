import Database from "better-sqlite3";

const db = new Database("data/gamex.db");

// Loc 79 (Patio de Armas) - description mentions "un pozo en el centro con cadenas que bajan"
// Check free directions
const conns79 = db.prepare("SELECT direction FROM scene_connections WHERE from_scene_id = 79").all() as { direction: string }[];
const free79 = ["north","south","east","west"].filter(d => !conns79.map(c => c.direction).includes(d));
console.log("Scene 79 free:", free79);

// Also check 127 (Isla de Huesos) - will need connection to 40 (Precipicio) as shortcut
const conns40 = db.prepare("SELECT direction FROM scene_connections WHERE from_scene_id = 40").all() as { direction: string }[];
const free40 = ["north","south","east","west"].filter(d => !conns40.map(c => c.direction).includes(d));
console.log("Scene 40 free:", free40);

db.close();
