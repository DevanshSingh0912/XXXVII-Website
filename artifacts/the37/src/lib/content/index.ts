// Assembled content for The 37 — causes, dimensions, and site copy.
// EDITORIAL PLACEHOLDERS: "[Add organization]" entries and "—" metric values
// throughout the cause files are placeholders to be replaced with vetted data.

import { CauseContent, DimensionContent } from "./types";
import { substrateEngineCauses } from "./causes-substrate-engine";
import { causes04to06 } from "./causes-04-06";
import { causes07to09 } from "./causes-07-09";
import { causes10to12 } from "./causes-10-12";
import { causes13to15 } from "./causes-13-15";
import { causes16to18 } from "./causes-16-18";
import { causes19to21 } from "./causes-19-21";
import { causes22to24 } from "./causes-22-24";
import { causes25to27 } from "./causes-25-27";
import { causes28to30 } from "./causes-28-30";
import { causes31to33 } from "./causes-31-33";
import { causes34to37 } from "./causes-34-37";

export * from "./types";

const allCauseContent: CauseContent[] = [
  ...substrateEngineCauses,
  ...causes04to06,
  ...causes07to09,
  ...causes10to12,
  ...causes13to15,
  ...causes16to18,
  ...causes19to21,
  ...causes22to24,
  ...causes25to27,
  ...causes28to30,
  ...causes31to33,
  ...causes34to37,
];

export const causeContentBySlug: Record<string, CauseContent> = Object.fromEntries(
  allCauseContent.map((c) => [c.slug, c])
);

export function getCauseContent(slug: string): CauseContent | undefined {
  return causeContentBySlug[slug];
}

// ————— DIMENSIONS —————

export const dimensionContent: DimensionContent[] = [
  {
    id: "substrate",
    intro:
      "The Substrate governs the biological platform every human life runs on. Its causes share one premise: the body is an engineering domain — its lifespan, form, senses, immunity, and origins all open to deliberate design. Fix the platform first, and every other upgrade has somewhere to live.",
    readAs: "The reading begins here, in the body — the first territory of the exponential future.",
  },
  {
    id: "intellect",
    intro:
      "The Intellect governs the growth and pooling of human understanding. Its causes form a ladder: unlock every individual mind, make knowledge compound openly and permanently, then network minds into something greater than any of them. Intelligence, treated as infrastructure.",
    readAs: "From the body to the mind: the second territory is cognition itself.",
  },
  {
    id: "inner-world",
    intro:
      "The Inner World governs subjective life — meaning, growth, and consciousness itself. Its causes insist that flourishing is not a byproduct of material progress but a discipline of its own: joy engineered, maturity developed, the mind's frontier explored with rigor.",
    readAs: "The reading turns inward: after the mind's power, the mind's experience.",
  },
  {
    id: "canvas",
    intro:
      "The Canvas governs what a species does when survival is handled: create. Its causes democratize expression, make beauty an engineering constraint, and enthrone play as the generative mode of a free civilization. Creation, promoted from pastime to purpose.",
    readAs: "From experience to expression: creativity as the fourth territory.",
  },
  {
    id: "bond",
    intro:
      "The Bond governs connection — between people, between species, between a civilization and its stories. Its causes share the conviction that belonging, ethics, and myth are load-bearing structures: a species this powerful fragments without them.",
    readAs: "From what one mind makes to the ties between many: the fifth territory is each other.",
  },
  {
    id: "nexus",
    intro:
      "The Nexus governs how humans decide together: sensemaking, economics, power, justice, distribution. Its causes cluster around a single insight — our bottleneck is no longer invention but coordination. Better tools mean nothing routed through broken agreements.",
    readAs: "Bound together, we must decide together: coordination as the sixth territory.",
  },
  {
    id: "engine",
    intro:
      "The Engine governs the physical inputs of civilization: energy, matter, nutrition, computation. Its causes belong together because they are one argument — abundance at the root of the supply chain cascades into abundance everywhere else. Free the inputs and you free the outputs.",
    readAs: "Coordination needs power: the seventh territory is the machinery of abundance.",
  },
  {
    id: "habitat",
    intro:
      "The Habitat governs our role in the living world. Its causes flip humanity's job description from consumer to steward-engineer: heal the biosphere actively, design new life to serve it, and build cities that give back more than they take. Regeneration, not restraint.",
    readAs: "Abundance needs a ground: the eighth territory is the living world we tend.",
  },
  {
    id: "horizon",
    intro:
      "The Horizon governs expansion beyond Earth — in presence, in energy, in understanding, in readiness. Its causes scale civilization from planetary to stellar: settle new worlds, harness the star, learn the universe's remaining rules, and be prepared for company.",
    readAs: "From habitat to cosmos: the ninth territory leaves the ground.",
  },
  {
    id: "continuity",
    intro:
      "The Continuity governs deep time. Its causes are civilization's survival kit across millennia: make extinction vanishingly unlikely, grow stronger from every shock, keep all futures revisable, and remember everything — forever. What good is a future we don't reach?",
    readAs: "The reading ends in deep time: everything achieved, secured, and remembered past the horizon of any one civilization.",
  },
];

export const dimensionContentById: Record<string, DimensionContent> = Object.fromEntries(
  dimensionContent.map((d) => [d.id, d])
);

// ————— SITE COPY —————

export const homeContent = {
  statements: [
    {
      label: "The Moment",
      text: "For the first time in history, we can design what comes next. Not react to it. Not survive it. Design it. On purpose. At scale.",
    },
    {
      label: "The Question",
      text: "What does humanity look like when it's actually working? Not in a century. Not in theory. In our lifetime.",
    },
    {
      label: "The Vision",
      text: "37 causes. 10 dimensions of human existence. A shared architecture for the exponential future.",
    },
    {
      label: "Why Now",
      text: "The tools of abundance are arriving this decade. AI. Fusion. Synthetic biology. Quantum computing. The question is no longer whether we can. It's whether we will.",
    },
  ],
  bridge:
    "What follows is the map: thirty-seven causes across ten dimensions of human existence, read left to right — from the body outward to the cosmos, and forward through deep time. Enter the Atlas and find the one with your name on it.",
};

export const infosContent = {
  opener: {
    overline: "The Manifesto",
    title: ["Architecture", "For The", "Exponential."],
  },
  screens: [
    {
      label: "The Moment",
      text: "For the first time in history, we can design what comes next. Not react to it. Not survive it. Design it.",
      video: "/videos/interludes/dims/substrate.mp4",
    },
    {
      label: "The Tools",
      text: "The tools of abundance are arriving this decade. AI. Fusion. Synthetic biology. Quantum computing.",
      video: "/videos/interludes/dims/engine.mp4",
    },
    {
      label: "The Choice",
      text: "The question is no longer whether we can. It's whether we will.",
      video: "/videos/interludes/dims/intellect.mp4",
    },
    {
      label: "The Old Instinct",
      text: "Scarcity wrote our oldest instincts: guard, ration, fear the future. Those instincts built us. They will not carry us further.",
      video: "/videos/interludes/dims/inner-world.mp4",
    },
    {
      label: "The New Premise",
      text: "Abundance is not a promise of more. It is permission to think bigger than survival.",
      video: "/videos/interludes/dims/canvas.mp4",
    },
    {
      label: "The Span",
      text: "From cell to self, to habitat, to the cosmos — and forward through deep time.",
      video: "/videos/interludes/dims/habitat.mp4",
    },
    {
      label: "The Question",
      text: "What does humanity look like when it's actually working? Not in a century. Not in theory. In our lifetime.",
      video: "/videos/interludes/dims/nexus.mp4",
    },
    {
      label: "The Builders",
      text: "Every future that ever arrived was built by people who started before they were asked.",
      video: "/videos/interludes/dims/horizon.mp4",
    },
  ],
  measure: {
    video: "/videos/interludes/dims/continuity.mp4",
    title: "The Measure",
    text: "We succeed when prestige comes from advancing a cause, not accumulating resources. We succeed when the brightest minds choose civilization over commerce.",
  },
};

/**
 * The Prelude — the twelve frontier technologies rewriting humanity's future.
 * One screen per frontier, then a pointer to FutureKäst (futurekast.org).
 */
export const preludeContent = {
  opener: {
    overline: "The Prelude",
    title: ["The Twelve", "Frontiers."],
    lede: "Twelve frontier technologies are rewriting what a human life — and a civilization — can be.",
  },
  frontiers: [
    {
      numeral: "I",
      name: "Applied Intelligence",
      tagline: "Cognition becomes infrastructure.",
      text: "Systems that learn, reason, and act on their own. As models scale, new abilities keep emerging — and thinking itself is turning into infrastructure.",
      video: "/videos/prelude/applied-intelligence.mp4",
    },
    {
      numeral: "II",
      name: "Quantum Computing",
      tagline: "Problems once unsolvable, solved.",
      text: "Machines that swap definite bits for qubits holding many states at once. Rival hardware platforms race to make them reliable enough to matter.",
      video: "/videos/prelude/quantum-computing.mp4",
    },
    {
      numeral: "III",
      name: "Humanoid Robotics",
      tagline: "Labour, untethered from biology.",
      text: "General-purpose intelligence inside a human-shaped body, built to work in a world already made for people.",
      video: "/videos/prelude/humanoid-robotics.mp4",
    },
    {
      numeral: "IV",
      name: "Longevity & Healthspan",
      tagline: "Ageing reframed as an engineering problem.",
      text: "Not inevitable decay but measurable, targetable mechanisms — which science is learning to slow, halt, and even reverse.",
      video: "/videos/prelude/longevity-healthspan.mp4",
    },
    {
      numeral: "V",
      name: "Synthetic Biology",
      tagline: "Life itself becomes programmable.",
      text: "A toolkit to read, write, edit and design DNA — turning living cells into factories, medicines and materials.",
      video: "/videos/prelude/synthetic-biology.mp4",
    },
    {
      numeral: "VI",
      name: "Advanced Materials",
      tagline: "Matter, redesigned at the atom.",
      text: "New classes of substance engineered atom by atom, while AI compresses a centuries-long discovery cycle into years.",
      video: "/videos/prelude/advanced-materials.mp4",
    },
    {
      numeral: "VII",
      name: "Autonomous Systems",
      tagline: "Every machine drives itself.",
      text: "Machines that sense the world, predict what everyone around them will do, and act without a human at the controls.",
      video: "/videos/prelude/autonomous-systems.mp4",
    },
    {
      numeral: "VIII",
      name: "Decentralized Networks",
      tagline: "Trust without intermediaries.",
      text: "Shared ledgers anyone can verify, rebuilding the internet's plumbing so people control their own money, identity and data.",
      video: "/videos/prelude/decentralized-networks.mp4",
    },
    {
      numeral: "IX",
      name: "Spatial Computing",
      tagline: "Reality becomes a canvas.",
      text: "The room around you becomes the screen — digital content anchored to physical space, as the next form factor after the phone takes shape.",
      video: "/videos/prelude/spatial-computing.mp4",
    },
    {
      numeral: "X",
      name: "Energy & Climate",
      tagline: "Abundance without combustion.",
      text: "Solar, wind and batteries are now the cheapest power in history. Clean energy is no longer a sacrifice — it's a bargain.",
      video: "/videos/prelude/energy-climate.mp4",
    },
    {
      numeral: "XI",
      name: "Space Technology",
      tagline: "Civilisation, off-planet and on schedule.",
      text: "Reusable rockets collapsed the cost of reaching orbit a hundredfold — turning space from a government showcase into a working frontier.",
      video: "/videos/prelude/space-technology.mp4",
    },
    {
      numeral: "XII",
      name: "Brain–Computer Interfaces",
      tagline: "Mind and machine, one signal.",
      text: "Thought turned into signal — reading the brain to decode intent, writing back to restore sight, hearing and movement.",
      video: "/videos/prelude/brain-computer-interfaces.mp4",
    },
  ],
  closing: {
    title: "Explored In Depth",
    text: "Each frontier is indexed, mapped, and argued at FutureKäst.",
    linkLabel: "futurekast.org",
    linkHref: "https://futurekast.org",
    founderLine: "FutureKäst is made by Konsälidön.",
    founderLinkLabel: "Meet the founder",
    founderLinkHref: "/about",
  },
};

export const forcesContent = {
  overline: "The Five Forces",
  introLine: "Five forces. One direction.",
  roles: [
    {
      id: "01",
      name: "Köuncil",
      desc: "Domain architects steering the roadmap.",
      dayToDay: "They map each cause's frontier, set its milestones, and keep the work honest against them.",
    },
    {
      id: "02",
      name: "Wëavers",
      desc: "Community builders who convene the right minds.",
      dayToDay: "They find the people a cause is missing and put them in the same room until it isn't.",
    },
    {
      id: "03",
      name: "Kätalysts",
      desc: "Visionary investors deploying capital against the causes.",
      dayToDay: "They move money to the bottleneck — funding the labs, tools, and teams a cause needs next.",
    },
    {
      id: "04",
      name: "Philösophers",
      desc: "Sensemakers designing the new mythos.",
      dayToDay: "They write, frame, and argue the meaning of the work so the movement knows what it is.",
    },
    {
      id: "05",
      name: "Vanguärd",
      desc: "A global grassroots movement of urgent optimists.",
      dayToDay: "They carry the causes into their cities and fields — building, testing, and recruiting on the ground.",
    },
  ],
};

export const contactsContent = {
  overline: "Initiate Transmission",
  forces: forcesContent.roles.map((r) => r.name),
  headline: ["Pick a cause.", "Own it. Build it.", "Fund it. Defend it."],
  invitation:
    "The atlas is drawn; the causes are waiting for owners. Claim the one that keeps you up at night — or claim a force and lend your craft to all of them. Tell us who you are. We'll take it from there.",
  form: {
    nameLabel: "Name",
    nameHelper: "What should we call you?",
    emailLabel: "Email",
    emailHelper: "Where we reach you. Nothing else happens with it.",
    causeLabel: "Which of The 37",
    causeHelper: "The cause you're claiming.",
    forceLabel: "Which force",
    forceHelper: "How you intend to push: architect, weaver, investor, sensemaker, or vanguard.",
    messageLabel: "Message (optional)",
    messageHelper: "Why this cause? Why you?",
    submitLabel: "Claim it",
    submittingLabel: "Transmitting...",
    successTitle: "Claim received.",
    successBody: "Your cause has a name on it now. We'll be in touch — the work starts soon.",
    causePlaceholder: "Select a cause...",
    forcePlaceholder: "Select your force...",
    errorTitle: "Transmission Failed",
    errorBody: "There was an error submitting your claim. Please try again.",
  },
};
