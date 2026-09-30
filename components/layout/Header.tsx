import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { headerNav } from '@/data/navigation';
import { MobileMenu } from '@/components/layout/MobileMenu';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight text-brand-steel">
            KP Fasteners
          </Link>
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex gap-6">
              {headerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm font-medium text-ink hover:text-brand-steel">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
