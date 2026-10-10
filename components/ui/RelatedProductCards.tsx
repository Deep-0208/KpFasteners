import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Heading } from '@/components/ui/Heading';
import { getRelatedImage } from '@/data/products';

export interface RelatedProductItem {
  href: string;
  name?: string;
  title?: string;
  body?: string;
  description?: string;
  anchor?: string;
  anchorText?: string;
  image?: string;
  imageAlt?: string;
}

interface RelatedProductCardsProps {
  items: RelatedProductItem[];
  columns?: '3' | '4';
  className?: string;
}

export function RelatedProductCards({
  items,
  columns,
  className,
}: RelatedProductCardsProps) {
  const isThreeSplit = items.length === 3 && !columns;

  const defaultGridClass =
    columns === '4'
      ? 'grid gap-6 sm:grid-cols-2 lg:grid-cols-4'
      : isThreeSplit
      ? 'grid gap-6 sm:grid-cols-2 lg:grid-cols-12'
      : 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={className || defaultGridClass}>
      {items.map((item, idx) => {
        const name = item.name || item.title || '';
        const body = item.body || item.description || '';
        const anchor = item.anchor || item.anchorText || `Explore ${name}`;
        const fallback = getRelatedImage(item.href);
        const imageSrc = item.image || fallback.image;
        const imageAlt = item.imageAlt || fallback.imageAlt || name;

        // Asymmetric span for 3-item trio: Lead card (6 cols) + 2 supporting cards (3 cols each)
        const itemSpanClass = isThreeSplit
          ? idx === 0
            ? 'sm:col-span-2 lg:col-span-6'
            : 'sm:col-span-1 lg:col-span-3'
          : '';

        return (
          <div key={`${item.href}-${idx}`} className={itemSpanClass}>
            <Card
              variant="metallic"
              padding="lg"
              className="group flex h-full flex-col transition-all duration-300 hover:shadow-card-elevated"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-transparent p-2 mb-4">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes={
                    isThreeSplit && idx === 0
                      ? '(min-width: 1024px) 50vw, 100vw'
                      : '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'
                  }
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <Heading as="h3" variant="card">
                {name}
              </Heading>
              {body && <p className="mt-2.5 flex-1 text-sm text-ink-muted leading-relaxed">{body}</p>}
              <Link
                href={item.href}
                className="mt-4 inline-flex items-center gap-1 font-heading text-sm font-semibold text-brand-gold-strong hover:underline"
              >
                <span>{anchor}</span>
                <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
