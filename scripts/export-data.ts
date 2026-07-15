import Database from "better-sqlite3";
import fs from "fs";

const db = new Database("data/gamex.db");

// Export scenes
const scenes = db.prepare("SELECT id, name, description, zone FROM scenes ORDER BY id").all();
const scenesTs = `export const scenes = ${JSON.stringify(scenes, null, 2).replace(/"([^"]+)":/g, "$1:")};\n`;
fs.writeFileSync("prisma/data/scenes.ts", scenesTs);
console.log(`Exported ${scenes.length} scenes`);

// Export items
const items = db.prepare("SELECT id, name, emoji, description, scene_id FROM items ORDER BY id").all() as any[];
const itemsMapped = items.map(i => ({ id: i.id, name: i.name, emoji: i.emoji, description: i.description, sceneId: i.scene_id }));
const itemsTs = `export const items = ${JSON.stringify(itemsMapped, null, 2).replace(/"([^"]+)":/g, "$1:")};\n`;
fs.writeFileSync("prisma/data/items.ts", itemsTs);
console.log(`Exported ${items.length} items`);

// Export npcs
const npcs = db.prepare("SELECT id, name, dialogue, scene_id, gives_item_id, needs_item_id FROM npcs ORDER BY id").all() as any[];
const npcsMapped = npcs.map(n => ({ id: n.id, name: n.name, dialogue: n.dialogue, sceneId: n.scene_id, givesItemId: n.gives_item_id, needsItemId: n.needs_item_id }));
const npcsTs = `export const npcs = ${JSON.stringify(npcsMapped, null, 2).replace(/"([^"]+)":/g, "$1:")};\n`;
fs.writeFileSync("prisma/data/npcs.ts", npcsTs);
console.log(`Exported ${npcs.length} npcs`);

// Export connections
const conns = db.prepare("SELECT from_scene_id, direction, to_scene_id, required_item_id, blocked_message FROM scene_connections ORDER BY from_scene_id, direction").all() as any[];
const connsMapped = conns.map(c => ({ fromSceneId: c.from_scene_id, direction: c.direction, toSceneId: c.to_scene_id, requiredItemId: c.required_item_id, blockedMessage: c.blocked_message }));
const connsTs = `export const connections = ${JSON.stringify(connsMapped, null, 2).replace(/"([^"]+)":/g, "$1:")};\n`;
fs.writeFileSync("prisma/data/connections.ts", connsTs);
console.log(`Exported ${conns.length} connections`);

// Export alt descriptions
const alts = db.prepare("SELECT scene_id, condition_type, condition_item_id, description FROM scene_alt_descriptions ORDER BY id").all() as any[];
const altsMapped = alts.map(a => ({ sceneId: a.scene_id, conditionType: a.condition_type, conditionItemId: a.condition_item_id, description: a.description }));
const altsTs = `export const altDescriptions = ${JSON.stringify(altsMapped, null, 2).replace(/"([^"]+)":/g, "$1:")};\n`;
fs.writeFileSync("prisma/data/alt-descriptions.ts", altsTs);
console.log(`Exported ${alts.length} alt descriptions`);

// Export image URLs
const imageUrls = db.prepare("SELECT id, image_url FROM scenes WHERE image_url IS NOT NULL ORDER BY id").all() as any[];
const urlsMapped = imageUrls.map(s => ({ id: s.id, imageUrl: s.image_url }));
const urlsTs = `export const sceneImages = ${JSON.stringify(urlsMapped, null, 2).replace(/"([^"]+)":/g, "$1:")};\n`;
fs.writeFileSync("prisma/data/scene-images.ts", urlsTs);
console.log(`Exported ${imageUrls.length} scene image URLs`);

db.close();
console.log("Done! All data exported to prisma/data/");
