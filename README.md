# KP Fasteners — kpfasteners.com

Next.js 16 App Router site for KP Fasteners (Ahmedabad). Scaffolded under Phase A of the [development plan](docs/development-plan.md).

## Quick start

```bash
npm install
npm run dev
```

Opens on `http://localhost:3000`.

## Scripts

- `npm run dev` — dev server
- `npm run build` — production build
- `npm run start` — start built site
- `npm run typecheck` — `tsc --noEmit`
- `npm run lint` — ESLint (Next flat config)
- `npm run audit:metadata` / `audit:schema` / `audit:links` — SEO audits (requires running server)
- `npm run indexnow` — submit sitemap URLs to Bing IndexNow

## Planning docs

See [`docs/README.md`](docs/README.md). Every architectural decision, SEO plan, and design token lives there. `AGENTS.md` is the operating guide.

## Environment

Copy `.env.example` → `.env.local` and fill in local values. Never commit `.env.local`.

## Phase status

Currently Phase A (scaffold). See [`docs/development-plan.md`](docs/development-plan.md).
