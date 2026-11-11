# Migration checklist

## Export and local setup
- [ ] Verify archive integrity / supplied checksum before extraction.
- [ ] Keep `artifacts/`, `lib/`, `attached_assets/` and root configs together.
- [ ] Read README, PROJECT_ARCHITECTURE, CLAUDE_HANDOFF and VALIDATION_REPORT.
- [ ] Install Node 24.x and pnpm 10.26.1.
- [ ] Install with `pnpm install --frozen-lockfile`.
- [ ] Configure `.env` locally or hosting environment variables securely.
- [ ] Provision a NEW destination PostgreSQL database.
- [ ] Review/apply schema or privately restore an authorized full database backup.
- [ ] Run dev, typecheck, production build and production start commands.
- [ ] Verify routes, nav, local assets, video playback, mobile layout and form.

## External hosting
- [ ] Ensure build/runtime disk and media delivery quotas fit all assets.
- [ ] Configure single-origin `/api` routing or use the supplied Node adapter.
- [ ] Configure origin allowlist and trusted-proxy behavior.
- [ ] Test `/api/healthz`, byte-range media requests and deep-link refreshes.
- [ ] Test Chrome/Firefox/Safari and actual mobile devices.
- [ ] Configure Google Fonts access or explicitly plan licensed local hosting.
- [ ] Configure domain and HTTPS certificates for apex and www.
- [ ] Update canonical/OG/sitemap URLs only if the domain changes.
- [ ] Securely migrate claims, verify row counts and ID sequences.
- [ ] Account for new submissions arriving during cutover.
- [ ] Monitor errors and preserve the original deployment until verified.

## Claude continuation
- [ ] Open the extracted folder with Claude Code or upload source/docs within the
      interface's limits; the complete media-heavy ZIP may exceed chat limits.
- [ ] Require Claude to run the supplied implementation before changing it.
- [ ] Do not replace original content/media with placeholders.
- [ ] Do not disclose `.env`, claim records or private credentials in chat.
