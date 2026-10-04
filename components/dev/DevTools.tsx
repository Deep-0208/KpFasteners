'use client';

import dynamic from 'next/dynamic';

const Agentation = dynamic(
  () => import('agentation').then((mod) => mod.Agentation),
  { ssr: false },
);

/**
 * DevTools — mounts visual annotation and feedback tooling for AI agents.
 * Only rendered in development mode (`NODE_ENV === 'development'`).
 * In production, this component renders null and incurs zero runtime cost.
 */
export function DevTools() {
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return <Agentation />;
}
