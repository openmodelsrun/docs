# Changelog

## [0.10.0] - 2026-10-24

- Updated Next.js and its ESLint config to 16.4.3, React/React DOM to 19.3.1, and compatible type definitions and lint fixes. Nextra remains on 4.6.1; no major compiler or lint migration is included.
- Refreshed compatible transitive dependencies, including security fixes for DOMPurify, xmldom, Zod, sharp and source-map-js. Eight low-severity audit entries remain in the KaTeX dependency chain; the incompatible suggested Nextra downgrade is not applied.
- Corrected telemetry routes, response fields, null semantics, current probe schedules and ranking weights against platform 3.16.1. Documented provider-wide versus model-specific latency, reachability limitations and TLS failures.
- Refreshed registry coverage, homepage documentation links, canonical site navigation and the static-export build/deploy instructions.
- Restored the missing static search index with Pagefind 1.5.2. Postbuild now generates sitemap/search assets and checks that the search module exists before deployment.
