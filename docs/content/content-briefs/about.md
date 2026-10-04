# Content Brief: About KP Fasteners

Route: `/about/`
Priority: **P1**
Cluster: **C02 — About (company trust page)**
Classification: n/a (not a product page)
Owner (writer): TBD
Reviewer (client): Mr. Pramod Panchal / Kabir Panchal
Client-verification status: Founding year (pre- or post-2017), Pramod-vs-Kabir name clarification, employee headcount band confirmation, facility photographs, team photographs, written positioning statement — all pending. See §10.
Verified-as-of: 2026-10-04

---

## 1. Audience & intent

- **Primary persona:** Procurement officer at an EPC, PEB fabricator, or OEM running first-time vendor diligence on KP Fasteners. The reader has either (a) landed from an organic search for "fastener manufacturer ahmedabad", or (b) clicked through from a Products page after reading a spec table and wants to confirm the company behind the catalogue is real. Secondary persona: structural / mechanical design engineer vetting KP as a listed vendor before including it on a tender shortlist.
- **Search intent:** Commercial-investigation / navigational B2B. The reader is not comparing shapes or grades on this page — they are deciding whether KP is a credible counterparty. The page converts by replacing adjectives with verifiable facts (GST, address, MSME, OEM-vs-trading split, hours, response time) and by matching the IndiaMART record the buyer may already have open in a second tab.
- **Query snapshot (top 5, from `docs/seo/clusters/cluster-plan.md` §C02):**
  1. `fastener manufacturer ahmedabad`
  2. `kp fasteners`
  3. `kp fasteners about` / `k p fasteners ahmedabad`
  4. `fastener company gujarat`
  5. `foundation bolt manufacturer ahmedabad company`
- **Why KP wins on this SERP (evidence):**
  - SRG's `/about-us/` is thin — no founder named, no founding year, no employee count, generic "leading manufacturer" phrasing (`srgfasteners.com-audit/findings/content.md` §5). The audit flags this as the biggest single E-E-A-T gap in the Ahmedabad fastener SERP.
  - KP has verifiable artefacts: GST 24ARDPP9803A1Z3, MSME certificate PDF on file, IndiaMART TrustSEAL + 100% response rate across 2+ years, same address for office + factory + warehouse. Publishing these converts the SRG gap into a direct ranking + trust wedge.
  - The honest OEM-vs-trading split (four OEM lines: Anchor / Foundation / Stud / Sag Rods; distribution range for everything else per `docs/business-profile.md §2b`) is itself a differentiator. Peer sites muddle manufacturer and trader to look bigger; KP wins procurement trust by being specific.

---

## 2. SEO essentials

- **Primary keyword:** `fastener manufacturer ahmedabad`
- **Secondary keywords (from cluster C02):** `kp fasteners about`, `fastener company gujarat`, `foundation bolt manufacturer ahmedabad`, `industrial fastener supplier ahmedabad`
- **Title tag (56 chars):** `About KP Fasteners | Foundation Bolt Maker Ahmedabad`
  - Alt option (58 chars): `About KP Fasteners | OEM Anchor & Stud Bolt Factory`
- **Meta description (158 chars):** `KP Fasteners is an Ahmedabad OEM manufacturer of foundation bolts, anchor bolts, stud bolts and sag rods, with a distribution range for construction and solar.`
- **Canonical URL:** `https://kpfasteners.com/about/`
- **Open Graph title:** `About KP Fasteners — OEM Fastener Maker, Ahmedabad`
- **Open Graph description:** `Proprietorship since 2017 at 23/4 Ghanshyam Industrial Estate, Margha Farm, Ahmedabad. OEM manufacturing of foundation, anchor, stud bolts and sag rods, plus distribution.`
- **Open Graph image filename:** `og-about-kp-fasteners.webp` (1200x630, hero shot of the KP factory sign board + a bundle of foundation bolts in the foreground; must be a real photograph, not a stock composite).
- **Schema types (JSON-LD):**
  - `BreadcrumbList` — Home > About.
  - `AboutPage` — `mainEntity` references the KP Fasteners `Organization` node.
  - `Organization` — legal name "KP Fasteners", legal structure Proprietorship, address, phone +91 98982 30448, email `sales@kpfasteners.com`, GST ID `24ARDPP9803A1Z3`, `foundingDate` [CLIENT TO CONFIRM — default to 2017 if operations started with GST registration], `founder` [CLIENT TO CONFIRM — Pramod Panchal vs. Kabir Panchal, see §10 Q1], `numberOfEmployees` 26-50, `sameAs` includes IndiaMART storefront URL.
  - `LocalBusiness` — the same address block, geo coordinates [CLIENT TO SUPPLY], `openingHoursSpecification` Mo-Sa 09:30-19:00, closed Sunday.
  - **Do NOT include `AggregateRating`** — SRG's fabricated 4.9/128 across every page is explicitly refused on this site (`findings/schema.md`). Review schema returns to this page only when KP collects verified, named, dated customer reviews on-site.

---

## 3. Content outline (H1 -> H3, ~1,800-2,200 words target)

### H1
`About KP Fasteners — An Ahmedabad OEM Fastener Manufacturer and Distributor`

### H2 — Who we are, in one paragraph
*A tight 60-80-word opener that states, in plain language: KP Fasteners is a GST-registered proprietorship at 23/4 Ghanshyam Industrial Estate, Margha Farm, Ahmedabad - 380024, that manufactures four OEM lines (foundation bolts, anchor bolts, stud bolts, sag rods) in-house and distributes a wider industrial-fastener range sourced from vetted partners. One address houses office, factory and warehouse. The reader should know the four load-bearing facts (city, OEM lines, address role, verifiable registrations) before they scroll.*

### H2 — Verified business facts
*Table-first section. See §4.1. No adjectives — every row is a published, documented fact (GST, MSME, bank, hours, IndiaMART storefront). The purpose is to let a procurement officer tick their vendor-onboarding form in one glance.*

### H2 — What we manufacture vs. what we distribute (the honest split)
*The single most important section on the page. SRG and most peers blur this; KP is explicit.*

- H3 — **Manufactured in-house (OEM lines):** Foundation Bolts (IS 5624 / DIN 529 / ASTM F1554), Anchor Bolts, Stud Bolts (ASTM A193 B7 / B7M / B8 / B8M scope — `[CLIENT TO CONFIRM]` the in-house vs. partner-processed split per `reference-defaults.md` row 8), Sag Rods for PEB.
- H3 — **Distribution range (sourced from vetted partner plants):** Hex Bolts and Nuts, CSK Allen Bolts (socket-head family), Tie Rods, Solar Mounting Accessories (T-head bolts, module clamps, hanger bolts, MMS bolts), Custom Fasteners (drawing-based sourcing).
- H3 — **Scaffold Accessories (make + partner-supply, per Kabir's 2026-09-30 note):** scope flagged as ambiguous in `business-profile.md §2b`. Treated per-SKU: KP-made shells for base jacks and sole plates where tooling exists; traded for Doka / PERI / MEVA system-matched items.
- H3 — **How to tell on a product page:** every Product page carries a schema flag (`manufacturer` for OEM, `seller` for distribution). This is enforced in `lib/jsonld.ts` and in the Product schema list in each product brief.

### H2 — Facility
*One short paragraph + photo grid. Mentions only the single verified address and the role it plays. Do NOT invent square footage, machine lists, or production tonnage.*

- H3 — Address: 23/4 Ghanshyam Industrial Estate, Margha Farm, Ahmedabad - 380024, Gujarat, India.
- H3 — Co-located layout: office, manufacturing unit and warehouse at the same plot (IndiaMART album confirms five on-site photo tiles: Office, Manufacturing Unit x2, Warehouse Unit, Stocks, Sign Board).
- H3 — What we do not publish here: covered-shed dimensions, machine counts, annual tonnage — these are not verified and are explicitly on the "do not fabricate" list in `AGENTS.md §9`. Available on request to a serious buyer under NDA.

### H2 — People
*Two to three short paragraphs. First names, roles, phone. Nothing else unless the client supplies written bios.*

- H3 — Proprietor / founder: `[CLIENT INPUT REQUIRED]` — see §10 Q1 for the Pramod-vs-Kabir clarification. Default published copy: "Founded and led by Mr. Pramod Panchal" with Kabir Panchal as day-to-day sales contact — `reference-defaults.md` row 1.
- H3 — Day-to-day sales + WhatsApp contact: Kabir Panchal, +91 98982 30448.
- H3 — Team size: 26-50 employees (IndiaMART factsheet). We do not publish individual engineer or shop-floor bios on v1.

### H2 — Standards and documentation KP works to
*Short recap, with hard links out to `/quality/` for the full version.*

- H3 — Standards actively quoted against: IS 5624, IS 1367, DIN 529, DIN 931/933/934, ISO 898-1, ISO 4014/4017/4032, ASTM F1554 (Gr 36 / 55; Gr 105 on-quote per `reference-defaults.md` row 7), ASTM A193 B7 scope `[CLIENT TO CONFIRM]`.
- H3 — Documentation available: MTC EN 10204 3.1 on request (industry-standard; safe to publish); third-party NABL tensile + salt-spray via partner lab; batch traceability by heat number `[CLIENT TO CONFIRM]`. ISO 9001 is **not** claimed on this page until a certificate PDF is supplied.
- H3 — Link out: full inventory on `/quality/`.

### H2 — Industries we actively serve
*Only sectors the client can confirm. No lazy "automotive / aerospace / oil & gas / food" bingo card.*

- H3 — PEB and structural steel fabricators (foundation + anchor bolts, sag rods).
- H3 — Solar EPCs (distribution range + foundation bolts for substructure).
- H3 — Civil infrastructure contractors (tie rods, scaffold accessories, foundation bolts).
- H3 — Oil & gas / process-plant EPCs where stud-bolt supply fits (A193 B7 scope).
- H3 — **Not listed on v1 until confirmed:** automotive OEMs / tier suppliers (gated on `/industries/automotive-heavy-engineering/` Q1).

### H2 — How we got here
*Short, honest timeline. 80-120 words. GST registered 2017; founding year itself is `[CLIENT INPUT REQUIRED]`. Avoid every "began as a small workshop" cliche.*

### H2 — Why procurement teams choose KP
*Four bullets, every one tied to a verifiable artefact. No adjectives.*
- Four OEM product lines in-house + a honest distribution range for everything else — one PO, one dispatch, no fabricated manufacturer claim.
- GST-registered Ahmedabad plant since 2017; MSME-certified; TrustSEAL on IndiaMART with 100% call response across 2+ years.
- Standards-driven product pages: every SKU family on this site is tied to IS / DIN / ISO / ASTM references in a published spec table.
- WhatsApp Business line answered by the sales owner, not a call centre: +91 98982 30448.

### H2 — FAQ (schema-attached, 4 questions)
See §5.

### H2 — Talk to us
Primary CTA + phone + WhatsApp + hours strip. See §7.

---

## 4. Tables required

### 4.1 Verified business facts (publish on-page, as a two-column strip)
| Field | Value | Source |
|---|---|---|
| Trade name | KP Fasteners (also spelled "K P Fasteners") | Business card + IndiaMART |
| Legal structure | Proprietorship | IndiaMART factsheet |
| Nature of business | Manufacturer + Wholesale | IndiaMART + client confirm 2026-09-30 |
| GST ID | 24ARDPP9803A1Z3 | IndiaMART factsheet |
| GST registered | 2017 | IndiaMART factsheet |
| MSME | Registered — Udyam PDF on file | `URC of K P fastener.pdf` |
| Banker | ICICI Bank | IndiaMART factsheet |
| Employees | 26-50 | IndiaMART factsheet |
| Address | 23/4 Ghanshyam Industrial Estate, Margha Farm, Ahmedabad - 380024, Gujarat, India | Business card |
| Address role | Office + Factory + Warehouse (co-located) | Client confirm 2026-09-29 |
| Phone / WhatsApp | +91 98982 30448 | Business card + client confirm |
| Sales email | sales@kpfasteners.com | Client confirm 2026-09-29 |
| Working hours | Mon-Sat 09:30-19:00 IST, closed Sun | Client confirm 2026-09-29 |
| IndiaMART storefront | TrustSEAL verified, Payment Protected, 2+ yrs, 100% response rate | IndiaMART (public) |
| Direct SEO competitor benchmark | SRG Fasteners (`srgfasteners.com`) | Audit folder in repo |

### 4.2 OEM vs. distribution range
| Category | Role | Schema flag in product page |
|---|---|---|
| Foundation Bolts | OEM — manufactured in-house | `manufacturer: KP Fasteners` |
| Anchor Bolts | OEM — manufactured in-house | `manufacturer: KP Fasteners` |
| Stud Bolts | OEM — manufactured in-house | `manufacturer: KP Fasteners` |
| Sag Rods | OEM — manufactured in-house | `manufacturer: KP Fasteners` |
| Scaffold Accessories | Make + partner-supply (per Kabir, 2026-09-30) | Hybrid — per SKU |
| Hex Bolts & Nuts | Distribution range | `seller: KP Fasteners` |
| CSK Allen Bolts | Distribution range | `seller: KP Fasteners` |
| Tie Rods | Distribution range | `seller: KP Fasteners` |
| Solar Accessories | Distribution range | `seller: KP Fasteners` |
| Custom Fasteners | Drawing-based sourcing | `seller: KP Fasteners` |

### 4.3 Standards KP actively works to
| Standard | Body | Scope |
|---|---|---|
| IS 5624 | BIS | Foundation bolts |
| IS 1367 | BIS | Property class / mechanical for carbon-steel fasteners |
| IS 1363 / 1364 | BIS | Hex bolts & nuts |
| DIN 529 | DIN | Masonry / foundation bolts |
| DIN 931 / 933 / 934 | DIN | Hex bolts (part thread / full thread) + hex nuts |
| ISO 898-1 | ISO | Mechanical properties of carbon-steel fasteners |
| ISO 3506-1 / -2 | ISO | Stainless-steel fasteners A2 / A4 |
| ISO 4014 / 4017 / 4032 | ISO | Hex bolts & nuts (ISO equivalents of DIN) |
| ASTM F1554 | ASTM | Anchor bolts, Gr 36 / 55 (Gr 105 on-quote) |
| ASTM A193 B7 / B8 scope | ASTM | Stud bolts — see `/products/stud-bolts/` |

---

## 5. FAQs (draft — 4 questions, 2-3 sentence answers)

**Q1: Is KP Fasteners a manufacturer or a trader?**
Both, in a specific split. We manufacture four OEM lines in-house at our Ahmedabad plant: foundation bolts, anchor bolts, stud bolts and sag rods. We also distribute a wider industrial-fastener range (hex bolts and nuts, CSK Allen bolts, tie rods, solar accessories, custom-sourced items) from vetted partner plants, which lets a procurement team consolidate a mixed BOQ on a single PO.

**Q2: Who runs KP Fasteners and when did the company start?**
`[CLIENT INPUT REQUIRED]` — default published copy: "KP Fasteners is a proprietorship led by Mr. Pramod Panchal, with Kabir Panchal as the day-to-day sales contact. GST registration is dated 2017." Do not publish any founding year earlier than 2017 without written confirmation and a dated artefact.

**Q3: Where is the factory, and is it the same as the office?**
Office, factory and warehouse are co-located at 23/4 Ghanshyam Industrial Estate, Margha Farm, Ahmedabad - 380024, Gujarat. Visits by prior appointment on +91 98982 30448 Monday to Saturday, 09:30-19:00 IST.

**Q4: What certifications do you hold?**
We are GST-registered (24ARDPP9803A1Z3) and MSME-registered (Udyam certificate on file). We supply EN 10204 3.1 mill test certificates on request. We do not currently publish an ISO 9001 claim — any ISO or sector certification will appear on the `/quality/` page only after a dated certificate is supplied to the website owner. Direct SEO peers publishing unsupported ISO claims are not a precedent we are following.

---

## 6. Images required

| Filename (kebab-case, WebP) | Alt text | Client-supply? |
|---|---|---|
| `hero-kp-fasteners-signboard-ahmedabad.webp` | KP Fasteners factory sign board at 23/4 Ghanshyam Industrial Estate Ahmedabad | Yes — hi-res original from Kabir |
| `kp-fasteners-office.webp` | Office entrance at KP Fasteners Ahmedabad | Yes |
| `kp-fasteners-manufacturing-unit.webp` | Manufacturing unit interior with foundation bolt production in progress | Yes |
| `kp-fasteners-warehouse.webp` | KP Fasteners warehouse with staged stock ready for dispatch | Yes |
| `kp-fasteners-sales-team-whatsapp.webp` | Sales team member attending WhatsApp Business queries | Optional — client supply |
| `kp-fasteners-foundation-bolt-bundle.webp` | Bundle of hot-dip galvanized J-type foundation bolts manufactured at KP Fasteners | Yes |

**No stock photos. No AI-generated factory composites.** Every image on this page must be a real KP photograph with written permission per `docs/business-profile.md §8`.

---

## 7. CTA

- **Primary CTA (hero + closing banner):** `Send us an RFQ` -> `/request-quote/?src=about`
- **Secondary CTA (post facility block):** `WhatsApp Kabir Panchal` -> `https://wa.me/919898230448?text=Hi%20KP%20Fasteners%2C%20I%20visited%20the%20About%20page.%20I%20need%20to%20discuss%3A%20%5Btopic%5D`
- **Phone:** `+91 98982 30448` (`tel:+919898230448`)
- **Email:** `sales@kpfasteners.com`
- **Hours strip:** Mon-Sat 09:30-19:00 IST, closed Sunday.

---

## 8. Internal linking (from `docs/seo/clusters/internal-link-matrix.json` — C02 node)

### Inbound (pages linking TO `/about/`)
- `/` (Homepage — anchor: **"About KP Fasteners"** in nav + hero trust strip)
- `/contact/` (anchor: **"company overview"**)
- `/quality/` (anchor: **"company facts and OEM-vs-distribution split"**)
- Every product page footer trust strip (anchor: **"About KP Fasteners"**)

### Outbound (from this page)
1. `/quality/` — anchor: **"MTC EN 10204 3.1, in-house inspection and third-party testing"** inside the standards H2.
2. `/products/foundation-bolts/` — anchor: **"foundation bolts manufactured in-house"** inside the OEM block.
3. `/products/stud-bolts/` — anchor: **"stud bolts to ASTM A193 B7 scope"** inside the OEM block.
4. `/products/sag-rods/` — anchor: **"sag rods for PEB"** inside the OEM block.
5. `/products/scaffold-accessories/` — anchor: **"scaffold accessories (make and partner-supply)"**.
6. `/products/` — anchor: **"full product range"**.
7. `/contact/` — anchor: **"visit by appointment"** inside facility block.
8. `/request-quote/` — anchor: **"send an RFQ"** (hero + closing).

Minimum 3 contextual outbound links satisfied (AGENTS.md §11.12).

---

## 9. Copy guardrails

- **Banned phrases** (AGENTS.md §10 + `content-strategy.md` §2 + SRG clichés from `findings/content.md`):
  - "leading manufacturer / premier / #1 / most trusted / largest / renowned"
  - "state-of-the-art / cutting-edge / world-class / best-in-class"
  - "one-stop solution / turnkey / end-to-end"
  - "driven by passion / dedicated professionals / synergy / robust portfolio"
  - "revolutionising / redefining / transforming the industry"
  - "we began as a small workshop in..." (and every sepia-timeline variant)
  - "engineered to meet the highest industry standards" (SRG template lead sentence)
  - "unparalleled quality and performance" / "committed to excellence" (SRG template)
  - "In today's fast-paced industrial world..." (hard banned)
- **Length target:** 1,800-2,200 words. Below 1,500 = thin. Above 2,500 = padded.
- **Tone anchors:** calm, metric-first, verifiable-facts-first. The page should read like a vendor-onboarding form that happens to be a web page. Indian English. First-person plural used sparingly ("we manufacture", "we supply"); never "we are the..."
- **Do-not-fabricate list, page-specific:**
  - No founding year earlier than 2017 until the client supplies a dated artefact.
  - No square footage, land area, covered shed area, machine count, cold-header count, CNC-lathe count, tonnage-per-month, or export tonnage.
  - No named customers, no logos, no case studies, no testimonials until written permission is in hand (`business-profile.md §3.4`).
  - **No `AggregateRating` schema. No star ratings. No "5-star rated" copy.**
  - No ISO 9001 / IATF 16949 / PED / CE / API 20E / API 7-1 claim.
  - No "we export to X countries" or any IEC-dependent export claim until IEC is supplied.
  - No photograph that was not shot inside the KP plot; no stock composite.
  - No invented bios (education, prior employment, years-of-experience) for Pramod or Kabir.

---

## 10. Client questions to close before publish (page-specific)

1. **Pramod-vs-Kabir name clarification (TOP OPEN ITEM)** — are these two people (proprietor + sales lead) or one person using two first names? Impacts `Organization.founder`, `contactPoint`, and the "People" H2 copy. Default published if silent: "Founded and led by Mr. Pramod Panchal; Kabir Panchal is the day-to-day sales contact." We will not ship another default until this is confirmed in writing.
2. Confirm the **founding year** of the business. If operations pre-date 2017 GST registration, state the year and whether any dated artefact (udyog aadhaar / shop-establishment licence) exists for that year.
3. Confirm the **positioning statement** in your own words (one line, 15-25 words). We default to the sentence in `reference-defaults.md` row 4 if silent.
4. Confirm the **employee headcount band** (IndiaMART: 26-50). If larger today, provide the current band.
5. Confirm **real photographs** we may publish: office exterior, manufacturing unit interior, warehouse, factory sign board, foundation-bolt bundle. Written permission per `business-profile.md §8`.
6. Confirm any **Udyam / MSME number** we may show in the footer and a **downloadable certificate PDF** on `/quality/`.
7. Confirm whether an **IEC** exists (and may be published) for export claims. Default if silent: no export claim on v1.
8. Confirm **ISO 9001** status with a PDF. Default if silent: no ISO claim on v1 — we will not follow SRG's unsupported pattern.
9. Confirm scope of **sector list** on the "Industries we serve" H2: are automotive OEMs / tier suppliers actually served today? If no, that block drops to four sectors on v1 and `/industries/automotive-heavy-engineering/` is dropped per that brief's Q1.
10. Confirm whether the site should publish an **anonymised project reference** block (e.g., "250 kW rooftop solar BOQ supplied in 2025 to a Gujarat EPC") without naming the EPC. Default if silent: no.
