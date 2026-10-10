# KP Fasteners — Device Responsiveness Audit Report
**Execution Date:** 2026-10-09T17:27:18.918Z  
**Audited Engine:** Microsoft Edge Headless (Chromium Edg/154.0.4258.62)  
**Total Test Executions:** 154 (22 routes × 7 device viewports)  
**Pass Rate:** 154 / 154 (100%)  

---

## 1. Device Viewport Matrix

| Device Profile | Dimensions | Scale (DPR) | Type | Core Audit Objective |
| :--- | :--- | :--- | :--- | :--- |
| **Small Mobile** | 320 × 568 | 2.0x | Mobile | Zero horizontal bleed on smallest supported screens (iPhone SE 1st) |
| **Standard Mobile** | 375 × 667 | 2.0x | Mobile | Compact smartphone typography, card stacking, touch target margins |
| **Modern Mobile** | 390 × 844 | 3.0x | Mobile | Modern flagship mobile layouts (iPhone 14/15/16, Galaxy S23) |
| **Tablet Portrait** | 768 × 1024 | 2.0x | Tablet | Mid-screen grid layout (2-column collapse, header hamburger mode) |
| **Tablet Landscape / Laptop** | 1024 × 768 | 1.0x | Desktop/Tablet | Breakpoint transition point: desktop header activation, mega-menu |
| **Standard Desktop** | 1440 × 900 | 1.0x | Desktop | Standard laptop/monitor layout, container max-widths, card alignment |
| **Full HD Widescreen** | 1920 × 1080 | 1.0x | Desktop | Wide screen centering, max-w-7xl constraints, background containment |

---

## 2. Route-by-Route Responsiveness Scorecard

| Route | 320px | 375px | 390px | 768px | 1024px | 1440px | 1920px | Overall |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| `/` | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | **100% PASS** |
| `/about/` | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | **100% PASS** |
| `/tools/` | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | **100% PASS** |
| `/contact/` | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | **100% PASS** |
| `/request-quote/` | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | **100% PASS** |
| `/products/` | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | **100% PASS** |
| `/products/foundation-bolts/` | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | **100% PASS** |
| `/products/stud-bolts/` | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | **100% PASS** |
| `/products/sag-rods/` | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | **100% PASS** |
| `/products/tie-rods/` | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | **100% PASS** |
| `/products/csk-allen-bolts/` | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | **100% PASS** |
| `/products/scaffold-accessories/` | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | **100% PASS** |
| `/products/solar-accessories/` | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | **100% PASS** |
| `/products/hex-bolts-nuts/` | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | **100% PASS** |
| `/products/custom-fasteners/` | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | **100% PASS** |
| `/materials/high-tensile-fasteners/` | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | **100% PASS** |
| `/materials/stainless-steel-fasteners/` | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | **100% PASS** |
| `/industries/solar-mounting-fasteners/` | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | **100% PASS** |
| `/industries/construction-infrastructure/` | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | **100% PASS** |
| `/industries/automotive-heavy-engineering/` | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | **100% PASS** |
| `/privacy-policy/` | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | **100% PASS** |
| `/terms/` | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS | **100% PASS** |

---

## 3. Findings & Observations

- **Viewport Configuration:** Every page includes the standard viewport tag: `width=device-width, initial-scale=1`.
- **Engineering Specification Tables:** All multi-column DIN/ISO/ASTM dimensional data tables are wrapped in `overflow-x: auto` scroll containers, allowing touch scrolling on phones without breaking the outer container.
- **Image Fluidity:** All product photos and hero diagrams utilize Next.js `<Image />` with responsive `sizes` and aspect-ratio containers, maintaining zero layout shift (CLS < 0.05).
- **Header & Navigation Drawer:** Flawlessly transitions between the rounded frosted mobile drawer (`< 1024px`) and the 4-column mega-menu (`>= 1024px`).
