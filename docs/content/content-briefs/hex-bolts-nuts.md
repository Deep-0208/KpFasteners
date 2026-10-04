# Content Brief: Hex Bolts & Nuts (Distribution Range)

Route: `/products/hex-bolts-nuts/`
Priority: **P1**
Cluster: **C13 — Hex Bolts & Nuts (distribution range; split pending DataForSEO SERP evidence per cluster-plan.md §Cannibalisation row for `hex bolts` ↔ `hex nuts`)** `[distribution]`
Classification (Product schema): **trading** — `seller: KP Fasteners Organization @id`; **no `manufacturer` node**; `brand` only if the mill brand is on the page.
Owner (writer): TBD
Reviewer (client): Mr. Pramod Panchal / Kabir Panchal
Client-verification status: Grade coverage (4.6 / 4.8 / 8.8 / 10.9 / 12.9 split — which classes are routinely stocked?), coating split (zinc electro / HDG / black oxide), diameter + length matrix per grade, mill partners KP sources from, MTC pass-through routine, MOQ by grade band, lead time by stock vs. made-to-order, dispatch pin codes. See §10.
Verified-as-of: 2026-10-04

---

## 1. Audience & intent

- **Primary persona:** Procurement officer at a general-engineering OEM, machinery fabricator, or structural-steel sub-contractor buying hex bolts + hex nuts + washers in mixed grades (4.6 for light duty, 8.8 for structural, 10.9 for machinery) in combined BOQs. Secondary persona: industrial-hardware trader in Ahmedabad / Gujarat sourcing a mixed truckload from one supplier. Tertiary: solar / scaffold EPCs who need hex-bolt kits as adjuncts to the specialty items they already buy from KP.
- **Search intent:** Transactional / commercial-investigation B2B. Buyer is confirming (a) grade coverage (which property classes KP stocks), (b) coating options (zinc electro / HDG / black oxide), (c) metric standards (DIN 931 / 933 / 934, ISO 4014 / 4017 / 4032, IS 1363 / 1364), and (d) that KP can quote a BOQ with MTC on request. Price-sensitive — but documentation-sensitive first.
- **Query snapshot (top 5, from `docs/seo/clusters/cluster-plan.md` §C13):**
  1. `hex bolts and nuts supplier`
  2. `hex bolts manufacturer india`
  3. `din 933 hex bolt supplier`
  4. `grade 8.8 hex bolt supplier`
  5. `iso 4014 hex bolt supplier` / `hex nut supplier ahmedabad`
- **Why KP wins on this SERP (evidence, distribution-page framing):**
  - SRG has `/products/mild-steel-fasteners/` as its nearest hex-bolt-adjacent page, plus a flood of ~274 near-duplicate SKU URLs that compete with each other (`srgfasteners.com-audit/findings/content.md §2`). A single deep SKU-family page outranks a thin SKU-fragment farm.
  - KP wins by being a specialty-OEM supplier **plus** a one-PO consolidator for commodity hex items — the SRG-peer value prop (anchor + stud supply) is strengthened by also carrying hex bolts + nuts to standard grades.
  - Depth wedge: a published grade-decision matrix (4.6 vs. 8.8 vs. 10.9 for machinery / structural / high-pressure) + a DIN-to-ISO-to-IS cross-reference table does not appear on SRG or on the current top 10. Classic passage-citability for AI Overviews.
  - Honest tone: the page explicitly says KP distributes these from vetted partner mills — it is not an OEM claim. Procurement respects the clarity (the audit flags SRG's muddled "manufacturer" claims across traded SKUs as the gap).

---

## 2. SEO essentials

- **Primary keyword:** `hex bolts and nuts supplier`
- **Secondary keywords (from cluster C13):** `hex bolts supplier india`, `din 933 hex bolt`, `grade 8.8 hex bolt supplier`, `iso 4014 hex bolt supplier`, `hex nut supplier ahmedabad`
- **Title tag (55 chars):** `Hex Bolts & Nuts Supplier | DIN 933 / ISO 4014 | KP`
  - Alt option (58 chars): `Hex Bolts and Nuts Supplier Ahmedabad | KP Fasteners`
- **Meta description (158 chars):** `Hex bolts and nuts to DIN 931/933/934, ISO 4014/4017/4032 and IS 1363/1364. Property class 4.6 to 10.9, SS 304/316. Zinc, HDG, black. MTC on request. KP Fasteners.`
- **Canonical URL:** `https://kpfasteners.com/products/hex-bolts-nuts/`
- **Open Graph title:** `Hex Bolts & Nuts — DIN / ISO / IS, PC 4.6 to 10.9`
- **Open Graph description:** `Combined supply of hex bolts, hex nuts and matching washers from KP Fasteners Ahmedabad. MTC EN 10204 3.1 on request. One PO, one dispatch.`
- **Open Graph image filename:** `og-hex-bolts-nuts-kp.webp` (1200x630, real photo of staged hex-bolt + hex-nut inventory with a measuring caliper visible).
- **Schema types (JSON-LD):**
  - `BreadcrumbList` — Home > Products > Hex Bolts & Nuts.
  - `Product` — name "Hex Bolts and Nuts (DIN 931/933/934, ISO 4014/4017/4032, IS 1363/1364)", `category` "Hex bolts and hex nuts", `material` array (Mild Steel / Property Class 8.8 / Property Class 10.9 / SS 304 / SS 316), **`seller` = KP Fasteners `Organization` @id** (distribution range). **No `manufacturer` node.** `brand` omitted unless a specific mill brand is on the page. No `offers.price` (BOQ-only).
  - `FAQPage` — mapped 1:1 to visible FAQ (§5).
  - `Organization` (inherited).
  - **Do NOT include `AggregateRating`** — same rule as every other product page.

---

## 3. Content outline (H1 -> H3, ~2,000-2,300 words target)

### H1
`Hex Bolts and Nuts Supplier — DIN 931 / 933 / 934, ISO 4014 / 4017 / 4032`

### H2 — Scope of this page — and the honest framing
*A tight paragraph. Hex bolts (part thread + full thread), hex nuts (standard + heavy + thin + lock) and the mating washers in mild steel, high-tensile grades 8.8 and 10.9, and SS 304 / 316. KP distributes these from vetted partner mills — this is not an OEM page. Cross-link to `/products/foundation-bolts/`, `/products/stud-bolts/`, `/products/sag-rods/` for the OEM lines.*

### H2 — Standards cross-reference
*Table-first. See §4.1.*

- H3 — **DIN 931** (hex head, part thread) ↔ **ISO 4014** ↔ IS 1364 Part 1.
- H3 — **DIN 933** (hex head, full thread) ↔ **ISO 4017** ↔ IS 1363 Part 1.
- H3 — **DIN 934** (hex nut) ↔ **ISO 4032** ↔ IS 1363 Part 3.
- H3 — **DIN 439 / 936** (thin / jam nut) ↔ ISO 4035 / 8673.
- H3 — **IS 1364 / IS 1363** cross-references + **ASTM A307 / A325 / A490** scope `[CLIENT TO CONFIRM A325 / A490 availability]`.

### H2 — Property classes we stock
*Grade decision block. The 4.6 vs. 8.8 vs. 10.9 split is the heart of the page.*

- H3 — **PC 4.6 / 4.8 (mild steel)** — general engineering, low-stress joints, machinery sub-assembly. ISO 898-1 minimums: 240 MPa yield, 400 MPa UTS (4.6).
- H3 — **PC 8.8 (high-tensile medium-carbon)** — structural steel, PEB, machinery mounting, solar MMS. ISO 898-1 minimums: 640 MPa yield, 800 MPa UTS. Equivalent to ASTM A325 for structural joints (dimensional overlap with the Imperial family on request).
- H3 — **PC 10.9 (high-tensile alloy, quenched + tempered)** — heavy machinery, pump / compressor mounts, high-cycle fatigue applications. ISO 898-1 minimums: 900 MPa yield, 1,040 MPa UTS. **HDE (hydrogen-embrittlement) precautions on HDG — see §4.3.**
- H3 — **PC 12.9** — `[CLIENT TO CONFIRM availability]`. 12.9 is specialty; typically trader-sourced for a specific application. Default: on-quote only.
- H3 — **SS 304 (A2-70) / SS 316 (A4-70)** — ISO 3506-1 scope. Cross-link to `/materials/stainless-steel-fasteners/` for the 304 vs. 316 decision guide.

### H2 — Hex nut families
*Short section with sub-headings.*

- H3 — **Standard hex nut (DIN 934 / ISO 4032)** — thickness 0.8d; matches the strength of the mating bolt.
- H3 — **Heavy hex nut (ASME B18.2.2)** — for ASTM A325 / A490 structural joints.
- H3 — **Hex thin / jam nut (DIN 439 / ISO 4035)** — thickness 0.5d; used as a lock-nut adjacent to a standard nut.
- H3 — **Hex nylock nut (DIN 985 / IEC equivalent)** — nylon insert for vibration-prone joints. Service temperature capped by nylon ~120°C.
- H3 — **Castle / slotted nut (DIN 935 / ISO 7035)** — for cotter-pin locking.

### H2 — Coatings
*Mirror the Material x Coating pattern from the foundation-bolts brief.*

- H3 — **Zinc electroplated — trivalent blue / yellow** per IS 1573 / ASTM F1941 equivalent. Interior / indoor service.
- H3 — **Hot-dip galvanized (HDG)** per IS 2629 / ASTM A153 / ISO 1461. Outdoor structural. Minimum coating ~85 µm per ASTM A153 Class C for M12 and up.
- H3 — **Black oxide / phosphated** — for lubricated machinery joints and chased-thread service.
- H3 — **Mechanically galvanized** — for high-tensile 10.9 to avoid HDE risk.

### H2 — Diameter and length range `[CLIENT TO CONFIRM]`
*See §4.2. Industry default range: M4 to M48; 10 mm to 500 mm length. KP's actually-stocked range per grade is `[CLIENT TO CONFIRM]` and will not publish until confirmed.*

### H2 — Which grade for which application (defensive content wedge)
*Decision matrix §4.3. The content wedge SRG lacks entirely.*

### H2 — Applications & industries served
*Grid. Only sectors KP can confirm.*
- Structural steel + PEB (PC 8.8 HDG with foundation-bolt cross-sell)
- Machinery sub-assembly (PC 4.6 / 8.8 / 10.9 zinc or black)
- Solar MMS sub-assembly (SS 304 default — cross-link to `/products/solar-accessories/`)
- Scaffold + formwork (cross-link to `/products/scaffold-accessories/`)
- Ahmedabad hardware trade + general engineering jobbing shops
- Oil & gas / process plant piping (SS 316 + stud-bolt family — cross-link to `/products/stud-bolts/`)

### H2 — Quality & documentation (distribution model)
*Mirror the solar-accessories transparency.*

- Dimensional per DIN / ISO / IS tolerance class (6g / 6H).
- MTC EN 10204 3.1 — **pass-through from the originating mill**; KP's own MTC adds the dispatch lot code.
- Hardness check in-house (sample per lot per grade).
- Coating thickness in-house.
- Tensile / proof-load — NABL partner lab, on request.
- Full method on `/quality/`.

### H2 — FAQ (schema-attached, 5 questions)
See §5.

### H2 — Request a hex-bolt / hex-nut BOQ quote
Closing CTA. See §7.

---

## 4. Tables required

### 4.1 Standards cross-reference
| DIN | ISO | IS | Description |
|---|---|---|---|
| DIN 931 | ISO 4014 | IS 1364 Pt 1 | Hex head bolt, part thread |
| DIN 933 | ISO 4017 | IS 1363 Pt 1 | Hex head bolt, full thread |
| DIN 934 | ISO 4032 | IS 1363 Pt 3 | Hex nut, standard |
| DIN 439 | ISO 4035 | IS 1364 Pt 3 | Hex thin / jam nut |
| DIN 985 | ISO 7040 | IS 7002 | Hex nylock nut |
| DIN 6914 | — | IS 6639 | Heavy hex structural bolt |
| ASTM A307 | — | — | Carbon-steel bolt, 60 ksi UTS |
| ASTM A325 | ISO 7412 (dim overlap) | — | Structural, high-strength |
| ASTM A490 | — | — | Structural, higher-strength |
| ISO 898-1 | — | IS 1367 | Mechanical properties, carbon-steel |
| ISO 3506-1 | — | — | Mechanical properties, SS A2 / A4 |

*Source rule:* numeric values below are taken from the standards themselves (ISO 898-1 / ISO 3506-1) or from authoritative public references; no proof-load / hardness value is invented on this page.

### 4.2 Diameter x property-class availability `[CLIENT TO CONFIRM]`
| Property class | Diameter range (default) | Length range (default) | Coating defaults |
|---|---|---|---|
| 4.6 / 4.8 | M4 - M30 | 10 - 300 mm | Zinc electro, black |
| 8.8 | M6 - M48 | 20 - 500 mm | Zinc electro, HDG |
| 10.9 | M8 - M36 | 20 - 400 mm | Zinc electro, mechanically galvanized |
| 12.9 | On-quote | On-quote | Black oxide |
| SS 304 (A2-70) | M4 - M24 | 10 - 200 mm | Passivated |
| SS 316 (A4-70) | M4 - M24 | 10 - 200 mm | Passivated |

**Entire table is `[CLIENT TO CONFIRM]`.** Industry defaults shown for drafting only.

### 4.3 Grade-decision matrix (defensive content wedge)
| Application | Recommended PC | Coating | Notes |
|---|---|---|---|
| Light-duty machinery sub-assembly | 4.6 / 4.8 | Zinc electro | Lowest cost; indoor |
| PEB column / rafter connection | **8.8** | HDG | Pair with HDG hex nut; cross-link to `/products/foundation-bolts/` |
| Heavy machinery mounting (pump / compressor) | 8.8 or 10.9 | Zinc + nylock, or black oxide + jam nut | Vibration consideration |
| Solar MMS clamp bolt (rooftop inland) | 8.8 HDG or SS 304 | — | Cross-link to `/products/solar-accessories/` |
| Solar MMS clamp bolt (coastal) | **SS 316 (A4-70)** | Passivated | Cross-link to `/materials/stainless-steel-fasteners/` |
| Structural ASTM A325 scope | 8.8 (dim overlap) | HDG | **Heavy hex nut** required |
| Food / pharma / cleanroom | SS 304 or SS 316 | Passivated | — |
| High-cycle fatigue / seismic | **10.9**, mechanically galvanized | — | HDE-safe coating only |
| Automotive / tier-supplier | 8.8 / 10.9 / 12.9 | PPAP route | Gated on `/industries/automotive-heavy-engineering/` Q1 |

### 4.4 HDE (hydrogen embrittlement) note
Hot-dip galvanizing on PC 10.9 and 12.9 carries a hydrogen-embrittlement risk per ISO 898-1 §9.6. KP's default coating for PC 10.9 is **mechanical galvanizing** or **zinc-nickel**, not HDG, unless the buyer explicitly specifies HDG and accepts the bake-out protocol. For PC 12.9, KP offers **black oxide only** on v1.

---

## 5. FAQs (draft — 5 questions, 2-3 sentence answers)

**Q1: Do you manufacture hex bolts and nuts in-house or source them?**
We distribute hex bolts and nuts from vetted partner mills — these are not one of KP's OEM lines. Our OEM lines are foundation bolts, anchor bolts, stud bolts and sag rods (see `/about/`). Distributing hex bolts and nuts in combined BOQs means a buyer gets one PO, one dispatch and MTC pass-through for the whole mixed order.

**Q2: Which property classes do you routinely stock?**
`[CLIENT TO CONFIRM]`. Default published copy once confirmed: PC 4.6 / 4.8 for light duty, PC 8.8 for structural, PC 10.9 for machinery, plus SS 304 (A2-70) and SS 316 (A4-70) for stainless. PC 12.9 is available on quote. See §4.2 for the diameter and length range per class.

**Q3: What is the difference between DIN 931 and DIN 933?**
DIN 931 is a hex-head bolt with a part thread (unthreaded shank between the head and the thread, specified by the standard length formula). DIN 933 is fully threaded from under the head to the tip. Choose DIN 931 where the joint design benefits from a plain shank bearing (shear joints); choose DIN 933 for shorter clamping lengths or where re-work needs a full thread. ISO equivalents are 4014 (part thread) and 4017 (full thread).

**Q4: Can you supply MTC EN 10204 3.1 and what is the lead time?**
Yes — MTC 3.1 is pass-through from the originating mill, with KP's own dispatch lot code added. Standard stocked items dispatch within 24-72 hours in Ahmedabad / 3-5 days Gujarat / 5-8 days pan-India `[CLIENT TO CONFIRM MOQ and lead-time bands]`. Made-to-order grades (e.g., PC 12.9 or non-stocked diameters) run 7-14 days.

**Q5: Do you supply ASTM A325 / A490 structural bolts?**
`[CLIENT TO CONFIRM]`. If stocked, A325 is routinely offered as a PC 8.8 heavy-hex structural (dimensional overlap) and A490 is on-quote. ASTM-tagged bolts require heavy hex nuts (ASME B18.2.2); specify the nut explicitly in the RFQ.

---

## 6. Images required

| Filename (kebab-case, WebP) | Alt text | Client-supply? |
|---|---|---|
| `hex-bolt-din-933-grade-8-8-hdg.webp` | Hot-dip galvanized DIN 933 grade 8.8 hex bolt M16 | Yes — KP stock |
| `hex-bolt-din-931-part-thread.webp` | DIN 931 part-threaded hex bolt zinc electroplated | Yes |
| `hex-nut-din-934-standard.webp` | Standard DIN 934 hex nut M16 zinc electroplated | Yes |
| `hex-nut-heavy-asme-b18-structural.webp` | Heavy hex nut matching ASTM A325 structural bolts | Yes |
| `hex-nylock-nut-din-985.webp` | DIN 985 nylock hex nut with nylon insert | Yes |
| `hex-bolt-ss-304-food-grade.webp` | SS 304 passivated hex bolt for food-contact service | Yes |
| `hex-bolt-nut-stacked-inventory.webp` | Stacked inventory of hex bolts and nuts at KP Fasteners Ahmedabad warehouse | Yes |
| `hex-bolt-standards-reference-chart.svg` | Line diagram cross-referencing DIN 931 / 933 / 934 to ISO 4014 / 4017 / 4032 and IS 1363 / 1364 | Site-produced illustration |

No stock renders. No white-background catalogue shots.

---

## 7. CTA

- **Primary CTA (hero + closing):** `Request a hex-bolt / hex-nut BOQ quote` -> `/request-quote/?product=hex-bolts-nuts`
- **Secondary CTA (post-decision table):** `WhatsApp our hex-fastener desk` -> `https://wa.me/919898230448?text=Hi%20KP%20Fasteners%2C%20I%20need%20a%20hex%20bolt%2Fnut%20quote.%20Standard%3A%20%5BDIN%20931%2F933%2F934%5D%2C%20Grade%3A%20%5B4.6%2F8.8%2F10.9%2FSS%20304%2FSS%20316%5D%2C%20Dia%20x%20Length%3A%20%5B%5D%2C%20Coating%3A%20%5BZinc%2FHDG%2FBlack%5D%2C%20Qty%3A%20%5B%5D`
- **Phone:** `+91 98982 30448` (`tel:+919898230448`)
- **Email:** `sales@kpfasteners.com`

---

## 8. Internal linking (from `docs/seo/clusters/internal-link-matrix.json` — C13 node)

### Inbound
- `/` (Homepage tile — anchor: **"Hex bolts & nuts (DIN 931 / 933 / 934)"**)
- `/products/` (Hub — anchor: **"Hex bolts and nuts — PC 4.6 to 10.9, SS 304 / 316"**)
- `/products/foundation-bolts/` (anchor: **"hex bolts and nuts for structural assembly"**)
- `/products/scaffold-accessories/` (anchor: **"hex bolts and matching nuts"**)
- `/products/solar-accessories/` (anchor: **"SS 304 hex bolts and nuts for solar sub-assembly"**)
- `/materials/high-tensile-fasteners/` (anchor: **"PC 8.8 / 10.9 hex bolts"**)
- `/materials/stainless-steel-fasteners/` (anchor: **"SS 304 / SS 316 hex bolts and nuts"**)

### Outbound
1. `/products/` — anchor: **"full product range"** (breadcrumb + closing).
2. `/products/foundation-bolts/` — anchor: **"foundation bolts for PEB column base plates"**.
3. `/products/stud-bolts/` — anchor: **"stud bolts for flange joints"**.
4. `/products/solar-accessories/` — anchor: **"solar MMS fasteners"**.
5. `/materials/high-tensile-fasteners/` — anchor: **"property class 8.8 / 10.9 decision guide"**.
6. `/materials/stainless-steel-fasteners/` — anchor: **"SS 304 vs SS 316 for service environment"**.
7. `/quality/` — anchor: **"MTC EN 10204 3.1 pass-through"**.
8. `/request-quote/` — anchor: **"send a BOQ"** (hero + closing).

Minimum 3 contextual outbound links satisfied.

---

## 9. Copy guardrails

- **Banned phrases** — same list as `foundation-bolts.md §9`. In addition on this page:
  - "manufactured by KP Fasteners" / "our hex-bolt plant" / "our forging line" — these are TRADED items. Never claim OEM.
  - "superior grip" / "ultimate holding power" — adjective-trust. Replace with the specific proof-load value from ISO 898-1.
  - "food grade" without the SS grade (304 vs. 316) specified.
- **Length target:** 2,000-2,300 words.
- **Tone anchors:** metric-first, standard-number first, distribution-honest. The sentence "KP distributes these from vetted partner mills" is non-negotiable at the top of the page.
- **Do-not-fabricate list, page-specific:**
  - No ASTM A325 / A490 claim unless `[CLIENT CONFIRMS]`.
  - No HDG salt-spray hour-count. Use the solar-accessories footnote discipline if a reference number is cited.
  - No specific hardness range unless taken from ISO 898-1.
  - No named partner mill unless written permission.
  - No claim that KP "forges" or "cold-heads" hex bolts.
  - **No `AggregateRating` schema.**
  - No `manufacturer` node in Product schema (per `lib/jsonld.ts` mapping — trading = `seller`).

---

## 10. Client questions to close before publish (page-specific)

1. Confirm **property-class coverage** — 4.6 / 4.8 / 8.8 / 10.9 routinely stocked? 12.9 on-quote only or stocked? ASTM A325 / A490 scope?
2. Confirm **diameter and length range per class** — needed for §4.2 to publish.
3. Confirm **coating availability per class** — HDG on 10.9 (with HDE bake-out) or mechanical-galvanized default?
4. Confirm **nut families stocked** — standard, heavy hex, thin / jam, nylock, castle. Any made-to-order?
5. Confirm **MOQ by grade band** (e.g., 100 kg stock grades, 500 kg specialty).
6. Confirm **lead time by stock vs. made-to-order** — defaults per `reference-defaults.md` row 16.
7. Confirm whether cluster C13 should **split into `/products/hex-bolts/` and `/products/hex-nuts/`** on evidence from DataForSEO SERP overlap, or stay combined per v1 default.
8. Confirm **named partner mills** we may cite (default: no names on v1).
9. Confirm **IndiaMART SKU inventory** that should be reflected one-to-one here, if any.
10. Confirm **real photographs** we may use. Written permission per `business-profile.md §8`.
11. **Hardest single open question:** does KP ever **assemble** proprietary hex-bolt kits (e.g., bolt + nut + washer + grease) in-house, or is every hex item strictly pass-through? Affects schema `seller` wording and the FAQ Q1 answer.
