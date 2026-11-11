import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { homeContent } from "@/lib/content";
import { openingVideoByLabel } from "@/lib/videos";
import { SceneVideo } from "@/components/scene-video";

const STATEMENTS = homeContent.statements;
// Sequence: title-card intro → statements (bridge scene removed)
const TOTAL = 1 + STATEMENTS.length;

export default function Home() {
  const [index, setIndex] = useState(0);
  const [, setLocation] = useLocation();

  const isIntro = index === 0;
  const clampedIndex = Math.min(index, TOTAL - 1);
  const statement =
    clampedIndex > 0 ? STATEMENTS[clampedIndex - 1] : undefined;
  const videoSrc =
    clampedIndex === 0
      ? openingVideoByLabel.intro
      : openingVideoByLabel[statement!.label];

  // Each statement stays on screen while its clip plays through once;
  // when the clip ends, statement and video advance together (see onEnded below).
  // A timer is only used when the video can't drive the pacing.
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const videoDriven = Boolean(videoSrc) && !reducedMotion;

  // Every advance path (clip ended, fallback timer, click) goes through this
  // guard: it only moves forward if the sequence is still on the step the
  // caller saw, so concurrent triggers can never skip a scene.
  const advanceFrom = (from: number) =>
    setIndex(i => (i === from ? i + 1 : i));

  useEffect(() => {
    if (index >= TOTAL) {
      // Flow into Atlas after a short delay
      const timer = setTimeout(() => {
        setLocation("/atlas");
      }, 1000);
      return () => clearTimeout(timer);
    }

    // Fallback pacing: 4.5s when there's no clip, plus a generous safety
    // net in case a clip stalls and its "ended" event never fires.
    const timer = setTimeout(() => {
      advanceFrom(index);
    }, videoDriven ? 15000 : 4500);

    return () => clearTimeout(timer);
  }, [index, setLocation, videoDriven]);

  return (
    <div className="w-full h-[100dvh] bg-black text-white flex items-center justify-center p-8 cursor-pointer relative overflow-hidden" onClick={() => {
      if (index < TOTAL - 1) advanceFrom(index);
      else setLocation("/atlas");
    }}>
      {/* Cinematic video backdrop — crossfades between clips, black beneath as fallback */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <AnimatePresence>
          {videoSrc && index < TOTAL && (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <SceneVideo
                src={videoSrc}
                eager
                loop={false}
                onEnded={() => advanceFrom(index)}
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Darkening scrim keeps the typography legible — lifted during the
            title-card intro, which has no on-screen text of its own */}
        <div className={`absolute inset-0 bg-black/60 transition-opacity duration-1000 ${isIntro ? "opacity-0" : "opacity-100"}`} />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50 transition-opacity duration-1000 ${isIntro ? "opacity-0" : "opacity-100"}`} />
        {/* Mobile intro: the title is baked into the 16:9 clip, which object-cover
            crops on portrait screens — hide it under a scrim and render real text. */}
        {isIntro && <div className="absolute inset-0 bg-black md:hidden" />}
      </div>
      
      {/* Skip button */}
      <button 
        onClick={(e) => { e.stopPropagation(); setLocation("/atlas"); }}
        className="absolute bottom-6 right-6 md:bottom-10 md:right-10 p-3 min-h-11 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-white/45 hover:text-white transition-colors duration-500 z-50"
      >
        Skip story <span aria-hidden>→</span>
      </button>

      <AnimatePresence mode="wait">
        {index < TOTAL && (
          <motion.div
            key={index}
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, filter: "blur(10px)", y: -20 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto text-center"
          >
            {isIntro ? (
              <div className="md:hidden">
                <h1 className="font-serif text-5xl tracking-[0.08em] text-[#e8dcc0]">
                  THE XXXVII
                </h1>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
                  A shared architecture for an exponential civilization.
                </p>
              </div>
            ) : (
              <>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/55 mb-8">
                  {statement!.label}
                </div>
                <h1 className="font-sans text-3xl md:text-5xl lg:text-7xl leading-[1.1] tracking-tight font-light">
                  {statement!.text}
                </h1>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
