import type { Metadata, Viewport } from 'next';
import { Inter, Outfit, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileConversionBar } from '@/components/layout/MobileConversionBar';
import { JsonLd } from '@/components/seo/JsonLd';
import { organization, website, localBusiness } from '@/lib/jsonld';
import { buildMetadata } from '@/lib/seo';
import { DevTools } from '@/components/dev/DevTools';
import './globals.css';

/**
 * Three-font system, self-hosted via next/font/google (WOFF2, display: swap).
 * Only the weights the design actually uses are pulled in; expand only if a
 * new callsite genuinely needs a weight not present here.
 *   Inter          — body copy and UI labels (--font-sans)
 *   Outfit         — display / headings / .btn labels (--font-heading)
 *   JetBrains Mono — tabular spec numerals (--font-mono)
 */
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  display: 'swap',
  variable: '--font-heading',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = buildMetadata({
  path: '/',
  title: 'KP Fasteners — Industrial Fastener Manufacturer, Ahmedabad',
  description:
    'KP Fasteners manufactures and supplies foundation bolts, stud bolts, tie rods and custom industrial fasteners from Ahmedabad, Gujarat. Request a quote today.',
});

export const viewport: Viewport = {
  themeColor: '#B45309',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:m-2 focus:rounded focus:bg-surface focus:p-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileConversionBar />
        <JsonLd data={organization()} />
        <JsonLd data={website()} />
        <JsonLd data={localBusiness()} />
        <Analytics />
        <SpeedInsights />
        <DevTools />
      </body>
    </html>
  );
}
