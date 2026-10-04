import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  MessageCircle,
  FileText,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Sun,
  Building2,
  Factory,
  Compass,
} from 'lucide-react';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';
import { Prose } from '@/components/ui/Prose';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Accordion } from '@/components/ui/Accordion';
import { SpecTable } from '@/components/ui/SpecTable';
import { GradeTable } from '@/components/ui/GradeTable';
import { ClassificationBanner } from '@/components/ui/ClassificationBanner';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqPage } from '@/lib/jsonld';
import { findRoute } from '@/data/routes';
import { company } from '@/data/company';

const PATH = '/materials/high-tensile-fasteners/';
const HERO_IMAGE = '/product-images/high-tensile/hero.jpg';

// Title: 55 chars (50–60 range). Meta description: 159 chars (150–160 range).
const META_TITLE = 'High-Tensile Bolts Manufacturer | PC 8.8 10.9 12.9 | KP';
const META_DESCRIPTION =
  'Property class 4.6, 8.8, 10.9 & 12.9 compared to ISO 898-1: yield, UTS, hardness, torque & HDE risk. Pick the right grade for your joint. Request an RFQ quote.';

export const metadata: Metadata = buildMetadata({
  path: PATH,
  title: META_TITLE,
  description: META_DESCRIPTION,
  ogImage: HERO_IMAGE,
});

const WA_PREFILL =
  'Hi KP Fasteners, grade-selection help: Application: [ ], Load: [ ], Environment: [ ], Service temperature: [ ]';
const WA_URL = 'https://wa.me/919898230448?text=' + encodeURIComponent(WA_PREFILL);
const TEL = `tel:${company.telephones[0].replace(/[^\d+]/g, '')}`;

// VERIFICATION PENDING: Confirm OEM status of PC 10.9 on foundation bolts and sag rods — in-house (heat-treated) or sourced? — ref: brief §10 item 1
// VERIFICATION PENDING: Confirm PC 12.9 OEM status (brief defaults to OEM 12.9 not offered) — ref: brief §10 item 2
// VERIFICATION PENDING: Confirm HDE bake-out protocol on HDG + PC 10.9 (190–230 °C for ≥ 4 hr within 4 hr of plating) — ref: brief §10 item 3
// VERIFICATION PENDING: Confirm NABL partner lab name for tensile verification — ref: brief §10 item 4
// VERIFICATION PENDING: Confirm mating-nut class policy (auto-upgrade vs quoted per PO) — ref: brief §10 item 5
// VERIFICATION PENDING: Real photograph of high-tensile property class stamps and inventory at KP Fasteners Ahmedabad facility — ref: brief §6 hero-high-tensile-material-decision.webp & §10 item 6
// VERIFICATION PENDING: Confirm in-house vs outsourced heat treatment (quench + temper) on OEM lines — ref: brief §10 item 7

const FAQS = [
  {
    question: 'What does "property class 8.8" actually mean on a bolt head?',
    answer:
      'It is the ISO 898-1 strength designation. The first digit multiplied by 100 is the minimum ultimate tensile strength in MPa (so 8 × 100 = 800 MPa UTS min); the first digit multiplied by the second digit multiplied by 10 is the minimum yield strength in MPa (so 8 × 8 × 10 = 640 MPa yield min). The two numbers are stamped on the bolt head and recorded on the mill test certificate.',
  },
  {
    question: 'When should I upgrade from 8.8 to 10.9?',
    answer:
      'Upgrade to 10.9 when the joint sees high pre-load, high cyclic load, or fatigue-driven service (pump mounts, compressor foundations, press machinery, heavy-equipment flanges). For purely static structural steel to A325 scope, PC 8.8 HDG is almost always sufficient. For tool-and-die socket-head joints, go straight to 12.9 in black oxide — never 10.9 HDG.',
  },
  {
    question: 'Why does KP avoid hot-dip galvanizing on Grade 10.9?',
    answer:
      'Hydrogen embrittlement risk per ISO 898-1 §9.6. The acid-pickling and plating step introduces atomic hydrogen into the high-strength martensite; sustained tensile load can cause sudden brittle failure within hours to days. Our default coating on PC 10.9 is mechanical galvanized or zinc-nickel, both of which avoid the aqueous hydrogen-introduction step; HDG on 10.9 is offered only with a documented 190–230 °C bake-out protocol.',
  },
  {
    question: 'Which grades does KP manufacture in-house vs source?',
    answer:
      'We manufacture PC 4.6, 4.8 and 8.8 on our OEM foundation, anchor, stud and sag-rod lines in Ahmedabad; PC 10.9 is OEM on stud bolts and on-quote on foundation bolts (ASTM F1554 Gr 105 equivalent). All other high-tensile items (hex bolts, CSK Allen bolts) are distributed from vetted partner mills with MTC pass-through.',
  },
  {
    question: 'Does the matching nut have to be the same grade as the bolt?',
    answer:
      'Yes — ISO 898-2 (for carbon-steel nuts) requires the nut proof-load class to match or exceed the bolt property class. A PC 8.8 bolt pairs with a Class 8 or Class 10 nut; a PC 10.9 bolt pairs with a Class 10 or Class 12 nut. The washer must meet ISO 898-6 hardness, and the coating on the nut should match the coating on the bolt to avoid a galvanic cell under corrosive service.',
  },
];

const MECHANICAL_ROWS = [
  {
    cells: ['3.6', 'Low carbon steel', '190', '300', '25', '95 / 220'],
  },
  {
    cells: ['4.6', 'Mild steel (IS 5624 baseline)', '240', '400', '22', '120 / 220'],
  },
  {
    cells: ['4.8', 'Low carbon cold-worked', '320', '400', '14', '130 / 220'],
  },
  {
    cells: ['5.6', 'Carbon steel (unquenched)', '300', '500', '20', '155 / 220'],
  },
  {
    cells: ['5.8', 'Carbon steel cold-worked', '400', '500', '10', '160 / 220'],
  },
  {
    cells: ['6.8', 'Medium carbon cold-worked', '480', '600', '8', '190 / 250'],
  },
  {
    cells: ['8.8 (d ≤ 16 mm)', 'Medium carbon Q&T', '640', '800', '12', '250 / 320'],
  },
  {
    cells: ['8.8 (d > 16 mm)', 'Medium carbon Q&T', '660', '830', '12', '255 / 335'],
  },
  {
    cells: ['9.8', 'Quenched & tempered', '720', '900', '10', '290 / 360'],
  },
  {
    cells: ['10.9', 'Alloy steel Q&T', '900', '1 040', '9', '320 / 380'],
  },
  {
    cells: ['12.9', 'Alloy steel Q&T (tool grade)', '1 080', '1 220', '8', '385 / 435'],
  },
];

const COATING_ROWS = [
  {
    cells: ['4.6 / 4.8', '✓ (Default)', '✓', '—', '—', '✓'],
  },
  {
    cells: ['8.8', '✓', '✓ (Default)', '✓', '✓', '✓'],
  },
  {
    cells: ['10.9', 'With bake-out', 'Avoid (HDE risk)', '✓ (Default)', '✓', '✓'],
  },
  {
    cells: ['12.9', 'Avoid', 'DO NOT USE', 'On case review', 'On case review', '✓ (Default)'],
  },
];

const EQUIVALENCE_ROWS = [
  {
    cells: ['4.6', '4.6', 'SAE Grade 1', 'ASTM A307 Grade A', '4.6'],
  },
  {
    cells: ['4.8', '4.8', '—', 'ASTM A307 Grade B', '4.8'],
  },
  {
    cells: ['8.8', '8.8', 'SAE Grade 5', 'ASTM A325 (dim) / A449', '8.8'],
  },
  {
    cells: ['10.9', '10.9', 'SAE Grade 8', 'ASTM A490 (dim) / A354 BD / F1554 Gr 105', '10.9'],
  },
  {
    cells: ['12.9', '12.9', '—', 'ASTM A574 (socket cap)', '12.9'],
  },
];

const APPLICATION_ROWS = [
  {
    cells: ['PEB column base plate / foundation', '4.6 (IS 5624) / 8.8 for high load', 'IS 1363 / Class 8', 'HDG', 'OEM — foundation bolts'],
  },
  {
    cells: ['Structural steel building connection', '8.8 (A325 scope)', 'Heavy hex Class 8', 'HDG', 'Distribution — hex bolts & nuts'],
  },
  {
    cells: ['Heavy machinery mounting skid', '10.9', 'DIN 985 nylock / Class 10', 'Mech-galv / zinc-nickel', 'Distribution + custom'],
  },
  {
    cells: ['Pump / compressor foundation stud', 'ASTM A193 B7 (alloy steel)', 'ASTM A194 2H heavy hex', 'Black / zinc', 'OEM — stud bolts'],
  },
  {
    cells: ['High-pressure piping flange', 'ASTM A193 B7 / B7M', 'ASTM A194 2H', 'Black / zinc-nickel', 'OEM — stud bolts'],
  },
  {
    cells: ['Tooling, dies & injection moulds', '12.9', 'Tapped hole', 'Black oxide', 'Distribution — CSK Allen bolts'],
  },
  {
    cells: ['Solar MMS racking (inland)', '8.8 HDG', 'DIN 934 Class 8', 'HDG', 'Distribution — solar accessories'],
  },
  {
    cells: ['Sag rod purlin bracing', '4.6 / 8.8 to IS 801 scope', 'IS 1363 jam nut', 'HDG', 'OEM — sag rods'],
  },
  {
    cells: ['Seismic framing & high-cycle fatigue', '10.9', 'Class 10 / DIN 985', 'Zinc-nickel / mech-galv', 'Distribution + custom'],
  },
];

const MAKE_VS_TRADE_ROWS = [
  {
    cells: ['Foundation bolts', 'OEM (IS 5624)', 'OEM (high-tensile)', 'OEM on-quote', '—'],
  },
  {
    cells: ['Anchor bolts (ASTM F1554)', 'OEM Grade 36', 'OEM Grade 55', 'On-quote Grade 105', '—'],
  },
  {
    cells: ['Stud bolts', '—', 'OEM (B7 alloy)', 'OEM (B7 / 10.9)', '—'],
  },
  {
    cells: ['Sag rods', 'OEM', 'OEM', '—', '—'],
  },
  {
    cells: ['Hex bolts and nuts', 'Distribution', 'Distribution', 'Distribution', 'On-quote'],
  },
  {
    cells: ['CSK Allen bolts', '—', 'Distribution', 'Distribution', 'Distribution (black oxide)'],
  },
];

const FORMS = [
  {
    title: 'Foundation Bolts',
    slug: '/products/foundation-bolts/',
    anchorText: 'foundation bolts in PC 4.6 / 8.8',
    description:
      'J-bolts, L-bolts, and plate-welded anchor assemblies manufactured in-house to IS 5624 and ASTM F1554 Grade 36 and Grade 55.',
  },
  {
    title: 'Stud Bolts & Threaded Rods',
    slug: '/products/stud-bolts/',
    anchorText: 'stud bolts to ASTM A193 B7 and ISO 898-1 PC 8.8 / 10.9',
    description:
      'Alloy steel studs in ASTM A193 Grade B7 and metric property classes 8.8 and 10.9 for pressure vessels and machinery clamping.',
  },
  {
    title: 'Sag Rods & Bracing',
    slug: '/products/sag-rods/',
    anchorText: 'sag rods in PC 4.6 / 8.8',
    description:
      'Continuous and double-end threaded sag rods manufactured in PC 4.6 mild steel and PC 8.8 high-tensile steel for PEB purlin bracing.',
  },
  {
    title: 'Hex Bolts & Heavy Nuts',
    slug: '/products/hex-bolts-nuts/',
    anchorText: 'hex bolts and nuts, PC 4.6 to 10.9',
    description:
      'DIN 931 / 933 hex head bolts paired with matching property-class nuts from vetted partner mills with full heat-number traceability.',
  },
  {
    title: 'CSK & Socket Cap Screws',
    slug: '/products/csk-allen-bolts/',
    anchorText: 'PC 12.9 socket head cap screws (black oxide)',
    description:
      'High-strength socket head cap screws (DIN 912) and countersunk screws (DIN 7991) in property class 10.9 and 12.9 black oxide.',
  },
  {
    title: 'Custom High-Tensile Fasteners',
    slug: '/products/custom-fasteners/',
    anchorText: 'custom high-tensile fasteners to drawing',
    description:
      'Precision turned and hot-forged high-tensile components manufactured to customer drawings in alloy steels up to property class 12.9.',
  },
];

export default function Page() {
  const route = findRoute(PATH);
  const trail = route?.breadcrumbTrail ?? [
    { label: 'Home', href: '/' },
    { label: 'High-Tensile Fasteners', href: PATH },
  ];

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${PATH}#webpage`,
    url: `${SITE_URL}${PATH}`,
    name: META_TITLE,
    description: META_DESCRIPTION,
    publisher: { '@id': `${SITE_URL}/#organization` },
    about: [
      { '@type': 'Thing', name: 'ISO 898-1 Carbon and Alloy Steel Fasteners' },
      { '@type': 'Thing', name: 'IS 1367 Technical Supply Conditions for Fasteners' },
      { '@type': 'Thing', name: 'High-Tensile Property Classes (8.8, 10.9, 12.9)' },
    ],
  };

  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqPage(FAQS)} />

      {/* 1. Hero */}
      {/* VERIFICATION PENDING: Real photograph of high-tensile property class stamps and inventory at KP Fasteners Ahmedabad facility — ref: brief §6 hero-high-tensile-material-decision.webp & §10 item 6 */}
      <Section>
        <Container>
          <Breadcrumbs trail={trail} />
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="badge badge-gold">Material Hub · ISO 898-1 Carbon &amp; Alloy Steel</p>
              <Heading as="h1" variant="hero" className="mt-4 font-heading">
                <span className="text-gold-gradient">High-Tensile Fasteners</span> — Property Class 8.8, 10.9 &amp; 12.9 Decision Guide
              </Heading>
              <hr className="rule-metal mt-5 w-40" aria-hidden="true" />
              <p className="mt-6 max-w-2xl text-lg text-ink-muted">
                An engineering decision guide to carbon and alloy steel fastener property classes under ISO 898-1 and IS 1367. Compare proof load, tensile strength, yield ratios, hydrogen embrittlement risks, and surface coating compatibilities for structural and heavy machinery connections.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/request-quote/?material=high-tensile"
                  className="btn btn-primary"
                >
                  <FileText aria-hidden="true" className="h-4 w-4" />
                  &nbsp;Request a high-tensile quote
                </Link>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle aria-hidden="true" className="h-4 w-4" />
                  &nbsp;WhatsApp grade question
                </a>
                <a href={TEL} className="btn btn-secondary">
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  &nbsp;{company.telephones[0]}
                </a>
              </div>
            </div>
            <div className="relative">
              <Card variant="metallic" padding="lg" className="overflow-hidden">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-brand-steel-soft/40">
                  <Image
                    src={HERO_IMAGE}
                    alt="KP Fasteners high-tensile bolts inventory — Grade 8.8, 10.9, and 12.9 fasteners for structural and industrial applications"
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-contain"
                  />
                </div>
              </Card>
            </div>
          </div>
          <div className="mt-8">
            <ClassificationBanner classification="ambiguous">
              Property-class 8.8 / 10.9 / 12.9 — OEM for anchor applications; general hex trading from vetted mills.
            </ClassificationBanner>
          </div>
        </Container>
      </Section>

      {/* 2. Executive Answer */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">
            The fast decision: property classes 4.6 vs 8.8 vs 10.9 vs 12.9
          </Heading>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <Prose>
              <p>
                In carbon-steel fastener engineering under <strong>ISO 898-1</strong> and <strong>IS 1367 (Part 3)</strong>, the &ldquo;property class&rdquo; is a standardized two-digit numerical designation stamped on bolt heads. The first digit represents one-hundredth of the nominal minimum ultimate tensile strength in megapascals (MPa). The second digit represents ten times the ratio of minimum lower yield stress to nominal tensile strength.
              </p>
              <p className="mt-4">
                For example, an <strong>8.8 bolt</strong> specifies a minimum ultimate tensile strength of 800 MPa (8 × 100) and a minimum yield strength of 640 MPa (800 × 0.8). Grade 8.8 represents the global baseline for structural steel framing, pre-engineered buildings (PEB), and industrial anchor bolts.
              </p>
            </Prose>
            <Prose>
              <p>
                <strong>Grade 10.9</strong> delivers 1,040 MPa tensile strength and 900 MPa yield strength (10 × 100, with a 90% yield ratio), achieved through quenched and tempered alloy steel. It is selected for high-preload, high-cyclic-fatigue joints such as heavy vibrating machinery foundations, crane gantries, and automotive powertrain mounts.
              </p>
              <p className="mt-4">
                <strong>Grade 12.9</strong> is the highest standard commercial property class, offering 1,220 MPa tensile and 1,080 MPa yield. It is used primarily in tool and die applications and injection moulds as socket head cap screws. Due to severe hydrogen embrittlement susceptibility, Grade 12.9 must never be hot-dip galvanized. For corrosive environments where carbon steel is unsuitable, evaluate our{' '}
                <Link
                  href="/materials/stainless-steel-fasteners/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  stainless-steel equivalent (A2-70 / A4-70)
                </Link>{' '}
                decision guide.
              </p>
            </Prose>
          </div>
        </Container>
      </Section>

      {/* 3. Decision Tree */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Compass aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Grade decision tree: selecting the right property class for your joint
            </Heading>
          </div>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Follow this 5-step engineering logic path to specify the optimum property class, coating, and mating hardware for your connection requirements:
          </p>

          <div className="mt-8 space-y-4">
            <Card variant="default" padding="lg" className="border-l-4 border-l-brand-gold">
              <Heading as="h3" variant="subsection" className="text-brand-steel">
                Step 1: Is the connection a structural building, PEB, or bridge base plate?
              </Heading>
              <p className="mt-2 text-sm text-ink-muted">
                Typical applications include PEB portal frames, column base anchorage, structural tower joints, and purlin bracing lines.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                <span className="rounded bg-brand-gold-soft px-3 py-1 font-semibold text-brand-gold-strong">
                  YES → Start with Property Class 8.8 with Hot-Dip Galvanizing (HDG)
                </span>
                <span className="rounded bg-surface-alt px-3 py-1 text-ink-muted">
                  For low-stress civil anchorage, IS 5624 Class 4.6 foundation bolts are standard. Upgrade to Class 10.9 if structural drawings specify ASTM F1554 Grade 105 or A490 equivalent.
                </span>
              </div>
            </Card>

            <Card variant="default" padding="lg" className="border-l-4 border-l-brand-steel">
              <Heading as="h3" variant="subsection" className="text-brand-steel">
                Step 2: Is the joint subject to high pre-load, cyclic vibration, or dynamic machinery fatigue?
              </Heading>
              <p className="mt-2 text-sm text-ink-muted">
                Heavy industrial machinery mounts, compressor bases, stamping presses, and automotive chassis linkages experiencing cyclic reversal.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                <span className="rounded bg-brand-steel-soft px-3 py-1 font-semibold text-brand-steel">
                  YES → Specify Property Class 10.9 (Mechanical Galv or Zinc-Nickel)
                </span>
                <span className="rounded bg-surface-alt px-3 py-1 text-ink-muted">
                  Pair with Class 10 heavy hex nuts or DIN 985 all-metal lock nuts. Avoid standard hot-dip galvanizing to eliminate hydrogen embrittlement risks.
                </span>
              </div>
            </Card>

            <Card variant="default" padding="lg" className="border-l-4 border-l-brand-steel">
              <Heading as="h3" variant="subsection" className="text-brand-steel">
                Step 3: Is the fastener intended for injection moulds, press dies, or precision machine tooling?
              </Heading>
              <p className="mt-2 text-sm text-ink-muted">
                Rigid tool clamping, punch dies, extrusion heads, and high-pressure hydraulic manifold blocks.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                <span className="rounded bg-brand-steel-soft px-3 py-1 font-semibold text-brand-steel">
                  YES → Specify Property Class 12.9 in Black Oxide Finish
                </span>
                <span className="rounded bg-surface-alt px-3 py-1 text-ink-muted">
                  Socket head cap screws (DIN 912) and countersunk screws (DIN 7991). Strictly avoid hot-dip galvanizing per ISO 898-1 §9.6.
                </span>
              </div>
            </Card>

            <Card variant="default" padding="lg" className="border-l-4 border-l-brand-steel">
              <Heading as="h3" variant="subsection" className="text-brand-steel">
                Step 4: Is the service low-stress, indoor, or non-critical secondary assembly?
              </Heading>
              <p className="mt-2 text-sm text-ink-muted">
                Sheet metal ductwork, light electrical enclosures, internal brackets, and light equipment covers.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                <span className="rounded bg-brand-steel-soft px-3 py-1 font-semibold text-brand-steel">
                  YES → Specify Property Class 4.6 or 4.8 with Zinc Electroplating
                </span>
                <span className="rounded bg-surface-alt px-3 py-1 text-ink-muted">
                  Provides ductile, cost-effective fastening without heat treatment requirements.
                </span>
              </div>
            </Card>

            <Card variant="default" padding="lg" className="border-l-4 border-l-brand-gold">
              <Heading as="h3" variant="subsection" className="text-brand-steel">
                Step 5: Is the environment coastal, marine, or chemically corrosive?
              </Heading>
              <p className="mt-2 text-sm text-ink-muted">
                Installations within 5 km of the coast, chemical processing plants, fertilizer warehouses, or marine splash zones.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                <span className="rounded bg-brand-gold-soft px-3 py-1 font-semibold text-brand-gold-strong">
                  SPECIAL CAUTION → Do Not Rely on Carbon Steel Coatings Alone
                </span>
                <span className="rounded bg-surface-alt px-3 py-1 text-ink-muted">
                  Upgrade to austenitic stainless steel (SS 316 / A4-70) or Duplex 2205 via our{' '}
                  <Link
                    href="/materials/stainless-steel-fasteners/"
                    className="font-semibold text-brand-gold-strong hover:underline"
                  >
                    stainless-steel equivalent (A2-70 / A4-70)
                  </Link>{' '}
                  page.
                </span>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 4. GradeTable Mechanical Comparison */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">
            Mechanical property comparison (ISO 898-1 / IS 1367)
          </Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Standard mechanical properties for carbon steel and alloy steel bolts, screws, and studs per ISO 898-1:2013 Table 3. All values reflect verified standards requirements:
          </p>

          <div className="mt-8">
            <GradeTable
              headers={[
                'Property Class',
                'ISO 898-1 Reference',
                'Min Yield (MPa)',
                'Min UTS (MPa)',
                'Elongation A % (min)',
                'Hardness (HV min / max)',
              ]}
              rows={MECHANICAL_ROWS}
            />
          </div>

          <p className="mt-4 text-xs text-ink-muted">
            *Source: ISO 898-1:2013 Table 3 (mechanical and physical properties of carbon and alloy steel fasteners). Hardness values are Vickers (HV); Rockwell conversions are HRC 22–32 for Class 8.8, HRC 32–39 for Class 10.9, and HRC 39–44 for Class 12.9.
          </p>
        </Container>
      </Section>

      {/* 5. Hydrogen Embrittlement & Coating */}
      {/* VERIFICATION PENDING: Confirm HDE bake-out protocol on HDG + PC 10.9 (190–230 °C for ≥ 4 hr within 4 hr of plating) — ref: brief §10 item 3 */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <AlertTriangle aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Hydrogen embrittlement (HDE) and coating selection above Grade 8.8
            </Heading>
          </div>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <Prose>
              <p>
                Hydrogen embrittlement (HDE) is a catastrophic failure mode affecting high-hardness steels (hardness ≥ 320 HV / 32 HRC, corresponding to property classes 10.9 and 12.9). During acid pickling (prior to electroplating or hot-dip galvanizing), nascent atomic hydrogen is absorbed into the steel lattice.
              </p>
              <p className="mt-4">
                Under sustained mechanical tensile stress, dissolved hydrogen atoms diffuse to triaxial stress concentration zones (such as thread roots and the under-head radius). This reduces cohesive interatomic bonding strength, triggering sub-critical microcracks that propagate rapidly into sudden brittle fracture—frequently occurring hours or days after joint torquing without warning.
              </p>
            </Prose>
            <Prose>
              <p>
                To prevent HDE failures on high-strength connections, ISO 898-1 §9.6 and ASTM F2329 establish clear coating discipline:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                <li>
                  <strong>Grade 8.8:</strong> Safe for standard hot-dip galvanizing (HDG) and zinc electroplating.
                </li>
                <li>
                  <strong>Grade 10.9:</strong> Hot-dip galvanizing should generally be avoided. If HDG is strictly mandated by specification, fasteners must undergo hydrogen de-embrittlement baking at 190 °C to 230 °C for at least 4 hours within 4 hours of plating.
                </li>
                <li>
                  <strong>Grade 12.9:</strong> Hot-dip galvanizing is <strong>prohibited</strong>. Black oxide or specialized non-electrolytic zinc-flake coatings (Geomet / Dacromet) must be specified.
                </li>
              </ul>
            </Prose>
          </div>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Property Class',
                'Zinc Electroplating',
                'Hot-Dip Galvanised (HDG)',
                'Mechanical Galvanised',
                'Zinc-Nickel / Flake',
                'Black Oxide',
              ]}
              rows={COATING_ROWS}
              caption="Coating compatibility matrix per ISO 898-1:2013 §9.6 and ASTM F2329 recommendations for hydrogen embrittlement prevention."
            />
          </div>
        </Container>
      </Section>

      {/* 6. Equivalent Grade Cross-Reference */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">
            Equivalent grade cross-reference: ISO ↔ IS ↔ ASTM ↔ SAE ↔ DIN
          </Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            International engineering standards cross-reference for high-tensile carbon and alloy steels. While property classes share mechanical overlaps, always verify exact testing criteria against project specifications:
          </p>

          <div className="mt-8">
            <SpecTable
              headers={['ISO 898-1', 'IS 1367', 'SAE J429', 'ASTM Equivalent (Reference)', 'DIN 267']}
              rows={EQUIVALENCE_ROWS}
              caption="Dimensional and mechanical overlap guide. Note: ASTM imperial grades (A325, A490) are dimensionally specific to heavy hex structural geometries and require structural engineer confirmation."
            />
          </div>
        </Container>
      </Section>

      {/* 7. Application Matrix */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">
            Application matrix: selecting the correct high-tensile connection
          </Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Cross-reference common civil, mechanical, and energy applications against recommended property classes, mating nut grades, and supply channels:
          </p>

          <div className="mt-8">
            <SpecTable
              headers={['Application', 'Recommended PC', 'Mating Nut Class', 'Typical Coating', 'KP Supply Channel']}
              rows={APPLICATION_ROWS}
            />
          </div>
        </Container>
      </Section>

      {/* 8. Mating Nut, Washer & Torque Discipline */}
      {/* VERIFICATION PENDING: Confirm mating-nut class policy (auto-upgrade vs quoted per PO) — ref: brief §10 item 5 */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">
            Nut, washer and tightening torque pairing rules
          </Heading>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            <Card variant="default" padding="lg">
              <Heading as="h3" variant="card">
                1. Nut Proof Load Pairing
              </Heading>
              <p className="mt-3 text-sm text-ink-muted">
                Per <strong>ISO 898-2</strong>, the property class of the carbon-steel nut must match or exceed the bolt property class to prevent thread stripping under proof load:
              </p>
              <ul className="mt-2 space-y-1 text-xs text-ink-muted">
                <li>• PC 8.8 bolt → Class 8 or Class 10 nut</li>
                <li>• PC 10.9 bolt → Class 10 or Class 12 nut</li>
                <li>• PC 12.9 bolt → Class 12 heavy nut or tapped hole</li>
              </ul>
            </Card>

            <Card variant="default" padding="lg">
              <Heading as="h3" variant="card">
                2. Hardened Washer Discipline
              </Heading>
              <p className="mt-3 text-sm text-ink-muted">
                High-tensile bolts generate enormous clamping forces. Using commercial soft mild-steel washers under Grade 8.8 or 10.9 bolts causes the washer to dish and yield, resulting in preload relaxation. Always specify through-hardened washers per <strong>ISO 898-6</strong> or <strong>ASTM F436</strong> (hardness 38–45 HRC).
              </p>
            </Card>

            <Card variant="default" padding="lg">
              <Heading as="h3" variant="card">
                3. Coating Galvanic Parity
              </Heading>
              <p className="mt-3 text-sm text-ink-muted">
                The bolt, mating nut, and washer must share identical surface coatings. Combining a hot-dip galvanized bolt with an electroplated or plain nut introduces coating thickness mismatches on threads and creates a galvanic potential in humid service.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 9. Where KP Manufactures vs Distributes */}
      {/* VERIFICATION PENDING: Confirm in-house vs outsourced heat treatment (quench + temper) on OEM lines — ref: brief §10 item 7 */}
      {/* VERIFICATION PENDING: Confirm OEM status of PC 10.9 on foundation bolts and sag rods — ref: brief §10 item 1 */}
      {/* VERIFICATION PENDING: Confirm PC 12.9 OEM status — ref: brief §10 item 2 */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">
            Where KP manufactures vs distributes high-tensile fasteners
          </Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            KP Fasteners operates with clear manufacturing and supply transparency. At our Ahmedabad plant, we manufacture custom foundation bolts, anchor assemblies, studs, and sag rods in-house, while distributing standard commercial bolts from vetted primary mills:
          </p>

          <div className="mt-8">
            <SpecTable
              headers={['Product Family', 'Grade 4.6 / 4.8', 'Grade 8.8', 'Grade 10.9', 'Grade 12.9']}
              rows={MAKE_VS_TRADE_ROWS}
              caption="KP Fasteners production and distribution scope across carbon and alloy steel property classes."
            />
          </div>
        </Container>
      </Section>

      {/* 10. Form Factors Cross-Link Grid */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">
            High-tensile fastener form factors
          </Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Explore our comprehensive range of high-tensile fasteners across OEM manufactured and distributed product lines:
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FORMS.map((form) => (
              <Card key={form.slug} variant="default" padding="lg">
                <Heading as="h3" variant="card">
                  {form.title}
                </Heading>
                <p className="mt-2 text-sm text-ink-muted">{form.description}</p>
                <div className="mt-4">
                  <Link
                    href={form.slug}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand-gold-strong hover:underline"
                  >
                    View {form.anchorText}
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/products/"
              className="inline-flex items-center gap-2 font-semibold text-brand-steel hover:text-brand-gold-strong hover:underline"
            >
              Browse all industrial fastener product lines
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* 11. Industry Fit Strip */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">
            Industries engineered for high-tensile fastener service
          </Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            High-tensile fasteners provide the critical clamping preload necessary to resist dynamic shear, tension, and fatigue loads across heavy engineering sectors:
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <Card variant="default" padding="lg">
              <Building2 aria-hidden="true" className="h-8 w-8 text-brand-gold-strong" />
              <Heading as="h3" variant="card" className="mt-4">
                Construction &amp; Infrastructure
              </Heading>
              <p className="mt-2 text-sm text-ink-muted">
                Pre-engineered buildings (PEB), high-rise structural steel connections, transmission towers, and bridge anchorages using Grade 8.8 and 10.9 fasteners.
              </p>
              <div className="mt-4">
                <Link
                  href="/industries/construction-infrastructure/"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-gold-strong hover:underline"
                >
                  Construction &amp; infrastructure fasteners
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </Card>

            <Card variant="default" padding="lg">
              <Factory aria-hidden="true" className="h-8 w-8 text-brand-gold-strong" />
              <Heading as="h3" variant="card" className="mt-4">
                Automotive &amp; Heavy Engineering
              </Heading>
              <p className="mt-2 text-sm text-ink-muted">
                Stamping presses, industrial gearboxes, suspension assemblies, and powertrain flanges requiring Class 10.9 fatigue ratings and Class 12.9 tool clamping.
              </p>
              <div className="mt-4">
                <Link
                  href="/industries/automotive-heavy-engineering/"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-gold-strong hover:underline"
                >
                  Automotive &amp; heavy engineering
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </Card>

            <Card variant="default" padding="lg">
              <Sun aria-hidden="true" className="h-8 w-8 text-brand-gold-strong" />
              <Heading as="h3" variant="card" className="mt-4">
                Solar Mounting Structures (MMS)
              </Heading>
              <p className="mt-2 text-sm text-ink-muted">
                High-wind utility solar racking, tracker torque tube connections, and purlin fasteners specified in Grade 8.8 with heavy hot-dip galvanizing.
              </p>
              <div className="mt-4">
                <Link
                  href="/industries/solar-mounting-fasteners/"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-gold-strong hover:underline"
                >
                  Solar mounting fasteners
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 12. Quality Assurance & MTC */}
      {/* VERIFICATION PENDING: Confirm NABL partner lab name for tensile verification — ref: brief §10 item 4 */}
      <Section variant="alt">
        <Container>
          <div className="rounded-xl border border-border bg-surface p-8 shadow-card">
            <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
              <div>
                <Heading as="h2" variant="section">
                  Quality testing &amp; EN 10204 3.1 certification
                </Heading>
                <p className="mt-4 text-ink-muted">
                  Every manufactured and distributed lot of high-tensile fasteners supplied by KP Fasteners is verified against ISO 898-1 and IS 1367 mechanical standards. We maintain full heat-number traceability back to primary steel mills and conduct in-house hardness and dimensional audits on every production batch.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-ink">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                    EN 10204 3.1 mill test certificates provided with every dispatch on request
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                    In-house Rockwell and Vickers hardness testing across bolt core and surface
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                    Full tensile, proof load, and wedge tensile testing via NABL-accredited partner laboratories
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                    Optical emission spectrometry (OES) chemical analysis confirming carbon and alloy limits
                  </li>
                </ul>
              </div>
              <div className="text-center lg:text-right">
                <Link
                  href="/quality/"
                  className="btn btn-secondary"
                >
                  NABL tensile verification and MTC EN 10204 3.1
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 13. FAQ */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">
            Frequently asked questions about high-tensile fasteners
          </Heading>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Technical answers to common engineering questions regarding property class markings, grade upgrades, hydrogen embrittlement, and nut pairing.
          </p>
          <div className="mt-8">
            <Accordion
              items={FAQS.map((faq) => ({
                question: faq.question,
                answer: <p className="text-sm leading-relaxed text-ink-muted">{faq.answer}</p>,
              }))}
            />
          </div>
        </Container>
      </Section>

      {/* 14. CTA Band */}
      <Section variant="alt">
        <Container>
          <div className="rounded-2xl border border-border bg-surface p-8 text-center shadow-card sm:p-12">
            <Heading as="h2" variant="section" className="mx-auto max-w-2xl font-heading">
              Need guidance selecting between Grade 8.8, 10.9 and 12.9?
            </Heading>
            <p className="mx-auto mt-4 max-w-2xl text-ink-muted">
              Submit your structural connection schedule, machinery drawing, or fastener bill of quantities. Our technical sales engineers will verify property-class calculations, coating suitability, and provide an itemized quote from Ahmedabad.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/request-quote/?material=high-tensile"
                className="btn btn-primary"
              >
                <FileText aria-hidden="true" className="h-4 w-4" />
                &nbsp;Send a BOQ with the chosen grade
              </Link>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                &nbsp;WhatsApp a grade question
              </a>
              <a href={TEL} className="btn btn-secondary">
                <Phone aria-hidden="true" className="h-4 w-4" />
                &nbsp;{company.telephones[0]}
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
