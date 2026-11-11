import { BackButton } from "@/components/back-button";
import { dimensions, causes } from "@/lib/data";
import { JsonLd } from "@/components/json-ld";
import { dimensionContentById } from "@/lib/content";
import { getDimensionVideo } from "@/lib/videos";
import { SceneVideo } from "@/components/scene-video";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Dimensions() {
  return (
    <>
    <JsonLd data={dimensionsStructuredData} />
    <div className="bg-black text-white selection:bg-white selection:text-black">
      <BackButton />
      <h1 className="sr-only">The 10 Dimensions of Human Existence</h1>
      {dimensions.map((dim, index) => {
        const dimCauses = causes.filter(c => c.dimensionId === dim.id);
        const content = dimensionContentById[dim.id];
        const video = getDimensionVideo(dim.id);
        
        return (
          <section 
            key={dim.id} 
            className="relative min-h-[100dvh] flex flex-col justify-center px-8 md:px-16 lg:px-24 py-32 overflow-hidden border-b border-white/10"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <motion.img 
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.4 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true, margin: "-20%" }}
                src={dim.image} 
                alt={dim.name}
                className="w-full h-full object-cover grayscale-[0.8]"
              />
              {video && (
                <SceneVideo
                  src={video}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-black/60" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Left: Dimension Info */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true, margin: "-10%" }}
                >
                  <div className="text-xl md:text-2xl font-mono text-muted-foreground mb-8">
                    {dim.numeral}
                  </div>
                  <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-sans font-light uppercase tracking-tighter leading-[0.9] sm:leading-[0.85] break-words mb-8 text-stroke text-stroke-hover transition-colors duration-500 hover:text-white">
                    {dim.name}
                  </h2>
                  <p className="text-2xl md:text-4xl font-serif text-white/90 max-w-2xl leading-tight">
                    "{dim.statement}"
                  </p>
                  {content && (
                    <>
                      <p className="text-base md:text-lg font-light text-white/60 max-w-2xl leading-relaxed mt-8">
                        {content.intro}
                      </p>
                      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/55 max-w-2xl leading-relaxed mt-6">
                        {content.readAs}
                      </p>
                    </>
                  )}
                </motion.div>
              </div>

              {/* Right: Causes List */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true, margin: "-10%" }}
                  className="flex flex-col gap-1 border-l border-white/10 pl-8"
                >
                  <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6">Contained Causes</h3>
                  {dimCauses.map((cause) => (
                    <Link 
                      key={cause.id} 
                      href={`/cause/${cause.slug}`}
                      className="group flex min-h-11 items-baseline gap-4 py-3 border-b border-white/5 hover:border-white/30 transition-colors"
                    >
                      <span className="font-mono text-xs text-white/55 group-hover:text-white transition-colors">{cause.id}</span>
                      <span className="text-lg md:text-xl font-light uppercase tracking-wide text-white/70 group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                        {cause.name}
                      </span>
                    </Link>
                  ))}
                </motion.div>
              </div>

            </div>
          </section>
        );
      })}
    </div>
    </>
  );
}

const dimensionsStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "The 10 Dimensions of Human Existence",
  "description": "10 dimensions that organize the 37 causes powering humanity into an exponential future.",
  "url": "https://xxxvii.org/dimensions",
  "numberOfItems": dimensions.length,
  "itemListElement": dimensions.map((dim, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": `${dim.numeral}. ${dim.name}`,
    "description": dim.statement,
    "url": `https://xxxvii.org/dimensions#${dim.id}`,
  })),
};
