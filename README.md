# XXXVII — The 37

Portable source export of the cinematic atlas of 37 causes across 10 dimensions.
This is the existing implementation, not a redesign. All available local photos,
videos, posters, logos and reference media are included at their original paths.

## Start here

If downloading the numbered ZIPs, download the Source ZIP and every Media ZIP,
then extract all of them into the same parent directory. They merge into one
`XXXVII_Website_Files/` folder. Each ZIP is independently extractable; these are
not multipart binary fragments. Keep every media part for the complete project.
The full single ZIP is also retained in the original workspace, but exceeds
the download-card limit.

Read `CLAUDE_HANDOFF.md`, `PROJECT_ARCHITECTURE.md`, `DEPLOYMENT.md`,
`MIGRATION_CHECKLIST.md` and `VALIDATION_REPORT.md`.

### Requirements

- Node.js **24.x** (validated with 24.13.0).
- pnpm **10.26.1**; install using Corepack or your normal package-manager setup.
- PostgreSQL **16.x** recommended; supply your own database.
- Several GB of free disk space: media alone is approximately 1.9 GB, and the
  production build copies public media to its output.
- Internet for package installation and the existing Google Fonts stylesheet.
- A JavaScript/WebGL-capable modern browser for full visual effects.

### Install and configure

From this directory:

```sh
pnpm install --frozen-lockfile
```

Copy `.env.example` to `.env` using your file manager, fill in your own
`DATABASE_URL`, and set the allowed frontend origin(s). No real credentials or
claim records are included. Node's `--env-file-if-exists` loads this file for the
commands below; already-set hosting environment variables take precedence.

For a **new, empty destination database only**, review and apply the schema:

```sh
node --env-file-if-exists=.env migration/run.mjs db:push
```

Do not point this command at the original production database. There is no
automatic schema migration during startup, and no fabricated seed data.

### Local development

```sh
node --env-file-if-exists=.env migration/run.mjs dev
```

Open `http://localhost:5173`. The launcher starts the API at port 8080 and the
frontend at 5173; Vite proxies `/api` locally. React hot reload is retained.
After changing API code, restart the dev command to rebuild the API.
Use `PORT` and `WEB_PORT` to choose different ports.

### Production build and start

```sh
node --env-file-if-exists=.env migration/run.mjs build
node --env-file-if-exists=.env migration/run.mjs start
```

Open `http://localhost:8080` by default. The exported Express server serves both
the original API and the generated frontend on one origin. Video byte-range
requests, static assets, prerendered routes and the SPA fallback are supported.
Run from the project root when loading `.env`.

### Checks

```sh
node --env-file-if-exists=.env migration/run.mjs typecheck
pnpm exec playwright install chromium
node --env-file-if-exists=.env migration/run.mjs test
```

Browser testing may require OS-specific native libraries. The included mobile
tap-target suite launches its own dev server on port 4173.
There is no configured lint command.

### Optional component canvas

```sh
node --env-file-if-exists=.env migration/run.mjs canvas
```

Open `http://localhost:5174/__mockup`. This preserves the component sandbox; it
does not recreate Replit's proprietary board UI and is not deployed publicly.

## What's included

- `artifacts/the37/`: complete React UI, content, animations, styles and public media.
- `artifacts/api-server/`: Express API, claim persistence and startup code.
- `artifacts/mockup-sandbox/`: original component preview source.
- `lib/`: API contract, generated client/validators, database schema.
- `attached_assets/`: all local image, video and audio source/reference files.
- `scripts/`: original helper scripts; historical Replit hooks are not required.
- `migration/`: portable launcher, dependency inventory, checksum inventory,
  excluded-file list and original versions of modified export files.
- Original Replit deployment manifests retained for reference, not required to run.

Excluded: secrets, real `.env` files, HTTP archives, claim data, logs, caches,
`node_modules`, generated build output, Git history, internal agent state and
historical task/chat instruction attachments. None is needed to reproduce the UI.
`migration/EXCLUDED_PATHS.txt` lists paths omitted from the source snapshot.

## Important limits

This is source-complete, not a copy of the production database. The claim form
requires PostgreSQL, stores submissions in `claims`, and sends no email.
There is no application login/session system or managed file-upload service.
External hosting, DNS, HTTPS and production data transfer remain your responsibility.
The single ZIP is large; Claude's upload limits may require local extraction and
opening the folder with Claude Code rather than uploading the complete archive
through a chat interface. Keep the media alongside the source; do not delete it.
