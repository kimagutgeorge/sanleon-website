# Content Improvements — coolplus.co.ke

## Existing pages — before / after

### Home (`/`)
- **Title:** generic "Cool Plus Detergents - Quality Cleaning Detergents in Kenya" (same
  on every route) → `Cool Plus Detergents | Cleaning Detergent Manufacturer in Kenya`
  (unique, `useHead`-managed).
- **H1:** was three separate heading levels ("MANUFACTURES" h1 / "OF CLEANING" h2 /
  "DETERGENTS" h3 — also a grammar error). Now one real H1: "Manufacturers of Cleaning
  Detergents in Kenya" (same visual line-break styling preserved).
- **Heading hierarchy:** "Specialising in quality cleaning solutions…" and "Our Clients"
  were h4; service card titles and featured-product names were h5/h4. Renumbered to a
  clean h1 → h2 → h3 tree.
- Added `WebSite` structured data with a `SearchAction` pointing at the products search.

### Company (`/company`)
- **Title/description:** now unique and keyword-relevant instead of sharing Home's tags.
- **H1:** enhanced from "Cool Plus Detergents is a locally owned manufacturing company
  incorporated in 2016." to include "Cleaning Detergent Manufacturer in Kenya Since
  2016" — same factual claim, more search-relevant phrasing.
- **"Competitive Advantage" → "Why Choose Cool Plus":** same six factual bullet points,
  clearer heading.
- **"Our Clients" → "Industries We Serve":** same client list (hostels, guest houses,
  lodges, commercial laundries, dry cleaners, universities & schools, factories,
  restaurants, plastic recyclers, water & beverage bottlers), now with three links out
  to the new industry pages for internal linking.
- **New: FAQ section** (visible on-page, matched by FAQPage schema) — 4 Q&As grounded in
  facts already on the site: founding year, KEBS quality control, industries served,
  training.

### Products (`/products` + 4 category pages)
- **H1:** page had none at all. Added a dynamic H1 ("Cleaning Detergents & Products
  Catalog" on the hub, or "{Category} in Kenya" on each category page).
- **Category pages are new** — Laundry/Housekeeping/Kitchen Hygiene/Floor Care each get
  a real URL, unique title/description/H1, breadcrumb, and a `Product`/`ItemList` schema
  built directly from the existing product data (no new product copy invented — every
  name/description/pack size comes straight from `src/js/universal.js`).
- Category filter tabs are now real links (`<router-link>` to `/products/category/:slug`)
  instead of click-only JS filters, so they're crawlable and shareable.
- Product image alt text upgraded from just the product name to name + category + pack
  sizes (e.g. "Cool Plus LD 100 Clean – Laundry Products, available in 5ltrs, 20ltrs").

### Contact (`/contact-us`)
- **H1:** page had none ("Get in touch" was an h4). Promoted to H1: "Contact Cool Plus
  Detergents."
- NAP text fixed ("Coolplus HQ" → "Cool Plus HQ" for brand consistency) and now matches
  the LocalBusiness schema exactly.

### Favourites (`/favourites`)
- Left functionally identical (it's a personal, localStorage-only wishlist). Added
  `noindex` since it has no unique, shareable content and shouldn't compete for rankings.

## New pages built this pass

3 industry landing pages (`/industries/hospitality`, `/industries/commercial-laundry`,
`/industries/industrial-factories`), each with: overview, relevant product-category
links, a truthful "Why Choose Cool Plus" list, and 3 FAQs. All content is grounded in
facts already stated elsewhere on the site (the client list on the Company page, the
product catalog in `universal.js`) — no invented case studies, certifications, or
client names.

## Roadmap — identified but not built this pass

| Page | Target keyword | Intent | Suggested URL | Why held back |
|---|---|---|---|---|
| Mombasa cleaning products supplier | cleaning products supplier Mombasa | Local commercial | `/locations/mombasa` | No confirmed regional service-area facts (see `LOCAL_SEO.md`) |
| Kisumu cleaning products supplier | cleaning products supplier Kisumu | Local commercial | `/locations/kisumu` | Same |
| Nakuru / Eldoret variants | — | Local commercial | `/locations/nakuru`, `/locations/eldoret` | Same |
| Blog: "How to choose a bulk detergent supplier in Kenya" | bulk detergent supplier Kenya | Informational | `/blog/choosing-a-bulk-detergent-supplier` | No blog infrastructure exists yet; needs a decision on whether to add one |
| Blog: "Hard water vs soft water detergents explained" | hard water detergent Kenya | Informational | `/blog/hard-water-vs-soft-water-detergents` | Same |
| Institutions (schools & universities) industry page | institutional cleaning supplies Kenya | Commercial | `/industries/institutions` | De-prioritized vs. the 3 built this pass; straightforward to add using the same `IndustryPage.vue` pattern — just add an entry to `src/js/industries.js` |

Adding another industry page going forward is a one-file change: add an entry to
`src/js/industries.js` (title, metaDescription, h1, intro, relevantCategories,
whyPoints, faqs) and it will automatically get its own route, schema, and sitemap entry
once added to `public/sitemap.xml` and the prerender route list in
`scripts/prerender.mjs`.
