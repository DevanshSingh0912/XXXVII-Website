// Mission Roster — Vanguard Entities as a mission-control crew manifest.
// One dense ranked ledger. Quiet telemetry. 2 a.m. mission control energy.
import { useState } from "react";
import { motion } from "framer-motion";
import { ORGS, CAUSE } from "./_data";

const SECTORS: Record<string, string> = {
  ITER: "FUSION / MAGNETIC",
  "Commonwealth Fusion Systems": "FUSION / MAGNETIC",
  "Helion Energy": "FUSION / PULSED",
  "TAE Technologies": "FUSION / ANEUTRONIC",
  "Lawrence Livermore National Laboratory": "FUSION / INERTIAL",
  "Princeton Plasma Physics Laboratory": "FUSION / RESEARCH",
  "Tokamak Energy": "FUSION / MAGNETIC",
  "General Fusion": "FUSION / MTF",
  "U.S. Department of Energy Office of Science": "FEDERAL / FUNDING",
  "Max Planck Institute for Plasma Physics": "FUSION / STELLARATOR",
  "Xcimer Energy": "FUSION / INERTIAL",
  "UK Atomic Energy Authority": "FUSION / STATE",
  "Fervo Energy": "GEOTHERMAL / EGS",
  "Quaise Energy": "GEOTHERMAL / DEEP",
  "National Laboratory of the Rockies (formerly NREL)": "RENEWABLES / GRID",
  TerraPower: "FISSION / ADVANCED",
  "X-energy": "FISSION / HTGR",
  "Zap Energy": "FUSION / Z-PINCH",
  "Marvel Fusion": "FUSION / INERTIAL",
  "Proxima Fusion": "FUSION / STELLARATOR",
  EUROfusion: "FUSION / CONSORTIUM",
};

export function MissionRoster() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black py-20 px-6 relative overflow-hidden">
      {/* faint scan-line texture */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.6) 3px, rgba(255,255,255,0.6) 4px)",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="flex items-baseline justify-between mb-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
              Cause {CAUSE.numeral} · {CAUSE.name}
            </span>
            <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-white/60 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white/80" />
              </span>
              Roster Active
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-sans font-extralight tracking-tight text-white mb-4">
            Vanguard Entities
          </h2>
          <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/45">
              Mission Manifest — Ranked by Impact
            </span>
            <span className="font-mono text-[10px] tracking-[0.3em] text-white/45">
              {String(ORGS.length).padStart(2, "0")} ENTITIES
            </span>
          </div>
        </motion.div>

        {/* Column labels */}
        <div className="hidden md:grid grid-cols-[3.5rem_1fr_12rem_2rem] gap-6 px-2 pb-3 font-mono text-[9px] uppercase tracking-[0.3em] text-white/40">
          <span>Rank</span>
          <span>Entity / Directive</span>
          <span className="text-right">Sector</span>
          <span className="text-right">Link</span>
        </div>

        {/* Ledger */}
        <div className="border-t border-white/10">
          {ORGS.map((org, i) => {
            const isHot = hovered === i;
            const top3 = i < 3;
            return (
              <motion.a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 * Math.min(i, 14), ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative grid grid-cols-[3.5rem_1fr_2rem] md:grid-cols-[3.5rem_1fr_12rem_2rem] items-baseline gap-6 px-2 border-b border-white/10 transition-colors duration-500 ${
                  top3 ? "py-6" : "py-4"
                } ${isHot ? "bg-white/[0.05]" : "bg-transparent"}`}
              >
                {/* hover illumination bar */}
                <span
                  aria-hidden
                  className={`absolute left-0 top-0 bottom-0 w-px bg-white transition-opacity duration-500 ${
                    isHot ? "opacity-80" : "opacity-0"
                  }`}
                />

                {/* rank */}
                <span
                  className={`font-mono tracking-[0.2em] tabular-nums ${
                    top3 ? "text-lg text-white" : "text-xs text-white/50"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* name + focus */}
                <span className="min-w-0">
                  <span
                    className={`block font-sans font-light tracking-tight transition-colors duration-500 ${
                      top3 ? "text-xl text-white" : "text-sm text-white/85 group-hover:text-white"
                    }`}
                  >
                    {org.name}
                  </span>
                  <span
                    className={`block font-light leading-relaxed transition-all duration-500 ${
                      top3
                        ? "text-xs text-white/55 mt-1.5"
                        : `text-[11px] mt-1 ${isHot ? "text-white/70" : "text-white/45"}`
                    }`}
                  >
                    {org.focus}
                  </span>
                </span>

                {/* sector tag */}
                <span className="hidden md:block text-right font-mono text-[9px] uppercase tracking-[0.25em] text-white/40 group-hover:text-white/70 transition-colors duration-500 whitespace-nowrap">
                  {SECTORS[org.name] ?? "ENERGY"}
                </span>

                {/* link marker */}
                <span
                  className={`text-right font-mono text-xs transition-all duration-500 ${
                    isHot ? "text-white translate-x-0.5" : "text-white/40"
                  }`}
                >
                  ↗
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* Footer telemetry */}
        <div className="flex items-baseline justify-between pt-5 font-mono text-[9px] uppercase tracking-[0.3em] text-white/40">
          <span>XXXVII / VANGUARD MANIFEST</span>
          <span>{CAUSE.hook}</span>
        </div>
      </div>
    </div>
  );
}
