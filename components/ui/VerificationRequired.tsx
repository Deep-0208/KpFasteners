import type { ReactNode } from 'react';

export function VerificationRequired({ children }: { children?: ReactNode }) {
  return (
    <div
      role="note"
      className="rounded-md border-l-4 border-warning bg-brand-gold-soft/40 p-4 text-sm text-ink"
    >
      <strong className="mr-1 text-warning">Verification required —</strong>
      {children ??
        'This page is a scaffold. Copy, specifications, and images are pending client review before publication.'}
    </div>
  );
}
