/**
 * ssr-html.ts
 *
 * Generates a complete, crawler-readable HTML document for any public route.
 * Used by:
 *   1. The Vite configureServer middleware (bot detection in dev)
 *   2. The prerender script (static files for production)
 *
 * No React, no browser APIs — pure string templates.
 */

import { causes, dimensions, getCause, getDimension } from "./ssr-data.js";
import { aboutContent, people } from "../data/about.js";

const SITE_NAME = "XXXVII — The 37";
const TITLE_SUFFIX = "XXXVII — Powering humanity into an exponential future";
const SITE_DESCRIPTION =
  "37 causes. 10 dimensions of human existence. A shared architecture for the exponential future. Pick a cause. Own it. Build it. Fund it. Defend it.";
const SOCIAL_IMAGE_URL = "https://xxxvii.org/og-image.jpg";

// ---------------------------------------------------------------------------
// Shared shell
// ---------------------------------------------------------------------------

function shell({
  title,
  description,
  canonicalPath,
  ogType = "website",
  structuredData,
  bodyContent,
  viteAssets = "",
}: {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: string;
  structuredData?: object;
  bodyContent: string;
  /** Extracted <link>/<script> tags from the Vite build — injected so the SPA
   *  boots normally in real browsers while bots still read the static HTML. */
  viteAssets?: string;
}): string {
  const fullTitle =
    title === SITE_NAME || title.startsWith("XXXVII — ")
      ? title
      : `${title} — ${TITLE_SUFFIX}`;
  const sd = structuredData
    ? `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <title>${esc(fullTitle)}</title>
  <meta name="description" content="${esc(description)}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://xxxvii.org${canonicalPath}" />

  <!-- Open Graph -->
  <meta property="og:title" content="${esc(fullTitle)}" />
  <meta property="og:description" content="${esc(description)}" />
  <meta property="og:type" content="${ogType}" />
  <meta property="og:url" content="https://xxxvii.org${canonicalPath}" />
  <meta property="og:site_name" content="${esc(SITE_NAME)}" />
  <meta property="og:image" content="${SOCIAL_IMAGE_URL}" />
  <meta property="og:image:width" content="2400" />
  <meta property="og:image:height" content="1260" />

  <!-- Twitter / X -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(fullTitle)}" />
  <meta name="twitter:description" content="${esc(description)}" />
  <meta name="twitter:image" content="${SOCIAL_IMAGE_URL}" />

  <link rel="icon" type="image/png" href="/favicon.png" />
  ${sd}
  <script>document.documentElement.classList.add("spa-booting")</script>
  ${viteAssets}
  <style>
    html,body{background:#000}
    /* Hide the crawler-readable fallback before the body is painted whenever
       JavaScript is available. With JS disabled, the class is never added and
       the full fallback remains visible. React replaces #root during startup. */
    .spa-booting .ssr-wrap{display:none}
    /* Pre-render baseline — visible only until React mounts (no-JS fallback).
       Every rule is scoped to .ssr-wrap so nothing leaks into the SPA once
       React replaces the #root content. */
    .ssr-wrap,.ssr-wrap *{box-sizing:border-box;margin:0;padding:0}
    .ssr-wrap{max-width:900px;margin:0 auto;padding:4rem 2rem;background:#000;color:#fff;font-family:system-ui,sans-serif;line-height:1.6}
    .ssr-wrap h1{font-size:clamp(1.8rem,5vw,3.5rem);font-weight:300;letter-spacing:-.03em;text-transform:uppercase;line-height:1;margin-bottom:1.5rem}
    .ssr-wrap h2{font-size:clamp(1rem,3vw,1.4rem);font-weight:300;text-transform:uppercase;letter-spacing:.15em;color:rgba(255,255,255,.45);margin-bottom:2rem;font-family:monospace}
    .ssr-wrap p{color:rgba(255,255,255,.7);margin-bottom:1rem;font-size:1.05rem}
    .ssr-wrap .hook{font-size:clamp(1rem,2.5vw,1.4rem);color:#fff;margin-bottom:1.5rem;font-style:italic}
    .ssr-wrap .dim-tag{font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.35);font-family:monospace;margin-bottom:1rem}
    .ssr-wrap nav{margin-top:3rem;padding-top:2rem;border-top:1px solid rgba(255,255,255,.1)}
    .ssr-wrap nav a{color:rgba(255,255,255,.5);text-decoration:none;font-size:.8rem;font-family:monospace;letter-spacing:.1em;text-transform:uppercase;margin-right:2rem}
    .ssr-wrap nav a:hover{color:#fff}
    .ssr-wrap .cause-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.08);margin:2rem 0}
    .ssr-wrap .cause-card{background:#000;padding:1.5rem;border:none}
    .ssr-wrap .cause-card h3{font-size:.95rem;font-weight:400;text-transform:uppercase;letter-spacing:.05em;margin-bottom:.5rem}
    .ssr-wrap .cause-card p{font-size:.8rem;color:rgba(255,255,255,.4);margin:0}
    .ssr-wrap .cause-card a{text-decoration:none;color:inherit}
    .ssr-wrap .dim-section{margin-bottom:3rem}
    .ssr-wrap .dim-section h3{font-size:.7rem;font-family:monospace;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.35);border-bottom:1px solid rgba(255,255,255,.08);padding-bottom:.75rem;margin-bottom:1rem}
  </style>
</head>
<body>
<!--
  Content inside #root is visible to non-JS crawlers (Googlebot first pass,
  social preview bots, AI crawlers). Real browsers execute the bundled SPA
  which replaces this content via React's createRoot().
-->
<div id="root"><div class="ssr-wrap">
${bodyContent}
<nav>
  <a href="/">Home</a>
  <a href="/atlas">Atlas</a>
  <a href="/dimensions">Dimensions</a>
  <a href="/infos">About</a>
  <a href="/contacts">Contact</a>
</nav>
</div></div>
</body>
</html>`;
}

function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// ---------------------------------------------------------------------------
// Per-route generators
// ---------------------------------------------------------------------------

export function renderHome(viteAssets = ""): string {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: "https://xxxvii.org",
  };
  return shell({
    title: "XXXVII — Powering humanity into an exponential future",
    description: SITE_DESCRIPTION,
    canonicalPath: "/",
    structuredData,
    viteAssets,
    bodyContent: `
<h2>XXXVII</h2>
<h1>The 37 Causes for an Exponential Future</h1>
<p class="hook">37 causes. 10 dimensions of human existence. A shared architecture for the exponential future.</p>
<p>${esc(SITE_DESCRIPTION)}</p>
<p>Explore all 37 causes across 10 dimensions of human civilization — from radical life extension and energy abundance to collective superintelligence and multi-planetary presence.</p>`,
  });
}

export function renderAtlas(viteAssets = ""): string {
  const dimLinks = dimensions
    .map(d => {
      const dimCauses = causes.filter(c => c.dimensionId === d.id);
      return `<div class="cause-card"><a href="/atlas/${d.id}"><h3>${esc(d.numeral)} — ${esc(d.name)}</h3><p>${esc(d.statement)} (${dimCauses.length} causes)</p></a></div>`;
    })
    .join("\n");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "The Story — The 10 Dimensions",
    description:
      "The 10 dimensions of human existence, each containing the causes that power humanity's exponential future.",
    url: "https://xxxvii.org/atlas",
    numberOfItems: dimensions.length,
    hasPart: dimensions.map(d => ({
      "@type": "CollectionPage",
      name: `${d.numeral} — ${d.name}`,
      description: d.statement,
      url: `https://xxxvii.org/atlas/${d.id}`,
    })),
  };

  return shell({
    title: "The Story — The 10 Dimensions",
    description:
      "The 10 dimensions of human existence, each containing the causes that power humanity's exponential future.",
    canonicalPath: "/atlas",
    structuredData,
    viteAssets,
    bodyContent: `
<h2>The Story</h2>
<h1>The 10 Dimensions of Human Existence</h1>
<p>Ten dimensions. Thirty-seven causes. Enter a dimension to explore its causes.</p>
<div class="cause-list">
${dimLinks}
</div>`,
  });
}

export function renderCauses(viteAssets = ""): string {
  const causeLinks = causes
    .map(c => {
      const dim = getDimension(c.dimensionId);
      return `<div class="cause-card"><a href="/cause/${c.slug}"><h3>${esc(c.name)}</h3><p>${esc(dim ? `${dim.numeral} — ${dim.name}` : "")}</p></a></div>`;
    })
    .join("\n");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "XXXVII — The 37 Causes",
    description:
      "All 37 causes powering humanity's exponential future, across the 10 dimensions of human existence.",
    url: "https://xxxvii.org/causes",
    numberOfItems: causes.length,
  };

  return shell({
    title: "XXXVII — The 37 Causes",
    description:
      "All 37 causes powering humanity's exponential future, across the 10 dimensions of human existence.",
    canonicalPath: "/causes",
    structuredData,
    viteAssets,
    bodyContent: `
<h2>XXXVII</h2>
<h1>The 37 Causes</h1>
<p>All thirty-seven causes, across the ten dimensions of human existence.</p>
<div class="cause-list">
${causeLinks}
</div>`,
  });
}

export function renderAtlasDimension(dimensionId: string, viteAssets = ""): string | null {
  const dim = getDimension(dimensionId);
  if (!dim) return null;
  const dimCauses = causes.filter(c => c.dimensionId === dim.id);
  const causeLinks = dimCauses
    .map(
      c =>
        `<div class="cause-card"><a href="/cause/${c.slug}"><h3>${esc(c.name)}</h3><p>${esc(c.hook)}</p></a></div>`,
    )
    .join("\n");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${dim.numeral} — ${dim.name}`,
    description: dim.statement,
    url: `https://xxxvii.org/atlas/${dim.id}`,
    numberOfItems: dimCauses.length,
    hasPart: dimCauses.map(c => ({
      "@type": "Article",
      name: c.name,
      description: c.hook,
      url: `https://xxxvii.org/cause/${c.slug}`,
    })),
  };

  return shell({
    title: `${dim.name} — Dimension ${dim.numeral}`,
    description: `${dim.statement} Explore the ${dimCauses.length} causes of ${dim.name}.`,
    canonicalPath: `/atlas/${dim.id}`,
    structuredData,
    viteAssets,
    bodyContent: `
<h2>Dimension ${esc(dim.numeral)}</h2>
<h1>${esc(dim.name)}</h1>
<p class="hook">${esc(dim.statement)}</p>
<div class="cause-list">
${causeLinks}
</div>`,
  });
}

export function renderCause(slug: string, viteAssets = ""): string | null {
  const cause = getCause(slug);
  if (!cause) return null;

  const dim = getDimension(cause.dimensionId);
  const causeIndex = causes.findIndex(c => c.slug === slug);
  const prev = causeIndex > 0 ? causes[causeIndex - 1] : null;
  const next = causeIndex < causes.length - 1 ? causes[causeIndex + 1] : null;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cause.name,
    description: cause.description,
    url: `https://xxxvii.org/cause/${cause.slug}`,
    isPartOf: {
      "@type": "CollectionPage",
      name: "The Atlas — All 37 Causes",
      url: "https://xxxvii.org/atlas",
    },
    about: {
      "@type": "Thing",
      name: dim ? `${dim.numeral}. ${dim.name}` : cause.dimensionId,
      description: dim?.statement,
    },
  };

  const pagination = [
    prev
      ? `<a href="/cause/${prev.slug}">← ${esc(prev.name)}</a>`
      : "",
    next
      ? `<a href="/cause/${next.slug}">${esc(next.name)} →</a>`
      : "",
  ]
    .filter(Boolean)
    .join(" &nbsp; ");

  return shell({
    title: cause.name,
    description: `${cause.hook} — ${cause.description}`,
    canonicalPath: `/cause/${cause.slug}`,
    ogType: "article",
    structuredData,
    viteAssets,
    bodyContent: `
${dim ? `<div class="dim-tag">Dimension ${dim.numeral} — ${esc(dim.name)}</div>` : ""}
<h1>${esc(cause.name)}</h1>
<p class="hook">${esc(cause.hook)}</p>
<p>${esc(cause.description)}</p>
${pagination ? `<p style="margin-top:2rem;font-size:.8rem;font-family:monospace;letter-spacing:.1em">${pagination}</p>` : ""}`,
  });
}

export function renderDimensions(viteAssets = ""): string {
  const dimItems = dimensions
    .map(d => {
      const dimCauses = causes.filter(c => c.dimensionId === d.id);
      const causeList = dimCauses
        .map(c => `<a href="/cause/${c.slug}">${esc(c.name)}</a>`)
        .join(", ");
      return `<div class="dim-section">
<h3>${esc(d.numeral)} — ${esc(d.name)}</h3>
<p style="color:rgba(255,255,255,.7);margin-bottom:.5rem">${esc(d.statement)}</p>
<p style="font-size:.8rem;color:rgba(255,255,255,.4)">${causeList}</p>
</div>`;
    })
    .join("\n");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "The 10 Dimensions",
    description:
      "Ten dimensions of human existence that together form the architecture for humanity's exponential future.",
    url: "https://xxxvii.org/dimensions",
    hasPart: dimensions.map(d => ({
      "@type": "Thing",
      name: `${d.numeral}. ${d.name}`,
      description: d.statement,
    })),
  };

  return shell({
    title: "The 10 Dimensions",
    description:
      "Ten dimensions of human existence — from The Substrate to The Continuity — forming the architecture for humanity's exponential future.",
    canonicalPath: "/dimensions",
    structuredData,
    viteAssets,
    bodyContent: `
<h2>Structure</h2>
<h1>The 10 Dimensions</h1>
<p>All 37 causes are organized across ten dimensions of human existence. Each dimension is a domain of civilizational leverage.</p>
${dimItems}`,
  });
}

export function renderInfos(viteAssets = ""): string {
  return shell({
    title: "About",
    description:
      "The XXXVII manifesto: for the first time in history, we can design what comes next. The tools of abundance are arriving this decade — the question is whether we will.",
    canonicalPath: "/infos",
    viteAssets,
    bodyContent: `
<h2>The Manifesto</h2>
<h1>Architecture for the Exponential</h1>
<p>For the first time in history, we can design what comes next. Not react to it. Not survive it. Design it.</p>
<p>The tools of abundance are arriving this decade. AI. Fusion. Synthetic biology. Quantum computing.</p>
<p>The question is no longer whether we can. It's whether we will.</p>
<p>Scarcity wrote our oldest instincts: guard, ration, fear the future. Those instincts built us. They will not carry us further.</p>
<p>Abundance is not a promise of more. It is permission to think bigger than survival.</p>
<p>From cell to self, to habitat, to the cosmos — and forward through deep time.</p>
<p>What does humanity look like when it's actually working? Not in a century. Not in theory. In our lifetime.</p>
<p>Every future that ever arrived was built by people who started before they were asked.</p>
<p>The measure: we succeed when prestige comes from advancing a cause, not accumulating resources — when the brightest minds choose civilization over commerce.</p>`,
  });
}

export function renderPrelude(viteAssets = ""): string {
  return shell({
    title: "Prelude — The Twelve Frontiers",
    description:
      "Twelve frontier technologies rewriting humanity's future — from applied intelligence to brain-computer interfaces. Explored in depth at FutureKäst.",
    canonicalPath: "/prelude",
    viteAssets,
    bodyContent: `
<h2>The Prelude</h2>
<h1>The Twelve Frontiers</h1>
<p>Twelve frontier technologies are rewriting what a human life — and a civilization — can be.</p>
<p>I. Applied Intelligence — cognition becomes infrastructure.</p>
<p>II. Quantum Computing — problems once unsolvable, solved.</p>
<p>III. Humanoid Robotics — labour, untethered from biology.</p>
<p>IV. Longevity &amp; Healthspan — ageing reframed as an engineering problem.</p>
<p>V. Synthetic Biology — life itself becomes programmable.</p>
<p>VI. Advanced Materials — matter, redesigned at the atom.</p>
<p>VII. Autonomous Systems — every machine drives itself.</p>
<p>VIII. Decentralized Networks — trust without intermediaries.</p>
<p>IX. Spatial Computing — reality becomes a canvas.</p>
<p>X. Energy &amp; Climate — abundance without combustion.</p>
<p>XI. Space Technology — civilisation, off-planet and on schedule.</p>
<p>XII. Brain–Computer Interfaces — mind and machine, one signal.</p>
<p>Each frontier is indexed, mapped, and argued at <a href="https://futurekast.org" rel="noopener">FutureKäst</a>.</p>`,
  });
}

export function renderAbout(viteAssets = ""): string {
  return shell({
    title: "About Us",
    description:
      "Powering humanity into an exponential future. XXXVII is made by Konsälidön — a global community for the people building what comes next.",
    canonicalPath: "/about",
    viteAssets,
    bodyContent: `
<h2>${esc(aboutContent.hero.eyebrow)}</h2>
<h1>${esc(aboutContent.hero.display)}</h1>
<p>${esc(aboutContent.hero.sub)}</p>
<p>${esc(aboutContent.hero.note)}</p>
<p>${esc(aboutContent.mission.marker)}</p>
${aboutContent.mission.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("\n")}
<p>${esc(aboutContent.people.marker)} — ${[...people]
      .sort((a, b) => a.displayOrder - b.displayOrder)
      .map((p) => `${esc(p.name)} (${esc(p.role)})`)
      .join(", ")}.</p>
<p>&ldquo;${esc(aboutContent.people.quote)}&rdquo; ${esc(aboutContent.people.attribution)}</p>
<p>${esc(aboutContent.prompter.eyebrow)} — ${esc(aboutContent.prompter.name)}, ${esc(aboutContent.prompter.role)}</p>
${aboutContent.prompter.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("\n")}
<p>${esc(aboutContent.coPrompters.heading)} — ${esc(aboutContent.coPrompters.intro)}</p>
${aboutContent.coPrompters.members.map((m) => `<p>${esc(m.name)} (${esc(m.tagline)}) — ${esc(m.blurb)}</p>`).join("\n")}
<p>${esc(aboutContent.name.marker)}</p>
${aboutContent.name.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("\n")}
<p>${esc(aboutContent.motif.caption)} ${aboutContent.motif.links
      .map((l) => `<a href="${esc(l.href)}">${esc(l.label)}</a>`)
      .join(" · ")}</p>
<p>${esc(aboutContent.closing.display)} <a href="${esc(aboutContent.closing.linkHref)}" rel="noopener">${esc(aboutContent.closing.linkLabel)}</a></p>`,
  });
}

export function renderContacts(viteAssets = ""): string {
  return shell({
    title: "Players",
    description:
      "The Five Forces of XXXVII — Köuncil, Wëavers, Kätalysts, Philösophers, and Vanguärd. Five forces, one direction. Claim a cause and lend your craft.",
    canonicalPath: "/contacts",
    viteAssets,
    bodyContent: `
<h2>The Five Forces</h2>
<h1>Five forces. One direction.</h1>
<p>Köuncil — domain architects steering the roadmap. They map each cause's frontier, set its milestones, and keep the work honest against them.</p>
<p>Wëavers — community builders who convene the right minds. They find the people a cause is missing and put them in the same room until it isn't.</p>
<p>Kätalysts — visionary investors deploying capital against the causes. They move money to the bottleneck — funding the labs, tools, and teams a cause needs next.</p>
<p>Philösophers — sensemakers designing the new mythos. They write, frame, and argue the meaning of the work so the movement knows what it is.</p>
<p>Vanguärd — a global grassroots movement of urgent optimists. They carry the causes into their cities and fields — building, testing, and recruiting on the ground.</p>
<p>Pick a cause. Own it. Build it. Fund it. Defend it. Tell us who you are — we'll take it from there.</p>`,
  });
}

// ---------------------------------------------------------------------------
// Route dispatcher
// ---------------------------------------------------------------------------

export function renderRoute(pathname: string): string | null {
  const clean = pathname.split("?")[0].replace(/\/$/, "") || "/";

  if (clean === "/") return renderHome();
  if (clean === "/atlas") return renderAtlas();
  if (clean === "/causes") return renderCauses();
  const atlasDim = clean.match(/^\/atlas\/([^/]+)$/);
  if (atlasDim) return renderAtlasDimension(atlasDim[1]);
  if (clean === "/dimensions") return renderDimensions();
  if (clean === "/infos") return renderInfos();
  if (clean === "/prelude") return renderPrelude();
  if (clean === "/contacts") return renderContacts();
  if (clean === "/founder") return renderAbout(); // legacy URL — client redirects to /about
  if (clean === "/about") return renderAbout();

  const causeMatch = clean.match(/^\/cause\/([^/]+)$/);
  if (causeMatch) return renderCause(causeMatch[1]);

  return null;
}
