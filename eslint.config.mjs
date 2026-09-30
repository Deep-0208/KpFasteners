import next from 'eslint-config-next';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

export default [
  { ignores: ['.next/**', 'node_modules/**', 'srgfasteners.com-audit/**', 'scripts/**', 'public/**'] },
  ...next,
  ...nextCoreWebVitals,
  ...nextTs,
];
