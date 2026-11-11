# Project architecture

## Stack and dependency provenance

pnpm monorepo; TypeScript 5.9.3; Node 24.13.0; React/React DOM 19.1.0;
Vite 7.3.6; Tailwind CSS 4.3.3; Framer Motion 12.42.2; React Query 5.101.4;
Wouter 3.10.0; Express 5.2.1; Drizzle ORM 0.45.2; pg 8.22.0.
UI primitives use Radix, with react-hook-form and Zod validation. OGL supplies
WebGL effects. `migration/DEPENDENCIES.json` lists installed direct dependencies
for every workspace package; `pnpm-lock.yaml` pins the complete resolved graph.

## Frontend

`artifacts/the37/index.html` → `src/main.tsx` → `src/App.tsx`.
React Query supplies server-state hooks, Wouter supplies client routing, and
`components/layout.tsx` supplies navigation. Reusable components are under
`components/`, UI primitives under `components/ui/`, and shared behavior under
`hooks/` and `lib/`. `src/index.css` carries fonts/theme/custom styles.

The visual identity is dark cinematic editorial: black/ivory, scrolling scene
videos, particle/WebGL effects and restrained animated type. Do not replace it
with a generic template. Preserve responsive behavior and reduced-motion handling.

Route map:

| Route | Purpose |
| --- | --- |
| `/` | Story/home intro and manifesto-style sequence |
| `/prelude` | Prelude |
| `/infos` | Manifesto |
| `/atlas` | Dimensions chapter sequence |
| `/atlas/:dimensionId` | Dimension-filtered atlas |
| `/causes` | XXXVII all-causes atlas |
| `/cause/:slug` | Individual cause |
| `/dimensions` | Index |
| `/contacts` | Players/Five Forces and claim form |
| `/about` | About/team |
| `/founder` | Client redirect to About |

Content is in `src/lib/content/`, atlas data in `src/lib/data.ts`, team data in
`src/data/about.ts`. Route names differ from their display labels intentionally.

## Media

Runtime public assets live under `artifacts/the37/public/`. Imported source images
are under `attached_assets/generated_images/` and are bundled by Vite using the
`@assets` alias. Other attachments preserve uploaded references and source photos.
No public asset or attached image/video is removed merely because it looks unused.

`src/lib/videos.ts` and `scene-visuals.ts` map the scene media. Some paths are
constructed dynamically from cause/dimension identifiers. `SceneVideo` handles
lazy activation, playback, reduced motion and derived posters. Players includes
WebM alternatives; many older clips remain MP4-only. Original encodes are preserved.
Font stylesheets are fetched from Google Fonts, not stored locally. There were no
local font binaries/license files to export.

## API and data

`artifacts/api-server/src/index.ts` opens the HTTP port before loading Express.
Keep its lightweight startup/health-probe behavior intact.
`src/app.ts` mounts routers at `/api`, configures CORS/logging and trusts one
reverse-proxy hop. Review that proxy policy for your external hosting topology.

| Endpoint | Behavior |
| --- | --- |
| `GET /api`, `/api/`, `/api/healthz` | Health status |
| `POST /api/claims` | Validate, rate-limit, save claim and return HTTP 201 |

Claim fields: name, email, causeSlug, role, optional message. Database rows add
serial ID and creation timestamp. Nonempty hidden `website` is a honeypot and
returns a fake successful response without inserting. The limit is five requests
per IP per minute per server process. No claims-reading admin UI exists.

`lib/api-spec/openapi.yaml` is the contract; Orval generates
`lib/api-client-react` and `lib/api-zod`. Regenerate through the existing
api-spec package if the contract changes. API requests use same-origin `/api`.

`lib/db/src/schema/claims.ts` defines PostgreSQL storage. Drizzle configuration is
`lib/db/drizzle.config.ts`. There are no migration-history or seed files in the
original project. The export keeps this schema and connection implementation.

No active authentication, authorization, session, scheduled job, webhook,
payment integration or file-upload API was found. Installed packages are not
evidence that their services are configured. The connectors SDK is preserved as
a dependency but is not called by this application's runtime.

## Build and hosting

The original Replit arrangement used a static frontend and a separate API service
combined by a path router. The export-only launcher replaces that environment:

- Development: two processes, Vite forwards `/api` to the local API.
- Production: build API and Vite, then prerender 56 routes.
- Production start: `SERVE_WEB=1` enables an Express static-serving adapter after
  API routes, serving the original build and SPA fallback on one HTTP port.
- API-only operation remains available with `SERVE_WEB` unset.

## Export-only modifications

1. Removed Replit dev overlays/cartographer imports from both Vite configs.
2. Added safe Vite defaults and development `/api` proxy.
3. Added optional static-serving adapter to the API app.
4. Added a portable launcher, runtime/package-manager declarations and env example.
5. Removed only OS-exclusion overrides from pnpm workspace config; retained the
   supply-chain release-age policy and esbuild security overrides.
6. Refreshed the lockfile for the newly allowed optional platform binaries.
   No existing package/version entry was removed; 69 optional platform entries
   were added. Existing application dependency versions were retained.
7. Extended export `.gitignore` for credentials and generated files.

Original versions of changed application/build files and the original lockfile
are retained in `migration/original-replit/`. The live project was not patched
with these portability adaptations.

Remaining Replit files (`.replit`, artifact manifests, `replit.md`, helper hooks)
are reference material. Replit-scoped npm packages remain locked/installed to
avoid unnecessary dependency changes but are not imported by the portable Vite
configuration. The sandbox's local preview endpoint machinery is preserved.
