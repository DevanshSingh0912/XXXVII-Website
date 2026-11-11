import { useParams, Link } from "wouter";
import { causes, dimensions, getCauseImage } from "@/lib/data";
import { JsonLd } from "@/components/json-ld";
import { getCauseVideo } from "@/lib/videos";
import { getSceneVisuals } from "@/lib/scene-visuals";
import { SceneVideo } from "@/components/scene-video";
import { useState } from "react";

/**
 * Arc-card background: the poster shows until the clip actually plays,
 * then fades out so the two different scenes never double-expose.
 */
function ArcCardMedia({ poster, video }: { poster?: string; video?: string }) {
  const [videoReady, setVideoReady] = useState(false);
  return (
    <>
      {poster && (
        <img
          src={poster}
          alt=""
          aria-hidden
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-out ${videoReady ? "opacity-0" : "opacity-50"}`}
        />
      )}
      {video && (
        <div className="absolute inset-0 opacity-50">
          <SceneVideo
            src={video}
            disablePoster
            className="absolute inset-0 w-full h-full object-cover"
            onReady={() => setVideoReady(true)}
          />
        </div>
      )}
    </>
  );
}
import { getCauseContent } from "@/lib/content";
import type { SourceRef } from "@/lib/content/types";

/**
 * Inline superscript citation markers. Tapping a number smooth-scrolls to the
 * matching entry in the section's source list and flashes it so the reader
 * lands on exactly the citation backing the claim — one tap, desktop or mobile.
 */
function CiteMarks({ nums, anchorPrefix }: { nums: number[]; anchorPrefix: string }) {
  if (nums.length === 0) return null;
  const jump = (n: number) => {
    const el = document.getElementById(`${anchorPrefix}-src-${n}`);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.classList.add("citation-flash");
    window.setTimeout(() => el.classList.remove("citation-flash"), 2000);
  };
  return (
    <sup className="ml-0.5 inline-flex flex-wrap align-middle sm:inline sm:whitespace-nowrap sm:align-super">
      {nums.map((n, i) => (
        <button
          key={n}
          type="button"
          onClick={() => jump(n)}
          aria-label={`Jump to source ${n}`}
          className="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center px-0.5 font-mono text-[10px] leading-none text-white/50 transition-colors duration-300 hover:text-white sm:inline sm:min-h-0 sm:min-w-0"
        >
          {n}
          {i < nums.length - 1 && <span aria-hidden className="text-white/25">,</span>}
        </button>
      ))}
    </sup>
  );
}

/** Numbered source list a CiteMarks group scrolls into; each entry is an anchor target. */
function SourceList({ sources, anchorPrefix }: { sources: SourceRef[]; anchorPrefix: string }) {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2">
      {sources.map((s, i) => (
        <a
          key={i}
          id={`${anchorPrefix}-src-${i + 1}`}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="scroll-mt-24 inline-flex min-h-11 min-w-11 items-center rounded-sm font-mono text-[10px] text-white/50 underline decoration-white/25 underline-offset-2 transition-colors duration-300 hover:text-white/70 hover:decoration-white/50 sm:min-h-0 sm:py-1"
        >
          <span className="text-white/55 mr-1.5">[{i + 1}]</span>
          {s.name}
        </a>
      ))}
    </div>
  );
}

// Vivid dimension strip artwork (shared with The Story), keyed by dimension id.
const stripImages: Record<string, string> = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: string }>("@assets/generated_images/dimension_strip_*.jpg", { eager: true }),
  ).map(([path, mod]) => {
    const m = path.match(/dimension_strip_(.+)\.jpg$/);
    return [m ? m[1] : path, mod.default];
  }),
);

/**
 * Full-bleed cinematic interlude between two sections — a breathing space so
 * long internal pages never feel like an unbroken wall of text. Renders either
 * a looping ambient clip (with poster beneath) or a slow-zoom still.
 */
function MediaInterlude({
  video,
  image,
  caption,
  line,
}: {
  video?: string;
  image?: string;
  caption: string;
  line?: string;
}) {
  return (
    <section className="relative h-[100dvh] overflow-hidden bg-black">
      {image && (
        <motion.img
          src={image}
          alt=""
          aria-hidden
          initial={{ scale: 1.12 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 8, ease: "linear" }}
          viewport={{ once: true }}
          className={`absolute inset-0 w-full h-full object-cover ${video ? "opacity-60" : "opacity-90"}`}
        />
      )}
      {video && (
        <div className="absolute inset-0 opacity-90">
          <SceneVideo src={video} className="absolute inset-0 w-full h-full object-cover" />
        </div>
      )}
      {/* Edge fades — the media melts into the black sections above and below, no hard seam. */}
      <div className="absolute inset-x-0 top-0 h-[28%] bg-gradient-to-b from-black to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-black to-transparent" />
      {/* Soft scrim behind the copy so it stays readable over bright frames. */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 45% at 50% 50%, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 55%, transparent 100%)" }} />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, margin: "-20%" }}
          className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/80 mb-6"
          style={{ textShadow: "0 1px 12px rgba(0,0,0,0.95), 0 0 24px rgba(0,0,0,0.8)" }}
        >
          {caption}
        </motion.span>
        {line && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            viewport={{ once: true, margin: "-20%" }}
            className="text-3xl md:text-5xl font-light font-sans tracking-tighter text-white max-w-4xl"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.95), 0 0 40px rgba(0,0,0,0.85)" }}
          >
            {line}
          </motion.p>
        )}
      </div>
    </section>
  );
}
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlitchText } from "@/components/glitch-text";
import { useRef } from "react";

export default function CauseDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  const causeIndex = causes.findIndex(c => c.slug === slug);
  const cause = causes[causeIndex];
  
  if (!cause) {
    return <div className="h-screen bg-black text-white flex items-center justify-center">Cause not found</div>;
  }

  const dim = dimensions.find(d => d.id === cause.dimensionId);
  const content = getCauseContent(cause.slug);
  const prevCause = causeIndex > 0 ? causes[causeIndex - 1] : null;
  const nextCause = causeIndex < causes.length - 1 ? causes[causeIndex + 1] : null;

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  // Reading progress across the whole page — drives the hairline bar at the top.
  const { scrollYProgress: pageProgress } = useScroll();
  const reducedMotion = useReducedMotion();
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const heroVideo = getCauseVideo(cause.slug);
  const visuals = getSceneVisuals(cause.slug);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": cause.name,
    "description": cause.hook,
    "url": `https://xxxvii.org/cause/${cause.slug}`,
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": `${dim?.numeral ? `${dim.numeral}. ` : ""}${dim?.name ?? "The 37"}`,
      "url": `https://xxxvii.org/dimensions#${cause.dimensionId}`
    }
  };

  return (
    <>
    <JsonLd data={structuredData} />
    {/* Reading progress — hairline gold bar tracking scroll position */}
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left bg-gradient-to-r from-[#8a6a2f] via-[#C9A55E] to-[#E3B45B]"
      style={{ scaleX: pageProgress }}
    />
    <motion.div 
      ref={containerRef}
      className="min-h-screen bg-black text-white selection:bg-white selection:text-black pb-20 md:pb-32"
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0, transition: { duration: 0.6 } }
      }}
    >
      {/* HERO SECTION
          With a video: no shared-element expansion — the clip plays immediately,
          full-bleed, with the still beneath only as an instant poster.
          Without a video: keep the original atlas card expand transition. */}
      <motion.div 
        {...(!heroVideo && { layoutId: `cause-container-${cause.slug}` })}
        className="relative h-[100dvh] w-full flex flex-col justify-between overflow-hidden z-10 bg-black"
        style={{ originY: 0 }}
      >
        <motion.div 
          className="absolute inset-0 z-0 overflow-hidden"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          {heroVideo ? (
            <>
              {/* Instant poster beneath the clip */}
              <img
                src={getCauseImage(cause)}
                alt={cause.name}
                className="absolute inset-0 w-full h-full object-cover blur-xl scale-105 opacity-50"
              />
              <SceneVideo
                src={heroVideo}
                eager
                className="absolute inset-0 w-full h-full object-cover"
              />
            </>
          ) : (
            <>
              {/* Blurred backdrop fills the frame */}
              <img
                src={getCauseImage(cause)}
                alt=""
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover blur-3xl scale-110 opacity-40"
              />
              {/* Full image, never cropped */}
              <motion.img 
                layoutId={`cause-img-${cause.slug}`}
                src={getCauseImage(cause)} 
                alt={cause.name}
                className="relative w-full h-full object-contain"
              />
            </>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10 opacity-90" />
        </motion.div>
        
        {/* BACK button top left */}
        <div className="relative z-20 w-full p-8 md:p-12 flex justify-between items-start">
          <Link href="/atlas" className="group flex min-h-11 items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors sm:min-h-0">
            <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
            <GlitchText text="BACK" />
          </Link>
        </div>
        
        <div className="relative z-10 w-full p-8 md:p-12 lg:p-16 flex flex-col justify-end h-full">
          <div className="w-full max-w-screen-2xl mx-auto flex flex-col justify-end">
            
            {/* Overline & Meta */}
            <motion.div 
              layoutId={`cause-caption-${cause.slug}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center gap-4 text-white/60 font-mono text-[10px] uppercase tracking-[0.2em] mb-4"
            >
              <span>DIMENSION / {dim?.numeral} — {dim?.name}</span>
            </motion.div>
            
            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-6xl md:text-8xl lg:text-[9vw] font-sans font-light uppercase tracking-tighter leading-[0.9] sm:leading-[0.85] text-white break-words"
            >
              {cause.name}
            </motion.h1>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="h-[1px] w-full bg-white/20 mt-8 mb-6 origin-left" 
            />
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 relative">
              {/* Description */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-sm md:text-base text-white/60 max-w-2xl font-sans font-light leading-relaxed"
              >
                {cause.hook}
              </motion.p>

              {/* Pagination Controls */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-8 font-mono text-[10px] uppercase tracking-[0.2em] text-white/55"
              >
                {prevCause ? (
                  <Link href={`/cause/${prevCause.slug}`} className="hover:text-white transition-colors flex min-h-11 items-center gap-2 sm:min-h-0">
                    ‹ {prevCause.name}
                  </Link>
                ) : <span className="text-white/40 cursor-not-allowed">‹ PREVIOUS</span>}
                
                {nextCause ? (
                  <Link href={`/cause/${nextCause.slug}`} className="hover:text-white transition-colors flex min-h-11 items-center gap-2 sm:min-h-0">
                    {nextCause.name} ›
                  </Link>
                ) : <span className="text-white/40 cursor-not-allowed">NEXT ›</span>}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CINEMATIC SEQUENCE BELOW HERO */}
      <div className="relative z-20">

        {/* SCENE 01 — THE THESIS: pure statement on black; the sequence alternates
            text-only and visual sections so the imagery never feels heavy. */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black">
          <div className="absolute top-0 inset-x-0 p-8 flex justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
            <span>Scene 01</span>
            <span>The Thesis</span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-20%" }}
            className="relative z-10 max-w-4xl mx-auto px-8 text-center text-2xl md:text-4xl lg:text-5xl font-sans font-light leading-[1.15] tracking-tight text-white"
          >
            {cause.description}
          </motion.p>
        </section>

        {/* SCENE 02 — WHY IT MATTERS: split with parallax cause image */}
        {content && (
          <section className="relative min-h-[100dvh] grid grid-cols-1 lg:grid-cols-2 overflow-hidden border-t border-white/10">
            <div className="relative overflow-hidden min-h-[50dvh] bg-black">
              {/* Static image only when there's no clip (or motion is reduced) —
                  otherwise the video is the sole visual, no poster flash. */}
              {(!visuals?.whyItMattersVideo || reducedMotion) && (
                <motion.img
                  src={visuals?.whyItMatters ?? getCauseImage(cause)}
                  alt={cause.name}
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              {visuals?.whyItMattersVideo && (
                <SceneVideo
                  src={visuals.whyItMattersVideo}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black lg:bg-gradient-to-r" />
            </div>
            <div className="relative flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-black">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-10">Scene 02 — Why It Matters</span>
              <div className="space-y-8 max-w-xl">
                {content.whyItMatters.map((p, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: i * 0.25 }}
                    viewport={{ once: true, margin: "-15%" }}
                    className="text-lg md:text-xl text-white/70 font-light leading-relaxed"
                  >
                    {p}
                  </motion.p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SCENE 03 — END STATE: text-only black canvas between visual scenes 02 and 04 */}
        {content && (
          <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden border-t border-white/10 bg-black">
            <div className="absolute top-0 inset-x-0 p-8 flex justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
              <span>Scene 03</span>
              <span>When It's Working</span>
            </div>
            <motion.p
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.4 }}
              viewport={{ once: true, margin: "-20%" }}
              className="relative z-10 max-w-4xl mx-auto px-8 text-center text-xl md:text-3xl font-serif text-white/90 leading-relaxed"
            >
              {content.endState}
            </motion.p>
          </section>
        )}

        {/* SCENE 04 — THE ARC: three acts */}
        {content && (
          <section className="relative md:min-h-[100dvh] flex flex-col justify-center border-t border-white/10 bg-black px-6 md:px-16 py-20 md:py-32">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-16 text-center">Scene 04 — The Arc</span>
            {(() => {
              // Cumulative numbering: phase 1's sources are [1..k], phase 2 continues at k+1, etc.
              const phaseCiteNums = content.history.reduce<number[][]>((acc, p) => {
                const base = acc.flat().length;
                acc.push((p.sources ?? []).map((_, j) => base + j + 1));
                return acc;
              }, []);
              return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/10 border border-white/10 max-w-6xl mx-auto w-full">
              {content.history.map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  viewport={{ once: true, margin: "-15%" }}
                  className="relative overflow-hidden bg-black p-10 md:p-12 flex flex-col gap-6 min-h-[320px]"
                >
                  {(visuals?.arcVideos?.[i] || visuals?.arc?.[i]) && (
                    <>
                      <ArcCardMedia poster={visuals.arc?.[i]} video={visuals.arcVideos?.[i]} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
                    </>
                  )}
                  <span className="relative z-10 font-mono text-4xl text-white/25" style={{ textShadow: "0 1px 10px rgba(0,0,0,0.9)" }}>0{i + 1}</span>
                  <h3 className="relative z-10 font-mono text-xs uppercase tracking-[0.25em] text-white" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.95)" }}>{phase.label}</h3>
                  <p className="relative z-10 text-sm text-white/80 font-light leading-relaxed" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.95)" }}>
                    {phase.body}
                    <CiteMarks nums={phaseCiteNums[i]} anchorPrefix="arc" />
                  </p>
                </motion.div>
              ))}
            </div>
              );
            })()}
            {/* History sources footnote — aggregated from all three phases, numbered
                to match the inline superscripts on each arc card. */}
            {(() => {
              const historySources = content.history.flatMap(p => p.sources ?? []);
              return historySources.length > 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true, margin: "-10%" }}
                  className="max-w-6xl mx-auto w-full mt-8 pt-6 border-t border-white/[0.07]"
                >
                  <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/55 mb-4">Sources</div>
                  <SourceList sources={historySources} anchorPrefix="arc" />
                </motion.div>
              ) : null;
            })()}
          </section>
        )}

        {/* INTERLUDE — ambient clip bridging The Arc into Scenario Analysis */}
        {content?.scenario && (
          <MediaInterlude
            video={`${import.meta.env.BASE_URL}videos/interludes/${cause.slug}.mp4`}
            caption="The possible future"
            line={content.scenario.horizon}
          />
        )}

        {/* SCENE 05 — SCENARIO ANALYSIS: the possible future, what converges, and when */}
        {content?.scenario && (
          <section className="relative bg-black px-6 md:px-16 py-20 md:py-32">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-16 block text-center">Scene 05 — Scenario Analysis</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-24">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-15%" }}
                  className="lg:col-span-4"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 mb-4">Projected horizon</div>
                  <div className="text-5xl md:text-6xl font-light font-sans tracking-tighter text-white">{content.scenario.horizon}</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  viewport={{ once: true, margin: "-15%" }}
                  className="lg:col-span-8"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 mb-4">The destination</div>
                  <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed">{content.scenario.destination}</p>
                </motion.div>
              </div>

              <div className="mb-16 md:mb-24">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 mb-8">What converges to get us there</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
                  {content.scenario.convergences.map((c, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: i * 0.08 }}
                      viewport={{ once: true, margin: "-10%" }}
                      className="bg-black p-8 hover:bg-white/[0.04] transition-colors duration-500"
                    >
                      <h3 className="text-xs font-mono tracking-[0.15em] text-white/80 mb-3">{c.name}</h3>
                      <p className="text-xs text-white/50 font-light leading-relaxed">{c.role}</p>
                    </motion.div>
                  ))}
                  {content.scenario.convergences.length % 3 !== 0 &&
                    Array.from({ length: 3 - (content.scenario.convergences.length % 3) }, (_, i) => (
                      <div key={`cf3-${i}`} className="bg-black hidden lg:block" aria-hidden />
                    ))}
                  {content.scenario.convergences.length % 2 !== 0 && (
                    <div className="bg-black hidden sm:block lg:hidden" aria-hidden />
                  )}
                </div>
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 mb-8">The path</div>
                <div className="flex flex-col">
                  {content.scenario.milestones.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: i * 0.1 }}
                      viewport={{ once: true, margin: "-10%" }}
                      className="grid grid-cols-[7rem_1fr] md:grid-cols-[10rem_1fr] gap-6 md:gap-12 border-t border-white/10 py-6 last:border-b"
                    >
                      <div className="font-mono text-xs tracking-[0.15em] text-white/50 pt-0.5">{m.period}</div>
                      <p className="text-sm text-white/70 font-light leading-relaxed">{m.event}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {content.scenario.sources && content.scenario.sources.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true, margin: "-10%" }}
                  className="mt-16 pt-8 border-t border-white/[0.07]"
                >
                  <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/55 mb-4">Sources</div>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {content.scenario.sources.map((s, i) => (
                      <a
                        key={i}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 min-w-11 items-center font-mono text-[10px] text-white/50 underline decoration-white/25 underline-offset-2 transition-colors duration-300 hover:text-white/70 hover:decoration-white/50 sm:min-h-0"
                      >
                        {s.name}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </section>
        )}

        {/* SCENE 06 — THE STAKES: what winning unlocks, the cost of delay, the wildcard */}
        {content?.stakes && (
          <section className="relative border-t border-white/10 bg-black px-6 md:px-16 py-20 md:py-32">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-16 block text-center">Scene 06 — The Stakes</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
                {[
                  { label: "If we win", body: content.stakes.win, tone: "text-white/85" },
                  { label: "If we stall", body: content.stakes.lose, tone: "text-white/60" },
                  { label: "The wildcard", body: content.stakes.wildcard, tone: "text-white/70" },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.15 }}
                    viewport={{ once: true, margin: "-15%" }}
                    className="bg-black p-10 md:p-12 min-h-[280px] flex flex-col gap-6"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">{s.label}</span>
                    <p className={`text-base font-light leading-relaxed ${s.tone}`}>
                      {s.body}
                      <CiteMarks
                        nums={(content.stakes!.sources ?? []).map((_, n) => n + 1)}
                        anchorPrefix="stakes"
                      />
                    </p>
                  </motion.div>
                ))}
              </div>
              {content.stakes.sources && content.stakes.sources.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true, margin: "-10%" }}
                  className="mt-8 pt-6 border-t border-white/[0.07]"
                >
                  <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/55 mb-4">Sources</div>
                  <SourceList sources={content.stakes.sources} anchorPrefix="stakes" />
                </motion.div>
              )}
            </div>
          </section>
        )}

        {/* INTERLUDE — dimension artwork bridging The Stakes into the status strip */}
        {content && dim && stripImages[cause.dimensionId] && (
          <MediaInterlude
            video={`${import.meta.env.BASE_URL}videos/interludes/dims/${cause.dimensionId}.mp4`}
            image={stripImages[cause.dimensionId]}
            caption={`Dimension ${dim.numeral} — ${dim.name}`}
            line={dim.statement}
          />
        )}

        {/* SCENE 07 — STATUS + VANGUARD + CTA, one compact strip */}
        {content && (
          <section className="relative bg-black px-6 md:px-16 py-20 md:py-32">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 block mb-10">Where This Stands</span>
                <div className="text-4xl md:text-5xl font-light font-sans tracking-tighter mb-6">{content.progress.stage}</div>
                <p className="text-sm text-white/50 font-light leading-relaxed max-w-md mb-10">{content.progress.statusLine}</p>
                <div className="flex flex-wrap gap-x-12 gap-y-6">
                  {content.progress.metrics.map((m, i) => (
                    <div key={i}>
                      <div className="text-[10px] font-mono text-white/50 uppercase tracking-[0.2em] mb-2">{m.label}</div>
                      <div className="text-2xl font-light text-white/55">{m.value}</div>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 mt-6">Metrics pending vetted data</p>
              </div>

              <div className="lg:col-span-7">
                <section className="p-10 border border-white/20 bg-white/5 relative overflow-hidden group h-full flex flex-col justify-between gap-10">
                  <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] z-0" />
                  <div className="relative z-10 group-hover:text-black transition-colors duration-500">
                    <h2 className="text-2xl font-sans font-light uppercase tracking-tight leading-none mb-4">Own this cause</h2>
                    <p className="text-xs font-light opacity-60 leading-relaxed group-hover:opacity-80">{content.getInvolved}</p>
                  </div>
                  <Button asChild variant="outline" className="relative z-10 w-full rounded-none border-current bg-transparent group-hover:border-black group-hover:text-black font-mono text-[10px] uppercase tracking-[0.2em] hover:bg-black hover:text-white h-12">
                    <Link href={`/contacts?cause=${cause.slug}`}>
                      Initiate Transmission
                    </Link>
                  </Button>
                </section>
              </div>
            </div>

            {/* Vanguard Entities — full-width ranked index so all 20+ stay visible */}
            {(content.organizations ?? []).length > 0 && (
              <div className="max-w-6xl mx-auto mt-28">
                <div className="flex items-baseline justify-between mb-12">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">Vanguard Entities</span>
                  <span className="font-mono text-[10px] tracking-[0.3em] text-white/55">Ranked by impact · {(content.organizations ?? []).length}</span>
                </div>

                {/* Top three — the heavyweights get their own row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-px">
                  {(content.organizations ?? []).slice(0, 3).map((org, i) => {
                    const Card = org.url ? "a" : "div";
                    return (
                      <Card
                        key={i}
                        {...(org.url ? { href: org.url, target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="bg-black p-8 hover:bg-white/[0.04] transition-colors duration-500 block min-h-11 group/org"
                      >
                        <div className="font-mono text-[10px] tracking-[0.3em] text-white/50 mb-5">{String(i + 1).padStart(2, "0")}</div>
                        <h3 className="text-base font-sans font-light tracking-tight text-white mb-3">
                          {org.name}
                          {org.url && <span className="ml-2 text-white/50 group-hover/org:text-white/80 transition-colors duration-500 text-xs align-super">↗</span>}
                        </h3>
                        <p className="text-xs text-white/60 font-light leading-relaxed">{org.focus}</p>
                      </Card>
                    );
                  })}
                </div>

                {/* The rest — dense ranked grid, every entity visible */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 border-t-0">
                  {(content.organizations ?? []).slice(3).map((org, i) => {
                    const Card = org.url ? "a" : "div";
                    return (
                      <Card
                        key={i}
                        {...(org.url ? { href: org.url, target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="bg-black px-6 py-5 hover:bg-white/[0.04] transition-colors duration-500 min-h-11 group block"
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="font-mono text-[10px] tracking-[0.2em] text-white/55 shrink-0">{String(i + 4).padStart(2, "0")}</span>
                          <div>
                            <h3 className="text-xs font-mono tracking-[0.15em] text-white/75 group-hover:text-white transition-colors duration-500 mb-1.5">
                              {org.name}
                              {org.url && <span className="ml-2 text-white/45 group-hover:text-white/70 transition-colors duration-500">↗</span>}
                            </h3>
                            <p className="text-[11px] text-white/50 font-light leading-relaxed">{org.focus}</p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                  {/* Fillers — keep the divider background from showing through
                      unfilled cells in the last row (per breakpoint column count). */}
                  {(() => {
                    const n = (content.organizations ?? []).slice(3).length;
                    const fill2 = n % 2 === 0 ? 0 : 1;
                    const fill3 = (3 - (n % 3)) % 3;
                    return (
                      <>
                        {Array.from({ length: fill3 }, (_, i) => (
                          <div key={`f3-${i}`} className="bg-black hidden lg:block" aria-hidden />
                        ))}
                        {Array.from({ length: fill2 }, (_, i) => (
                          <div key={`f2-${i}`} className="bg-black hidden sm:block lg:hidden" aria-hidden />
                        ))}
                      </>
                    );
                  })()}
                </div>
              </div>
            )}
            {content.readAs && (
              <p className="max-w-6xl mx-auto mt-20 text-[10px] font-mono uppercase tracking-[0.25em] text-white/55 text-center">
                {content.readAs}
              </p>
            )}
          </section>
        )}
      </div>

      {/* NEXT CAUSE — cinematic full-width card keeping the journey flowing */}
      {nextCause && (
        <Link href={`/cause/${nextCause.slug}`} className="group block relative overflow-hidden mt-20 md:mt-32 h-[42dvh] md:h-[56dvh]">
          <img
            src={getCauseImage(nextCause)}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-40 transition-all duration-700 ease-out group-hover:opacity-60 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black" aria-hidden />
          <div className="relative h-full max-w-screen-2xl mx-auto px-6 md:px-16 flex flex-col justify-center items-center text-center gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/60">
              Next cause · {nextCause.id} / 37
            </span>
            <span className="font-sans text-3xl md:text-6xl font-light tracking-tighter text-white/90 group-hover:text-white transition-colors">
              {nextCause.name}
            </span>
            <span className="font-serif text-sm md:text-lg text-white/60 max-w-xl">
              {nextCause.hook}
            </span>
            <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.35em] text-white/60 group-hover:text-white transition-colors flex items-center gap-3">
              Continue <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-2" />
            </span>
          </div>
        </Link>
      )}

      {/* FOOTER NAV */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 mt-20 md:mt-32 border-t border-white/10 pt-16 flex flex-col md:flex-row justify-between items-center gap-12 pb-24">
        {prevCause ? (
          <Link href={`/cause/${prevCause.slug}`} className="group flex min-h-11 flex-col justify-center gap-4 items-start w-full md:w-1/3">
            <span className="text-[10px] font-mono uppercase text-white/55 tracking-[0.2em] flex items-center gap-3">
              <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-2" />
              Previous
            </span>
            <span className="text-xl font-light uppercase tracking-tighter text-white/60 group-hover:text-white transition-colors">
              {prevCause.name}
            </span>
          </Link>
        ) : <div className="w-full md:w-1/3" />}

        <Link href="/atlas" className="flex min-h-11 items-center justify-center text-[10px] font-mono uppercase text-white/55 tracking-[0.2em] hover:text-white transition-colors text-center w-full md:w-1/3">
          Return to Atlas
        </Link>

        {nextCause ? (
          <Link href={`/cause/${nextCause.slug}`} className="group flex min-h-11 flex-col justify-center gap-4 items-end w-full md:w-1/3 text-right">
            <span className="text-[10px] font-mono uppercase text-white/55 tracking-[0.2em] flex items-center gap-3">
              Next
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-2" />
            </span>
            <span className="text-xl font-light uppercase tracking-tighter text-white/60 group-hover:text-white transition-colors">
              {nextCause.name}
            </span>
          </Link>
        ) : <div className="w-full md:w-1/3" />}
      </div>
      
    </motion.div>
    </>
  );
}
