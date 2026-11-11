import { useRef } from "react";
import { BackButton } from "@/components/back-button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { SceneVideo } from "@/components/scene-video";
import { preludeContent } from "@/lib/content";

/**
 * The Prelude — the twelve frontier technologies rewriting humanity's future.
 * An opener, twelve cinematic screens (one per frontier), and a closing
 * pointer to FutureKäst (futurekast.org).
 *
 * The page is a snap-scroll deck: each screen locks into place and the
 * reader advances one screen at a time — swipe, scroll, or the down arrow.
 */
export default function Prelude() {
  const { opener, frontiers, closing } = preludeContent;
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

      {/* Opener */}
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
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 max-w-2xl font-serif text-xl md:text-2xl text-white/70 leading-relaxed"
        >
          {opener.lede}
        </motion.p>
        <DownArrow />
      </section>

      {/* Twelve frontiers */}
      {frontiers.map((f) => (
        <section
          key={f.name}
          className="relative h-[100dvh] snap-start snap-always flex flex-col justify-center px-8 md:px-16 lg:px-24 overflow-hidden border-t border-white/10"
        >
          <SceneVideo src={f.video} preloadMargin="75% 0px" className="absolute inset-0 w-full h-full object-cover" />
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
              {f.numeral} — Frontier Technology
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              viewport={{ once: true, margin: "-20%" }}
              className="text-3xl sm:text-4xl md:text-6xl font-sans font-light uppercase tracking-tighter leading-[0.95] [text-shadow:0_2px_24px_rgba(0,0,0,0.7)]"
            >
              {f.name}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              viewport={{ once: true, margin: "-20%" }}
              className="mt-6 font-serif text-2xl md:text-3xl text-white/95 leading-tight [text-shadow:0_2px_24px_rgba(0,0,0,0.7)]"
            >
              {f.tagline}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              viewport={{ once: true, margin: "-20%" }}
              className="mt-6 max-w-2xl text-base md:text-lg font-light text-white/70 leading-relaxed [text-shadow:0_1px_16px_rgba(0,0,0,0.8)]"
            >
              {f.text}
            </motion.p>
          </div>
          <DownArrow />
        </section>
      ))}

      {/* Closing — FutureKäst */}
      <section className="relative h-[100dvh] snap-start snap-always flex flex-col items-center justify-center text-center px-8 md:px-16 lg:px-24 py-16 overflow-hidden border-t border-white/10">
        <SceneVideo
          src="/videos/prelude/energy-climate.mp4"
          preloadMargin="75% 0px"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.9)_75%)]" aria-hidden />

        <div className="relative max-w-5xl w-full">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            className="text-sm font-mono uppercase tracking-widest text-white/50 mb-10"
          >
            {closing.title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            viewport={{ once: true, margin: "-20%" }}
            className="text-2xl md:text-4xl lg:text-5xl font-serif text-white/95 leading-tight [text-shadow:0_2px_24px_rgba(0,0,0,0.8)]"
          >
            {closing.text}
          </motion.p>

          {/* Index of the twelve */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true, margin: "-15%" }}
            className="mt-10 md:mt-14 hidden sm:grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-3 text-left font-mono text-[10px] uppercase tracking-[0.25em] text-white/55 max-w-3xl mx-auto"
          >
            {frontiers.map((f) => (
              <li key={f.name} className="flex items-baseline gap-3">
                <span className="text-white/35 w-7 shrink-0">{f.numeral}</span>
                <span>{f.name}</span>
              </li>
            ))}
          </motion.ul>

          <motion.a
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true, margin: "-15%" }}
            href={closing.linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 mt-10 md:mt-16 px-8 py-4 font-mono text-sm uppercase tracking-[0.35em] text-white border border-white/40 overflow-hidden transition-colors duration-500 hover:text-black hover:border-white"
          >
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" aria-hidden />
            <span className="relative">{closing.linkLabel}</span>
            <span className="relative transition-transform duration-500 group-hover:translate-x-1">→</span>
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true, margin: "-15%" }}
            className="mt-8 md:mt-10 font-mono text-[11px] uppercase tracking-[0.3em] text-white/45"
          >
            {closing.founderLine}{" "}
            <Link
              href={closing.founderLinkHref}
              className="inline-flex min-h-11 items-center px-2 -mx-2 text-white/70 underline underline-offset-4 decoration-white/30 hover:text-white hover:decoration-white/70 transition-colors duration-500"
            >
              {closing.founderLinkLabel} →
            </Link>
          </motion.p>
        </div>
      </section>
    </div>
  );
}
