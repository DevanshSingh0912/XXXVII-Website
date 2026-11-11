import { useCallback, useEffect, useRef, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&/\\<>*+=";

/**
 * Kargo-style hover word animation:
 * on hover each letter scrambles independently through random glyphs
 * (with a chromatic RGB-split ghost) before settling left-to-right.
 */
export function GlitchText({ text, className }: { text: string; className?: string }) {
  const [display, setDisplay] = useState<string[]>(() => text.split(""));
  const [glitching, setGlitching] = useState(false);
  const rafRef = useRef<number>(0);
  const intentRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const chars = useRef(text.split(""));

  useEffect(() => {
    chars.current = text.split("");
    setDisplay(text.split(""));
  }, [text]);

  const stop = useCallback(() => {
    clearTimeout(intentRef.current);
    cancelAnimationFrame(rafRef.current);
    setGlitching(false);
    setDisplay(chars.current.slice());
  }, []);

  const scramble = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    setGlitching(true);
    const start = performance.now();
    const total = 90 * chars.current.length + 220; // settle L->R

    const tick = (now: number) => {
      const elapsed = now - start;
      const settled = Math.floor(elapsed / 90); // letters locked so far
      setDisplay(
        chars.current.map((c, i) => {
          if (c === " " || i < settled) return c;
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
      );
      if (elapsed < total) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setGlitching(false);
        setDisplay(chars.current.slice());
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  // Only start scrambling when the cursor actually rests on the text —
  // sweeping the mouse across the nav shouldn't set off every link in turn.
  const scheduleScramble = useCallback(() => {
    clearTimeout(intentRef.current);
    intentRef.current = setTimeout(scramble, 140);
  }, [scramble]);

  useEffect(
    () => () => {
      clearTimeout(intentRef.current);
      cancelAnimationFrame(rafRef.current);
    },
    [],
  );

  return (
    <span
      className={className}
      onMouseEnter={scheduleScramble}
      onMouseLeave={stop}
      onFocus={scramble}
      onBlur={stop}
      aria-label={text}
      style={{ display: "inline-block", whiteSpace: "pre" }}
    >
      {display.map((c, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            display: "inline-block",
            textShadow: glitching && c !== chars.current[i]
              ? "-2px 0 rgba(0,255,255,0.75), 2px 0 rgba(255,0,60,0.75)"
              : undefined,
            transform: glitching && c !== chars.current[i]
              ? `translateY(${(i % 2 === 0 ? -1 : 1) * 1.5}px)`
              : undefined,
            transition: "transform 80ms linear",
          }}
        >
          {c}
        </span>
      ))}
    </span>
  );
}
