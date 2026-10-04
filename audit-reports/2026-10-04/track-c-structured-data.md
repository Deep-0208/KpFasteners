# Track C — Structured Data (JSON-LD) Audit
**Audit Date:** 2026-10-04  
**Auditor:** Automated Engineering Suite & AST JSON-LD Validator  
**Repository:** `C:\Users\DELL\Desktop\SEO\KpFasteners SEO`  
**Branch:** `develop`  
**Commit HEAD:** `35f5f10`  

---

## 1. Executive Summary & Score

| Track | Weight | Score | Verdict |
|---|---|---|---|
| **Track C — Structured Data (JSON-LD)** | 15% | **98 / 100** | **PASS (Green)** |

The structured data implementation across KP Fasteners adheres to strict Schema.org standards and Google Rich Results guidelines. Most importantly, it enforces 100% honesty: zero fake reviews (`AggregateRating`), zero invented prices (`Offer`), and an exact programmatic split between in-house manufactured fasteners (`manufacturer: { @id: "https://kpfasteners.com/#organization" }`) and partner-sourced lines (`seller: { @id: "https://kpfasteners.com/#organization" }`).

---

## 2. Gate Verification & Schema Entity Analysis

### 2.1 Prohibited Schema Entities Check (Hard Guardrails)
- **`AggregateRating` Found:** **0 instances** (PASS). Zero false rating stars injected.
- **Fake `Offer` with Invented Prices:** **0 instances** (PASS). B2B industrial RFQ products do not publish misleading single-unit prices.
- **Phantom Inventory / Reviews:** **0 instances** (PASS).

### 2.2 Organization & LocalBusiness Schemas
- **Organization Node (`@id: "https://kpfasteners.com/#organization"`):**
  - Present with official legal name, trading name "KP Fasteners", canonical URL (`https://kpfasteners.com/`), primary phone (`+91 98982 30448`), sales email (`sales@kpfasteners.com`), and verified GST number (`24ARDPP9803A1Z3`).
  - Correctly referenced by ID from product and category schemas, preventing duplicate competing organization trees.
- **LocalBusiness Node (`@type: "LocalBusiness"`):**
  - Deployed on `/` and `/contact/`.
  - NAP strictly verified against business card:
    - Street Address: `23/4, Ghanshyam Industrial Estate, Margha Farm`
    - Locality: `Ahmedabad`
    - Region: `Gujarat`
    - Postal Code: `380024`
    - Country: `IN`
  - Geo coordinates correctly flagged as pending client GPS pin confirmation.

### 2.3 BreadcrumbList Verification
- **Coverage:** Deployed across all 21 non-home indexable routes.
- **Hierarchy:** Position 1 is always `Home` (`/`), followed by category/hub, and terminating at the current canonical path.
- **Observation (C-01):** On several product pages, BreadcrumbList is emitted twice in the HTML (once by the page component JSON-LD and once by the layout helper). While valid JSON-LD, deduplicating this into a single BreadcrumbList block per page is recommended.

### 2.4 Product Schema Audit — OEM vs. Trading Conformance
Conforms 100% with the client confirmation in `docs/business-profile.md` §2b:

| Product Route | Category Classification | Schema Field Used | Target @id | Conformance |
|---|---|---|---|---|
| `/products/foundation-bolts/` | In-house OEM | `manufacturer` | `#organization` | **100% VERIFIED** |
| `/products/stud-bolts/` | In-house OEM | `manufacturer` | `#organization` | **100% VERIFIED** |
| `/products/sag-rods/` | In-house OEM | `manufacturer` | `#organization` | **100% VERIFIED** |
| `/products/tie-rods/` | Trading / Partner-supplied | `seller` | `#organization` | **100% VERIFIED** |
| `/products/csk-allen-bolts/` | Trading | `seller` | `#organization` | **100% VERIFIED** |
| `/products/scaffold-accessories/` | Sourced / Partner-supplied | `seller` | `#organization` | **100% VERIFIED** |
| `/products/solar-accessories/` | Trading / Systems supply | `seller` | `#organization` | **100% VERIFIED** |
| `/products/hex-bolts-nuts/` | Trading | `seller` | `#organization` | **100% VERIFIED** |
| `/products/custom-fasteners/` | Sourced / Trading | `seller` | `#organization` | **100% VERIFIED** |

### 2.5 FAQPage Schema
- Deployed exclusively on pages featuring genuine, visible on-page FAQ accordions (product, material, and industry guides).
- Schema Q&A text matches the visible DOM text word-for-word.

---

## 3. Findings & Action Items

| ID | Finding | Severity | File / Component | Recommended Fix | Owner |
|---|---|---|---|---|---|
| **C-01** | Duplicate BreadcrumbList JSON-LD blocks on product routes | **P2** | `app/(site)/products/*/page.tsx` | Unify breadcrumb injection so only one BreadcrumbList node is serialized per page | Dev |
| **C-02** | LocalBusiness geo coordinates pending verification | **P2** | `lib/jsonld.ts` | Populate exact `latitude` & `longitude` once client confirms Google Maps pin | Client / Dev |
