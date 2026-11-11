import { useEffect, useRef, useState } from "react";

interface SceneVideoProps {
  src: string;
  /** Optional VP9/WebM source tried before the MP4 fallback. */
  webmSrc?: string;
  poster?: string;
  className?: string;
  objectPosition?: string;
  /** Preload the full clip immediately (above-the-fold heroes). Default: lazy via IntersectionObserver. */
  eager?: boolean;
  /** Delay (ms) before mounting the video element — used to let shared-layout transitions finish first. */
  mountDelay?: number;
  /** Opt out of the auto-derived poster when the parent owns its own fallback image (avoids double exposure). */
  disablePoster?: boolean;
  /** Loop playback (default true). Set false for play-once sequences. */
  loop?: boolean;
  /** Fired when a non-looping clip finishes playing. */
  onEnded?: () => void;
  /** Fired once playback actually starts (video is visible). */
  onReady?: () => void;
  /**
   * How far ahead of the viewport to start buffering (IntersectionObserver
   * rootMargin). Default two viewports. Pass something tighter (e.g. "75% 0px")
   * on pages that stack many full-screen clips so scrolling doesn't fan out
   * downloads of the whole set.
   */
  preloadMargin?: string;
}

/**
 * Every clip under /videos has a matching still under /videos/posters
 * (same subpath, .jpg). Deriving it here gives every scene an instant
 * backdrop while the clip buffers — no per-callsite wiring needed.
 */
function derivePoster(src: string): string | undefined {
  if (!/\/videos\/.*\.mp4$/.test(src)) return undefined;
  return src.replace("/videos/", "/videos/posters/").replace(/\.mp4$/, ".jpg");
}

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Cinematic looping background video.
 * - Muted, looping, playsInline autoplay.
 * - Fades in only once playback actually starts (no flash / empty frame);
 *   the underlying still remains the fallback if playback never begins.
 * - Honors prefers-reduced-motion by not rendering the video at all.
 * - Lazy: below-the-fold videos only load when near the viewport.
 * - Pauses when scrolled far off-screen to save decode work.
 */
export function SceneVideo({ src, webmSrc, poster, className = "", objectPosition, eager = false, mountDelay = 0, disablePoster = false, loop = true, onEnded, onReady, preloadMargin = "200% 0px" }: SceneVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [mounted, setMounted] = useState(mountDelay === 0);
  const [activated, setActivated] = useState(eager);
  const [reduced] = useState(prefersReducedMotion);
  const effectivePoster = disablePoster ? undefined : (poster ?? derivePoster(src));

  useEffect(() => {
    if (mountDelay === 0) return;
    const t = setTimeout(() => setMounted(true), mountDelay);
    return () => clearTimeout(t);
  }, [mountDelay]);

  useEffect(() => {
    if (eager || reduced || !mounted) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActivated(true);
          io.disconnect();
        }
      },
      // Start buffering two viewports ahead so the clip is ready to play the
      // moment the scene scrolls in — no visible poster-before-video gap.
      { rootMargin: preloadMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [eager, reduced, mounted, preloadMargin]);

  // Pause/resume playback as the video leaves/enters the viewport.
  // Also retries play() on visibility — covers autoplay being deferred
  // (e.g. mobile Safari Low Power Mode releasing the restriction later).
  useEffect(() => {
    const el = ref.current;
    if (!el || !activated || reduced) return;
    const tryPlay = () => {
      el.play().catch(() => {
        /* still image beneath remains the fallback */
      });
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) tryPlay();
        else el.pause();
      },
      { rootMargin: "20% 0px" },
    );
    io.observe(el);
    el.addEventListener("loadeddata", tryPlay);
    return () => {
      io.disconnect();
      el.removeEventListener("loadeddata", tryPlay);
    };
  }, [activated, reduced]);

  if (reduced || !mounted) return null;

  return (
    <video
      ref={ref}
      src={!webmSrc && activated ? src : undefined}
      poster={effectivePoster}
      muted
      loop={loop}
      playsInline
      autoPlay
      preload={eager || activated ? "auto" : "none"}
      onPlaying={() => {
        setReady(true);
        onReady?.();
      }}
      onEnded={onEnded}
      aria-hidden
      className={`${className} transition-opacity duration-300 ease-out ${ready || effectivePoster ? "opacity-100" : "opacity-0"}`}
      style={objectPosition ? { objectPosition } : undefined}
    >
      {webmSrc && activated ? (
        <>
          <source src={webmSrc} type="video/webm" />
          <source src={src} type="video/mp4" />
        </>
      ) : null}
    </video>
  );
}
