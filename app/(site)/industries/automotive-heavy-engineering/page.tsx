import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  MessageCircle,
  FileText,
  ArrowRight,
  CheckCircle2,
  Layers,
  Wrench,
  Compass,
  HardHat,
  ShieldAlert,
  AlertTriangle,
  Gauge,
  FileCheck,
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
import { ClassificationBanner } from '@/components/ui/ClassificationBanner';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqPage } from '@/lib/jsonld';
import { findRoute } from '@/data/routes';
import { company } from '@/data/company';

const PATH = '/industries/automotive-heavy-engineering/';
const HERO_IMAGE = '/product-images/automotive/hero.jpg';

// Title: 52 chars (50–60 range, primary keyword first). Meta description: 158 chars (150–160 range).
const META_TITLE = 'Automotive Fasteners Manufacturer & Heavy Engg | KP';
const META_DESCRIPTION =
  'High-tensile PC 10.9 & 12.9 bolts, custom studs, socket screws, and heavy engineering fasteners from KP Fasteners, Ahmedabad. Request your drawing quote today.';

export const metadata: Metadata = buildMetadata({
  path: PATH,
  title: META_TITLE,
  description: META_DESCRIPTION,
  ogImage: HERO_IMAGE,
});

const WA_PREFILL =
  'Hi KP Fasteners, I need an automotive/heavy-engg fastener quote. Sector: [tier-2/heavy-engg/power/mining], Grade: [8.8/10.9/12.9/A193], PPAP Level: [2/3/None], Drawing: [attach]';
const WA_URL = 'https://wa.me/919898230448?text=' + encodeURIComponent(WA_PREFILL);
const TEL = `tel:${company.telephones[0].replace(/[^\d+]/g, '')}`;

// VERIFICATION PENDING: Confirm whether KP actively serves automotive OEMs or tier suppliers (tier-1, tier-2, tier-3) — gates entire sector page — ref: brief §10 item 1
// VERIFICATION PENDING: Confirm heavy-engineering sector list (power / machinery / mining / oil & gas BOP / agricultural) — ref: brief §10 item 2
// VERIFICATION PENDING: Confirm PPAP capability (Level 2 on request vs Level 3 case-by-case) — ref: brief §10 item 3
// VERIFICATION PENDING: Confirm IATF 16949 future roadmap (not claimed on v1) — ref: brief §10 item 4
// VERIFICATION PENDING: Confirm named tier references with written permission — ref: brief §10 item 5
// VERIFICATION PENDING: Confirm in-house PMI gun on-site vs route-to-NABL-partner only — ref: brief §10 item 6
// VERIFICATION PENDING: Confirm First Article Inspection Report (FAIR) template availability — ref: brief §10 item 7
// VERIFICATION PENDING: Confirm OEM-coded coating partners (zinc-nickel / Dacromet / Geomet) — ref: brief §10 item 8
// VERIFICATION PENDING: Real photograph of PC 10.9/12.9 inventory at KP Fasteners Ahmedabad facility — ref: brief §6 hero-automotive-heavy-engg-kp.webp & §10 item 9
// VERIFICATION PENDING: Confirm priority sector weighting for hero narrative (tier-2 passenger / heavy earth-moving / power BOP) — ref: brief §10 item 10

const FAQS = [
  {
    question: 'Do you supply direct to automotive OEMs?',
    answer:
      'Our primary supply scope covers tier-2 and tier-3 automotive component manufacturers, trailer builders, and heavy-engineering machinery OEMs. Direct line-side supply to passenger vehicle OEMs (such as Maruti, Tata, or Hyundai) typically mandates dedicated IATF 16949 certification and full PPAP Level 3 sign-off, which KP Fasteners does not hold on v1. For specialized programs, please consult our engineering desk to align on approved vendor lists (AVL) and audit requirements before tendering.',
  },
  {
    question: 'Can you supply PPAP documentation?',
    answer:
      'PPAP Level 2 documentation—comprising initial sample inspection reports, mill test certificates (MTC EN 10204 3.1), coating thickness validation, and dimensional logs—is available on request for custom fabrication batches. Level 3 documentation, including statistical process capability studies (CpK) and formal line audits, is reviewed on a case-by-case basis depending on project duration and tooling lead time.',
  },
  {
    question: 'What is the typical lead time for a drawing-based automotive fastener?',
    answer:
      'Standard high-tensile fasteners (PC 10.9 / 12.9 in common metric diameters with standard plating) ship within 10–21 days. Custom geometries requiring dedicated cold-heading tooling or specialized alloy bar machining generally require 4–8 weeks for initial first-article inspection samples (FAIR). Standard production MOQ is 500 kg per SKU; pilot prototype quantities are quoted on individual feasibility.',
  },
  {
    question: 'Why do you avoid hot-dip galvanizing on PC 10.9 and 12.9?',
    answer:
      'Hot-dip galvanizing introduces severe risks of hydrogen embrittlement in high-strength steels exceeding 1000 MPa tensile strength, per ISO 898-1 standards. Our recommended surface barrier for Class 10.9 is mechanical galvanizing or non-electrolytic zinc flake coatings (such as Geomet or Dacromet), while Class 12.9 is supplied in chemical black oxide only. HDG on 10.9 is strictly limited and requires a mandatory 190–230 °C de-embrittlement bake within four hours of acid pickling.',
  },
  {
    question: 'Can you supply A193 B7 / B16 flange studs for the power / oil & gas side?',
    answer:
      'Yes. High-temperature alloy steel stud bolts to ASTM A193 Grade B7, B7M, and B16 are manufactured in-house at our Ahmedabad plant alongside mating ASTM A194 Grade 2H heavy hex nuts. For corrosive chemical and offshore plant services, we distribute ASTM A193 Grade B8 and B8M stainless steel studs with full mill test certificate pass-through and heat-number batch traceability.',
  },
];

const SECTOR_SCOPE_ROWS = [
  {
    cells: [
      'Automotive Tier-2 / Tier-3 Sub-Assembly',
      'Hex head bolts, socket cap screws, custom shoulder studs & guide pins',
      'Class 10.9 / 12.9, alloy steel 42CrMo4',
      'Zinc-nickel / Geomet / black oxide',
      'Distribution + drawing-based custom OEM',
    ],
  },
  {
    cells: [
      'Heavy Earth-Moving & Mining Equipment',
      'Chassis structural bolts, bucket pivot studs, track shoe bolts & heavy nuts',
      'Class 10.9 / 12.9 / ASTM A490',
      'Mechanical galvanized / Geomet / HDG bake-out',
      'Distribution + custom stud manufacturing',
    ],
  },
  {
    cells: [
      'Power Generation & Turbine BOP',
      'Casing stud bolts (B7 / B16), alternator mounts, foundation anchor bolts',
      'ASTM A193 B7 / B16, Class 10.9, F1554 Gr 105',
      'Phosphate & oil / high-temp anti-seize',
      'In-house OEM studs & foundation bolts',
    ],
  },
  {
    cells: [
      'Industrial Machinery & Gearbox OEMs',
      'Socket head cap screws, shoulder bolts, precision dowel pins & hex bolts',
      'Class 8.8 / 10.9 / 12.9',
      'Black oxide / zinc trivalent passivated',
      'Distribution + precision lathe custom',
    ],
  },
  {
    cells: [
      'Oil & Gas Plant Flanges & Piping',
      'Continuous-threaded stud bolts & heavy hex nuts for ASME B16.5 flanges',
      'ASTM A193 B7 / B7M / B8 / B8M',
      'Xylan / PTFE / zinc electroplate / cadmium opt.',
      'In-house OEM studs + partner SS distribution',
    ],
  },
  {
    cells: [
      'Agricultural Equipment & Tractors',
      'Frame structural hex bolts, implement mounting studs & wheel hub bolts',
      'Class 8.8 / 10.9 / SAE J429 Gr 8',
      'Yellow trivalent zinc / mechanical zinc',
      'Distribution + volume custom fasteners',
    ],
  },
];

const FASTENER_STACK_ROWS = [
  {
    cells: [
      'Chassis & Sub-Frame Assembly',
      'Flange Hex Bolt + Prevailing Torque Flange Nut',
      'Property Class 10.9 (ISO 898-1)',
      'Zinc-Nickel (Zn-Ni) / Geomet 500',
      'Tightened to 70–80% of yield stress; torque-angle control recommended',
    ],
  },
  {
    cells: [
      'Engine Mount & Powertrain Brackets',
      'Hexagon Head Cap Screw + Hardened Flat Washer',
      'Property Class 10.9 / 12.9',
      'Mechanical Zinc / Phosphate & Oil',
      'High dynamic shear; controlled friction coefficient µ = 0.12–0.15',
    ],
  },
  {
    cells: [
      'Heavy Commercial Vehicle Cab & Body',
      'Ribbed Carriage Bolt / Structural Hex Bolt + Heavy Nut',
      'Property Class 8.8 / 10.9',
      'Zinc Trivalent (Cr3+) Passivation',
      'Vibration-resistant thread locking or serrated bearing face',
    ],
  },
  {
    cells: [
      'Heavy Trailer & Axle Suspensions',
      'Equalizer Pivot Studs + U-Bolts + Slotted Castle Nuts',
      'AISI 4140 / Class 10.9 Heat-Treated',
      'Heavy Mechanical Galvanized / E-Coat',
      'High cyclic fatigue; periodic retorquing to specified foot-pounds',
    ],
  },
  {
    cells: [
      'Earth-Moving Bucket & Boom Pivot Joints',
      'High-Strength Shoulder Stud + Retaining Nut & Split Pin',
      'Alloy Steel 42CrMo4 Quenched & Tempered',
      'Hard Chrome / Black Oxide with Grease Fitting',
      'Extreme shock loading; proof load verified to 940 MPa minimum',
    ],
  },
  {
    cells: [
      'Agricultural Implement Linkages',
      'Top-Link Stud + Hitch Pins + Hex Head Screws',
      'Property Class 8.8 / SAE Grade 5',
      'Yellow Trivalent Zinc Electroplate (min 8 µm)',
      'Resistance to agricultural slurry, fertilizer exposure, and dust wear',
    ],
  },
  {
    cells: [
      'Railway Bogie Non-Critical Structural Hardware',
      'Hex Head Bolt + Heavy Castle Nut + Split Cotter Pin',
      'Property Class 8.8 / 10.9 (IS 1367)',
      'Hot-Dip Galvanized with Bake-Out / Geomet',
      'Strict adherence to RDSO general engineering drawings and proof testing',
    ],
  },
  {
    cells: [
      'Defence Vehicle Auxiliary Sub-Assemblies',
      'Heavy Hex Bolt + Double Nut + Belleville Disc Springs',
      'Property Class 10.9 / AISI 4340 Special',
      'Cadmium Plating Equivalent / Dark Olive Zinc Flake',
      'Non-ballistic auxiliary bracketry; MIL-STD torque retention checks',
    ],
  },
];

const SPEC_SCHEDULE_ROWS = [
  {
    cells: [
      'Class 8.8 Structural Bolt',
      '800 – 830 MPa',
      '640 MPa',
      'M6 – M36',
      'ISO 898-1 / DIN 931 / DIN 933',
      'Chassis brackets, cab mounts, agricultural frames, general industrial equipment',
    ],
  },
  {
    cells: [
      'Class 10.9 High-Tensile Bolt',
      '1040 – 1090 MPa',
      '940 MPa',
      'M8 – M36',
      'ISO 898-1 / DIN 931 / DIN 6914',
      'Powertrain mounting, suspension arm joints, axle flanges, mining machine frames',
    ],
  },
  {
    cells: [
      'Class 12.9 Socket Cap Screw',
      '1220 MPa',
      '1100 MPa',
      'M6 – M30',
      'ISO 898-1 / DIN 912 / ISO 4762',
      'Tool-and-die fixtures, high-pressure hydraulic pumps, cylinder heads, stamping dies',
    ],
  },
  {
    cells: [
      'ASTM A325 Heavy Structural Bolt',
      '830 MPa min',
      '635 MPa min',
      '1/2" – 1-1/2"',
      'ASTM A325 / ASME B18.2.6',
      'Heavy crane runway girders, equipment skid frames, structural machinery bases',
    ],
  },
  {
    cells: [
      'ASTM A490 High-Strength Bolt',
      '1040 – 1210 MPa',
      '900 MPa min',
      '1/2" – 1-1/2"',
      'ASTM A490 / ASME B18.2.6',
      'High-stress dynamic equipment joints, crusher frames, mining shaker screens',
    ],
  },
  {
    cells: [
      'ASTM A193 B7 Alloy Stud Bolt',
      '860 MPa min',
      '725 MPa min',
      'M12 – M64 (1/2" – 2-1/2")',
      'ASTM A193 / A194 2H',
      'High-temperature turbine casing flanges, boiler piping, pressure vessels, refinery valves',
    ],
  },
];

const COATING_ROWS = [
  {
    cells: [
      'Zinc Flake (Geomet / Dacromet)',
      '5 – 15 µm',
      '1000+ hours',
      'Zero hydrogen embrittlement risk; integrated lubricant provides tight friction (µ = 0.12–0.15)',
      'Automotive powertrain, chassis Class 10.9 fasteners, exposed trailer hardware',
    ],
  },
  {
    cells: [
      'Zinc-Nickel (Zn-Ni 12–15% Ni)',
      '6 – 12 µm',
      '1200+ hours',
      'Superior resistance to road salts and high engine temperatures (up to 200 °C); excellent galvanic match to aluminum',
      'Automotive engine bay, brake caliper brackets, steering linkages, electrical earth studs',
    ],
  },
  {
    cells: [
      'Trivalent Zinc Electroplate (Cr3+)',
      '5 – 12 µm',
      '72 – 240 hours',
      'Uniform thin layer preserves thread pitch; mandatory hydrogen bake-out required for Class 10.9',
      'Interior vehicle hardware, agricultural machinery, cabin brackets, electrical enclosures',
    ],
  },
  {
    cells: [
      'Hot-Dip Galvanizing (HDG)',
      '45 – 85 µm',
      '2000+ hours',
      'Exceptional sacrificial zinc protection; requires thread overtapping; prohibited on Class 12.9 due to embrittlement',
      'Heavy earth-moving structural skids, mining gantry anchors, outdoor substation hardware',
    ],
  },
  {
    cells: [
      'Chemical Black Oxide',
      '0.5 – 1.0 µm',
      'Nil (requires oil film)',
      'Zero dimensional change on precision threads; excellent oil retention; non-reflective optical finish',
      'Class 12.9 socket cap screws, internal machine tool fixtures, hydraulic cylinder tooling',
    ],
  },
];

const DRAWING_CHECKLIST_ROWS = [
  {
    cells: ['Drawing Number & Revision Level', 'Ensures tooling and production adhere to current engineering design without revision mismatch.'],
  },
  {
    cells: ['Target PPAP Level (Level 2 / 3)', 'Defines inspection scope: standard dimensional FAIR vs full statistical process capability study (CpK).'],
  },
  {
    cells: ['Material Specification & Heat Treat', 'Directs bar stock selection (e.g., 42CrMo4, 4140, SCM435) and quench-and-temper hardness targets (HRC).'],
  },
  {
    cells: ['Critical Dimensional Tolerances', 'Identifies tight diametrical tolerances (h6/g6) requiring secondary CNC turning or centerless grinding.'],
  },
  {
    cells: ['Coating Specification & Friction Range', 'Specifies OEM coating standard (e.g., Geomet 500A) and coefficient of friction window (e.g., µ = 0.12–0.15).'],
  },
  {
    cells: ['Non-Destructive Testing Requirements', 'Dictates magnetic particle inspection (MPI) for surface cracks or ultrasonic testing on heavy diameters.'],
  },
];

const DISPATCH_DOC_ROWS = [
  {
    cells: ['MTC EN 10204 3.1', 'Included as default with every batch', 'Chemical melt analysis & mechanical tensile values from primary mill.'],
  },
  {
    cells: ['Dimensional Inspection Report', 'Included as default with every batch', 'Sample thread gauge (go/no-go), shank diameter, and length verification.'],
  },
  {
    cells: ['Hardness Inspection Log', 'Included as default with every batch', 'Rockwell HRC or Brinell HBW testing across production sample lots.'],
  },
  {
    cells: ['Coating Thickness Report', 'Included on all coated hardware', 'Calibrated magnetic or eddy-current measurement per ASTM B499.'],
  },
  {
    cells: ['First Article Inspection (FAIR)', 'Supplied for new drawing tool-up', 'Comprehensive AS9102-style layout report for initial pilot production.'],
  },
  {
    cells: ['NABL Laboratory Tensile & Proof Load', 'Available on formal request', 'Certified destructive tensile and wedge proof load testing from accredited labs.'],
  },
  {
    cells: ['PPAP Level 2 Submission Package', 'Available on formal request', 'Warrant, FAIR, material certification, and coating verification package.'],
  },
  {
    cells: ['Positive Material Identification (PMI)', 'Available on formal request', 'XRF spectrometer elemental verification for high-alloy and stainless grades.'],
  },
];

const FORMS = [
  {
    title: 'Custom Fasteners on Drawing',
    slug: '/products/custom-fasteners/',
    anchorText: 'custom specials on drawing',
    description:
      'Precision CNC turned and cold-headed custom fasteners, stepped studs, and specialized shoulder bolts manufactured to drawing.',
  },
  {
    title: 'High-Tensile Fasteners Guide',
    slug: '/materials/high-tensile-fasteners/',
    anchorText: 'high-tensile grade decision guide',
    description:
      'Comprehensive technical comparison of Property Classes 8.8, 10.9, and 12.9, proof load ratings, and hydrogen embrittlement avoidance.',
  },
  {
    title: 'Structural Hex Bolts & Nuts',
    slug: '/products/hex-bolts-nuts/',
    anchorText: 'PC 10.9 structural hex bolts',
    description:
      'Heavy-duty metric hex head bolts, flanged screws, and high-tensile mating nuts for chassis and structural machinery frames.',
  },
  {
    title: 'Socket Head Cap & CSK Screws',
    slug: '/products/csk-allen-bolts/',
    anchorText: 'PC 12.9 socket cap in black oxide',
    description:
      'High-strength DIN 912 Allen socket head cap screws and countersunk bolts in Class 10.9 and 12.9 for tooling and machine fixtures.',
  },
  {
    title: 'Alloy & Stainless Stud Bolts',
    slug: '/products/stud-bolts/',
    anchorText: 'A193 B7 / B7M / B16 OEM stud bolts',
    description:
      'Continuous-threaded and double-end studs in ASTM A193 B7, B16, and B8M stainless steel for power plant and turbine flange joints.',
  },
  {
    title: 'Stainless Steel Materials Guide',
    slug: '/materials/stainless-steel-fasteners/',
    anchorText: 'SS 316 / 316L for corrosive service',
    description:
      'Metallurgical guide to austenitic stainless steel grades SS 304 and molybdenum-bearing SS 316 for corrosive automotive exhaust service.',
  },
];

export default function Page() {
  const route = findRoute(PATH);
  const trail = route?.breadcrumbTrail ?? [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/industries/' },
    { label: 'Automotive & Heavy Engineering', href: PATH },
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
      { '@type': 'Thing', name: 'Automotive Fasteners' },
      { '@type': 'Thing', name: 'Heavy Engineering Fasteners' },
      { '@type': 'Thing', name: 'High Tensile Bolts Class 10.9' },
      { '@type': 'Thing', name: 'Precision Custom Studs' },
    ],
    isRelatedTo: [
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/products/custom-fasteners/`,
        name: 'Custom Fasteners Manufacturing',
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/materials/high-tensile-fasteners/`,
        name: 'High Tensile Fasteners Engineering Guide',
      },
    ],
  };

  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqPage(FAQS)} />

      {/* 1. Hero */}
      {/* VERIFICATION PENDING: Real photograph of PC 10.9/12.9 inventory at KP Fasteners Ahmedabad facility — ref: brief §6 hero-automotive-heavy-engg-kp.webp & §10 item 9 */}
      <Section>
        <Container>
          <Breadcrumbs trail={trail} />
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="badge badge-gold">Automotive Tier &amp; Heavy Engineering Fastener Supply · PC 10.9 &amp; 12.9</p>
              <Heading as="h1" variant="hero" className="mt-4 font-heading">
                <span className="text-gold-gradient">Automotive Fasteners Manufacturer</span> &amp; Heavy Engineering Supply
              </Heading>
              <hr className="rule-metal mt-5 w-40" aria-hidden="true" />
              <p className="mt-6 max-w-2xl text-lg text-ink-muted">
                Precision high-tensile fasteners, socket head cap screws, and drawing-based custom studs for tier-2/tier-3 automotive component manufacturing and heavy machinery OEMs. Backed by MTC EN 10204 3.1, in-house hardness testing, and full heat-number traceability.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/request-quote/?industry=automotive-heavy-engg"
                  className="btn btn-primary"
                >
                  <FileText aria-hidden="true" className="h-4 w-4" />
                  &nbsp;Send engineering drawing
                </Link>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle aria-hidden="true" className="h-4 w-4" />
                  &nbsp;WhatsApp our heavy-engg desk
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
                    alt="KP Fasteners high-tensile automotive fasteners — Class 10.9 and 12.9 bolts, socket cap screws, and precision studs"
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
              Automotive &amp; heavy-engineering fasteners — drawing-based OEM via custom-fasteners; property-class 8.8/10.9/12.9 hex trading from vetted mills. Not IATF 16949 certified — tier-1/tier-2 appropriate only.
            </ClassificationBanner>
          </div>
        </Container>
      </Section>

      {/* 2. Scope & Target Audience: Who this page is for (and who it is NOT for) */}
      {/* VERIFICATION PENDING: Confirm whether KP actively serves automotive OEMs or tier suppliers (tier-1, tier-2, tier-3) & IATF 16949 status — ref: brief §10 items 1 & 4 */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <HardHat aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Who this page is for — and who it is NOT for
            </Heading>
          </div>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <Prose>
              <p>
                In the precision fastening sector, technical transparency builds lasting commercial partnerships. KP Fasteners engineers and distributes fasteners specifically tailored for <strong>automotive tier-2 and tier-3 component sub-assembly</strong>, heavy commercial trailer builders, agricultural equipment manufacturers, earth-moving plant builders, and industrial heavy-machinery OEMs.
              </p>
              <p className="mt-4">
                Our capabilities center on high-precision{' '}
                <Link
                  href="/products/custom-fasteners/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  custom specials on drawing
                </Link>
                , continuous-threaded{' '}
                <Link
                  href="/products/stud-bolts/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  A193 B7 / B7M / B16 OEM stud bolts
                </Link>
                , and high-tensile{' '}
                <Link
                  href="/products/hex-bolts-nuts/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  PC 10.9 structural hex bolts
                </Link>{' '}
                and{' '}
                <Link
                  href="/products/csk-allen-bolts/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  PC 12.9 socket cap in black oxide
                </Link>
                . We maintain full lot traceability, pass-through mill test certificates (EN 10204 3.1), and calibrated in-house hardness testing.
              </p>
            </Prose>
            <Prose>
              <p>
                Equally important is acknowledging what we do <strong>not</strong> do. KP Fasteners does not hold IATF 16949 certification on v1, nor do we supply direct line-side fasteners to major passenger vehicle assembly plants (such as Maruti Suzuki, Tata Motors, or Hyundai). OEM line-side supply mandates stringent Level 3 PPAP sign-offs, annual customer audit approvals, and multi-tier PPM reporting that exceed standard general-engineering supply scopes.
              </p>
              <p className="mt-4">
                Furthermore, safety-critical Class-A automotive hardware (such as brake hydraulic caliper pins, steering column crash shafts, or airbag canister studs) and aerospace/defence missile systems are strictly outside our production scope. For tier sub-assemblies, heavy machinery, and industrial gearboxes, KP Fasteners delivers proven metallurgical reliability without inflated administrative overhead.
              </p>
            </Prose>
          </div>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Sub-Sector',
                'Typical Fastener Families',
                'Material / Grade Scope',
                'Recommended Protective Finish',
                'KP Supply Role',
              ]}
              rows={SECTOR_SCOPE_ROWS}
              caption="Application scope and KP supply model across automotive tier manufacturing and heavy engineering sub-sectors."
            />
          </div>
        </Container>
      </Section>

      {/* 3. Fastener Stack Per Sub-Sector */}
      {/* VERIFICATION PENDING: Confirm heavy-engineering sector list (power / machinery / mining / oil & gas BOP / agricultural) — ref: brief §10 item 2 */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Layers aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Fastener stack per sub-sector: mechanical specifications &amp; tribology
            </Heading>
          </div>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Automotive and heavy machinery assemblies experience severe dynamic vibration, cyclic shear loads, and thermal expansion. The table below details recommended fastener geometries, property classes, surface barriers, and torque behavior across representative applications:
          </p>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Application Sub-Sector',
                'Typical Fastener Geometry & Function',
                'Property Class / Material',
                'Surface Coating & Barrier',
                'Tightening & Tribology Note',
              ]}
              rows={FASTENER_STACK_ROWS}
            />
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card variant="default" padding="lg">
              <Heading as="h3" variant="card">
                Automotive Tier-2 / Tier-3 Assembly
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                Bracketry, powertrain sub-frames, and suspension link mounts. Driven by Class 10.9 flanged bolts with micro-encapsulated threadlockers and non-electrolytic zinc flake coatings to eliminate hydrogen embrittlement.
              </p>
            </Card>

            <Card variant="default" padding="lg">
              <Heading as="h3" variant="card">
                Heavy Earth-Moving &amp; Mining Machinery
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                Excavators, wheel loaders, and mining haul trucks. Requires high-strength alloy studs (42CrMo4) and heavy hex bolts capable of enduring continuous shock loads, abrasive dust, and dynamic reverse bending.
              </p>
            </Card>

            <Card variant="default" padding="lg">
              <Heading as="h3" variant="card">
                Power Generation &amp; Turbine BOP
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                Steam turbine casings, gas compressors, and balance-of-plant (BOP) piping. Demands high-temperature ASTM A193 B7 and B16 alloy studs with matching A194 2H heavy hex nuts for creep resistance up to 550 °C.
              </p>
            </Card>

            <Card variant="default" padding="lg">
              <Heading as="h3" variant="card">
                Industrial Machinery &amp; Tool-and-Die
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                Stamping presses, plastic injection molds, and heavy industrial gearboxes. Relies on DIN 912 Class 12.9 socket head cap screws in black oxide for maximum tensile strength (1220 MPa) in compact counterbores.
              </p>
            </Card>

            <Card variant="default" padding="lg">
              <Heading as="h3" variant="card">
                Agricultural Equipment &amp; Tractors
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                Tractor chassis, disc harrows, and harvester combines. Demands rugged Class 8.8 and 10.9 structural bolts with heavy yellow zinc plating to resist agricultural chemical fertilizers, mud, and humidity.
              </p>
            </Card>

            <Card variant="default" padding="lg">
              <Heading as="h3" variant="card">
                Oil &amp; Gas Refinery Flanges
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                Process pipe flanges and heat exchanger nozzles. Utilizes continuous-threaded stud bolts in ASTM A193 B7 (alloy steel) and B8M (SS 316) paired with corrosion-resistant Xylan/PTFE coatings.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 4. Property Classes SpecTable */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <Gauge aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Property class mechanical properties: ISO 898-1 vs ASTM structural grades
            </Heading>
          </div>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Mechanical property comparisons across metric property classes and imperial structural standards commonly specified on automotive and machinery engineering drawings:
          </p>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Property Class / Grade',
                'Min Tensile Strength (MPa)',
                'Min Yield Strength (MPa)',
                'Typical Diameter Range',
                'Governing Standards',
                'Primary Structural Application',
              ]}
              rows={SPEC_SCHEDULE_ROWS}
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link
              href="/materials/high-tensile-fasteners/"
              className="font-semibold text-brand-gold-strong hover:underline"
            >
              Explore our full high-tensile grade decision guide (Class 8.8 vs 10.9 vs 12.9) →
            </Link>
            <Link
              href="/materials/stainless-steel-fasteners/"
              className="font-semibold text-brand-gold-strong hover:underline"
            >
              Review SS 316 / 316L for corrosive powertrain &amp; exhaust service →
            </Link>
          </div>
        </Container>
      </Section>

      {/* 5. Coating Choice Block: Durability vs Tribology */}
      {/* VERIFICATION PENDING: Confirm OEM-coded coating partners (zinc-nickel / Dacromet / Geomet) — ref: brief §10 item 8 */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Wrench aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Coating selection for automotive &amp; heavy engineering: durability vs tribology
            </Heading>
          </div>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <Prose>
              <p>
                In high-tensile engineering, surface coating selection is not simply a matter of red-rust salt-spray hours. For automotive bolted joints, <strong>tribological consistency</strong>—specifically maintaining a controlled coefficient of friction (µ typically between 0.12 and 0.15)—is critical to ensure that applied tightening torque translates accurately into clamping preload without under-tightening or thread stripping.
              </p>
              <p className="mt-4">
                Furthermore, fasteners heat-treated above 320 HV (such as Property Class 10.9 and 12.9) are highly vulnerable to <strong>hydrogen embrittlement</strong> during acid pickling and electroplating baths. Atomic hydrogen diffuses into the steel grain boundaries, triggering sudden catastrophic brittle fracture under sustained static tensile load.
              </p>
            </Prose>
            <Prose>
              <p>
                To eliminate hydrogen risks, our primary recommendation for Class 10.9 automotive fasteners is <strong>non-electrolytic zinc flake coatings (Geomet 500 / Dacromet)</strong>. Applied via a dip-spin and thermal curing process, zinc flake coatings introduce zero hydrogen into the steel lattice, deliver over 1,000 hours of neutral salt-spray resistance (ASTM B117), and incorporate integrated lubricants that guarantee uniform torque-tension dynamics.
              </p>
              <p className="mt-4">
                For Class 12.9 fasteners, we strictly supply chemical <strong>black oxide with oil</strong>. Black oxide adds no dimensional thickness, preserving ultra-precise class 6g thread fits on high-stress tool-room socket screws. Where electroplating is unavoidable on Class 10.9 components, mandatory de-embrittlement baking at 200–220 °C is performed within four hours of plating.
              </p>
            </Prose>
          </div>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Coating Technology',
                'Layer Thickness',
                'Salt-Spray Resistance (ASTM B117)',
                'Tribology & Hydrogen Risk Profile',
                'Recommended Industrial Application',
              ]}
              rows={COATING_ROWS}
              caption="Technical comparison of surface finishes across protective life, friction characteristics, and hydrogen embrittlement behavior."
            />
          </div>
        </Container>
      </Section>

      {/* 6. Capability Honesty & Exclusions Callout */}
      <Section variant="alt">
        <Container>
          <div className="rounded-xl border border-border bg-surface p-8 shadow-card">
            <div className="flex items-start gap-4">
              <ShieldAlert aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-brand-gold-strong" />
              <div>
                <Heading as="h2" variant="section">
                  Capability honesty: what KP Fasteners does NOT do
                </Heading>
                <p className="mt-3 text-ink-muted">
                  Clear capability boundaries protect our clients from supply chain disruptions. We explicitly document our engineering limits so procurement teams can engage with complete confidence:
                </p>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg border border-border bg-surface-alt p-5">
                    <h3 className="text-base font-semibold text-brand-steel">
                      What KP Fasteners Reliably Delivers:
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                        Class 8.8, 10.9 &amp; 12.9 standard metric bolts &amp; socket screws
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                        Custom studs, stepped bolts, and guide pins turned to drawing
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                        High-temperature ASTM A193 B7/B16 turbine casing stud bolts
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                        MTC EN 10204 3.1 with chemical melt analysis and heat numbers
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                        PPAP Level 2 packages and FAIR sample inspection logs
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg border border-border bg-surface-alt p-5">
                    <h3 className="text-base font-semibold text-brand-steel">
                      Explicit Manufacturing Exclusions:
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                      <li className="flex items-start gap-2">
                        <AlertTriangle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                        <span><strong>Direct Passenger-Car OEM Supply:</strong> We do not hold IATF 16949 certification or provide line-side delivery directly to automobile assembly plants.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                        <span><strong>Safety-Critical Category-A Fasteners:</strong> Airbag assemblies, braking hydraulic circuits, and steering column safety pins are excluded.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                        <span><strong>Aerospace, Defence Ballistic &amp; Nuclear:</strong> Fasteners requiring AS9100, military QPL lists, or nuclear safety-grade testing are outside our scope.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                        <span><strong>Proprietary OEM-Coded Standards:</strong> Ford WX, GM GMW, or VW TL standards requiring proprietary licensed chemistry are not offered unless open commercial equivalents apply.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. Custom Drawing Path & Automotive-Grade Checklist */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Compass aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Custom-drawing path &amp; automotive engineering drawing checklist
            </Heading>
          </div>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <Prose>
              <p>
                When off-the-shelf catalog fasteners cannot satisfy tight mechanical clearances, specialized shoulder diameters, or custom thread pitch combinations, KP Fasteners executes custom production runs directly against your engineering 2D PDF and 3D CAD models.
              </p>
              <p className="mt-4">
                Our Ahmedabad manufacturing unit operates precision cold-heading equipment and multi-axis CNC turning centers capable of holding tight diametrical tolerances (down to ±0.02 mm) across stepped shanks, undercut heads, and rolled threads. Explore our full custom manufacturing capabilities on{' '}
                <Link
                  href="/products/custom-fasteners/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  custom specials on drawing
                </Link>
                .
              </p>
            </Prose>
            <Prose>
              <p>
                To expedite engineering review and ensure accurate quote turnaround, verify that your drawing package includes critical parameters detailed in the automotive checklist below. Specifying surface finish, hardness ranges, and friction requirements upfront prevents costly engineering iterations during prototype tooling.
              </p>
            </Prose>
          </div>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Drawing Checklist Parameter',
                'Why It Matters for Automotive & Heavy Engineering Procurement',
              ]}
              rows={DRAWING_CHECKLIST_ROWS}
            />
          </div>
        </Container>
      </Section>

      {/* 8. Quality Documentation & Dispatch Envelope */}
      {/* VERIFICATION PENDING: Confirm PPAP capability (Level 2 on request vs Level 3 case-by-case), FAIR template, and in-house PMI gun — ref: brief §10 items 3, 6 & 7 */}
      <Section variant="alt">
        <Container>
          <div className="rounded-xl border border-border bg-surface p-8 shadow-card">
            <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
              <div>
                <div className="flex items-center gap-2">
                  <FileCheck aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
                  <Heading as="h2" variant="section">
                    Quality documentation &amp; dispatch inspection envelope
                  </Heading>
                </div>
                <p className="mt-4 text-ink-muted">
                  Every production consignment leaving our Ahmedabad facility is accompanied by complete inspection documentation, ensuring total traceability and compliance with engineering specifications:
                </p>

                <div className="mt-6">
                  <SpecTable
                    headers={[
                      'Documentation Deliverable',
                      'Availability Status',
                      'Verification Scope & Deliverable Details',
                    ]}
                    rows={DISPATCH_DOC_ROWS}
                  />
                </div>
              </div>
              <div className="space-y-4 text-center lg:text-right">
                <Link
                  href="/quality/"
                  className="btn btn-secondary"
                >
                  MTC EN 10204 3.1, PPAP Level 2 / 3, PMI, NABL tensile →
                </Link>
                <p className="text-xs text-ink-muted">
                  Learn more about our quality control lab, hardness testing calibration, and NABL partner network.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 9. Cross-Link Grid */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Wrench aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Related automotive &amp; heavy engineering fastener product lines
            </Heading>
          </div>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Explore dedicated technical catalogs and materials selection guides across our high-tensile and precision fastener lines:
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

      {/* 10. FAQ */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">
            Frequently asked questions about automotive &amp; heavy engineering fasteners
          </Heading>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Key engineering answers regarding automotive tier supply, PPAP documentation, lead times, hydrogen embrittlement avoidance, and high-temp alloy studs.
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

      {/* 11. CTA Band */}
      <Section>
        <Container>
          <div className="rounded-2xl border border-border bg-surface p-8 text-center shadow-card sm:p-12">
            <Heading as="h2" variant="section" className="mx-auto max-w-2xl font-heading">
              Send your automotive or heavy engineering drawing for quote
            </Heading>
            <p className="mx-auto mt-4 max-w-2xl text-ink-muted">
              Submit your 2D PDF drawing, 3D CAD model, or fastener bill of materials. Our engineering sales team will analyze tolerances, confirm coating specifications, and issue an itemized commercial quotation within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/request-quote/?industry=automotive-heavy-engg"
                className="btn btn-primary"
              >
                <FileText aria-hidden="true" className="h-4 w-4" />
                &nbsp;Send an automotive / heavy-engg drawing
              </Link>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                &nbsp;WhatsApp our heavy-engg desk
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
