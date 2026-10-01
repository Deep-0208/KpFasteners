# Design System — KP Fasteners

**Basis:** the KP Fasteners logo (metallic silver "K" formed from a wrench + metallic gold "P" formed from a threaded screw + gold "KP FASTENERS" wordmark) sitting on a very light off-white ground with a subtle grey dotted world-map pattern (from the business card). This is the visual DNA. The website's design system is built to feel like a natural extension of that mark.

**Theme:** light / off-white first. No dark-mode-first UI. Dark mode is out of scope for v1 (can be added later without changing the tokens).

---

## 1. Design intent

- **Industrial, precise, premium, quiet.** Not SaaS-glossy, not consumer-cheerful.
- **The page is the datasheet.** Typography, tables, and spacing carry the trust — not gradients, glows, or motion.
- **Colour discipline.** One brand accent (gold) used sparingly on CTAs, one supporting accent (steel/silver-blue) for structural elements. Rest is high-contrast neutrals.
- **Metallic finishes stay in imagery.** The logo carries the silver + gold gloss; the UI itself uses flat, print-safe versions of those hues.

## 2. Colour tokens (all light-theme, WCAG 2.1 AA validated)

> **Palette updated 2026-09-30 to match the client-approved demo at
> `C:\Users\DELL\Desktop\kpfastner_old`.** The earlier logo-extracted palette
> is documented for the record in [`design-palette-extraction.md`](design-palette-extraction.md).
> Pair-by-pair contrast against the new palette: [`design-contrast-report.md`](design-contrast-report.md).

Two naming schemes are exposed. Ramp tokens (`--gold-*`, `--steel-*`) are the
canonical values; semantic aliases (`--color-*`) resolve to ramp tokens and are
kept so existing utility classes keep working.

### Ramp — gold (logo 'P' screw + embossed wordmark)

| Token | Hex |
|---|---|
| `--gold-50`  | `#FFFDF5` |
| `--gold-100` | `#FEF3C7` |
| `--gold-200` | `#FDE68A` |
| `--gold-300` | `#FCD34D` |
| `--gold-400` | `#F59E0B` |
| `--gold-500` | `#D97706` |
| `--gold-600` | `#B45309` |
| `--gold-700` | `#92400E` |
| `--gold-800` | `#78350F` |
| `--gold-gradient` | `linear-gradient(135deg,#F59E0B 0%,#D97706 60%,#92400E 100%)` |

### Ramp — steel (logo 'K' wrench / high-alloy steel)

| Token | Hex |
|---|---|
| `--steel-50`…`--steel-900` | `#FFFFFF #F8FAFC #F1F5F9 #E2E8F0 #CBD5E1 #94A3B8 #64748B #475569 #334155 #0F172A` |
| `--chrome-gradient` | `linear-gradient(135deg,#475569 0%,#1E293B 50%,#0F172A 100%)` |

### Semantic aliases

| Token | Resolves to | Role |
|---|---|---|
| `--color-bg` | `--bg-main` (`#F8FAFC`) | Page background. |
| `--color-surface` | `--bg-surface` (`#FFFFFF`) | Card / panel surface. |
| `--color-surface-alt` | `--bg-card-hover` (`#F1F5F9`) | Section alt band. |
| `--color-border` | `--border-subtle` (`#E2E8F0`) | Hairline borders. |
| `--color-border-strong` | `--steel-600` (`#64748B`) | Interactive border. Deviation: task-listed mapping was `--border-medium` but that failed 3:1 UI, so we ramp one step darker. |
| `--color-ink` | `--steel-900` (`#0F172A`) | Body text. |
| `--color-ink-muted` | `--steel-700` (`#475569`) | Secondary text. |
| `--color-ink-soft` | `--steel-600` (`#64748B`) | Large caption / meta only. |
| `--color-brand-gold` | `--gold-600` (`#B45309`) | Primary gold. Deviation: task-listed mapping was `--gold-500` but that failed 4.5:1 for white-on-gold buttons and gold-on-white accent text; nudged one step per the "next darker gold" rule. |
| `--color-brand-gold-hover` | `--gold-700` (`#92400E`) | Hover / active. |
| `--color-brand-gold-soft` | `--gold-100` (`#FEF3C7`) | Gold wash. |
| `--color-brand-gold-strong` | `--gold-700` (`#92400E`) | Gold-on-gold-soft body text. |
| `--color-brand-steel` | `--steel-800` (`#334155`) | Heading / secondary. |
| `--color-brand-steel-soft` | `--steel-200` (`#F1F5F9`) | Steel wash. |
| `--color-brand-silver` | `--steel-500` (`#94A3B8`) | Iconography. |
| `--color-brand-silver-soft` | `--steel-300` (`#E2E8F0`) | Trading-banner background. |
| `--color-focus` | `--accent-cyan` (`#0284C7`) | Focus ring on gold surfaces. |
| `--color-success` | `--accent-green` (`#047857`, nudged from `#059669` for AA) | Form success. |
| `--color-warning` | `--gold-700` (`#92400E`) | Verification-required banner. |
| `--color-danger` | `--accent-red` (`#DC2626`) | Form error. |

The primary CTA sits on `--gold-gradient` (`#F59E0B → #D97706 → #92400E`), so
white labels pass 4.5:1 across the whole sweep. Focus ring stays gold on light
surfaces and switches to `--color-focus` on gold surfaces via `data-on-gold`.

**All 30 foreground × background pairs actually used in the UI pass WCAG AA. See the report.**

## 3. Typography

Three-font system, self-hosted via `next/font/google`:

- **Body sans (`--font-sans`):** Inter (400/500/600/700).
- **Display / headings (`--font-heading`):** Outfit (600/700/800). Applied to all headings, `.btn` labels, and top-nav / footer titles.
- **Monospace (`--font-mono`):** JetBrains Mono (400/500/600); used inside `.mono-numbers` / spec-table cells only.
- **Base body:** 16 px / 1.6 line height, `--color-ink`.
- **Ramp (mobile → desktop):**

| Role | Class ramp |
|---|---|
| Hero H1 | `text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight` |
| Section H2 | `text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight` |
| Subsection H3 | `text-xl sm:text-2xl md:text-3xl font-semibold` |
| Card title | `text-lg sm:text-xl font-semibold` |
| Body | `text-base leading-7` |
| Small / caption | `text-sm text-[color:var(--color-ink-muted)]` |
| Spec-table cell | `text-sm font-mono tabular-nums` |

Never skip a heading level.

## 4. Spacing, layout, containers

- Container max width: `max-w-7xl`, `px-4 sm:px-6 lg:px-8`.
- Section vertical padding: `py-12 md:py-16 lg:py-24`.
- Grid gaps: `gap-4 sm:gap-6 md:gap-8`.
- Alternating section backgrounds: `bg-[--color-bg]` ↔ `bg-[--color-surface]` (see Honeywell lesson).

## 5. Component library (to be built in `components/ui/`)

| Component | Responsibility | Notes |
|---|---|---|
| `<Container>` | Consistent max-width + padding | RSC |
| `<Section>` | Wraps a page section, handles vertical padding + alt-bg pattern | RSC, `variant="default" \| "alt"` |
| `<Heading>` | Renders correct semantic level + ramp | RSC, `as` prop enforces level |
| `<Prose>` | Long-form content styling | RSC |
| `<Button>` | Primary / secondary / ghost, min 48 × 48 px | RSC where possible |
| `<CTAStrip>` | Phone + WhatsApp + RFQ button, sticky-friendly | Leaf client only if sticky-scroll behaviour required |
| `<Breadcrumbs>` | Renders `BreadcrumbList` schema + visible UI in one component | RSC, takes route array |
| `<SpecTable>` | Responsive horizontal-scroll table with tabular-nums | RSC |
| `<GradeTable>` | Materials grade comparison table | RSC |
| `<Card>` | Product / material / industry card | RSC |
| `<Accordion>` | FAQ; native `<details>` under the hood | RSC-safe (no state) |
| `<RFQForm>` | Client component, server-action-backed | `'use client'` leaf |
| `<MobileConversionBar>` | Sticky bottom bar on mobile with phone + WhatsApp + RFQ | Client leaf |
| `<MegaMenu>` / `<MobileMenu>` | Header nav | Mobile drawer is a client leaf; desktop menu is CSS-only where possible |
| `<VerificationRequired>` | Yellow inline banner used on staging where a `[VERIFICATION REQUIRED: …]` block would sit | RSC |

Do **not** ship each of these as a heavy generic UI kit — one file per component, single responsibility.

## 6. Iconography

- Single icon library: `lucide-react`.
- No emoji in UI copy.
- Product-category icons: prefer real photography over icon glyphs; use lucide only for utility icons (phone, chat, download, upload, chevron).

## 7. Imagery style

- Product photography on `--color-bg` or `--color-surface`, soft directional light, real KP items.
- Facility photography wide, human-scale, cropped to remove sensitive company info.
- No stock photos of "generic engineers pointing at drawings".
- Every image: kebab-case filename, WebP/AVIF, explicit width/height, meaningful alt text (see [`content-strategy.md` §10](content-strategy.md#10-image-content-requirements)).

## 8. Motion

- Prefers-reduced-motion respected everywhere.
- Only micro-transitions: hover colour shift on buttons/links, accordion expand, drawer slide. No parallax, no Lottie, no scroll-jack.
- Avoid Framer Motion unless a real requirement appears — CSS transitions cover this scope.

## 9. Focus + interactive state

- `:focus-visible` ring: 2 px `--color-focus`, 2 px offset, radius 4 px.
- Never `outline: none` without replacement.
- Buttons have a distinct pressed state (translate 1 px + darker gold).
- Links inside body prose: underline default, `--color-brand-steel` colour on hover.

## 10. Dos / don'ts

**Do:**
- Trust the logo. Silver + gold + off-white already carries the brand.
- Use tables aggressively — they're where the trust lives.
- Ship real photos.
- Keep motion under 200 ms.
- Use the gold gradient on the primary CTA and hero headline (`.text-gold-gradient`, `.btn-primary`), the metallic-card gold top-strip, and the subtle radial glow + 48px grid on the body. These are approved by the client.

**Don't:**
- No purple/pink gradients. The gold and chrome gradients defined in
  `globals.css` are the only sanctioned gradients — do not invent others.
- No hero video autoplay.
- No stock-render fastener imagery.
- No dark mode on v1.
- No brand-colour dilution — gold is the one accent.
