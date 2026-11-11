import { useRef } from "react";
import { BackButton } from "@/components/back-button";
import { motion } from "framer-motion";
import { SceneVideo } from "@/components/scene-video";
import { infosContent } from "@/lib/content";

/**
 * The Manifesto — ten full-viewport screens.
 * An opener, eight cinematic statements over dimension-interlude footage,
 * and the closing Measure. Copy sells the abundance mindset; the ask is
 * implicit, never stated.
 *
 * The page is a snap-scroll deck: each screen locks into place and the
 * reader advances one screen at a time — swipe, scroll, or the down arrow.
 */
export default function Infos() {
  const { opener, screens, measure } = infosContent;
  const deckRef = useRef<HTMLDivElement>(null);

  const advance = () => {
    const deck = deckRef.current;
    if (!deck) return;
    deck.scrollBy({ top: deck.clientHeight, behavior: "smooth" });
  };

  const DownArrow = ({ last = false }: { last?: boolean }) =>
    last ? null : (
      <button
        onClick={advance}
        aria-label="Next screen"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 p-3 min-h-11 min-w-11 text-white/50 hover:text-white transition-colors duration-500"
      >
        <motion.span
          aria-hidden
          className="block text-2xl leading-none motion-reduce:animate-none"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
      </button>
    );

  return (
    <div
      ref={deckRef}
      className="h-[100dvh] overflow-y-auto snap-y snap-mandatory bg-black text-white selection:bg-white selection:text-black"
    >
      <BackButton />

      {/* Screen 1 — opener */}
      <section className="relative h-[100dvh] snap-start snap-always flex flex-col justify-center px-8 md:px-16 lg:px-24 overflow-hidden">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-10"
        >
          {opener.overline}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-sans font-light uppercase tracking-tighter leading-[0.9]"
        >
          {opener.title.map((line) => (
            <span key={line} className="block">{line}</span>
          ))}
        </motion.h1>
        <DownArrow />
      </section>

      {/* Screens 2–9 — statements over footage */}
      {screens.map((screen, i) => (
        <section
          key={screen.label}
          className="relative h-[100dvh] snap-start snap-always flex flex-col justify-center px-8 md:px-16 lg:px-24 overflow-hidden border-t border-white/10"
        >
          <SceneVideo src={screen.video} preloadMargin="75% 0px" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50" aria-hidden />

          <div className="relative max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-20%" }}
              className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/50 mb-8"
            >
              {String(i + 1).padStart(2, "0")} — {screen.label}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              viewport={{ once: true, margin: "-20%" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white/95 leading-[1.15] [text-shadow:0_2px_24px_rgba(0,0,0,0.7)]"
            >
              {screen.text}
            </motion.p>
          </div>
          <DownArrow />
        </section>
      ))}

      {/* Screen 10 — the Measure */}
      <section className="relative h-[100dvh] snap-start snap-always flex flex-col items-center justify-center text-center px-8 md:px-16 lg:px-24 overflow-hidden border-t border-white/10">
        <SceneVideo src={measure.video} preloadMargin="75% 0px" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/65" aria-hidden />

        <div className="relative max-w-5xl">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            className="text-sm font-mono uppercase tracking-widest text-white/50 mb-12"
          >
            {measure.title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            viewport={{ once: true, margin: "-20%" }}
            className="text-2xl md:text-4xl lg:text-5xl font-serif text-white/90 leading-tight [text-shadow:0_2px_24px_rgba(0,0,0,0.7)]"
          >
            "{measure.text}"
          </motion.p>
        </div>
      </section>
    </div>
  );
}
