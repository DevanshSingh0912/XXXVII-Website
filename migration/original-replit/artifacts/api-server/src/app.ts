import express, { type Express } from "express";
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

export default app;
