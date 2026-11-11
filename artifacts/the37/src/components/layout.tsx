import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GlitchText } from "@/components/glitch-text";

const NAV_LINKS = [
  { href: "/prelude", label: "Prelude", numeral: "0" },
  { href: "/infos", label: "Manifesto", numeral: "I" },
  { href: "/atlas", label: "Dimensions", numeral: "II" },
  { href: "/causes", label: "The XXXVII", numeral: "III" },
  { href: "/contacts", label: "Players", numeral: "IV" },
  { href: "/", label: "The Story", numeral: "V" },
  { href: "/about", label: "About Us", numeral: "VI" },
  { href: "/dimensions", label: "Index", numeral: "VII" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  // Production serves prerendered pages at "/atlas/" (trailing slash), dev at
  // "/atlas" — normalize so the nav shows in both environments.
  const path = location.length > 1 && location.endsWith("/") ? location.slice(0, -1) : location;
  // Full-presence nav on the atlas gallery; everywhere else it stays mounted
  // but discreet (faint, no scrim, brightens on hover).
  const prominent = path === "/atlas" || path.startsWith("/atlas/") || path === "/causes";

  return (
    <div className="min-h-[100dvh] w-full bg-background text-foreground flex flex-col relative overflow-x-hidden selection:bg-white selection:text-black">
      {/* Main Content Area */}
      <main className="flex-1 w-full relative">
        {children}
      </main>

      {/* Nav — prominent on the atlas, discreet everywhere else */}
      <nav className="fixed inset-x-0 top-0 z-50 pointer-events-none flex items-center px-4 md:px-12 py-3 md:py-5">
        {/* Scrim so headings stay legible over any content behind the strip */}
        {prominent && (
          <div className="absolute inset-x-0 top-0 h-[150%] bg-gradient-to-b from-black/70 via-black/35 to-transparent pointer-events-none" aria-hidden="true" />
        )}

        {/* Mobile bar: wordmark + hamburger (below md) */}
        <div className="w-full flex md:hidden items-center justify-between relative">
          <Link href="/causes" className={`pointer-events-auto font-serif text-lg tracking-[0.4em] py-2 transition-colors duration-500 ${prominent ? "text-white" : "text-white/40 active:text-white"}`} style={prominent ? { textShadow: "0 0 6px rgba(0,0,0,0.95), 0 2px 4px rgba(0,0,0,0.9)" } : undefined}>
            XXXVII
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
            className={`pointer-events-auto min-w-11 min-h-11 flex items-center justify-center relative z-[70] transition-colors duration-500 ${prominent || menuOpen ? "text-white" : "text-white/40"}`}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Full-screen cinematic menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.35, delay: 0.25 } }}
                transition={{ duration: 0.4 }}
                className="pointer-events-auto fixed inset-0 z-[60] h-[100dvh] bg-black flex flex-col"
              >
                {/* Ambient depth */}
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_110%,rgba(255,255,255,0.07),transparent_70%)]" aria-hidden="true" />
                <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,white_3px,white_4px)]" aria-hidden="true" />

                <div className="px-6 pt-4">
                  <span className="font-serif text-lg tracking-[0.4em] text-white/90">XXXVII</span>
                </div>

                <nav className="flex-1 flex flex-col justify-center px-6" aria-label="Mobile">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: 0.12 + i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
                      exit={{ opacity: 0, y: 10, transition: { delay: i * 0.03, duration: 0.2 } }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`group flex items-baseline gap-4 py-4 border-b border-white/10 ${path === link.href ? "text-white" : "text-white/70"}`}
                      >
                        <span className="font-mono text-[10px] tracking-[0.3em] text-white/50 w-8 shrink-0">{link.numeral}</span>
                        <span className="font-sans font-light tracking-[0.2em] text-3xl leading-none group-active:text-white transition-colors">
                          <GlitchText text={link.label} />
                        </span>
                        {path === link.href && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white/80 self-center" aria-hidden="true" />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.6 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  className="px-6 pb-8 flex justify-between font-mono text-[9px] uppercase tracking-[0.3em] text-white/50"
                >
                  <span>The 37</span>
                  <span>Atlas of Causes</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop nav (md and up) — unchanged layout */}
        <div
          className={`w-full hidden md:flex items-center gap-6 md:gap-10 font-sans tracking-[0.25em] text-xs md:text-sm transition-colors duration-700 ${prominent ? "text-white" : "text-white/40"}`}
          style={{
            ...(prominent
              ? { textShadow: "0 0 6px rgba(0,0,0,0.95), 0 0 18px rgba(0,0,0,0.85), 0 2px 4px rgba(0,0,0,0.9)" }
              : {}),
            perspective: "900px",
            transformStyle: "preserve-3d",
          }}
        >

          {/* Left half — Prelude anchors the left edge; XXXVII stays dead center */}
          <div className="flex-1 flex items-center justify-between gap-8 lg:gap-12 pr-8 lg:pr-14">
            <div className="pointer-events-auto" style={{ transform: "rotateY(10deg) translateZ(-16px)" }}>
              <Link href="/prelude" className="transition-colors duration-500 hover:text-white whitespace-nowrap">
                <GlitchText text="Prelude" />
              </Link>
            </div>
            <div className="pointer-events-auto" style={{ transform: "rotateY(9deg) translateZ(-14px)" }}>
              <Link href="/infos" className="transition-colors duration-500 hover:text-white whitespace-nowrap">
                <GlitchText text="Manifesto" />
              </Link>
            </div>
            <div className="pointer-events-auto" style={{ transform: "rotateY(8deg) translateZ(-12px)" }}>
              <Link href="/atlas" className="transition-colors duration-500 hover:text-white whitespace-nowrap">
                <GlitchText text="Dimensions" />
              </Link>
            </div>
          </div>

          {/* Center Wordmark */}
          <div className="flex justify-center pointer-events-auto shrink-0">
            <Link href="/causes" className={`font-serif text-lg md:text-xl tracking-[0.4em] hover:scale-105 hover:text-white transition-all duration-500 whitespace-nowrap ${prominent ? "text-white" : "text-white/50"}`}>
              XXXVII
            </Link>
          </div>

          {/* Right half — Index anchors the right edge */}
          <div className="flex-1 flex items-center justify-between gap-8 lg:gap-12 pl-8 lg:pl-14">
            <div className="pointer-events-auto" style={{ transform: "rotateY(-8deg) translateZ(-12px)" }}>
              <Link href="/contacts" className="transition-colors duration-500 hover:text-white whitespace-nowrap">
                <GlitchText text="Players" />
              </Link>
            </div>
            <div className="pointer-events-auto" style={{ transform: "rotateY(-9deg) translateZ(-14px)" }}>
              <Link href="/" className="transition-colors duration-500 hover:text-white whitespace-nowrap">
                <GlitchText text="The Story" />
              </Link>
            </div>
            <div className="pointer-events-auto" style={{ transform: "rotateY(-10deg) translateZ(-16px)" }}>
              <Link href="/about" className="transition-colors duration-500 hover:text-white whitespace-nowrap">
                <GlitchText text="About Us" />
              </Link>
            </div>
            <div className="pointer-events-auto" style={{ transform: "rotateY(-11deg) translateZ(-18px)" }}>
              <Link href="/dimensions" className="transition-colors duration-500 hover:text-white whitespace-nowrap">
                <GlitchText text="Index" />
              </Link>
            </div>
          </div>

        </div>
      </nav>
    </div>
  );
}
