// "Constellation Field" — rank becomes light. Top orgs are bright stars in a
// dark sky; lower ranks dim points. Faint connective lines trace a constellation.
// Hover/focus a star to reveal name + focus; a full ranked list sits below.
import { useMemo, useState } from "react";
import { ORGS, CAUSE } from "./_data";

type StarPos = { x: number; y: number };

// Hand-tuned constellation positions (percent coords, 21 stars).
// Roughly descends: brightest cluster upper-center, dimmer scatter outward.
const POSITIONS: StarPos[] = [
  { x: 46, y: 34 }, // 1 ITER
  { x: 34, y: 42 }, // 2 CFS
  { x: 62, y: 44 }, // 3 Helion
  { x: 24, y: 28 }, // 4 TAE
  { x: 78, y: 22 }, // 5 LLNL
  { x: 55, y: 60 }, // 6 PPPL
  { x: 40, y: 66 }, // 7 Tokamak Energy
  { x: 16, y: 52 }, // 8 General Fusion
  { x: 82, y: 52 }, // 9 DOE Office of Science
  { x: 66, y: 72 }, // 10 Max Planck IPP
  { x: 10, y: 36 }, // 11 Xcimer
  { x: 88, y: 36 }, // 12 UKAEA
  { x: 28, y: 78 }, // 13 Fervo
  { x: 8, y: 68 }, // 14 Quaise
  { x: 78, y: 84 }, // 15 NLR
  { x: 50, y: 84 }, // 16 TerraPower
  { x: 92, y: 68 }, // 17 X-energy
  { x: 18, y: 14 }, // 18 Zap
  { x: 60, y: 12 }, // 19 Marvel
  { x: 38, y: 12 }, // 20 Proxima
  { x: 86, y: 14 }, // 21 EUROfusion
];

// Constellation edges among the top ranks (0-based indices).
const EDGES: [number, number][] = [
  [0, 1], [0, 2], [1, 3], [2, 4], [0, 5], [5, 6], [1, 7], [2, 8], [5, 9], [4, 11],
];

function starSize(rank: number) {
  if (rank <= 3) return 10;
  if (rank <= 6) return 7;
  if (rank <= 12) return 5;
  return 3.5;
}
function starGlow(rank: number) {
  if (rank <= 3) return "0 0 18px 4px rgba(255,255,255,0.55), 0 0 46px 10px rgba(255,255,255,0.18)";
  if (rank <= 6) return "0 0 12px 3px rgba(255,255,255,0.38)";
  if (rank <= 12) return "0 0 8px 2px rgba(255,255,255,0.24)";
  return "0 0 5px 1px rgba(255,255,255,0.16)";
}
function starOpacity(rank: number) {
  if (rank <= 3) return 1;
  if (rank <= 6) return 0.9;
  if (rank <= 12) return 0.72;
  return 0.55;
}

export function ConstellationField() {
  const [active, setActive] = useState<number | null>(null);

  const bgStars = useMemo(() => {
    // Deterministic faint background dust
    const pts: { x: number; y: number; o: number; s: number }[] = [];
    let seed = 37;
    const rnd = () => {
      seed = (seed * 16807) % 2147483647;
      return seed / 2147483647;
    };
    for (let i = 0; i < 90; i++) {
      pts.push({ x: rnd() * 100, y: rnd() * 100, o: 0.06 + rnd() * 0.16, s: rnd() < 0.85 ? 1 : 1.5 });
    }
    return pts;
  }, []);

  return (
    <section className="min-h-screen bg-black text-white py-16 px-6 relative overflow-hidden">
      <style>{`
        @keyframes cf-twinkle { 0%,100% { opacity: 1; } 50% { opacity: 0.6; } }
        @keyframes cf-rise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .cf-rise { animation: cf-rise 1.2s cubic-bezier(0.16,1,0.3,1) both; }
      `}</style>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="flex items-baseline justify-between mb-4 cf-rise">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">Vanguard Entities</span>
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/45">Ranked by impact · {ORGS.length}</span>
        </div>
        <div className="mb-10 cf-rise" style={{ animationDelay: "120ms" }}>
          <h2 className="text-2xl md:text-3xl font-sans font-extralight tracking-tight text-white">
            The lights advancing {CAUSE.name.toLowerCase()}
          </h2>
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mt-3">
            Brightness = impact rank · hover a star
          </p>
        </div>

        {/* Sky field */}
        <div
          className="relative border border-white/10 mb-px cf-rise"
          style={{ height: "560px", animationDelay: "240ms" }}
          onMouseLeave={() => setActive(null)}
        >
          {/* nebula wash */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 45% at 48% 34%, rgba(255,255,255,0.05), transparent 70%), radial-gradient(ellipse 40% 35% at 70% 70%, rgba(255,255,255,0.03), transparent 70%)",
            }}
          />
          {/* dust */}
          {bgStars.map((p, i) => (
            <span
              key={`d-${i}`}
              className="absolute rounded-full bg-white pointer-events-none"
              style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s, height: p.s, opacity: p.o }}
            />
          ))}
          {/* constellation lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
            {EDGES.map(([a, b], i) => (
              <line
                key={i}
                x1={POSITIONS[a].x} y1={POSITIONS[a].y}
                x2={POSITIONS[b].x} y2={POSITIONS[b].y}
                stroke="white"
                strokeWidth={active === a || active === b ? 0.22 : 0.1}
                strokeOpacity={active === a || active === b ? 0.5 : 0.18}
                vectorEffect="non-scaling-stroke"
                style={{ transition: "stroke-opacity 400ms" }}
              />
            ))}
          </svg>

          {/* stars */}
          {ORGS.map((org, i) => {
            const rank = i + 1;
            const pos = POSITIONS[i];
            const size = starSize(rank);
            const isActive = active === i;
            const labelBelow = pos.y < 55;
            const alignRight = pos.x > 70;
            const alignLeft = pos.x < 30;
            return (
              <a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute group outline-none"
                style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: "translate(-50%, -50%)", zIndex: isActive ? 30 : 10 }}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                aria-label={`${rank}. ${org.name} — ${org.focus}`}
              >
                {/* generous hit area */}
                <span className="absolute -inset-4" />
                <span
                  className="block rounded-full bg-white"
                  style={{
                    width: size,
                    height: size,
                    opacity: isActive ? 1 : starOpacity(rank),
                    boxShadow: isActive
                      ? "0 0 22px 6px rgba(255,255,255,0.6), 0 0 60px 14px rgba(255,255,255,0.2)"
                      : starGlow(rank),
                    animation: rank <= 6 ? `cf-twinkle ${3 + rank * 0.7}s ease-in-out infinite` : undefined,
                    transition: "box-shadow 400ms, opacity 400ms",
                  }}
                />
                {/* persistent rank + name for the top 6 */}
                {rank <= 6 && !isActive && (
                  <span
                    className="absolute whitespace-nowrap font-mono text-[10px] tracking-[0.2em] text-white/60 pointer-events-none"
                    style={{
                      top: labelBelow ? "calc(100% + 10px)" : "auto",
                      bottom: labelBelow ? "auto" : "calc(100% + 10px)",
                      left: alignRight ? "auto" : alignLeft ? "0" : "50%",
                      right: alignRight ? "0" : "auto",
                      transform: alignRight || alignLeft ? "none" : "translateX(-50%)",
                    }}
                  >
                    {String(rank).padStart(2, "0")} {org.name.toUpperCase()}
                  </span>
                )}
                {/* hover/focus card */}
                <span
                  className="absolute w-64 bg-black/95 border border-white/20 p-4 pointer-events-none transition-opacity duration-300"
                  style={{
                    opacity: isActive ? 1 : 0,
                    top: labelBelow ? "calc(100% + 14px)" : "auto",
                    bottom: labelBelow ? "auto" : "calc(100% + 14px)",
                    left: alignRight ? "auto" : alignLeft ? "-8px" : "50%",
                    right: alignRight ? "-8px" : "auto",
                    transform: alignRight || alignLeft ? "none" : "translateX(-50%)",
                  }}
                >
                  <span className="block font-mono text-[10px] tracking-[0.3em] text-white/45 mb-2">
                    RANK {String(rank).padStart(2, "0")}
                  </span>
                  <span className="block text-sm font-sans font-light tracking-tight text-white mb-1.5">
                    {org.name} <span className="text-white/50 text-xs align-super">↗</span>
                  </span>
                  <span className="block text-[11px] text-white/60 font-light leading-relaxed">{org.focus}</span>
                </span>
              </a>
            );
          })}

          {/* corner caption */}
          <div className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 pointer-events-none">
            {CAUSE.numeral} · {CAUSE.name}
          </div>
        </div>

        {/* Full ranked list */}
        <div className="border border-white/10 border-t-0 cf-rise" style={{ animationDelay: "360ms" }}>
          <div className="px-6 py-4 border-b border-white/10 flex items-baseline justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">Full register</span>
            <span className="font-mono text-[10px] tracking-[0.3em] text-white/40">01 — {String(ORGS.length).padStart(2, "0")}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {ORGS.map((org, i) => (
              <a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black px-6 py-4 hover:bg-white/[0.04] transition-colors duration-500 group block"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-white/45 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <div className="min-w-0">
                    <h3 className="text-xs font-mono tracking-[0.15em] text-white/80 group-hover:text-white transition-colors duration-500 mb-1 truncate">
                      {org.name}
                      <span className="ml-2 text-white/40 group-hover:text-white/70 transition-colors duration-500">↗</span>
                    </h3>
                    <p className="text-[11px] text-white/50 font-light leading-relaxed">{org.focus}</p>
                  </div>
                </div>
              </a>
            ))}
            {/* fill to complete the 3-col grid (21 % 3 === 0, none needed) */}
          </div>
        </div>
      </div>
    </section>
  );
}
