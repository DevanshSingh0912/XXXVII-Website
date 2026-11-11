import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { GlitchText } from "@/components/glitch-text";

/** Fixed top-left BACK control, same styling as the cause page's back link. */
export function BackButton({ href = "/atlas" }: { href?: string }) {
  return (
    // Sits below the fixed header strip (which is present on every page) so
    // the two fixed controls never overlap.
    <div className="fixed top-11 md:top-14 left-0 z-50 px-4 md:px-8 py-2">
      <Link
        href={href}
        className="group flex items-center gap-3 min-h-11 px-3 -mx-1 rounded-full bg-black/55 backdrop-blur-md md:px-0 md:mx-0 md:rounded-none md:bg-transparent md:backdrop-blur-none font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 md:text-white/50 hover:text-white transition-colors"
        style={{ textShadow: "0 0 6px rgba(0,0,0,0.95), 0 2px 4px rgba(0,0,0,0.9)" }}
      >
        <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
        <GlitchText text="BACK" />
      </Link>
    </div>
  );
}
