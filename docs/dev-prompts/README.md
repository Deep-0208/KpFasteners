# Dev Prompts — Remaining 15 Pages

One self-contained build-prompt per remaining page on kpfasteners.com. Each file is paste-ready for a **fresh general-purpose agent** that starts with zero shared context — the agent only needs this folder plus the repo cloned at `C:\Users\DELL\Desktop\SEO\KpFasteners SEO\` on branch `develop`. The agent self-briefs from the referenced docs, builds the page, runs the acceptance gates, and lands ONE coherent commit on `develop` with the `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>` line.

## How to use

1. Open any file in this folder.
2. Copy the entire body (everything from the H1 downward).
3. Paste into a fresh general-purpose agent / new session.
4. Confirm the agent has the repo on disk at `C:\Users\DELL\Desktop\SEO\KpFasteners SEO\` with branch `develop` checked out (head `49fadb0`).
5. The agent self-briefs from the "Cold-start reads" list, builds, verifies, and reports back under 300 words with the commit hash.
6. Do NOT push. Do NOT touch `main`.

## Prompt index

| # | File | Route | Classification | Cluster | Priority | Brief |
|---|---|---|---|---|---|---|
| 01 | `01-materials-stainless-steel-fasteners.md` | `/materials/stainless-steel-fasteners/` | ambiguous | C16 | P1 | `docs/content/content-briefs/stainless-steel-fasteners.md` |
| 02 | `02-materials-high-tensile-fasteners.md` | `/materials/high-tensile-fasteners/` | ambiguous | C15 | P1 | `docs/content/content-briefs/high-tensile-fasteners.md` |
| 03 | `03-industries-solar-mounting-fasteners.md` | `/industries/solar-mounting-fasteners/` | ambiguous | C17 | P1 | `docs/content/content-briefs/solar-mounting-fasteners.md` |
| 04 | `04-industries-construction-infrastructure.md` | `/industries/construction-infrastructure/` | ambiguous | C18 | P2 | `docs/content/content-briefs/construction-infrastructure.md` |
| 05 | `05-industries-automotive-heavy-engineering.md` | `/industries/automotive-heavy-engineering/` | ambiguous | C19 | P2 | `docs/content/content-briefs/automotive-heavy-engineering.md` |
| 06 | `06-products-solar-accessories.md` | `/products/solar-accessories/` | trading | C12 (anchor) | P0 | `docs/content/content-briefs/solar-accessories.md` |
| 07 | `07-products-hex-bolts-nuts.md` | `/products/hex-bolts-nuts/` | trading | C13 | P1 | `docs/content/content-briefs/hex-bolts-nuts.md` |
| 08 | `08-products-csk-allen-bolts.md` | `/products/csk-allen-bolts/` | trading | C10 | P1 | `docs/content/content-briefs/csk-allen-bolts.md` |
| 09 | `09-products-tie-rods.md` | `/products/tie-rods/` | trading | C09 | P1 | `docs/content/content-briefs/tie-rods.md` |
| 10 | `10-products-custom-fasteners.md` | `/products/custom-fasteners/` | ambiguous | C14 | P1 | `docs/content/content-briefs/custom-fasteners.md` |
| 11 | `11-quality.md` | `/quality/` | n/a | C03 | P1 | `docs/content/content-briefs/quality.md` |
| 12 | `12-about.md` | `/about/` | n/a | C02 | P1 | `docs/content/content-briefs/about.md` |
| 13 | `13-products-hub.md` | `/products/` | n/a | C06 | P0 | `docs/content/content-briefs/products-hub.md` |
| 14 | `14-privacy-policy.md` | `/privacy-policy/` | n/a (legal) | n/a | P2 | `docs/content/content-briefs/privacy-policy.md` |
| 15 | `15-terms.md` | `/terms/` | n/a (legal) | n/a | P2 | `docs/content/content-briefs/terms.md` |

## Suggested execution order

SRG-wedge priority first — the pages that most directly outflank srgfasteners.com — then trading breadth, then industry hubs, then company / legal.

1. **01** `/materials/stainless-steel-fasteners/` — SS is the number-one SRG-vs-KP wedge query family.
2. **03** `/industries/solar-mounting-fasteners/` — anchors the solar wedge above `/products/solar-accessories/`.
3. **11** `/quality/` — MTC-first positioning; SRG has no credible equivalent.
4. **02** `/materials/high-tensile-fasteners/` — second material wedge.
5. **06** `/products/solar-accessories/` — anchor cluster C12; greenfield SERP.
6. **10** `/products/custom-fasteners/` — highest per-RFQ margin.
7. **07** `/products/hex-bolts-nuts/` — largest-volume trading product.
8. **08** `/products/csk-allen-bolts/` — second trading product.
9. **09** `/products/tie-rods/` — third trading product.
10. **13** `/products/` — hub needs all 9 children live to be credible.
11. **04** `/industries/construction-infrastructure/` — industry hub, broad B2B.
12. **05** `/industries/automotive-heavy-engineering/` — industry hub, lower priority.
13. **12** `/about/` — company narrative; depends on owner-name clarification.
14. **14** `/privacy-policy/` — legal; lawyer review before launch.
15. **15** `/terms/` — legal; lawyer review before launch.

## Scope guardrails (every prompt)

- Each prompt is self-contained — a brand-new agent can execute it from zero knowledge using only the prompt + the repo.
- No prompt invents technical values — all SpecTable rows, grade cells, variant counts, FAQ counts, decision-tree rows come from the referenced brief.
- Every prompt ends with the ≤300-word Report-Back checklist (title + meta chars, counts, VERIFICATION PENDING markers, exit codes, commit hash).
- Legal pages (14, 15) replace §4 product-table scaffolding with H2 clause blocks + explicit `[LAWYER REVIEW REQUIRED]` annotations; §1 Classification Banner does not apply to them.
- The hub page (13) carries CollectionPage, not Product; the quality (11) and about (12) pages carry WebPage / AboutPage.

## Commit discipline

Each prompt expects **ONE coherent commit on `develop`** with the attribution line below. No pushes to origin. `main` is untouched.

```
Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
```
