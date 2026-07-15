"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import SceneView from "./SceneView";
import DirectionButtons from "./DirectionButtons";
import Inventory from "./Inventory";
import MiniMap from "./MiniMap";
import VictoryScreen from "./VictoryScreen";
import SoundManager from "./SoundManager";
import FlyingItem from "./FlyingItem";
import GameTimer from "./GameTimer";

interface SceneData {
  id: number;
  name: string;
  description: string;
  imageUrl: string | null;
  zone: number;
}

interface Direction {
  direction: string;
  toSceneId: number;
  toSceneName: string;
  blocked: boolean;
  blockedMessage: string | null;
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

interface GameState {
  scene: SceneData;
  directions: Direction[];
  availableItems: Item[];
  npcs: Npc[];
  inventory: Item[];
  visitedScenes: number[];
  gameCompleted: boolean;
}

export default function GameClient({ userName }: { userName: string }) {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"info" | "error" | "success">("info");
  const [messageLog, setMessageLog] = useState<{ text: string; type: "info" | "error" | "success"; scene: string }[]>([]);
  const [logLoaded, setLogLoaded] = useState(false);
  const logEndRef = useRef<HTMLDivElement>(null);
  const logContainerRef = useRef<HTMLDivElement>(null);
  const [sceneKey, setSceneKey] = useState(0);
  const [moveDirection, setMoveDirection] = useState<string | null>(null);
  const [revisiting, setRevisiting] = useState(false);
  const [flyingItem, setFlyingItem] = useState<{ itemId: number; startX: number; startY: number } | null>(null);
  const inventoryRef = useRef<HTMLDivElement>(null);
  const [alert, setAlert] = useState<string | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  const fetchGameState = useCallback(async () => {
    try {
      const res = await fetch("/api/game/state");
      if (res.ok) {
        const data = await res.json();
        setGameState(data);
        setSceneKey((k) => k + 1);
      }
    } catch {
      showMessage("Error cargando el juego", "error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGameState();
    // Load message log from DB
    fetch("/api/game/log").then((r) => r.json()).then((data) => {
      if (data.log && data.log.length > 0) setMessageLog(data.log);
      setLogLoaded(true);
    }).catch(() => setLogLoaded(true));
  }, [fetchGameState]);

  // Save log to DB when it changes
  useEffect(() => {
    if (!logLoaded || messageLog.length === 0) return;
    fetch("/api/game/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ log: messageLog }),
    });
    // Auto-scroll log to bottom
    if (logContainerRef.current) {
      setTimeout(() => {
        if (logContainerRef.current) {
          logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
        }
      }, 100);
    }
  }, [messageLog, logLoaded]);

  // Keyboard controls
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (loading || !gameState || showSettings || showConfirmReset) return;
      const keyMap: Record<string, string> = {
        ArrowUp: "north",
        ArrowDown: "south",
        ArrowRight: "east",
        ArrowLeft: "west",
        w: "north",
        s: "south",
        d: "east",
        a: "west",
        W: "north",
        S: "south",
        D: "east",
        A: "west",
      };
      const direction = keyMap[e.key];
      if (direction) {
        e.preventDefault();
        handleMove(direction);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [loading, gameState, showSettings, showConfirmReset]);

  function showMessage(text: string, type: "info" | "error" | "success" = "info") {
    setMessage(text);
    setMessageType(type);
    const sceneName = gameState?.scene.name || "";
    // Don't repeat the same message consecutively
    setMessageLog((prev) => {
      const last = prev[prev.length - 1];
      if (last && last.text === text && last.scene === sceneName) return prev;
      return [...prev, { text, type, scene: sceneName }];
    });
    setTimeout(() => setMessage(null), 4000);
  }

  async function handleMove(direction: string) {
    setLoading(true);
    setMoveDirection(direction);
    try {
      const res = await fetch("/api/game/move", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ direction }),
      });

      const data = await res.json();

      if (!res.ok) {
        showMessage(data.message || data.error, "error");
        setAlert(data.message || data.error);
        setTimeout(() => setAlert(null), 3000);
        setLoading(false);
        return;
      }

      if (data.died) {
        showMessage(data.message, "error");
        setAlert(data.message);
        setTimeout(() => setAlert(null), 4000);
        setLoading(false);
        return;
      }

      if (data.success === false && data.message) {
        showMessage(data.message, "info");
        setAlert(data.message);
        setTimeout(() => setAlert(null), 3000);
        await fetchGameState();
        return;
      }

      setRevisiting(!data.firstVisit);
      await fetchGameState();
    } catch {
      showMessage("Error al moverse", "error");
      setLoading(false);
    }
  }

  async function handlePickup(itemId: number, event?: React.MouseEvent) {
    const startX = event?.clientX ?? 0;
    const startY = event?.clientY ?? 0;

    try {
      const res = await fetch("/api/game/pickup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemId }),
      });

      const data = await res.json();

      if (res.ok) {
        // Trigger flying animation
        setFlyingItem({ itemId, startX, startY });
        showMessage(`Recogiste: ${data.item.emoji} ${data.item.name}`, "success");
        await fetchGameState();
      } else {
        showMessage(data.error, "error");
      }
    } catch {
      showMessage("Error al recoger objeto", "error");
    }
  }

  async function handleNpcInteract(npcId: number) {
    try {
      const res = await fetch("/api/game/npc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ npcId }),
      });

      const data = await res.json();
      showMessage(data.message, data.traded ? "success" : "info");
      if (data.traded) {
        await fetchGameState();
      }
    } catch {
      showMessage("Error al interactuar", "error");
    }
  }

  if (loading && !gameState) {
    return (
      <motion.div
        className="flex flex-1 items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <p className="text-zinc-400 animate-pulse">Entrando al bosque...</p>
      </motion.div>
    );
  }

  if (!gameState) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <p className="text-red-400">Error cargando el juego</p>
      </div>
    );
  }

  if (gameState.gameCompleted) {
    return <VictoryScreen visitedCount={gameState.visitedScenes.length} />;
  }

  return (
    <motion.div
      className="flex flex-1 flex-col w-full px-6 py-4 gap-4 relative h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SoundManager
        currentSceneId={gameState.scene.id}
        visitedCount={gameState.visitedScenes.length}
        gameCompleted={gameState.gameCompleted}
      />
      {flyingItem && (
        <FlyingItem
          itemId={flyingItem.itemId}
          startX={flyingItem.startX}
          startY={flyingItem.startY}
          targetX={inventoryRef.current?.getBoundingClientRect().left ?? 100}
          targetY={inventoryRef.current?.getBoundingClientRect().top ?? 100}
          onComplete={() => setFlyingItem(null)}
        />
      )}

      {/* Toast */}
      <AnimatePresence>
        {alert && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-lg text-sm bg-zinc-900 text-amber-300 border border-amber-800/50 shadow-lg max-w-md text-center"
          >
            {alert}
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/assets/bs-init.png')" }}
      />
      <div className="fixed inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/90 -z-10" />

      {/* Settings modal */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 w-full max-w-sm space-y-4"
            >
              <h2 className="text-lg font-bold font-[family-name:var(--font-cinzel)]">Configuración</h2>
              <p className="text-sm text-zinc-400">Jugador: {userName}</p>
              <p className="text-sm text-zinc-400">Progreso: {gameState.visitedScenes.length}/100 escenas</p>
              <hr className="border-zinc-700" />
              <div className="space-y-3">
                <button
                  onClick={() => setShowConfirmReset(true)}
                  className="w-full py-2 px-4 bg-red-950/50 border border-red-800 rounded-lg text-sm text-red-400 hover:bg-red-950 transition-colors"
                >
                  🗑️ Borrar rastro (reiniciar juego)
                </button>
                <button
                  onClick={() => setShowSettings(false)}
                  className="w-full py-2 px-4 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confirm reset modal */}
      <AnimatePresence>
        {showConfirmReset && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zinc-900 border border-red-800 rounded-lg p-6 w-full max-w-xs space-y-4 text-center"
            >
              <p className="text-lg font-bold text-red-400">¿Estás seguro?</p>
              <p className="text-sm text-zinc-400">
                Esto borrará todo tu progreso. Empezarás desde el inicio del bosque.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowConfirmReset(false)}
                  className="flex-1 py-2 px-3 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={async () => {
                    await fetch("/api/game/reset", { method: "POST" });
                    setShowConfirmReset(false);
                    setShowSettings(false);
                    setMessageLog([]);
                    setLoading(true);
                    await fetchGameState();
                  }}
                  className="flex-1 py-2 px-3 bg-red-900 border border-red-700 rounded-lg text-sm text-red-200 hover:bg-red-800 transition-colors"
                >
                  Borrar todo
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Message removed - using log instead */}

      {/* 3-column layout: Inventory | Scene | Map */}
      <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr_350px] gap-4 flex-1 min-h-0">
        {/* Left: Inventory + Message Log */}
        <motion.div
          className="order-3 lg:order-1 overflow-hidden flex flex-col gap-3 h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <div>
            <h1 className="text-lg font-medium text-zinc-400 font-[family-name:var(--font-cinzel)]">
              El Bosque de las Sombras
            </h1>
            <p className="text-xs text-zinc-600">
              {userName} — Zona {gameState.scene.zone} — {gameState.visitedScenes.length}/150 exploradas
            </p>
          </div>
          <div ref={inventoryRef} className="shrink-0">
            <Inventory items={gameState.inventory} />
          </div>
          {messageLog.length > 0 && (
            <div className="border border-zinc-800 rounded-lg bg-zinc-900/50 p-2 flex flex-col overflow-hidden" style={{ maxHeight: "calc(100vh - 350px)" }}>
              <p className="text-xs font-medium text-zinc-400 mb-1 shrink-0">📜 Registro</p>
              <div ref={logContainerRef} className="overflow-y-auto space-y-1.5">
                {messageLog.map((msg, i) => (
                  <div key={i} className="text-xs">
                    <span className="text-zinc-200">[{msg.scene}]</span>{" "}
                    <span className={
                      msg.type === "error"
                        ? "text-amber-400"
                        : msg.type === "success"
                        ? "text-green-400"
                        : "text-zinc-400"
                    }>
                      {msg.text}
                    </span>
                  </div>
                ))}
                <div ref={logEndRef} />
              </div>
            </div>
          )}
        </motion.div>

        {/* Center: Scene + Directions */}
        <div className="order-1 lg:order-2 flex flex-col h-full min-h-0">
          <div className="flex-1 overflow-y-auto space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={sceneKey}
                initial={{ opacity: 0, x: moveDirection === "west" ? -30 : moveDirection === "east" ? 30 : 0, y: moveDirection === "north" ? -20 : moveDirection === "south" ? 20 : 0 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <SceneView
                  scene={gameState.scene}
                  npcs={gameState.npcs}
                  availableItems={gameState.availableItems}
                  directions={gameState.directions}
                  onPickup={handlePickup}
                  onNpcInteract={handleNpcInteract}
                  revisiting={revisiting}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="pt-3">
            <DirectionButtons
              directions={gameState.directions}
              onMove={handleMove}
              disabled={loading}
            />
          </div>
        </div>

        {/* Right: Map — stretches full height */}
        <motion.div
          className="order-2 lg:order-3 min-h-0 flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <MiniMap
            currentSceneId={gameState.scene.id}
            visitedCount={gameState.visitedScenes.length}
            headerRight={
              <div className="flex items-center gap-3">
                <GameTimer />
                <button
                  onClick={() => setShowSettings(true)}
                  className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                  title="Configuración"
                >
                  ⚙️
                </button>
                <button
                  onClick={() => signOut({ redirectTo: "/" })}
                  className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  Salir
                </button>
              </div>
            }
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
