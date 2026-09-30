# SXO — Search Experience Optimisation

Reads the SERP backwards: for each priority query, what does Google reward, does our planned page match, and how does each persona score it? Populated in full during the live audit; scaffolding below.

---

## 1. Persona scoring rubric

Every priority page is scored 1–5 by three personas:

| Persona | Weight | What they punish |
|---|---|---|
| Procurement manager | 40 % | Missing MOQ / lead time / MTC availability; no direct RFQ path; no phone; no dispatch pin codes |
| Design engineer | 30 % | Missing grade tables; no standards cross-reference; no dimensional matrix; no materials context |
| EPC / OEM buyer | 30 % | No drawing-upload path; no custom-order signal; no industry proof; no packaging note |

Total score is the weighted average across the three. Target ≥ 4.0 on every priority page.

## 2. Priority SERP → intent map (populate live)

For each priority query:

```markdown
### Query: "<query>"
- SERP page-types in top 10 (manufacturer homepage / product category / IndiaMART / marketplace / blog / directory / AI Overview): *TBC*
- Featured / SERP-features present: *TBC*
- Word count of top 3 organic results: *TBC*
- Common on-page elements across top 3: *TBC*
- KP planned page: /...
- Match verdict: strong / partial / mismatch
- Fix required (if mismatch):
- Persona scores (planning estimate):
  - Procurement: /5
  - Design engineer: /5
  - EPC / OEM: /5
- Weighted: /5
```

## 3. Anticipated priority queries

### "hex bolts manufacturer" (national commercial)
- Expected SERP: manufacturer sites + IndiaMART. Match: `/products/hex-bolts/` (strong).
- Wedge: deeper spec tables, on-page RFQ path, sticky mobile bar.

### "high tensile hex bolts supplier" (national commercial)
- Match: `/products/hex-bolts/` with a high-tensile section + cross-link to `/materials/high-tensile-fasteners/`. (Strong.)

### "ss 304 vs ss 316 fasteners" (informational-commercial)
- Match: `/materials/stainless-steel-fasteners/` (strong — decision guide).
- Wedge: on-page decision block + RFQ CTA on the same page.

### "fastener manufacturer ahmedabad" (local commercial)
- Match: `/` (with LocalBusiness schema). (Strong.)
- Wedge: real address, GBP linked, real reviews (post-launch).

### "solar mounting bolts supplier india" (industry commercial)
- Match: `/industries/solar-mounting-fasteners/` (partial until published).
- Wedge: fastener stack per solar structure, dispatch capabilities.

### "custom fasteners drawing based manufacturer" (commercial)
- Match: `/products/custom-fasteners/`.
- Wedge: on-page drawing-upload path.

### "mill test certificate en 10204 3.1 fasteners" (procurement research)
- Match: `/quality/` (strong).

## 4. Page-type mismatch guardrails

Do **not** try to rank a category page for a query where the SERP is dominated by blog guides — the intent won't match and click-through will underperform. Cases:
- If "grade 8.8 vs 10.9" is a blog-guide SERP, cover it as a *section* on the material page but don't build a blog post to compete unless the SERP later flips.
- If "how to install foundation bolt" is a video/how-to SERP, we do **not** target it. Not our audience.

## 5. Wireframe cues per priority page (design brief for Phase C/D/E)

Every priority page's hero must, above the fold on 375 × 812 (iPhone SE-ish):
- H1 with the primary keyword.
- One-sentence proposition.
- Primary CTA button.
- Phone + WhatsApp tap-targets.
- One authority strip (Ahmedabad address / years in business / MTC available — only if verified).

If any of these is missing on visit, the persona score drops below 3.5 and the page needs revision.

## 6. Refresh cadence

- After launch: run `/seo-sxo` on 5 priority pages using real Search Console query data.
- Quarterly re-run — SERPs drift.
- On any spec-refresh PR, re-check that the persona rubric still passes.
