# OpenModels Docs

Documentation site for [OpenModels](https://github.com/openmodelsrun/openmodels) — built with [Nextra](https://nextra.site) on Next.js 16.

**Version:** 0.10.0

Runtime stack: Next.js 16.4.3, React 19.3.1, Nextra 4.6.1. TypeScript remains on the compatible 5.9 line; major framework and tooling migrations are not part of this maintenance release.

Security review: compatible dependency fixes remove the high/critical findings present before this refresh. Eight low-severity audit entries remain in Nextra's KaTeX dependency chain (one underlying advisory, GHSA-238p-pmpm-9mq7). Do not force the audit's proposed Nextra downgrade or override KaTeX across its supported range without a separate compatibility check. Docs are exported from repository-controlled content and served statically by Nginx.

## Prerequisites

- Node.js 22+
- npm

## Local Development

```bash
npm ci
npm run dev
```

The dev server runs at [http://localhost:3040](http://localhost:3040).

## Building

```bash
npm run build
```

Produces a static export in `out/` (via Next.js `output: 'export'`). The `postbuild` step generates the sitemap with `next-sitemap`.

Useful scripts:

| Script | Purpose |
|---|---|
| `npm run dev` | Start dev server on port 3040 |
| `npm run build` | Static export to `out/` + sitemap |
| `npm run start` | Not used for this static export; serve `out/` with a static server |
| `npm run clean` | Remove `.next/` cache |
| `npm run lint` | Run ESLint |

## Deployment

```bash
git pull
npm ci
npm run build
```

Serve the contents of `out/` with Nginx.

Do not run `next start` for `output: 'export'`. Validate with `npm run lint`, `npx tsc --noEmit`, and `npm run build`; the export must include `404.html`, the search index, and all documentation pages before replacing the served directory. Keep the previous export for rollback.

## API Contract

The current telemetry reference uses `/api/providers/:id/health`, `/api/providers/:id/latency`, `/api/providers/status`, and `/api/models/:id/providers/ranked`. Missing observations are `null`, not zero. Provider comparisons use model-specific latency; provider-level latency aggregates valid samples across models over the last 24 hours. See the [live OpenAPI specification](https://api.openmodels.run/api/docs/openapi.json) for generated response schemas.

Put TLS in front with Certbot or your preferred provisioner. For zero-downtime updates, build into a timestamped directory and swap a symlink.

## Content Structure

All documentation lives in `content/`:

```
content/
├── _meta.json          # Top-level navigation order
├── index.mdx           # Landing page
├── getting-started/    # Quickstart, installation, concepts
├── architecture/       # System overview, data flow, schemas
├── api-reference/      # Models, providers, telemetry, system endpoints
├── contributing/       # Guides for adding models and providers
└── roadmap/            # Versioned roadmap pages
```

Each directory has a `_meta.json` that controls the sidebar label and order. Pages are `.mdx` and support frontmatter for per-page `title` and `description`.
