import { useRef } from "react";
import { BackButton } from "@/components/back-button";
import { motion, MotionConfig } from "framer-motion";
import { Link } from "wouter";
import { SceneVideo } from "@/components/scene-video";
import { aboutContent } from "@/data/about";

/**
 * About Us — cinematic full-viewport screens in the site's manifesto language.
 * Opener, mission statement over footage, the people (Prompter + Co-Prompters),
 * the name, the 37 constellation band, and a closing over footage.
 *
 * The page is a snap-scroll deck: each screen locks into place and the
 * reader advances one screen at a time — swipe, scroll, or the down arrow.
 * "02 — The People" is taller than one screen and scrolls internally within
 * its snap pane.
 */

const rise = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: "easeOut" as const },
  viewport: { once: true, margin: "-20%" },
};

/** Deterministic scatter of exactly 37 dots around the numeral. */
const DOTS = Array.from({ length: 37 }, (_, i) => {
  const t = i * 2.39996;
  const r = 8 + 42 * Math.sqrt((i + 0.5) / 37);
  return {
    x: 50 + r * Math.cos(t) * 0.9,
    y: 50 + r * Math.sin(t) * 0.72,
    delay: (i % 12) * 0.9,
    duration: 8 + (i % 5),
  };
});

export default function About() {
  const c = aboutContent;
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
    <MotionConfig reducedMotion="user">
    <div
      ref={deckRef}
      className="about-page h-[100dvh] overflow-y-auto snap-y snap-mandatory bg-black text-white selection:bg-white selection:text-black"
    >
      <BackButton />

      {/* Screen 1 — opener */}
      <section className="about-screen about-screen--hero relative h-[100dvh] snap-start snap-always flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 overflow-hidden">
        <div className="about-screen__grain absolute inset-0 pointer-events-none" aria-hidden />
        <div className="about-screen__rule absolute left-6 sm:left-8 md:left-16 lg:left-24 top-1/2 h-px w-16 bg-white/20" aria-hidden />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="about-kicker text-sm font-mono uppercase tracking-widest text-muted-foreground mb-8 md:mb-10"
        >
          {c.hero.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="about-display text-[clamp(2.7rem,8.7vw,8rem)] font-sans font-light uppercase tracking-[-0.07em] leading-[0.88] max-w-6xl"
        >
          <span className="block">Powering humanity</span>
          <span className="block">into an exponential</span>
          <span className="block">future.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="mt-8 md:mt-10 font-serif text-lg md:text-2xl text-white/60 max-w-2xl leading-[1.45]"
        >
          {c.hero.sub}
        </motion.p>
        <DownArrow />
      </section>

      {/* 01 — The Mission, over footage */}
      <section className="about-screen about-screen--footage relative h-[100dvh] snap-start snap-always flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 overflow-hidden border-t border-white/10">
        <SceneVideo src="/videos/about/mission.mp4" preloadMargin="75% 0px" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50" aria-hidden />
        <div className="about-copy-frame relative max-w-5xl">
          <motion.p {...rise} className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/50 mb-8">
            01 — The Mission
          </motion.p>
          <motion.p {...rise} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white/95 leading-[1.2] [text-shadow:0_2px_24px_rgba(0,0,0,0.7)]">
            {c.mission.paragraphs[0]}
          </motion.p>
          <motion.p {...rise} className="mt-10 max-w-3xl text-base md:text-lg font-light text-white/70 leading-relaxed [text-shadow:0_1px_16px_rgba(0,0,0,0.8)]">
            {c.mission.paragraphs[1]}
          </motion.p>
          <motion.p {...rise} className="mt-10 max-w-3xl text-sm font-light text-white/50 leading-relaxed [text-shadow:0_1px_16px_rgba(0,0,0,0.8)]">
            {c.hero.note}
          </motion.p>
        </div>
        <DownArrow />
      </section>

      {/*
        02 — The People
        Taller than one viewport. The section locks as a snap pane but scrolls
        internally so all bios are reachable. The down-arrow is anchored at the
        bottom of the section (not the viewport) via `sticky bottom-0`.
      */}
      <section className="about-screen about-screen--people relative h-[100dvh] snap-start snap-always overflow-y-auto scrollbar-hide border-t border-white/10 px-6 sm:px-8 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="about-people-inner max-w-5xl mx-auto">
          <motion.p {...rise} className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/50 mb-14">
            02 — The People
          </motion.p>

          <motion.blockquote {...rise} className="about-quote font-serif text-3xl sm:text-4xl md:text-5xl text-white/95 leading-[1.15]">
            "{c.people.quote}"
          </motion.blockquote>
          <motion.p {...rise} className="mt-8 font-mono text-[11px] uppercase tracking-[0.3em] text-white/45">
            {c.people.attribution}
          </motion.p>

          {/* The Prompter */}
          <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 md:gap-20 items-start">
            <motion.div {...rise} className="flex flex-col items-center md:items-start">
              <div className="about-portrait about-portrait--lead w-60 md:w-full aspect-[2/3] overflow-hidden border border-white/20">
                <img src={c.prompter.portraitPath} alt={c.prompter.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <p className="mt-7 text-2xl sm:text-3xl font-sans font-light uppercase tracking-tighter">{c.prompter.name}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">{c.prompter.role}</p>
              <a
                href={c.prompter.linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="about-action group relative inline-flex items-center gap-3 mt-8 px-6 py-3 min-h-11 font-mono text-xs uppercase tracking-[0.3em] text-white border border-white/40 overflow-hidden transition-colors duration-500 hover:text-black hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" aria-hidden />
                <span className="relative">{c.prompter.linkLabel}</span>
                <span className="relative transition-transform duration-500 group-hover:translate-x-1">→</span>
              </a>
            </motion.div>
            <div>
              <motion.p {...rise} className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/50 mb-8">
                {c.prompter.eyebrow}
              </motion.p>
              <div className="space-y-8 max-w-[65ch]">
                {c.prompter.paragraphs.map((p, i) => (
                  <motion.p key={i} {...rise} className="text-base md:text-lg font-light text-white/75 leading-relaxed">
                    {p}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>

          {/* The Co-Prompters */}
          <div className="mt-32 pb-24">
            <motion.p {...rise} className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/50">
              {c.coPrompters.heading}
            </motion.p>
            <motion.p {...rise} className="mt-6 font-serif text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed">
              {c.coPrompters.intro}
            </motion.p>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              {c.coPrompters.members.map((m) => (
                <motion.div key={m.slug} {...rise} className="flex flex-col items-start">
                  <div className="about-portrait w-full max-w-[280px] aspect-[2/3] overflow-hidden border border-white/15">
                    <img
                      src={m.portraitPath}
                      alt={m.isPlaceholder ? `${m.name} — portrait forthcoming` : m.name}
                      className={`w-full h-full object-cover ${m.slug === "samah" ? "object-[center_35%]" : ""}`}
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-7 text-2xl sm:text-3xl font-sans font-light uppercase tracking-tighter">{m.name}</p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">{m.tagline}</p>
                  <p className="mt-5 whitespace-pre-line text-base font-light text-white/65 leading-relaxed max-w-[42ch]">{m.blurb}</p>
                  {m.linkHref && (
                    <a
                      href={m.linkHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex min-h-11 items-center font-mono text-[11px] uppercase tracking-[0.3em] text-white/60 underline underline-offset-8 decoration-white/25 hover:text-white hover:decoration-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white transition-colors duration-500"
                    >
                      LinkedIn →
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll-to-next hint anchored at bottom of this section */}
        <div className="sticky bottom-0 left-0 right-0 flex justify-center pb-2 pointer-events-none">
          <button
            onClick={advance}
            aria-label="Next screen"
            className="pointer-events-auto p-3 min-h-11 min-w-11 text-white/50 hover:text-white transition-colors duration-500"
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
        </div>
      </section>

      {/* 03 — The Name, over footage */}
      <section className="about-screen about-screen--footage relative h-[100dvh] snap-start snap-always flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 overflow-hidden border-t border-white/10">
        <SceneVideo src="/videos/about/name.mp4" preloadMargin="75% 0px" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/65" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50" aria-hidden />
        <div className="about-copy-frame relative max-w-5xl">
          <motion.p {...rise} className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/50 mb-8">
            03 — The Name
          </motion.p>
          <motion.p {...rise} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white/95 leading-[1.2] [text-shadow:0_2px_24px_rgba(0,0,0,0.7)]">
            {c.name.paragraphs[0]}
          </motion.p>
          <motion.p {...rise} className="mt-10 max-w-3xl text-base md:text-lg font-light text-white/70 leading-relaxed [text-shadow:0_1px_16px_rgba(0,0,0,0.8)]">
            {c.name.paragraphs[1]}
          </motion.p>
        </div>
        <DownArrow />
      </section>

      {/* The 37 constellation band */}
      <section className="about-screen about-screen--motif relative h-[100dvh] snap-start snap-always flex flex-col items-center justify-center text-center px-6 sm:px-8 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0" aria-hidden>
          {DOTS.map((d, i) => (
            <span
              key={i}
              className="about-dot absolute w-1.5 h-1.5 rounded-full bg-[#EAE6DA]"
              style={{ left: `${d.x}%`, top: `${d.y}%`, animationDelay: `${d.delay}s`, animationDuration: `${d.duration}s` }}
            />
          ))}
        </div>
        <span
          className="relative font-sans font-light leading-none select-none"
          style={{ fontSize: "clamp(160px, 22vw, 380px)", color: "transparent", WebkitTextStroke: "2px rgba(234,230,218,0.85)" }}
          aria-label="37"
        >
          37
        </span>
        <motion.p {...rise} className="relative mt-8 font-serif italic text-white/70 text-lg md:text-xl">
          {c.motif.caption}
        </motion.p>
        <motion.div {...rise} className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
          {c.motif.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="min-h-11 inline-flex items-center px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-white/60 border border-white/15 hover:border-white/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white transition-colors duration-300"
            >
              {l.label} →
            </Link>
          ))}
        </motion.div>
        <style>{`
          .about-dot { opacity: 0.5; animation-name: aboutDotBreathe; animation-iteration-count: infinite; animation-timing-function: ease-in-out; }
          @keyframes aboutDotBreathe { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.6; } }
          @media (prefers-reduced-motion: reduce) { .about-dot { animation: none; opacity: 0.5; } }
        `}</style>
        <DownArrow />
      </section>

      {/* Closing — over footage */}
      <section className="about-screen about-screen--closing relative h-[100dvh] snap-start snap-always flex flex-col items-center justify-center text-center px-6 sm:px-8 md:px-16 lg:px-24 overflow-hidden border-t border-white/10">
        <SceneVideo src="/videos/about/closing.mp4" preloadMargin="75% 0px" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-black/55" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.9)_75%)]" aria-hidden />
        <div className="relative max-w-5xl w-full">
          <motion.p {...rise} className="text-2xl md:text-4xl lg:text-5xl font-serif text-white/95 leading-tight [text-shadow:0_2px_24px_rgba(0,0,0,0.8)]">
            {c.closing.display}
          </motion.p>
          <motion.a
            {...rise}
            href={c.closing.linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="about-action group relative inline-flex items-center gap-3 mt-12 md:mt-16 px-8 py-4 min-h-11 font-mono text-sm uppercase tracking-[0.35em] text-white border border-white/40 overflow-hidden transition-colors duration-500 hover:text-black hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" aria-hidden />
            <span className="relative">{c.closing.linkLabel}</span>
            <span className="relative transition-transform duration-500 group-hover:translate-x-1">→</span>
          </motion.a>
        </div>
      </section>
      <style>{`
        .about-page { --about-ivory: #eae6da; --about-dim: rgba(234,230,218,.58); position: relative; }
        .about-page::before { content: ""; position: fixed; inset: 0; pointer-events: none; z-index: 1; opacity: .18; background: radial-gradient(circle at 50% 20%, rgba(234,230,218,.12), transparent 38%), linear-gradient(90deg, rgba(234,230,218,.035) 1px, transparent 1px); background-size: auto, 9rem 100%; }
        .about-screen > * { z-index: 2; }
        .about-screen__grain { opacity: .14; background-image: repeating-linear-gradient(115deg, transparent 0 5px, rgba(234,230,218,.035) 5px 6px); }
        .about-screen__rule { transform-origin: left; opacity: .7; }
        .about-kicker, .about-people-inner > div > p:first-child { color: var(--about-dim); }
        .about-copy-frame { border-left: 1px solid rgba(234,230,218,.28); padding-left: clamp(1rem, 4vw, 3rem); }
        .about-quote { border-left: 2px solid var(--about-ivory); padding-left: clamp(1rem, 3vw, 2rem); max-width: 44rem; }
        .about-portrait { background: #161512; box-shadow: 0 18px 50px rgba(0,0,0,.3); transition: border-color .5s ease, transform .5s cubic-bezier(.22,1,.36,1); }
        .about-portrait:hover { border-color: rgba(234,230,218,.62); transform: translateY(-4px); }
        .about-portrait img { filter: saturate(.82) contrast(1.04); transition: filter .5s ease, transform .8s cubic-bezier(.22,1,.36,1); }
        .about-portrait:hover img { filter: saturate(1) contrast(1.06); transform: scale(1.025); }
        .about-action:focus-visible, .about-page a:focus-visible, .about-page button:focus-visible { outline-color: var(--about-ivory); }
        @media (max-width: 767px) {
          .about-screen--people { scroll-padding-top: 1rem; }
          .about-screen--people .about-people-inner { padding-bottom: 1rem; }
          .about-screen--people .about-portrait--lead { width: min(68vw, 15rem); }
          .about-copy-frame { padding-left: 1rem; }
        }
        @media (prefers-reduced-motion: reduce) {
          .about-page::before, .about-screen__grain { opacity: .08; }
          .about-portrait, .about-portrait img { transition: none; }
        }
      `}</style>
    </div>
    </MotionConfig>
  );
}
