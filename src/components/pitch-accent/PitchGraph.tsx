"use client";

// Pitch accent SVG graph supporting the four standard Japanese patterns:
// heiban (平板), atamadaka (頭高), nakadaka (中高), odaka (尾高).
// The component takes the mora list and a pattern type and draws a stylised
// high/low contour. V2 will support free-form arbitrary contours; V1 only the
// four canonical patterns plus auto-derived from a numeric pitch index.

export type PitchPattern = "heiban" | "atamadaka" | "nakadaka" | "odaka";

type Props = {
  /** Each entry is one mora (kana cluster). e.g. ["は","し"] for hashi. */
  moras: string[];
  pattern: PitchPattern;
  /** For nakadaka, which mora index drops AFTER (1-based, defaults to middle). */
  nakadakaDropAfter?: number;
  /** Width in px. Height is derived. */
  width?: number;
};

export function PitchGraph({
  moras,
  pattern,
  nakadakaDropAfter,
  width = 220,
}: Props) {
  const N = moras.length;
  if (N === 0) return null;

  const moraSpacing = 36;
  const padX = 16;
  const padTop = 12;
  const padBottom = 30;
  const high = padTop;
  const low = padTop + 24;
  const w = Math.max(width, padX * 2 + Math.max(N, 1) * moraSpacing);
  const h = padTop + 24 + padBottom;

  // Derive the per-mora pitch (high/low) for each pattern.
  // A trailing "particle" position represents the が that follows: if particle is
  // high, the pattern is heiban; if low after the last mora, odaka, etc.
  const points: ("H" | "L")[] = new Array(N + 1).fill("L");

  if (pattern === "heiban") {
    // First mora low, rest high (and particle stays high).
    for (let i = 0; i < N + 1; i++) points[i] = i === 0 ? "L" : "H";
  } else if (pattern === "atamadaka") {
    // First mora high, all others low (particle low).
    for (let i = 0; i < N + 1; i++) points[i] = i === 0 ? "H" : "L";
  } else if (pattern === "odaka") {
    // First low, mid+ high, particle low.
    for (let i = 0; i < N; i++) points[i] = i === 0 ? "L" : "H";
    points[N] = "L";
  } else if (pattern === "nakadaka") {
    const dropAfter = nakadakaDropAfter ?? Math.max(1, Math.floor(N / 2));
    for (let i = 0; i < N + 1; i++) {
      if (i === 0) points[i] = "L";
      else if (i <= dropAfter) points[i] = "H";
      else points[i] = "L";
    }
  }

  const xs = (i: number) => padX + i * moraSpacing;
  const ys = (p: "H" | "L") => (p === "H" ? high : low);

  // Build path string
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${xs(i)} ${ys(p)}`)
    .join(" ");

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      className="block"
      role="img"
      aria-label={`Pitch contour: ${pattern}`}
    >
      <line x1={padX - 4} y1={high} x2={w - padX + 4} y2={high} stroke="#e5e7eb" strokeDasharray="2 3" />
      <line x1={padX - 4} y1={low} x2={w - padX + 4} y2={low} stroke="#e5e7eb" strokeDasharray="2 3" />

      <path
        d={path}
        fill="none"
        stroke="#3F6FCF"
        strokeWidth={2.2}
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {points.map((p, i) => (
        <circle
          key={i}
          cx={xs(i)}
          cy={ys(p)}
          r={5}
          fill={i === N ? "#94a3b8" : "#3F6FCF"}
          stroke="white"
          strokeWidth={2}
        />
      ))}

      {moras.map((m, i) => (
        <text
          key={i}
          x={xs(i)}
          y={low + 22}
          textAnchor="middle"
          fontSize={14}
          fontFamily='"Noto Sans JP", system-ui, sans-serif'
          fill="#1f2937"
        >
          {m}
        </text>
      ))}
      <text
        x={xs(N)}
        y={low + 22}
        textAnchor="middle"
        fontSize={12}
        fontFamily='"Noto Sans JP", system-ui, sans-serif'
        fill="#94a3b8"
      >
        が
      </text>
    </svg>
  );
}
