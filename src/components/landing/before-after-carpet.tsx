"use client";

import { useId, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

const CORNERS = [
  undefined,
  "translate(600 0) scale(-1 1)",
  "translate(0 400) scale(1 -1)",
  "translate(600 400) scale(-1 -1)",
];

const SPARKLES = [
  { x: 112, y: 92, s: 1 },
  { x: 236, y: 306, s: 0.8 },
  { x: 196, y: 176, s: 0.55 },
  { x: 424, y: 112, s: 0.8 },
  { x: 486, y: 298, s: 1 },
];

function CarpetArt({ uid, worn = false }: { uid: string; worn?: boolean }) {
  const ref = (name: string) => `url(#${uid}-${name})`;

  return (
    <svg
      viewBox="0 0 600 400"
      className="block h-auto w-full"
      aria-hidden="true"
      style={worn ? { filter: "saturate(0.35) brightness(0.82) sepia(0.25)" } : undefined}
    >
      <defs>
        <pattern id={`${uid}-fringe`} width="22" height="6" patternUnits="userSpaceOnUse">
          <path d="M1 3h20" stroke="#E6D3B0" strokeWidth="2.2" strokeLinecap="round" />
        </pattern>
        <pattern id={`${uid}-border`} x="34" y="18" width="28" height="28" patternUnits="userSpaceOnUse">
          <rect width="28" height="28" fill="#26305B" />
          <path d="M14 3 25 14 14 25 3 14Z" fill="#D9A441" />
          <path d="M14 9 19 14 14 19 9 14Z" fill="#8C1F33" />
        </pattern>
        <pattern id={`${uid}-field`} x="62" y="46" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M14 10v8M10 14h8" stroke="#A8324A" strokeWidth="2" strokeLinecap="round" />
        </pattern>
        <filter id={`${uid}-blur`}>
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      {/* Fringe on both short ends */}
      <rect x="0" y="6" width="22" height="388" fill={ref("fringe")} />
      <rect x="578" y="6" width="22" height="388" fill={ref("fringe")} />

      {/* Body, border band, field */}
      <rect x="18" y="0" width="564" height="400" rx="5" fill="#8C1F33" />
      <rect x="26" y="8" width="548" height="384" rx="2" fill="none" stroke="#E6D3B0" strokeWidth="2.5" />
      <rect x="34" y="18" width="532" height="364" fill={ref("border")} />
      <rect x="62" y="46" width="476" height="308" fill="#8C1F33" />
      <rect x="62" y="46" width="476" height="308" fill={ref("field")} />
      <rect x="62" y="46" width="476" height="308" fill="none" stroke="#E6D3B0" strokeWidth="2.5" />

      {CORNERS.map((transform, i) => (
        <g key={i} transform={transform}>
          <path d="M62 46h78L62 108Z" fill="#26305B" stroke="#E6D3B0" strokeWidth="2" />
          <path d="M62 46h44L62 80Z" fill="#D9A441" />
        </g>
      ))}

      {/* Central medallion */}
      <path d="M128 200 108 186 88 200 108 214Z" fill="#D9A441" stroke="#E6D3B0" strokeWidth="2" />
      <path d="M472 200 492 186 512 200 492 214Z" fill="#D9A441" stroke="#E6D3B0" strokeWidth="2" />
      <path d="M300 70 472 200 300 330 128 200Z" fill="#26305B" stroke="#E6D3B0" strokeWidth="3" />
      <path d="M300 98 436 200 300 302 164 200Z" fill="#D9A441" />
      <path d="M300 122 404 200 300 278 196 200Z" fill="#8C1F33" stroke="#E6D3B0" strokeWidth="2" />
      <g transform="translate(300 200)">
        <rect x="-26" y="-26" width="52" height="52" fill="#26305B" />
        <rect x="-26" y="-26" width="52" height="52" fill="#26305B" transform="rotate(45)" />
        <circle r="13" fill="#D9A441" />
        <circle r="5" fill="#8C1F33" />
      </g>

      {worn ? (
        <>
          <rect x="18" y="0" width="564" height="400" rx="5" fill="#6F6250" opacity="0.28" />
          <g filter={ref("blur")} fill="#3F3222" opacity="0.5">
            <ellipse cx="430" cy="130" rx="46" ry="30" />
            <ellipse cx="500" cy="290" rx="34" ry="24" />
            <ellipse cx="350" cy="300" rx="28" ry="18" />
            <ellipse cx="200" cy="120" rx="40" ry="24" />
            <ellipse cx="150" cy="290" rx="30" ry="22" />
          </g>
        </>
      ) : (
        <g fill="#FFFDF7" className="motion-safe:animate-pulse">
          {SPARKLES.map(({ x, y, s }) => (
            <path
              key={`${x}-${y}`}
              transform={`translate(${x} ${y}) scale(${s})`}
              d="M0-14C1-4 4-1 14 0 4 1 1 4 0 14-1 4-4 1-14 0-4-1-1-4 0-14Z"
            />
          ))}
        </g>
      )}
    </svg>
  );
}

/** Drag-to-compare rug illustration: worn on the right, freshly washed on the left. */
export function BeforeAfterCarpet() {
  const uid = useId();
  const [position, setPosition] = useState(50);

  return (
    // The comparison is laid out left-to-right so the slider value maps directly to the split.
    <div dir="ltr" className="relative touch-pan-y select-none drop-shadow-2xl">
      <CarpetArt uid={`${uid}-before`} worn />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <CarpetArt uid={`${uid}-after`} />
      </div>

      <span className="absolute top-3 right-8 rounded-full bg-foreground/80 px-3.5 py-1 font-heading text-sm font-bold text-background">
        قبل
      </span>
      <span className="absolute top-3 left-8 rounded-full bg-card px-3.5 py-1 font-heading text-sm font-bold text-primary shadow">
        بعد
      </span>

      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label="قارني بين السجادة قبل وبعد الغسيل"
        className="peer absolute inset-0 z-10 size-full cursor-ew-resize opacity-0"
      />
      <div
        className="pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 bg-card shadow-[0_0_0_1px_rgb(0_0_0/0.1)] peer-focus-visible:[&>span]:ring-4 peer-focus-visible:[&>span]:ring-gold"
        style={{ left: `${position}%` }}
      >
        <span className="absolute top-1/2 left-1/2 flex size-12 -translate-1/2 items-center justify-center rounded-full bg-card text-primary shadow-lg">
          <ChevronsLeftRight className="size-6" aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}
