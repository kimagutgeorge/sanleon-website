# Implementation Checklist — coolplus.co.ke

## Done in this change

- [x] `@unhead/vue` wired up; unique title/meta description/canonical/OG/Twitter on
      every route (was: one shared static block for the whole site)
- [x] Canonical host standardized on `coolplus.co.ke`; 301 redirect from `www` added in
      `vercel.json`
- [x] `og:image` broken-path bug fixed
- [x] `robots.txt` rewritten (stale unrelated header comment removed, sitemap host
      aligned)
- [x] `sitemap.xml` rebuilt — all 11 real routes, `lastmod`, `/favourites` excluded
- [x] Malformed `<img>` tags fixed (×4), with `width`/`height`/`loading`/`fetchpriority`
- [x] H1 present, unique, and singular on every page; heading hierarchy corrected
      sitewide (no more h1 → h4/h5 skips)
- [x] NAP unified across JSON-LD and on-page display
- [x] Organization/LocalBusiness schema expanded (logo, `sameAs`, full hours)
- [x] BreadcrumbList, Product/ItemList, FAQPage, WebSite+SearchAction schema added
- [x] 4 new product-category pages (real URLs, were JS-only filters before)
- [x] 3 new industry landing pages (Hospitality, Commercial Laundry & Dry Cleaners,
      Industrial & Factories) with grounded FAQ content
- [x] Internal linking: Footer links to all categories/industries; Company page links to
      all 3 industry pages
- [x] Build-time SSR prerendering for all 11 primary routes — the main fix for AI-crawler
      and fast-indexing visibility
- [x] Product image alt text upgraded (name + category + pack sizes)
- [x] Images converted to WebP + renamed (`products-images/` 48MB→11MB,
      `static/` 4.8MB→764KB)
- [x] `axios` removed (unused dependency)
- [x] Font Awesome switched to non-blocking load; preconnect/dns-prefetch added
- [x] `/favourites` and 404 page set to `noindex`
- [x] `npm run build` verified end-to-end, including the prerender step

## Requires the business / cannot be done from this repo

- [ ] **Google Business Profile** — claim/verify, match NAP exactly, add real photos,
      collect reviews (see `LOCAL_SEO.md`)
- [ ] **Real EEAT assets** — if available, add: KEBS certificate/registration details,
      any ISO or industry certifications, real client testimonials, named case
      studies, staff/engineer profiles, client logos (with permission) for the
      currently-empty "Our Clients" carousel on the Home page
- [ ] **Fix or remove the Home page "Our Clients" section** — currently dead code
      (`v-if="clients"` where `clients` is never defined, so it never renders; even if
      enabled, the markup is 4 empty placeholder circles with no logos) — needs either
      real client logos or removal
- [ ] **Confirm regional delivery facts** (Mombasa/Kisumu/Nakuru/Eldoret) before
      building location pages — see `LOCAL_SEO.md`
- [ ] **Verify the two hardcoded PDF links** (`company-assets/Company profile copy.pdf`,
      `company-assets/New Cool Plus Products catalog copy Compressed.pdf`) still resolve
      on production — they're absolute URLs to files outside this repo
- [ ] **Production deploy check** — confirm Vercel serves the prerendered
      `dist/<route>/index.html` files correctly in production for extensionless paths
      like `/company` (verified locally via a static file server, which correctly
      301-redirects `/company` → `/company/` and serves the right file; not tested
      against the live Vercel edge — see the caveat about `vite preview` in
      `TECHNICAL_FIXES.md`, it is not representative of Vercel's routing here)

## Suggested next-phase content (not built this pass)

- [ ] Institutions industry page (schools & universities) — same pattern as the 3
      built, see `CONTENT_IMPROVEMENTS.md`
- [ ] Blog / resource content (buyer-guide style articles) — no blog infrastructure
      exists yet, needs a decision on whether to add one
- [ ] Render product dilution/application data as a table on category pages (data
      already exists in `universal.js`, just not tabulated) — see
      `AI_SEARCH_OPTIMIZATION.md`
- [ ] True HTTP 404 status codes via Vercel Edge Middleware (currently the SPA catch-all
      always returns 200)

## Verification performed

- `npm run build` succeeds end-to-end (client build → SSR build → prerender → cleanup)
- Inspected raw prerendered HTML (no JS) for `/`, `/company`,
  `/products/category/laundry-products`, `/industries/hospitality`, `/contact-us` —
  confirmed unique `<title>`, real body content, and JSON-LD present
- Confirmed zero duplicate `<title>` strings across the 11 prerendered routes
- Confirmed zero remaining broken `<img>` tags and zero remaining `og-image.jpg`
  references
- Confirmed `robots.txt` and `sitemap.xml` reference the same host
- Confirmed live `www`/non-www both currently 200 (pre-fix state) via `curl`
