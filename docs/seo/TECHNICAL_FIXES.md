# Technical SEO Implementation — coolplus.co.ke

## Head management

`@unhead/vue` is wired up in `src/main.js` (`createHead()` + `app.use(head)`).
`index.html` was trimmed to sitewide-only defaults (charset, viewport, favicons,
connection hints, a static Organization + LocalBusiness JSON-LD baseline). Every route
sets its own title/meta description/canonical/OG/Twitter tags and page-specific JSON-LD
via `useHead()` in a `<script setup>` block. Existing Options-API components were left
as-is — Vue 3 SFCs support a `<script setup>` block alongside a plain `<script>` block
in the same file, sharing template scope, which kept this change additive rather than a
rewrite.

Shared helpers live in `src/js/seo.js`: `breadcrumbSchema()`, `faqSchema()`,
`productListSchema()`, `productAlt()`, `ldJsonScript()` — used across all views to avoid
duplicating JSON-LD boilerplate.

## Canonical host

Verified live: both `https://coolplus.co.ke/` and `https://www.coolplus.co.ke/`
currently return HTTP 200 with no redirect between them (checked via `curl -I` against
production). Standardized on the non-`www` host (matches the pre-existing
`robots.txt` `Sitemap:` line) and added an explicit 301 in `vercel.json`:

```json
"redirects": [
  {
    "source": "/(.*)",
    "has": [{ "type": "host", "value": "www.coolplus.co.ke" }],
    "destination": "https://coolplus.co.ke/$1",
    "permanent": true
  }
]
```

## Build-time SSR prerendering

The site is a client-rendered Vue SPA with no framework SSR, so non-JS-executing
crawlers (most notably AI assistant crawlers — GPTBot, ClaudeBot, PerplexityBot) would
otherwise see an empty `<div id="app"></div>` shell. Rather than a headless-browser
prerender plugin (fragile in constrained CI/build containers — Chromium's system
dependencies are often missing on serverless build images), this uses Vue's official,
dependency-light SSR APIs:

- `src/entry-server.js` — creates a fresh `createSSRApp` + memory-history router + head
  instance per URL, awaits `router.isReady()`, and renders with
  `@vue/server-renderer`'s `renderToString`.
- `src/router/routes.js` — the route table, extracted from `src/router/index.js` so it
  can be imported without triggering `createWebHistory()` (which throws in Node/SSR).
- `scripts/prerender.mjs` — after the normal client build, loads the SSR bundle, renders
  each crawlable route, and merges the result into `dist/index.html`'s template via
  `@unhead/vue/server`'s `transformHtmlTemplate()`, writing `dist/<route>/index.html`.
- `package.json` build script: `vite build && vite build --ssr src/entry-server.js
  --outDir dist-server && node scripts/prerender.mjs && rm -rf dist-server`.

**Prerendered routes:** `/`, `/company`, `/products`, all 4
`/products/category/:slug`, all 3 `/industries/:slug`, `/contact-us` — 11 static HTML
files with real, unique `<title>`, meta, and body content, verified by inspecting the
raw HTML output (no JS execution) after build.

**Intentionally not prerendered:** `/favourites` (personalized, `noindex`), the
`/products/:id` name-search deep link, and the `/:pathMatch(.*)*` 404 catch-all — these
fall back to the client-rendered SPA shell exactly as before.

**Client behavior:** `src/main.js` still uses a plain `createApp().mount()` (not
hydration) — on load, client JS replaces the prerendered shell with a fresh client
render. This is simpler and avoids hydration-mismatch warnings; the only goal of the
prerendering is crawler visibility, not faster first paint for real users (though it
does help there too, since content is visible before JS finishes loading).

**One blocking bug fixed to make this work:** every view gated its actual content
behind `page_is_loading`, flipped to `false` only inside `mounted()` — which never runs
during server rendering. Without a fix, SSR would have only captured the loading
spinner. Fixed by making the initial value SSR-aware:
`typeof window === "undefined" ? false : true` (6 files). Also fixed one real SSR
crash: `NavBar.vue`'s `data()` read `window.innerWidth` directly (not inside a
lifecycle hook), which throws in Node — now guarded the same way.

**Deploy verification still needed:** Vercel's static filesystem routing resolves
extensionless paths (`/company`) to `<path>/index.html` automatically, before the
`rewrites` catch-all is considered — this is the standard, well-established behavior
every static-site generator (Next `output: export`, Nuxt `generate`, Gatsby, etc.)
relies on to deploy clean-URL output to Vercel with no extra config, and matches what
was confirmed locally with a plain static file server (`python3 -m http.server`):
requesting `/company` 301-redirects to `/company/` and correctly serves the prerendered
Company page HTML.

One caveat found while testing: `vite preview` (the local preview server, used for
`npm run preview`) does **not** do this extensionless-path resolution the way Vercel and
a plain static server do — `/company` without a trailing slash falls through to the SPA
shell locally, while `/company/` (trailing slash) correctly serves the prerendered page.
This is a limitation of `vite preview`'s simpler static server, not a sign of a real
bug — but it means **local testing of prerendered routes should use a trailing slash**
(or `npx serve dist`, which handles this correctly) rather than relying on
`npm run preview` alone. A production Vercel deploy check is still recommended as final
confirmation, since the live Vercel edge itself couldn't be reached from this
environment.

## Structured data

- **Organization + LocalBusiness** (sitewide, static in `index.html`): added `logo`,
  `sameAs` (Facebook/Instagram/TikTok from `src/js/universal.js`), full NAP, and
  Saturday opening hours.
- **BreadcrumbList**: every inner page.
- **Product/ItemList**: Products hub and all 4 category pages, built from
  `src/js/universal.js` directly — no price claims included since Cool Plus sells via
  quote request, not fixed listed pricing.
- **FAQPage**: Company page and all 3 industry pages, matched to visible on-page FAQ
  content (required by Google's structured-data guidelines — markup must reflect what's
  actually visible).
- **WebSite + SearchAction**: Home page.

## robots.txt / sitemap.xml

- `robots.txt`: removed the leftover "Drivate - Car Marketplace" header comment,
  aligned the `Sitemap:` URL with the canonical host, kept crawling permissive.
  `/favourites` is excluded via a `noindex` meta tag rather than `Disallow` — blocking
  crawling would prevent Google from ever reading that noindex directive.
- `sitemap.xml`: rebuilt with all 11 real crawlable routes and `lastmod` dates;
  `/favourites` excluded.

## Performance

See `PERFORMANCE_REPORT.md` for the full breakdown (image optimization, connection
hints, dependency cleanup).

## Known follow-ups

- True HTTP 404 status codes for unknown URLs would need a Vercel Edge
  Middleware/Function — the current SPA-rewrite approach always returns 200.
- `axios` was removed from `package.json` as an unused dependency (all network calls use
  native `fetch`).
