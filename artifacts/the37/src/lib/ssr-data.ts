/**
 * ssr-data.ts
 *
 * Pure server-side copy of the site's content — no Vite asset imports,
 * safe to require() in Node (Vite configureServer middleware, prerender
 * scripts, API server). Keep in sync with data.ts.
 */

export interface Dimension {
  id: string;
  numeral: string;
  name: string;
  statement: string;
}

export const dimensions: Dimension[] = [
  { id: "substrate",    numeral: "I",   name: "The Substrate",    statement: "Your body is not your limit. It is your first upgrade." },
  { id: "intellect",    numeral: "II",  name: "The Intellect",    statement: "Every human alive is a genius who hasn't been unlocked yet." },
  { id: "inner-world",  numeral: "III",   name: "The Inner World",  statement: "Joy is not a reward. It is a technology." },
  { id: "canvas",       numeral: "IV", name: "The Canvas",       statement: "When survival is solved, creation becomes the point." },
  { id: "bond",         numeral: "V",  name: "The Bond",         statement: "The deepest human suffering is not poverty. It is loneliness." },
  { id: "nexus",        numeral: "VI", name: "The Nexus",        statement: "The next revolution is not technological. It is coordinational." },
  { id: "engine",       numeral: "VII",  name: "The Engine",       statement: "When energy is free, everything changes." },
  { id: "habitat",      numeral: "VIII",name: "The Habitat",      statement: "Not sustainability. Regeneration. Not protection. Amplification." },
  { id: "horizon",      numeral: "IX",  name: "The Horizon",      statement: "Consciousness confined to one planet is consciousness at risk." },
  { id: "continuity",   numeral: "X",   name: "The Continuity",   statement: "Build things that outlast you. Then outlast your civilization." }
];

export interface Cause {
  id: string;
  slug: string;
  name: string;
  dimensionId: string;
  hook: string;
  description: string;
}

export const causes: Cause[] = [
  // I. The Substrate
  { id: "01", slug: "longevity-escape-velocity",   name: "Longevity Escape Velocity",   dimensionId: "substrate",   hook: "Make aging optional.",                                                description: "Achieve continuous cellular rejuvenation so that every year of medical progress adds more than one year to the healthy human lifespan. Death by aging becomes a choice, not an inevitability." },
  { id: "02", slug: "morphological-freedom",        name: "Morphological Freedom",        dimensionId: "substrate",   hook: "Your body, your architecture.",                                       description: "The sovereign right to upgrade, augment, and redesign the human body. The form you were born with is a starting point, not a sentence." },
  { id: "03", slug: "sensory-expansion",            name: "Sensory Expansion",            dimensionId: "substrate",   hook: "Reality is richer than biology allows us to perceive.",              description: "See infrared. Feel magnetic fields. Hear ultrasound. Expand the bandwidth of human experience through neural implants and synthetic sensory organs." },
  { id: "04", slug: "total-pathogen-sovereignty",   name: "Total Pathogen Sovereignty",   dimensionId: "substrate",   hook: "The immune system becomes programmable.",                            description: "Not curing diseases after they strike, but engineering proactive, systemic immunity at the genetic level. Pandemics become structurally impossible." },
  { id: "05", slug: "reproductive-autonomy",        name: "Reproductive Autonomy",        dimensionId: "substrate",   hook: "Every child, chosen. Every birth, intentional.",                     description: "Full mastery over human reproduction. The complete decoupling of reproduction from biological constraint or accident." },

  // II. The Intellect
  { id: "06", slug: "universal-cognitive-mastery",  name: "Universal Cognitive Mastery",  dimensionId: "intellect",   hook: "Genius is no longer an accident of birth.",                        description: "Provide every human with personalized, infinitely patient AI tutors and brain-computer interfaces. Anyone, anywhere, can master any subject they choose." },
  { id: "07", slug: "infinite-knowledge-creation",  name: "Infinite Knowledge Creation",  dimensionId: "intellect",   hook: "Knowledge that compounds forever.",                                 description: "Protect and accelerate the epistemological engine of civilization. Open science, open data, open reasoning. Make the process of discovery itself exponential and irreversible." },
  { id: "08", slug: "collective-superintelligence", name: "Collective Superintelligence", dimensionId: "intellect",   hook: "The hive mind, without losing the individual.",                    description: "Not just individual genius but networked human-AI cognition. Groups thinking together at scales and speeds previously impossible." },

  // III. The Inner World
  { id: "09", slug: "architected-eudaimonia",       name: "Architected Eudaimonia",       dimensionId: "inner-world", hook: "Purpose as a science, not an accident.",                           description: "Engineer deep meaning, flow, and joy as the default human state. In a world where survival is solved, the primary pursuit becomes the deliberate cultivation of flourishing." },
  { id: "10", slug: "vertical-development",         name: "Vertical Development",         dimensionId: "inner-world", hook: "Grow up, not just grow out.",                                      description: "Enable the evolution of consciousness itself. From egocentric to worldcentric to kosmocentric. Expand the human capacity to hold complexity, nuance, and compassion simultaneously." },
  { id: "11", slug: "the-psychedelic-commons",      name: "The Psychedelic Commons",      dimensionId: "inner-world", hook: "The frontier of the mind, treated with the rigor of space.",      description: "Safe, legal, guided access to non-ordinary states of consciousness for healing, growth, and exploration." },

  // IV. The Canvas
  { id: "12", slug: "infinite-creative-expression", name: "Infinite Creative Expression", dimensionId: "canvas",      hook: "Every person, an artist. Every thought, expressible.",             description: "Democratize the tools of creation so radically that every human can externalize their inner world in any medium without technical barriers." },
  { id: "13", slug: "civilizational-aesthetics",    name: "Civilizational Aesthetics",    dimensionId: "canvas",      hook: "Ugly systems are broken systems.",                                 description: "Make beauty a design principle of infrastructure, cities, and systems. Not art as decoration, but beauty as a fundamental engineering constraint." },
  { id: "14", slug: "the-play-ethic",               name: "The Play Ethic",               dimensionId: "canvas",      hook: "Play as the engine of innovation.",                                description: "Replace the work ethic with a play ethic. When survival is solved, play becomes the primary mode of human engagement with reality. Serious play. Generative play." },

  // V. The Bond
  { id: "15", slug: "radical-belonging",            name: "Radical Belonging",            dimensionId: "bond",        hook: "Solve loneliness as a civilizational priority.",                   description: "Engineer the conditions for deep human connection at scale. Make genuine community as accessible and abundant as information." },
  { id: "16", slug: "pan-sentient-ethics",          name: "Pan-Sentient Ethics",          dimensionId: "bond",        hook: "Ethics that scale with our power.",                                description: "Expand the moral circle to include all forms of consciousness. Animal, digital, alien. Build a civilization that works for all minds, not just human ones." },
  { id: "17", slug: "the-new-mythos",               name: "The New Mythos",               dimensionId: "bond",        hook: "The sacred, reinvented for a species that has outgrown its old gods.", description: "Create the stories, rituals, and shared narratives that hold a post-scarcity, multi-planetary, potentially immortal species together." },

  // VI. The Nexus
  { id: "18", slug: "decentralized-sensemaking",    name: "Decentralized Sensemaking",    dimensionId: "nexus",       hook: "Collective wisdom, not collective noise.",                          description: "Replace polarized media and fragmented governance with AI-augmented systems that synthesize diverse human perspectives into coherent, shared understanding." },
  { id: "19", slug: "post-scarcity-economics",      name: "Post-Scarcity Economics",      dimensionId: "nexus",       hook: "Work becomes optional. Purpose becomes universal.",                 description: "Design economic models where extreme wealth baselines are guaranteed. Decouple human survival from labor so that human focus shifts entirely from earning to creating." },
  { id: "20", slug: "tyranny-resistant-architecture",name: "Tyranny-Resistant Architecture",dimensionId: "nexus",     hook: "Freedom as infrastructure.",                                        description: "Build systems where concentrated, unaccountable power is structurally impossible. Not ideology. Engineering. Defense-dominant by design." },
  { id: "21", slug: "algorithmic-justice",          name: "Algorithmic Justice",          dimensionId: "nexus",       hook: "Justice that arrives in minutes, not years.",                       description: "Hyper-fast, transparent, perfectly equitable dispute resolution. Law that evolves at the speed of society, not the speed of bureaucracy." },
  { id: "22", slug: "distributive-design",          name: "Distributive Design",          dimensionId: "nexus",       hook: "Fairness as a feature, not a patch.",                               description: "Ensure that every system we build has equitable access baked into its architecture from inception. Not redistribution after the fact, but distribution by design." },

  // VII. The Engine
  { id: "23", slug: "energy-limitlessness",         name: "Energy Limitlessness",         dimensionId: "engine",      hook: "Free it, and you free everything.",                                  description: "Master fusion, orbital solar, and advanced geothermal to create energy grids so abundant that power becomes an effectively free utility for every human on Earth." },
  { id: "24", slug: "atomic-fabrication",           name: "Atomic Fabrication",           dimensionId: "engine",      hook: "The end of scarcity at the atomic level.",                          description: "Shift from extraction and global supply chains to localized, molecular assembly. The ability to synthesize any material or product on demand, anywhere, from base elements." },
  { id: "25", slug: "nutritional-superabundance",   name: "Nutritional Superabundance",   dimensionId: "engine",      hook: "No one goes hungry. Ever.",                                         description: "Move beyond agriculture entirely. Synthetic biology, precision fermentation, and cellular agriculture produce infinite, perfectly optimized nutrition with zero environmental cost." },
  { id: "26", slug: "computational-omnipresence",   name: "Computational Omnipresence",   dimensionId: "engine",      hook: "Intelligence infrastructure for all.",                              description: "Unlimited, free compute power and bandwidth available to every human as a fundamental right. The substrate upon which all other exponential growth is built." },

  // VIII. The Habitat
  { id: "27", slug: "regenerative-terraforming",    name: "Regenerative Terraforming",    dimensionId: "habitat",     hook: "Humanity as the immune system of the planet.",                    description: "Actively engineer Earth's biosphere back to optimal health. Manage weather systems, reverse desertification, restore oceans. Not humanity as its disease." },
  { id: "28", slug: "synthetic-ecology",            name: "Synthetic Ecology",            dimensionId: "habitat",     hook: "New life, engineered for the biosphere we want.",                 description: "Design entirely new, hyper-resilient ecosystems and synthetic organisms. Break down microplastics. Absorb carbon. Create biological systems that never existed in nature but serve the biosphere." },
  { id: "29", slug: "urban-symbiosis",              name: "Urban Symbiosis",              dimensionId: "habitat",     hook: "Cities that give back more than they take.",                      description: "Redesign cities as living, breathing organisms. Net-positive in energy, food, water, and biodiversity. Architecture that generates rather than consumes." },

  // IX. The Horizon
  { id: "30", slug: "multi-planetary-presence",     name: "Multi-Planetary Presence",     dimensionId: "horizon",     hook: "Backup civilization. Then expand it.",                            description: "Establish permanent, self-sustaining human habitats beyond Earth. Ensure consciousness is no longer dependent on a single point of failure." },
  { id: "31", slug: "stellar-engineering",          name: "Stellar Engineering",          dimensionId: "horizon",     hook: "Think at the scale of solar systems. Build at the scale of centuries.", description: "Begin the transition to a Kardashev Type II civilization. Build megastructures to harness the total energy output of our star." },
  { id: "32", slug: "mastery-of-fundamental-physics",name: "Mastery of Fundamental Physics",dimensionId: "horizon",  hook: "The universe has rules we haven't discovered. Find them.",        description: "Solve the theory of everything. Unlock new modes of reality manipulation. The physics we have not yet imagined." },
  { id: "33", slug: "first-contact-readiness",      name: "First Contact Readiness",      dimensionId: "horizon",     hook: "Be ready for the conversation that changes everything.",          description: "Prepare civilizationally for the discovery of or communication with non-terrestrial intelligence. Protocols, ethics, response systems." },

  // X. The Continuity
  { id: "34", slug: "existential-security",         name: "Existential Security",         dimensionId: "continuity",  hook: "Survive first. Then thrive forever.",                             description: "Reach a civilizational state where existential catastrophe becomes vanishingly unlikely. The precondition for everything else." },
  { id: "35", slug: "antifragile-civilization",     name: "Antifragile Civilization",     dimensionId: "continuity",  hook: "Every crisis makes us more capable, not less.",                  description: "Build systems that get stronger from shocks. Civilizational robustness that improves under stress rather than degrading beneath it." },
  { id: "36", slug: "permanent-revisability",       name: "Permanent Revisability",       dimensionId: "continuity",  hook: "The right to course-correct across deep time.",                  description: "Ensure that no value system, governance structure, or technological choice becomes permanently locked in. Flexibility as a civilizational principle." },
  { id: "37", slug: "the-long-archive",             name: "The Long Archive",             dimensionId: "continuity",  hook: "Memory that outlives planets.",                                   description: "Preserve human knowledge, culture, and genetic heritage in systems designed to last millions of years. The ultimate insurance policy for everything we have ever learned or created." },
];

export const getCause = (slug: string) => causes.find(c => c.slug === slug);
export const getDimension = (id: string) => dimensions.find(d => d.id === id);
