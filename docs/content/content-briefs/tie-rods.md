# Content Brief: Tie Rods (Distribution Range)

Route: `/products/tie-rods/`
Priority: **P1**
Cluster: **C09 — Tie Rods `[cluster TBD]`** — recommendation inline: either keep as standalone C09 (current cluster-plan default) or consolidate under C11 Scaffold Accessories; final call pending a DataForSEO SERP overlap pull between `tie rod supplier` and `scaffold accessories manufacturer` (`cluster-plan.md §Cannibalisation` currently keeps separate at overlap ~6). **Default for v1 drafting: standalone page.** See §10 Q1.
Classification (Product schema): **trading** — `seller: KP Fasteners Organization @id`; **no `manufacturer` node**.
Owner (writer): TBD
Reviewer (client): Mr. Pramod Panchal / Kabir Panchal
Client-verification status: Diameter range stocked (D15 / D20 primarily; D22 on request?), coating split (plain / HDG / zinc), length range per diameter, matching wing nut + water bar + anchor plate inventory, turnbuckle assemblies made or sourced, mill partners, MTC pass-through routine, MOQ, lead time, dispatch pin codes. See §10.
Verified-as-of: 2026-10-04

---

## 1. Audience & intent

- **Primary persona:** Civil / formwork contractor at a high-rise RCC project or precast factory, buying formwork tie rods (D15 / D20) with mating wing nuts + water bars + anchor plates against a project BOQ. Secondary persona: scaffold-contractor procurement officer buying tie rods for shuttering walls / columns. Tertiary: PEB / structural engineer specifying tension turnbuckle tie-rod assemblies for roof-bracing (distinct from `/products/sag-rods/`).
- **Search intent:** Transactional B2B. Buyer confirms (a) diameter — the industry standard is D15 (nominal 15 mm, actual ~15.5-16 mm per EN 10080 / EN 12812 convention) and D20, (b) grade — mild-steel 500 MPa UTS default, (c) length — stock up to 6 m, (d) matching accessories (hex wing nut, water bar, anchor plate, flat washer, cone), and (e) BOQ pricing + lead time.
- **Query snapshot (top 5, from `docs/seo/clusters/cluster-plan.md` §C09):**
  1. `tie rod supplier`
  2. `formwork tie rod d15 supplier`
  3. `tie rod manufacturer india`
  4. `d15 tie rod with wing nut supplier`
  5. `tie rod supplier ahmedabad`
- **Why KP wins on this SERP (evidence):**
  - KP has an active IndiaMART listing for Tie Rod (1 SKU) per `business-profile.md §1` — demand already observed.
  - SRG has no tie-rod page (`findings/sxo.md §4`). Greenfield SERP.
  - Scaffold + formwork + tie-rods are frequently bought together; KP already carries scaffold accessories (make + partner-supply) and foundation bolts (OEM). Being able to quote tie rods + wing nuts + anchor plates on the same PO is the one-PO consolidator value prop.
  - Depth wedge: a diameter-vs-safe-working-load table + a formwork-pressure cross-reference (DIN 18218 formwork pressures vs. tie-rod pull-out) does not appear on any Indian competitor's page. AI-Overview citability.

---

## 2. SEO essentials

- **Primary keyword:** `tie rods supplier`
- **Secondary keywords:** `formwork tie rod d15 supplier`, `tie rod manufacturer india`, `d15 d20 tie rod with wing nut`, `tie rod supplier ahmedabad`, `shuttering tie rod supplier`
- **Title tag (49 chars):** `Tie Rods Supplier | D15 / D20 Formwork | KP`
  - Alt option (58 chars): `Tie Rods Supplier Ahmedabad | D15 D20 | KP Fasteners`
- **Meta description (158 chars):** `D15 and D20 formwork tie rods with matching wing nuts, water bars, anchor plates and cones. Plain / HDG / zinc. MTC on request. KP Fasteners, Ahmedabad.`
- **Canonical URL:** `https://kpfasteners.com/products/tie-rods/`
- **Open Graph title:** `Tie Rods Supplier — D15 / D20 Formwork System`
- **Open Graph description:** `Formwork tie rods, hex wing nuts, water bars, anchor plates and cones for RCC shuttering, precast and PEB roof-bracing turnbuckle assemblies.`
- **Open Graph image filename:** `og-tie-rods-kp.webp` (1200x630, real photo of a bundle of D15 tie rods with hex wing nut + water bar visible).
- **Schema types (JSON-LD):**
  - `BreadcrumbList` — Home > Products > Tie Rods.
  - `Product` — `category` "Formwork tie rods and matching accessories", `material` array (Mild Steel ~500 MPa UTS, Property Class 4.6 range), **`seller` = KP `Organization` @id** (distribution range). **No `manufacturer` node.** No `offers.price`.
  - `FAQPage` — mapped to visible FAQ.
  - `Organization` (inherited).
  - **Do NOT include `AggregateRating`.**

---

## 3. Content outline (H1 -> H3, ~1,900-2,200 words target)

### H1
`Tie Rods Supplier — D15 and D20 Formwork, Shuttering & Turnbuckle Assemblies`

### H2 — Scope of this page — tie rods vs. sag rods vs. scaffold ties
*Critical disambiguation paragraph. The "tie rod" on this page is the formwork tie rod (threaded through the shuttering, pulled by wing nuts) that lives in the EN 12812 / DIN 18216 / IS 14687 formwork-equipment family. It is **not** the same as (a) the sag rod on `/products/sag-rods/` (structural PEB purlin bracing to IS 801 / AISC) or (b) the "formwork accessory" scaffold tie that lives alongside base jacks in `/products/scaffold-accessories/`. Cross-links out to both. Also mentions the PEB roof-bracing turnbuckle tie-rod assembly as a related product.*

### H2 — Tie-rod families we supply
- H3 — **D15 formwork tie rod (coil rod)** — ~15 mm nominal, left-hand continuous thread; the industry workhorse for RCC shuttering walls and columns.
- H3 — **D20 formwork tie rod** — ~20 mm; heavier shuttering, deeper walls, precast forms.
- H3 — **D22 / D24** — `[CLIENT TO CONFIRM]`. Default: on-quote only.
- H3 — **Turnbuckle tie-rod assembly** — two-end rod with a mid-span turnbuckle for tension adjustment; typically used in PEB roof bracing. Cross-link to `/products/sag-rods/` since the two serve similar structural functions.
- H3 — **Threaded formwork anchor / water-stop assembly** — rod + anchor plate + stopper for RCC walls that must remain water-tight.

### H2 — Matching accessories
- H3 — **Hex wing nut (D15 / D20)** — the primary pull-tightening nut; typically malleable iron or forged steel.
- H3 — **Water bar** — rubber / PVC stopper around the rod inside the RCC wall, kept to prevent water migration along the rod track.
- H3 — **Anchor plate / spreader plate** — flat plate the wing nut tightens against.
- H3 — **Cone (plastic / steel)** — spacer at the inside of the shuttering face; de-mould after pour.
- H3 — **Flat washer** — load-spreading between the wing nut and the anchor plate.

### H2 — Standards
*Table-first. See §4.1.*

- H3 — **EN 12812** — European standard for falsework (performance and general design).
- H3 — **DIN 18216** — tie-rod anchors (anchor plate and wing nut geometry).
- H3 — **DIN 18218** — fresh-concrete pressure on vertical formwork (the pressure the tie rod resists).
- H3 — **IS 14687** — guidelines for falsework for concrete structures (BIS).
- H3 — **IS 2062 E250** — raw-material grade for the mild-steel rod.
- H3 — **EN 10080** — reinforcement steel references for coil-rod chemistry.

### H2 — Safe working load vs. nominal diameter
*Decision table §4.2. Published SWL values are from public manufacturer catalogues (DOKA / PERI / MEVA public datasheets) cited as reference; KP's own SWL claim is `[CLIENT TO CONFIRM against mill TC]`.*

### H2 — Coatings
- H3 — **Plain (self-colour, as-rolled)** — the formwork default; rods are consumables and are often cut after use.
- H3 — **HDG** — exposed service, long-stay shuttering, precast.
- H3 — **Zinc electroplated** — appearance / mild-corrosion service.
- H3 — **Oil-dipped** — in-transit rust prevention.

### H2 — Length range `[CLIENT TO CONFIRM]`
*Industry defaults: coil rod sold in 6 m lengths; cut-to-length on request. KP's stock lengths = `[CLIENT TO CONFIRM]`.*

### H2 — Formwork system compatibility
*Important honest paragraph. Generic D15 / D20 coil rods are compatible with most Indian and Chinese MMS shuttering systems. Compatibility with PERI / Doka / MEVA proprietary systems is NOT claimed unless `[CLIENT CONFIRMS physical test]` per `reference-defaults.md` row 10.*

### H2 — Applications & industries served
- RCC high-rise construction (shuttering walls, columns, lift cores)
- Precast concrete yards
- Water-retaining structures (with water-bar + swelling-strip assembly)
- PEB roof bracing (turnbuckle tie-rod assemblies — see `/products/sag-rods/`)
- Infrastructure (bridge piers, retaining walls)
- Scaffold formwork sub-assembly — cross-link to `/products/scaffold-accessories/`

### H2 — Quality & documentation (distribution model)
*Mirror hex-bolts-nuts.md: MTC pass-through from mill; in-house dimensional + hardness + coating thickness; NABL partner on tensile. Full method on `/quality/`.*

### H2 — FAQ (schema-attached, 5 questions)
See §5.

### H2 — Request a tie-rod BOQ quote
Closing CTA. See §7.

---

## 4. Tables required

### 4.1 Standards cross-reference
| Standard | Body | Scope |
|---|---|---|
| EN 12812 | CEN | Falsework — performance requirements and general design |
| DIN 18216 | DIN | Formwork tie anchors — anchor plate and wing nut |
| DIN 18218 | DIN | Pressure of fresh concrete on vertical formwork |
| IS 14687 | BIS | Falsework for concrete structures — guidelines |
| IS 2062 | BIS | Hot-rolled MS (raw material E250 grade) |
| EN 10080 | CEN | Steel for reinforcement of concrete (coil-rod chemistry reference) |
| ISO 898-1 | ISO | Mechanical properties of carbon-steel fasteners (wing nut / washer) |

### 4.2 D15 / D20 safe working load (reference values from public catalogues)
| Diameter | Nominal OD (mm) | Typical UTS (MPa) | Reference SWL (kN) at 2x safety factor |
|---|---|---|---|
| D15 | 15.0-16.0 | 500 (typical mill TC) | ~90 kN |
| D20 | 20.0-21.0 | 500 | ~160 kN |
| D22 | 22.0-23.0 | 500 | ~195 kN `[CLIENT TO CONFIRM availability]` |

**Source footnote on page:** *Values summarised from publicly available DOKA / PERI / MEVA formwork-accessory catalogues. KP's own SWL claim on a given lot is pulled from the originating mill TC and may differ; always confirm against the MTC supplied with the dispatch.*

### 4.3 Formwork pressure vs. tie rod spacing (illustrative)
| Pour height | Pour rate | Concrete pressure (DIN 18218) | Typical D15 spacing |
|---|---|---|---|
| 2.5 m wall | 2 m/hr | ~55 kN/m² | 500 mm vertical × 750 mm horizontal |
| 3.5 m wall | 2 m/hr | ~70 kN/m² | 500 × 500 |
| 4.5 m wall | 3 m/hr | ~90 kN/m² | 400 × 400 |

*Spacing is illustrative only; the shuttering designer calculates the actual pattern against DIN 18218 / IS 14687. KP supplies the rods and accessories, not the shuttering design.*

### 4.4 Accessory kit per 100 m of D15 rod (indicative)
| Item | Qty per 100 m of rod | Notes |
|---|---|---|
| D15 wing nut | ~50 (one each side at ~2 m rod length) | — |
| Anchor plate 120 mm | 50 | HDG default |
| Water bar | 25 | For water-retaining pours |
| Plastic cone / spacer | 50 pairs | Consumable |
| Flat washer D15 | 100 | — |

*Indicative — actual kit is sized against the shuttering design.*

---

## 5. FAQs (draft — 5 questions, 2-3 sentence answers)

**Q1: Do you manufacture tie rods in-house or source them?**
We distribute formwork tie rods from vetted partner mills — not an OEM line. Our OEM manufacturing covers foundation bolts, anchor bolts, stud bolts and sag rods (see `/about/`). On a mixed shuttering BOQ, KP consolidates the tie-rod coil, the matching wing nuts, water bars, anchor plates and cones onto a single PO with MTC pass-through from the originating mill.

**Q2: What is the difference between D15 and D20 tie rods?**
D15 is the industry workhorse for RCC shuttering walls and columns up to about 3.5 m pour height, with reference safe working load around 90 kN at a 2x factor. D20 is specified for deeper walls, precast forms, and higher concrete pressure (per DIN 18218), with reference SWL around 160 kN. The matching wing nut, anchor plate and water bar are sized to the rod diameter.

**Q3: Are your tie rods compatible with PERI / Doka / MEVA systems?**
Our D15 / D20 coil rods are **generic** and compatible with most Indian and Chinese MMS shuttering systems. We do **not** claim brand-level compatibility with PERI / Doka / MEVA proprietary accessories unless a specific test and written confirmation is in hand (`reference-defaults.md` row 10). If the project requires brand-specific items, we source and clearly label them.

**Q4: Can you supply a turnbuckle tie-rod assembly for PEB roof bracing?**
Yes — a turnbuckle tie-rod assembly (two-end rod + mid-span turnbuckle) is supplied against drawing. For the structural PEB sag-rod case (threaded rod + jam nuts anchored to purlin and rafter), see our OEM-manufactured sag rods at `/products/sag-rods/` which may be the better product.

**Q5: What MTC and lead time can I expect?**
MTC EN 10204 3.1 is pass-through from the originating mill with KP's dispatch lot code added. Stocked D15 / D20 rods dispatch 24-72 hours ex-Ahmedabad / 3-5 days Gujarat / 5-8 days pan-India; wing nuts, anchor plates and water bars are stocked year-round `[CLIENT TO CONFIRM MOQ bands]`.

---

## 6. Images required

| Filename (kebab-case, WebP) | Alt text | Client-supply? |
|---|---|---|
| `tie-rod-d15-coil-formwork.webp` | D15 formwork tie rod coil rod with left-hand continuous thread | Yes |
| `tie-rod-d20-plain-finish.webp` | D20 formwork tie rod plain finish 6m length | Yes |
| `hex-wing-nut-d15.webp` | Malleable iron hex wing nut for D15 formwork tie rod | Yes |
| `anchor-plate-120mm-hdg.webp` | HDG anchor plate 120 mm for formwork tie rod | Yes |
| `water-bar-pvc-d15.webp` | PVC water bar for D15 tie rod in water-retaining wall | Yes |
| `tie-rod-assembly-cross-section.svg` | Cross-section diagram of a formwork wall with D15 tie rod anchor plate wing nut and cone | Site-produced illustration |
| `hero-tie-rods-inventory-kp.webp` | Bundle of D15 and D20 tie rods at KP Fasteners Ahmedabad | Yes |

No stock renders.

---

## 7. CTA

- **Primary CTA:** `Request a tie-rod BOQ quote` -> `/request-quote/?product=tie-rods`
- **Secondary CTA:** `WhatsApp our formwork desk` -> `https://wa.me/919898230448?text=Hi%20KP%20Fasteners%2C%20I%20need%20a%20tie-rod%20quote.%20Dia%3A%20%5BD15%2FD20%5D%2C%20Length%3A%20%5B%5D%2C%20Qty%3A%20%5B%5D%2C%20Accessories%3A%20%5Bwing%20nut%2Fanchor%20plate%2Fwater%20bar%2Fcone%5D%2C%20Site%20pin%20code%3A%20%5B%5D`
- **Phone:** `+91 98982 30448` (`tel:+919898230448`)
- **Email:** `sales@kpfasteners.com`

---

## 8. Internal linking (from `docs/seo/clusters/internal-link-matrix.json` — C09 node, pending cluster re-review)

### Inbound
- `/` (anchor: **"Formwork tie rods (D15 / D20)"**)
- `/products/` (anchor: **"Tie rods — D15 D20 formwork with wing nuts & anchor plates"**)
- `/products/scaffold-accessories/` (sibling, anchor: **"formwork tie rods and shuttering accessories"**)
- `/products/sag-rods/` (sibling, anchor: **"turnbuckle tie-rod assemblies for PEB bracing"**)
- `/products/foundation-bolts/` (sibling)
- `/industries/construction-infrastructure/` (industry page — anchor: **"shuttering and formwork fasteners"**)

### Outbound
1. `/products/` — anchor: **"full product range"** (breadcrumb + closing).
2. `/products/scaffold-accessories/` — anchor: **"scaffold base jacks and formwork clamps"**.
3. `/products/sag-rods/` — anchor: **"PEB sag rods and bracing"** (disambiguation link).
4. `/products/foundation-bolts/` — anchor: **"foundation bolts for the column bases"**.
5. `/industries/construction-infrastructure/` — anchor: **"RCC and PEB construction fasteners"**.
6. `/quality/` — anchor: **"MTC EN 10204 3.1 pass-through"**.
7. `/request-quote/` — anchor: **"send a tie-rod BOQ"** (hero + closing).

Minimum 3 contextual outbound links satisfied.

---

## 9. Copy guardrails

- **Banned phrases** — same list as `foundation-bolts.md §9` + `hex-bolts-nuts.md §9`. In addition:
  - "PERI-compatible / Doka-compatible / MEVA-compatible" unless `[CLIENT CONFIRMS physical test]`.
  - "Zero-leak formwork" — overclaim.
  - "Reusable up to X cycles" without a controlled-cycle test.
  - "Our forging line / our coil-rod mill" — this is TRADED.
- **Length target:** 1,900-2,200 words.
- **Tone anchors:** civil/formwork procurement voice; concrete-pressure vocabulary; honest disambiguation from sag rods.
- **Do-not-fabricate list, page-specific:**
  - No SWL value beyond the public catalogue references cited in §4.2.
  - No "25-year" or "lifetime" claim — tie rods are consumables.
  - No formwork-system brand match claim.
  - **No `AggregateRating`.**

---

## 10. Client questions to close before publish (page-specific)

1. **Cluster question (TOP OPEN ITEM):** should `/products/tie-rods/` stay standalone (C09) or consolidate under `/products/scaffold-accessories/` (C11)? DataForSEO SERP overlap pull needed. Default v1: standalone.
2. Confirm **diameter stocking** — D15 and D20 confirmed; is D22 / D24 stocked or on-quote?
3. Confirm **matching accessory inventory** — hex wing nut, anchor plate, water bar, cone, flat washer — which are stocked, which are on-quote?
4. Confirm **length stocking** — 6 m default, cut-to-length offered?
5. Confirm **turnbuckle assemblies** — made or sourced? If made in-house for the PEB sag-rod case, that moves to `/products/sag-rods/` and off this page.
6. Confirm **MOQ and lead time** per diameter and accessory family.
7. Confirm **IndiaMART SKU** that currently lives under "Tie Rod" and how it reflects here.
8. Confirm **named mill partners** we may cite (default: no names on v1).
9. Confirm **real photographs** we may use. Written permission per `business-profile.md §8`.
10. **Hardest single open question:** does KP ever **customise cone-and-plate geometry** on request (e.g., non-standard plate sizes for a specific EPC's shuttering system)? Impacts the "trading-only" positioning and whether this slips toward the custom-fasteners page.
