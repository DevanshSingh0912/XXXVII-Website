import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { dimensions, causes } from "@/lib/data";

/**
 * The Story — shown after the intro sequence.
 * Ten vertical dimension strips (etched line-art illustrations) that expand
 * on hover/tap; clicking one opens that dimension's causes in the curved
 * gallery at /atlas/:dimensionId.
 */

// Etched strip artwork, keyed by dimension id.
const stripImages: Record<string, string> = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: string }>("@assets/generated_images/dimension_strip_*.jpg", { eager: true }),
  ).map(([path, mod]) => {
    const m = path.match(/dimension_strip_(.+)\.jpg$/);
    return [m ? m[1] : path, mod.default];
  }),
);

function causeCount(dimensionId: string) {
  return causes.filter(c => c.dimensionId === dimensionId).length;
}

export default function Story() {
  const [, setLocation] = useLocation();
  const [active, setActive] = useState<string | null>(null);

  return (
    <motion.div
      className="w-full min-h-[100dvh] bg-black text-white"
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
        exit: { opacity: 0, transition: { duration: 0.6 } },
      }}
    >
      <h1 className="sr-only">The Story — The 10 Dimensions of Human Existence</h1>

      {/* Desktop: ten vertical strips filling the viewport */}
      <div className="hidden md:flex h-[100dvh] w-full">
        {dimensions.map(dim => {
          const expanded = active === dim.id;
          return (
            <button
              key={dim.id}
              type="button"
              onMouseEnter={() => setActive(dim.id)}
              onMouseLeave={() => setActive(a => (a === dim.id ? null : a))}
              onFocus={() => setActive(dim.id)}
              onClick={() => setLocation(`/atlas/${dim.id}`)}
              className="group relative h-full overflow-hidden border-r border-white/10 last:border-r-0 text-left outline-none focus-visible:ring-1 focus-visible:ring-white/60"
              style={{
                flexGrow: expanded ? 3.2 : 1,
                flexBasis: 0,
                transition: "flex-grow 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
              aria-label={`${dim.name} — ${causeCount(dim.id)} causes`}
            >
              {/* Etched artwork */}
              <img
                src={stripImages[dim.id] ?? dim.image}
                alt=""
                aria-hidden
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-90`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/60" aria-hidden />

              {/* Numeral, top */}
              <span className="absolute top-6 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.35em] text-white/50">
                {dim.numeral}
              </span>

              {/* Vertical label — fades out when expanded */}
              <span
                className={`absolute bottom-8 left-1/2 -translate-x-1/2 [writing-mode:vertical-rl] rotate-180 font-sans tracking-[0.3em] text-xs text-white/80 whitespace-nowrap transition-opacity duration-300 ${expanded ? "opacity-0" : "opacity-100"}`}
              >
                {dim.name}
              </span>

              {/* Expanded panel */}
              <div
                className={`absolute inset-x-0 bottom-0 p-6 lg:p-8 transition-all duration-500 ${expanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
              >
                <h2 className="font-serif text-2xl lg:text-3xl mb-3 whitespace-nowrap">{dim.name}</h2>
                <p className="font-sans text-sm text-white/70 max-w-xs leading-relaxed">{dim.statement}</p>
                <div className="mt-4 font-mono text-[10px] tracking-[0.35em] text-white/60">
                  Enter →
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Mobile: stacked horizontal bands */}
      <div className="md:hidden flex flex-col pt-16 pb-8">
        {dimensions.map(dim => (
          <button
            key={dim.id}
            type="button"
            onClick={() => setLocation(`/atlas/${dim.id}`)}
            className="relative aspect-square overflow-hidden border-b border-white/10 text-left"
            aria-label={`${dim.name} — ${causeCount(dim.id)} causes`}
          >
            <img
              src={stripImages[dim.id] ?? dim.image}
              alt=""
              aria-hidden
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/90 via-black/50 to-transparent" aria-hidden />
            <div className="relative h-full flex flex-col justify-end px-6 pb-6">
              <span className="font-mono text-[10px] tracking-[0.35em] text-white/50 mb-1">
                {dim.numeral}
              </span>
              <span className="font-serif text-xl">{dim.name}</span>
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
}
