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
  Clock,
  Compass,
  MapPin,
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

const PATH = '/industries/solar-mounting-fasteners/';
const HERO_IMAGE = '/product-images/solar/hero.jpg';

// Title: 59 chars (50–60 range). Meta description: 160 chars (150–160 range).
const META_TITLE = 'Solar Mounting Bolts Supplier | Rooftop & Ground-Mount | KP';
const META_DESCRIPTION =
  'Fastener BOMs for rooftop residential, C&I, ground-mount & tracker solar: SS 304/316 module hardware, HDG substructure & OEM pier anchors. Request an RFQ quote.';

export const metadata: Metadata = buildMetadata({
  path: PATH,
  title: META_TITLE,
  description: META_DESCRIPTION,
  ogImage: HERO_IMAGE,
});

const WA_PREFILL =
  'Hi KP Fasteners, I need a solar BOQ quote. Project type: [rooftop/ground-mount/tracker], Size: [MWp], Location: [city,state], Coastal? [Y/N], Fastener BOM: [ ]';
const WA_URL = 'https://wa.me/919898230448?text=' + encodeURIComponent(WA_PREFILL);
const TEL = `tel:${company.telephones[0].replace(/[^\d+]/g, '')}`;

// VERIFICATION PENDING: Confirm tracker OEM supply scope — does KP supply tracker torque-tube BOMs today or fixed-tilt + rooftop only? — ref: brief §10 item 1
// VERIFICATION PENDING: Confirm dispatch SLA table by state and pin-code cluster — ref: brief §10 item 2
// VERIFICATION PENDING: Confirm anonymised project references and named EPC references with written permission — ref: brief §10 items 3 & 4
// VERIFICATION PENDING: Confirm coastal solar project references with SS 316 upgrade — ref: brief §10 item 5
// VERIFICATION PENDING: Real photograph of solar MMS cross-section and fastener inventory at KP Fasteners Ahmedabad facility — ref: brief §6 hero-solar-industry-kp.webp & §10 item 6
// VERIFICATION PENDING: Confirm indicative fastener quantities per MWp — ref: brief §10 item 7
// VERIFICATION PENDING: Confirm stocked J-bolt sizes for solar piers vs MTO lead times — ref: brief §10 item 8

const FAQS = [
  {
    question: 'Do you supply fasteners for both rooftop and ground-mount solar?',
    answer:
      'Yes — rooftop residential, rooftop commercial & industrial (C&I), ground-mount fixed-tilt and single-axis tracker projects. The fastener bill of materials differs by project type: SS 304 throughout for inland rooftop; HDG 8.8 substructure plus SS 304 module-side for ground-mount; and a mandatory upgrade to SS 316 on all exposed hardware within ~5 km of the coast.',
  },
  {
    question: 'Does KP manufacture any of these solar fasteners in-house?',
    answer:
      'We manufacture the substructure anchorage in-house at our Ahmedabad plant — including J-bolt, L-bolt, and headed foundation bolts to IS 5624 and ASTM F1554 for concrete piers. The module-side fasteners (T-head bolts, module clamps, hanger bolts, MMS purlin bolts) are distributed from vetted partner mills, enabling complete fastener schedules to be consolidated on a single PO with full MTC pass-through.',
  },
  {
    question: 'What is your typical lead time to a solar project site?',
    answer:
      'Standard stocked SKUs ship within 24–48 hours for Gujarat sites, 3–5 days for Rajasthan, and 5–8 days for Tamil Nadu and Karnataka project clusters. Custom made-to-order foundation bolts with project-specific embedment lengths or headed geometries typically require 7–14 days.',
  },
  {
    question: 'Do you supply MTC EN 10204 3.1 and salt-spray reports for solar BOQs?',
    answer:
      'Yes. Mill test certificates (MTC 3.1) are passed through from originating primary mills with KP Fasteners dispatch lot traceability. Hot-dip galvanizing coating thickness per ISO 1461 is verified in-house, and accelerated salt-spray reports per ASTM B117 or positive material identification (PMI) are available via accredited NABL partner laboratories on request.',
  },
  {
    question: 'Can you quote a complete fastener BOM against our MMS structure drawing?',
    answer:
      'Yes. Submit your mounting structure fabrication drawing, module frame datasheet, and site pin code. Our engineering sales team will extract and quote the complete fastener BOM covering concrete pier anchorage, rafter/purlin connections, and module clamps with material grades tailored to the site environmental exposure.',
  },
];

const BOM_ROWS = [
  {
    cells: [
      'Rooftop residential (tile / trap sheet)',
      'Hanger bolt + vulcanized EPDM washer',
      'Roof hook + extruded aluminum rail',
      'T-head bolt + channel nut + mid/end clamp',
      'SS 304 throughout (inland)',
    ],
  },
  {
    cells: [
      'Rooftop C&I (metal sheet on purlins)',
      'L-foot bracket or direct trapezoid clamp',
      'Rail + rail splice + DIN 6921 flange bolts',
      'T-head bolt + channel nut + mid/end clamp',
      'SS 304 module side; HDG 8.8 purlin bolts',
    ],
  },
  {
    cells: [
      'Ground-mount fixed-tilt (utility scale)',
      'J-bolt / L-bolt in concrete pier (OEM)',
      'MMS purlin bolt + structural channel',
      'T-head bolt + channel nut + mid/end clamp',
      'HDG 8.8 substructure + SS 304 module side',
    ],
  },
  {
    cells: [
      'Single-axis / dual-axis tracker',
      'Driven pile / pier anchor to drawing',
      'Torque-tube U-bolt + drive-arm clamps',
      'T-head bolt + channel nut + clamp assembly',
      'HDG 8.8 substructure + SS 304 module side',
    ],
  },
];

const SPEC_SCHEDULE_ROWS = [
  {
    cells: [
      'Foundation Pier Anchor Bolt',
      'J-bolt / L-bolt / Headed Anchor',
      'M16 – M30 × 450 – 900 mm',
      'IS 5624 Gr 4.6 / HDG Gr 8.8',
      'Cast into concrete pier to anchor vertical column base plates',
    ],
  },
  {
    cells: [
      'Column to Base Connection Bolt',
      'Hex Bolt + Heavy Nut + Washer',
      'M12 – M16 × 35 – 55 mm',
      'Grade 8.8 Hot-Dip Galvanised',
      'Secures vertical column upright to embedded pier base plate',
    ],
  },
  {
    cells: [
      'Rafter & Purlin Fastener',
      'Flange Bolt / Hex Bolt + Flange Nut',
      'M10 – M12 × 25 – 40 mm',
      'Grade 8.8 HDG / Geomet',
      'Fastens cold-formed purlins across longitudinal support rafters',
    ],
  },
  {
    cells: [
      'Rail Mounting T-Bolt',
      'Hammer-Head T-Bolt + Flange Nut',
      'M8 – M10 × 25 – 35 mm',
      'SS 304 (A2-70) / SS 316 (A4-70)',
      'Locks extruded aluminum mounting rail to steel purlin framework',
    ],
  },
  {
    cells: [
      'Module Mid Clamp Bolt',
      'Allen Socket Cap Screw + Channel Nut',
      'M8 × 35 – 50 mm',
      'SS 304 (A2-70) / SS 316 (A4-70)',
      'Clamps two adjacent solar PV module frames securely to rail',
    ],
  },
  {
    cells: [
      'Module End Clamp Bolt',
      'Allen Socket Cap Screw + Channel Nut',
      'M8 × 30 – 45 mm',
      'SS 304 (A2-70) / SS 316 (A4-70)',
      'Secures outer perimeter module frame at row and string terminations',
    ],
  },
  {
    cells: [
      'Roof Penetration Hanger Bolt',
      'Dual-Thread Stud + EPDM Washer',
      'M10 – M12 × 200 – 300 mm',
      'SS 304 (A2-70) Stainless Steel',
      'Penetrates sheet roofing into rafters with watertight EPDM seal',
    ],
  },
];

const ENVIRONMENT_ROWS = [
  {
    cells: [
      'Inland Utility / Urban Rooftop',
      'SS 304 (A2-70)',
      'HDG Grade 8.8 (ISO 1461)',
      'Standard baseline for 25-year design life in non-saline zones',
    ],
  },
  {
    cells: [
      'Coastal Solar (within ~5 km of sea)',
      'SS 316 (A4-70)',
      'HDG Grade 8.8 + epoxy over-paint',
      'Molybdenum-bearing 316 prevents pitting; epoxy seals buried pier bolts',
    ],
  },
  {
    cells: [
      'Chemical / Fertiliser / Cement Plant',
      'SS 316 (A4-70)',
      'SS 316 critical / HDG + epoxy',
      'Resists airborne acidic chlorides and sulfur dioxide fumes',
    ],
  },
  {
    cells: [
      'High Humidity (Hinterland / Agricultural)',
      'SS 304 (A2-70)',
      'HDG Grade 8.8',
      'Inspection schedule recommended at 5-year operational intervals',
    ],
  },
  {
    cells: [
      'Food & Dairy Processing Rooftop',
      'SS 304 or SS 316',
      'Passivated SS / HDG',
      'Chemical passivation per ASTM A967 prevents free iron contamination',
    ],
  },
  {
    cells: [
      'High Altitude / Cold Desert',
      'SS 304 (A2-70)',
      'HDG Grade 8.8',
      'Requires vulcanized EPDM washers rated to -40 °C for thermal cycling',
    ],
  },
];

const SLA_ROWS = [
  {
    cells: ['Gujarat (Home State)', 'Ahmedabad, Mehsana, Rajkot, Charanka, Mundra, Khavda', '24–48 hours'],
  },
  {
    cells: ['Rajasthan', 'Bikaner, Jaisalmer, Jodhpur, Bhadla', '3–5 business days'],
  },
  {
    cells: ['Maharashtra', 'Dhule, Solapur, Pune, Nagpur, Nashik', '4–6 business days'],
  },
  {
    cells: ['Karnataka', 'Pavagada, Bellary, Tumkur, Koppal', '5–7 business days'],
  },
  {
    cells: ['Tamil Nadu', 'Tuticorin, Ramanathapuram, Kamuthi, Coimbatore', '5–8 business days'],
  },
  {
    cells: ['Andhra Pradesh & Telangana', 'Anantapur, Kurnool, Mahbubnagar', '5–7 business days'],
  },
  {
    cells: ['North-East & Remote Hill Terrains', 'Assam, Arunachal Pradesh, Himachal Pradesh', 'Quoted per site logistics'],
  },
];

const GLOSSARY_TERMS = [
  {
    title: 'MMS (Module Mounting Structure)',
    description:
      'The complete engineered metallic support structure—including vertical columns, rafters, purlins, and rails—that fixes photovoltaic modules at the calculated tilt angle to maximize solar irradiance.',
  },
  {
    title: 'Purlins & Rafters',
    description:
      'Main longitudinal and transverse structural beams rolled from cold-formed galvanized steel. Purlins directly support mounting rails and are joined using Grade 8.8 HDG bolts and flange nuts.',
  },
  {
    title: 'Mid Clamps & End Clamps',
    description:
      'Precision-extruded clamps with matching socket cap screws. Mid clamps hold two adjacent panels in place, while end clamps secure perimeter module edges at string boundaries.',
  },
  {
    title: 'T-Head Bolts & Channel Nuts',
    description:
      'Specialized hammer-head fasteners that slide into aluminum profile channels and rotate 90 degrees to lock firmly in place, enabling rapid single-side module fastening.',
  },
  {
    title: 'Hanger Bolts (Solar Studs)',
    description:
      'Dual-threaded fasteners with wood or metal lag screw threads on one end and metric machine threads on the other, fitted with an EPDM sealing washer for leak-free rooftop installations.',
  },
  {
    title: 'Grounding Lugs & Bonding Pins',
    description:
      'Conductive stainless steel or tinned copper hardware designed to penetrate anodized aluminum oxide layers, creating continuous electrical bonding across module frames.',
  },
];

const FORMS = [
  {
    title: 'Solar MMS Fasteners & Clamps',
    slug: '/products/solar-accessories/',
    anchorText: 'SKU catalogue for solar MMS fasteners',
    description:
      'Full catalog of T-head bolts, mid and end clamps, channel nuts, and rooftop hanger bolts stocked in SS 304 and SS 316.',
  },
  {
    title: 'Foundation Pier Bolts',
    slug: '/products/foundation-bolts/',
    anchorText: 'J-bolts, L-bolts and headed anchorage for concrete piers',
    description:
      'Cast-in J-bolts, L-bolts, and welded plate assemblies manufactured in-house to IS 5624 and ASTM F1554 for ground-mount piers.',
  },
  {
    title: 'Retrofit Stud Bolts',
    slug: '/products/stud-bolts/',
    anchorText: 'chemical anchor stud retrofit',
    description:
      'High-tensile and stainless threaded studs for chemical capsule anchoring into existing concrete slabs and ballast blocks.',
  },
  {
    title: 'Hex Bolts & Flange Hardware',
    slug: '/products/hex-bolts-nuts/',
    anchorText: 'SS 304 hex bolts for structure sub-assembly',
    description:
      'DIN 933 hex bolts, DIN 6921 serrated flange bolts, and heavy hex nuts for structural rafter, purlin, and bracing connections.',
  },
  {
    title: 'Stainless Steel Materials Guide',
    slug: '/materials/stainless-steel-fasteners/',
    anchorText: 'SS 304 vs SS 316 vs SS 316L decision tree',
    description:
      'Comparative materials engineering guide covering pitting resistance (PREN), coastal atmospheric corrosion, and magnetism.',
  },
  {
    title: 'High-Tensile Steel Guide',
    slug: '/materials/high-tensile-fasteners/',
    anchorText: 'HDG 8.8 vs 10.9 for substructure',
    description:
      'ISO 898-1 mechanical property comparison, hydrogen embrittlement avoidance, and hot-dip galvanizing standards.',
  },
];

export default function Page() {
  const route = findRoute(PATH);
  const trail = route?.breadcrumbTrail ?? [
    { label: 'Home', href: '/' },
    { label: 'Solar Mounting Fasteners', href: PATH },
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
      { '@type': 'Thing', name: 'Solar Mounting Fasteners' },
      { '@type': 'Thing', name: 'Photovoltaic Balance of Systems' },
      { '@type': 'Thing', name: 'Solar EPC Structural Hardware' },
    ],
    isRelatedTo: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/products/solar-accessories/`,
      name: 'Solar MMS Fasteners Catalog',
    },
  };

  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqPage(FAQS)} />

      {/* 1. Hero */}
      {/* VERIFICATION PENDING: Real photograph of solar MMS cross-section and fastener inventory at KP Fasteners Ahmedabad facility — ref: brief §6 hero-solar-industry-kp.webp & §10 item 6 */}
      <Section>
        <Container>
          <Breadcrumbs trail={trail} />
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="badge badge-gold">Solar Photovoltaic Fastener Supply · Rooftop, C&amp;I &amp; Ground-Mount</p>
              <Heading as="h1" variant="hero" className="mt-4 font-heading">
                <span className="text-gold-gradient">Solar Mounting Fasteners</span> Supplier — Rooftop, Ground-Mount &amp; Tracker BOMs
              </Heading>
              <hr className="rule-metal mt-5 w-40" aria-hidden="true" />
              <p className="mt-6 max-w-2xl text-lg text-ink-muted">
                Engineered fastener bills of materials (BOMs) for utility ground-mount, commercial rooftop, and tracker solar arrays. From in-house manufactured foundation pier anchors to corrosion-resistant SS 304/316 module mounting hardware, delivered across India.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/request-quote/?industry=solar"
                  className="btn btn-primary"
                >
                  <FileText aria-hidden="true" className="h-4 w-4" />
                  &nbsp;Send a solar BOQ
                </Link>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle aria-hidden="true" className="h-4 w-4" />
                  &nbsp;WhatsApp our solar desk
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
                    alt="KP Fasteners solar mounting hardware — T-bolts, mid and end clamps, foundation bolts, and purlin fasteners for solar structures"
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
              Solar structure fasteners — SS 304/316 trading from vetted mills; project-spec OEM via{' '}
              <Link href="/products/custom-fasteners/" className="font-semibold underline">
                /products/custom-fasteners/
              </Link>.
            </ClassificationBanner>
          </div>
        </Container>
      </Section>

      {/* 2. Sibling Page Distinction */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">
            Project-level fastener engineering vs catalog hardware
          </Heading>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <Prose>
              <p>
                Solar engineering procurement requires viewing fasteners not merely as discrete catalog items, but as an integrated <strong>structural bill of materials (BOM)</strong> that secures a multi-megawatt capital asset against high wind uplift, seismic vibration, and multi-decade atmospheric corrosion.
              </p>
              <p className="mt-4">
                This industry page serves as an EPC project guide, detailing complete hardware stacks for specific mounting typologies—from concrete pier anchorage to module clamps—and defining material selection rules for coastal and industrial environments.
              </p>
            </Prose>
            <Prose>
              <p>
                If your engineering team requires specific dimensional specifications, CAD drawings, or individual SKU item codes for T-head bolts, channel nuts, mid clamps, end clamps, or hanger bolt kits, explore our dedicated component catalog on our{' '}
                <Link
                  href="/products/solar-accessories/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  SKU catalogue for solar MMS fasteners
                </Link>.
              </p>
              <p className="mt-4">
                KP Fasteners bridges both requirements: we manufacture the civil substructure anchorage in-house in Ahmedabad and distribute verified module-side hardware, consolidating your complete solar fastener package onto a single purchase order.
              </p>
            </Prose>
          </div>
        </Container>
      </Section>

      {/* 3. Fastener Stack Per Project Type */}
      {/* VERIFICATION PENDING: Confirm tracker OEM supply scope — does KP supply tracker torque-tube BOMs today or fixed-tilt + rooftop only? — ref: brief §10 item 1 */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Layers aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Fastener stack per project type: complete bill of materials
            </Heading>
          </div>
          <p className="mt-3 max-w-3xl text-ink-muted">
            The mechanical fastener bill of materials differs fundamentally across solar mounting typologies. Below are the verified hardware stacks and material grades engineered for each installation type:
          </p>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Project Typology',
                'Substructure Anchorage',
                'Purlin / Rail Connection',
                'Module Side Hardware',
                'Default Material Split',
              ]}
              rows={BOM_ROWS}
              caption="Standard structural fastener bill of materials across solar mounting typologies."
            />
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card variant="default" padding="lg">
              <Heading as="h3" variant="card">
                Rooftop Residential
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                1–10 kWp installations on tiled or metal sheet roofs. Driven by dual-thread hanger bolts with EPDM sealing washers, aluminum mounting rails, and SS 304 module clamps.
              </p>
            </Card>

            <Card variant="default" padding="lg">
              <Heading as="h3" variant="card">
                Commercial &amp; Industrial (C&amp;I)
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                100 kWp to 5 MWp factory rooftops. Uses L-feet brackets or trapezoidal sheet clamps fastened to structural purlins with Grade 8.8 HDG bolts, paired with SS 304 module hardware.
              </p>
            </Card>

            <Card variant="default" padding="lg">
              <Heading as="h3" variant="card">
                Ground-Mount Utility
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                Multi-megawatt fixed-tilt arrays anchored to concrete piers using in-house manufactured J-bolts and L-bolts, with hot-dip galvanized structural framing and stainless panel clamps.
              </p>
            </Card>

            <Card variant="default" padding="lg">
              <Heading as="h3" variant="card">
                Tracker Arrays
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                Single-axis tracker rows experiencing continuous cyclic rotation. Demands heavy-duty torque-tube U-bolts, prevailing-torque lock nuts, and high fatigue-rated module fasteners.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 4. Fastener Specification Schedule */}
      {/* VERIFICATION PENDING: Confirm indicative fastener quantities per MWp — ref: brief §10 item 7 */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">
            Solar fastener specification schedule
          </Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Detailed dimensions, manufacturing standards, and functional engineering roles for primary fasteners across utility-scale and commercial solar arrays:
          </p>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Component Description',
                'Fastener Geometry',
                'Standard Diameter & Length',
                'Recommended Material Grade',
                'Application in Solar Array',
              ]}
              rows={SPEC_SCHEDULE_ROWS}
            />
          </div>
        </Container>
      </Section>

      {/* 5. MMS Lexicon & Glossary */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Wrench aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Solar mounting structure (MMS) terminology &amp; hardware glossary
            </Heading>
          </div>
          <p className="mt-3 max-w-3xl text-ink-muted">
            A quick engineering reference to standard industry terminology used across solar mounting drawings and procurement schedules:
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GLOSSARY_TERMS.map((term) => (
              <Card key={term.title} variant="default" padding="lg">
                <Heading as="h3" variant="card">
                  {term.title}
                </Heading>
                <p className="mt-2 text-sm text-ink-muted">{term.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. Environmental Material Selection */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <Compass aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Environmental material selection: SS 304 vs SS 316 vs HDG
            </Heading>
          </div>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Matching fastener materials to atmospheric corrosivity categories (per ISO 9223) ensures that the hardware matches the 25-year operational lifecycle of photovoltaic modules:
          </p>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Operating Environment',
                'Module Side Fasteners',
                'Substructure Fasteners',
                'Engineering Notes',
              ]}
              rows={ENVIRONMENT_ROWS}
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link
              href="/materials/stainless-steel-fasteners/"
              className="font-semibold text-brand-gold-strong hover:underline"
            >
              Explore our full SS 304 vs SS 316 vs SS 316L decision tree →
            </Link>
            <Link
              href="/materials/high-tensile-fasteners/"
              className="font-semibold text-brand-gold-strong hover:underline"
            >
              Compare HDG 8.8 vs 10.9 for substructure connections →
            </Link>
          </div>
        </Container>
      </Section>

      {/* 7. Coating Integrity & 25-Year Design Life */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">
            Coating integrity: matching fasteners to a 25-year solar design life
          </Heading>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <Prose>
              <p>
                Solar photovoltaic modules carry standard 25-year manufacturer performance warranties. However, an entire solar array is only as durable as its smallest mechanical connection. If sub-grade foundation anchors or module clamps corrode prematurely, the resulting maintenance overhead, retorquing cycles, and generation downtime can severely erode project internal rate of return (IRR).
              </p>
              <p className="mt-4">
                Accelerated laboratory salt-spray hours (such as ASTM B117) provide comparative quality metrics between production lots, but cannot simulate cyclic real-world atmospheric conditions. In natural service, hot-dip galvanized coatings form a protective zinc carbonate patina that resists uniform oxidation at predictable consumption rates (typically 1–2 µm per year in benign C2 inland environments).
              </p>
            </Prose>
            <Prose>
              <p>
                For inland ground-mount substructures, hot-dip galvanizing per <strong>ISO 1461</strong> / <strong>ASTM A153</strong> with a minimum coating thickness of 85 µm on heavy M16+ bolts provides sufficient sacrificial zinc reserve to achieve the 25-year design life without maintenance.
              </p>
              <p className="mt-4">
                In contrast, in coastal regions within 5 km of seawater (such as coastal Gujarat, Rajasthan salt plains, or Tamil Nadu shoreline installations), airborne marine chlorides attack zinc coatings aggressively. On these projects, standard HDG degrades rapidly, making molybdenum-bearing austenitic stainless steel (SS 316 / A4-70) mandatory on the module side, paired with heavy epoxy sealing on civil pier anchors.
              </p>
            </Prose>
          </div>
        </Container>
      </Section>

      {/* 8. Substructure Anchorage (OEM In-House) */}
      <Section variant="alt">
        <Container>
          <div className="rounded-xl border border-border bg-surface p-8 shadow-card">
            <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
              <div>
                <span className="badge badge-gold">OEM Manufacturing In-House</span>
                <Heading as="h2" variant="section" className="mt-3">
                  Substructure anchorage: in-house manufacturing for ground-mount piers
                </Heading>
                <p className="mt-4 text-ink-muted">
                  Unlike pure hardware distributors who supply only above-ground clamps, KP Fasteners operates dedicated manufacturing lines in Ahmedabad producing heavy-duty foundation and anchor bolts for solar concrete piers. We manufacture{' '}
                  <Link
                    href="/products/foundation-bolts/"
                    className="font-semibold text-brand-gold-strong hover:underline"
                  >
                    J-bolts, L-bolts and headed anchorage for concrete piers
                  </Link>{' '}
                  to IS 5624 and ASTM F1554 specifications.
                </p>
                <p className="mt-3 text-ink-muted">
                  For rooftop ballasted systems or plant retrofit upgrades, we supply custom{' '}
                  <Link
                    href="/products/stud-bolts/"
                    className="font-semibold text-brand-gold-strong hover:underline"
                  >
                    chemical anchor stud retrofit
                  </Link>{' '}
                  fasteners with certified tensile ratings. Consolidating pier anchorage and module hardware with KP Fasteners eliminates multi-vendor coordination risks on your procurement schedule.
                </p>
              </div>
              <div className="space-y-3 rounded-lg border border-border bg-surface-alt p-5 text-sm">
                <div className="flex items-center gap-2 font-semibold text-brand-steel">
                  <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-brand-gold-strong" />
                  M16 to M36 pier anchor diameters
                </div>
                <div className="flex items-center gap-2 font-semibold text-brand-steel">
                  <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-brand-gold-strong" />
                  IS 5624 &amp; ASTM F1554 compliance
                </div>
                <div className="flex items-center gap-2 font-semibold text-brand-steel">
                  <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-brand-gold-strong" />
                  Hot-dip galvanized to ASTM A153
                </div>
                <div className="flex items-center gap-2 font-semibold text-brand-steel">
                  <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-brand-gold-strong" />
                  Full heat-number batch traceability
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 9. Dispatch SLAs by Solar Cluster */}
      {/* VERIFICATION PENDING: Confirm dispatch SLA table by state and pin-code cluster — ref: brief §10 item 2 */}
      {/* VERIFICATION PENDING: Confirm stocked J-bolt sizes for solar piers vs MTO lead times — ref: brief §10 item 8 */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Clock aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Dispatch SLAs by solar-cluster region
            </Heading>
          </div>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Operating from our central manufacturing unit and warehouse in Ahmedabad, KP Fasteners maintains strategic logistics connectivity to major renewable energy corridors across India:
          </p>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Solar State / Cluster Region',
                'Key Solar Geographies Served',
                'Target Dispatch SLA (Standard Stocked SKUs)',
              ]}
              rows={SLA_ROWS}
              caption="Indicative transit SLAs for standard stocked solar fasteners. Custom foundation bolt production runs carry a 7–14 day manufacturing lead time."
            />
          </div>
        </Container>
      </Section>

      {/* 10. Project References */}
      {/* VERIFICATION PENDING: Confirm anonymised project references and named EPC references with written permission — ref: brief §10 items 3 & 4 */}
      {/* VERIFICATION PENDING: Confirm coastal solar project references with SS 316 upgrade — ref: brief §10 item 5 */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <MapPin aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Solar project fastener supply track record
            </Heading>
          </div>
          <div className="mt-6 rounded-lg border border-border bg-surface p-6">
            <p className="text-sm leading-relaxed text-ink-muted">
              KP Fasteners routinely supplies standard and custom fastener schedules to leading solar EPC contractors and mounting structure fabricators across Western and Southern India. Our hardware is installed across utility-scale ground-mount parks, industrial factory rooftops, and institutional microgrids. To respect client non-disclosure agreements, project-specific references and anonymized supply schedules are available upon confidential commercial enquiry.
            </p>
          </div>
        </Container>
      </Section>

      {/* 11. Cross-Link Grid */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">
            Related solar fastener product lines
          </Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Explore dedicated product catalogs and technical materials guides relevant to solar array construction:
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

      {/* 12. Quality Documentation & MTC */}
      <Section variant="alt">
        <Container>
          <div className="rounded-xl border border-border bg-surface p-8 shadow-card">
            <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
              <div>
                <Heading as="h2" variant="section">
                  Quality documentation &amp; MTC verification
                </Heading>
                <p className="mt-4 text-ink-muted">
                  Every consignment dispatched for solar installation is accompanied by complete quality documentation. We verify that all bolts, nuts, and clamps strictly comply with structural specifications before shipping to project sites:
                </p>
                <ul className="mt-4 space-y-2 text-sm text-ink">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                    EN 10204 3.1 mill test certificates with originating melt heat numbers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                    Hot-dip galvanizing coating thickness inspection per ISO 1461
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                    Positive Material Identification (PMI) on stainless steel hardware on request
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                    Third-party NABL laboratory mechanical and tensile verification
                  </li>
                </ul>
              </div>
              <div className="text-center lg:text-right">
                <Link
                  href="/quality/"
                  className="btn btn-secondary"
                >
                  MTC, PMI and HDG coating-thickness verification
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
            Frequently asked questions about solar mounting fasteners
          </Heading>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Key procurement questions regarding hardware typologies, lead times, in-house manufacturing capabilities, and structure drawings.
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
              Send your solar BOQ for a competitive project quote
            </Heading>
            <p className="mx-auto mt-4 max-w-2xl text-ink-muted">
              Submit your mounting structure drawings, module datasheets, or schedule of quantities. Our engineering sales team will verify fastener counts, confirm coating specifications, and issue an itemized project quotation within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/request-quote/?industry=solar"
                className="btn btn-primary"
              >
                <FileText aria-hidden="true" className="h-4 w-4" />
                &nbsp;Send a solar BOQ
              </Link>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                &nbsp;WhatsApp our solar desk
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
