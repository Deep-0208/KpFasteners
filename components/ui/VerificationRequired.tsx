import type { ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

export function VerificationRequired({ children }: { children?: ReactNode }) {
  return (
    <div
      role="note"
      className="flex items-start gap-3 rounded-[14px] border border-[color:var(--gold-300)] bg-brand-gold-soft/60 p-4 text-sm text-ink shadow-card"
    >
      <AlertTriangle
        aria-hidden="true"
        className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold-strong"
      />
      <div>
        <span className="badge badge-gold mr-2 align-middle">Verification required</span>
        <span className="align-middle">
          {children ??
            'This page is a scaffold. Copy, specifications, and images are pending client review before publication.'}
        </span>
      </div>
    </div>
  );
}
