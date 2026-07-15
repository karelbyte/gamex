"use client";

import { useEffect, useState, useCallback } from "react";
import type { ReactNode } from "react";

interface MapNode {
  id: number;
  name: string;
  zone: number;
}

interface MapEdge {
  from_scene_id: number;
  direction: string;
  to_scene_id: number;
}

interface MapData {
  nodes: MapNode[];
  edges: MapEdge[];
  currentSceneId: number;
  blockedScenes: number[];
}

interface MiniMapProps {
  currentSceneId: number;
  visitedCount: number;
  headerRight?: ReactNode;
}

export default function MiniMap({ currentSceneId, visitedCount, headerRight }: MiniMapProps) {
  const [mapData, setMapData] = useState<MapData | null>(null);

  const fetchMap = useCallback(async () => {
    const res = await fetch("/api/game/map");
    if (res.ok) {
      setMapData(await res.json());
    }
  }, []);

  useEffect(() => {
    fetchMap();
  }, [fetchMap, currentSceneId, visitedCount]);

  if (!mapData || mapData.nodes.length === 0) {
    return (
      <div className="border border-zinc-800 rounded-lg p-3 h-full flex items-center justify-center">
        <p className="text-xs text-zinc-600">Mapa vacío</p>
      </div>
    );
  }

  const positions = calculatePositions(mapData.nodes, mapData.edges);

  const xs = Object.values(positions).map((p) => p.x);
  const ys = Object.values(positions).map((p) => p.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  const padding = 30;
  const cellSize = 40;
  const rangeX = maxX - minX || 1;
  const rangeY = maxY - minY || 1;
  const width = rangeX * cellSize + padding * 2;
  const height = rangeY * cellSize + padding * 2;

  function sx(x: number) {
    return padding + (x - minX) * cellSize;
  }
  function sy(y: number) {
    return padding + (y - minY) * cellSize;
  }

  const visitedIds = new Set(mapData.nodes.map((n) => n.id));
  const visibleEdges = mapData.edges.filter(
    (e) => visitedIds.has(e.from_scene_id) && visitedIds.has(e.to_scene_id)
  );

  return (
    <div className="border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900/50 flex flex-col h-full">
      <div className="p-2 border-b border-zinc-800 flex items-center justify-between">
        <p className="text-xs text-zinc-400 font-medium">🗺️ Mapa ({mapData.nodes.length})</p>
        {headerRight}
      </div>
      <div className="flex-1 overflow-auto p-1">
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${Math.max(width, 150)} ${Math.max(height, 150)}`}
          preserveAspectRatio="xMidYMid meet"
          className="block w-full h-full"
        >
          {visibleEdges.map((edge, i) => {
            const from = positions[edge.from_scene_id];
            const to = positions[edge.to_scene_id];
            if (!from || !to) return null;
            return (
              <line
                key={i}
                x1={sx(from.x)}
                y1={sy(from.y)}
                x2={sx(to.x)}
                y2={sy(to.y)}
                stroke="#3f3f46"
                strokeWidth={1}
              />
            );
          })}
          {mapData.nodes.map((node) => {
            const pos = positions[node.id];
            if (!pos) return null;
            const isCurrent = node.id === mapData.currentSceneId;
            const isBlocked = mapData.blockedScenes.includes(node.id);
            let fill = "#52525b";
            let stroke = "#71717a";
            if (isCurrent) { fill = "#a78bfa"; stroke = "#c4b5fd"; }
            else if (isBlocked) { fill = "#991b1b"; stroke = "#f87171"; }
            return (
              <g key={node.id}>
                <title>{node.name}</title>
                <circle
                  cx={sx(pos.x)}
                  cy={sy(pos.y)}
                  r={isCurrent ? 7 : 5}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={isCurrent ? 2 : 1}
                />
                {isCurrent && (
                  <circle
                    cx={sx(pos.x)}
                    cy={sy(pos.y)}
                    r={11}
                    fill="none"
                    stroke="#a78bfa"
                    strokeWidth={1}
                    opacity={0.4}
                  />
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

/**
 * Position nodes using ALL edges as constraints.
 * For each edge: if direction is "east", target must be to the RIGHT of source.
 * Uses iterative relaxation to resolve conflicts.
 */
function calculatePositions(
  nodes: MapNode[],
  edges: MapEdge[]
): Record<number, { x: number; y: number }> {
  const positions: Record<number, { x: number; y: number }> = {};
  if (nodes.length === 0) return positions;

  const nodeIds = new Set(nodes.map((n) => n.id));

  // Initialize all nodes at origin
  for (const node of nodes) {
    positions[node.id] = { x: 0, y: 0 };
  }

  // Direction vectors - east=right, west=left, north=up, south=down
  const dirVec: Record<string, { dx: number; dy: number }> = {
    east: { dx: 1, dy: 0 },
    west: { dx: -1, dy: 0 },
    north: { dx: 0, dy: -1 },
    south: { dx: 0, dy: 1 },
  };

  // Filter edges to only those between visited nodes
  const relevantEdges = edges.filter(
    (e) => nodeIds.has(e.from_scene_id) && nodeIds.has(e.to_scene_id)
  );

  // Iterative relaxation: apply constraints repeatedly
  for (let iter = 0; iter < 50; iter++) {
    let moved = false;
    for (const edge of relevantEdges) {
      const vec = dirVec[edge.direction];
      if (!vec) continue;

      const from = positions[edge.from_scene_id];
      const to = positions[edge.to_scene_id];

      // Target should be at from + vec direction
      const idealX = from.x + vec.dx;
      const idealY = from.y + vec.dy;

      // Move target toward ideal with damping
      const diffX = idealX - to.x;
      const diffY = idealY - to.y;

      if (Math.abs(diffX) > 0.01 || Math.abs(diffY) > 0.01) {
        to.x += diffX * 0.3;
        to.y += diffY * 0.3;
        moved = true;
      }
    }
    if (!moved) break;
  }

  // Round to grid for clean display
  for (const id of Object.keys(positions)) {
    positions[Number(id)].x = Math.round(positions[Number(id)].x * 2) / 2;
    positions[Number(id)].y = Math.round(positions[Number(id)].y * 2) / 2;
  }

  return positions;
}
