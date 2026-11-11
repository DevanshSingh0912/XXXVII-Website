// Portable commands. Run from any directory; environment comes from the caller.
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const action = process.argv[2];
const env = { ...process.env };
delete env.REPL_ID;
delete env.REPLIT_DEV_DOMAIN;
const apiPort = env.PORT || "8080";
const webPort = env.WEB_PORT || "5173";
const children = new Set();
const pnpm = process.platform === "win32" ? "pnpm.cmd" : "pnpm";

function launch(command, args, overrides = {}) {
  const child = spawn(command, args, {
    cwd: root, env: { ...env, ...overrides }, stdio: "inherit",
    shell: process.platform === "win32" && command === pnpm,
  });
  children.add(child);
  child.on("exit", () => children.delete(child));
  child.on("error", (error) => { console.error(error.message); process.exitCode = 1; });
  return child;
}
function run(args, overrides = {}) {
  return new Promise((resolve, reject) => {
    const child = launch(pnpm, args, overrides);
    child.on("error", reject);
    child.on("exit", code => code === 0 ? resolve() : reject(new Error(`Command failed (${code}): pnpm ${args.join(" ")}`)));
  });
}
function stop() { for (const child of children) child.kill("SIGTERM"); }
process.on("SIGINT", stop);
process.on("SIGTERM", stop);
try {
  if (action === "build") {
    await run(["run", "typecheck"]);
    await run(["--filter", "@workspace/api-server", "run", "build"], { NODE_ENV: "production" });
    await run(["--filter", "@workspace/the37", "run", "build"], {
      NODE_ENV: "production", PORT: webPort, BASE_PATH: "/",
    });
  } else if (action === "start") {
    const child = launch(process.execPath, ["--enable-source-maps", "artifacts/api-server/dist/index.mjs"], {
      NODE_ENV: "production", PORT: apiPort, SERVE_WEB: "1",
    });
    child.on("exit", code => { process.exitCode = code ?? 1; });
  } else if (action === "dev") {
    await run(["--filter", "@workspace/api-server", "run", "build"]);
    const api = launch(process.execPath, ["--enable-source-maps", "artifacts/api-server/dist/index.mjs"], {
      NODE_ENV: "development", PORT: apiPort, SERVE_WEB: "0",
    });
    const web = launch(pnpm, ["--filter", "@workspace/the37", "run", "dev"], {
      NODE_ENV: "development", PORT: webPort, API_PORT: apiPort, BASE_PATH: "/",
    });
    for (const child of [api, web]) child.on("exit", code => { stop(); process.exitCode = code ?? 0; });
  } else if (action === "db:push") {
    await run(["--filter", "@workspace/db", "run", "push"]);
  } else if (action === "typecheck") {
    await run(["run", "typecheck"]);
  } else if (action === "test") {
    await run(["run", "test:tap-targets"]);
  } else if (action === "canvas") {
    const child = launch(pnpm, ["--filter", "@workspace/mockup-sandbox", "run", "dev"], {
      NODE_ENV: "development", PORT: env.CANVAS_PORT || "5174", BASE_PATH: "/__mockup",
    });
    child.on("exit", code => { process.exitCode = code ?? 1; });
  } else {
    throw new Error("Usage: node --env-file-if-exists=.env migration/run.mjs build|start|dev|db:push|typecheck|test|canvas");
  }
} catch (error) {
  stop();
  console.error(error.message);
  process.exitCode = 1;
}
