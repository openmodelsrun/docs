# OpenModels Docs

Documentation site for [OpenModels](https://github.com/openmodelsrun/openmodels) — built with [Nextra](https://nextra.site) on Next.js 16.

**Version:** 0.7.7

## Prerequisites

- Node.js 22+
- npm

## Local Development

```bash
npm install
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
| `npm run start` | Serve the production build |
| `npm run clean` | Remove `.next/` cache |
| `npm run lint` | Run ESLint |

## Deployment

```bash
git pull
npm ci
npm run build
```

Serve the contents of `out/` with Nginx.

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
