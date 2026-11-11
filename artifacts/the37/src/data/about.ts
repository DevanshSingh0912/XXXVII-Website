export type Person = {
  slug: string;
  name: string;
  role: string; // "The Prompter" | "Co-Prompter"
  portraitPath: string;
  isPlaceholder: boolean; // true for Devansh/Samah until photos land
  displayOrder: number; // 1 = left, 2 = center, 3 = right
  isLead: boolean; // true only for Varun in this pass
};

export const people: Person[] = [
  { slug: "devansh-singh", name: "Devansh Singh", role: "Co-Prompter", portraitPath: "/about/portraits/devansh-singh.jpg", isPlaceholder: false, displayOrder: 1, isLead: false },
  { slug: "varun-malik", name: "Varun Malik", role: "The Prompter", portraitPath: "/about/portraits/varun.jpg", isPlaceholder: false, displayOrder: 2, isLead: true },
  { slug: "samah", name: "Samah Saleem", role: "Co-Prompter", portraitPath: "/about/portraits/samah-futurist-clean-v4.jpg", isPlaceholder: false, displayOrder: 3, isLead: false },
];

export const aboutContent = {
  hero: {
    eyebrow: "About Us",
    display: "Powering humanity into an exponential future.",
    sub: "XXXVII is made by Konsälidön — a global community for the people building what comes next.",
    note: "That sentence above is not a slogan. It is our massive transformative purpose: the single measure every programme, investment and conversation is held against.",
  },
  mission: {
    marker: "01 · The Mission",
    paragraphs: [
      "We inspire, equip, and invest in high-energy, high-impact professionals — empowering them to harness frontier technologies and global ecosystems to turn their bold ambition into scalable impact.",
      "Konsälidön works with leaders preparing for an exponential future, organisations assessing their future fitness, founders carrying ideas from first sketch to scale, investors backing the next decade, and a worldwide network of boutique firms who lead the work in their regions.",
    ],
  },
  people: {
    marker: "02 · The People",
    quote:
      "The next decade will ask more of leaders, founders and organizations than any decade before it — and offer more in return.",
    attribution: "— Varun Malik, Founder, Konsälidön",
  },
  prompter: {
    eyebrow: "About the Prompter",
    name: "Varun Malik",
    role: "Prompter, Konsälidön",
    portraitPath: "/about/portraits/varun.jpg",
    linkLabel: "View LinkedIn",
    linkHref: "https://www.linkedin.com/in/varunmalik2017/",
    paragraphs: [
      "Varun Malik has spent two decades at the intersection of ideas and action. He has worked across the globe — preparing leaders, founders, and organisations to navigate a world that keeps rewriting its own rules.",
      "His massive transformative purpose: to power humanity into an exponential age. He pursues that through Singularity Middle East, where he leads the region's most ambitious conversations on exponential technology; TEDxPalmJumeirah, where he explores what it means to be human in an exponential age; and Konsälidön, which he founded to consolidate the forces and the ecosystems shaping the future.",
      "He believes philosophy is not an academic luxury. It is the operating system for navigating a world that is changing faster than any institution, career, or certainty can keep up with. The most capable people of the coming decades will not simply be those who understand AI or quantum computing. They will be those who can think — who can reason under uncertainty, hold complexity without collapsing it, and act with clarity when the rules keep changing. Philosophy is how you build that.",
      "XXXVII is his attempt to make that kind of thinking accessible to anyone. One concept, one morning, one step closer to the mind the exponential age actually demands.",
    ],
  },
  coPrompters: {
    heading: "The Co-Prompters",
    intro:
      "Every frontier, frame, and page is shaped by a small team who bring craft, curiosity, and care to the work. These are the people behind it.",
    members: [
      {
        slug: "devansh-singh",
        name: "Devansh Singh",
        tagline: "Build & Product",
        blurb:
          "Builder and systems thinker. Devansh turns the 37 causes into a living digital atlas — shaping the site, its interactions, and the architecture beneath it.",
        portraitPath: "/about/portraits/devansh-singh.jpg",
        isPlaceholder: false,
        linkHref: "https://www.linkedin.com/in/devansh-singh-5b645128b/",
      },
      {
        slug: "samah",
        name: "Samah Saleem",
        tagline: "Co-Prompter",
        blurb: "Curious by nature, experimental by choice.\nSamah is exploring new ideas, creating along the way, and seeing where they lead.",
        portraitPath: "/about/portraits/samah-futurist-clean-v4.jpg",
        isPlaceholder: false,
        linkHref: "https://www.linkedin.com/in/samah-saleem/",
      },
    ],
  },
  name: {
    marker: "03 · The Name",
    paragraphs: [
      "\u201CKonsälidön\u201D means to consult in Volapük — a constructed language built to unite people from all corners of the world.",
      "Like the language, the firm is built on the universality of communication: breaking down the barriers between people who don't yet know each other, and creating trust while solving the problems that affect all of us. It is why the name is written in English but carries its umlauts — a reminder of how we got here.",
    ],
  },
  motif: {
    caption: "Thirty-seven causes. One shared architecture.",
    links: [
      { label: "See the 37", href: "/dimensions" },
      { label: "Read the Manifesto", href: "/infos" },
      { label: "Meet the Players", href: "/contacts" },
    ],
  },
  closing: {
    display: "Powering humanity into an exponential future.",
    linkLabel: "konsalidon.com",
    linkHref: "https://konsalidon.com",
  },
};
