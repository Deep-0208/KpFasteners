import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';
import { HeroCarousel } from '@/components/homepage/HeroCarousel';
import { heroCarouselImages } from '@/data/hero-carousel-images';
import { JsonLd } from '@/components/seo/JsonLd';
import { itemList } from '@/lib/jsonld';
import { company } from '@/data/company';
import { productCategories } from '@/data/products';

const WA_URL =
  'https://wa.me/919898230448?text=' +
  encodeURIComponent(company.whatsapp.prefill);

const findCat = (slug: string) => productCategories.find((p) => p.slug === slug)!;

const oemCards = [
  {
    name: 'Foundation / Anchor Bolts',
    value: 'J, L, U and hooked anchors — IS 5624, F1554 classes.',
    href: '/products/foundation-bolts/',
    image: findCat('foundation-bolts').image,
    imageAlt: findCat('foundation-bolts').imageAlt,
  },
  {
    name: 'Stud Bolts',
    value: 'ASTM A193 B7 / B8 / B8M, DIN 976 — flanges and structural.',
    href: '/products/stud-bolts/',
    image: findCat('stud-bolts').image,
    imageAlt: findCat('stud-bolts').imageAlt,
  },
  {
    name: 'Sag Rods',
    value: 'Threaded sag rods for PEB bracing and solar racking.',
    href: '/products/sag-rods/',
    image: findCat('sag-rods').image,
    imageAlt: findCat('sag-rods').imageAlt,
  },
  {
    name: 'Scaffold Accessories',
    value: 'Tie-rod nut sets, wing nuts, waller plates — make + supply.',
    href: '/products/scaffold-accessories/',
    image: findCat('scaffold-accessories').image,
    imageAlt: findCat('scaffold-accessories').imageAlt,
  },
];

const tradingCards = [
  {
    name: 'Hex Bolts & Nuts',
    value: 'Metric and imperial, grades 4.6 to 10.9.',
    href: '/products/hex-bolts-nuts/',
    image: findCat('hex-bolts-nuts').image,
    imageAlt: findCat('hex-bolts-nuts').imageAlt,
  },
  {
    name: 'CSK Allen Bolts',
    value: 'Countersunk socket cap screws across finishes.',
    href: '/products/csk-allen-bolts/',
    image: findCat('csk-allen-bolts').image,
    imageAlt: findCat('csk-allen-bolts').imageAlt,
  },
  {
    name: 'Tie Rods',
    value: 'Formwork tie rods and turnbuckle assemblies.',
    href: '/products/tie-rods/',
    image: findCat('tie-rods').image,
    imageAlt: findCat('tie-rods').imageAlt,
  },
  {
    name: 'Solar Accessories',
    value: 'MMS bolts, T-head bolts, hanger bolts, module clamps.',
    href: '/products/solar-accessories/',
    image: findCat('solar-accessories').image,
    imageAlt: findCat('solar-accessories').imageAlt,
  },
  {
    name: 'Custom Fasteners',
    value: 'Drawing-based sourcing for non-standard SKUs.',
    href: '/products/custom-fasteners/',
    image: findCat('custom-fasteners').image,
    imageAlt: findCat('custom-fasteners').imageAlt,
  },
];

export default function HomePage() {
  const oemItems = productCategories
    .filter((p) => p.classification === 'oem')
    .map((p) => ({ name: p.name, url: p.path }));

  return (
    <>
      <JsonLd data={itemList(oemItems)} />

      {/* 1. Hero */}
      <Section className="pt-2 pb-6 md:pt-4 md:pb-8">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="badge badge-gold">Ahmedabad · OEM Manufacturer</p>
              <Heading as="h1" variant="hero" className="mt-2.5 text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.1] font-heading">
                Foundation, Anchor, Stud &amp; Sag Rod Bolts —{' '}
                <span className="text-gold-gradient">Made in Ahmedabad</span>
              </Heading>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-ink-muted leading-relaxed">
                Manufactured in-house at our Ghanshyam Industrial Estate plant. Full
                distribution range for construction, scaffolding and solar projects,
                pan-India dispatch.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link href="/request-quote/" className="btn btn-primary shadow-gold">
                  <FileText aria-hidden="true" className="h-4 w-4" />
                  <span>Request RFQ / Upload BOQ</span>
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
            <div className="relative group">
              {/* Product Showcase Carousel with Glassmorphism & Elevation */}
              <div className="relative aspect-[4/3] max-h-[330px] sm:max-h-[350px] w-full rounded-2xl bg-slate-50/60 backdrop-blur-md border border-slate-200/70 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] z-10 transition-all duration-500 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]">
                <HeroCarousel images={heroCarouselImages} />
              </div>
              {/* Decorative engineering precision accent frames */}
              <div
                className="hidden lg:block absolute -bottom-3 -right-3 w-24 h-24 border-[1.5px] border-slate-300/80 rounded-2xl -z-10 group-hover:border-brand-gold/40 transition-colors duration-500"
                aria-hidden="true"
              />
              <div
                className="hidden lg:block absolute -top-3 -left-3 w-16 h-16 border-[1.5px] border-brand-gold/30 rounded-2xl -z-10 bg-brand-gold/5"
                aria-hidden="true"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. OEM products */}
      <Section variant="alt">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <span className="badge badge-gold">Manufactured in-house</span>
              <Heading as="h2" variant="section" className="mt-3">
                OEM product lines
              </Heading>
              <p className="mt-3 max-w-2xl text-ink-muted">
                Made at our Ahmedabad plant. We quote with grade, coating, lead time
                and MTC availability.
              </p>
            </div>
            <Link href="/products/" className="btn btn-secondary">
              All products
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {oemCards.map((c) => (
              <Card
                key={c.href}
                variant="metallic"
                padding="lg"
                className="flex h-full flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-transparent p-2">
                  <Image
                    src={c.image}
                    alt={c.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <Heading as="h3" variant="card" className="mt-4">
                  {c.name}
                </Heading>
                <p className="mt-2 flex-1 text-sm text-ink-muted">{c.value}</p>
                <Link
                  href={c.href}
                  className="mt-4 inline-flex items-center gap-1 font-heading text-sm font-semibold text-brand-gold-strong hover:underline"
                >
                  View <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Distribution strip */}
      <Section>
        <Container>
          <div>
            <span className="badge badge-steel">Distribution range</span>
            <Heading as="h2" variant="section" className="mt-3">
              Also supplied from distribution
            </Heading>
            <p className="mt-3 max-w-2xl text-ink-muted">
              Honest positioning — these categories are sourced from vetted partners,
              not manufactured by us. One PO, one dispatch, pan-India delivery.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {tradingCards.map((c) => (
              <Card key={c.href} variant="default" padding="md" className="flex h-full flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-transparent p-2">
                  <Image
                    src={c.image}
                    alt={c.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <span className="badge badge-steel mt-3 w-fit">Distribution range</span>
                <Heading as="h3" variant="card" className="mt-3">
                  {c.name}
                </Heading>
                <p className="mt-2 flex-1 text-sm text-ink-muted">{c.value}</p>
                <Link
                  href={c.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-steel hover:text-brand-gold-strong"
                >
                  View <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. How you buy */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">How you buy from us</Heading>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Typical — confirmed on quote.
            {/* VERIFICATION PENDING: dispatch SLAs — "24–72 hrs Ahmedabad / 3–5
                days Gujarat / 5–8 days pan-India" taken from reference-defaults.md
                row 16; Kabir to confirm as the publishable baseline. */}
          </p>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                n: '1',
                h: 'Share spec / drawing',
                b: 'BOQ, drawing or part number — form, WhatsApp or email.',
              },
              {
                n: '2',
                h: 'Quote within 24 hrs',
                b: 'Material, coating, lead time and MTC availability on the line.',
              },
              {
                n: '3',
                h: 'Dispatch',
                b: '24–72 hrs Ahmedabad · 3–5 days Gujarat · 5–8 days pan-India.',
              },
            ].map((s) => (
              <li key={s.n} className="metallic-card p-6">
                <div className="font-heading text-3xl font-bold text-gold-gradient">{s.n}</div>
                <Heading as="h3" variant="card" className="mt-3">{s.h}</Heading>
                <p className="mt-2 text-sm text-ink-muted">{s.b}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* 5. Quality snippet */}
      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-[2fr_1fr] md:items-center">
            <div>
              <Heading as="h2" variant="section">Documentation &amp; quality</Heading>
              <p className="mt-3 max-w-2xl text-ink-muted">
                EN 10204 3.1 mill test certificates on request, dimensional inspection
                to IS 1367 / ISO 965, HDG per ISO 1461 where specified.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-ink">
                {[
                  'MTC 3.1 on request for OEM orders',
                  'Batch traceability on manufactured goods',
                  'Coating per spec: self-colour, zinc, HDG, PTFE',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 text-brand-gold-strong" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Link href="/tools/" className="btn btn-secondary">
                Fastener engineering tools
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. Closing CTA */}
      <Section>
        <Container>
          <Card variant="metallic" padding="lg">
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <Heading as="h2" variant="subsection">
                  <span className="text-gold-gradient">Share your BOQ. Quote back in 24 hrs.</span>
                </Heading>
                <p className="mt-3 max-w-2xl text-ink-muted">
                  Upload a drawing or paste a bill of materials — we quote with
                  standards, coatings and lead time.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/request-quote/" className="btn btn-primary">
                  Request a Quote
                </Link>
                <Link href="/contact/" className="btn btn-secondary">
                  Contact Sales Office
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
    </>
  );
}
