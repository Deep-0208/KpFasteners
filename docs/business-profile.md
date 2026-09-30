# Business Profile — KP Fasteners

**Sources consulted:** business card image, logo image, prior conversation memory, client's direct chat confirmation (2026-09-29), and the public IndiaMART storefront at https://www.indiamart.com/kp-fasteners-ahmedabad/ (2026-09-29 snapshot).
**Still NOT consulted:** GST portal live check, MCA, Google Business Profile, exhaustive product catalogue with dimensions, third-party certifications.

---

## 1. Verified facts

| Field | Value | Source |
|---|---|---|
| Trade name | **KP Fasteners** (IndiaMART lists "K P Fasteners" — same brand, both spellings observed) | Business card + IndiaMART |
| Legal structure | **Proprietorship** | IndiaMART factsheet |
| Nature of business | **Manufacturer + Wholesale** (in-house manufacturing unit + warehouse) | IndiaMART factsheet + album photos |
| GST number | **24ARDPP9803A1Z3** | IndiaMART factsheet |
| GST registration date | **2017** | IndiaMART factsheet |
| Banker | **ICICI Bank** | IndiaMART factsheet |
| Total employees | **26–50** | IndiaMART factsheet |
| Contact person (business card) | **Mr. Pramod Panchal** | Business card |
| CEO (IndiaMART) | **P Panchal** | IndiaMART |
| MD / contact (IndiaMART) | **Kabir Panchal** | IndiaMART |
| ⚠ Name discrepancy | **CLIENT INPUT REQUIRED** — clarify whether Pramod Panchal and Kabir Panchal are the same person or two people (proprietor vs. day-to-day contact). Impacts `Organization.founder`, About page, and schema `contactPoint`. | — |
| Phone (primary) | **+91 98982 30448** | Business card + client confirm |
| WhatsApp Business | **Enabled on +91 98982 30448** | Client confirm 2026-09-29 |
| Sales email | **sales@kpfasteners.com** | Client confirm 2026-09-29 |
| Business hours | **Mon–Sat, 09:30–19:00 IST; closed Sunday** | Client confirm 2026-09-29 |
| Address (full) | **23/4 Ghanshyam Industrial Estate, Margha Farm, Ahmedabad – 380024, Gujarat, India** | Business card |
| Address role | **Office + Factory + Warehouse (all at same address)** | Client confirm 2026-09-29 + IndiaMART photo album (Office, Manufacturing Unit ×2, Warehouse Unit, Stocks, Sign Board) |
| Website (planned) | **https://kpfasteners.com** | Business card |
| Existing IndiaMART storefront | **https://www.indiamart.com/kp-fasteners-ahmedabad/** — TrustSEAL verified, Payment Protected, 2 yrs on IndiaMART, 100 % call response rate | IndiaMART |
| Product range (self-declared on IndiaMART) | Nuts, Bolts, **Anchor Bolts / Foundation Bolts**, **Scaffold Accessories**, **Solar Accessories**, **CSK Allen Bolts**, **Stud Bolts**, **Tie Rods**. Currently active listings: Foundation Bolt (4), Mild Steel Foundation Bolt (3), Tie Rod (1). | IndiaMART |
| Existing certifications visible | **Certificate of Registration**, **MSME Certificate** (both shown as image thumbnails on IndiaMART — request high-res copies from client) | IndiaMART |
| Positioning quote (client's own words) | "K P Fasteners is dedicated to providing the highest quality fasteners to meet all your industrial needs." | IndiaMART About Us |
| Industry | Industrial fasteners | Card + IndiaMART |
| Primary direct SEO competitor | https://www.srgfasteners.com/ | Assignment brief |
| Design/UX reference | https://www.varmoraforge.com/ | Assignment brief |
| Brand marks | Metallic silver "K" (wrench), metallic gold "P" (threaded screw), gold "KP FASTENERS" wordmark on off-white with grey world-map dots | Logo + business card |

**All facts above are labelled VERIFIED.** They may be published on the site without further checks.

---

## 2. NEEDS VERIFICATION — still open

Remaining inferences that must not be published until the client confirms:

- Export capability + IEC number (must NOT be claimed as "exporter" without proof).
- ISO 9001 or any other third-party quality certification.
- Founding year of the business (GST registered 2017, but operations may pre-date GST).

**Closed 2026-09-30:**
- Udyam / MSME certificate + URC PDFs received (`GST CERTY-K P FASTENERS-1.pdf`, `URC of K P fastener.pdf` at repo root). Numbers to be extracted for on-site display.

---

## 2b. Kabir's product-mix confirmation (2026-09-30) — MAJOR STRATEGY UPDATE

Direct client statement received via WhatsApp:

> "ANCHOR BOLTS · STUDS · SAGRODS · FOUNDATION BOLTS. Aatlu amaru OEM che. WE DEAL ALSO IN SCAFFOLDING ACCESORIES AND ITEMS. Baki biju je website srg ma chhe tame mokalyu tu ae bdhu trading only."

Translation + interpretation:

| Category | Status |
|---|---|
| **Anchor Bolts** | ✅ **Manufactured in-house (OEM)** |
| **Foundation Bolts** | ✅ **Manufactured in-house (OEM)** |
| **Stud Bolts** | ✅ **Manufactured in-house (OEM)** |
| **Sag Rods** | ✅ **Manufactured in-house (OEM)** — NEW category, was not in v0.1 sitemap |
| **Scaffolding Accessories & Items** | ⚠ **Deals in / supplies** — Kabir did not explicitly say OEM. Treat as *make + partner-supply* until clarified. Flag: "manufactures or sources — confirm per SKU" |
| **Hex Bolts / Hex Nuts** | 🔄 **Trading only** (not manufactured) |
| **Solar Accessories (MMS, T-head, module clamps, hanger bolts)** | 🔄 **Trading only** |
| **Custom Fasteners** | 🔄 **Trading only** (must reframe — not a "we make" line) |
| **CSK Allen Bolts** | 🔄 **Trading only** |
| **Tie Rods** | ⚠ Not explicitly listed by Kabir. Likely under Sag Rods / Studs family. Confirm |
| **All SS 304 / 316 / high-tensile items across categories** | 🔄 **Trading only** unless supplied under KP's own OEM line |

### What this changes site-wide

1. **Positioning shift** — KP is a **manufacturer** of Anchor / Foundation / Stud / Sag Rod fasteners **and** a distributor of the wider fastener range. Homepage hero says both, honestly.
2. **`Product` schema** — `manufacturer: { @id: "kp-fasteners-org" }` only on the four OEM categories + scaffold (pending). Every other product page uses `seller` field or the more generic `Offer` node.
3. **Content briefs affected** — foundation-bolts.md, stud-bolts.md, scaffold-accessories.md are still OEM-first (correct). **Solar accessories brief must be rewritten** as a distribution / systems-integration page. **Hex bolts/nuts brief must be rewritten** as a distribution range. **Custom fasteners brief** — either drop the URL or reposition as "custom sourcing".
4. **New page needed** — `/products/sag-rods/`. Not in the v0.1 keyword map; add as P0.
5. **The "why KP wins" wedge sharpens** — instead of a generic fastener manufacturer, KP is now:
   > *"Ahmedabad-based OEM manufacturer of Foundation Bolts, Anchor Bolts, Stud Bolts, and Sag Rods — plus a full distribution range of industrial fasteners for the construction, scaffolding and solar sectors."*
6. Every stub that currently claims manufacture of a non-OEM category must have that claim removed before content lands.

---

## 3. CLIENT INPUT REQUIRED — cannot be inferred

Nothing about these may be written into copy, schema, or metadata until the client answers. See [Section 8](#8-client-questionnaire) for the exact question list.

### 3.1 Company positioning
- Founding year, founder story, ownership.
- Legal entity name (if different from "KP Fasteners").
- Manufacturer share vs. trader share of revenue (rough %).
- One-line positioning statement in the client's own words.

### 3.2 Products and categories
- Complete SKU list or product categories (bolts, nuts, screws, washers, studs, threaded rods, anchors, rivets, self-tapping/self-drilling, machine screws, wood screws, etc.).
- Which items are **manufactured in-house** vs. **traded**.
- Head types (hex, socket, countersunk, pan, button, flange, carriage, etc.).
- Drives (hex, Allen, Torx, Phillips, slotted, square).
- Diameter and length ranges offered per category.
- Metric vs. imperial (UNC/UNF/BSW) coverage.

### 3.3 Materials, grades, standards
- Materials stocked/produced: mild steel, high-tensile carbon steel, stainless steel (SS 202 / 304 / 304L / 316 / 316L / 316Ti / duplex), alloy steel, brass, aluminium, titanium, MS with coating, etc.
- Property classes / grades: 4.6, 4.8, 8.8, 10.9, 12.9, A2, A4, ASTM A193 B7 / B7M / B8 / B8M / L7, etc.
- Standards followed: DIN, ISO, ASTM, BS, IS, JIS, ANSI/ASME. Which ones can KP genuinely quote against?
- Coatings/finishes offered: zinc plating (blue, yellow, black), hot-dip galvanising, zinc-flake (Geomet/Dacromet), phosphating, black oxide, nickel/chrome, PTFE, passivation.

### 3.4 Industries served
- Confirmed sectors (automotive OEMs / tier suppliers, construction & infra, EPC, solar/wind, oil & gas, general engineering, agricultural equipment, hardware trade, exporters, government tenders, etc.).
- Any anchor / lighthouse customers we are allowed to reference — with **written permission**.

### 3.5 Capabilities
- In-house processes: cold heading, hot forging, thread rolling, CNC turning, heat treatment, plating, quality lab. (List only what actually exists.)
- Testing equipment (tensile testing machine, hardness tester, salt spray chamber, PMI, calipers/height gauges, coating thickness gauge). Do not claim what is not present.
- Custom manufacturing / drawing-based orders — accepted? MOQ?

### 3.6 Quality & certifications
- ISO 9001 (year, certifying body), IATF 16949, ISO 14001, CE / UKCA / RoHS / REACH.
- Availability of **EN 10204 3.1 Mill Test Certificates**, PPAP, batch traceability.
- Any third-party test reports available on request.

### 3.7 Packaging, logistics, geography
- Standard packaging (bulk gunny, wooden crates, cartons, VCI, wax paper).
- Domestic delivery lead time (Ahmedabad, Gujarat, pan-India).
- Export capability — countries served, IEC number, incoterms handled.

### 3.8 Contact & conversion
- Additional phone numbers (landline / sales second line).
- WhatsApp Business number(s).
- Sales email(s).
- Preferred RFQ intake method (form / email / WhatsApp / phone).
- Physical showroom or visits by appointment?

### 3.9 Differentiators
- Why customers pick KP Fasteners today. (This is the raw material for the homepage hero and About page — do not fabricate.)

---

## 4. Preliminary competitive positioning (draft — CLIENT INPUT REQUIRED)

Based on the make+trade model and Ahmedabad base, likely defensible positioning angles are:

1. **Precision + trader breadth** — manufactured core range for consistency, complemented by traded specialist items, so buyers avoid dealing with 3 vendors.
2. **Same-city Ahmedabad supply speed** for Gujarat industrial cluster (Sanand, Halol, Vadodara, Rajkot, Morbi, Jamnagar) — subject to confirmation that KP actually offers same/next-day dispatch.
3. **Documentation discipline** — MTC + traceability by default (only if true).

Confirm or replace with the client's own words before writing any copy.

---

## 5. Likely conversion moments

- Buyer arrives on `/products/hex-bolts/` after searching a specific grade and diameter → CTA: "Request quote with drawing / spec sheet" + WhatsApp + `tel:`.
- Buyer arrives on `/materials/stainless-steel-fasteners/` → CTA: "Get SS 304 vs SS 316 comparison + quote".
- Buyer arrives on `/industries/solar-mounting/` after "solar mounting bolts supplier ahmedabad" → CTA: "Request project BOQ pricing".
- Direct navigation from business card / offline lead → `/` → visible phone, WhatsApp, and RFQ form above the fold.

---

## 6. What we will NOT publish without proof

- Any specific ISO/IATF certificate number, expiry, or scope.
- Any tonnage, machine count, employee headcount, plot area, factory photograph.
- Any client name, logo, testimonial, case study, or industry-share claim.
- Any grade or standard KP does not actually supply.
- Any "India's leading / largest / #1" language.
- Any founding year unless the client confirms it in writing.

If a piece of content requires one of the above, it stays behind a `[VERIFICATION REQUIRED: …]` flag until answered.

---

## 7. Address & LocalBusiness schema readiness

Address string on the card breaks into:
- **streetAddress:** 23/4, Ghanshyam Industrial Estate, Margha Farm
- **addressLocality:** Ahmedabad
- **addressRegion:** Gujarat (GJ)
- **postalCode:** 380024
- **addressCountry:** IN
- **telephone:** +91-98982-30448

**NEEDS VERIFICATION** before LocalBusiness schema is published:
- Exact geographic coordinates (latitude / longitude) — must be resolved from Google Maps against the confirmed pin, not inferred.
- Opening hours.
- `sameAs` links (Google Business Profile URL, IndiaMART storefront, TradeIndia storefront, LinkedIn page, JustDial listing).

---

## 8. Client questionnaire — remaining questions after 2026-09-29 unlock

**Already answered** (2026-09-29): Sections A6 (hours/WhatsApp/email), address-role (both), business model (Manufacturer + Wholesale — from IndiaMART), GST + legal structure + banker + employees + registration date (from IndiaMART).

**Still needed — send this shorter list to Mr. Pramod Panchal / Kabir Panchal:**

Bundle these into a single Google Doc / PDF and send in one round; do not launch the site until Sections A–D are answered.

**A. Company essentials**
1. **Name clarification:** Are Pramod Panchal (business card) and Kabir Panchal (IndiaMART MD) the same person, or two people? Who should the About page name as founder/proprietor?
2. Year the business actually started operating (GST is 2017 — was it running before that?).
3. Udyam/MSME number + IEC number (if exporting). Please share high-res copies of MSME + Registration certificates.
4. Rough split of business between in-house manufactured and traded (indicative %).
5. One-line positioning you want customers to remember (the IndiaMART line is fine, but do you want something sharper?).
6. Any additional landline / second phone for the Contact page.

**B. Product catalogue**
7. Please share your latest product catalogue / price list / SKU list (any format — PDF, Excel, WhatsApp broadcast, IndiaMART page).
8. For each category (Bolts, Nuts, Screws, Washers, Studs, Threaded Rods, Anchors, Rivets, others): which sub-types, which grades, which coatings, which head/drive types, and which diameter–length ranges.
9. Which items are made in your factory vs. sourced from partner manufacturers.

**C. Materials & standards**
10. Materials you can quote against: MS / carbon steel grades, stainless grades (list numbers), alloy steel grades, brass, aluminium, others.
11. Standards you actually follow / can certify against: DIN, ISO, ASTM, BS, IS, JIS.
12. Coatings you offer.

**D. Quality & documentation**
13. Certifications currently held (ISO 9001 etc.) — please share certificate copies.
14. Do you routinely provide MTC (EN 10204 3.1)? PPAP? Batch traceability?
15. In-house testing equipment (please share photos with permission to publish).

**E. Industries & customers**
16. Sectors you actively serve.
17. Any customers (with names or anonymised) whose logos / testimonials you have **written permission** to display.

**F. Capabilities & logistics**
18. In-house processes (cold heading, thread rolling, CNC, heat treatment, plating, testing).
19. Custom / drawing-based order acceptance — Yes/No, typical MOQ, typical lead time.
20. Domestic delivery lead times (Ahmedabad / Gujarat / rest of India). Export countries served.
21. Standard packaging options.

**G. Website expectations**
22. Preferred RFQ intake method (form / WhatsApp / email / phone).
23. Any pages or features you have specifically seen on other fastener websites that you want (or that you want to avoid).
24. Confirmation that we may use the logo and business-card design assets as source material for the site's visual identity.

Once these are answered, we can move from the "NEEDS VERIFICATION" register to the "VERIFIED" register and unblock most of the content pipeline.
