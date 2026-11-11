# XXXVII — The 37

A dark, cinematic atlas site for XXXVII ("The 37"): 37 causes across 10 dimensions of human existence, with a scroll-driven expanding gallery, cause detail pages, and a claim-a-cause form.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- Frontend: `artifacts/the37/` — pages in `src/pages/` (home manifesto, atlas, cause, dimensions, infos, contacts); all 37-cause content lives in the static data module `src/lib/data.ts`
- API contract: `lib/api-spec/openapi.yaml` (healthz + POST /claims)
- DB schema: `lib/db/src/schema/claims.ts` (claims table)
- Claims route: `artifacts/api-server/src/routes/claims.ts`

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

_Describe the high-level user-facing capabilities of this app once they exist._

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
