/**
 * Video clip registry.
 *
 * Clips live in public/videos/<dimensionId>/ and are served as static
 * assets at their original quality (no bundler re-encoding).
 */

const BASE = import.meta.env.BASE_URL;

/** Cause slug → hero clip URL. Only causes with a supplied clip appear here. */
const causeVideos: Record<string, string> = {
  // Dimension I — The Substrate
  "longevity-escape-velocity": `${BASE}videos/substrate/longevity-escape-velocity.mp4`,
  "morphological-freedom": `${BASE}videos/substrate/morphological-freedom.mp4`,
  "sensory-expansion": `${BASE}videos/substrate/sensory-expansion.mp4`,
  "total-pathogen-sovereignty": `${BASE}videos/substrate/total-pathogen-sovereignty.mp4`,
  "reproductive-autonomy": `${BASE}videos/substrate/reproductive-autonomy.mp4`,

  // Dimension II — The Engine
  "energy-limitlessness": `${BASE}videos/engine/energy-limitlessness.mp4`,
  "atomic-fabrication": `${BASE}videos/engine/atomic-fabrication.mp4`,
  "nutritional-superabundance": `${BASE}videos/engine/nutritional-superabundance.mp4`,
  "computational-omnipresence": `${BASE}videos/engine/computational-omnipresence.mp4`,

  // Dimension III — The Nexus
  "decentralized-sensemaking": `${BASE}videos/nexus/decentralized-sensemaking.mp4`,
  "distributive-design": `${BASE}videos/nexus/distributive-design.mp4`,
  "algorithmic-justice": `${BASE}videos/nexus/algorithmic-justice.mp4`,
  "post-scarcity-economics": `${BASE}videos/nexus/post-scarcity-economics.mp4`,
  "tyranny-resistant-architecture": `${BASE}videos/nexus/tyranny-resistant-architecture.mp4`,

  // Dimension IV — The Intellect
  "universal-cognitive-mastery": `${BASE}videos/intellect/universal-cognitive-mastery.mp4`,
  "infinite-knowledge-creation": `${BASE}videos/intellect/infinite-knowledge-creation.mp4`,
  "collective-superintelligence": `${BASE}videos/intellect/collective-superintelligence.mp4`,

  // Dimension V — The Inner World
  "architected-eudaimonia": `${BASE}videos/inner-world/architected-eudaimonia.mp4`,
  "the-psychedelic-commons": `${BASE}videos/inner-world/the-psychedelic-commons.mp4`,
  "vertical-development": `${BASE}videos/inner-world/vertical-development.mp4`,

  // Dimension VI — The Bond
  "radical-belonging": `${BASE}videos/bond/radical-belonging.mp4`,
  "pan-sentient-ethics": `${BASE}videos/bond/pan-sentient-ethics.mp4`,
  "the-new-mythos": `${BASE}videos/bond/the-new-mythos.mp4`,

  // Dimension VII — The Canvas
  "infinite-creative-expression": `${BASE}videos/canvas/infinite-creative-expression.mp4`,
  "civilizational-aesthetics": `${BASE}videos/canvas/civilizational-aesthetics.mp4`,
  "the-play-ethic": `${BASE}videos/canvas/the-play-ethic.mp4`,

  // Dimension VIII — The Habitat
  "regenerative-terraforming": `${BASE}videos/habitat/regenerative-terraforming.mp4`,
  "synthetic-ecology": `${BASE}videos/habitat/synthetic-ecology.mp4`,
  "urban-symbiosis": `${BASE}videos/habitat/urban-symbiosis.mp4`,

  // Dimension IX — The Horizon
  "multi-planetary-presence": `${BASE}videos/horizon/multi-planetary-presence.mp4`,
  "stellar-engineering": `${BASE}videos/horizon/stellar-engineering.mp4`,
  "mastery-of-fundamental-physics": `${BASE}videos/horizon/mastery-of-fundamental-physics.mp4`,
  "first-contact-readiness": `${BASE}videos/horizon/first-contact-readiness.mp4`,

  // Dimension X — The Continuity
  "existential-security": `${BASE}videos/continuity/existential-security.mp4`,
  "permanent-revisability": `${BASE}videos/continuity/permanent-revisability.mp4`,
  "antifragile-civilization": `${BASE}videos/continuity/antifragile-civilization.mp4`,
  "the-long-archive": `${BASE}videos/continuity/the-long-archive.mp4`,
};

/** Dimension id → title-card clip URL. */
const dimensionVideos: Record<string, string> = {
  substrate: `${BASE}videos/substrate/title-card.mp4`,
  engine: `${BASE}videos/engine/title-card.mp4`,
  nexus: `${BASE}videos/nexus/title-card.mp4`,
  intellect: `${BASE}videos/intellect/title-card.mp4`,
  "inner-world": `${BASE}videos/inner-world/title-card.mp4`,
  bond: `${BASE}videos/bond/title-card.mp4`,
  canvas: `${BASE}videos/canvas/title-card.mp4`,
  habitat: `${BASE}videos/habitat/title-card.mp4`,
  horizon: `${BASE}videos/horizon/title-card.mp4`,
  continuity: `${BASE}videos/continuity/title-card.mp4`,
};

/**
 * Opening (home) sequence backdrops, mapped by meaning:
 * - intro — the XXXVII title card plays first, before any statement.
 * - "The Moment" / "The Question" — Earth waking up, a golden grid of designed intent.
 * - "The Vision" — the organic futuristic city: the future being imagined.
 * - "Why Now" — the montage of god-like tools arriving this decade.
 * - "The Call" / bridge — the organic futuristic city: the future being built.
 */
const openingVideos = {
  earth: `${BASE}videos/opening/Earth_golden_energy_grid.mp4`,
  title: `${BASE}videos/opening/Title_card_THE_XXXVII.mp4`,
  tools: `${BASE}videos/opening/Godlike_tools_montage.mp4`,
  city: `${BASE}videos/opening/Futuristic_city_organic.mp4`,
} as const;

/** Backdrop clip for each home statement label; intro/bridge use their own keys. */
export const openingVideoByLabel: Record<string, string> = {
  intro: openingVideos.title,
  "The Moment": openingVideos.earth,
  "The Question": openingVideos.earth,
  "The Vision": openingVideos.city,
  "Why Now": openingVideos.tools,
  "The Call": openingVideos.city,
  bridge: openingVideos.city,
};

export function getCauseVideo(slug: string): string | undefined {
  return causeVideos[slug];
}

export function getDimensionVideo(dimensionId: string): string | undefined {
  return dimensionVideos[dimensionId];
}
