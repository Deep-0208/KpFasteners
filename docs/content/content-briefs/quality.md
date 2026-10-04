# Content Brief: Quality & Documentation

Route: `/quality/`
Priority: **P1**
Cluster: **C03 — Quality / MTC / documentation**
Classification: n/a (not a product page)
Owner (writer): TBD
Reviewer (client): Mr. Pramod Panchal / Kabir Panchal
Client-verification status: ISO 9001 (PDF needed before any claim), NABL partner-lab name (optional), in-house inspection kit inventory (digital calipers, height gauge, thread ring/plug gauges, coating-thickness gauge, hardness tester — exact models), heat-number traceability procedure, salt-spray chamber (in-house vs. partner), PMI capability. See §10.
Verified-as-of: 2026-10-04

---

## 1. Audience & intent

- **Primary persona:** Procurement officer or supplier-quality engineer running vendor diligence on KP for a tender shortlist. The reader is looking for one answer: "will you give me MTC EN 10204 3.1, batch-traceable, with the right coating / hardness / tensile data on the sheet?" Secondary persona: EPC quality manager preparing a technical bid that lists approved vendors and needs to attach KP's quality dossier.
- **Search intent:** Commercial-investigation B2B. The query behind the visit is specific ("mill test certificate fastener", "en 10204 3.1 fasteners india", "fastener testing ahmedabad") and the reader is comparing on documentation availability — not on price. The page wins by being unusually honest about what KP does in-house vs. what is third-party, and by refusing SRG's unsupported ISO claim pattern.
- **Query snapshot (top 5, from `docs/seo/clusters/cluster-plan.md` §C03):**
  1. `fastener mill test certificate`
  2. `en 10204 3.1 fasteners india`
  3. `fastener quality control`
  4. `bolt testing ahmedabad`
  5. `foundation bolt mtc`
- **Why KP wins on this SERP (evidence):**
  - SRG claims ISO 9001:2015 on multiple pages but publishes no certifying body, no certificate number, no PDF, and no audit date (`srgfasteners.com-audit/findings/local.md §3`). This is an E-E-A-T red flag that Google and procurement teams both recognise.
  - KP wins by inverting the pattern — publishing MTC 3.1 availability, in-house inspection scope, and partner-NABL third-party scope with honest "on request / client to supply" markers wherever a claim can't be proven today.
  - Depth wedge: a published inspection-plan table (dimensional / hardness / tensile / salt-spray / coating-thickness, with "where it is done" per row) and a traceability-step diagram do not appear on SRG or on the current top 10 for this query. Classic passage-citability content for AI Overviews.
  - The page also serves as a trust-conversion sink from product pages: every product brief's QC section links out to `/quality/` for the full method.

---

## 2. SEO essentials

- **Primary keyword:** `fastener mill test certificate`
- **Secondary keywords (from cluster C03):** `en 10204 3.1 fasteners`, `fastener quality control`, `bolt testing ahmedabad`, `foundation bolt mtc`, `nabl tensile test fasteners`
- **Title tag (56 chars):** `Fastener MTC & Quality Control | EN 10204 3.1 | KP`
  - Alt option (57 chars): `Fastener Quality & MTC EN 10204 3.1 | KP Fasteners`
- **Meta description (156 chars):** `MTC EN 10204 3.1 on request. In-house dimensional and hardness checks, NABL third-party tensile and salt-spray. Batch traceability by heat number from KP Fasteners.`
- **Canonical URL:** `https://kpfasteners.com/quality/`
- **Open Graph title:** `Quality & MTC — EN 10204 3.1, In-house & NABL`
- **Open Graph description:** `Documentation we provide, inspections we run in-house, and the NABL third-party scope we partner on. Honest about what we do not yet certify.`
- **Open Graph image filename:** `og-quality-kp-fasteners.webp` (1200x630, real photograph of a technician using a digital caliper on a foundation bolt — not stock, not AI).
- **Schema types (JSON-LD):**
  - `BreadcrumbList` — Home > Quality.
  - `WebPage` — `about` references the KP `Organization` node.
  - `Organization` (inherited).
  - `FAQPage` — mapped 1:1 to visible FAQ (§5).
  - **Do NOT include `AggregateRating`.** No star-schema trust theatre on this page. The point of this page is to replace adjective-trust with artefact-trust.

---

## 3. Content outline (H1 -> H3, ~1,900-2,200 words target)

### H1
`Quality, Testing & Documentation at KP Fasteners`

### H2 — The one-paragraph version
*60-80 words. States: MTC EN 10204 3.1 on request; dimensional + hardness in-house; tensile + salt-spray via NABL-accredited third-party lab; batch traceability by heat number; no unsupported ISO claim. The paragraph is the AI-Overview answer snippet.*

### H2 — Documentation we provide
*Table-first. See §4.1.*

- H3 — **Mill Test Certificate (MTC) EN 10204 3.1** — issued on request, cites heat / batch, mechanical + chemical, product-specific. Industry-standard; safe to publish (per `reference-defaults.md` row 14).
- H3 — **Dimensional inspection report** — in-house, per IS 1367 / ISO 965 tolerance class, batch-sampled.
- H3 — **Coating / finish report** — HDG per IS 2629 / ISO 1461, zinc electroplating per IS 1573 / ASTM F1941 equivalent. Thickness-gauge readings included.
- H3 — **Hardness report** — in-house, Rockwell / Brinell per the applicable grade.
- H3 — **Tensile / proof-load report** — issued from a NABL-accredited partner lab (name `[CLIENT TO CONFIRM]`), footnoted on the MTC.
- H3 — **Salt-spray report (ASTM B117)** — issued from the NABL partner lab for coated items; `[CLIENT TO CONFIRM whether KP operates an in-house salt-spray chamber or routes 100% to partner]`.
- H3 — **PPAP Level 2 / 3** — `[CLIENT TO CONFIRM]`. Default: not routinely offered on v1 since the automotive sector list is itself gated; mark "on request for specific customer approvals".
- H3 — **Batch traceability** — heat-number recorded on the MTC and on the dispatch tag; retention `[CLIENT TO CONFIRM period]`.

### H2 — Standards we quote against
*Short recap table. See §4.2. One row per standard with "what it covers" + "where it is used on this site".*

### H2 — Inspection plan — what happens on every lot
*Procedure flow + table. See §4.3.*

- H3 — Step 1 — Raw material intake (mill TC vs. heat number).
- H3 — Step 2 — Dimensional first-piece check (digital caliper, height gauge, thread ring/plug gauge).
- H3 — Step 3 — In-process hardness check (sample per lot per grade).
- H3 — Step 4 — Coating thickness check (gauge spec `[CLIENT TO CONFIRM]`).
- H3 — Step 5 — Tensile / proof-load sample sent to NABL partner lab for coated structural grades, or on client request.
- H3 — Step 6 — MTC issued, dispatch tag applied with heat number + lot code.

### H2 — What we test in-house vs. what we route to a NABL lab
*Transparency section. See §4.4.*

### H2 — Certifications and registrations we publish
*Short bullets. Only what KP can PDF-prove.*

- GST registration: 24ARDPP9803A1Z3 (public).
- MSME / Udyam registration — certificate PDF available on request (`URC of K P fastener.pdf` on file). Number to be extracted and published in the footer.
- IndiaMART TrustSEAL verified (public, external).
- **ISO 9001** — `[CLIENT TO CONFIRM]`. No claim is published on this page without a certificate PDF, body name, cert number, and audit date. The industry precedent of unsupported ISO claims (SRG) is explicitly refused.
- **IATF 16949 / API / PED / CE** — none claimed on v1. Will be added only on evidence.
- **IEC** — `[CLIENT TO CONFIRM]`. No export claim on v1 without IEC.

### H2 — What we do NOT claim
*Short, decisive section. This is the honesty differentiator against SRG.*

- No invented ISO body / number.
- No "zero-defect" / "six-sigma" without a dated internal metric.
- No "approved vendor for [OEM]" without written permission from that OEM.
- No cross-signed test report that was not generated for the specific KP lot.

### H2 — How to request documentation with your RFQ
*Short — walks the buyer through the exact RFQ-field request.*

### H2 — FAQ (schema-attached, 5 questions)
See §5.

### H2 — Send a drawing and we will send the MTC with the dispatch
Closing CTA banner. See §7.

---

## 4. Tables required

### 4.1 Documentation we provide
| Document | Standard reference | In-house or partner | Cost | Lead time |
|---|---|---|---|---|
| MTC EN 10204 3.1 | EN 10204:2004 | Issued in-house; cites heat / batch | Included | With dispatch |
| Dimensional inspection report | IS 1367 / ISO 965 tolerance | In-house | Included | With dispatch |
| Hardness report | IS 1500 / ASTM E18 | In-house | Included | With dispatch |
| Coating thickness report | IS 2629 / ISO 1461 (HDG); IS 1573 / ASTM F1941 (zinc) | In-house gauge | Included | With dispatch |
| Tensile / proof-load report | IS 1608 / ASTM E8 / ISO 898-1 | NABL partner lab (`[CLIENT TO CONFIRM name]`) | On request (chargeable per sample) | 5-7 working days |
| Salt-spray report | ASTM B117 | `[CLIENT TO CONFIRM in-house or NABL partner]` | On request (chargeable) | 7-14 days |
| PPAP Level 2 / 3 | AIAG PPAP | On request | On request | On request |

### 4.2 Standards KP actively works to
| Standard | Body | Scope |
|---|---|---|
| IS 5624 | BIS | Foundation bolts (`/products/foundation-bolts/`) |
| IS 1367 | BIS | Property class / mechanical / tolerance for carbon-steel fasteners |
| IS 1363 / 1364 | BIS | Hex bolts and nuts |
| IS 2062 | BIS | Hot-rolled MS plates & bars (raw material) |
| IS 2629 / IS 4759 | BIS | Hot-dip galvanizing |
| DIN 931 / 933 / 934 | DIN | Hex bolts and nuts |
| DIN 529 | DIN | Foundation / masonry bolts |
| ISO 898-1 | ISO | Mechanical properties of carbon-steel fasteners |
| ISO 3506-1 / -2 | ISO | SS fasteners A2 / A4 mechanical |
| ISO 4014 / 4017 / 4032 | ISO | Hex bolts and nuts |
| ISO 965 | ISO | Metric thread tolerance (6g / 6H) |
| ISO 1461 | ISO | HDG coating thickness |
| ASTM F1554 | ASTM | Anchor bolts Gr 36 / 55 (Gr 105 on-quote) |
| ASTM A193 | ASTM | Stud bolts B7 / B7M / B8 / B8M scope — see `/products/stud-bolts/` |
| ASTM A153 | ASTM | HDG on fasteners |
| ASTM B117 | ASTM | Neutral salt-spray test method |
| EN 10204 | EN | Mill test certificate types (2.1 / 2.2 / 3.1 / 3.2) |

### 4.3 Inspection plan — per-lot sequence
| # | Step | Instrument / method | Sampling | Record |
|---|---|---|---|---|
| 1 | Raw material intake | Mill TC + heat number check | 100% of incoming heats | Heat ledger |
| 2 | First-piece dimensional | Digital caliper, height gauge, thread ring/plug gauge | First piece per lot, random sample thereafter | Inspection sheet |
| 3 | Lot dimensional check | Caliper + gauge | AQL-based sample `[CLIENT TO CONFIRM AQL level]` | Inspection sheet |
| 4 | Hardness check | Rockwell / Brinell tester (model `[CLIENT TO CONFIRM]`) | Per lot per grade | Hardness log |
| 5 | Coating thickness | Coating-thickness gauge (`[CLIENT TO CONFIRM model]`) | Per lot of coated SKUs | Coating log |
| 6 | Tensile / proof-load | NABL partner lab | On-request / routine for structural grades | Partner report |
| 7 | Salt-spray | ASTM B117, `[CLIENT TO CONFIRM in-house or partner]` | On-request for coated items | Partner report |
| 8 | MTC + dispatch tag | — | Every despatch | MTC issued |

### 4.4 In-house vs. NABL partner
| Test | KP in-house | NABL partner |
|---|---|---|
| Dimensional | Yes | — |
| Thread (ring / plug) | Yes | — |
| Hardness (Rockwell / Brinell) | Yes | On request |
| Tensile (yield / UTS / elongation) | — | **Yes** |
| Proof-load (bolt family) | — | **Yes** |
| Salt-spray (ASTM B117) | `[CLIENT TO CONFIRM]` | **Yes (default)** |
| Coating thickness | Yes | On request |
| PMI (positive material identification) | `[CLIENT TO CONFIRM — PMI gun on-site?]` | Yes |
| Chemical composition | — | Yes (on client request) |

---

## 5. FAQs (draft — 5 questions, 2-3 sentence answers)

**Q1: Do you provide EN 10204 3.1 mill test certificates on every order?**
MTC EN 10204 3.1 is available on request and is issued in-house with the dispatch. The certificate cites the heat / batch number, mechanical properties and chemistry from the mill, and the inspection results from our own line. Add "MTC 3.1 required" in your RFQ or on WhatsApp and we will build it into the quote.

**Q2: Which tests do you run in-house and which go to a NABL lab?**
Dimensional checks, thread ring / plug gauging, hardness, and coating-thickness are performed in-house, lot by lot. Tensile, proof-load and salt-spray are issued from a NABL-accredited partner lab (`[CLIENT TO CONFIRM lab name]`) so the test report carries NABL endorsement. Chemistry / PMI is routed to the partner lab on client request.

**Q3: Do you have an ISO 9001 certificate?**
`[CLIENT TO CONFIRM]`. We will publish an ISO 9001 claim only when we can show the certificate PDF, certifying body, certificate number and audit date on this page. Peer sites that make the claim without those four items are a precedent we are not following.

**Q4: Can you supply PPAP Level 3 and batch traceability for automotive supply?**
Batch traceability by heat number is standard on every MTC we issue. PPAP Level 2 / 3 is available on request for customer-specific approval runs. Whether KP currently serves automotive OEMs / tier suppliers is gated on `/industries/automotive-heavy-engineering/`; please see that page's open items.

**Q5: What raw-material standard do you work to on carbon-steel fasteners?**
Mild-steel bar stock is sourced to IS 2062 (and equivalents) with mill TCs on each heat. Property classes follow IS 1367 and ISO 898-1 for carbon-steel grades (4.6 / 8.8 / 10.9), and ISO 3506 for stainless (A2 / A4). The mill TC flows into the MTC we issue, so the chemistry chain is intact from the heat to the lot you receive.

---

## 6. Images required

| Filename (kebab-case, WebP) | Alt text | Client-supply? |
|---|---|---|
| `digital-caliper-dimensional-inspection.webp` | Technician measuring foundation bolt thread with a digital caliper | Yes — real KP photo |
| `thread-ring-gauge-inspection.webp` | Thread ring gauge verifying 6g tolerance on a bolt | Yes |
| `hardness-tester-rockwell.webp` | Rockwell hardness tester on a bolt sample at KP Fasteners | Yes |
| `coating-thickness-gauge-hdg.webp` | Coating-thickness gauge reading on a hot-dip galvanized bolt | Yes |
| `mtc-en-10204-3-1-sample.webp` | Sample EN 10204 3.1 MTC issued by KP Fasteners | Yes — redacted customer-identifier |
| `nabl-partner-tensile-test.webp` | Tensile test specimen at NABL-accredited partner lab | Yes or illustration |
| `hero-quality-kp.webp` | Dimensional-inspection bench at KP Fasteners' Ahmedabad plant | Yes |

No stock imagery. No borrowed MTC samples from other suppliers.

---

## 7. CTA

- **Primary CTA (hero + closing):** `Request a quote with MTC` -> `/request-quote/?docs=mtc`
- **Secondary CTA:** `WhatsApp our quality desk` -> `https://wa.me/919898230448?text=Hi%20KP%20Fasteners%2C%20I%20have%20a%20quality%2Fdoc%20question%20%E2%80%94%20%5Btopic%5D`
- **Phone:** `+91 98982 30448` (`tel:+919898230448`)
- **Email:** `sales@kpfasteners.com`

---

## 8. Internal linking (from `docs/seo/clusters/internal-link-matrix.json` — C03 node)

### Inbound (pages linking TO `/quality/`)
- `/` (Homepage trust strip — anchor: **"MTC EN 10204 3.1 and in-house inspection"**)
- `/about/` (anchor: **"documentation and inspection methods"**)
- Every product page QC H2 (anchor: **"MTC EN 10204 3.1 and batch traceability"**)

### Outbound (from this page)
1. `/products/foundation-bolts/` — anchor: **"foundation-bolt inspection scope"**.
2. `/products/stud-bolts/` — anchor: **"stud-bolt grades we test to ASTM A193"**.
3. `/products/sag-rods/` — anchor: **"sag-rod inspection scope"**.
4. `/materials/high-tensile-fasteners/` — anchor: **"property class 8.8 / 10.9 tensile data"**.
5. `/materials/stainless-steel-fasteners/` — anchor: **"SS 304 vs SS 316 verification by PMI"**.
6. `/about/` — anchor: **"the company behind the certificates"**.
7. `/request-quote/` — anchor: **"request a quote with MTC"** (hero + closing).

Minimum 3 contextual outbound links satisfied.

---

## 9. Copy guardrails

- **Banned phrases** — same list as `foundation-bolts.md §9`. In addition:
  - "zero-defect manufacturing" / "six-sigma" without a dated internal metric.
  - "ISO 9001 compliant" (compliant is a weasel word — only "certified" with a certificate PDF is allowed).
  - "world-class quality" / "uncompromising quality" / "quality is our DNA".
  - "state-of-the-art lab" without listing the specific instruments.
- **Length target:** 1,900-2,200 words.
- **Tone anchors:** forensic. Every claim is a verifiable artefact or an "on request" flag. Zero adjective-trust.
- **Do-not-fabricate list, page-specific:**
  - No specific salt-spray hour-count on KP's own HDG unless `[CLIENT CONFIRMS in-house salt-spray chamber]` and provides a test report. Public B117 reference numbers from the solar-accessories page may be reused with the same footnote discipline.
  - No specific hardness range unless taken from the grade's defining standard (ISO 898-1 / ASTM A193 / IS 1367).
  - No ISO body, number, audit date without the PDF.
  - No NABL partner-lab name until written confirmation from both KP and the lab.
  - No "approved vendor for [OEM]" claim.
  - **No `AggregateRating` schema.**

---

## 10. Client questions to close before publish (page-specific)

1. Confirm **ISO 9001** status — certificate PDF, body, number, audit date — or confirm "no ISO claim on v1". No default published without PDF.
2. Confirm the **NABL partner lab name** that performs tensile, salt-spray and PMI for KP. If the lab is willing to be named, we will cite it; if not, we publish "NABL-accredited partner lab" without the name.
3. Confirm whether a **salt-spray chamber (ASTM B117)** exists in-house. If yes, model and chamber-hours-per-week capacity.
4. Confirm **in-house instrument list** (make + model): digital calipers, height gauge, thread ring / plug gauges, hardness tester, coating-thickness gauge.
5. Confirm whether a **PMI gun** is on site for in-house SS grade verification, or if PMI is routed to the NABL partner.
6. Confirm **AQL level** used for lot sampling (e.g., AQL 1.0 / 1.5 / 2.5).
7. Confirm **MTC retention period** (how long records are kept against heat number).
8. Confirm **PPAP** scope offered on request: Level 2 only, or Level 2 and Level 3?
9. Confirm the **Udyam / MSME registration number** to publish in the footer and the certificate PDF to make available for download.
10. Confirm **real photographs** (dimensional bench, hardness tester, coating-thickness gauge, sample MTC with redacted customer identifier). Written permission per `business-profile.md §8`.
11. Confirm whether a **downloadable sample MTC PDF** may be published (customer identifier redacted). This is a strong trust artefact and we recommend yes.
