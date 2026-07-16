# SEO Audit — coolplus.co.ke

**Site:** Cool Plus Limited — cleaning detergent manufacturer, Nairobi, Kenya
**Stack:** Vue 3 + Vite SPA (client-rendered, no framework SSR), Vercel hosting
**Audit date:** 2026-07-16

> Note on scope: the original brief for this audit assumed an HVAC/MEP engineering
> business on Next.js. The live codebase is a cleaning-detergent manufacturer on a Vue
> SPA. This audit and every fix below are grounded in the real business and real stack.

## Critical findings — fixed in this change

| # | Finding | Fix |
|---|---|---|
| 1 | `index.html` canonical hardcoded to `/` on every route (duplicate-content risk across all 5 pages) | Per-route `<link rel="canonical">` via `useHead()`, one unique URL per page |
| 2 | No per-route `<title>`/meta at all — every route shared one static block | `@unhead/vue` wired in `main.js`; every route sets its own title/description/OG/Twitter |
| 3 | `og:image` referenced `og-image.jpg`; actual file is `og-image.png` | Fixed in `index.html` |
| 4 | Canonical used `www.coolplus.co.ke`; `robots.txt` sitemap referenced `coolplus.co.ke` (host mismatch); both hosts served 200 with no redirect (verified live) | Standardized on `coolplus.co.ke`; added a 301 `www` → non-www redirect in `vercel.json` |
| 5 | `robots.txt` had a leftover header comment for an unrelated "Drivate - Car Marketplace" project | Rewritten for Cool Plus |
| 6 | Malformed, unclosed `<img>` tags in `HeroSection.vue` (×3) and `Footer.vue` (×1) — invalid markup risks inconsistent parsing/CLS | Closed properly, added `width`/`height`/`loading`/`fetchpriority` |
| 7 | Home page H1 was split into three separate heading levels (`<h1>MANUFACTURES</h1><h2>OF CLEANING</h2><h3>DETERGENTS</h3>`) — broken hierarchy, meaningless fragment as the actual H1 | Merged into one `<h1>` with visual line breaks preserved via `<span class="block">` |
| 8 | Products and Contact pages rendered **no `<h1>` at all** | Added a real H1 to each (dynamic per category on Products) |
| 9 | 404 page had two `<h1>` elements ("Page Not Found" and "404") | Second one changed to `<p>`; added `noindex` |
| 10 | Heading hierarchy skipped levels throughout (h1 → h4/h5 with no h2/h3) on Home and Company pages | Renumbered to a clean h1 → h2 → h3 structure sitewide |
| 11 | NAP inconsistent: JSON-LD said "Nairobi, KE" only; Contact page displayed a full street address; casing varied ("Coolplus" vs "Cool Plus") | Unified to one address block (Industrial Area Road A, Nairobi, P.O. Box 213-00517, KE) used identically in JSON-LD and on-page |
| 12 | Sitemap had 5 URLs, no `lastmod`, included `/favourites` (a personalized, localStorage-only page with no unique content) | Rebuilt sitemap with all 11 real, indexable routes + `lastmod`; `/favourites` excluded and `noindex`ed instead |
| 13 | Structured data limited to a thin Organization + LocalBusiness block, present but not very complete | Expanded Organization/LocalBusiness (logo, `sameAs`, full NAP, Saturday hours) + added BreadcrumbList, Product/ItemList, and FAQPage schema per relevant route |
| 14 | Product categories (Laundry/Housekeeping/Kitchen Hygiene/Floor Care) were client-side JS filters only — no real URL, nothing to rank or share | New indexable routes: `/products/category/:slug` |
| 15 | Pure client-side rendering — non-JS crawlers (GPTBot, ClaudeBot, PerplexityBot, and any bot that doesn't execute JS) saw an essentially empty shell | Added a build-time SSR prerendering step (see `TECHNICAL_FIXES.md`) — every primary route now ships real static HTML |
| 16 | 1MB+ unoptimized PNGs sitewide (`products-hero-image.png` 1.37MB, an unused 1.27MB PNG, several 1MB+ product images); `products-images/` totalled 48MB across 54 files | Converted to WebP: `products-images/` 48MB → 11MB, `static/` 4.8MB → 764KB |
| 17 | Generic/duplicate image alt text (`alt="item.name"` only) | Upgraded to include category + pack size context |
| 18 | `axios` installed as a dependency but never imported anywhere (all forms already used native `fetch`) | Removed |
| 19 | Font Awesome and Google Fonts loaded render-blocking, no connection hints | Added `preconnect`/`dns-prefetch`; Font Awesome now loads via a non-blocking preload+swap pattern |
| 20 | `HomePage.vue`'s "Our Clients" partner section is gated behind `v-if="clients"`, but `clients` is never defined anywhere in the component — the section can never render | **Not fixed** — flagged only. The section's markup is 4 empty placeholder circles with no real logos; enabling it without real client logos would just show broken-looking empty circles. Needs real client-logo assets before it's turned on (see `IMPLEMENTATION_CHECKLIST.md`). |

## Content audit

- **Duplicate titles/descriptions:** eliminated — all 11 crawlable routes now have unique title + meta description.
- **Thin content:** Company page was mission/vision/advantages/clients only. Expanded with a genuine FAQ section (4 Q&As) and links out to the new industry pages. The 3 new industry pages add ~250–350 words of grounded, non-duplicate content each.
- **Keyword cannibalization:** none found — the new category pages and industry pages target distinct, non-overlapping query intents (see `KEYWORD_MAP.md`).
- **Broken links:** none found in internal navigation. External hardcoded links to `https://coolplus.co.ke/company-assets/*.pdf` (company profile, product catalog) were not verified — those PDFs live outside this repo; confirm they still resolve on the live domain.
- **Redirect issues:** `www` now redirects to non-www (301, see `vercel.json`). No other redirect chains found.
- **Crawlability/Indexability:** `/favourites` and the 404 page are now explicitly `noindex`; everything else is `index, follow`.

## Not fixed / needs the business owner

- No fabricated certifications, awards, testimonials, or case studies were added — see `docs/seo/AI_SEARCH_OPTIMIZATION.md` and `IMPLEMENTATION_CHECKLIST.md` for what real assets would strengthen EEAT.
- The "Our Clients" section gap above.
- HTTP status codes for the 404 route: this is a client-rendered catch-all (`/:pathMatch(.*)*`) and is not part of the prerendered route set, so unknown URLs served by Vercel's SPA rewrite will return HTTP 200 with the homepage shell before client-side routing swaps in the 404 view. True `404` status codes would require a Vercel Function/Edge Middleware — out of scope for this pass, flagged as a follow-up.
