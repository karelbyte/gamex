import { scenes } from "../prisma/data/scenes";
import { items } from "../prisma/data/items";
import { npcs } from "../prisma/data/npcs";
import { connections } from "../prisma/data/connections";
import { altDescriptions } from "../prisma/data/alt-descriptions";
import { sceneImages } from "../prisma/data/scene-images";
import fs from "fs";
import path from "path";

const seedData = { scenes, items, npcs, connections, altDescriptions, sceneImages };
const outPath = path.join(process.cwd(), "prisma", "data", "seed-data.json");
fs.writeFileSync(outPath, JSON.stringify(seedData, null, 2));
console.log(`Seed JSON written to ${outPath}`);
