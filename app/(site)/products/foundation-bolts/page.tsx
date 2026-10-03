import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  MessageCircle,
  FileText,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Factory,
  Wrench,
  Sun,
  Zap,
  Droplets,
  Building2,
} from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
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
import { product as productSchema, faqPage, breadcrumbs as breadcrumbsSchema } from '@/lib/jsonld';
import { findRoute } from '@/data/routes';
import { company } from '@/data/company';

const PATH = '/products/foundation-bolts/';
const HERO_IMAGE = '/images/products/bolts/j-bolt.jpg';

const META_TITLE = 'Foundation Bolts Manufacturer | IS 5624 & F1554 | KP';
const META_DESCRIPTION =
  'J, L, U, headed & swedge foundation bolts to IS 5624, DIN 529 and ASTM F1554. MS and high-tensile, HDG or zinc. Ahmedabad-manufactured. Request a BOQ quote.';

export const metadata: Metadata = buildMetadata({
  path: PATH,
  title: META_TITLE,
  description: META_DESCRIPTION,
  ogImage: HERO_IMAGE,
});

const WA_PREFILL =
  'Hi KP Fasteners, I need a foundation-bolt quote. Shape: [J/L/U/Headed], Dia x Length: [ ], Coating: [HDG/Zinc/Black], Quantity: [ ]';
const WA_URL = 'https://wa.me/919898230448?text=' + encodeURIComponent(WA_PREFILL);
const TEL = `tel:${company.telephones[0].replace(/[^\d+]/g, '')}`;

const FAQS = [
  {
    question: 'Which standards do KP Fasteners’ foundation bolts comply with?',
    answer:
      'We manufacture cast-in foundation bolts to IS 5624 (property class 4.6, product grade C per IS 1367) and to DIN 529 shape references. For higher-load anchorage we quote against ASTM F1554 Grade 36 and Grade 55 in customer-specified shapes. Mating hex nuts follow IS 1363.',
  },
  {
    question: 'What shapes and sizes do you produce?',
    answer:
      'J-bolts, L-bolts, U-bolts, hooked and cranked bolts, straight bolts with anchor plate, headed HD bolts, and swedge bolts. Diameters and lengths are quoted against the IS 5624:2021 M8–M72 envelope; confirm the exact range on your BOQ line.',
  },
  {
    question: 'Do you supply MS foundation bolts, and what is the typical coating?',
    answer:
      'Yes — mild steel foundation bolts to property class 4.6 are one of our active lines. Standard coating options are self-colour (black), zinc electroplated, and hot-dip galvanised per IS 2629 / ASTM A153. HDG is the default recommendation for cast-in outdoor applications.',
  },
  {
    question: 'Can you supply against a project BOQ or drawing?',
    answer:
      'Yes. Send the drawing or BOQ — shape, diameter, embedment length, projection above concrete, coating and quantity per size — via the quote form or on WhatsApp at +91 98982 30448. We supply to fabricator drawings and structural-engineer specifications; KP does not perform the anchorage design itself.',
  },
  {
    question: 'Do you provide mill test certificates and what is the typical lead time?',
    answer:
      'EN 10204 3.1 mill test certificates are available on request for manufactured lots, with batch traceability by heat number. Lead time depends on diameter band, coating and quantity — confirmed with the quote within one working day.',
  },
];

const VARIANTS = [
  {
    name: 'J-bolts (J-type foundation bolt)',
    use: 'Cast-in curved hook — the most common shape for PEB and structural steel column base plates.',
    range: 'M12 – M36 × 150 – 900 mm',
    finish: 'Self-colour, zinc, HDG',
  },
  {
    name: 'L-bolts (L-type anchor bolt)',
    use: 'Right-angle hook for light structural steel, equipment skids and PEB purlins.',
    range: 'M10 – M30 × 150 – 750 mm',
    finish: 'Self-colour, zinc, HDG',
  },
  {
    name: 'U-bolts (loop foundation bolt)',
    use: 'Twin-shank U form for machinery grouting and pipe clamp fixing.',
    range: 'M10 – M30 × bend dia to drawing',
    finish: 'Self-colour, zinc, HDG',
  },
  {
    name: 'Headed HD anchor bolts',
    use: 'Forged hex or heavy-hex head at the embedded end; used where ASTM F1554 Grade 55 is specified.',
    range: 'M16 – M42 × 300 – 1,200 mm',
    finish: 'HDG preferred, self-colour on request',
  },
  {
    name: 'Hooked / cranked bolts',
    use: 'IS 5624 Type A/B forged-end bolts for general civil anchorage.',
    range: 'M12 – M36 × to drawing',
    finish: 'Self-colour, zinc, HDG',
  },
  {
    name: 'Straight bolts with anchor plate',
    use: 'DIN 529 Type M / L plate-anchored straight rod for grouted base plates.',
    range: 'M16 – M42 × to drawing',
    finish: 'HDG preferred',
  },
  {
    name: 'Swedge bolts',
    use: 'Indented shank for high pull-out resistance — transmission tower footings and vibrating machinery.',
    range: 'M16 – M36 × to drawing',
    finish: 'HDG',
  },
  {
    name: 'Chemical anchor stud bolts',
    use: 'Full-thread stud for post-installed resin anchoring. See our full range of {STUD_LINK}.',
    range: 'M10 – M30 × 100 – 600 mm',
    finish: 'Zinc, HDG, SS on request',
  },
];

const COATINGS = [
  {
    name: 'Hot-Dip Galvanised (HDG)',
    body: 'Zinc dip to ASTM A153 / IS 2629. Default outdoor coating for cast-in anchorage; typical minimum coating mass 610 g/m² for class A fasteners per ASTM A153.',
  },
  {
    name: 'Zinc Electroplating',
    body: 'Trivalent passivated zinc in blue, yellow or black. Suited to indoor machinery grouting and short-term outdoor exposure.',
  },
  {
    name: 'Black Oxide / Self-Colour',
    body: 'As-rolled or black-oxide finish for grouted-in applications where the bolt is fully embedded in concrete.',
  },
  {
    name: 'Phosphating',
    body: 'Manganese or zinc phosphate pre-treatment, typically paired with an oil film. Specified as a paint primer or short-term rust inhibitor.',
  },
];

const APPLICATIONS = [
  {
    icon: Building2,
    name: 'Structural steel & PEB',
    body: 'J-bolts and L-bolts for pre-engineered building column base plates and warehouse structural steel.',
  },
  {
    icon: Factory,
    name: 'Machinery grouting',
    body: 'U-bolts and hooked bolts for pump, compressor and CNC-bed grouting into reinforced-concrete foundations.',
  },
  {
    icon: Zap,
    name: 'Transmission & telecom towers',
    body: 'Swedge bolts and headed HD anchors for high pull-out loads on electrical and telecom tower footings.',
  },
  {
    icon: Sun,
    name: 'Solar substructure',
    body: 'Short J- or L-bolts for concrete-pier-to-C-purlin anchoring on ground-mount and carport PV structures.',
  },
  {
    icon: Droplets,
    name: 'Water & process plant',
    body: 'HDG anchors for pump houses, effluent plants and process-industry equipment skids.',
  },
];

export default function Page() {
  const route = findRoute(PATH);
  const trail = route?.breadcrumbTrail ?? [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products/' },
    { label: 'Foundation Bolts', href: PATH },
  ];

  return (
    <>
      <JsonLd
        data={productSchema({
          name: 'Foundation Bolts',
          description:
            'Cast-in J, L, U, hooked, headed and swedge foundation bolts manufactured to IS 5624, DIN 529 and ASTM F1554 — mild steel and high-tensile grades, with hot-dip galvanised, zinc electroplated or self-colour finishes.',
          category: 'Industrial Fasteners',
          material: 'Mild Steel (IS 2062), High-Tensile Carbon Steel',
          image: HERO_IMAGE,
          path: PATH,
          classification: 'oem',
        })}
      />
      <JsonLd data={breadcrumbsSchema(trail)} />
      <JsonLd data={faqPage(FAQS)} />

      {/* 1. Hero */}
      <Section>
        <Container>
          <Breadcrumbs trail={trail} />
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="badge badge-gold">OEM · Manufactured in Ahmedabad</p>
              <Heading as="h1" variant="hero" className="mt-4 font-heading">
                <span className="text-gold-gradient">Foundation Bolts</span> Manufacturer
                — J, L, U, Headed &amp; Swedge Types
              </Heading>
              <hr className="rule-metal mt-5 w-40" aria-hidden="true" />
              <p className="mt-6 max-w-2xl text-lg text-ink-muted">
                Cast-in foundation and anchor bolts to IS 5624, DIN 529 and ASTM F1554
                — made at our Ghanshyam Industrial Estate plant for PEB, machinery
                grouting, solar substructure and transmission-tower projects. We quote
                against your BOQ with material, coating and lead time.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/request-quote/?product=foundation-bolts"
                  className="btn btn-primary"
                >
                  <FileText aria-hidden="true" className="h-4 w-4" />
                  &nbsp;Request a BOQ quote
                </Link>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle aria-hidden="true" className="h-4 w-4" />
                  &nbsp;WhatsApp a specialist
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
                    alt="J-type foundation bolt manufactured by KP Fasteners for cast-in anchorage"
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
            <ClassificationBanner classification="oem" />
          </div>
        </Container>
      </Section>

      {/* 2. Technical overview */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">What a foundation bolt is — and where KP fits</Heading>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <Prose>
              <p>
                A foundation bolt — also called an anchor bolt or hold-down bolt —
                is a cast-in-concrete fastener that transfers tension and shear from a
                steel base plate into a reinforced-concrete footing. IS 5624 defines the
                dimensional and material requirements for cast-in types in India; DIN 529
                covers equivalent shape families used across European-standard projects;
                ASTM F1554 is the North-American anchorage standard for higher-load and
                heat-treated grades.
              </p>
              <p className="mt-4">
                Cast-in foundation bolts are distinct from post-installed mechanical
                anchors (wedge, sleeve or drop-in anchors) and from chemical-resin
                stud anchors. On this page we cover the cast-in family we manufacture
                in-house; for post-installed resin stud anchors see our{' '}
                <Link
                  href="/products/stud-bolts/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  chemical anchor stud bolts
                </Link>
                .
              </p>
            </Prose>
            <Prose>
              <p>
                KP Fasteners manufactures foundation bolts at a single-site plant in
                Ghanshyam Industrial Estate, Ahmedabad. Bar stock is cut and threaded
                in-house to IS 1367 tolerance, bent or forged to the ordered shape, and
                finished to the specified coating line. Each lot is dimensionally
                inspected and ships with EN 10204 3.1 mill test certification on request.
              </p>
              <p className="mt-4">
                We supply pre-engineered building fabricators, EPC contractors,
                machinery OEMs, and solar-substructure buyers across India, with
                dispatch from Ahmedabad to Gujarat and pan-India via road and rail
                partners.
              </p>
            </Prose>
          </div>
        </Container>
      </Section>

      {/* 3. Standards & cross-reference */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">Standards we manufacture against</Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Every row below is referenced to a published standard — BIS, DIN or
            ASTM. We do not publish invented proof-load or yield values; mating hex
            nuts follow IS 1363.
          </p>
          <div className="mt-8">
            {/* VERIFICATION PENDING: ASTM F1554 Grade 105 (alloy, heat-treated,
                724 MPa min yield) in-house capability is not yet client-confirmed.
                Row is retained for standards completeness with a dagger marker;
                remove or re-label once Kabir confirms in-house manufacture vs
                trading of Gr 105. See docs/content/content-briefs/foundation-bolts.md
                §10 question #12. */}
            <SpecTable
              headers={[
                'Standard',
                'Country',
                'Scope',
                'Grades / classes',
                'Typical application',
              ]}
              rows={[
                {
                  cells: [
                    'IS 5624:1993 / 2021',
                    'India (BIS)',
                    'Cast-in foundation bolts M8–M72',
                    'Property class 4.6 (grade C per IS 1367)',
                    'General civil, PEB, machinery grouting',
                  ],
                },
                {
                  cells: [
                    'DIN 529',
                    'Germany (DIN)',
                    'Masonry and foundation bolts',
                    'Types A / B / M / L',
                    'European-standard projects, grouted base plates',
                  ],
                },
                {
                  cells: [
                    'ASTM F1554 Gr 36',
                    'USA (ASTM)',
                    'Anchor bolts, 36 ksi yield (248 MPa min)',
                    'Gr 36 — low-carbon steel',
                    'General anchorage, EPC projects',
                  ],
                },
                {
                  cells: [
                    'ASTM F1554 Gr 55',
                    'USA (ASTM)',
                    'Anchor bolts, 55 ksi yield (380 MPa min)',
                    'Gr 55 — colour code yellow',
                    'Welded or grouted high-load anchorage',
                  ],
                },
                {
                  cells: [
                    'ASTM F1554 Gr 105†',
                    'USA (ASTM)',
                    'Anchor bolts, 105 ksi yield (724 MPa min)',
                    'Gr 105 — colour code red; A563 Gr DH nuts',
                    'Wind-turbine, heavy structural (on-quote)',
                  ],
                },
                {
                  cells: [
                    'IS 1367 (Part 2 & 3)',
                    'India (BIS)',
                    'Product grades + mechanical properties',
                    'Property classes 3.6 – 12.9',
                    'Referenced by IS 5624 for grade C tolerance',
                  ],
                },
              ]}
            />
            <p className="mt-3 text-xs text-ink-muted">
              † Grade 105 availability confirmed on quote. Standard numeric values
              above are from BIS, DIN and ASTM published specifications.
            </p>
          </div>
        </Container>
      </Section>

      {/* 4. Variant matrix */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">Bolt shapes we manufacture</Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            The shape family is specified by the structural engineer against the load
            path and base-plate detail. We manufacture the full IS 5624 / DIN 529
            shape catalogue in-house.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VARIANTS.map((v) => {
              const parts = v.use.split('{STUD_LINK}');
              return (
                <Card key={v.name} variant="metallic" padding="lg" className="flex h-full flex-col">
                  <Heading as="h3" variant="card">
                    {v.name}
                  </Heading>
                  <p className="mt-3 flex-1 text-sm text-ink-muted">
                    {parts.length > 1 ? (
                      <>
                        {parts[0]}
                        <Link
                          href="/products/stud-bolts/"
                          className="font-semibold text-brand-gold-strong hover:underline"
                        >
                          stud bolts and threaded rod
                        </Link>
                        {parts[1]}
                      </>
                    ) : (
                      v.use
                    )}
                  </p>
                  <dl className="mt-4 space-y-1 text-sm">
                    <div className="flex gap-2">
                      <dt className="font-semibold text-brand-steel">Range:</dt>
                      <dd className="mono-numbers text-ink">{v.range}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="font-semibold text-brand-steel">Finish:</dt>
                      <dd className="text-ink">{v.finish}</dd>
                    </div>
                  </dl>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 5. Grade & material table */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">Grade &amp; material reference</Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Mechanical values below are the minima specified in the published standard
            for each grade. Actual lot values are reported on the EN 10204 3.1 mill
            test certificate on request. For{' '}
            <Link
              href="/materials/high-tensile-fasteners/"
              className="font-semibold text-brand-gold-strong hover:underline"
            >
              high-tensile property class 8.8 and 10.9
            </Link>{' '}
            use-cases, confirm hydrogen-embrittlement precautions on the quote line.
          </p>
          <div className="mt-8">
            <GradeTable
              headers={[
                'Grade',
                'Yield min (MPa)',
                'Tensile min (MPa)',
                'Elong. min (%)',
                'Typical hardness HBW',
                'Typical coating',
              ]}
              rows={[
                { cells: ['IS 5624 class 4.6 (MS)', '240', '400', '22', '114 – 209', 'Self-colour / zinc / HDG'] },
                { cells: ['ASTM F1554 Gr 36', '248', '400 – 550', '23', '≤ 223', 'HDG / zinc / plain'] },
                { cells: ['ASTM F1554 Gr 55', '380', '517 min', '21', '≤ 223', 'HDG / zinc / plain'] },
                { cells: ['Property class 8.8', '640', '800', '12', '242 – 316', 'HDG / zinc'] },
                { cells: ['Property class 10.9', '900', '1,040', '9', '304 – 361', 'HDG (embrittlement controls)'] },
              ]}
            />
            <p className="mt-3 text-xs text-ink-muted">
              Values per ASTM F1554 (Grades 36 / 55), IS 5624 / IS 1367 (class 4.6)
              and ISO 898-1 (property classes 8.8 and 10.9).
            </p>
          </div>
        </Container>
      </Section>

      {/* 6. Coatings & finishes */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">Coatings &amp; finishes offered</Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Coating is selected by exposure environment and whether the bolt is
            embedded in grout or exposed above-grade. HDG is our default
            recommendation for outdoor cast-in anchorage.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COATINGS.map((c) => (
              <Card key={c.name} variant="default" padding="lg" className="flex h-full flex-col">
                <Heading as="h3" variant="card">
                  {c.name}
                </Heading>
                <p className="mt-3 text-sm text-ink-muted">{c.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. How to specify */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">How to specify a foundation bolt</Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            A short decision block for procurement teams working from a structural
            drawing. KP does not perform the anchorage design — we supply to your
            engineer’s specification.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card variant="trust" padding="lg">
              <Heading as="h3" variant="card">
                Step 1 — Pick the shape from the load path
              </Heading>
              <Prose className="mt-3">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Tension only, light to medium: J-bolt or L-bolt.</li>
                  <li>Grouted machinery with vibration: U-bolt or hooked bolt.</li>
                  <li>High tension plus shear: headed HD bolt.</li>
                  <li>Vibrating or wind-cycled loads: swedge bolt.</li>
                </ul>
              </Prose>
            </Card>
            <Card variant="trust" padding="lg">
              <Heading as="h3" variant="card">
                Step 2 — Pick the material grade from the load
              </Heading>
              <Prose className="mt-3">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Default civil anchorage: IS 5624 class 4.6 (MS).</li>
                  <li>Welded or grouted high-load: ASTM F1554 Grade 55.</li>
                  <li>Heavy structural / wind-turbine: F1554 Grade 105 (on quote).</li>
                </ul>
              </Prose>
            </Card>
            <Card variant="trust" padding="lg">
              <Heading as="h3" variant="card">
                Step 3 — Pick the coating from the exposure
              </Heading>
              <Prose className="mt-3">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Indoor grouted: zinc electroplated or self-colour.</li>
                  <li>Outdoor cast-in: hot-dip galvanised (ASTM A153 / IS 2629).</li>
                  <li>Coastal or chemical plant: HDG; stainless-steel on quote.</li>
                </ul>
              </Prose>
            </Card>
            <Card variant="trust" padding="lg">
              <Heading as="h3" variant="card">
                Step 4 — Confirm embedment and projection
              </Heading>
              <Prose className="mt-3">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Embedment length, projection above concrete, bend dimension.</li>
                  <li>Mating nut and washer requirement per IS 1363.</li>
                  <li>Template or jig requirement for multi-bolt groups.</li>
                </ul>
              </Prose>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 8. Applications */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">Applications &amp; sectors we supply</Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Sectors we actively supply from Ahmedabad. For project-level support on{' '}
            <Link
              href="/industries/construction-infrastructure/"
              className="font-semibold text-brand-gold-strong hover:underline"
            >
              structural steel and PEB projects
            </Link>
            , share the BOQ and we quote per shape, grade and coating.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {APPLICATIONS.map(({ icon: Icon, name, body }) => (
              <Card key={name} variant="default" padding="md" className="flex h-full flex-col">
                <Icon aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
                <Heading as="h3" variant="card" className="mt-3">
                  {name}
                </Heading>
                <p className="mt-2 text-sm text-ink-muted">{body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 9. Quality & documentation */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <div>
              <Heading as="h2" variant="section">Quality control &amp; documentation</Heading>
              <ul className="mt-6 space-y-3 text-ink">
                {[
                  'Dimensional inspection per IS 5624 Annex A tolerances on every manufactured lot.',
                  'Thread inspection to IS 1367 / ISO 965 (6g tolerance) using ring and plug gauges.',
                  'EN 10204 3.1 mill test certificates available on request, with batch traceability by heat number.',
                  'Salt-spray testing (ASTM B117) for HDG and zinc-electroplated lots via NABL-accredited third-party laboratories.',
                  'Hardness and visual inspection in-house; tensile verification on request.',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold-strong"
                    />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-ink-muted">
                Read more about our{' '}
                <Link
                  href="/quality/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  quality control &amp; MTC availability
                </Link>
                .
              </p>
            </div>
            <Card variant="trust" padding="lg">
              <ShieldCheck aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
              <Heading as="h3" variant="card" className="mt-3">
                Documentation pack
              </Heading>
              <ul className="mt-3 space-y-2 text-sm text-ink">
                <li>• EN 10204 3.1 MTC on request</li>
                <li>• Dimensional inspection report</li>
                <li>• Coating / HDG thickness report</li>
                <li>• Heat-number batch traceability</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 10. Mid-page CTA */}
      <Section variant="alt">
        <Container>
          <Card variant="metallic" padding="lg">
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <Heading as="h2" variant="subsection">
                  <span className="text-gold-gradient">
                    Have a foundation-bolt BOQ ready?
                  </span>
                </Heading>
                <p className="mt-3 max-w-2xl text-ink-muted">
                  Share the shape, diameter, embedment length, coating and quantity
                  per size. Quote back within one working day.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/request-quote/?product=foundation-bolts"
                  className="btn btn-primary"
                >
                  Request a BOQ quote
                </Link>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  WhatsApp us
                </a>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* 11. FAQs */}
      <Section>
        <Container width="narrow">
          <Heading as="h2" variant="section">Frequently asked questions</Heading>
          <p className="mt-3 text-ink-muted">
            Procurement-level answers. For project-specific detail, send your BOQ.
          </p>
          <div className="mt-8">
            <Accordion
              items={FAQS.map((f) => ({
                question: f.question,
                answer: <p>{f.answer}</p>,
              }))}
            />
          </div>
        </Container>
      </Section>

      {/* 12. Related products */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">Related product lines</Heading>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                href: '/products/stud-bolts/',
                name: 'Stud Bolts',
                anchor: 'ASTM A193 B7 stud bolts and threaded rod',
                body: 'Metric and imperial stud bolts for flange and structural applications, including chemical anchor studs.',
              },
              {
                href: '/products/sag-rods/',
                name: 'Sag Rods',
                anchor: 'Threaded sag rods for PEB bracing',
                body: 'Purlin and girt sag rods for PEB and solar racking cross-bracing, in matching coatings.',
              },
              {
                href: '/products/scaffold-accessories/',
                name: 'Scaffold Accessories',
                anchor: 'Scaffold anchor plates and base jacks',
                body: 'Tie-rod nut sets, wing nuts and waller plates compatible with foundation-bolt base plates.',
              },
            ].map((r) => (
              <Card key={r.href} variant="metallic" padding="lg" className="flex h-full flex-col">
                <Heading as="h3" variant="card">
                  {r.name}
                </Heading>
                <p className="mt-3 flex-1 text-sm text-ink-muted">{r.body}</p>
                <Link
                  href={r.href}
                  className="mt-4 inline-flex items-center gap-1 font-heading text-sm font-semibold text-brand-gold-strong hover:underline"
                >
                  {r.anchor} <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Back to{' '}
            <Link
              href="/products/"
              className="font-semibold text-brand-gold-strong hover:underline"
            >
              our full products range
            </Link>
            .
          </p>
        </Container>
      </Section>

      {/* 13. Closing CTA */}
      <Section>
        <Container>
          <Card variant="metallic" padding="lg">
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <Wrench aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
                <Heading as="h2" variant="subsection" className="mt-3">
                  <span className="text-gold-gradient">
                    Send us your foundation-bolt BOQ.
                  </span>
                </Heading>
                <p className="mt-3 max-w-2xl text-ink-muted">
                  Drawings accepted as PDF, DWG or DXF. We reply within one working
                  day with material, coating, lead time and MTC availability.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/request-quote/?product=foundation-bolts"
                  className="btn btn-primary"
                >
                  <FileText aria-hidden="true" className="h-4 w-4" />
                  &nbsp;Request a BOQ quote
                </Link>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle aria-hidden="true" className="h-4 w-4" />
                  &nbsp;WhatsApp us
                </a>
              </div>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
