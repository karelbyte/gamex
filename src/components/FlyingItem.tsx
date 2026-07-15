"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FlyingItemProps {
  itemId: number;
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  onComplete: () => void;
}

export default function FlyingItem({ itemId, startX, startY, targetX, targetY, onComplete }: FlyingItemProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 700);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed z-[100] pointer-events-none"
      initial={{ x: startX, y: startY, scale: 1, opacity: 1 }}
      animate={{ x: targetX, y: targetY, scale: 0.4, opacity: 0.6 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <img
        src={`/assets/item-${itemId}.png`}
        alt=""
        className="w-12 h-12 rounded-md"
      />
    </motion.div>
  );
}
