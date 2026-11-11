import { Link, useLocation, useParams } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import { causes, dimensions, getCauseImage } from "@/lib/data";
import CurvedGallery, { type GalleryItem } from "@/components/curved-gallery";

/* ────────────────────────────────────────────────────────────────────────
   PASTE YOUR OWN IMAGES HERE.
   Leave the array empty to show the 37 causes. To use custom photos
   instead, add entries like:
     { src: "https://…/photo1.jpg", caption: "WORKS — 2025", sub: "01", href: "/cause/some-slug" },
   ──────────────────────────────────────────────────────────────────────── */
const CUSTOM_ITEMS: GalleryItem[] = [];

function toRoman(n: number): string {
  const map: [number, string][] = [[40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
  let out = "";
  for (const [v, s] of map) while (n >= v) { out += s; n -= v; }
  return out;
}

function buildCauseItems(dimensionId?: string): GalleryItem[] {
  let list = dimensionId ? causes.filter(c => c.dimensionId === dimensionId) : causes;
  // The curved-gallery engine assumes the panel set spans more than a full
  // circle (as with all 37 causes). A short set (3-5 causes) would wrap every
  // few degrees and pop/jump, so tile the causes around the cylinder until
  // panel density matches the original.
  if (list.length > 0 && list.length < 30) {
    const base = list;
    list = [];
    while (list.length < 30) list = list.concat(base);
  }
  return list.map((cause) => {
    const dim = dimensions.find((d) => d.id === cause.dimensionId);
    return {
      src: getCauseImage(cause),
      caption: cause.name,
      sub: `${dim?.numeral ?? ""} / ${toRoman(parseInt(cause.id, 10))}`,
      href: `/cause/${cause.slug}`,
    };
  });
}

export default function Atlas() {
  const params = useParams<{ dimensionId?: string }>();
  // Only filter when the id matches a real dimension; otherwise show all 37.
  const dimensionId = dimensions.some(d => d.id === params.dimensionId) ? params.dimensionId : undefined;
  const [, setLocation] = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const shownCauses = dimensionId ? causes.filter(c => c.dimensionId === dimensionId) : causes;
  const items = CUSTOM_ITEMS.length > 0 ? CUSTOM_ITEMS : buildCauseItems(dimensionId);

  if (prefersReducedMotion) {
    return (
      <div className="min-h-screen bg-black text-white p-8 pt-24 pb-32">
        <h1 className="text-4xl font-serif mb-12">The Atlas</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {shownCauses.map(cause => {
            const dim = dimensions.find(d => d.id === cause.dimensionId);
            return (
              <Link key={cause.id} href={`/cause/${cause.slug}`}>
                <div className="group block cursor-pointer bg-card border border-white/10 rounded-lg overflow-hidden transition-colors hover:border-white/30">
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img src={getCauseImage(cause)} alt={cause.name} className="object-cover w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between text-muted-foreground text-xs font-mono mb-2">
                      <span>{dim?.numeral}</span>
                      <span>{cause.id}</span>
                    </div>
                    <h2 className="text-xl font-sans uppercase tracking-widest">{cause.name}</h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="w-full h-[100dvh] bg-black relative overflow-hidden"
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
        exit: { opacity: 0, transition: { duration: 0.6 } }
      }}
    >
      <CurvedGallery items={items} onNavigate={(href) => setLocation(href)} />
    </motion.div>
  );
}
