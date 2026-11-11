# External deployment

## Recommended layout

A Linux x64 Node.js 24 service with PostgreSQL 16 and persistent deployment files
is the closest fit. Examples include a managed Node web service or a Linux VPS
behind an HTTPS reverse proxy. No Docker image is required or included.
This is **not** a static-only application: the claim form needs the API/database.
Select a service with sufficient disk, image-size limits and bandwidth for ~1.9 GB
of source media and its build copy. Some serverless functions/static plans have
much smaller bundle limits and are not suitable for this full package.

## Deploy steps

1. Extract `XXXVII_Website_Files.zip` and enter its project directory.
2. Provision a separate PostgreSQL instance/database.
3. Configure DATABASE_URL securely on the destination host, not in source control.
4. Install all build dependencies with `pnpm install --frozen-lockfile`.
   Do not use `--prod` before the build: Vite/TypeScript are dev dependencies.
5. On a NEW empty destination DB, inspect the schema and run:
   `node --env-file-if-exists=.env migration/run.mjs db:push`.
6. Build:
   `node --env-file-if-exists=.env migration/run.mjs build`.
7. Start:
   `node --env-file-if-exists=.env migration/run.mjs start`.
8. Point the platform health check at `/api/healthz`.
9. Verify main routes and a test claim on the destination before switching DNS.

The host supplies PORT or the launcher defaults to 8080. The API listens on an
externally reachable interface. Configure allowed browser origins using
ALLOWED_ORIGINS (e.g. both https apex and www). Same-origin requests need no
separate API_BASE_URL; the frontend uses relative `/api` requests.

## HTTP routing / assets

The export adapter serves frontend assets and API on one process/origin:
- `/api/*` reaches Express API handlers first.
- Existing files support HEAD and range requests for media seeking.
- Prerendered directory pages are served at both slash/no-slash routes.
- Extensionless unknown routes fall back to the original SPA NotFound UI.
- Missing files return 404, not the homepage disguised as a video.

If hosting frontend and API separately, preserve these rules on your edge proxy.
Route `/api/*` to the API without removing the prefix; route the rest to
`artifacts/the37/dist/public`. Try an existing file, a directory `index.html`,
then the SPA index. Do not publicly expose `attached_assets`, internal source,
`.env`, or migration/reference files. Public production assets are only in
`dist/public`.

An API-only start is:
`node --env-file-if-exists=.env artifacts/api-server/dist/index.mjs`
with PORT and NODE_ENV=production supplied and SERVE_WEB unset.
Vite preview is not the recommended production server.

## Database migration and privacy

No live claims or credentials were copied. Keep the current Replit database
untouched. Obtain an authorized backup through your current provider's secure
export process. Transfer it privately (never in this source ZIP or an AI chat),
then use PostgreSQL's documented pg_restore/psql tooling on the destination.
Use connection secrets through the host's secret manager or a protected password
file; do not paste connection strings into shared logs.

Prefer restoring the schema/data into an empty destination database. If restoring
a full schema dump, do not independently create conflicting tables first.
For a data-only transfer, first create the reviewed Drizzle schema.
Verify row counts, timestamp values, character encoding and the serial ID
sequence afterward. Schedule a write freeze or a final delta transfer so new
claims are not lost during the DNS cutover. Never reset the original database.
Configure provider-specific TLS/CA settings without disabling verification.

## DNS / TLS / security

Use the destination host's DNS and certificate instructions for both apex and
www. Keep the existing domain if retaining the canonical/OG links. Obtain valid
HTTPS certificates before redirecting one hostname to the other. Configure HTTPS
redirects/HSTS on the destination edge after verifying HTTPS.

The API currently trusts one reverse-proxy hop. Match that to the actual
deployment; don't expose a spoofable forwarded-IP chain to the per-IP rate limit.
Avoid caching claim POST responses. Multiple API instances each have an in-memory
rate-limit counter, matching the existing implementation.

## Troubleshooting

- Missing DATABASE_URL: set the destination secret, not a Replit workspace URL.
- Missing relation: apply/restore the reviewed schema on the destination DB.
- API 404/HTML: check `/api` proxy precedence; do not route it to the SPA.
- Missing Web build: run the documented build before start and ship dist files.
- Native-module install error: use the portable lockfile; do not restore the
  original Replit OS-exclusion overrides.
- Blank pages/media: inspect failed asset URLs, root hosting and upload limits.
- Fonts unavailable: permit Google Fonts or separately license/vendor the fonts.
- Claimed success without a stored row: ensure the honeypot website field is empty.
- A shell command intended for the old Replit workflow fails on Windows: use the
  portable Node launcher rather than historical shell hooks.

The original Replit tooling/board/secret manager is not reproduced externally.
No external provider deployment, SSL provisioning, data transfer or domain cutover
has been executed as part of this export.
