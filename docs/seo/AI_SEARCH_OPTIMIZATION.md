# AI Search Optimization — coolplus.co.ke

## The core problem this pass fixed

AI assistant crawlers (GPTBot, ClaudeBot/anthropic-ai, PerplexityBot, Google-Extended,
etc.) generally do not execute JavaScript. Before this change, every route on
coolplus.co.ke served the exact same near-empty `<div id="app"></div>` shell to any
client that doesn't run JS — meaning these assistants had effectively nothing to read,
regardless of how good the on-page copy was. This is a different (and more severe)
problem than traditional SEO, where Googlebot's JS-rendering pipeline would eventually
pick the content up anyway.

**Fix:** build-time SSR prerendering (see `TECHNICAL_FIXES.md`) now ships real, complete
HTML for all 11 primary routes — content, headings, FAQ text, and structured data are
all present in the raw response with zero JS execution required. This is the single
highest-leverage change for AI visibility in this pass.

## Semantic HTML and entity clarity

- One real `<h1>` per page stating what the page is about in plain language (e.g. "Cool
  Plus Detergents – Locally Owned Cleaning Detergent Manufacturer in Kenya Since 2016"),
  rather than fragmented marketing copy split across heading levels.
- Consistent entity naming: "Cool Plus Limited" (legal name) / "Cool Plus Detergents"
  (brand name) used consistently, with `alternateName` declared in Organization schema
  so assistants can resolve both forms to the same entity.
- Product data is structured and consistent (name, description, category, pack sizes)
  in `src/js/universal.js` and now also exposed as `Product`/`ItemList` JSON-LD — a
  structured, machine-readable equivalent of the visible product cards.

## FAQ content

Real FAQPage content (matched to visible on-page text, not hidden-only) added to:

- Company page — 4 Q&As (founding year, KEBS quality control, industries served,
  training).
- Each of the 3 industry pages — 3 Q&As each, answering concrete buyer questions (pack
  sizes, hard-water formulas, delivery/quotes) using real product names from the
  catalog (e.g. "Cool Plus PD 202 Hard-Fix," "Cool Plus Laundry Rust Away").

FAQ-format content is disproportionately useful to AI assistants because it's already
shaped as a direct question-and-answer pair, close to how these systems synthesize
answers for users.

## Tables / structured comparisons

Each product entry already carries dilution/application instructions
(`application` field in `universal.js`, e.g. "Dilute 10-5ml of product per KG x machine
weight"). This data is currently shown as plain text in the product-detail modal.
**Not changed this pass**, but flagged as a quick follow-up: rendering this as a proper
`<table>` (product / dilution ratio / use) on the category pages would give assistants
(and human researchers) a clean, directly quotable reference — this is a small,
low-risk addition using data that already exists.

## What was deliberately not done

No fabricated expertise signals (certifications, awards, named case studies, engineer
bios) were added anywhere, including in structured data. Adding these to make the site
"read better" to an AI assistant while being untrue is a real trust and misinformation
risk once machine-summarized and repeated back to users as fact. See
`IMPLEMENTATION_CHECKLIST.md` for what real assets would help here if the business can
supply them.
