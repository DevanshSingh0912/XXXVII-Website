/**
 * Per-cause scene visuals — optional, quiet backdrop imagery for the
 * cinematic sequence below the hero. Causes without entries keep the
 * existing look (reused cause/dimension imagery).
 *
 * Added one cause at a time after review, like the video registry.
 */

const BASE = import.meta.env.BASE_URL;

export interface SceneVisuals {
  /** Scene 02 — "Why It Matters" split-panel image (instant poster / reduced-motion fallback). */
  whyItMatters?: string;
  /** Scene 02 — looping ambient clip layered over the image, like the hero. */
  whyItMattersVideo?: string;
  /** Scene 04 — one subtle background per act card, in order (posters / fallbacks). */
  arc?: [string, string, string];
  /** Scene 04 — looping ambient clips layered over the act cards, in order. */
  arcVideos?: [string, string, string];
}

const sceneVisualsBySlug: Record<string, SceneVisuals> = {
  "longevity-escape-velocity": {
    whyItMatters: `${BASE}images/scenes/longevity-escape-velocity/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/longevity-escape-velocity/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/longevity-escape-velocity/arc-01.jpg`,
      `${BASE}images/scenes/longevity-escape-velocity/arc-02.jpg`,
      `${BASE}images/scenes/longevity-escape-velocity/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/longevity-escape-velocity/arc-01.mp4`,
      `${BASE}videos/scenes/longevity-escape-velocity/arc-02.mp4`,
      `${BASE}videos/scenes/longevity-escape-velocity/arc-03.mp4`,
    ],
  },
  "morphological-freedom": {
    whyItMatters: `${BASE}images/scenes/morphological-freedom/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/morphological-freedom/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/morphological-freedom/arc-01.jpg`,
      `${BASE}images/scenes/morphological-freedom/arc-02.jpg`,
      `${BASE}images/scenes/morphological-freedom/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/morphological-freedom/arc-01.mp4`,
      `${BASE}videos/scenes/morphological-freedom/arc-02.mp4`,
      `${BASE}videos/scenes/morphological-freedom/arc-03.mp4`,
    ],
  },
  "total-pathogen-sovereignty": {
    whyItMatters: `${BASE}images/scenes/total-pathogen-sovereignty/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/total-pathogen-sovereignty/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/total-pathogen-sovereignty/arc-01.jpg`,
      `${BASE}images/scenes/total-pathogen-sovereignty/arc-02.jpg`,
      `${BASE}images/scenes/total-pathogen-sovereignty/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/total-pathogen-sovereignty/arc-01.mp4`,
      `${BASE}videos/scenes/total-pathogen-sovereignty/arc-02.mp4`,
      `${BASE}videos/scenes/total-pathogen-sovereignty/arc-03.mp4`,
    ],
  },
  "reproductive-autonomy": {
    whyItMatters: `${BASE}images/scenes/reproductive-autonomy/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/reproductive-autonomy/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/reproductive-autonomy/arc-01.jpg`,
      `${BASE}images/scenes/reproductive-autonomy/arc-02.jpg`,
      `${BASE}images/scenes/reproductive-autonomy/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/reproductive-autonomy/arc-01.mp4`,
      `${BASE}videos/scenes/reproductive-autonomy/arc-02.mp4`,
      `${BASE}videos/scenes/reproductive-autonomy/arc-03.mp4`,
    ],
  },
  "sensory-expansion": {
    whyItMatters: `${BASE}images/scenes/sensory-expansion/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/sensory-expansion/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/sensory-expansion/arc-01.jpg`,
      `${BASE}images/scenes/sensory-expansion/arc-02.jpg`,
      `${BASE}images/scenes/sensory-expansion/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/sensory-expansion/arc-01.mp4`,
      `${BASE}videos/scenes/sensory-expansion/arc-02.mp4`,
      `${BASE}videos/scenes/sensory-expansion/arc-03.mp4`,
    ],
  },
  "energy-limitlessness": {
    whyItMatters: `${BASE}images/scenes/energy-limitlessness/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/energy-limitlessness/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/energy-limitlessness/arc-01.jpg`,
      `${BASE}images/scenes/energy-limitlessness/arc-02.jpg`,
      `${BASE}images/scenes/energy-limitlessness/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/energy-limitlessness/arc-01.mp4`,
      `${BASE}videos/scenes/energy-limitlessness/arc-02.mp4`,
      `${BASE}videos/scenes/energy-limitlessness/arc-03.mp4`,
    ],
  },
  "atomic-fabrication": {
    whyItMatters: `${BASE}images/scenes/atomic-fabrication/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/atomic-fabrication/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/atomic-fabrication/arc-01.jpg`,
      `${BASE}images/scenes/atomic-fabrication/arc-02.jpg`,
      `${BASE}images/scenes/atomic-fabrication/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/atomic-fabrication/arc-01.mp4`,
      `${BASE}videos/scenes/atomic-fabrication/arc-02.mp4`,
      `${BASE}videos/scenes/atomic-fabrication/arc-03.mp4`,
    ],
  },
  "nutritional-superabundance": {
    whyItMatters: `${BASE}images/scenes/nutritional-superabundance/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/nutritional-superabundance/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/nutritional-superabundance/arc-01.jpg`,
      `${BASE}images/scenes/nutritional-superabundance/arc-02.jpg`,
      `${BASE}images/scenes/nutritional-superabundance/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/nutritional-superabundance/arc-01.mp4`,
      `${BASE}videos/scenes/nutritional-superabundance/arc-02.mp4`,
      `${BASE}videos/scenes/nutritional-superabundance/arc-03.mp4`,
    ],
  },
  "computational-omnipresence": {
    whyItMatters: `${BASE}images/scenes/computational-omnipresence/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/computational-omnipresence/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/computational-omnipresence/arc-01.jpg`,
      `${BASE}images/scenes/computational-omnipresence/arc-02.jpg`,
      `${BASE}images/scenes/computational-omnipresence/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/computational-omnipresence/arc-01.mp4`,
      `${BASE}videos/scenes/computational-omnipresence/arc-02.mp4`,
      `${BASE}videos/scenes/computational-omnipresence/arc-03.mp4`,
    ],
  },
  "decentralized-sensemaking": {
    whyItMatters: `${BASE}images/scenes/decentralized-sensemaking/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/decentralized-sensemaking/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/decentralized-sensemaking/arc-01.jpg`,
      `${BASE}images/scenes/decentralized-sensemaking/arc-02.jpg`,
      `${BASE}images/scenes/decentralized-sensemaking/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/decentralized-sensemaking/arc-01.mp4`,
      `${BASE}videos/scenes/decentralized-sensemaking/arc-02.mp4`,
      `${BASE}videos/scenes/decentralized-sensemaking/arc-03.mp4`,
    ],
  },
  "post-scarcity-economics": {
    whyItMatters: `${BASE}images/scenes/post-scarcity-economics/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/post-scarcity-economics/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/post-scarcity-economics/arc-01.jpg`,
      `${BASE}images/scenes/post-scarcity-economics/arc-02.jpg`,
      `${BASE}images/scenes/post-scarcity-economics/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/post-scarcity-economics/arc-01.mp4`,
      `${BASE}videos/scenes/post-scarcity-economics/arc-02.mp4`,
      `${BASE}videos/scenes/post-scarcity-economics/arc-03.mp4`,
    ],
  },
  "tyranny-resistant-architecture": {
    whyItMatters: `${BASE}images/scenes/tyranny-resistant-architecture/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/tyranny-resistant-architecture/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/tyranny-resistant-architecture/arc-01.jpg`,
      `${BASE}images/scenes/tyranny-resistant-architecture/arc-02.jpg`,
      `${BASE}images/scenes/tyranny-resistant-architecture/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/tyranny-resistant-architecture/arc-01.mp4`,
      `${BASE}videos/scenes/tyranny-resistant-architecture/arc-02.mp4`,
      `${BASE}videos/scenes/tyranny-resistant-architecture/arc-03.mp4`,
    ],
  },
  "algorithmic-justice": {
    whyItMatters: `${BASE}images/scenes/algorithmic-justice/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/algorithmic-justice/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/algorithmic-justice/arc-01.jpg`,
      `${BASE}images/scenes/algorithmic-justice/arc-02.jpg`,
      `${BASE}images/scenes/algorithmic-justice/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/algorithmic-justice/arc-01.mp4`,
      `${BASE}videos/scenes/algorithmic-justice/arc-02.mp4`,
      `${BASE}videos/scenes/algorithmic-justice/arc-03.mp4`,
    ],
  },
  "distributive-design": {
    whyItMatters: `${BASE}images/scenes/distributive-design/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/distributive-design/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/distributive-design/arc-01.jpg`,
      `${BASE}images/scenes/distributive-design/arc-02.jpg`,
      `${BASE}images/scenes/distributive-design/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/distributive-design/arc-01.mp4`,
      `${BASE}videos/scenes/distributive-design/arc-02.mp4`,
      `${BASE}videos/scenes/distributive-design/arc-03.mp4`,
    ],
  },
  "universal-cognitive-mastery": {
    whyItMatters: `${BASE}images/scenes/universal-cognitive-mastery/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/universal-cognitive-mastery/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/universal-cognitive-mastery/arc-01.jpg`,
      `${BASE}images/scenes/universal-cognitive-mastery/arc-02.jpg`,
      `${BASE}images/scenes/universal-cognitive-mastery/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/universal-cognitive-mastery/arc-01.mp4`,
      `${BASE}videos/scenes/universal-cognitive-mastery/arc-02.mp4`,
      `${BASE}videos/scenes/universal-cognitive-mastery/arc-03.mp4`,
    ],
  },
  "infinite-knowledge-creation": {
    whyItMatters: `${BASE}images/scenes/infinite-knowledge-creation/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/infinite-knowledge-creation/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/infinite-knowledge-creation/arc-01.jpg`,
      `${BASE}images/scenes/infinite-knowledge-creation/arc-02.jpg`,
      `${BASE}images/scenes/infinite-knowledge-creation/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/infinite-knowledge-creation/arc-01.mp4`,
      `${BASE}videos/scenes/infinite-knowledge-creation/arc-02.mp4`,
      `${BASE}videos/scenes/infinite-knowledge-creation/arc-03.mp4`,
    ],
  },
  "collective-superintelligence": {
    whyItMatters: `${BASE}images/scenes/collective-superintelligence/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/collective-superintelligence/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/collective-superintelligence/arc-01.jpg`,
      `${BASE}images/scenes/collective-superintelligence/arc-02.jpg`,
      `${BASE}images/scenes/collective-superintelligence/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/collective-superintelligence/arc-01.mp4`,
      `${BASE}videos/scenes/collective-superintelligence/arc-02.mp4`,
      `${BASE}videos/scenes/collective-superintelligence/arc-03.mp4`,
    ],
  },
  "architected-eudaimonia": {
    whyItMatters: `${BASE}images/scenes/architected-eudaimonia/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/architected-eudaimonia/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/architected-eudaimonia/arc-01.jpg`,
      `${BASE}images/scenes/architected-eudaimonia/arc-02.jpg`,
      `${BASE}images/scenes/architected-eudaimonia/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/architected-eudaimonia/arc-01.mp4`,
      `${BASE}videos/scenes/architected-eudaimonia/arc-02.mp4`,
      `${BASE}videos/scenes/architected-eudaimonia/arc-03.mp4`,
    ],
  },
  "vertical-development": {
    whyItMatters: `${BASE}images/scenes/vertical-development/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/vertical-development/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/vertical-development/arc-01.jpg`,
      `${BASE}images/scenes/vertical-development/arc-02.jpg`,
      `${BASE}images/scenes/vertical-development/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/vertical-development/arc-01.mp4`,
      `${BASE}videos/scenes/vertical-development/arc-02.mp4`,
      `${BASE}videos/scenes/vertical-development/arc-03.mp4`,
    ],
  },
  "the-psychedelic-commons": {
    whyItMatters: `${BASE}images/scenes/the-psychedelic-commons/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/the-psychedelic-commons/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/the-psychedelic-commons/arc-01.jpg`,
      `${BASE}images/scenes/the-psychedelic-commons/arc-02.jpg`,
      `${BASE}images/scenes/the-psychedelic-commons/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/the-psychedelic-commons/arc-01.mp4`,
      `${BASE}videos/scenes/the-psychedelic-commons/arc-02.mp4`,
      `${BASE}videos/scenes/the-psychedelic-commons/arc-03.mp4`,
    ],
  },
  "radical-belonging": {
    whyItMatters: `${BASE}images/scenes/radical-belonging/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/radical-belonging/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/radical-belonging/arc-01.jpg`,
      `${BASE}images/scenes/radical-belonging/arc-02.jpg`,
      `${BASE}images/scenes/radical-belonging/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/radical-belonging/arc-01.mp4`,
      `${BASE}videos/scenes/radical-belonging/arc-02.mp4`,
      `${BASE}videos/scenes/radical-belonging/arc-03.mp4`,
    ],
  },
  "pan-sentient-ethics": {
    whyItMatters: `${BASE}images/scenes/pan-sentient-ethics/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/pan-sentient-ethics/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/pan-sentient-ethics/arc-01.jpg`,
      `${BASE}images/scenes/pan-sentient-ethics/arc-02.jpg`,
      `${BASE}images/scenes/pan-sentient-ethics/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/pan-sentient-ethics/arc-01.mp4`,
      `${BASE}videos/scenes/pan-sentient-ethics/arc-02.mp4`,
      `${BASE}videos/scenes/pan-sentient-ethics/arc-03.mp4`,
    ],
  },
  "the-new-mythos": {
    whyItMatters: `${BASE}images/scenes/the-new-mythos/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/the-new-mythos/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/the-new-mythos/arc-01.jpg`,
      `${BASE}images/scenes/the-new-mythos/arc-02.jpg`,
      `${BASE}images/scenes/the-new-mythos/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/the-new-mythos/arc-01.mp4`,
      `${BASE}videos/scenes/the-new-mythos/arc-02.mp4`,
      `${BASE}videos/scenes/the-new-mythos/arc-03.mp4`,
    ],
  },
  "infinite-creative-expression": {
    whyItMatters: `${BASE}images/scenes/infinite-creative-expression/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/infinite-creative-expression/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/infinite-creative-expression/arc-01.jpg`,
      `${BASE}images/scenes/infinite-creative-expression/arc-02.jpg`,
      `${BASE}images/scenes/infinite-creative-expression/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/infinite-creative-expression/arc-01.mp4`,
      `${BASE}videos/scenes/infinite-creative-expression/arc-02.mp4`,
      `${BASE}videos/scenes/infinite-creative-expression/arc-03.mp4`,
    ],
  },
  "civilizational-aesthetics": {
    whyItMatters: `${BASE}images/scenes/civilizational-aesthetics/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/civilizational-aesthetics/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/civilizational-aesthetics/arc-01.jpg`,
      `${BASE}images/scenes/civilizational-aesthetics/arc-02.jpg`,
      `${BASE}images/scenes/civilizational-aesthetics/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/civilizational-aesthetics/arc-01.mp4`,
      `${BASE}videos/scenes/civilizational-aesthetics/arc-02.mp4`,
      `${BASE}videos/scenes/civilizational-aesthetics/arc-03.mp4`,
    ],
  },
  "the-play-ethic": {
    whyItMatters: `${BASE}images/scenes/the-play-ethic/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/the-play-ethic/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/the-play-ethic/arc-01.jpg`,
      `${BASE}images/scenes/the-play-ethic/arc-02.jpg`,
      `${BASE}images/scenes/the-play-ethic/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/the-play-ethic/arc-01.mp4`,
      `${BASE}videos/scenes/the-play-ethic/arc-02.mp4`,
      `${BASE}videos/scenes/the-play-ethic/arc-03.mp4`,
    ],
  },
  "regenerative-terraforming": {
    whyItMatters: `${BASE}images/scenes/regenerative-terraforming/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/regenerative-terraforming/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/regenerative-terraforming/arc-01.jpg`,
      `${BASE}images/scenes/regenerative-terraforming/arc-02.jpg`,
      `${BASE}images/scenes/regenerative-terraforming/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/regenerative-terraforming/arc-01.mp4`,
      `${BASE}videos/scenes/regenerative-terraforming/arc-02.mp4`,
      `${BASE}videos/scenes/regenerative-terraforming/arc-03.mp4`,
    ],
  },
  "synthetic-ecology": {
    whyItMatters: `${BASE}images/scenes/synthetic-ecology/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/synthetic-ecology/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/synthetic-ecology/arc-01.jpg`,
      `${BASE}images/scenes/synthetic-ecology/arc-02.jpg`,
      `${BASE}images/scenes/synthetic-ecology/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/synthetic-ecology/arc-01.mp4`,
      `${BASE}videos/scenes/synthetic-ecology/arc-02.mp4`,
      `${BASE}videos/scenes/synthetic-ecology/arc-03.mp4`,
    ],
  },
  "urban-symbiosis": {
    whyItMatters: `${BASE}images/scenes/urban-symbiosis/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/urban-symbiosis/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/urban-symbiosis/arc-01.jpg`,
      `${BASE}images/scenes/urban-symbiosis/arc-02.jpg`,
      `${BASE}images/scenes/urban-symbiosis/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/urban-symbiosis/arc-01.mp4`,
      `${BASE}videos/scenes/urban-symbiosis/arc-02.mp4`,
      `${BASE}videos/scenes/urban-symbiosis/arc-03.mp4`,
    ],
  },
  "multi-planetary-presence": {
    whyItMatters: `${BASE}images/scenes/multi-planetary-presence/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/multi-planetary-presence/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/multi-planetary-presence/arc-01.jpg`,
      `${BASE}images/scenes/multi-planetary-presence/arc-02.jpg`,
      `${BASE}images/scenes/multi-planetary-presence/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/multi-planetary-presence/arc-01.mp4`,
      `${BASE}videos/scenes/multi-planetary-presence/arc-02.mp4`,
      `${BASE}videos/scenes/multi-planetary-presence/arc-03.mp4`,
    ],
  },
  "stellar-engineering": {
    whyItMatters: `${BASE}images/scenes/stellar-engineering/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/stellar-engineering/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/stellar-engineering/arc-01.jpg`,
      `${BASE}images/scenes/stellar-engineering/arc-02.jpg`,
      `${BASE}images/scenes/stellar-engineering/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/stellar-engineering/arc-01.mp4`,
      `${BASE}videos/scenes/stellar-engineering/arc-02.mp4`,
      `${BASE}videos/scenes/stellar-engineering/arc-03.mp4`,
    ],
  },
  "mastery-of-fundamental-physics": {
    whyItMatters: `${BASE}images/scenes/mastery-of-fundamental-physics/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/mastery-of-fundamental-physics/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/mastery-of-fundamental-physics/arc-01.jpg`,
      `${BASE}images/scenes/mastery-of-fundamental-physics/arc-02.jpg`,
      `${BASE}images/scenes/mastery-of-fundamental-physics/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/mastery-of-fundamental-physics/arc-01.mp4`,
      `${BASE}videos/scenes/mastery-of-fundamental-physics/arc-02.mp4`,
      `${BASE}videos/scenes/mastery-of-fundamental-physics/arc-03.mp4`,
    ],
  },
  "first-contact-readiness": {
    whyItMatters: `${BASE}images/scenes/first-contact-readiness/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/first-contact-readiness/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/first-contact-readiness/arc-01.jpg`,
      `${BASE}images/scenes/first-contact-readiness/arc-02.jpg`,
      `${BASE}images/scenes/first-contact-readiness/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/first-contact-readiness/arc-01.mp4`,
      `${BASE}videos/scenes/first-contact-readiness/arc-02.mp4`,
      `${BASE}videos/scenes/first-contact-readiness/arc-03.mp4`,
    ],
  },
  "existential-security": {
    whyItMatters: `${BASE}images/scenes/existential-security/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/existential-security/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/existential-security/arc-01.jpg`,
      `${BASE}images/scenes/existential-security/arc-02.jpg`,
      `${BASE}images/scenes/existential-security/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/existential-security/arc-01.mp4`,
      `${BASE}videos/scenes/existential-security/arc-02.mp4`,
      `${BASE}videos/scenes/existential-security/arc-03.mp4`,
    ],
  },
  "antifragile-civilization": {
    whyItMatters: `${BASE}images/scenes/antifragile-civilization/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/antifragile-civilization/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/antifragile-civilization/arc-01.jpg`,
      `${BASE}images/scenes/antifragile-civilization/arc-02.jpg`,
      `${BASE}images/scenes/antifragile-civilization/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/antifragile-civilization/arc-01.mp4`,
      `${BASE}videos/scenes/antifragile-civilization/arc-02.mp4`,
      `${BASE}videos/scenes/antifragile-civilization/arc-03.mp4`,
    ],
  },
  "permanent-revisability": {
    whyItMatters: `${BASE}images/scenes/permanent-revisability/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/permanent-revisability/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/permanent-revisability/arc-01.jpg`,
      `${BASE}images/scenes/permanent-revisability/arc-02.jpg`,
      `${BASE}images/scenes/permanent-revisability/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/permanent-revisability/arc-01.mp4`,
      `${BASE}videos/scenes/permanent-revisability/arc-02.mp4`,
      `${BASE}videos/scenes/permanent-revisability/arc-03.mp4`,
    ],
  },
  "the-long-archive": {
    whyItMatters: `${BASE}images/scenes/the-long-archive/why-it-matters.jpg`,
    whyItMattersVideo: `${BASE}videos/scenes/the-long-archive/why-it-matters.mp4`,
    arc: [
      `${BASE}images/scenes/the-long-archive/arc-01.jpg`,
      `${BASE}images/scenes/the-long-archive/arc-02.jpg`,
      `${BASE}images/scenes/the-long-archive/arc-03.jpg`,
    ],
    arcVideos: [
      `${BASE}videos/scenes/the-long-archive/arc-01.mp4`,
      `${BASE}videos/scenes/the-long-archive/arc-02.mp4`,
      `${BASE}videos/scenes/the-long-archive/arc-03.mp4`,
    ],
  },
};

export function getSceneVisuals(slug: string): SceneVisuals | undefined {
  return sceneVisualsBySlug[slug];
}
