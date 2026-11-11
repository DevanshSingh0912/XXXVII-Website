import express, { type Express } from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { existsSync } from "node:fs";
import cors from "cors";
import pinoHttp from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

// Trust the first proxy hop (Replit's reverse proxy) so req.ip reflects the
// real client IP rather than the proxy address. Required for per-IP rate limiting.
app.set("trust proxy", 1);

// Build allowed-origins list from ALLOWED_ORIGINS env var (comma-separated).
// In development we also accept the Replit dev domain automatically.
const envOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",").map((o) => o.trim()).filter(Boolean)
  : [];

const devOrigins =
  process.env.NODE_ENV !== "production" && process.env.REPLIT_DEV_DOMAIN
    ? [
        `https://${process.env.REPLIT_DEV_DOMAIN}`,
        `http://${process.env.REPLIT_DEV_DOMAIN}`,
      ]
    : [];

const allowedOrigins = [...envOrigins, ...devOrigins];

// Fail closed: if no origins are configured at all, block every cross-origin
// request rather than falling back to open access.
const corsOriginHandler: cors.CorsOptionsDelegate = (req, callback) => {
  const origin = (req as express.Request).headers.origin;
  // Allow server-to-server / curl requests (no Origin header)
  if (!origin) return callback(null, { origin: true, credentials: true });
  if (allowedOrigins.length > 0 && allowedOrigins.includes(origin)) {
    return callback(null, { origin: true, credentials: true });
  }
  // Deny: no allowed list configured, or origin not on the list
  callback(null, { origin: false });
};

app.use(cors(corsOriginHandler));

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

// Export-only adapter: one origin for the original API and prerendered web app.
// Opt-in keeps the original API-only deployment behavior available.
if (process.env.SERVE_WEB === "1") {
  const webRoot = fileURLToPath(new URL("../../the37/dist/public/", import.meta.url));
  if (!existsSync(path.join(webRoot, "index.html"))) {
    throw new Error("Web build missing. Run the documented build command before start.");
  }
  app.use("/api", (_req, res) => {
    res.status(404).json({ error: "API route not found" });
  });
  app.use(express.static(webRoot, { redirect: false }));
  app.get("/{*path}", (req, res) => {
    // Missing media must not return HTML with a misleading 200 response.
    if (path.extname(req.path)) {
      res.sendStatus(404);
      return;
    }
    const candidate = path.resolve(webRoot, "." + req.path, "index.html");
    const isInside = candidate.startsWith(webRoot);
    const file = isInside && existsSync(candidate)
      ? candidate
      : path.join(webRoot, "index.html");
    res.sendFile(file);
  });
}

export default app;
