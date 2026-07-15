"use client";

interface Direction {
  direction: string;
  toSceneId: number;
  toSceneName: string;
  blocked: boolean;
  blockedMessage: string | null;
}

interface DirectionButtonsProps {
  directions: Direction[];
  onMove: (direction: string) => void;
  disabled: boolean;
}

const DIRECTION_LABELS: Record<string, string> = {
  north: "Norte ↑",
  south: "Sur ↓",
  east: "Este →",
  west: "Oeste ←",
};

const DIRECTION_ORDER = ["north", "west", "east", "south"];

export default function DirectionButtons({ directions, onMove, disabled }: DirectionButtonsProps) {
  const directionMap = new Map(directions.map((d) => [d.direction, d]));

  return (
    <div className="flex gap-2 justify-center flex-wrap">
      <DirectionBtn dir="north" data={directionMap.get("north")} onMove={onMove} disabled={disabled} />
      <DirectionBtn dir="south" data={directionMap.get("south")} onMove={onMove} disabled={disabled} />
      <DirectionBtn dir="east" data={directionMap.get("east")} onMove={onMove} disabled={disabled} />
      <DirectionBtn dir="west" data={directionMap.get("west")} onMove={onMove} disabled={disabled} />
    </div>
  );
}

function DirectionBtn({
  dir,
  data,
  onMove,
  disabled,
}: {
  dir: string;
  data: Direction | undefined;
  onMove: (direction: string) => void;
  disabled: boolean;
}) {
  if (!data) {
    return (
      <button
        disabled
        className="py-2 px-4 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-600 text-xs cursor-not-allowed"
      >
        {DIRECTION_LABELS[dir]}
      </button>
    );
  }

  const isBlocked = data.blocked;

  return (
    <button
      onClick={() => onMove(dir)}
      disabled={disabled}
      className={`  py-2 px-4 rounded-lg text-xs font-medium transition-colors ${
        isBlocked
          ? "bg-red-950/30 border border-red-800/50 text-red-400 hover:bg-red-950/50"
          : "bg-zinc-800 border border-zinc-700 text-zinc-200 hover:bg-zinc-700"
      } disabled:opacity-50`}
      title={isBlocked ? data.blockedMessage || "Bloqueado" : data.toSceneName}
    >
      {isBlocked ? "🔒 " : ""}
      {DIRECTION_LABELS[dir]}
      {!isBlocked && <span className="block text-[10px] text-zinc-400 font-normal mt-0.5">{data.toSceneName}</span>}
    </button>
  );
}
