# Local SEO — coolplus.co.ke

## NAP (Name, Address, Phone) — now unified

Previously inconsistent across `index.html` JSON-LD (just "Nairobi, KE"), the Contact
page display ("Coolplus HQ, Industrial Area Road A, Nairobi, Kenya"), and the casing of
"Cool Plus" vs "Coolplus." Now identical everywhere:

- **Name:** Cool Plus Limited (alternate name: Cool Plus Detergents)
- **Address:** Industrial Area Road A, Nairobi, P.O. Box 213-00517, Kenya
- **Phone:** +254 798 534 123
- **Email:** info@coolplus.co.ke
- **Hours:** Mon–Fri 9:00–17:00, Sat 8:00–12:00

This exact block is used in the `LocalBusiness` JSON-LD and on the Contact page.

## What was implemented

- `LocalBusiness` schema with full address, phone, email, and both weekday and Saturday
  `openingHoursSpecification`.
- `areaServed: Kenya` on the Organization schema (the existing site copy already claimed
  Kenya-wide reach — "supplies... across Kenya" — so this schema claim is consistent
  with existing content, not new).
- `geo.region`/`geo.placename` meta tags corrected to Nairobi/Kenya region code.

## Google Business Profile — recommended, cannot be implemented from this repo

- Verify/claim a Google Business Profile for "Cool Plus Limited" at the Industrial Area
  Road A address if not already done.
- Match the GBP's listed name, address and phone exactly to the NAP block above —
  mismatches between GBP and on-site NAP are a common cause of local ranking issues.
- Add the GBP profile URL to the Organization schema's `sameAs` array once it exists.
- Upload real product/facility photos, and encourage reviews from B2B clients (hotels,
  laundries, factories already listed as clients) — this is one of the highest-leverage
  local-trust signals available and can't be faked from the codebase.
- Select accurate GBP categories (e.g. "Cleaning products supplier," "Chemical
  manufacturer") rather than a generic "Manufacturer."

## Service-area expansion — Mombasa, Kisumu, Nakuru, Eldoret

The brief asked for optimization toward these secondary cities. **No location pages
were built this pass** because there's no confirmed fact on the current site that Cool
Plus actively delivers to or serves clients in these specific cities beyond the general
"across Kenya" claim. Before building `/locations/mombasa` etc.:

1. Confirm with the business whether Cool Plus actually fulfills orders in these cities
   (delivery radius, minimum order size, lead time).
2. If yes, each location page should follow the same pattern as the industry pages
   (`src/js/industries.js` → `IndustryPage.vue`) — a `src/js/locations.js` data file and
   a near-identical `LocationPage.vue` would reuse most of the same components.
3. Add real, city-specific details (not just a copy-pasted page with the city name
   swapped) — e.g. named client types actually served there, if known.

Building thin, near-duplicate city pages with no real local distinction would create a
doorway-page risk rather than a ranking benefit — better to hold these until real
regional facts are available.

## East Africa expansion

The brief also asked for scalability toward East Africa. The current site makes no
claims of operating outside Kenya, so no East-Africa-wide content was added. If Cool
Plus begins exporting/serving Uganda, Tanzania, or Rwanda, the same
`industries.js`/`locations.js` pattern extends cleanly — flagging this as a structural
note for future work, not a gap in this pass.
