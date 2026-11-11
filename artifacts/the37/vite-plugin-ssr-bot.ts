/**
 * vite-plugin-ssr-bot.ts
 *
 * Vite dev-server middleware that intercepts requests from known crawler
 * User-Agents and returns a fully-rendered HTML document — title, meta tags,
 * Open Graph, structured data, and inline text content — before the React
 * bundle ever loads.
 *
 * Regular browsers are unaffected and continue to receive the normal SPA.
 */

import type { Plugin } from "vite";
import { renderRoute } from "./src/lib/ssr-html.js";

/**
 * Known non-JS crawlers: social preview bots, AI crawlers, search spiders.
 * This regex is intentionally broad — false positives just get a richer HTML
 * response; false negatives miss the optimisation but don't break anything.
 */
const BOT_UA = /googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|sogou|facebot|twitterbot|linkedinbot|slackbot|discordbot|telegrambot|whatsapp|applebot|gptbot|claudebot|perplexitybot|ccbot|anthropic-ai|cohere-ai|bytespider|petalbot|semrushbot|ahrefsbot|mj12bot|dotbot|rogerbot|seznambot|ia_archiver|archive\.org_bot|dataforseo/i;

export function ssrBotPlugin(): Plugin {
  return {
    name: "ssr-bot",
    apply: "serve",
    configureServer(server) {
      // Insert before Vite's internal middlewares so we can short-circuit early.
      server.middlewares.use((req, res, next) => {
        const ua = req.headers["user-agent"] ?? "";
        if (!BOT_UA.test(ua)) return next();

        // Only handle GET requests for navigable paths.
        if (req.method !== "GET" && req.method !== "HEAD") return next();

        const pathname = (req.url ?? "/").split("?")[0];

        // Skip Vite internals, assets, and API calls.
        if (
          pathname.startsWith("/@") ||
          pathname.startsWith("/src/") ||
          pathname.startsWith("/node_modules/") ||
          pathname.startsWith("/api/") ||
          /\.\w{1,6}$/.test(pathname)
        ) {
          return next();
        }

        const html = renderRoute(pathname);
        if (!html) return next();

        res.writeHead(200, {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "public, max-age=3600",
          "X-SSR-Bot": "1",
        });
        res.end(html);
      });
    },
  };
}
