"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Item {
  id: number;
  name: string;
  emoji: string;
  description: string;
}

interface InventoryProps {
  items: Item[];
}

export default function Inventory({ items }: InventoryProps) {
  const [hoveredItem, setHoveredItem] = useState<Item | null>(null);

  return (
    <div className="border border-zinc-800 rounded-lg bg-zinc-900/50">
      <div className="p-2 border-b border-zinc-800">
        <span className="text-xs font-medium text-zinc-400">
          🎒 Inventario ({items.length})
        </span>
      </div>
      <div className="p-2 grid grid-cols-4 gap-2">
        {items.length === 0 ? (
          <p className="text-xs text-zinc-600 px-1 col-span-4">Vacío</p>
        ) : (
          items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: i * 0.05 }}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="w-full aspect-square rounded-md overflow-hidden border border-zinc-700 group-hover:border-zinc-500 transition-colors cursor-pointer">
                <img
                  src={`/assets/item-${item.id}.png`}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Tooltip fixed at bottom */}
      <AnimatePresence>
        {hoveredItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="p-2 border-t border-zinc-800 bg-zinc-900"
          >
            <p className="text-xs font-medium text-zinc-200">{hoveredItem.emoji} {hoveredItem.name}</p>
            <p className="text-xs text-zinc-400 mt-0.5">{hoveredItem.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
