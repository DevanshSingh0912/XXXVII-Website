# Claude handoff

## Mandatory first steps

First inspect the supplied source code, read README/architecture/deployment/
validation documents, install dependencies from the lockfile, and run this
existing project before changing it. Do not reconstruct it from screenshots
or descriptions. Do not simplify the design, remove features, introduce mock
data, or broadly change architecture without the owner's explicit permission.

## Product and boundaries

XXXVII — The 37 is an atlas/manifesto spanning 37 causes and 10 dimensions.
Preserve all copy, navigation destinations, animations, mobile layouts,
cinematic scenes, posters, portraits, citations and form behavior.
Portraits represent real people: preserve identity; never regenerate faces to
make styling changes. The Players page has six unique scenes; its claim area
stays video-free.

## Files to inspect first

- `artifacts/the37/src/App.tsx`: route table/providers.
- `artifacts/the37/src/components/layout.tsx`: desktop/mobile navigation.
- `artifacts/the37/src/pages/`: current page implementations.
- `artifacts/the37/src/index.css`: design tokens/fonts/global behavior.
- `artifacts/the37/src/lib/content/`: exact editorial content.
- `artifacts/the37/src/lib/videos.ts`, `scene-visuals.ts`, and
  `components/scene-video.tsx`: media registries, lazy playback and posters.
- `artifacts/the37/src/pages/contacts.tsx`: claim validation, role/cause inputs.
- `artifacts/the37/prerender.ts`, `src/lib/ssr-html.ts`: crawler/static HTML.
- `artifacts/api-server/src/index.ts`, `app.ts`, `routes/`: API lifecycle.
- `lib/db/src/schema/claims.ts`: persisted visitor responses.
- `lib/api-spec/openapi.yaml`: source of truth for API client/schema generation.
- `migration/run.mjs`: portable commands; read before altering deployment.

Versions are listed in PROJECT_ARCHITECTURE and DEPENDENCIES.json; use the
lockfile, not latest packages. Do not upgrade frameworks as migration work.

## Configuration

Set DATABASE_URL for a destination PostgreSQL database, PORT for HTTP, and
ALLOWED_ORIGINS for actual frontend origin(s); LOG_LEVEL is optional.
WEB_PORT and CANVAS_PORT are local-launcher settings. NODE_ENV/BASE_PATH/API_PORT/
SERVE_WEB are set by the launcher. No active session secret or AI API key is
required. No Replit database credentials or real claim rows are exported.

The frontend expects `/api` on the same origin. Do not point production at
localhost or a `.replit.dev` address. Use the included single-origin adapter or
configure an equivalent reverse proxy. Host at `/`, not a nested URL prefix;
some legacy media/SEO paths intentionally assume the root.

## Commands

```sh
pnpm install --frozen-lockfile
node --env-file-if-exists=.env migration/run.mjs db:push
node --env-file-if-exists=.env migration/run.mjs dev
node --env-file-if-exists=.env migration/run.mjs build
node --env-file-if-exists=.env migration/run.mjs start
```

Run db:push only after selecting a NEW destination database and reviewing the
schema. Read DEPLOYMENT for private data transfer. Run the checks in README,
test important browser journeys, and inspect route/media responses before changes.

## Known limitations / inherited issues

- External deployment and real DNS/HTTPS cutover have not been performed.
- Existing submissions must be transferred separately with owner authorization;
  source export is not a database backup.
- Claims are stored, not emailed; there is no inbox/admin screen.
- Fixed canonical/OG/sitemap URLs identify `xxxvii.org`. Keep for the same domain;
  if changing domains, review `index.html`, `src/lib/ssr-html.ts`,
  `public/sitemap.xml`, `public/robots.txt`, `public/llms.txt`.
- Fonts require Google Fonts network access. No font licenses were invented.
- Media is large; hosting disk/bandwidth limits matter. Do not silently delete
  videos or change compression as part of migration.
- MP4 playback depends on browser codecs; Players includes WebM alternatives.
  Lack of H.264 in an automated browser does not imply a broken file.
- WebGL effects can use fallbacks on unsupported browsers.
- The existing build emits nonfatal source-map/chunk-size warnings; a canvas
  package has an inherited deprecated Recharts dependency.
- Original Replit post-merge shell hook is historical; do not execute it as
  a migration step against a real database.
- Chrome/Linux checks are not proof of Safari/Firefox/Windows/macOS parity.
- FortiGuard classification / Bitdefender reputation decisions occur outside
  application code. Do not promise that a deploy clears vendor blocks.

## Change discipline

Keep the library/project boundaries, preserve media filenames and relative
paths, and keep health startup lightweight. Make focused changes and verify
them; do not rebuild the app as a new template. Consult VALIDATION_REPORT for
checks actually run on this export rather than assuming external readiness.
