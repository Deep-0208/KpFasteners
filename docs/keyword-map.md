# Master Keyword → Page Map (v0.1 planning draft)

**Status:** planning draft. Volumes/KD not populated (live pull is scheduled — see [`keyword-research.md`](keyword-research.md)). Every URL below is a **proposal**, not a live route.

**Cluster mapping (2026-09-29):** every URL in this table now has a 1↔1 cluster in [`seo/clusters/cluster-plan.md`](seo/clusters/cluster-plan.md). Cluster IDs: `/` [C01], `/about/` [C02], `/quality/` [C03], `/contact/` [C04], `/request-quote/` [C05], `/products/` [C06], `/products/foundation-bolts/` [C07 — anchor], `/products/stud-bolts/` [C08], `/products/tie-rods/` [C09], `/products/csk-allen-bolts/` [C10], `/products/scaffold-accessories/` [C11], `/products/solar-accessories/` [C12 — anchor], `/products/hex-bolts-nuts/` [C13 — provisional merge, revisit post-DataForSEO], `/products/custom-fasteners/` [C14], `/materials/high-tensile-fasteners/` [C15], `/materials/stainless-steel-fasteners/` [C16], `/industries/solar-mounting-fasteners/` [C17], `/industries/construction-infrastructure/` [C18], `/industries/automotive-heavy-engineering/` [C19]. SERP evidence did NOT trigger any primary-keyword changes vs v0.1.

Rule of the file: **one primary keyword ↔ one canonical URL**. Any conflict must be resolved before the route is created (AGENTS.md §7).

Priority scale: **P0** blocks launch, **P1** high SEO/UX/conversion impact, **P2** important optimisation, **P3** nice-to-have.

---

## 1. Commercial + trust pages

| URL | Primary keyword | Secondary keywords | Intent | Business value | Priority |
|---|---|---|---|---|---|
| `/` | industrial fasteners manufacturer ahmedabad | fastener supplier india, bolt and nut manufacturer, kp fasteners | Commercial / Navigational | High (brand authority) | **P0** |
| `/about/` | fastener manufacturer ahmedabad | kp fasteners about, fastener company ahmedabad | Trust / Navigational | Medium | P1 |
| `/quality/` | fastener mill test certificate (EN 10204 3.1) | fastener quality control, mtc bolts | Trust / Commercial-investigation | High (unblocks procurement objections) | P1 |
| `/contact/` | kp fasteners contact | fastener supplier ahmedabad contact | Navigational | High (last-mile conversion) | **P0** |
| `/request-quote/` | request fastener quote | bolt rfq, fastener quote form | Transactional | Highest (primary conversion) | **P0** |

## 2. Product hub + category pages

Updated 2026-09-29 to match KP's actual product mix confirmed on the IndiaMART storefront (Nuts, Bolts, Anchor / Foundation Bolts, Scaffold Accessories, Solar Accessories, CSK Allen Bolts, Stud Bolts, Tie Rods). Categories not yet confirmed (Hex Nuts as a standalone page, Washers, Socket Screws generally) are held out of v1 pending client confirmation.

| URL | Primary keyword | Secondary keywords | Intent | Value | Priority |
|---|---|---|---|---|---|
| `/products/` | industrial fasteners manufacturer | fastener product range, bolt nut manufacturer ahmedabad | Commercial | High (hub) | **P0** |
| `/products/foundation-bolts/` | foundation bolts manufacturer | anchor bolts, j bolts, l bolts, hold-down bolts, ms foundation bolts | Transactional | **Highest** (their active product line) | **P0** |
| `/products/stud-bolts/` | stud bolts manufacturer | astm a193 b7 studs, threaded studs, tie rod studs | Transactional | High | **P0** |
| `/products/tie-rods/` | tie rod manufacturer | threaded tie rods, formwork tie rods, scaffolding tie rods | Transactional | Medium–High | P1 |
| `/products/csk-allen-bolts/` | csk allen bolts manufacturer | countersunk socket head bolts, csk socket screws | Transactional | Medium | P1 |
| `/products/scaffold-accessories/` | scaffold accessories manufacturer | scaffolding fasteners, formwork fasteners, wing nut, tie rod nut | Transactional | High (construction sector) | **P0** |
| `/products/solar-accessories/` | solar mounting accessories manufacturer | solar structure fasteners, mms fasteners, solar bolts ss 304 | Transactional | High (growth sector) | **P0** |
| `/products/hex-bolts-nuts/` | hex bolts and nuts manufacturer | hex bolts, hex nuts, din 933, iso 4017 | Transactional | Medium (mentioned in "Nuts, Bolts" list — confirm depth before splitting into two pages) | P1 |
| `/products/custom-fasteners/` | custom fasteners manufacturer | oem fasteners, drawing based fasteners, special fasteners | Transactional | High (high-margin RFQs) | P1 |

*(If the client questionnaire adds or removes categories, this table is updated first, before any code.)*

## 3. Materials & standards pages

| URL | Primary keyword | Secondary keywords | Intent | Value | Priority |
|---|---|---|---|---|---|
| `/materials/high-tensile-fasteners/` | high tensile bolts manufacturer | grade 8.8 bolts, grade 10.9 bolts, grade 12.9 bolts | Commercial | High | P1 |
| `/materials/stainless-steel-fasteners/` | stainless steel fasteners manufacturer | ss 304 bolts, ss 316 bolts, ss 316L bolts, a2 a4 fasteners | Commercial | High | P1 |

*(A separate `/standards/` page is deliberately omitted from v1. Standards are covered inside each product page's spec table + the two materials pages above. Revisit only if `/seo-cluster` shows distinct standalone search intent.)*

## 4. Industry pages

| URL | Primary keyword | Secondary keywords | Intent | Value | Priority |
|---|---|---|---|---|---|
| `/industries/solar-mounting-fasteners/` | solar mounting bolts supplier | solar structure fasteners, ss 304 solar bolts, mms bolts | Commercial | High (growing market) | P1 |
| `/industries/construction-infrastructure/` | construction fasteners supplier | infrastructure bolts, prefab peb fasteners, foundation bolts | Commercial | Medium | P2 |
| `/industries/automotive-heavy-engineering/` | automotive fasteners manufacturer | oem fasteners, heavy engineering bolts | Commercial | Medium (only if client actually serves) | P2 |

*(Only publish industry pages the client verifiably serves — see business-profile §3.4. Otherwise drop them.)*

## 5. Utility / legal

| URL | Priority |
|---|---|
| `/privacy-policy/` | **P0** (launch blocker for GA / forms) |
| `/terms/` | P1 |
| `404` (`app/not-found.tsx`) | **P0** |

---

## 6. Total v1 page count

Company/trust: 5
Product hub + categories: up to 8 (final set gated on client catalogue)
Materials: 2
Industries: up to 3 (gated on client-served sectors)
Legal/utility: 2 + 404

**Working total: 18–20 canonical routes.** Within the AGENTS.md scope cap.

---

## 7. Pages we are explicitly NOT creating in v1

| Rejected page pattern | Why |
|---|---|
| Per-size product pages (`/m10-hex-bolt/`, `/m12-hex-bolt/`) | Cannibalisation + thin content. Consolidate into the category spec matrix. |
| Per-standard pages (`/din-933/`, `/iso-4017/`) | Standards intent overlaps with the product category. Covered as sections there. |
| City-doorway pages (`/hex-bolts-in-surat/`, `/fasteners-supplier-rajkot/`) | Doorway spam per AGENTS.md §4/5. Local intent is served via LocalBusiness schema + on-page geo mention. Add only if the client opens a real branch there. |
| Blog | Zero editorial capacity confirmed. Two evergreen guides live inside materials pages instead. Revisit at 12 months. |
| Coatings page | Covered as a section inside the two materials pages. Revisit if the SERP shows standalone intent volume. |

---

## 8. Cannibalisation checklist (run before every future add)

1. Does an existing page already own this primary intent? → If yes, do not create.
2. Can this content be a **section** of an existing page instead? → If yes, do not create.
3. Will the new URL steal SERP position from another KP page? → If yes, do not create.
4. Does the new page have ≥70% content that does not exist elsewhere on KP? → If no, do not create.
5. Does the page directly support a real product / material / industry the client serves? → If no, do not create.

If all five pass, add the page to the table above **and** update [`sitemap.md`](sitemap.md) in the same commit.
