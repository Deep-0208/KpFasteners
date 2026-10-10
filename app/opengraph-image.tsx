import { ImageResponse } from 'next/og';

// Default social-share card inherited by every route that does not set its own
// openGraph.image (product pages override with their hero photo). Rendered at
// the 1200x630 size LinkedIn / X / WhatsApp expect, so non-product pages no
// longer share as a cropped logo.
export const alt = 'KP Fasteners - Industrial Fastener Manufacturer, Ahmedabad';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #1C2430 0%, #0F1620 100%)',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 84,
              height: 84,
              borderRadius: 16,
              background: 'linear-gradient(135deg, #F59E0B 0%, #B45309 100%)',
              color: '#1C2430',
              fontSize: 44,
              fontWeight: 800,
            }}
          >
            KP
          </div>
          <div style={{ display: 'flex', fontSize: 34, fontWeight: 700, color: '#F7F5F0' }}>
            KP Fasteners
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.1,
              color: '#FFFFFF',
              maxWidth: 940,
            }}
          >
            Industrial Fastener Manufacturer
          </div>
          <div style={{ display: 'flex', marginTop: 20, width: 220, height: 8, background: '#B45309', borderRadius: 4 }} />
          <div style={{ display: 'flex', marginTop: 24, fontSize: 30, color: '#C7CDD6', maxWidth: 940 }}>
            Foundation bolts, stud bolts, tie rods &amp; custom fasteners - Ahmedabad, Gujarat
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: 24, color: '#9AA3AE', letterSpacing: 1 }}>
          IS 5624, DIN 529, ASTM F1554 - EN 10204 3.1 MTC on request
        </div>
      </div>
    ),
    { ...size },
  );
}
