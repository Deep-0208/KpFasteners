# AGENTS.md — Master Engineering, SEO & Operating Guide
## Project: KP Fasteners (kpfasteners.com)

> **PRIMARY OPERATIONAL DIRECTIVE FOR ALL AGENTS & DEVELOPERS:**
>
> "Plan first. Research first. Verify first. Build second."
>
> This document is the absolute source of operational truth for every AI coding agent, software engineer, SEO strategist, technical writer, and contributor working on the **KP Fasteners** web platform. It establishes the architectural principles, quality standards, SEO rules, technical workflows, and hard guardrails adapted from previous enterprise industrial projects (including Honeywell Hydraulics) while enforcing a bespoke strategy tailored exclusively to KP Fasteners.
>
> **Every rule herein is binding. No agent or developer may bypass these standards without explicit user authorization.**

---

## 1. PROJECT OVERVIEW

- **Project Name:** KP Fasteners
- **Canonical Domain:** `kpfasteners.com` (Target production URL: `https://kpfasteners.com/`)
- **Website Type:** Enterprise B2B Industrial Manufacturer & Global Supplier Website
- **Target Audience:** Procurement managers, mechanical design engineers, EPC contractors, maintenance & operations heads, OEM supply chain buyers across automotive, construction, heavy engineering, oil & gas, renewable energy, and aerospace sectors.
- **Primary Objective:** Establish KP Fasteners as a high-authority, trusted manufacturer and global supplier of standard, high-tensile, stainless steel, and custom-engineered industrial fasteners.
- **SEO Objective:** Build comprehensive topical authority around high-intent B2B fastener search terms (standard fasteners, custom fasteners, material grades, industrial specifications) to achieve Top 3 rankings in primary commercial search queries without resort to thin or doorway pages.
- **Conversion Objective:** Generate high-value, qualified B2B RFQs (Request For Quotation), bulk technical drawing inquiries, direct phone calls, and WhatsApp business communications from industrial buyers.
- **Initial Target Scope:** Approximately **15–20 high-quality, high-intent pages**. Every page must earn its place through search intent, commercial value, and genuine content depth.
- **Technology Stack (Recommended & Target):**
  - **Framework:** Next.js (App Router, latest stable version)
  - **Language:** TypeScript (`strict: true`)
  - **Styling:** Tailwind CSS (Utility design system with curated design tokens)
  - **Components:** React Server Components (RSC) by default; leaf client components only when DOM interaction or state is mandatory.
  - **Image Pipeline:** Next/Image backed by Sharp for automated WebP/AVIF generation.
  - **Transactional Email:** Resend API for secure server-side lead dispatch (`/api/quote`, `/api/contact`).
  - **Testing & Auditing:** Automated schema auditing scripts, TypeScript typechecks (`tsc --noEmit`), and ESLint.
- **Development Environment:** Local development server running on `http://localhost:3000`.
- **Production Environment:** Vercel / Edge Network with HTTPS, automated Core Web Vitals logging, and DNS-level security.
- **Production Stance:** This is a **production B2B business asset**, NOT a toy, prototype, or minimum viable product (MVP). Every line of code, design asset, and content block must reflect industrial-grade precision.

---

## 2. CORE PROJECT PHILOSOPHY

All agents and contributors must operate under the following guiding tenets:

1. **Quality Over Quantity:** Do not create pages simply to expand sitemap size. A concise 18-page site with deep technical authority will consistently outrank a 100-page thin doorway farm.
2. **Search Intent Over Keyword Volume:** A page exists only if it answers a genuine user problem or satisfies a distinct commercial procurement intent. High-volume consumer keywords are rejected in favor of high-intent industrial queries.
3. **User-First SEO:** Search engines serve human users. Content must be structured to help industrial buyers evaluate technical specifications, material grades, standards, and manufacturing tolerances quickly.
4. **Accuracy Over Assumptions (Zero Tolerance for Hallucinations):** Never invent company facts, factory square footage, machine rosters, certifications (ISO, CE), material grades, tensile ratings, or customer logos. If data is unknown, flag it for client verification.
5. **Content Before UI Complexity:** Build the page around meaningful engineering content, clear data tables, and user needs—not around heavy animations, decorative canvas elements, or gratuitous parallax effects.
6. **Performance Is a Feature:** Core Web Vitals (LCP < 2.0s, INP < 200ms, CLS < 0.1) are non-negotiable. Performance budgets take precedence over visual novelties.
7. **Accessibility Is Part of Development:** WCAG 2.1 AA compliance is enforced during development, not remediated after launch.
8. **Security by Default:** Never commit API keys, email credentials, or internal paths. Validate every form field on the server.
9. **Build Incrementally:** Work through structured phase gates. Never mass-generate files across multiple directories simultaneously without validating intermediate steps.
10. **Validate Before Moving Forward:** Every major implementation phase requires passing an explicit validation gate before advancing to the next.
11. **The Ponytail Mindset (The Lazy Senior Dev Mindset):** *The best code is the code you never wrote.*
    - *Does this need to exist?* → No: skip it entirely (YAGNI).
    - *Is it already in this codebase?* → Reuse it, do not rewrite it.
    - *Does the standard library do it?* → Use it.
    - *Is there a native platform/browser feature?* → Use it (e.g., `<dialog>`, native date inputs, CSS grid).
    - *Is there an already installed dependency?* → Use it.
    - *Can it be done in one line?* → Write one line.
    - *Only then:* Write the absolute minimum custom code that works safely.
12. **Mandatory Taste Skill & Anti-Slop Discipline (`design-taste-frontend`):**
    - Always activate and adhere to the `design-taste-frontend` (`Leonxlnx/taste-skill`) skill whenever designing, building, or modifying web pages or UI components.
    - Output a one-line "Design Read" before generating layouts (identifying page kind, target audience, vibe language, and aesthetic family).
    - Calibrate the Three Dials (`DESIGN_VARIANCE`, `MOTION_INTENSITY`, `VISUAL_DENSITY`) to match the context and industry.
    - Enforce anti-default discipline: strictly reject generic AI template slop, purple gradients, 3-card bento clones, and purposeless glassmorphism.

---

## 3. HONEYWELL HYDRAULICS — LESSONS LEARNED

The previous Honeywell Hydraulics project serves as our **process and operational reference** (not an architectural or content template to be cloned). Below are the reusable lessons extracted from that project, categorized by discipline:

### A. SEO Lessons
1. **Pillar & Cluster Siloing:**
   - *What:* Organizing products into clear topical silos (e.g., parent category hub linking to specific technical variations) built authoritative topical coverage.
   - *Why:* Google understands hierarchy and entity relationships better when pages are clustered systematically.
   - *KP Fasteners Application:* Organize fasteners into clear structural clusters (e.g., Bolts → Hex Bolts, Socket Head Cap Screws, Flange Bolts; Nuts → Hex Nuts, Lock Nuts, Flange Nuts) with dedicated category hubs and contextual sibling cross-links.
2. **Avoiding Mass Location Doorway Bloat:**
   - *What:* Honeywell generated 23 regional/city routes. While this captured local signals, it created maintenance overhead and risks duplicate/thin content if not strictly differentiated.
   - *Why:* Google’s Helpful Content and spam updates penalize mass programmatic pages that lack localized physical presence or unique local content.
   - *KP Fasteners Application:* **Do NOT create mass location pages.** KP Fasteners will focus strictly on 15–20 high-intent product, material, technical, and company pages. Any regional targeting must be justified by physical presence or verified export distribution hubs.
3. **AEO & Agentic Discovery (`llms.txt` and `catalog.md`):**
   - *What:* Honeywell implemented root-level `llms.txt` and markdown technical catalogs for AI web crawlers.
   - *Why:* Search engines and AI answer engines (ChatGPT Search, Perplexity, Gemini) rely on structured markdown documentation to extract technical facts accurately.
   - *KP Fasteners Application:* Implement a curated `public/llms.txt` and technical product catalog markdown file summarizing KP Fasteners' official grades, standards, and product line once verified.

### B. Technical SEO Lessons
1. **URL Normalization & Trailing Slash Consistency:**
   - *What:* Strictly enforcing trailing slashes across Next.js routing, canonical tags, and internal links.
   - *Why:* Prevents redirect hops, duplicate indexing (e.g., `/bolts` vs `/bolts/`), and split PageRank.
   - *KP Fasteners Application:* Set `trailingSlash: true` in `next.config.ts` from day one, and verify all canonical tags and internal links use trailing slashes.
2. **Automated Schema & Metadata Auditing Scripts:**
   - *What:* Honeywell utilized standalone Python scripts (`audit_schemas.py`, `audit_titles_descs.py`) in CI/development to audit every route's JSON-LD and meta tags.
   - *Why:* Manual inspection of 20+ routes inevitably misses syntax errors, duplicate titles, or missing schema fields.
   - *KP Fasteners Application:* Maintain automated verification scripts in `scripts/` to validate metadata lengths, canonical accuracy, and JSON-LD schema syntax before deployment.
3. **Dynamic XML Sitemap Architecture:**
   - *What:* Single-source-of-truth sitemap generation using Next.js `app/sitemap.ts`.
   - *Why:* Ensures 100% of indexed routes are canonical, eliminating 404s, redirected URLs, or draft pages from the sitemap.
   - *KP Fasteners Application:* Implement `app/sitemap.ts` pulling directly from the centralized route inventory.

### C. Content Lessons
1. **Elimination of Boilerplate & Filler Content:**
   - *What:* The legacy Honeywell site contained generic marketing filler and Lorem Ipsum. Replacing it with precise engineering specifications dramatically improved user engagement.
   - *Why:* Industrial procurement officers need thread specifications, tensile strengths, tolerance charts, and plating standards—not corporate buzzwords.
   - *KP Fasteners Application:* Focus every product page on engineering tables, DIN/ISO/ASTM standards, material grade comparisons, application environments, and dimensional data.
2. **Centralized Data Layer for Technical Specs:**
   - *What:* Storing specifications in structured TypeScript files (`data/*.ts`) rather than hardcoding numbers inside JSX components.
   - *Why:* Ensures technical data consistency across hero sections, feature grids, specification tables, and JSON-LD schemas.
   - *KP Fasteners Application:* Store all fastener specifications, dimensions, thread pitches, and material properties in strongly typed `data/` constants.

### D. Website Architecture Lessons
1. **Shallow, Logical URL Hierarchy:**
   - *What:* Flat, descriptive routes (e.g., `/products/hex-bolts/` instead of deep `/category/industrial/hardware/bolts/hex/`).
   - *Why:* Keeps crawl depth minimal (≤ 2 clicks from homepage) and URLs clean and memorable for RFQ sharing.
   - *KP Fasteners Application:* Maintain a 2-level URL structure: `/products/[slug]/`, `/materials/[slug]/`, `/industries/[slug]/`, `/about/`, `/contact/`, `/request-quote/`.

### E. Internal Linking Lessons
1. **Contextual Tri-Directional Linking:**
   - *What:* Every page links upwards to its parent hub, sideways to related sibling products, and downwards to specific application or material guides.
   - *Why:* Distributes internal PageRank evenly and keeps bounce rates low by guiding users to related specifications.
   - *KP Fasteners Application:* Enforce a minimum of 3–5 contextual internal links per page. For example, a Hex Bolt page links to High-Tensile Steel Material, Heavy Engineering Applications, and Hex Nuts.

### F. Performance Lessons
1. **Server Components by Default (RSC):**
   - *What:* Honeywell kept 90%+ of components as React Server Components, pushing zero client-side JavaScript for static content.
   - *Why:* Keeps initial JS bundles tiny, achieving sub-1.5s LCP and perfect 100 Core Web Vitals on mobile.
   - *KP Fasteners Application:* Maintain a strict Server Component architecture. Use `'use client'` strictly on interactive leaf nodes (e.g., mobile navigation drawer, RFQ form submission, filter tabs).
2. **Image Pipeline Hygiene (`process_images.py`):**
   - *What:* Raw assets were processed and converted to optimized WebP/AVIF with explicit aspect ratios before hitting the public repository.
   - *Why:* Prevents multi-megabyte image bloat from degrading mobile LCP.
   - *KP Fasteners Application:* Run an image optimization pipeline for all fastener diagrams and factory photography.

### G. Design/UX Lessons
1. **Industrial Design System vs. Startup/SaaS Aesthetics:**
   - *What:* Honeywell discarded trendy SaaS styles (purple gradients, glowing borders, floating cards) in favor of high-contrast, structured industrial engineering palettes.
   - *Why:* B2B procurement professionals associate clean, high-contrast, structured data with engineering reliability and trust.
   - *KP Fasteners Application:* Build a robust design system tailored to precision manufacturing: deep industrial tones (e.g., forged steel navy/charcoal, safety amber/gold accent, clean engineering surfaces), crisp typography (e.g., Inter or Roboto), and clear data grids.
2. **Alternating Section Cadence:**
   - *What:* Strict alternation between white and light surface backgrounds (`bg-white` vs `bg-surface`) across sequential sections.
   - *Why:* Prevents visual fatigue and cleanly separates distinct content modules on long-scroll pages.
   - *KP Fasteners Application:* Enforce section background alternation across all page templates.

### H. Development Lessons
1. **Design Token Component Wrappers:**
   - *What:* Honeywell used standardized wrappers (`<Heading>`, `<Section>`, `<Container>`, `<Button>`) instead of raw HTML elements with repeated Tailwind classes.
   - *Why:* Prevents visual drift, enforces consistent mobile padding ramps, and makes site-wide design updates instant.
   - *KP Fasteners Application:* Build a core UI library (`components/ui/`) with standardized typography ramps, responsive padding, and touch target constraints.

### I. Security Lessons
1. **Serverless Form Processing & Environment Variable Isolation:**
   - *What:* Lead generation forms routed through isolated serverless API endpoints using environment variables (`RESEND_API_KEY`, `SALES_NOTIFICATION_EMAIL`).
   - *Why:* Protects internal business emails, prevents client-side credential leakage, and enables server-side rate limiting and spam filtering.
   - *KP Fasteners Application:* Adopt server-side form handling with strict Zod validation, hidden honeypots for bot trapping, and secure environment variable isolation.

### J. Analytics & Measurement Lessons
1. **Actionable Conversion Event Tracking:**
   - *What:* Focused tracking on meaningful commercial actions (Quote submissions, phone clicks, WhatsApp clicks, drawing uploads) rather than vanity scroll depth.
   - *Why:* Gives clear ROI attribution on which organic landing pages drive qualified commercial inquiries.
   - *KP Fasteners Application:* Implement lightweight event tracking for high-intent B2B conversion triggers.

### K. Deployment Lessons
1. **Environment Gatekeeping (Noindex on Staging):**
   - *What:* Staging and preview deployments had strict `noindex, nofollow` headers to prevent duplicate indexing before production launch.
   - *Why:* Prevents search engines from indexing development domains or premature content drafts.
   - *KP Fasteners Application:* Configure `next.config.ts` or middleware to enforce `X-Robots-Tag: noindex, nofollow` on all non-production domains.

### L. QA Lessons
1. **Pre-Commit and Pre-Launch Gatekeeping:**
   - *What:* Honeywell enforced comprehensive pre-launch checklists covering 404 validation, schema verification, mobile layout tests at 320px, and form testing.
   - *Why:* Prevents broken user flows, broken canoncial tags, and indexing issues at launch.
   - *KP Fasteners Application:* Follow the strict Pre-Commit (Section 28) and Pre-Launch (Section 29) checklists.
2. *Historical Metric Note:* Specific historical conversion lift percentages or exact organic click metrics from the Honeywell deployment are: **Needs confirmation from Honeywell project.** (Do not fabricate historical performance data).

---

## 4. SEO MASTER RULES

Every agent and developer must comply with these foundational SEO rules:

1. **One Page, One Primary Intent:** Every indexable page must target exactly one distinct primary search intent.
2. **One Primary Keyword per Canonical Page:** Never assign the same primary keyword to more than one page.
3. **No Keyword Cannibalization:** Two pages must never compete for the same core query. Consolidate variations into a single comprehensive guide.
4. **No Thin Pages:** Every page must provide substantial, comprehensive technical value. Pages with fewer than 300 words of generic text are forbidden.
5. **No Doorway Pages:** Creating repetitive pages solely to capture keyword permutations (e.g., "fasteners-in-city-a", "fasteners-in-city-b") is strictly banned.
6. **No Mass Programmatic Location Spam:** Local pages are permitted only where KP Fasteners maintains physical offices, registered warehouses, or certified distributor hubs.
7. **No Keyword Stuffing:** Write naturally for human engineers. Target keyword densities must remain natural (typically 0.8%–1.5%).
8. **No Duplicate Content:** Reusing blocks of text across multiple product pages is strictly forbidden. Technical tables and unique descriptions must be page-specific.
9. **No Fabricated Expertise:** Never make unsubstantiated claims such as "India's #1 Fastener Manufacturer" unless verified by accredited third-party documentation.
10. **Semantic Entity Optimization:** Incorporate natural, contextually related industry entities (e.g., tensile strength, proof load, yield stress, DIN 933, ISO 4017, ASTM A193 B7, zinc-nickel plating, passivation, M12 to M64 thread diameters).
11. **Human-Readable, Lowercase URLs:** URLs must be concise, lowercase, hyphen-separated, and end with a trailing slash (e.g., `/products/high-tensile-hex-bolts/`).
12. **Unique Title Tags (50–60 characters):** Front-load the primary target keyword, followed by secondary modifier or brand (e.g., `High-Tensile Hex Bolts Manufacturer | KP Fasteners`).
13. **Unique Meta Descriptions (150–160 characters):** Summarize the page value proposition, include secondary keywords naturally, and conclude with a clear commercial CTA.
14. **Strict Heading Hierarchy:** Exactly one `<h1>` per page (in the hero section). `<h2>` tags for major sections. `<h3>` tags for sub-items. Never skip heading levels (e.g., never jump from `<h2>` to `<h4>`).
15. **Contextual Internal Linking:** Link from body copy to related products, materials, and RFQ forms using descriptive anchor text. Avoid generic "click here" anchors.
16. **Indexability Integrity:** Important production pages must never have accidental `noindex` or `nofollow` directives.
17. **Structured Data Authenticity:** JSON-LD schema must exactly mirror the visible on-page content. Never inject false schema ratings, fake reviews, or phantom inventory.
18. **Accurate XML Sitemap:** Only 200-OK, canonical, indexable URLs belong in the sitemap. No redirects, 404s, or noindexed routes.
19. **Intentional Robots.txt:** Ensure critical assets (CSS, JS, product images) are crawlable. Never block Googlebot from rendering pages.

---

## 5. KEYWORD RESEARCH RULES

Before proposing or building any page, the following 8-stage research workflow is mandatory:

```text
[Keyword Discovery] 
       ↓
[Search Intent Classification] 
       ↓
[Keyword Clustering] 
       ↓
[Business Relevance & Commercial Value Scoring] 
       ↓
[SERP Feature & Competitor Analysis] 
       ↓
[Keyword-to-Page Mapping] 
       ↓
[Cannibalization & Overlap Check] 
       ↓
[Content Brief Approval]
```

### Research Evaluation Criteria:
- **Search Intent:** Is the intent Informational, Commercial Investigation, or Transactional B2B? Only pages with high commercial or high-value informational value will be built.
- **Business Relevance:** Does KP Fasteners actively manufacture or supply this product? If the company does not produce titanium aerospace rivets, that keyword is excluded regardless of search volume.
- **Commercial Value:** Will ranking for this term drive procurement inquiries from plant managers, OEMs, and contractors?
- **SERP Characteristics:** What does Google currently rank for this query? If the top 10 are consumer eCommerce marketplaces (Amazon, McMaster-Carr) targeting single-piece DIY purchases, do not target it as a B2B bulk manufacturing page without distinct OEM positioning.
- **Geographic Relevance:** Does the search pattern match domestic Indian procurement or international export markets?

---

## 6. KEYWORD-TO-PAGE MAPPING

A Master Keyword Map must be maintained in `/docs/seo/keyword-map.md`. Every page on the website must be registered in this table before implementation:

| URL Route | Primary Keyword | Secondary Keywords | Search Intent | Business Value | Priority |
|---|---|---|---|---|---|
| `/` | Industrial Fasteners Manufacturer | Fastener Supplier India, Custom Fasteners, Bolt & Nut Factory | Commercial / Navigational | High (Brand Authority) | P0 |
| `/products/hex-bolts/` | Hex Bolts Manufacturer | High Tensile Hex Bolts, DIN 933 Bolts, Grade 8.8 Hex Bolts | Transactional / Commercial | High (Core Product) | P0 |
| *[Pending Research]* | *[Pending]* | *[Pending]* | *[Pending]* | *[Pending]* | *[Pending]* |

### Master Mapping Rules:
1. One primary search intent = One dedicated canonical URL.
2. Close synonyms and long-tail variants must be consolidated into the primary page (e.g., "hexagonal head bolt manufacturer" and "hex bolt factory" belong on `/products/hex-bolts/`).
3. Never create distinct pages for minor dimensional variations (e.g., do NOT create `/products/m10-hex-bolt/` and `/products/m12-hex-bolt/`; consolidate into a unified specification matrix).
4. No URL may be added or modified without updating this master table and checking for conflicts.

---

## 7. CANNIBALIZATION PREVENTION

Before proposing or creating any new page, the agent must execute the following 5-point verification check:

1. **Intent Overlap:** Does an existing page already address this primary keyword or buyer intent?
2. **Consolidation Test:** Can this information be added as a dedicated section or table to an existing page instead of creating a new URL?
3. **SERP Conflict:** Will this new URL compete directly against another page on `kpfasteners.com` for the same query?
4. **Distinct Value:** Does the proposed page possess at least 70% unique technical content, specifications, and business utility not found anywhere else on the site?
5. **Business Justification:** Does this page directly support an active product line or target procurement sector?

> **Rule:** If the answer to (1) is YES, or (4) is NO, **DO NOT create the page.** Consolidate the content into the existing canonical page. If unsure, flag the conflict for human review.

---

## 8. WEBSITE ARCHITECTURE RULES

1. **Target Page Scope:** The initial website must contain approximately **15–20 high-quality pages**.
2. **Page Qualification:** Every single page must earn its place. A 16-page website where every page converts is vastly superior to a bloated 40-page site with neglected pages.
3. **Core Page Taxonomy (Initial Model):**
   - **Company & Trust (3–4 pages):** Homepage, About Us (Facility, Quality Lab, History), Quality & Certifications, Contact Us.
   - **Product Hub & Category Pages (6–8 pages):** Master Products Hub, Hex Bolts & Cap Screws, Heavy Hex Nuts & Lock Nuts, Industrial Studs & Threaded Rods, Washers & Retainers, Socket Screws, Custom Engineered Fasteners.
   - **Materials & Engineering Standards (2–3 pages):** Material Grades (Carbon Steel, High Tensile, Stainless Steel 304/316, Alloy Steel), Engineering Standards & Tolerances (DIN, ISO, ASTM, BS).
   - **Industries & Applications (2–3 pages):** Automotive & Heavy Machinery, Construction & Infrastructure, Renewable Energy (Solar & Wind).
   - **Conversion Endpoint (1 page):** Request a Quote / RFQ Technical Drawing Upload.
   - **Legal (1–2 pages):** Privacy Policy, Terms of Supply.
4. **URL Hierarchy:** Keep URLs clean, descriptive, and shallow:
   - Root: `/`
   - Hub: `/products/`
   - Leaf: `/products/hex-bolts/`
   - Conversion: `/request-quote/`
5. **No Deep Nesting:** Never exceed 2 folder levels (e.g., avoid `/products/industrial/fasteners/threaded/bolts/hex/`).

---

## 9. CONTENT RULES

All content published on `kpfasteners.com` must be:
- 100% Original and human-readable.
- Technically accurate and standard-compliant (DIN, ISO, ASTM).
- Written with authoritative B2B industrial tone.
- Directly aligned with procurement and engineering search intent.

### STRICT PROHIBITION ON FABRICATION:
Never invent or extrapolate:
- Factory land area, covered shed dimensions, or address details.
- Machine lists (e.g., number of multi-station cold headers, CNC lathes, thread rolling machines).
- Material grades, heat treatment capabilities, or plating finishes not explicitly verified.
- Testing lab apparatus (e.g., optical sorting machines, tensile testing machines, salt spray test chambers).
- Specific ISO (e.g., ISO 9001:2015, IATF 16949) or CE certifications.
- Client company names, logos, case studies, or testimonials.
- Annual production tonnage or export country lists.
- Founding year, employee headcount, or executive biographies.

> **Protocol for Missing Information:**
> When technical or company data is needed but unconfirmed, insert an explicit verification flag:
> `[VERIFICATION REQUIRED: Client to confirm {specific item}]`
> Never replace unknown facts with AI-generated assumptions.

---

## 10. AI CONTENT RULES

AI-assisted copywriting must never sound like generic promotional copy.

### Banned Corporate Clichés & Fluff:
The following expressions are strictly banned:
- *"In today's fast-paced industrial world..."*
- *"We are a leading manufacturer of..."*
- *"Our cutting-edge technology and state-of-the-art facility..."*
- *"Best-in-class solutions for your needs..."*
- *"Unparalleled quality and customer satisfaction..."*
- *"Revolutionizing the fastener industry..."*

### Required Engineering-First Tone:
Copy must reflect deep fastener manufacturing competency. Focus on:
- Fastener mechanical properties: Proof load, yield strength, tensile strength, hardness (Rockwell/Brinell).
- Thread geometry: Metric coarse, metric fine, UNC, UNF, thread pitch tolerances (6g / 6H).
- Coating & corrosion resistance: Zinc electroplating (trivalent blue/yellow), hot-dip galvanizing, zinc-flake coating (Geomet/Dacromet), phosphating, PTFE, salt spray test hours (ASTM B117).
- Standards cross-referencing: Mapping DIN to ISO and ASTM (e.g., DIN 933 ↔ ISO 4017; DIN 931 ↔ ISO 4014).
- Quality documentation: Availability of EN 10204 3.1 Mill Test Certificates (MTC), PPAP Level 3 documentation, batch traceability.

---

## 11. PAGE CONTENT STANDARD

Every indexable page must contain all of the following components before launch:

1. **SEO Title:** Primary keyword front-loaded, 50–60 characters.
2. **Meta Description:** Clear value proposition with CTA, 150–160 characters.
3. **Canonical Link:** Explicit self-referencing canonical with trailing slash.
4. **Hero Section:** Single `<h1>` tag with primary keyword, concise 2-sentence value summary, primary CTA button (`Request a Quote`), secondary CTA (`Download Specs` / `Contact Sales`), and contextual breadcrumbs.
5. **Technical Overview:** Clear explanation of product functionality, industrial use cases, and manufacturing capabilities.
6. **Detailed Engineering Specification Table:** Dimensional ranges, standard mappings (DIN/ISO/ASTM), material grades, coatings, and thread specifications.
7. **Material & Grade Breakdown:** Specific mechanical ratings (e.g., Grade 4.6, 8.8, 10.9, 12.9; SS 304, SS 316).
8. **Industrial Applications Grid:** Relevant sectors where the product is actively deployed.
9. **Quality Control & Testing Protocols:** Specific inspections performed (dimensional check, hardness test, proof load, coating thickness).
10. **Structured FAQ Section:** 3–5 high-value questions answering genuine procurement inquiries.
11. **Conversion CTA Section:** Contextual B2B lead capture banner with link to RFQ form, direct phone link, and WhatsApp business button.
12. **Contextual Internal Links:** Minimum 3–5 contextual links to sibling products, materials, or industry hubs.
13. **Images & Diagrams:** Dimensioned engineering drawings and product photos with descriptive alt text.
14. **Structured Data:** JSON-LD schema matching page content.

---

## 12. TECHNICAL SEO RULES

### Metadata
- Unique title tag per indexable route.
- Unique meta description per indexable route.
- OpenGraph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) and Twitter card tags configured on all routes.
- Viewport and charset tags properly defined.

### Indexability & Canonicalization
- Every indexable page must define an explicit self-referencing canonical URL: `<link rel="canonical" href="https://kpfasteners.com/.../" />`.
- No orphan pages: Every public route must be discoverable via HTML links from the homepage or main navigation.
- No accidental `noindex` or `nofollow` on production pages.

### XML Sitemap (`app/sitemap.ts`)
- Automatically generated from canonical routes.
- Must return HTTP 200 with `application/xml` header.
- Contains only canonical 200-OK URLs (zero redirects, zero 404s, zero noindexed URLs).
- Includes `<lastmod>` timestamps reflecting genuine content updates.

### Robots.txt (`app/robots.ts`)
- Must explicitly allow legitimate search bots (`User-agent: * Allow: /`).
- Disallow private endpoints: `/api/`, `/_next/`.
- Declare canonical sitemap URL: `Sitemap: https://kpfasteners.com/sitemap.xml`.

### URL Hygiene
- Strict lowercase characters.
- Hyphens as word separators.
- Enforce trailing slash consistency.
- Zero URL parameters for indexing.

---

## 13. STRUCTURED DATA RULES

All structured data must be implemented via valid JSON-LD (`<script type="application/ld+json">`).

### Eligible Schema Types:
1. **Organization / Manufacturer:** Present on homepage and company pages, declaring official legal name, URL, logo, contact points, and manufacturing credentials.
2. **LocalBusiness:** Declaring verified factory address, geographic coordinates, phone, opening hours, and service radius once confirmed.
3. **Product:** Applied to individual fastener product pages, declaring name, description, category, material, and brand.
4. **BreadcrumbList:** Mandatory on every page to render structured breadcrumb trails in Google SERPs.
5. **WebSite:** Homepage schema including name, URL, and potential SearchAction.
6. **FAQPage:** Applied only on pages with genuine visible FAQs answering procurement questions.

### Strict Schema Safeguards:
- Schema data must 100% match visible on-page content.
- Never inject fake review ratings or aggregate stars.
- Never fabricate pricing in schema if products are custom-quoted (use `aggregateRating` or price specifications only when commercially verified).
- Validate all schema output through Google’s Rich Results Test tool before release.

---

## 14. INTERNAL LINKING RULES

Internal links build site architecture, distribute PageRank, and establish topical silos.

### Mandatory Linking Architecture:
```text
                    [ Homepage ]
                   ↙     ↓     ↘
      [ Products Hub ] [ Quality ] [ About / Facility ]
         ↙        ↘           ↘          ↙
  [ Hex Bolts ] [ Studs ]     [ Contact / RFQ ]
       ↓            ↓                 ↑
[ High-Tensile ] [ ASTM A193 ] -------|
```

### Linking Standards:
1. **Contextual In-Content Links:** Link naturally within paragraphs to related materials, technical standards, or complementary fasteners (e.g., Hex Bolts linking to matching Hex Nuts and Hardened Washers).
2. **Anchor Text Diversity:** Use descriptive, natural anchor text (e.g., "high-tensile grade 8.8 bolts", "stainless steel fastener specifications"). Never use generic "learn more" or "click here".
3. **Avoid Footer Keyword Stuffing:** Do not dump a 50-link keyword cloud in the footer. Keep footer links clean, navigational, and user-centric.
4. **No Orphan Pages:** Every page must have at least 2 inbound internal links from higher-level or sibling pages.

---

## 15. IMAGE SEO RULES

1. **Modern Formats:** Serve images exclusively in WebP or AVIF format.
2. **Responsive Sizing:** Use Next.js `<Image>` with explicit `width`, `height`, and `sizes` attributes to prevent Layout Shift (CLS).
3. **Compression:** Compress all photographic and diagram assets. Individual image sizes must remain below 120 KB (heroes below 200 KB).
4. **Descriptive File Naming:** Use kebab-case names describing the image content (e.g., `grade-8-8-hex-bolt-dimensions.webp`, `precision-cold-heading-machine.webp`). Never use camera defaults like `IMG_0492.jpg`.
5. **Meaningful Alt Text:** Alt text must describe what is depicted for visually impaired users and search engine understanding (e.g., `alt="Zinc-plated high tensile hex head bolt with metric thread specifications"`).
6. **Decorative Images:** Decorative dividers, background shapes, or purely visual icons must use an empty alt attribute (`alt=""`) and `aria-hidden="true"`.

---

## 16. PERFORMANCE RULES

Performance is an essential ranking factor and user experience requirement.

### Core Web Vitals Thresholds (Mobile):
- **Largest Contentful Paint (LCP):** < 2.0 seconds
- **Interaction to Next Paint (INP):** < 200 milliseconds
- **Cumulative Layout Shift (CLS):** < 0.1
- **First Contentful Paint (FCP):** < 1.2 seconds
- **Time to First Byte (TTFB):** < 500 milliseconds

### Performance Engineering Rules:
1. **Server Components First:** Render all static layout and text on the server. Do not send client-side JavaScript for static text.
2. **Font Optimization:** Use `next/font/google` to preload fonts locally as self-hosted WOFF2 files with `display: swap`. Use a single primary font family (e.g., Inter).
3. **No Heavy Animation Libraries:** Forbid heavy third-party animation libraries (e.g., Three.js, GSAP, heavy Framer Motion bundles) unless an essential business requirement justifies the bundle weight. Prefer lightweight CSS transitions.
4. **Third-Party Script Isolation:** Load analytics or tag managers using `next/script` with `strategy="afterInteractive"` or `strategy="lazyOnload"`. Never block page render with synchronous external scripts.

---

## 17. RESPONSIVE DESIGN RULES

Every page and component must be designed and verified for all screen dimensions:
- **Mobile:** 320px – 639px
- **Tablet:** 640px – 1023px
- **Desktop:** 1024px – 1439px
- **Large Desktop:** ≥ 1440px

### Responsive Engineering Requirements:
1. **Mobile-First CSS:** Build mobile layout first, layering breakpoint overrides (`sm:`, `md:`, `lg:`, `xl:`) progressively.
2. **Zero Horizontal Scroll:** The layout must never overflow horizontally at 320px viewport width.
3. **Touch Target Size:** All buttons, links, form inputs, and interactive widgets must have a minimum touch target area of **48×48px** on mobile screens.
4. **Engineering Data Tables:** Fastener dimensional tables must be wrapped in responsive horizontal-scroll containers with clear visual scroll indicators, ensuring mobile users can inspect thread data without breaking the page layout.
5. **Readable Typography:** Base body font size must be at least 16px on mobile to prevent iOS Safari auto-zoom on input focus.

---

## 18. ACCESSIBILITY RULES (WCAG 2.1 AA)

1. **Semantic HTML5 Elements:** Use `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, and `<footer>`. Never build clickable buttons out of `<div>` or `<span>` tags.
2. **Accessible Form Controls:** Every input, textarea, and select dropdown must have an associated `<label>` (using `htmlFor` and matching `id`). Placeholders are not substitutes for labels.
3. **Visible Focus States:** Never remove outline styles (`outline: none`) without providing an explicit, high-contrast `:focus-visible` indicator for keyboard navigators.
4. **Color Contrast:** Text and interactive elements must maintain a minimum contrast ratio of **4.5:1** against their background (3:1 for large text ≥ 18pt/24px).
5. **Keyboard Operability:** All interactive components (mobile menu drawers, dropdowns, modal RFQ forms) must be fully navigable and dismissible via standard keyboard controls (`Tab`, `Enter`, `Escape`, `Space`).
6. **ARIA Compliance:** Use ARIA attributes only when native HTML semantics cannot convey the state (e.g., `aria-expanded` on accordion toggles).

---

## 19. SECURITY RULES

1. **Zero Secret Leaks:** Never commit `.env`, `.env.local`, API tokens, private keys, database connection strings, or email passwords to version control.
2. **Environment Variable Segregation:** Server-only secrets (e.g., `RESEND_API_KEY`) must never be prefixed with `NEXT_PUBLIC_`.
3. **Server-Side Input Validation:** Validate every inbound lead submission on the server using strict schemas (e.g., Zod). Sanitize strings against XSS and SQL/NoSQL injection.
4. **Spam & Abuse Protection:** Implement honeypot fields and rate limiting on `/api/quote` and `/api/contact` endpoints to prevent automated form flooding.
5. **Security Headers:** Enforce secure HTTP response headers via `next.config.ts`:
   - `X-Content-Type-Options: nosniff`
   - `X-Frame-Options: SAMEORIGIN`
   - `X-XSS-Protection: 1; mode=block`
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy: camera=(), microphone=(), geolocation=()`

---

## 20. CONSOLE LOGGING RULES

1. **No Sensitive Data in Logs:** Never log user names, email addresses, phone numbers, quotation values, API keys, or session tokens to the browser console or server stdout.
2. **Production Silence:** Clean up development debugging logs (`console.log`) before committing. Production logs should record only structured server-side errors with sanitized request IDs.
3. **Structured Error Handling:** Use proper `try...catch` blocks with typed error responses rather than unhandled promise rejections.

---

## 21. CODE QUALITY RULES

1. **Strict TypeScript:** Enable `strict: true` in `tsconfig.json`. Explicitly type all data models, component props, and API request/response payloads. Never use `any`.
2. **Focused, Reusable Components:** Keep components small, single-responsibility, and reusable. Avoid monolithic 800-line JSX files.
3. **Centralized Data Storage:** Store structured product specs, engineering tables, and navigation links in `data/*.ts` constants rather than hardcoding arrays inside component render functions.
4. **Zero Unused Dependencies:** Check if a feature can be accomplished with native browser APIs or existing packages before installing new npm libraries. Never install multiple utility packages that duplicate functionality (e.g., do not mix multiple icon packs or date utilities).
5. **Code Style & Formatting:** Maintain clean code formatting, ESLint compliance, and self-documenting variable and function names.

---

## 22. DESIGN SYSTEM RULES

All styling must adhere to a centralized token system defined in `tailwind.config.ts` and `app/globals.css`.

### Design Token Architecture:
- **Primary Industrial Colors:**
  - Steel Dark / Deep Charcoal (Primary text, dark headers, industrial foundation)
  - Precision Navy / Slate (Headings, primary brand elements, navigation surfaces)
  - Industrial Accent (Engineering safety amber / gold or precision blue for CTAs and focus points; max 3% visual presence)
  - Engineering White & Clean Light Grays (Background surfaces, specification card containers)
  - Technical Borders (Subtle, crisp border lines for specification tables and cards)
- **Approved Client Palette (2026-09-30):** The colour system now matches the
  client-approved `kpfastner_old` demo. Primary CTAs use the gold gradient
  `linear-gradient(135deg, #F59E0B, #D97706, #92400E)` (`.btn-primary`) and the
  hero headline uses `.text-gold-gradient`. See [`docs/design.md`](docs/design.md) §2
  for tokens and [`docs/design-contrast-report.md`](docs/design-contrast-report.md)
  for AA verification.
- **Typography Tokens (three-font system, self-hosted via `next/font/google`):**
  - `--font-sans` — **Inter** (400/500/600/700) for body copy and UI labels.
  - `--font-heading` — **Outfit** (600/700/800) for all headings, `.btn` labels, footer/nav titles.
  - `--font-mono` — **JetBrains Mono** (400/500/600) for spec tables (`.mono-numbers`).
  - Standardized Heading Ramp via UI components:
    - Hero: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold`
    - Section: `text-2xl sm:text-3xl md:text-4xl font-bold`
    - Subsection: `text-xl sm:text-2xl md:text-3xl font-semibold`
    - Card: `text-lg sm:text-xl font-semibold`
- **Spacing & Rhythm:**
  - Section vertical padding: `py-12 md:py-16 lg:py-24`
  - Container horizontal padding: `px-4 sm:px-6 lg:px-8` with max width `max-w-7xl`
  - Grid gaps: Responsive ramps `gap-4 sm:gap-6 md:gap-8`
- **Alternating Background Cadence:** Sequential sections on any page must alternate backgrounds (`bg-white` → `bg-surface` → `bg-white`) to preserve visual rhythm and hierarchy.

---

## 23. B2B CONVERSION RULES

The website is a commercial B2B sales pipeline designed to generate qualified industrial procurement inquiries.

### Conversion Mechanisms:
1. **Above-the-Fold Primary CTA:** Every product and commercial page must present an immediate action in the hero: `Request a Fastener Quote` or `Submit Drawing / RFQ`.
2. **Mid-Page Contextual CTA:** Placed immediately following engineering specification tables where procurement officers finalize dimensional requirements.
3. **Bottom Closing Section CTA:** High-contrast banner with dual options: `Submit Online RFQ` and `Talk to a Fastener Specialist`.
4. **Omnichannel Contact Options:**
   - **Direct Phone Link:** Formatted with `tel:+...` for instant mobile calling.
   - **WhatsApp Business Link:** Formatted with pre-filled inquiry text (e.g., `https://wa.me/.../?text=Inquiry%20regarding%20KP%20Fasteners`).
   - **Sales Email:** Clickable `mailto:...` link.
   - **Interactive RFQ Form:** Minimal required fields to reduce friction: Name, Company, Work Email/Phone, Fastener Type/Standard, Quantity/Tonnage, Optional Drawing Upload.

---

## 24. ANALYTICS & MEASUREMENT

1. **Lightweight Analytics:** Deploy privacy-conscious, performant analytics (e.g., Vercel Analytics or Google Analytics 4 via `next/script`).
2. **Actionable Event Tracking:** Measure commercial interactions:
   - RFQ form submissions (`event: 'rfq_submission'`)
   - Direct telephone clicks (`event: 'phone_click'`)
   - WhatsApp inquiry clicks (`event: 'whatsapp_click'`)
   - Specification PDF / Catalog downloads (`event: 'spec_download'`)
3. **No Performance Degradation:** Tag managers and tracking pixels must load asynchronously and never contribute to Core Web Vitals degradation.

---

## 25. DEVELOPMENT WORKFLOW

Every task must follow this 10-step protocol:

```text
1. Understand the Requirement
       ↓
2. Inspect Existing Codebase & Check AGENTS.md
       ↓
3. Identify Minimal Affected Files
       ↓
4. Implement Minimal, High-Quality Code
       ↓
5. Run TypeScript & Lint Validation
       ↓
6. Audit SEO Impact (Metadata, Canonical, Hierarchy)
       ↓
7. Audit Performance & Bundle Size Impact
       ↓
8. Audit Accessibility & Keyboard Flow
       ↓
9. Audit Security (Input Validation, No Leaks)
       ↓
10. Document Changes in Plain English
```

---

## 26. SEO-SAFE DEVELOPMENT

Before editing or refactoring any existing page, the developer/agent must record and preserve:
- Current URL route and trailing slash status
- Existing title tag, meta description, and H1
- Canonical tag target
- Existing structured data (JSON-LD)
- Inbound and outbound internal links

### Mandatory Redirect Protocol:
If a URL must change:
1. Document old URL and new target URL in `/docs/seo/redirects.md`.
2. Implement permanent 301 redirect in `next.config.ts`.
3. Update all internal links across the codebase pointing to the old URL.
4. Update `app/sitemap.ts` to reflect the new canonical URL.
5. Verify old URL returns 301 and lands on the new 200-OK target.

---

## 27. PAGE CREATION GATE

No new page route may be created in the codebase until the following gate template is completed and documented in `/docs/seo/page-proposals.md`:

```text
---
Page Name:
Target URL:
Search Intent (Informational / Commercial / Transactional):
Primary Target Keyword:
Secondary Keywords (2-4):
Business Value & Commercial Justification:
Target Audience (Procurement / Design Engineer / Contractor):
Primary Conversion Goal:
Planned Internal Links (Minimum 3 Inbound & Outbound):
Required Schema Types:
Justification Why This Cannot Be Merged Into An Existing Page:
---
```

> If these fields cannot be justified with distinct commercial value, **the page must NOT be created.**

---

## 28. PRE-COMMIT CHECKLIST

Before committing any code or submitting changes, verify:

### Code Quality
- [ ] `npm run build` or `npx tsc --noEmit` runs with 0 errors.
- [ ] No unused imports, variables, or console statements.
- [ ] No hardcoded credentials, API keys, or internal tokens.
- [ ] Ponytail check: Is this the absolute minimal necessary code?

### SEO Verification
- [ ] Page has unique title and meta description within character limits.
- [ ] Canonical tag is present, correct, and ends with trailing slash.
- [ ] Exactly one `<h1>` per page; no skipped heading levels.
- [ ] Structured data (JSON-LD) is valid and matches visible content.
- [ ] Minimum 3 contextual internal links present.
- [ ] No unintended `noindex` or `nofollow` directives.

### Responsive & Accessibility
- [ ] Verified at 320px viewport: Zero horizontal overflow.
- [ ] Interactive touch targets are ≥ 48×48px.
- [ ] Keyboard navigation (`Tab`, `Enter`, `Escape`) works across all interactive components.
- [ ] Form controls have visible, associated `<label>` elements.
- [ ] All images have descriptive `alt` text (or `alt=""` if decorative).

---

## 29. PRE-LAUNCH SEO CHECKLIST

Before the website goes live to production, every item must be validated:

- [ ] **Site Architecture:** All planned 15–20 pages exist, render 200-OK, and have no broken internal links.
- [ ] **Metadata Audit:** 100% of pages have unique, non-duplicated titles and meta descriptions.
- [ ] **Headings:** Every page has exactly one `<h1>`; heading hierarchy is semantically ordered.
- [ ] **Canonicals:** Every indexable URL has an explicit, self-referencing canonical tag.
- [ ] **XML Sitemap:** `https://kpfasteners.com/sitemap.xml` is valid, accessible, and contains only canonical 200-OK URLs.
- [ ] **Robots.txt:** `https://kpfasteners.com/robots.txt` allows legitimate crawlers and points to the sitemap.
- [ ] **Indexability:** Staging `noindex` headers are removed on the production domain.
- [ ] **Structured Data:** Verified with Google Rich Results Test; 0 errors.
- [ ] **404 Page:** Custom, user-friendly 404 page exists with clear links back to core product hubs.
- [ ] **Redirects:** All legacy or changed URLs return 301 redirects to their canonical targets.
- [ ] **HTTPS & SSL:** Full site serves over HTTPS with HSTS enabled; HTTP requests redirect to HTTPS.
- [ ] **Mobile Usability:** Passes mobile-friendly testing with no viewport clipping or undersized tap targets.
- [ ] **Forms & Leads:** All contact and RFQ forms submit successfully, deliver email notifications, and show confirmation states.
- [ ] **Analytics:** Event tracking firing correctly on conversion triggers.
- [ ] **Search Console:** Google Search Console domain property created and DNS verification prepared.

---

## 30. POST-LAUNCH RULES

After production deployment:
1. **No Rapid Page Flooding:** Do not immediately generate dozens of new pages. First monitor baseline search engine indexing and crawl behavior.
2. **Weekly Performance & GSC Review:**
   - Monitor Google Search Console for crawl errors, soft 404s, or indexing exclusions.
   - Inspect actual search queries, impressions, and click-through rates (CTR).
   - Track Core Web Vitals field data.
3. **Data-Driven Iteration:** Use real query impressions in Search Console to refine existing title tags, headings, and technical tables before considering any new page creation.

---

## 31. CHANGE MANAGEMENT

Before altering an existing SEO-sensitive element (URL, H1, title, canonical, major content block), answer:
1. *What is changing?* (Exact diff)
2. *Why is it changing?* (Business or ranking rationale)
3. *What is the anticipated SEO impact?*
4. *Which URLs and internal links are affected?*
5. *Does this require a 301 redirect or sitemap update?*
6. *How will the change be validated after deployment?*

---

## 32. "DO NOT BREAK EXISTING WORK" RULE

Before refactoring or altering an existing component or page:
1. Inspect the component and its call sites.
2. Understand all incoming props, data dependencies, and styling context.
3. Verify what SEO elements depend on it (structured data, headings, metadata).
4. Preserve existing working behavior unless a documented requirement mandates an explicit change.
5. Never rewrite a working, tested component simply for stylistic preference.

---

## 33. PROJECT DOCUMENTATION

All architectural decisions, SEO plans, and design guidelines must be cataloged in `/docs/`:

```text
/docs/
  ├── seo/
  │   ├── keyword-map.md           # Master keyword-to-page inventory
  │   ├── sitemap-spec.md          # 15-20 page structural architecture
  │   ├── redirect-map.md          # 301 redirect inventory (if applicable)
  │   └── page-proposals.md        # Evaluated page proposals passing Gate 27
  ├── content/
  │   ├── content-briefs/          # Technical specifications per route
  │   └── client-verified-facts.md # Official verified specs, standards, facilities
  ├── architecture/
  │   ├── technical-stack.md       # Framework, packages, and build scripts
  │   └── api-contracts.md         # Inbound RFQ / Contact payload schemas
  └── design/
      └── design-system.md         # Colors, typography, component token specifications
```

---

## 34. SOURCE OF TRUTH HIERARCHY

When project requirements or parameters appear in conflict, resolve them using this strict hierarchy:

```text
1. Official Client-Provided Business & Technical Data (Highest Authority)
   ↓
2. Approved AGENTS.md (Operating Rules & Standards)
   ↓
3. Approved Master Keyword Map & Sitemap Specification
   ↓
4. Approved Content Briefs & Design System Documentation
   ↓
5. Active Codebase Implementation (Lowest Authority)
```

> **Rule:** If two sources conflict, **do NOT guess or silently pick one.** Flag the discrepancy immediately for human clarification.

---

## 35. DECISION-MAKING RULE

When requirements are ambiguous or incomplete:
1. **Identify the ambiguity** clearly.
2. **Explain the business, technical, or SEO implications.**
3. **Present 2–3 viable solutions**, highlighting pros and cons.
4. **Recommend the technically safest, lowest-risk option** (adhering to the Ponytail mindset).
5. **Request explicit confirmation** before implementing changes affecting URLs, business claims, design system tokens, or dependencies.

---

## 36. PHASE GATES

The KP Fasteners project must proceed sequentially through these 17 structured gates:

- **GATE 1: Business & Capabilities Understanding** (Client facts, product line, factory verification)
- **GATE 2: Competitor & SERP Landscape Analysis** (Fastener manufacturing SERP research)
- **GATE 3: Keyword Discovery & Research** (Search intent and volume evaluation)
- **GATE 4: Keyword Clustering** (Topical grouping into fastener silos)
- **GATE 5: Keyword-to-Page Mapping** (Master mapping approval)
- **GATE 6: 15–20 Page Sitemap Architecture** (Information architecture approval)
- **GATE 7: Technical Content Briefs** (Specifications, standards, tables defined per page)
- **GATE 8: Content Writing & Fact Verification** (Original copy, zero clichés, verified facts)
- **GATE 9: Brand Identity & Design System Tokens** (Color palette, typography, tokens approved)
- **GATE 10: UX Wireframes & Conversion Architecture** (Component layouts, RFQ flow)
- **GATE 11: Technical SEO Architecture** (Next.js App Router setup, sitemap, robots, schema types)
- **GATE 12: UI Component Construction** (Reusable, accessible UI component library)
- **GATE 13: Full Route Assembly & Page Development** (Pages assembled using Server Components)
- **GATE 14: Automated SEO & Schema QA** (Schema audit, title/desc validation, canonical check)
- **GATE 15: Technical QA & Accessibility Audit** (Typecheck, mobile 320px check, CWV audit)
- **GATE 16: Production Launch & DNS Cutover** (SSL, domain routing, Search Console verification)
- **GATE 17: Post-Launch Monitoring** (GSC crawl indexing, CWV real-user metrics, lead tracking)

> **No gate may be skipped without documented human approval.**

---

## 37. AI AGENT BEHAVIOR

Every AI agent working on this repository must behave as an enterprise-grade pair programmer:

### Before Writing Code:
- Read `AGENTS.md` and check the relevant `/docs/` guides.
- Inspect the active repository structure and package dependencies.
- Confirm which phase gate is currently active.
- Verify that the task does not violate any core SEO or code quality rules.

### While Writing Code:
- Follow established project naming conventions, TypeScript types, and design tokens.
- Write the absolute minimal custom code required to accomplish the goal safely.
- Never introduce unvetted third-party packages.
- Never write placeholder, mock, or hallucinated product specifications.

### After Writing Code:
- Run validation commands (`tsc --noEmit`, linters).
- Verify responsive layout and mobile touch targets.
- Confirm metadata and schema integrity.
- Provide a concise, plain-English summary of what was changed and why.

---

## 38. NEVER DO THESE THINGS WITHOUT EXPLICIT APPROVAL

The following actions are strictly prohibited without written user authorization:
1. Changing the primary domain, protocol, or root URL structure.
2. Deleting, renaming, or redirecting any existing indexable SEO page.
3. Modifying primary target keywords on existing ranking pages.
4. Adding mass programmatic location or doorway pages.
5. Overhauling the design system, color palette, or global typography tokens.
6. Introducing major external dependencies or CSS frameworks (e.g., adding an unvetted UI library).
7. Modifying `robots.txt` to block search engines.
8. Deleting or disabling analytics, structured data, or conversion tracking.
9. Deploying code that bypasses TypeScript typechecking or introduces lint errors.
10. Inventing technical data, certifications, or company capabilities.

---

## 39. FINAL PRINCIPLE

> **"Plan first. Research first. Verify first. Build second."**
>
> We are not building a website merely to occupy a domain name. We are building a long-term, high-authority digital asset engineered to:
>
> **Rank in Search → Educate Engineers → Build Procurement Trust → Generate Qualified B2B Sales Inquiries**
>
> Every decision made on this project must keep the website:
>
> **Fast • Accessible • Secure • SEO-Optimized • Maintainable • Factually Accurate • Conversion-Focused • Scalable**

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
