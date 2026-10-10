# DESIGN.md: Master Semantic Design System
## Project: KP Fasteners (kpfasteners.com)
### Synthesized Taste Directives: `design-taste-frontend` + `design-taste-frontend-v1` + `gpt-taste` + `stitch-design-taste`

---

## 1. DESIGN READ & ATMOSPHERE

> **Visual Atmosphere:**
> **"Heavy Engineering Precision & Architectural Authority"**
> An ultra-high-trust, high-contrast B2B industrial manufacturer interface designed for procurement managers, mechanical engineers, and EPC contractors. Visually grounded in cold forged steel neutrals, warm industrial amber-gold accents, mathematical data density, and razor-sharp typographic hierarchy. Zero decorative SaaS fluff, zero pastel gradients, zero generic placeholder cards.

### Core Dial Calibration:
* **`DESIGN_VARIANCE: 4 / 10`** (Predictable, robust engineering symmetry with selective asymmetric hero and bento rhythms; zero chaotic layouts).
* **`MOTION_INTENSITY: 3 / 10`** (Purposeful, high-performance CSS micro-interactions; 200ms cubic-bezier menu cascades, hover elevation, and hardware-accelerated transforms; zero gratuitous physics or scroll-hijacks).
* **`VISUAL_DENSITY: 6 / 10`** (Data-rich specification density; DIN/ISO/ASTM tolerance matrices, BOM schedules, and metric dimensions given prominence over empty whitespace).

---

## 2. COLOR CALIBRATION & TOKENS

Strictly light-mode locked (`color-scheme: light`). Monochromatic steel foundation with a single high-contrast industrial gold accent. Maximum 1 accent color with saturation < 80%. Every color passes WCAG 2.1 AA (4.5:1 for body copy, 3:1 for large display and UI borders).

| Token Name | Hex / Value | Semantic Role | WCAG Contrast Rating |
| :--- | :--- | :--- | :--- |
| `--bg-main` | `#F8FAFC` (Slate-50) | Main canvas background | Base |
| `--bg-surface` | `#FFFFFF` | Cards, panels, input surfaces | 1.05:1 on canvas |
| `--bg-card-hover` | `#F1F5F9` (Slate-100) | Card hover state, alternating table rows | Subtle tactile feedback |
| `--color-ink` | `#0F172A` (Steel-900) | Primary headings, table values, display type | 17.6:1 on white (AAA) |
| `--color-ink-muted` | `#475569` (Steel-700) | Body prose, secondary descriptions | 7.1:1 on white (AAA) |
| `--color-ink-soft` | `#64748B` (Steel-600) | Captions, table headers, breadcrumbs | 4.8:1 on white (AA) |
| `--color-brand-gold` | `#B45309` (Gold-600) | Primary CTA background, key text accents | 4.6:1 on white (AA) |
| `--color-brand-gold-hover` | `#92400E` (Gold-700) | Primary CTA hover state, active links | 6.8:1 on white (AAA) |
| `--color-brand-gold-soft` | `#FEF3C7` (Gold-100) | OEM badge background, highlighted rows | Tint wash |
| `--color-border` | `#E2E8F0` (Slate-200) | Subtle container and card boundaries | Visual grouping |
| `--color-border-strong` | `#CBD5E1` (Slate-300) | Interactive borders, table grids | 3.1:1 UI threshold |
| `--color-success` | `#15803D` (Green-700) | WhatsApp inquiry button, verified badges | 5.2:1 on white (AA) |

### Hard Color Guardrails:
* **THE LILA BAN:** The "AI Purple / Blue Neon" aesthetic is strictly BANNED. No purple button glows, no violet mesh gradients.
* **THE CONSUMER BEIGE BAN:** Warm craft palettes (`#f5f1ea` beige, `#b08947` brass, `#1a1714` espresso) are BANNED. Industrial hardware demands cold steel and forged amber.
* **NO PURE BLACK:** `#000000` is banned. Use deep forged steel navy `#0F172A`.

---

## 3. TYPOGRAPHIC ARCHITECTURE

Three distinct, non-overlapping font families supplied via `next/font`:

1. **Display & Headings:** `Outfit` (`--font-heading`, Sans-Serif).
   - High mechanical weight, tight letter-spacing (`tracking-tight` to `tracking-tighter`).
   - Line-height locked: `leading-[1.1]` for hero headlines, `leading-[1.2]` for section titles.
   - **The 2-Line Iron Rule (`gpt-taste`):** Hero H1 headlines must NEVER wrap past 2 lines on desktop. Container width must be ultra-wide (`max-w-4xl` to `max-w-5xl`) with fluid clamping (`text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem]`).
2. **Body & Prose:** `Inter` (`--font-sans`, Neutral Sans).
   - `text-base text-steel-700 leading-relaxed max-w-[65ch]`.
3. **Tabular Numerals & Technical Specifications:** `JetBrains Mono` (`--font-mono`, Monospace).
   - Applied to all dimensional data, thread pitches, DIN/ISO numbers, tolerances, and bolt diameters.
   - Enforce `tabular-nums` for numeric column alignment.

### Hard Typography Guardrails:
* **SERIF BAN:** Serif fonts (`Times`, `Georgia`, `Fraunces`, `Instrument Serif`) are strictly BANNED across all industrial pages. Fastener engineering is precision mechanics.
* **ZERO EM-DASHES (`—`) OR EN-DASHES (`–`):**
  - Completely banned in headlines, eyebrows, pills, body, quotes, buttons, alts, and metadata.
  - Prose uses periods, commas, or colons. Ranges (`M12-M72`, `24-72 hrs`, `2024-2026`) use standard hyphens `-`.
* **MIDDLE-DOT RATIONING:** Maximum 1 middle dot (`·`) per line in metadata strips. Multi-standard lists must use commas (`DIN 933, DIN 931, ISO 4017`).
* **ITALIC DESCENDER CLEARANCE:** Any italic display type with descender letters (`y g j p q`) must maintain `leading-[1.1]` minimum and `pb-1` clearance.

---

## 4. LAYOUT PRINCIPLES & AIDA STRUCTURE

Every page is structured around the **AIDA Framework**:

```text
[Attention]  →  Clean Split Hero (Headline ≤ 2 lines + Product Carousel / Blueprint Showcase)
     ↓
[Interest]   →  OEM Manufacturing Product Matrix (Metallic Feature Cards)
     ↓
[Desire]     →  Distribution Catalog Strip (Architectural 2-Column Split) + Technical Standards
     ↓
[Action]     →  Closing Conversion Callout (BOQ Upload / 24-hr Quote SLA / Direct WhatsApp)
```

### Layout Mechanics:
* **Viewport Stability:** Never use `h-screen` for hero sections. Always use `min-h-[100dvh]` or padding ramps (`pt-2 pb-6 md:pt-4 md:pb-8`) to prevent mobile Safari viewport shifts.
* **Top Padding Cap:** Hero top padding capped at `pt-24` (desktop default `pt-4 md:pt-8`). Hero content must never float halfway down the screen.
* **Section-Layout-Repetition Ban:** No two consecutive sections may share the same layout family. A 4-column card grid must be followed by an architectural split, a spec matrix, or a horizontal catalog list.
* **Gapless Bento Grids (`gpt-taste`):** For bento layouts, apply `grid-flow-dense` and mathematically verify zero empty cells.
* **Asymmetric Rhythm:** 3-item related clusters use an asymmetric **1 lead card (col-span-6) + 2 supporting cards (col-span-3 each)** bento layout, completely replacing the generic 3-equal-card AI tell.
* **Desktop Navigation Cap:** Navigation must render on a single line at desktop with height capped at `80px` (`h-[72px] lg:h-20`).

---

## 5. COMPONENT ARSENAL & INTERACTIVE STATES

### A. Buttons (`components/ui/Button.tsx`)
* **Primary (`.btn-primary`):** Forged gold gradient (`linear-gradient(135deg, #D97706, #B45309)`), white bold Outfit text, subtle gold shadow. Hover: `translate-y-[-2px]`, brightness boost. Active: `scale-[0.98]`.
* **Secondary (`.btn-secondary`):** White background, Slate-300 border, Slate-800 text. Hover: Slate-100 wash, Slate-600 border.
* **WhatsApp (`.btn-whatsapp`):** High-contrast emerald green (`#15803D`), white text, instant message prefill.
* **Tactile Feedback:** Every interactive button simulates a mechanical press on `:active` (`scale-[0.98]`).
* **Button Wrap Ban:** Button text must never wrap to 2 lines at desktop. Labels must be concise (1 to 3 words).

### B. Cards & Containers (`components/ui/Card.tsx`)
* **Metallic Card (`.metallic-card`):** White background, 1px Slate-200 border, 3px top gold gradient indicator, 14px border radius. Used for OEM manufactured products.
* **Architectural Split Card:** Two-column container with left sticky summary and right divided catalog list. Used for partner distribution SKUs.
* **Glassmorphism Panels:** Used strictly as overlays on media containers with 1px inner border (`border-white/20`) and solid white fallbacks for accessibility.

### C. Technical Spec Tables (`components/ui/SpecTable.tsx`)
* Horizontal scroll container with rounded corners and subtle border.
* Sticky first column (`sticky left-0 bg-surface z-10`) so row labels stay visible during horizontal panning on mobile.
* Tabular figures (`font-mono tabular-nums text-ink`) for aligned engineering comparison.
* **No Scroll Cue Text:** Zero `"Swipe table horizontally →"` text cues. The UI communicates affordance through natural container shadows.

### D. Form Patterns (`components/forms/RFQForm.tsx`)
* Step-by-step numbered workflow: 1. Specifications & Drawing Upload → 2. Contact & Delivery Pin.
* Labels strictly above inputs (`text-xs font-bold uppercase tracking-wider`).
* Built-in serverless honeypot for bot trapping.
* Progressive WebMCP tool registration (`request_fastener_quote`) for AI-agentic browser procurement.

---

## 6. MOTION & MICRO-INTERACTION PHILOSOPHY

* **Performance First:** Animate exclusively via `transform` and `opacity`. Never animate `top`, `left`, `width`, or `height`.
* **Zero CLS / Zero Layout Shift:** All micro-animations use pure CSS keyframes with `cubic-bezier(0.16, 1, 0.3, 1)`.
* **Dropdown & Drawer Menus:** Smooth 200ms slide-down with opacity fade.
* **Hover Physics:** Interactive cards scale subtly (`hover:scale-[1.02]` to `hover:scale-105`) inside `overflow-hidden` containers.
* **Accessible Motion:** All motion automatically respects `prefers-reduced-motion: reduce`.

---

## 7. EXPLICIT ANTI-PATTERNS & AI TELLS (BANNED LIST)

The following patterns are strictly banned from KP Fasteners:

| Forbidden Pattern | Why It Is Banned | Correct Industrial Replacement |
| :--- | :--- | :--- |
| **Em-dashes (`—`) & En-dashes (`–`)** | The #1 LLM stylistic tell | Use commas, colons, periods, or standard hyphens `-` |
| **Emojis in code/content** | Unprofessional in industrial procurement | Phosphor, Radix, or Lucide SVG icons |
| **"Section 01" / "Question 05" Labels** | Cheap programmatic meta-tags | Natural semantic topic titles |
| **3 Equal Feature Cards in a row** | Generic template tell | Asymmetric 1+2 bento grid or 2-column zig-zag |
| **Sequential Card Grid Repetition** | Visual monotony and scroll fatigue | Alternating layout families (cards → split list → matrix) |
| **Text Scroll Cues ("Scroll to explore")** | Amateur visual filler | Clean viewport padding and natural visual cutoffs |
| **3+ Middle Dot Chains (`· · ·`)** | Punctuation clutter | Commas or pill badges |
| **Generic Avatars / "John Doe"** | Destroys credibility | Real verified plant credentials, MTC 3.1, GSTIN |
| **Div-based Fake UI Screenshots** | Hallucinated product preview | High-res WebP photography of actual fasteners |
| **Purple/Neon Gradients** | Consumer AI slop | Forged steel navy `#0F172A` and industrial gold `#B45309` |
| **Overwrapped H1s (4-6 lines)** | Container width failure | Ultra-wide containers, H1 clamped to ≤ 2 lines |

---

## 8. GOOGLE STITCH SCREEN GENERATION PROMPTS

Use the following semantic prompts when prompting Google Stitch, Gemini, or Claude to generate new screens for KP Fasteners:

### Screen Prompt: Product Detail Page
```text
Generate a high-contrast industrial fastener product page for KP Fasteners (kpfasteners.com).
Atmosphere: Heavy Engineering Precision.
Palette: Deep steel navy (#0F172A), slate canvas (#F8FAFC), industrial gold accent (#B45309).
Typography: Outfit for headings (bold, tight tracking), Inter for body, JetBrains Mono for specs.
Layout: 
1. Header: Single-line sticky navbar with brand logo, product categories, and gold RFQ button.
2. Hero: Split layout. Left: H1 (max 2 lines), category badge (In-House OEM), 20-word procurement summary, primary 'Request RFQ' and secondary 'WhatsApp' buttons. Right: High-resolution cutout of the fastener with subtle metallic border.
3. Specifications Matrix: Responsive technical table with sticky first column showing DIN/ISO standards, property classes, thread pitches, and surface finishes.
4. Application Grid: Asymmetric 1+2 bento grid showing real-world engineering sectors.
5. Bottom CTA: High-contrast RFQ drawing upload box with 24-hr quote guarantee.
Strict Rules: Zero emojis, zero em-dashes, zero en-dashes, no purple gradients, no centered hero.
```

### Screen Prompt: Industry Solutions Page
```text
Generate a B2B solar mounting fastener procurement page for KP Fasteners.
Atmosphere: Industrial Infrastructure & Structural Integrity.
Components:
- Sticky navigation bar with hotline phone link and catalog mega menu.
- Left-aligned hero with solar MMS fastener preview and direct BOQ upload CTA.
- Bill of Materials schedule table comparing Rooftop vs Ground-Mount vs Tracker fastener specs.
- Asymmetric 3-card related product showcase linking to Foundation Bolts, Hex Flange Bolts, and Stainless Steel Hardware.
- Server-side quotation form with technical blueprint file upload zone.
Strict Rules: All numbers in JetBrains Mono tabular-nums, WCAG AA 4.5:1 contrast, single accent color (gold-600).
```
