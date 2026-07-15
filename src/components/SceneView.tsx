"use client";

import { motion } from "framer-motion";

interface SceneData {
  id: number;
  name: string;
  description: string;
  imageUrl: string | null;
  zone: number;
}

interface Item {
  id: number;
  name: string;
  emoji: string;
  description: string;
}

interface Npc {
  id: number;
  name: string;
  dialogue: string;
}

interface Direction {
  direction: string;
  toSceneId: number;
  toSceneName: string;
  blocked: boolean;
  blockedMessage: string | null;
}

interface SceneViewProps {
  scene: SceneData;
  npcs: Npc[];
  availableItems: Item[];
  directions: Direction[];
  onPickup: (itemId: number, event?: React.MouseEvent) => void;
  onNpcInteract: (npcId: number) => void;
  revisiting: boolean;
}

const DIRECTION_TEXT: Record<string, string> = {
  north: "Al norte",
  south: "Al sur",
  east: "Al este",
  west: "Al oeste",
};

export default function SceneView({ scene, npcs, availableItems, directions, onPickup, onNpcInteract, revisiting }: SceneViewProps) {
  return (
    <div className="space-y-4">
      {/* Scene Image */}
      <div className="relative w-full h-72 sm:h-96 rounded-lg overflow-hidden">
        {scene.imageUrl ? (
          <img
            src={scene.imageUrl}
            alt={scene.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
            <span className="text-zinc-600 text-sm">Loc {scene.id} — Sin imagen</span>
          </div>
        )}

        {/* Items overlay on image */}
        {availableItems.length > 0 && (
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
            {availableItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => onPickup(item.id, e)}
                className="flex items-center gap-2 px-2 py-1.5 bg-black/70 backdrop-blur-sm border border-amber-700/60 rounded-lg cursor-grab hover:bg-black/80 transition-colors"
                title={`Recoger: ${item.name}`}
              >
                <img
                  src={`/assets/item-${item.id}.png`}
                  alt={item.name}
                  className="w-8 h-8 rounded object-cover"
                />
                <span className="text-xs text-amber-300">{item.name}</span>
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Scene Name & Description */}
      <div>
        <h2 className="text-xl font-bold text-zinc-100 font-[family-name:var(--font-cinzel)]">{scene.name}</h2>
        {revisiting && (
          <p className="text-xs text-zinc-500 italic mt-1">Ya conoces este lugar...</p>
        )}
        <motion.p
          className="mt-2 text-zinc-300 leading-relaxed whitespace-pre-line"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {scene.description}
        </motion.p>
        {directions.length > 0 && (
          <motion.div
            className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {directions.map((dir) => (
              <p key={dir.direction} className="text-sm text-zinc-500 italic">
                {DIRECTION_TEXT[dir.direction]} {dir.blocked ? "algo bloquea el paso" : <>ves <span className="text-zinc-100 not-italic">{dir.toSceneName}</span></>}.
              </p>
            ))}
          </motion.div>
        )}
      </div>

      {/* NPCs */}
      {npcs.length > 0 && (
        <div className="space-y-2">
          {npcs.map((npc, i) => (
            <motion.button
              key={npc.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              onClick={() => onNpcInteract(npc.id)}
              className="w-full text-left p-3 bg-purple-950/30 border border-purple-800/50 rounded-lg hover:bg-purple-950/50 transition-colors cursor-pointer"
            >
              <p className="text-sm font-medium text-purple-300">{npc.name}</p>
              <p className="text-sm text-purple-200/80 mt-1 italic">
                &quot;{npc.dialogue}&quot;
              </p>
              <p className="text-xs text-purple-400 mt-1">Toca para interactuar</p>
            </motion.button>
          ))}
        </div>
      )}

    </div>
  );
}
