import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  MessageCircle,
  FileText,
  ArrowRight,
  ShieldCheck,
  Factory,
  Truck,
  Wrench,
  HelpCircle,
} from 'lucide-react';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Accordion } from '@/components/ui/Accordion';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqPage } from '@/lib/jsonld';
import { company } from '@/data/company';
import { findRoute } from '@/data/routes';

const PATH = '/products/';
const HERO_IMAGE = '/images/products/bolts/hex-bolt-hex-nut.webp';

const META_TITLE = 'Industrial Fasteners Manufacturer & Product Range | KP';
const META_DESCRIPTION =
  'Industrial fasteners manufacturer and supplier in Ahmedabad. Browse foundation bolts, stud bolts, sag rods, hex bolts & solar hardware. Request an RFQ today.';

export const metadata: Metadata = buildMetadata({
  path: PATH,
  title: META_TITLE,
  description: META_DESCRIPTION,
  ogImage: HERO_IMAGE,
});

const WA_URL =
  'https://wa.me/919898230448?text=' +
  encodeURIComponent(
    "Hi KP Fasteners, I'm browsing your product range and want to enquire about fasteners. Size: [ ], Grade: [ ], Quantity: [ ]"
  );
const TEL = `tel:${company.telephones[0].replace(/[^\d+]/g, '')}`;

interface ProductCardData {
  slug: string;
  name: string;
  href: string;
  classification: 'oem' | 'ambiguous' | 'trading';
  badgeText: string;
  badgeClass: string;
  value: string;
  standards: string;
  image: string;
  imageAlt: string;
  linkText: string;
}

{/* VERIFICATION PENDING: Real inventory lay-flat photography for products hub hero - ref: brief §6 / §10 Q5 */}
const PRODUCT_CARDS: ProductCardData[] = [
  // OEM (3) - Manufactured in-house at Ahmedabad plant
  {
    slug: 'foundation-bolts',
    name: 'Foundation Bolts',
    href: '/products/foundation-bolts/',
    classification: 'oem',
    badgeText: 'Manufactured in-house',
    badgeClass: 'badge badge-gold',
    value: 'J, L, U, headed and swedge anchors to IS 5624, DIN 529 and ASTM F1554. Mild steel, EN8D, and high-tensile grades with HDG or zinc plating.',
    standards: 'IS 5624 · DIN 529 · ASTM F1554',
    image: '/images/products/bolts/foundation-anchor-bolts.webp',
    imageAlt: 'KP Fasteners foundation bolts - J, L, U and mechanical anchor bolts to IS 5624 and ASTM F1554',
    linkText: 'View Foundation Bolts',
  },
  {
    slug: 'stud-bolts',
    name: 'Stud Bolts',
    href: '/products/stud-bolts/',
    classification: 'oem',
    badgeText: 'Manufactured in-house',
    badgeClass: 'badge badge-gold',
    value: 'Fully threaded, tap-end, and double-end studs to ASTM A193 B7 / B8 / B8M and DIN 976 for high-pressure piping, valves, and structural flanges.',
    standards: 'ASTM A193 B7/B8/B8M · DIN 976',
    image: '/images/products/threaded-rods/threaded-rod-stud.webp',
    imageAlt: 'KP Fasteners ASTM A193 B7 stud bolt assembly with dual heavy hex nuts',
    linkText: 'View Stud Bolts',
  },
  {
    slug: 'sag-rods',
    name: 'Sag Rods',
    href: '/products/sag-rods/',
    classification: 'oem',
    badgeText: 'Manufactured in-house',
    badgeClass: 'badge badge-gold',
    value: 'Threaded sag rods and tie bars for PEB purlin bracing, structural steel frames, and solar racking cross-bracing in customizable lengths.',
    standards: 'IS 2062 · Grade 4.6 / 8.8',
    image: '/images/products/threaded-rods/sag-rod.webp',
    imageAlt: 'KP Fasteners threaded sag rod assembly with dual hex nuts for structural PEB bracing',
    linkText: 'View Sag Rods',
  },
  // Ambiguous (2) - Hybrid: manufactured in-house or partner-supplied SKU-specific
  {
    slug: 'scaffold-accessories',
    name: 'Scaffold Accessories',
    href: '/products/scaffold-accessories/',
    classification: 'ambiguous',
    badgeText: 'Manufactured & supplied',
    badgeClass: 'badge badge-gold',
    value: 'Wing nuts, tie-rod nut sets, waller plates, water stoppers, and shuttering accessories for civil formwork and staging structures.',
    standards: 'BS 1139 · EN 74 · IS 2750',
    image: '/images/products/threaded-rods/wedge-anchor.webp',
    imageAlt: 'Scaffold accessories - wing nuts, nut sets, waller plates',
    linkText: 'View Scaffold Accessories',
  },
  {
    slug: 'custom-fasteners',
    name: 'Custom Fasteners',
    href: '/products/custom-fasteners/',
    classification: 'ambiguous',
    badgeText: 'Manufactured & supplied',
    badgeClass: 'badge badge-gold',
    value: 'Drawing-based OEM manufacturing and non-standard fastener sourcing to customer blueprints, custom step-shanks, and special threads.',
    standards: 'Custom Blueprints · ISO / DIN / ASTM',
    image: '/images/products/bolts/socket-head-cap-screw.webp',
    imageAlt: 'Custom fasteners - non-standard and drawing-to-sample',
    linkText: 'View Custom Fasteners',
  },
  // Trading (4) - Distribution range from vetted partners
  {
    slug: 'hex-bolts-nuts',
    name: 'Hex Bolts & Nuts',
    href: '/products/hex-bolts-nuts/',
    classification: 'trading',
    badgeText: 'Distribution range',
    badgeClass: 'badge badge-steel',
    value: 'DIN 933 / DIN 931 / ISO 4017 full-thread and half-thread hex bolts with matching DIN 934 nuts in property classes 4.6, 8.8, and 10.9.',
    standards: 'DIN 933, DIN 931, ISO 4017, DIN 934',
    image: '/images/products/bolts/hex-bolt-hex-nut.webp',
    imageAlt: 'Hex bolts and nuts - DIN 933 / DIN 934 distribution range',
    linkText: 'View Hex Bolts & Nuts',
  },
  {
    slug: 'csk-allen-bolts',
    name: 'CSK Allen Bolts',
    href: '/products/csk-allen-bolts/',
    classification: 'trading',
    badgeText: 'Distribution range',
    badgeClass: 'badge badge-steel',
    value: 'Countersunk socket head cap screws to DIN 7991 / ISO 10642 in high-tensile 10.9 and stainless steel for flush-mount mechanical assemblies.',
    standards: 'DIN 7991, ISO 10642, Grade 10.9 / A2',
    image: '/images/products/bolts/allen-socket-csk-screw.webp',
    imageAlt: 'Countersunk Allen socket screw - DIN 7991',
    linkText: 'View CSK Allen Bolts',
  },
  {
    slug: 'tie-rods',
    name: 'Tie Rods',
    href: '/products/tie-rods/',
    classification: 'trading',
    badgeText: 'Distribution range',
    badgeClass: 'badge badge-steel',
    value: 'Hot-rolled and cold-drawn formwork tie rods D15 / D20, English and French thread profiles, with compatible anchor nuts for concrete formwork.',
    standards: 'D15 / D20, Tensile 150 kN+',
    image: '/images/products/threaded-rods/tie-rod.webp',
    imageAlt: 'Formwork tie rods - D15 and D20 diameter',
    linkText: 'View Tie Rods',
  },
  {
    slug: 'solar-accessories',
    name: 'Solar Accessories',
    href: '/products/solar-accessories/',
    classification: 'trading',
    badgeText: 'Distribution range',
    badgeClass: 'badge badge-steel',
    value: 'T-head bolts, MMS flange bolts, hanger bolts, and module clamps in SS 304 / SS 316 and hot-dip galvanized finishes for solar racking.',
    standards: 'SS 304, SS 316, HDG, ISO 3506',
    image: '/images/products/bolts/hex-flange-bolt.webp',
    imageAlt: 'Solar mounting accessories - MMS bolts, clamps, hanger bolts',
    linkText: 'View Solar Accessories',
  },
];

const MATERIAL_CARDS = [
  {
    slug: 'high-tensile-fasteners',
    title: 'High-Tensile Carbon & Alloy Steel',
    href: '/materials/high-tensile-fasteners/',
    badge: 'Class 8.8, 10.9 & 12.9',
    description:
      'Property class 8.8, 10.9, and 12.9 carbon and alloy steels, plus IS 5624 property class 4.6 for foundation anchorage. Heat-treated for structural steel, heavy machinery, and high-load civil connections.',
    image: '/product-images/high-tensile/hero.webp',
    imageAlt: 'High-tensile fasteners - property class 8.8 and 10.9 bolts',
    linkText: 'Explore High-Tensile Fasteners',
  },
  {
    slug: 'stainless-steel-fasteners',
    title: 'Stainless Steel 304 & 316 Fasteners',
    href: '/materials/stainless-steel-fasteners/',
    badge: 'A2-70 & A4-70 Marine Grade',
    description:
      'Austenitic stainless steels providing superior atmospheric and chemical corrosion resistance. SS 304 (A2-70) for outdoor infrastructure and food-grade service; marine-grade SS 316 (A4-70) with 2-3% molybdenum for coastal and chemical environments.',
    image: '/product-images/stainless-steel/hero.webp',
    imageAlt: 'KP Fasteners stainless steel 304 and 316 fastener range including U-bolts, nuts, washers and studs',
    linkText: 'Explore Stainless Steel Fasteners',
  },
];

const INDUSTRY_CARDS = [
  {
    slug: 'construction-infrastructure',
    title: 'Construction & Infrastructure',
    href: '/industries/construction-infrastructure/',
    badge: 'Heavy Civil & PEB',
    description:
      'Pre-engineered buildings (PEB), structural steel framing, civil foundations, shuttering formwork, and precast infrastructure anchors meeting IS 5624 and IS 1367 load standards.',
    image: '/product-images/construction/hero.webp',
    imageAlt: 'High-tensile structural steel fasteners and hex bolts installed on PEB construction site',
    linkText: 'View Construction Fasteners',
  },
  {
    slug: 'solar-mounting-fasteners',
    title: 'Solar EPCs & MMS Fabricators',
    href: '/industries/solar-mounting-fasteners/',
    badge: 'Rooftop & Utility MMS',
    description:
      'Corrosion-resistant solar module mounting structure (MMS) hardware including T-head bolts, mid/end clamps, flange nuts, and hanger bolts designed for 25-year structural service life.',
    image: '/product-images/solar/hero.webp',
    imageAlt: 'Stainless steel solar mounting fasteners and module clamp assembly on solar panel structure',
    linkText: 'View Solar Fasteners',
  },
  {
    slug: 'automotive-heavy-engineering',
    title: 'Automotive & Heavy Engineering',
    href: '/industries/automotive-heavy-engineering/',
    badge: 'Machinery & Plant OEMs',
    description:
      'High-tensile socket head cap screws, precision hex fasteners, and custom drawing-matched components engineered for equipment manufacturers, tooling fixtures, and industrial machinery.',
    image: '/product-images/automotive/hero.webp',
    imageAlt: 'Precision high-tensile socket head cap screws and hex fasteners on heavy industrial machinery',
    linkText: 'View Heavy Engineering Fasteners',
  },
];

const FAQS = [
  {
    question: 'Do you manufacture all these categories in-house, or do you also trade?',
    answer:
      'KP Fasteners is a registered Manufacturer and Wholesale supplier in Ahmedabad. Foundation bolts, stud bolts, and sag rods are manufactured directly in-house at our Ghanshyam Industrial Estate facility. Other fastener families - such as hex bolts & nuts, CSK Allen bolts, formwork tie rods, and solar mounting hardware - are supplied through our vetted industrial partner network with incoming dimensional and grade inspection before dispatch.',
  },
  {
    question: 'What if my fastener requirement is not listed in these nine categories?',
    answer:
      'If your project requires non-standard dimensions, bespoke head configurations, or special materials not listed in our standard catalogue, send your engineering drawing, sample photograph, or technical specification via our Request a Quote form or on WhatsApp (+91 98982 30448). We evaluate custom drawing-based requests through our custom fasteners line.',
  },
  {
    question: 'Which sizes and material grades do you stock for immediate dispatch?',
    answer:
      'Stock coverage varies by product family. High-demand foundation bolts (M16 to M36 in standard lengths), commercial stud bolts (ASTM A193 B7 M12 to M36), standard DIN 933 hex bolts (grades 4.6, 8.8, and 10.9), and SS 304 solar hardware are maintained in regular inventory. For non-stock sizes or project-specific mill batches, our typical manufacturing or partner dispatch turnaround is confirmed on your quotation line.',
  },
];

export default function ProductsHubPage() {
  const route = findRoute(PATH);
  const trail = route?.breadcrumbTrail ?? [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products/' },
  ];

  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}/products/#collectionpage`,
    url: `${SITE_URL}/products/`,
    name: META_TITLE,
    description: META_DESCRIPTION,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: PRODUCT_CARDS.length,
      itemListElement: PRODUCT_CARDS.map((card, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: card.name,
        url: `${SITE_URL}${card.href}`,
      })),
    },
  };

  const faqSchema = faqPage(FAQS);

  return (
    <>
      <JsonLd data={collectionPageSchema} />
      <JsonLd data={faqSchema} />

      {/* 1. Hero Section */}
      <Section>
        <Container>
          <Breadcrumbs trail={trail} />

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <span className="badge badge-gold">Ahmedabad Manufacturing &amp; Supply</span>
              <Heading as="h1" variant="hero" className="mt-4 font-heading">
                Our Industrial Fastener{' '}
                <span className="text-gold-gradient">Product Range</span>
              </Heading>
              <hr className="rule-metal mt-5 w-40" aria-hidden="true" />
              <p className="mt-6 max-w-2xl text-lg text-ink-muted">
                Nine comprehensive fastener product lines manufactured or stocked at our Ahmedabad unit.
                Select an engineering family below, navigate by material or industry, or share technical
                drawings for custom precision fabrication.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link href="/request-quote/?src=products-hub" className="btn btn-primary shadow-gold">
                  <FileText aria-hidden="true" className="h-4 w-4" />
                  <span>Request Product Range Quote</span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4 ml-0.5" />
                </Link>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <MessageCircle aria-hidden="true" className="h-4 w-4 text-emerald-600" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            {/* VERIFICATION PENDING: Real inventory lay-flat photography for products hub hero - ref: brief §6 / §10 Q5 */}
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-transparent p-3">
              <Image
                src={HERO_IMAGE}
                alt="KP Fasteners industrial fastener product range overview in Ahmedabad"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-contain"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. "How we classify what we sell" explainer */}
      <Section variant="alt" aria-label="Supply Classification Model">
        <Container>
          <div className="max-w-3xl">
            <span className="badge badge-steel">Procurement Transparency</span>
            <Heading as="h2" variant="section" className="mt-3">
              How We Classify What We Sell
            </Heading>
            <p className="mt-3 text-ink-muted">
              To eliminate procurement ambiguity, every product line at KP Fasteners is categorized under one of
              three clear supply models. You receive verified clarity on whether items are fabricated directly in
              our Ahmedabad workshop or sourced through our qualified industrial distribution network.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card variant="metallic" padding="lg" className="flex flex-col">
              <div className="flex items-center gap-2">
                <Factory aria-hidden="true" className="h-5 w-5 text-brand-gold-strong" />
                <span className="font-heading text-xs font-bold uppercase tracking-wider text-brand-gold-strong">Manufactured in-house</span>
              </div>
              <Heading as="h3" variant="card" className="mt-4">
                OEM In-House (3 Families)
              </Heading>
              <p className="mt-2 flex-1 text-sm text-ink-muted">
                Foundation bolts, stud bolts, and sag rods are manufactured directly at our Ahmedabad plant.
                Full dimensional control, EN 10204 3.1 MTC documentation, and complete heat traceability.
              </p>
            </Card>

            <Card variant="metallic" padding="lg" className="flex flex-col">
              <div className="flex items-center gap-2">
                <Wrench aria-hidden="true" className="h-5 w-5 text-brand-gold-strong" />
                <span className="font-heading text-xs font-bold uppercase tracking-wider text-brand-gold-strong">Manufactured &amp; supplied</span>
              </div>
              <Heading as="h3" variant="card" className="mt-4">
                Hybrid Supply (2 Families)
              </Heading>
              <p className="mt-2 flex-1 text-sm text-ink-muted">
                Scaffold accessories and custom fasteners combine in-house production with qualified partner
                fabrication. Standard components are machined in-house; specialized secondary processes are partner-supplied.
              </p>
            </Card>

            <Card variant="metallic" padding="lg" className="flex flex-col">
              <div className="flex items-center gap-2">
                <Truck aria-hidden="true" className="h-5 w-5 text-brand-steel" />
                <span className="font-heading text-xs font-bold uppercase tracking-wider text-brand-steel">Distribution range</span>
              </div>
              <Heading as="h3" variant="card" className="mt-4">
                Distribution Range (4 Families)
              </Heading>
              <p className="mt-2 flex-1 text-sm text-ink-muted">
                Hex bolts &amp; nuts, CSK Allen bolts, formwork tie rods, and solar accessories supplied from
                trusted primary manufacturers. Single PO, consolidated dispatch, and pan-India logistics.
              </p>
            </Card>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-ink-muted">
            <span>Learn more about our operations:</span>
            <Link
              href="/about/"
              className="inline-flex items-center gap-1 font-semibold text-brand-steel hover:text-brand-gold-strong hover:underline"
            >
              Ahmedabad Manufacturing Facility <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              href="/tools/"
              className="inline-flex items-center gap-1 font-semibold text-brand-steel hover:text-brand-gold-strong hover:underline"
            >
              Engineering Tools &amp; Calculators <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* 3. 9-Card Product Grid */}
      <Section aria-label="Product Categories">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="badge badge-gold">Full Product Scope</span>
              <Heading as="h2" variant="section" className="mt-3">
                All 9 Fastener Product Categories
              </Heading>
              <p className="mt-3 max-w-2xl text-ink-muted">
                Explore our full product catalogue with standard sizing ranges, material options, and manufacturing
                specifications. Select any family to view complete dimensional data and request a tailored quote.
              </p>
            </div>
            <Link href="/request-quote/?src=products-hub-grid" className="btn btn-secondary">
              <FileText aria-hidden="true" className="h-4 w-4" />
              &nbsp;Bulk RFQ Submission
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_CARDS.map((prod) => (
              <Card
                key={prod.slug}
                variant="metallic"
                padding="md"
                className="flex h-full flex-col transition-shadow hover:shadow-card-elevated"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-transparent p-2">
                  <Image
                    src={prod.image}
                    alt={prod.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <Heading as="h3" variant="card" className="mt-4">
                  {prod.name}
                </Heading>
                <p className="mt-2 flex-1 text-sm text-ink-muted">
                  {prod.value}
                </p>
                <div className="mt-3 border-t border-border pt-3">
                  <p className="text-xs text-ink-muted">
                    <span className="font-semibold text-brand-steel">Standards:</span>{' '}
                    <span className="mono-numbers">{prod.standards}</span>
                  </p>
                </div>
                <Link
                  href={prod.href}
                  className="mt-4 inline-flex items-center gap-1 font-heading text-sm font-semibold text-brand-gold-strong hover:underline"
                >
                  {prod.linkText} <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Material Rail */}
      <Section variant="alt" aria-label="Browse by Material">
        <Container>
          <div>
            <span className="badge badge-steel">Metallurgical Selection</span>
            <Heading as="h2" variant="section" className="mt-3">
              Browse Fasteners by Material &amp; Metallurgy
            </Heading>
            <p className="mt-3 max-w-2xl text-ink-muted">
              Select fasteners configured for specific tensile load classes or harsh environmental conditions.
              We supply carbon, alloy, and austenitic stainless steels with full MTC 3.1 chemical verification.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {MATERIAL_CARDS.map((mat) => (
              <Card key={mat.slug} variant="metallic" padding="lg" className="flex flex-col">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-transparent p-2">
                  <Image
                    src={mat.image}
                    alt={mat.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between gap-2">
                  <span className="badge badge-gold">{mat.badge}</span>
                </div>

                <Heading as="h3" variant="card" className="mt-3">
                  {mat.title}
                </Heading>

                <p className="mt-2 flex-1 text-sm text-ink-muted">{mat.description}</p>

                <Link
                  href={mat.href}
                  className="mt-4 inline-flex items-center gap-1 font-heading text-sm font-semibold text-brand-gold-strong hover:underline"
                >
                  {mat.linkText} <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Industry Rail */}
      <Section aria-label="Browse by Industry">
        <Container>
          <div>
            <span className="badge badge-steel">Application Focus</span>
            <Heading as="h2" variant="section" className="mt-3">
              Fasteners Configured for Key Industrial Sectors
            </Heading>
            <p className="mt-3 max-w-2xl text-ink-muted">
              Pre-configured fastener packages aligned with sector-specific installation methods, structural
              loading criteria, and outdoor corrosion requirements.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* VERIFICATION PENDING: Client to confirm heavy engineering & automotive OEM client base - ref: brief §4.3 / §10 Q3 */}
            {INDUSTRY_CARDS.map((ind) => (
              <Card key={ind.slug} variant="metallic" padding="lg" className="flex flex-col">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-metal-subtle/20">
                  <Image
                    src={ind.image}
                    alt={ind.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between gap-2">
                  <span className="badge badge-steel">{ind.badge}</span>
                </div>

                <Heading as="h3" variant="card" className="mt-3">
                  {ind.title}
                </Heading>

                <p className="mt-2 flex-1 text-sm text-ink-muted">{ind.description}</p>

                <Link
                  href={ind.href}
                  className="mt-4 inline-flex items-center gap-1 font-heading text-sm font-semibold text-brand-gold-strong hover:underline"
                >
                  {ind.linkText} <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. "What we don't sell" honesty wedge */}
      <Section variant="alt" aria-label="Scope Exclusions">
        <Container>
          {/* VERIFICATION PENDING: Client to confirm 'What we don't sell' exclusion list - ref: brief §3 / §10 Q4 */}
          <div className="rounded-xl border border-metal-subtle bg-surface p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <ShieldCheck aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-brand-gold-strong" />
              <div>
                <Heading as="h2" variant="card" className="text-brand-steel">
                  What We Do Not Sell - Upfront Procurement Honesty
                </Heading>
                <p className="mt-3 text-ink-muted">
                  Industrial buyers lose valuable time discovering after multiple emails that a vendor cannot supply
                  specific hardware. We do not stock or supply rivets, self-drilling screws, wood screws, or aerospace-grade
                  titanium fasteners.
                </p>
                <p className="mt-2 text-ink-muted">
                  If your bill of materials includes these lines, we will let you know immediately and focus our quotation
                  strictly on the structural, foundation, and threaded industrial fasteners we manufacture or distribute with
                  complete reliability.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. Quality Assurance Strip */}
      <Section aria-label="Quality and Certification">
        <Container>
          <div className="rounded-xl border border-metal-subtle bg-surface p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-center">
              <div>
                <span className="badge badge-gold">EN 10204 3.1 Certification</span>
                <Heading as="h2" variant="section" className="mt-3">
                  Mill Test Certificates on Every Dispatch
                </Heading>
                <p className="mt-3 text-ink-muted">
                  All production lots at KP Fasteners undergo thread gauge verification, tensile and proof load testing,
                  and dimensional inspection. EN 10204 Type 3.1 Mill Test Certificates detailing chemical heat numbers
                  and mechanical test results are provided with your dispatch documentation.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
                <Link href="/tools/" className="btn btn-secondary w-full sm:w-auto text-center">
                  Fastener Weight &amp; Torque Tools <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
                <Link href="/request-quote/?src=products-quality" className="btn btn-primary w-full sm:w-auto text-center">
                  Request Specification Quote
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 8. Frequently Asked Questions */}
      <Section variant="alt" aria-label="Frequently Asked Questions">
        <Container>
          <div className="flex items-center gap-3">
            <HelpCircle aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Frequently Asked Questions About Our Product Scope
            </Heading>
          </div>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Direct answers to common procurement questions regarding in-house manufacturing, non-standard dimensions,
            and stock availability.
          </p>

          {/* VERIFICATION PENDING: Client to confirm exact made-vs-traded split across all categories before publish - ref: brief §5 Q1 / §10 Q2 */}
          {/* VERIFICATION PENDING: Client to confirm custom fastener MOQ and typical lead times - ref: brief §5 Q2 */}
          <div className="mt-8 max-w-3xl">
            <Accordion items={FAQS} />
          </div>
        </Container>
      </Section>

      {/* 9. Final Closing CTA Band */}
      <Section aria-label="Procurement Call to Action">
        <Container>
          <Card variant="metallic" padding="lg" className="text-center">
            <Heading as="h2" variant="section" className="text-brand-steel">
              Not Sure Which Fastener Family You Need?
            </Heading>
            <p className="mx-auto mt-4 max-w-2xl text-ink-muted">
              Share your engineering drawing, bill of quantities (BOQ), or technical standard. Our Ahmedabad
              engineering team will review dimensional tolerances, confirm stock or production schedules, and return
              a competitive quotation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/request-quote/?src=products-hub-closing" className="btn btn-primary">
                <FileText aria-hidden="true" className="h-4 w-4" />
                &nbsp;Request a Formal Quote
              </Link>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                &nbsp;WhatsApp Technical Sales
              </a>
              <a href={TEL} className="btn btn-secondary">
                <Phone aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                &nbsp;Call +91 98982 30448
              </a>
            </div>
            <p className="mt-6 text-xs text-ink-muted">
              Working Hours: Mon-Sat 09:30-19:00 IST · Ahmedabad Manufacturing Facility &amp; Pan-India Dispatch
            </p>
          </Card>
        </Container>
      </Section>
    </>
  );
}
