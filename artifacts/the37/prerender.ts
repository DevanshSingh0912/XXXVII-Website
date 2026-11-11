/**
 * prerender.ts
 *
 * Static prerender script — run after `vite build` to generate one
 * fully-populated index.html per public route.  Each file lands in the
 * correct subdirectory of `dist/public/` so that any static host can
 * serve it directly for non-JS clients.
 *
 * Each prerendered page includes the Vite-built CSS and JS so that real
 * browsers still boot the SPA (React mounts into #root and replaces the
 * static content).  Bots that skip JS see the fully-rendered HTML.
 *
 * Usage (called automatically by the `build` npm script):
 *   esbuild prerender.ts --bundle --platform=node --format=esm \
 *     --outfile=dist/prerender.mjs && node dist/prerender.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { causes, dimensions } from "./src/lib/ssr-data.js";
import {
  renderHome,
  renderAtlas,
  renderCauses,
  renderAtlasDimension,
  renderDimensions,
  renderInfos,
  renderPrelude,
  renderContacts,
  renderAbout,
  renderCause,
} from "./src/lib/ssr-html.js";

// process.cwd() is stable whether run directly or as a compiled bundle.
const ROOT = process.cwd();
const OUT = join(ROOT, "dist", "public");

// ---------------------------------------------------------------------------
// Extract Vite asset tags from the built index.html so the SPA boots in
// real browsers — bots that skip JS still see the static HTML content.
// ---------------------------------------------------------------------------
function extractViteAssets(): string {
  try {
    const html = readFileSync(join(OUT, "index.html"), "utf-8");
    const tags: string[] = [];

    // Stylesheet links (hashed filenames)
    for (const m of html.matchAll(/<link[^>]+rel="stylesheet"[^>]*>/gi)) {
      tags.push(m[0]);
    }
    // Modulepreload links
    for (const m of html.matchAll(/<link[^>]+rel="modulepreload"[^>]*>/gi)) {
      tags.push(m[0]);
    }
    // Main module script
    for (const m of html.matchAll(/<script[^>]+type="module"[^>]*><\/script>/gi)) {
      tags.push(m[0]);
    }

    return tags.join("\n  ");
  } catch {
    // If the built index.html isn't available, return empty string — the
    // prerendered page will still be valid for bots.
    console.warn("  ⚠  Could not read dist/public/index.html — Vite assets not injected.");
    return "";
  }
}

// ---------------------------------------------------------------------------
// File writers
// ---------------------------------------------------------------------------
function write(relPath: string, html: string) {
  const dir = join(OUT, relPath);
  mkdirSync(dir, { recursive: true });
  const file = join(dir, "index.html");
  writeFileSync(file, html, "utf-8");
  console.log(`  ✓ /${relPath}/index.html`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
console.log("\n→ Prerendering static HTML for crawlers…\n");

const viteAssets = extractViteAssets();
if (viteAssets) {
  console.log("  ✓ Vite assets extracted — SPA will boot in real browsers\n");
} else {
  console.log("  ℹ No Vite assets — bot-only static pages\n");
}

// Root index.html: overwrite the generic Vite shell with the full home page.
writeFileSync(join(OUT, "index.html"), renderHome(viteAssets), "utf-8");
console.log("  ✓ /index.html");

write("atlas",      renderAtlas(viteAssets));
write("causes",     renderCauses(viteAssets));
write("dimensions", renderDimensions(viteAssets));
write("infos",      renderInfos(viteAssets));
write("prelude",    renderPrelude(viteAssets));
write("contacts",   renderContacts(viteAssets));
write("founder",    renderAbout(viteAssets)); // legacy URL
write("about",      renderAbout(viteAssets));

for (const dim of dimensions) {
  const html = renderAtlasDimension(dim.id, viteAssets);
  if (html) write(`atlas/${dim.id}`, html);
}

for (const cause of causes) {
  const html = renderCause(cause.slug, viteAssets);
  if (html) write(`cause/${cause.slug}`, html);
}

console.log(`\n→ Done. ${9 + dimensions.length + causes.length} pages prerendered.\n`);
