import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { VerificationRequired } from '@/components/ui/VerificationRequired';
import { findRoute } from '@/data/routes';

export function StubPage({ path, title }: { path: string; title: string }) {
  const route = findRoute(path);
  return (
    <Section>
      <Container>
        {route && <Breadcrumbs trail={route.breadcrumbTrail} />}
        <div className="mt-4">
          <VerificationRequired>
            This page is a scaffold. Copy and specifications are pending client verification.
          </VerificationRequired>
        </div>
        <Heading as="h1" variant="hero" className="mt-6">
          {title}
        </Heading>
        <p className="mt-4 max-w-2xl text-ink">
          Content for this page will be published once product and material data has been verified by
          the client. Meanwhile, please <Link href="/contact/" className="underline">contact us</Link>{' '}
          or <Link href="/request-quote/" className="underline">request a quote</Link>.
        </p>
        <p className="mt-6">
          <Link href="/" className="underline text-brand-steel">Return to homepage</Link>
        </p>
      </Container>
    </Section>
  );
}
