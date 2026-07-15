"use client";

import { useState, useEffect } from "react";
import { signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

type Ending = "none" | "forgive" | "condemn";

export default function VictoryScreen({ visitedCount }: { visitedCount: number }) {
  const [ending, setEnding] = useState<Ending>("none");

  // Fire confetti when ending is chosen
  useEffect(() => {
    if (ending === "none") return;

    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ending === "forgive"
      ? ["#a78bfa", "#c4b5fd", "#fbbf24", "#34d399"]
      : ["#6b7280", "#9ca3af", "#4b5563"];

    function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    }
    frame();
  }, [ending]);

  return (
    <motion.div
      className="flex flex-1 flex-col items-center justify-center px-4 text-center space-y-6 max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div
        className="fixed inset-0 bg-cover bg-center opacity-30 -z-10"
        style={{ backgroundImage: "url('/assets/scene-100.png')" }}
      />
      <div className="fixed inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/80 -z-10" />

      <motion.h1
        className="text-4xl font-bold font-[family-name:var(--font-gothic)] text-zinc-100"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Has Rescatado a Elara
      </motion.h1>

      <motion.p
        className="text-lg text-zinc-300 max-w-lg leading-relaxed"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Cortas las cadenas con la Espada de Cristal. Viertes las Lágrimas de los Olvidados sobre sus labios. Elara parpadea — sus ojos te encuentran. &quot;Viniste&quot;, susurra.
      </motion.p>

      <AnimatePresence mode="wait">
        {ending === "none" && (
          <motion.div
            key="choice"
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <p className="text-sm text-zinc-400">
              La torre tiembla. El Señor de las Sombras grita en algún lugar abajo — un grito que es también un llanto. Fue un príncipe que amó demasiado. Elara te mira y pregunta:
            </p>
            <p className="text-zinc-200 italic">&quot;¿Qué hacemos con él?&quot;</p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={() => setEnding("forgive")}
                className="px-5 py-3 bg-purple-950/50 border border-purple-700 text-purple-200 rounded-lg text-sm hover:bg-purple-900/50 transition-colors"
              >
                Perdonarlo — romper su maldición
              </button>
              <button
                onClick={() => setEnding("condemn")}
                className="px-5 py-3 bg-zinc-800 border border-zinc-600 text-zinc-200 rounded-lg text-sm hover:bg-zinc-700 transition-colors"
              >
                Dejarlo — que pague por lo que hizo
              </button>
            </div>
          </motion.div>
        )}

        {ending === "forgive" && (
          <motion.div
            key="forgive"
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-zinc-300 leading-relaxed max-w-lg">
              Bajas las escaleras con Elara. El Señor de las Sombras está arrodillado, un hombre otra vez — viejo, frágil, llorando. &quot;Perdóname&quot;, dice. Elara le toca el hombro. La oscuridad se desprende de él como ceniza. El bosque respira por primera vez en siglos. Los árboles se enderezan. La niebla se disipa. Amanece.
            </p>
            <p className="text-sm text-purple-300 italic">
              Final: El Perdón — El bosque renace.
            </p>
          </motion.div>
        )}

        {ending === "condemn" && (
          <motion.div
            key="condemn"
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-zinc-300 leading-relaxed max-w-lg">
              Sales de la torre con Elara sin mirar atrás. El Señor de las Sombras aúlla — la torre se desmorona sobre él. El bosque sigue oscuro, pero un camino de luz se abre ante ustedes, llevándolos de vuelta al mundo. Detrás, el bosque permanece maldito. Quizás para siempre. Quizás hasta que alguien regrese a perdonar.
            </p>
            <p className="text-sm text-zinc-400 italic">
              Final: La Condena — El bosque permanece maldito.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {ending !== "none" && (
        <motion.div
          className="space-y-3 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p className="text-sm text-zinc-500">
            {visitedCount}/100 locaciones exploradas
          </p>
          <button
            onClick={() => signOut({ redirectTo: "/" })}
            className="px-6 py-3 bg-zinc-800 border border-zinc-600 text-zinc-100 rounded-lg font-medium hover:bg-zinc-700 transition-colors"
          >
            Fin
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
