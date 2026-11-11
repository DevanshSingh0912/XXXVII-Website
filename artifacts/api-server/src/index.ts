import http from "node:http";
import { once } from "node:events";

const rawPort = process.env["PORT"];

if (!rawPort) {
  throw new Error(
    "PORT environment variable is required but was not provided.",
  );
}

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

// Open the port immediately so the platform's startup health checks pass as
// soon as the process boots, before the (heavier) express app and logger
// finish initializing. Health probes are answered inline; a bounded number of
// other requests are briefly queued and handed to the express app the moment
// it is ready.
type Handler = (req: http.IncomingMessage, res: http.ServerResponse) => void;

let appHandler: Handler | null = null;

const MAX_PENDING = 64;
const pending: Array<[http.IncomingMessage, http.ServerResponse]> = [];

const HEALTH_BODY = JSON.stringify({ status: "ok" });

function isHealthPath(url: string | undefined): boolean {
  const path = (url ?? "").split("?")[0];
  return path === "/api/healthz" || path === "/api" || path === "/api/";
}

const server = http.createServer((req, res) => {
  if (appHandler) {
    appHandler(req, res);
    return;
  }
  if (req.method === "GET" && isHealthPath(req.url)) {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(HEALTH_BODY);
    return;
  }
  if (pending.length >= MAX_PENDING) {
    res.writeHead(503, { "content-type": "application/json", "retry-after": "1" });
    res.end(JSON.stringify({ error: "Server starting, retry shortly" }));
    return;
  }
  const entry: [http.IncomingMessage, http.ServerResponse] = [req, res];
  pending.push(entry);
  // Drop queued requests whose client went away before the app was ready.
  res.on("close", () => {
    const i = pending.indexOf(entry);
    if (i !== -1) pending.splice(i, 1);
  });
});

server.on("error", (err) => {
  // eslint-disable-next-line no-console
  console.error("HTTP server error", err);
  process.exit(1);
});

server.listen(port);

void (async () => {
  try {
    await once(server, "listening");
    // eslint-disable-next-line no-console
    console.log(JSON.stringify({ msg: "Port open, loading app", port }));
    // Yield a full event-loop turn so already-arrived health probes are
    // answered by the inline responder before the (bundler-inlined) app
    // module graph initializes on this thread.
    await new Promise((resolve) => setImmediate(resolve));
    const [{ default: app }, { logger }] = await Promise.all([
      import("./app"),
      import("./lib/logger"),
    ]);
    appHandler = app as unknown as Handler;
    for (const [req, res] of pending.splice(0)) {
      if (!res.writableEnded && !res.destroyed) {
        appHandler(req, res);
      }
    }
    logger.info({ port }, "Server listening");
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Failed to load app", err);
    for (const [, res] of pending.splice(0)) {
      if (!res.writableEnded && !res.destroyed) {
        res.writeHead(500, { "content-type": "application/json" });
        res.end(JSON.stringify({ error: "Server failed to start" }));
      }
    }
    process.exit(1);
  }
})();
