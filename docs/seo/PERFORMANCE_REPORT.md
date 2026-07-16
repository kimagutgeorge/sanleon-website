# Performance Report — coolplus.co.ke

## Image optimization (implemented)

Ran a one-off conversion (`scripts/convert-images.mjs`, using `sharp`, quality 82 for
product photos / 78 for large static banners) over every PNG/JPG in `public/`:

| Directory | Before | After | Reduction |
|---|---|---|---|
| `public/products-images/` (54 files) | 48 MB | 11 MB | ~77% |
| `public/static/` (large banners) | 4.8 MB | 764 KB | ~84% |

Notable individual files: `products-hero-image.png` (1.37MB) and an unused 1.27MB PNG
in `public/static/` were the largest single offenders — both converted. Filenames with
spaces/parentheses (`20-Ltr_Jerrican (1).png`, `Dishwashing paste.png`) were normalized
to clean kebab-case `.webp` names at the same time; all references in
`src/js/universal.js` and the 4 components using static images were updated
programmatically (mapping-driven, not manual, so nothing was missed — verified via a
full grep for leftover `.png`/`.jpg` references after the change, zero remaining).

Already-efficient AVIF assets (`home-hero-pic.avif`, `request-quote.avif`,
`cleaning-cta-*.avif`, `highlight-washing-machine.avif`) were left untouched — they were
already smaller than a WebP re-encode would achieve.

## CLS (Cumulative Layout Shift)

The 4 hero/background images that previously had **malformed, unclosed `<img>` tags**
(a real markup bug, not just missing attributes) now have explicit `width`/`height`
matching their real intrinsic dimensions (verified via ImageMagick `identify`), so the
browser can reserve layout space before the image loads.

## LCP (Largest Contentful Paint)

- The homepage hero image (`home-hero-pic.avif`) now has `fetchpriority="high"` and
  `loading="eager"` — it's the actual LCP element and shouldn't compete with anything
  else for priority.
- All other hero/decorative images downgraded to `loading="lazy"`.
- Build-time prerendering (see `TECHNICAL_FIXES.md`) means the browser has real HTML —
  including the hero `<img>` tag — available immediately in the initial response,
  rather than waiting for the JS bundle to execute and mount the app before the LCP
  element even exists in the DOM. This is likely the single biggest LCP improvement in
  this pass, independent of image compression.

## Render-blocking resources

- Google Fonts (`fonts.googleapis.com`) and Font Awesome
  (`cdnjs.cloudflare.com`) now have `preconnect`/`dns-prefetch` hints in `index.html`.
- Font Awesome's full icon stylesheet was previously a blocking `<link rel="stylesheet">`
  in `<head>`. Switched to the standard preload+swap non-blocking pattern
  (`rel="preload" as="style" onload="this.rel='stylesheet'"`, with a `<noscript>`
  fallback) — the page no longer waits on this third-party CSS to start rendering.

## Bundle / dependency cleanup

- Removed `axios` from `package.json` — grepped the full `src/` tree and confirmed zero
  imports; every network call already used native `fetch`. Pure dead weight removed
  from the dependency graph.
- Final client bundle: `~218KB` JS / `~29KB` CSS (gzip: `~67KB` / `~6KB`) for the whole
  site — this was already small since the codebase has few dependencies (Vue,
  vue-router, `@unhead/vue`); no code-splitting work was needed at this size.

## Not done this pass

- **Bundle splitting / dynamic imports:** not needed yet at ~67KB gzipped JS — revisit
  if new pages/features grow the bundle meaningfully.
- **Product-detail table rendering** (see `AI_SEARCH_OPTIMIZATION.md`) — small
  follow-up, not a performance item.
- **Compression/caching headers:** Vercel applies gzip/brotli and CDN caching for static
  assets by default; no custom `vercel.json` headers were added since the defaults
  already cover this for a static Vite build.
