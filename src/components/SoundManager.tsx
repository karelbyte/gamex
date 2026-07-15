"use client";

import { useEffect, useRef } from "react";

// Scenes with monsters/creatures
const MONSTER_SCENES = [35, 44, 45, 50, 61, 90, 96];

interface SoundManagerProps {
  currentSceneId: number;
  visitedCount: number;
  gameCompleted: boolean;
}

export default function SoundManager({ currentSceneId, visitedCount, gameCompleted }: SoundManagerProps) {
  const bgRef = useRef<HTMLAudioElement | null>(null);
  const sfxRef = useRef<HTMLAudioElement | null>(null);
  const currentBgSrc = useRef<string>("");
  const hasInteracted = useRef(false);

  // Start background music on first user interaction
  useEffect(() => {
    function handleInteraction() {
      hasInteracted.current = true;
      if (bgRef.current) {
        bgRef.current.volume = 0.5;
        bgRef.current.play().catch(() => {});
      }
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
    }
    document.addEventListener("click", handleInteraction);
    document.addEventListener("keydown", handleInteraction);
    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
    };
  }, []);

  // Handle background music
  useEffect(() => {
    const targetSrc = gameCompleted ? "/assets/sounds/s2.mp3" : "/assets/sounds/s0.mp3";

    if (currentBgSrc.current !== targetSrc) {
      currentBgSrc.current = targetSrc;
      if (bgRef.current) {
        bgRef.current.src = targetSrc;
        bgRef.current.loop = !gameCompleted;
        if (hasInteracted.current) {
          bgRef.current.play().catch(() => {});
        }
      }
    }
  }, [gameCompleted]);

  // Handle SFX: monster scenes or every 10 visits
  useEffect(() => {
    if (!hasInteracted.current) return;

    let sfxSrc: string | null = null;

    if (MONSTER_SCENES.includes(currentSceneId)) {
      sfxSrc = "/assets/sounds/garr.mp3";
    } else if (visitedCount > 0 && visitedCount % 10 === 0) {
      sfxSrc = "/assets/sounds/s1.mp3";
    }

    if (sfxSrc && sfxRef.current) {
      // Lower bg volume, play sfx, restore when done
      if (bgRef.current) bgRef.current.volume = 0.2;

      sfxRef.current.src = sfxSrc;
      sfxRef.current.play().catch(() => {});
      sfxRef.current.onended = () => {
        if (bgRef.current) bgRef.current.volume = 0.5;
      };
    }
  }, [currentSceneId, visitedCount]);

  return (
    <>
      <audio ref={bgRef} src="/assets/sounds/s0.mp3" loop />
      <audio ref={sfxRef} />
    </>
  );
}
