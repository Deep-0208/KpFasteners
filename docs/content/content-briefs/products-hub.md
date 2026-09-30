# Content Brief: Products Hub

Route: `/products/`
Priority: **P0**
Cluster: **C06 — Products Hub**
Owner (writer): TBD
Reviewer (client): Mr. Pramod Panchal / Kabir Panchal
Client-verification status: Final in-scope product-category list (are all 8 categories in v1?), industry-tile confirmation, real product photography per tile — all pending. See §10.
Verified-as-of: 2026-09-29

---

## 1. Audience & intent

- **Primary persona:** A buyer who has arrived from a broad search (`industrial fasteners manufacturer`, `bolt nut manufacturer india`) or from the homepage "See our full product range" link, and is browsing to identify the right category before diving into a product page.
- **Search intent:** Commercial (hub-level). The buyer is one click away from a product-specific page. This hub's only job is to route them accurately — not to educate them on any single SKU.
- **Query snapshot (top 5, cluster C06):**
  1. `industrial fasteners manufacturer`
  2. `fastener product range`
  3. `bolt nut manufacturer india`
  4. `industrial fastener catalogue`
  5. `fastener supplier product list ahmedabad`
- **Why KP wins on this SERP (evidence):**
  - SRG's product hub is a template CMS listing with 274+ SKUs and near-duplicate copy (`srgfasteners.com-audit/findings/content.md`) — index bloat that Google now discounts. KP will ship a compact 8-category hub that maps 1:1 to real IndiaMART stock, with real photography per tile.
  - Products-hub SERPs favour clarity: a well-linked hub with unambiguous category names outperforms a 60-tile catalogue dump because it satisfies the query in 1 click.
  - No dominant Indian fastener-manufacturer hub owns this query with a **decision-driven navigation** (by material, by industry). KP's hub adds those two secondary rails after the category grid.

---

## 2. SEO essentials

- **Primary keyword:** `industrial fasteners manufacturer` (hub-level; the geographic "ahmedabad" is owned by the homepage — no cannibalisation, per `cluster-plan.md`).
- **Secondary keywords (cluster C06):** `fastener product range`, `bolt nut manufacturer india`, `industrial fastener catalogue`
- **Title tag (56 chars):** `Industrial Fasteners Product Range | KP Fasteners`  <!-- 51 -->
  - Alt (58 chars): `Fastener Product Range — Bolts, Nuts & Anchors | KP Fasteners`
- **Meta description (156 chars):** `Foundation bolts, stud bolts, tie rods, scaffold and solar accessories, CSK Allen bolts, hex bolts and custom fasteners — manufactured and stocked in Ahmedabad.`  <!-- 158, tighten by 2 -->
- **Canonical URL:** `https://kpfasteners.com/products/`
- **Open Graph title:** `KP Fasteners — Full Industrial Fastener Product Range`
- **Open Graph description:** `Browse our fastener categories: foundation bolts, stud bolts, tie rods, scaffold and solar accessories, CSK Allen bolts, hex bolts and custom fasteners.`
- **Open Graph image filename:** `og-products-hub-kp-fasteners.webp` (1200x630 — a lay-flat grid of one sample from each of the eight categories, top-down shot on off-white background).
- **Schema types (JSON-LD):**
  - `CollectionPage` — `name`, `url`, `description`, `mainEntity` = `ItemList` of the eight category pages.
  - `ItemList` — 8 `ListItem`s, each with `position`, `url`, `name`.
  - `BreadcrumbList` — Home > Products.
  - `Organization` inherited.
  - **Do NOT include `Product` schema** on the hub — Product schema belongs on the category leaf pages (foundation-bolts, stud-bolts, etc.), not on a hub that lists categories.
  - **Do NOT include `AggregateRating`**.

---

## 3. Content outline (~600-800 words + tiles)

### H1
`Our Industrial Fastener Product Range`

Sub-headline: `Eight categories, all manufactured or stocked at our Ahmedabad unit. Pick the family you need, or share a drawing and we'll match it.`

### H2 — Category grid (8 tiles)
Real photo per tile, one line of value, and a `View →` CTA to the leaf. This section is the whole point of the hub — everything else on the page supports it.

- H3 — **Foundation bolts** — J, L, U, headed and swedge shapes to IS 5624, DIN 529 and ASTM F1554. -> `/products/foundation-bolts/`
- H3 — **Stud bolts** — Fully threaded, tap-end, double-end studs to ASTM A193 B7 / B8 / B8M and DIN 976. -> `/products/stud-bolts/`
- H3 — **Tie rods** — Formwork tie rods D15 / D20, English and French thread, with matching nuts. -> `/products/tie-rods/`
- H3 — **Scaffold accessories** — Wing nuts, tie-rod nut sets, waller plates and shuttering hardware. -> `/products/scaffold-accessories/`
- H3 — **Solar accessories** — T-head bolts, MMS bolts, hanger bolts and module clamps in SS 304 / SS 316 / HDG. -> `/products/solar-accessories/`
- H3 — **CSK Allen bolts** — Countersunk socket head cap screws to DIN 7991 / ISO 10642. -> `/products/csk-allen-bolts/`
- H3 — **Hex bolts & nuts** — DIN 933 / DIN 931 / ISO 4017 hex bolts with matching DIN 934 / ISO 4032 nuts. -> `/products/hex-bolts-nuts/`
- H3 — **Custom / drawing-based fasteners** — Non-standard and OEM parts to your drawing or sample. -> `/products/custom-fasteners/`

### H2 — Browse by material
Two tiles below the fold. Serves the "I know the material, not the SKU" buyer.

- H3 — **High-tensile carbon steel** — Property class 8.8 / 10.9 (12.9 on request), plus IS 5624 property class 4.6 for foundation bolts. -> `/materials/high-tensile-fasteners/`
- H3 — **Stainless Steel 304 / 316** — A2-70 and A4-70 for coastal, chemical, food-grade and solar service. -> `/materials/stainless-steel-fasteners/`

### H2 — Browse by industry
Three tiles, only sectors client can confirm. Drop any tile without a "yes" answer to §10 Q3.

- H3 — **Construction & infrastructure** — PEB, formwork, scaffold, precast. -> `/industries/construction-infrastructure/`
- H3 — **Solar EPCs & MMS fabricators** — Rooftop, ground-mount and tracker fastener stacks. -> `/industries/solar-mounting-fasteners/`
- H3 — **Heavy engineering & OEMs** — [CLIENT TO CONFIRM]. Drop tile if not verified. -> `/industries/automotive-heavy-engineering/`

### H2 — What we don't sell (honesty wedge)
A short, deliberate paragraph. Fastener buyers waste hours discovering after 3 emails that a supplier does not stock what they want. Naming the boundary up-front is a conversion aid, not a limitation.

*"We do not stock rivets, self-drilling screws, wood screws, or aerospace-grade titanium fasteners. If your job needs those, we'll say so and refer you on — we don't quote what we can't ship reliably."* `[CLIENT TO CONFIRM the exclusion list — the four categories above are inferences from the confirmed IndiaMART product mix; edit before publish.]`

### H2 — Not sure which category? (closing to conversion)
Two short lines + primary CTA. Bypasses the paradox-of-choice for a first-time buyer.

*"Share a drawing, sample photo or standard number. We'll match it to the right family and quote."* -> `Request a quote` (primary CTA) + WhatsApp deep-link + phone.

### H2 — FAQ (schema-attached, 3 questions — hub-level)
See §5.

---

## 4. Tables required

### 4.1 Category card data (single source of truth)
Also lives in `data/products/` as a typed array so it can drive the hub tiles, the homepage tile block, the RFQ form's product select, and the footer product menu — per AGENTS.md §3.C.2.

| Slug | Display name | 1-line value | Verified? | Image filename |
|---|---|---|---|---|
| foundation-bolts | Foundation bolts | J, L, U, headed & swedge to IS 5624 / F1554 | Yes | `card-foundation-bolts.webp` |
| stud-bolts | Stud bolts | ASTM A193 B7 / B8 / B8M, DIN 976 | Yes | `card-stud-bolts.webp` |
| tie-rods | Tie rods | D15 / D20 formwork, English / French thread | Yes | `card-tie-rods.webp` |
| scaffold-accessories | Scaffold accessories | Wing nuts, tie-rod nut sets, waller plates | Yes | `card-scaffold-accessories.webp` |
| solar-accessories | Solar accessories | T-head bolts, MMS bolts, hanger bolts, clamps | Yes | `card-solar-accessories.webp` |
| csk-allen-bolts | CSK Allen bolts | Countersunk socket head cap screws, DIN 7991 | Yes | `card-csk-allen-bolts.webp` |
| hex-bolts-nuts | Hex bolts & nuts | DIN 933 / 931 / ISO 4017 with matching DIN 934 nuts | Yes | `card-hex-bolts-nuts.webp` |
| custom-fasteners | Custom / drawing-based | Non-standard, OEM, drawing-to-sample | Positioning | `card-custom-fasteners.webp` |

### 4.2 Material rail data
| Slug | Display name | 1-line value |
|---|---|---|
| high-tensile-fasteners | High-tensile carbon steel | Property class 8.8 / 10.9, plus IS 5624 4.6 |
| stainless-steel-fasteners | Stainless Steel 304 / 316 | A2-70 / A4-70 for coastal, chemical, solar |

### 4.3 Industry rail data
| Slug | Display name | Verified? |
|---|---|---|
| construction-infrastructure | Construction & infrastructure | Yes (foundation bolts, tie rods, scaffold all serve this sector) |
| solar-mounting-fasteners | Solar EPCs & MMS fabricators | Yes (solar accessories active on IndiaMART) |
| automotive-heavy-engineering | Heavy engineering & OEMs | [CLIENT TO CONFIRM] |

---

## 5. FAQs (schema-attached, 3 questions — hub-level, deliberately short)

**Q1: Do you manufacture all these categories in-house, or do you also trade?**
KP Fasteners is a **Manufacturer + Wholesale** business (per our IndiaMART registration). Foundation bolts, stud bolts, tie rods and MMS bolts are manufactured in-house. Some accessory SKUs (for example module clamps, EPDM washers) may be sourced from partner suppliers with our own inspection before dispatch. `[CLIENT TO CONFIRM the exact made-vs-traded split before publish.]`

**Q2: What if my part is not in this list?**
Send a drawing, sample or standard number via our [Request a quote](/request-quote/) page or on WhatsApp (+91 98982 30448). We accept drawing-based / OEM orders through our [custom fasteners](/products/custom-fasteners/) family. `[CLIENT TO CONFIRM MOQ + typical lead time for custom orders.]`

**Q3: Which sizes and grades do you stock?**
Size and grade coverage varies per category — see each category's page for its diameter × length matrix and material list. For pan-category enquiries, WhatsApp us the spec and we'll confirm availability from stock or lead time to manufacture.

---

## 6. Images required

| Filename (kebab-case, WebP) | Alt text | Client-supply? |
|---|---|---|
| `hero-products-hub-kp-fasteners.webp` | Product range grid at KP Fasteners Ahmedabad, showing foundation bolts, stud bolts and solar accessories | Yes — real inventory, written permission |
| `card-foundation-bolts.webp` | Hot-dip galvanized J-type foundation bolts, KP Fasteners | Yes |
| `card-stud-bolts.webp` | ASTM A193 B7 stud bolts with 2H nuts | Yes |
| `card-tie-rods.webp` | Formwork tie rods D15 diameter with English thread | Yes |
| `card-scaffold-accessories.webp` | Wing nut and waller plate for tie-rod formwork | Yes |
| `card-solar-accessories.webp` | SS 304 T-head bolt with channel nut for solar MMS | Yes |
| `card-csk-allen-bolts.webp` | Countersunk socket head cap screw to DIN 7991 | Yes |
| `card-hex-bolts-nuts.webp` | DIN 933 hex bolt with DIN 934 hex nut, zinc plated | Yes |
| `card-custom-fasteners.webp` | Custom drawing-based fastener sample | Yes |
| `card-high-tensile.webp` | Property class 8.8 high-tensile hex bolt | Yes |
| `card-stainless-steel.webp` | SS 316 hex bolt for coastal service | Yes |

No search bar on v1 (Ponytail rule — 8 categories don't need a search). No stock renders. No AI-generated bolt photography.

---

## 7. CTA

- **Primary CTA (closing):** `Request a quote` -> `/request-quote/`
- **Secondary CTAs:** WhatsApp + phone (sticky mobile bar; anchor links in closing block).
- **WhatsApp pre-fill:** *"Hi KP Fasteners, I'm browsing your product range and want to enquire about [category]. Size: [ ], Grade: [ ], Quantity: [ ]."*

---

## 8. Internal linking (from `docs/seo/clusters/internal-link-matrix.json` — C06 hub node)

### Inbound
- `/` (homepage tile block + "See full range" line + header nav).
- Every product / material / industry page's breadcrumb.
- Header nav `Products` and footer `Products` link.

### Outbound (matches matrix exactly — hub links to every leaf)
1. `/products/foundation-bolts/` — anchor: **"Foundation bolts — J, L, U, headed & swedge"**.
2. `/products/stud-bolts/` — anchor: **"Stud bolts — ASTM A193 B7 / B8 / B8M"**.
3. `/products/tie-rods/` — anchor: **"Tie rods — D15 / D20 formwork"**.
4. `/products/csk-allen-bolts/` — anchor: **"CSK Allen bolts — DIN 7991"**.
5. `/products/scaffold-accessories/` — anchor: **"Scaffold accessories — wing nuts, tie-rod nut sets, waller plates"**.
6. `/products/solar-accessories/` — anchor: **"Solar accessories — MMS bolts, clamps & hanger bolts"**.
7. `/products/hex-bolts-nuts/` — anchor: **"Hex bolts & nuts — DIN 933 / DIN 934"**.
8. `/products/custom-fasteners/` — anchor: **"Custom / drawing-based fasteners"**.
9. `/materials/high-tensile-fasteners/` — anchor: **"High-tensile carbon steel"** (material rail).
10. `/materials/stainless-steel-fasteners/` — anchor: **"Stainless Steel 304 / 316"** (material rail).
11. `/request-quote/` — anchor: **"Request a quote"** (closing + sticky).

Optional (matrix does not include but the industry rail justifies):
12. `/industries/construction-infrastructure/` — anchor: **"Construction & infrastructure"**.
13. `/industries/solar-mounting-fasteners/` — anchor: **"Solar EPCs & MMS fabricators"**.

Minimum 3 contextual outbound satisfied by a wide margin. The hub is the highest-outbound page on the site by design — this is the pillar → cluster hand-off per `docs/seo/clusters/cluster-plan.md`.

---

## 9. Copy guardrails

- **Banned phrases** — same list as `homepage.md` §9. In addition, on this hub do NOT say:
  - "Widest range of fasteners in India" — unverified superlative.
  - "One-stop shop for all your fastener needs" — banned per content-strategy §2.
  - "Complete catalogue" — misleading if the client trades some items and we haven't finalised the made-vs-traded map.
  - "Over 10,000 SKUs in stock" — no verified inventory count.
- **Length target:** 600-800 words + tile blocks. The hub is a router, not a datasheet.
- **Tone anchors:** clear, action-driving, category-first. Every tile paragraph is one line. Every material or industry tile is one line. No hero paragraphs.
- **Do-not-fabricate list, page-specific:**
  - Do not list a category we don't publish a leaf page for (per keyword-map.md §7 — Washers is not v1).
  - Do not claim any category is "in-house manufactured" until §5 Q1 is resolved with the made-vs-traded split.
  - No stock catalogue counts, no tonnage claims, no `AggregateRating`.
  - Industry tiles — publish only what §10 Q3 confirms.

---

## 10. Client questions to close before publish (page-specific)

1. Confirm the **eight-category list** is the definitive v1 set. Any additions (washers, threaded rods as a separate page, hex nuts alone) or subtractions (custom-fasteners at v1 vs. v2)?
2. Confirm the **made-vs-traded map** per category — drives §5 Q1 answer and the honesty of the hub as a whole.
3. Confirm **industry tiles** — is KP genuinely serving construction, solar EPCs, and heavy-engineering / automotive OEMs? Any tile without a "yes" is dropped.
4. Confirm the **"What we don't sell"** exclusion list (§3) — the four items listed are inferences, not client-confirmed. Edit or delete before publish.
5. Provide **real photography for each of the 11 image slots** in §6, with written permission per business-profile.md §8.
6. Confirm whether the hub should carry a **downloadable product catalogue PDF** at v1 (Ponytail vote: no — leaf pages carry the specs). Revisit if buyers ask for a PDF.
7. Confirm that the hub H1 wording (`Our Industrial Fastener Product Range`) is acceptable — some clients prefer `Products` alone.
8. **Hardest single open question:** Should `/products/hex-bolts-nuts/` remain a **single merged page** (as per `cluster-plan.md` §C13 provisional merge) or split into `/products/hex-bolts/` and `/products/hex-nuts/` before the hub goes live? The merge is provisional pending a DataForSEO SERP pull, and the hub's card grid must reflect the final decision — nine tiles vs. eight tiles is a design decision, not a copy tweak. Lock this before design starts on the hub template.
