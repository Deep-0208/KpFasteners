import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';

export default function NotFound() {
  return (
    <Section>
      <Container>
        <Heading as="h1" variant="hero">Page not found</Heading>
        <p className="mt-4 text-ink">You may be looking for one of these:</p>
        <ul className="mt-6 grid gap-2 text-brand-steel">
          <li><Link className="underline" href="/">Home</Link></li>
          <li><Link className="underline" href="/products/">Products</Link></li>
          <li><Link className="underline" href="/contact/">Contact</Link></li>
          <li><Link className="underline" href="/request-quote/">Request a Quote</Link></li>
        </ul>
      </Container>
    </Section>
  );
}
