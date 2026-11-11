# Export validation report

## Scope

Validation was performed on the separate export copy in a Linux x64 environment,
using Node 24.13.0, pnpm 10.26.1 and an isolated temporary PostgreSQL 16 database.
The live application and its database were not changed. Only ignore rules were
added in the original workspace to prevent export/build files entering Git or
deployment snapshots.

## Passed

- Installed into a fresh dependency directory with `pnpm install --frozen-lockfile`.
  Packages were available from the shared package cache; a fully uncached install
  on an external host was not tested.
- Full workspace TypeScript check, API production build and frontend production
  build. All 56 prerendered routes were generated.
- Existing Playwright mobile tap-target suite: 10 tests passed.
- Started the exported production server with the portable launcher.
- HTTP checks for all 56 prerendered routes, with and without trailing slashes.
- All 701 public files returned their correct file lengths.
- MP4 and WebM byte-range requests returned HTTP 206 with the requested length.
- `/api`, `/api/` and `/api/healthz` returned healthy responses.
- Unknown API routes and nonexistent video files returned HTTP 404.
- Created the schema in a new temporary database. A synthetic POST to `/api/claims`
  returned HTTP 201 and its saved row was independently verified with SQL.
  Invalid input returned 400 and the existing honeypot behavior was preserved.
  The synthetic row was deleted from that temporary database.
- All 852 source media files are byte-identical to the originals: 273 MP4,
  6 WebM, 488 JPG, 2 JPEG, 82 PNG and 1 SVG.
- Checked 386 distinct literal/glob asset references; no missing matches.
- Original source snapshot includes 1,088 files. Its seven intentional modified
  export paths are listed in `migration/INTEGRITY_REPORT.json`. All other
  inventoried files retained their original contents.
- Existing package versions were retained; the portable lockfile adds optional
  platform packages previously excluded by Linux-only overrides.

## Packaging and integrity

The archive excludes installed dependencies, build output, test artifacts, real
environment files, logs, private-key files and HTTP archives. `.env.example`
contains placeholders only. No production database rows or credentials were
exported. Migration inventories list original source hashes and excluded paths.

`migration/EXPORT_SHA256SUMS.txt` covers every packaged file except itself.
The adjacent `XXXVII_Website_Files.zip.sha256` is the archive checksum.
The adjacent `XXXVII_Website_Files_Archive_Report.json` records the completed
ZIP member-count, media-count and CRC integrity check.

The downloadable Source/Media ZIPs contain the same members as the full archive.
Extract all numbered ZIPs into the same directory. The separate download guide
lists their hashes and verification results.

## Limits and remaining setup

- No deployment to an external provider was performed.
- Windows, macOS, Safari, Firefox and physical mobile devices were not tested.
  Chromium mobile-layout checks do not guarantee all-browser equivalence.
- The existing form UI was preserved unchanged; persistence was tested through
  HTTP and SQL, not by completing a browser-driven form submission.
- Full playback of every video and a screenshot comparison of every page were
  not performed. Media byte identity and delivery were checked.
- Existing nonfatal build warnings include source-map and chunk-size warnings.
- Google Fonts remains an external network dependency; there were no local font
  files or bundled font licenses to export.
- Supply a destination PostgreSQL database, DATABASE_URL, allowed browser origins,
  hosting, domain and HTTPS configuration. Follow DEPLOYMENT.md.
- Real claim history must be transferred separately and privately if needed.
- Replit manifests and original config backups are included as references.
  The provided launcher does not require Replit services; its optional canvas
  runs the component previews, not Replit's proprietary board.
- Domain categorization by security products and certificate configuration are
  external concerns, not repaired or guaranteed by this source export.

## Readiness

Source-complete with all available local media, install/build checked, and
locally runnable using the supplied PostgreSQL configuration. Prepared for
external Node hosting, but external deployment and production cutover remain
unverified until the destination environment is configured and tested.
