"use client";

import { useEffect, useState, useRef, useCallback } from "react";

export default function GameTimer() {
  const [seconds, setSeconds] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const secondsRef = useRef(0);

  // Load saved time
  useEffect(() => {
    fetch("/api/game/time")
      .then((r) => r.json())
      .then((data) => {
        setSeconds(data.playTime || 0);
        secondsRef.current = data.playTime || 0;
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, []);

  // Tick every second
  useEffect(() => {
    if (!loaded) return;
    intervalRef.current = setInterval(() => {
      setSeconds((s) => {
        secondsRef.current = s + 1;
        return s + 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [loaded]);

  // Save every 30 seconds
  useEffect(() => {
    if (!loaded) return;
    const saveInterval = setInterval(() => {
      fetch("/api/game/time", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ playTime: secondsRef.current }),
      });
    }, 30000);
    return () => clearInterval(saveInterval);
  }, [loaded]);

  // Save on page unload
  useEffect(() => {
    function handleUnload() {
      navigator.sendBeacon(
        "/api/game/time",
        JSON.stringify({ playTime: secondsRef.current })
      );
    }
    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, []);

  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const display = hours > 0
    ? `${hours}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
    : `${mins}:${secs.toString().padStart(2, "0")}`;

  return (
    <span className="text-xs text-zinc-500 tabular-nums" title="Tiempo jugado">
      🕐 {display}
    </span>
  );
}
