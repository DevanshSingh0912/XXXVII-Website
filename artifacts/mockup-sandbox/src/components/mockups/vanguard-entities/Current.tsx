// Faithful extraction of the live Vanguard Entities section from
// artifacts/the37/src/pages/cause.tsx — exact classes and structure.
import { ORGS } from "./_data";

export function Current() {
  const orgs = ORGS;
  return (
    <div className="min-h-screen bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">Vanguard Entities</span>
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/40">Ranked by impact · {orgs.length}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-px">
          {orgs.slice(0, 3).map((org, i) => (
            <a key={i} href={org.url} target="_blank" rel="noopener noreferrer" className="bg-black p-8 hover:bg-white/[0.04] transition-colors duration-500 block group/org">
              <div className="font-mono text-[10px] tracking-[0.3em] text-white/30 mb-5">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="text-base font-sans font-light tracking-tight text-white mb-3">
                {org.name}
                <span className="ml-2 text-white/30 group-hover/org:text-white/70 transition-colors duration-500 text-xs align-super">↗</span>
              </h3>
              <p className="text-xs text-white/45 font-light leading-relaxed">{org.focus}</p>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 border-t-0">
          {orgs.slice(3).map((org, i) => (
            <a key={i} href={org.url} target="_blank" rel="noopener noreferrer" className="bg-black px-6 py-5 hover:bg-white/[0.04] transition-colors duration-500 group block">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 shrink-0">{String(i + 4).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-xs font-mono tracking-[0.15em] text-white/75 group-hover:text-white transition-colors duration-500 mb-1.5">
                    {org.name}
                    <span className="ml-2 text-white/25 group-hover:text-white/60 transition-colors duration-500">↗</span>
                  </h3>
                  <p className="text-[11px] text-white/35 font-light leading-relaxed">{org.focus}</p>
                </div>
              </div>
            </a>
          ))}
          {(() => {
            const n = orgs.slice(3).length;
            const fill2 = n % 2 === 0 ? 0 : 1;
            const fill3 = (3 - (n % 3)) % 3;
            return (
              <>
                {Array.from({ length: fill3 }, (_, i) => <div key={`f3-${i}`} className="bg-black hidden lg:block" aria-hidden />)}
                {Array.from({ length: fill2 }, (_, i) => <div key={`f2-${i}`} className="bg-black hidden sm:block lg:hidden" aria-hidden />)}
              </>
            );
          })()}
        </div>
      </div>
    </div>
  );
}
