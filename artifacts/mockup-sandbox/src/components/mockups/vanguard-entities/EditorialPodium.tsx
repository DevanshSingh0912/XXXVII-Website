// Vanguard Entities — "Editorial Podium" variant.
// Rank as monumental typography: #1 as an architectural full-width feature,
// ranks 2–3 in a split treatment, the rest as a typeset compact index.
import { ORGS, CAUSE } from "./_data";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

function Arrow({ className = "" }: { className?: string }) {
  return <span className={`align-super text-xs ${className}`}>↗</span>;
}

export function EditorialPodium() {
  const first = ORGS[0];
  const podium = ORGS.slice(1, 3);
  const rest = ORGS.slice(3);
  const mid = Math.ceil(rest.length / 2);
  const cols = [rest.slice(0, mid), rest.slice(mid)];

  return (
    <div className="min-h-screen bg-black py-20 px-6 text-white selection:bg-white selection:text-black">
      <div className="max-w-6xl mx-auto">
        {/* Masthead */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="flex items-baseline justify-between border-b border-white/10 pb-5 mb-0"
        >
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
              Vanguard Entities
            </span>
            <span className="hidden md:inline font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
              Cause {CAUSE.numeral} · {CAUSE.name}
            </span>
          </div>
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/40">
            Ranked by impact · {ORGS.length}
          </span>
        </motion.div>

        {/* ————— RANK 01 · Monumental feature ————— */}
        <motion.a
          href={first.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.1 }}
          className="group block relative border-b border-white/10 py-16 md:py-20 overflow-hidden hover:bg-white/[0.03] transition-colors duration-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-end">
            <div className="relative leading-none select-none">
              <span
                className="block font-sans font-thin text-white/90 tracking-[-0.06em]"
                style={{ fontSize: "clamp(9rem, 22vw, 19rem)", lineHeight: 0.8 }}
              >
                01
              </span>
              <span className="absolute -bottom-4 left-1 font-mono text-[10px] uppercase tracking-[0.35em] text-white/40">
                First among equals
              </span>
            </div>
            <div className="pb-2 max-w-xl">
              <h3 className="font-sans font-extralight text-4xl md:text-5xl tracking-tight text-white mb-5">
                {first.name}
                <Arrow className="ml-3 text-white/40 group-hover:text-white transition-colors duration-500" />
              </h3>
              <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
                {first.focus}
              </p>
            </div>
          </div>
        </motion.a>

        {/* ————— RANKS 02–03 · Split podium ————— */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/10">
          {podium.map((org, i) => (
            <motion.a
              key={org.name}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.3 + i * 0.12 }}
              className={`group block py-12 md:py-14 pr-8 ${
                i === 1 ? "md:border-l md:border-white/10 md:pl-12" : ""
              } hover:bg-white/[0.03] transition-colors duration-700`}
            >
              <span
                className="block font-sans font-thin text-white/70 tracking-[-0.05em] leading-none mb-6 select-none"
                style={{ fontSize: "clamp(4.5rem, 8vw, 7rem)" }}
              >
                {String(i + 2).padStart(2, "0")}
              </span>
              <h3 className="font-sans font-extralight text-2xl tracking-tight text-white mb-3">
                {org.name}
                <Arrow className="ml-2 text-white/40 group-hover:text-white transition-colors duration-500" />
              </h3>
              <p className="text-sm text-white/55 font-light leading-relaxed max-w-md">
                {org.focus}
              </p>
            </motion.a>
          ))}
        </div>

        {/* ————— THE INDEX · ranks 04–21 ————— */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease, delay: 0.6 }}
          className="pt-10"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/40 mb-8">
            The Index · 04–{String(ORGS.length).padStart(2, "0")}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16">
            {cols.map((col, c) => (
              <div key={c} className={c === 1 ? "md:border-l md:border-white/10 md:pl-16 md:-ml-8" : ""}>
                {col.map((org, i) => {
                  const rank = 4 + c * mid + i;
                  return (
                    <a
                      key={org.name}
                      href={org.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-baseline gap-6 py-5 border-b border-white/10 hover:bg-white/[0.03] transition-colors duration-500"
                    >
                      <span className="font-sans font-thin text-2xl text-white/50 group-hover:text-white/90 tracking-tight tabular-nums shrink-0 w-10 transition-colors duration-500">
                        {String(rank).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-mono text-xs tracking-[0.15em] text-white/80 group-hover:text-white transition-colors duration-500 mb-1.5">
                          {org.name}
                          <span className="ml-2 text-white/40 group-hover:text-white/70 transition-colors duration-500">↗</span>
                        </h3>
                        <p className="text-[11px] text-white/45 font-light leading-relaxed">
                          {org.focus}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Colophon */}
        <div className="flex items-baseline justify-between pt-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
            XXXVII · {CAUSE.hook}
          </span>
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/40">
            {ORGS.length} entities
          </span>
        </div>
      </div>
    </div>
  );
}
