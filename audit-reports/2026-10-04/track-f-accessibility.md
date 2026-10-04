# Track F — Accessibility (WCAG 2.1 AA) Audit
**Audit Date:** 2026-10-04  
**Auditor:** `@axe-core/cli 4.13.0` (Headless Chrome) & DOM Static Analysis  
**Repository:** `C:\Users\DELL\Desktop\SEO\KpFasteners SEO`  
**Branch:** `develop`  
**Commit HEAD:** `35f5f10`  

---

## 1. Executive Summary & Score

| Track | Weight | Score | Verdict |
|---|---|---|---|
| **Track F — Accessibility (WCAG 2.1 AA)** | 10% | **94 / 100** | **PASS with Minor Remediation (P2)** |

Automated headless accessibility scanning across 12 representative routes using `@axe-core/cli` demonstrates strong compliance with WCAG 2.1 AA criteria. Zero critical violations were detected. Landmark semantics, heading order, image alternative text, skip links, and form labeling are implemented correctly. The only automated finding relates to foreground-to-background contrast on the third-party WhatsApp CTA button.

---

## 2. Gate Verification & Accessibility Suite Results

### 2.1 Axe-Core Automated Route Scan (`@axe-core/cli`)
Automated audit reports are stored in [`audit-reports/2026-10-04/axe/`](axe/):
- **Routes Audited:** `/`, `/about/`, `/tools/`, `/contact/`, `/request-quote/`, `/products/`, `/products/foundation-bolts/`, `/products/stud-bolts/`, `/materials/high-tensile-fasteners/`, `/materials/stainless-steel-fasteners/`, `/industries/construction-infrastructure/`, `/terms/`.
- **Critical Violations:** **0** (PASS)
- **Serious Violations:** **1** (`color-contrast` on WhatsApp CTA element, 2 occurrences on homepage)
  - Detail: White text on `#16A34A` background achieves ~4.0:1 contrast ratio, just below the strict 4.5:1 AA threshold for normal body-sized text.
  - Solution: Darken the WhatsApp green tone slightly to `#15803D` or `#047857` (achieving ≥ 4.6:1 ratio).
- **Moderate Violations:** **0**
- **Minor Violations:** **0**

### 2.2 Semantic HTML & Landmark Structure
- **Landmarks:** Every page contains unique `<header>`, `<main>`, and `<footer>` landmarks.
- **Skip Link:** A high-contrast "Skip to main content" link is mounted at the top of the body (`app/layout.tsx`), becoming visible upon initial keyboard Tab focus.
- **Table Accessibility:** All dimensional engineering matrices and property class tables feature `<th scope="col">` / `<th scope="row">` headers and are wrapped in `<div role="region" aria-label="... specification table" tabindex="0" class="overflow-x-auto">` to permit non-trapping horizontal scrolling on mobile.

### 2.3 Image Alternative Text
- **Total Images Audited:** 48 images across all routes.
- **Images Missing `alt` Attribute:** **0 images** (100% compliance).
- **Decorative Marks:** Decorative elements use `aria-hidden="true"`.

### 2.4 Form Controls (`/contact/` & `/request-quote/`)
- **Explicit Labels:** Every text input, select dropdown, and textarea has a matching `<label htmlFor="...">` tag.
- **Keyboard Traps:** None detected; forms allow smooth keyboard-only navigation.
- **Accessible Validation:** Validation errors leverage `aria-invalid="true"` and `aria-describedby` linked to contextual error hints.
- **Honeypot Protection:** The spam honeypot field (`company_website`) is hidden visually and removed from keyboard accessibility (`tabIndex={-1}`, `aria-hidden="true"`).

### 2.5 Mobile Touch Targets & 320px Viewport Scaling
- **Touch Targets:** The primary mobile CTAs (`MobileConversionBar`) have a minimum height of `56px`, exceeding the WCAG 48×48px requirement. Primary buttons in page heroes feature `min-h-[48px]`.
- **320px Viewport Scalability:** Horizontal overflow is contained; responsive tables scroll independently within their designated regions without creating page-level body blowouts.

---

## 3. Findings & Action Items

| ID | Finding | Severity | File / Component | Recommended Fix | Owner |
|---|---|---|---|---|---|
| **F-01** | WhatsApp CTA button contrast ratio (4.0:1) below 4.5:1 AA target | **P2** | `app/globals.css` (`.btn-whatsapp`) and `MobileConversionBar.tsx` | Darken background color from `#16A34A` to `#15803D` (5.02:1 ratio) to achieve 100% AA compliance | Dev |
| **F-02** | Add visible focus ring indicator on calculator range sliders | **P3** | `app/(site)/tools/page.tsx` | Ensure custom range thumb elements show a 2px `--color-focus` outline on keyboard focus | Dev |
