import type { ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

export function VerificationRequired({ children }: { children?: ReactNode }) {
  return (
    <div
      role="note"
      className="flex items-start gap-3 rounded-md border-l-4 border-warning bg-brand-gold-soft/40 p-4 text-sm text-ink"
    >
      <AlertTriangle
        aria-hidden="true"
        className="mt-0.5 h-5 w-5 shrink-0 text-warning"
      />
      <div>
        <strong className="mr-1 text-warning">Verification required —</strong>
        {children ??
          'This page is a scaffold. Copy, specifications, and images are pending client review before publication.'}
      </div>
    </div>
  );
}
