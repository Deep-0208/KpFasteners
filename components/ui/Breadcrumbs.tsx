import Link from 'next/link';
import type { BreadcrumbEntry } from '@/types/route';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbs as breadcrumbsSchema } from '@/lib/jsonld';

export function Breadcrumbs({ trail }: { trail: BreadcrumbEntry[] }) {
  if (trail.length <= 1) return null;
  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm text-ink-muted">
        <ol className="flex flex-wrap gap-1">
          {trail.map((t, i) => (
            <li key={t.href} className="flex items-center gap-1">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i === trail.length - 1 ? (
                <span aria-current="page">{t.label}</span>
              ) : (
                <Link href={t.href} className="hover:text-brand-steel">
                  {t.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbsSchema(trail)} />
    </>
  );
}
