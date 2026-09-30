# Content Brief: Homepage

Route: `/`
Priority: **P0**
Cluster: **C01 — Brand / Homepage**
Owner (writer): TBD
Reviewer (client): Mr. Pramod Panchal / Kabir Panchal
Client-verification status: Founder-name discrepancy (Pramod vs. Kabir), founding year, real factory + inventory photography, MSME / Certificate-of-Registration numbers, industry-sector confirmation, and any anchor customer references — all pending. See §10.
Verified-as-of: 2026-09-29

---

## 1. Audience & intent

- **Primary persona:** Procurement manager or design engineer who has landed on `kpfasteners.com` from (a) a Google search for an Ahmedabad fastener manufacturer, (b) an IndiaMART click-through, (c) a printed business-card URL, or (d) a WhatsApp/email forward. First-time visitors; they need to establish in one screen that KP is a real, verifiable factory with an easy RFQ path.
- **Search intent:** Commercial / navigational. The homepage answers *"Is KP Fasteners a legitimate Ahmedabad manufacturer, what do they make, and how do I get a quote today?"*
- **Query snapshot (top 5, cluster C01):**
  1. `kp fasteners` / `kp fasteners ahmedabad` (brand / navigational)
  2. `industrial fasteners manufacturer ahmedabad`
  3. `industrial fasteners manufacturer india`
  4. `bolt and nut manufacturer ahmedabad`
  5. `fastener supplier india`
- **Why KP wins on this SERP (evidence):**
  - SRG's homepage leans on unverifiable adjectives ("leading", "state-of-the-art") and a fabricated `AggregateRating` (`srgfasteners.com-audit/findings/schema.md`). KP will lead with **verifiable** proof: GST **24ARDPP9803A1Z3** registered 2017, IndiaMART TrustSEAL, factory+warehouse+office at a single Ahmedabad address.
  - SRG has a gmail.com contact address and no visible phone on `/contact` (`findings/local.md`). KP will show phone `+91 98982 30448`, WhatsApp on the same number, and `sales@kpfasteners.com` in the header and hero.
  - Ahmedabad geo-signal is greenfield: SRG's Vatva address and KP's Ghanshyam Industrial Estate address are both in Ahmedabad, but only KP will ship a visible NAP + map embed + LocalBusiness schema with 5-decimal geo.
  - Depth wedge: the six product-category tiles map 1:1 to KP's actual active IndiaMART listings (Foundation Bolts, Stud Bolts, Scaffold Accessories, Solar Accessories, Tie Rods, CSK Allen Bolts / Custom) — a fact grid that no adjective-driven competitor homepage can match.

---

## 2. SEO essentials

- **Primary keyword:** `industrial fasteners manufacturer ahmedabad`
- **Secondary keywords (from cluster C01):** `fastener supplier india`, `bolt and nut manufacturer ahmedabad`, `kp fasteners`, `industrial fasteners manufacturer india`
- **Title tag (58 chars):** `Industrial Fasteners Manufacturer Ahmedabad | KP Fasteners`  <!-- 58 -->
  - Alt option (55 chars): `KP Fasteners — Bolt, Nut & Anchor Manufacturer Ahmedabad`
- **Meta description (157 chars):** `KP Fasteners manufactures foundation bolts, stud bolts, scaffold and solar accessories from Ahmedabad. GST-registered since 2017. Request a BOQ quote.`  <!-- 157 -->
- **Canonical URL:** `https://kpfasteners.com/`
- **Open Graph title:** `KP Fasteners — Industrial Fasteners Manufacturer, Ahmedabad`
- **Open Graph description:** `Manufacturer and wholesaler of foundation bolts, stud bolts, tie rods, scaffold and solar accessories. IndiaMART TrustSEAL, GST 24ARDPP9803A1Z3. Ahmedabad, India.`
- **Open Graph image filename:** `og-kp-fasteners-home.webp` (1200x630, real inventory shot — a mixed lay-flat of HDG foundation bolts, SS 304 T-head bolts and a tie-rod set with KP wordmark bottom-right).
- **Schema types (JSON-LD):**
  - `WebSite` — `name`, `url`, optional `SearchAction` only if an on-site search box exists (v1: no).
  - `Organization` — legal name "KP Fasteners", url, logo, `contactPoint` (customer support, `telephone: +91-98982-30448`, `contactType: sales`, `areaServed: IN`, `availableLanguage: [en, hi, gu]`), `sameAs` array (IndiaMART storefront + Google Business Profile once claimed).
  - `LocalBusiness` (subtype `Manufacturer` if Schema.org accepts, else generic `LocalBusiness` with `additionalType`) — full NAP block, `openingHoursSpecification` Mon-Sat 09:30-19:00, `geo.latitude / .longitude` [CLIENT TO CONFIRM — resolve from Google Maps against the confirmed pin, 5-decimal precision], `image`, `paymentAccepted`, no `priceRange` claim until confirmed.
  - `BreadcrumbList` — trivial (Home only), still shipped for consistency.
  - **Do NOT include `AggregateRating`** — same reason as C07: SRG's fabricated 4.9/128 pattern is documented in `findings/schema.md`. KP ships rating schema only after real, verifiable reviews with names + dates exist.

---

## 3. Content outline (H1 -> H3, tight and scannable; total copy ~700-900 words plus tiles)

### H1
`Industrial Fasteners Manufacturer in Ahmedabad`

Sub-headline (2 lines, ~28 words): `Foundation bolts, stud bolts, tie rods, scaffold and solar accessories — manufactured and stocked at our Ghanshyam Industrial Estate unit in Ahmedabad. GST-registered since 2017.`

### H2 — Hero + primary conversion strip
Contains: H1 + subhead, primary CTA button `Request a quote` -> `/request-quote/`, secondary controls (`tel:+919898230448`, WhatsApp deep-link with pre-fill), plus a small trust ribbon under the CTA: *"GST 24ARDPP9803A1Z3 · IndiaMART TrustSEAL · Response rate 100%"*.

### H2 — Trust strip (band under hero)
Four inline items, no icons-as-decoration; each item is a verifiable proof:
1. **Ahmedabad factory + warehouse** — 23/4 Ghanshyam Industrial Estate, Margha Farm, Ahmedabad 380024.
2. **GST-registered 2017** — GSTIN 24ARDPP9803A1Z3.
3. **IndiaMART TrustSEAL verified** — 2-year storefront, 100% response rate.
4. **MTC on request** — EN 10204 3.1 mill test certificate availability `[CLIENT TO CONFIRM before publish]`.

### H2 — What we manufacture (category grid, 6 tiles)
Each tile: real inventory photo + one-line value + `View →` link. This section IS the on-page site map for the product hub.

- H3 — **Foundation bolts** (J, L, U, headed, swedge to IS 5624 / F1554) -> `/products/foundation-bolts/`
- H3 — **Stud bolts** (ASTM A193 B7 / B8 / B8M, DIN 976) -> `/products/stud-bolts/`
- H3 — **Scaffold accessories** (tie-rod nut sets, wing nuts, waller plates) -> `/products/scaffold-accessories/`
- H3 — **Solar mounting accessories** (T-head bolts, MMS bolts, hanger bolts) -> `/products/solar-accessories/`
- H3 — **Tie rods** (D15 / D20 formwork, English and French thread) -> `/products/tie-rods/`
- H3 — **Custom / drawing-based fasteners** -> `/products/custom-fasteners/`

Under the grid, a single line: *"See our full product hub for CSK Allen bolts, hex bolts and matching nuts."* -> `/products/`

### H2 — Materials we work with (2 tiles)
- H3 — **High-tensile carbon steel (property class 8.8, 10.9)** -> `/materials/high-tensile-fasteners/`
- H3 — **Stainless Steel 304 / 316 (A2 / A4)** -> `/materials/stainless-steel-fasteners/`

### H2 — Industries we serve (3 tiles, only if verified)
- H3 — **Construction & infrastructure** (PEB, formwork, scaffold) -> `/industries/construction-infrastructure/`
- H3 — **Solar EPCs & MMS fabricators** -> `/industries/solar-mounting-fasteners/`
- H3 — **Heavy engineering & OEMs** -> `/industries/automotive-heavy-engineering/`  `[CLIENT TO CONFIRM sector participation before publish. Drop the tile if not verified.]`

### H2 — How you buy from us (3-step flow)
Short, procurement-first, no jargon.
1. **Share your BOQ, drawing or spec** — via the form, on WhatsApp, or by email.
2. **We quote with lead time and MTC availability** — usually within one working day `[CLIENT TO CONFIRM SLA]`.
3. **We manufacture, inspect, pack and dispatch** — batch-traceable, MTC on the box `[CLIENT TO CONFIRM]`.

### H2 — Quality & documentation (teaser to `/quality/`)
Two lines + a CTA: *"Dimensional inspection to IS 1367 and ISO 965, HDG per ISO 1461, MTC EN 10204 3.1 on request. Read our quality page."* -> `/quality/`.

### H2 — Contact strip (closing)
Full NAP block, hours, phone `tel:`, WhatsApp deep-link, email, and a compact static-map image of the factory pin (loaded with `loading="lazy"`, not an iframe — CWV protection per `docs/performance.md`). Under it: dual CTA — `Request a quote` and `WhatsApp us now`.

---

## 4. Tables / data blocks required

### 4.1 Product-category grid data (drives §3 tile block)
| Category | 1-line value | Route | Verified? |
|---|---|---|---|
| Foundation bolts | J, L, U, headed & swedge to IS 5624 / F1554 | `/products/foundation-bolts/` | Yes (IndiaMART active) |
| Stud bolts | ASTM A193 B7 / B8 / B8M, DIN 976 | `/products/stud-bolts/` | Yes (IndiaMART) |
| Scaffold accessories | Tie-rod nut sets, wing nuts, waller plates | `/products/scaffold-accessories/` | Yes (IndiaMART) |
| Solar accessories | T-head bolts, MMS bolts, hanger bolts, clamps | `/products/solar-accessories/` | Yes (IndiaMART) |
| Tie rods | D15 / D20, English / French thread | `/products/tie-rods/` | Yes (IndiaMART — 1 active) |
| Custom / drawing-based | Non-standard, OEM, drawing to sample | `/products/custom-fasteners/` | Positioning — [CLIENT TO CONFIRM MOQ + drawing acceptance] |

### 4.2 Trust ribbon data
| Signal | Value | Source |
|---|---|---|
| GSTIN | 24ARDPP9803A1Z3 | IndiaMART factsheet |
| GST registration year | 2017 | IndiaMART factsheet |
| IndiaMART tenure | 2 years, TrustSEAL verified | IndiaMART |
| Response rate | 100% | IndiaMART |
| Employees | 26-50 | IndiaMART factsheet |

No numeric claim on the homepage without a source in this table.

---

## 5. FAQs — DELIBERATELY OMITTED FROM HOMEPAGE
Reason: FAQ blocks belong on product / material / industry pages where they answer a specific procurement question. The homepage's job is orientation + first-CTA; adding an FAQ block dilutes the primary CTA and duplicates content that lives on `/quality/` and `/contact/`. `FAQPage` schema is therefore **not** used on `/`.

---

## 6. Images required

| Filename (kebab-case, WebP) | Alt text | Client-supply? |
|---|---|---|
| `hero-kp-fasteners-inventory.webp` | Mixed inventory of foundation bolts, stud bolts and solar accessories at KP Fasteners Ahmedabad | Yes — real inventory photo, needs written permission per business-profile §8 |
| `tile-foundation-bolts.webp` | Bundle of hot-dip galvanized J-type foundation bolts | Yes |
| `tile-stud-bolts.webp` | ASTM A193 B7 stud bolts with 2H nuts | Yes |
| `tile-scaffold-accessories.webp` | Tie-rod nut set with waller plate for formwork | Yes |
| `tile-solar-accessories.webp` | SS 304 T-head bolt with channel nut for solar MMS | Yes |
| `tile-tie-rods.webp` | Formwork tie rods, D15 diameter, English thread | Yes |
| `tile-custom-fasteners.webp` | Custom drawing-based fastener sample | Yes |
| `tile-high-tensile.webp` | Property class 8.8 high-tensile hex bolt | Yes |
| `tile-stainless-steel.webp` | SS 316 hex bolt for coastal service | Yes |
| `factory-strip.webp` | KP Fasteners manufacturing unit, Ghanshyam Industrial Estate, Ahmedabad | Yes — factory shot, written permission required |
| `static-map-kp-ahmedabad.webp` | Static map of KP Fasteners factory pin, Ghanshyam Industrial Estate, Ahmedabad 380024 | Site-produced from Maps Static API (or PNG export); NOT a live iframe |

**Do NOT** use: fake client-logo strip, stock hero of a warehouse aisle, auto-play video, glossy 3D renders of bolts.

---

## 7. CTA

- **Primary CTA (hero + closing banner):** `Request a quote` -> `/request-quote/`
- **Secondary CTAs (hero + sticky mobile bar):**
  - Phone `tel:+919898230448` -> label "Call +91 98982 30448"
  - WhatsApp `https://wa.me/919898230448?text=Hi%20KP%20Fasteners%2C%20I%20want%20to%20enquire%20about%20%5Bproduct%5D%20-%20size%20%5B%5D%2C%20quantity%20%5B%5D.` -> label "Chat on WhatsApp"
  - Email `mailto:sales@kpfasteners.com`
- **WhatsApp pre-fill (human-readable):** *"Hi KP Fasteners, I want to enquire about [product] — size [ ], quantity [ ]."*
- **Sticky mobile conversion bar** (`MobileConversionBar` from `docs/conversion-strategy.md` §3.4): three tap targets ≥ 48×48 — phone, WhatsApp, RFQ.

---

## 8. Internal linking (from `docs/seo/clusters/internal-link-matrix.json` — C01 node)

### Inbound (pages linking TO `/`)
Every page on the site — via the header logo and the breadcrumb "Home" step. Explicit contextual inbound links from `/about/`, `/quality/`, `/contact/`, `/request-quote/`, `/products/` all present per matrix.

### Outbound (from `/`)
Exactly the outbound set defined in the link-matrix C01 node:
1. `/products/` — anchor: **"See our full product range"** (below the 6-tile grid).
2. `/products/foundation-bolts/` — anchor: **"Foundation bolts (IS 5624 / F1554)"** (tile).
3. `/products/solar-accessories/` — anchor: **"Solar mounting accessories (SS 304 / SS 316)"** (tile).
4. `/products/stud-bolts/` — anchor: **"Stud bolts (ASTM A193 B7 / B8)"** (tile).
5. `/materials/high-tensile-fasteners/` — anchor: **"High-tensile carbon steel"** (materials tile).
6. `/materials/stainless-steel-fasteners/` — anchor: **"Stainless Steel 304 / 316"** (materials tile).
7. `/industries/solar-mounting-fasteners/` — anchor: **"Solar EPCs & MMS fabricators"** (industry tile).
8. `/quality/` — anchor: **"Read our quality page"** (QC teaser).
9. `/about/` — anchor: **"About KP Fasteners"** (contact strip + footer).
10. `/contact/` — anchor: **"Visit us in Ahmedabad"** (contact strip).
11. `/request-quote/` — anchor: **"Request a quote"** (hero + closing).

All product-tile anchors also cross-link to the two remaining product families via the "See our full product range" hub link (tie-rods, scaffold-accessories, CSK Allen, hex bolts & nuts, custom).

Minimum 3 contextual outbound links exceeded.

---

## 9. Copy guardrails

- **Banned phrases** (`docs/content-strategy.md` §2 + SRG-specific set carried from `foundation-bolts.md` §9):
  - "leading manufacturer / premier / #1 / most trusted"
  - "state-of-the-art / cutting-edge / world-class / best-in-class"
  - "one-stop solution / turnkey / end-to-end"
  - "engineered to meet the highest industry standards" (SRG template)
  - "unparalleled quality and performance" (SRG template)
  - "revolutionising the fastener industry" / "future of fastening" / "trusted by industry leaders"
  - "since 19XX" (GST-year 2017 is confirmed; operations may pre-date, but that is **not** verified — do not publish a founding year until client confirms).
  - Any comparative superlative that lacks a citation.
- **Length target:** total on-page copy 700-900 words. Homepage is orientation, not a datasheet. Depth lives on the linked pages.
- **Tone anchors:** procurement-first, calm, evidence-driven. Every trust claim carries the source (GST portal, IndiaMART factsheet, IS/ASTM standard number).
- **Do-not-fabricate list, page-specific:**
  - No fake client-logo strip / testimonials / case studies (business-profile §3.4).
  - No factory dimensions, machine counts, tonnage figures, employee names beyond what IndiaMART already publishes (26-50 range, no individual names).
  - No ISO 9001 / IATF / CE / RoHS badge until certificate is supplied (business-profile §2).
  - No `AggregateRating`, no star ratings, no fake review widget.
  - No "24×7 support" line — actual hours are Mon-Sat 09:30-19:00 IST, closed Sunday.
  - No "PAN-India same-day dispatch" line — dispatch SLA is [CLIENT TO CONFIRM] and pin-code-dependent.

---

## 10. Client questions to close before publish (page-specific)

1. **Name clarification (highest priority):** Mr. Pramod Panchal (business card) vs. Mr. Kabir Panchal (IndiaMART MD) — same person? Two people? Whose name goes into `Organization.founder` and the About-page teaser on the homepage? (Directly gates the sub-hero trust ribbon.)
2. Confirm **founding year** (operations may predate 2017 GST registration). If unknown, we do NOT publish a "since 19XX" line — silent skip.
3. Confirm **industry-sector tiles** — is KP genuinely serving construction, solar EPCs, and heavy-engineering / automotive OEMs? Drop any tile without a "yes".
4. Confirm **response-time SLA** for RFQs (line in "How you buy from us" step 2 — currently placeholder "usually within one working day").
5. Confirm **MTC EN 10204 3.1 availability** — routinely on the box, on request only, or unavailable? (Line in trust ribbon + `/quality/` teaser.)
6. Provide **real inventory + factory photography** with written permission per business-profile.md §8.
7. Provide **exact factory-pin latitude / longitude** (5-decimal) from Google Maps for LocalBusiness schema — do not guess.
8. Provide the **high-resolution MSME certificate + Certificate of Registration** and their issuing numbers — for the About page and for the footer badge line (kept off the homepage until numbers are in hand).
9. Confirm the **`sameAs` list** for Organization schema: IndiaMART URL is confirmed; is there a Google Business Profile, TradeIndia, JustDial, or LinkedIn URL to add?
10. Confirm whether we may publish the **IndiaMART TrustSEAL badge** as an on-page image (asset licensing on IndiaMART's brand guidelines).
11. **Hardest single open question:** Should the homepage lead with **"Manufacturer"** or **"Manufacturer & Wholesaler"**? IndiaMART lists KP as both. The word chosen on the hero (and in the Organization schema `@type`) shapes how procurement buyers read the entire site: a "manufacturer" narrative promises in-house control and MTC integrity; a "wholesaler" narrative promises range and speed. The honest answer likely lives on a per-product basis (foundation bolts + stud bolts = made; module clamps = traded) — but the hero has to pick one word. Cannot be resolved without the manufactured-vs-traded split from business-profile §3.1.
