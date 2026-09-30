import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { VerificationRequired } from '@/components/ui/VerificationRequired';
import { homepage } from '@/data/homepage';
import { company } from '@/data/company';

export default function HomePage() {
  const tel = `tel:${company.telephones[0].replace(/[^\d+]/g, '')}`;
  const wa = `https://wa.me/${company.whatsapp.number.replace(/[^\d]/g, '')}?text=${encodeURIComponent(company.whatsapp.prefill)}`;

  return (
    <>
      <Section>
        <Container>
          <VerificationRequired>
            Site under construction — copy pending client review.
          </VerificationRequired>
        </Container>
      </Section>
      <Section>
        <Container>
          <Heading as="h1" variant="hero">
            {homepage.heroH1}
          </Heading>
          <p className="mt-4 max-w-2xl text-lg text-ink">{homepage.heroTagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={homepage.primaryCta.href} variant="primary">
              {homepage.primaryCta.label}
            </Button>
            <a
              href={tel}
              className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-semibold text-brand-steel"
            >
              Call {company.telephones[0]}
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-semibold text-brand-steel"
            >
              WhatsApp
            </a>
          </div>
          <nav aria-label="Explore" className="mt-10">
            <ul className="flex flex-wrap gap-4 text-sm">
              <li><Link href="/products/" className="underline">Products</Link></li>
              <li><Link href="/materials/high-tensile-fasteners/" className="underline">Materials</Link></li>
              <li><Link href="/industries/solar-mounting-fasteners/" className="underline">Industries</Link></li>
              <li><Link href="/contact/" className="underline">Contact</Link></li>
            </ul>
          </nav>
        </Container>
      </Section>
    </>
  );
}
