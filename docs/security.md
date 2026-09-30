# Security — KP Fasteners

Baseline aligned with AGENTS.md §19 and inherited from the Honeywell reference `next.config.ts`, tightened where KP has no third-party surface to accommodate.

---

## 1. Transport

- HTTPS everywhere; HTTP redirects 301 → HTTPS.
- HSTS: `max-age=63072000; includeSubDomains; preload`. Submit to preload list only after 30 days of stable HTTPS.
- TLS: modern ciphers only (Vercel handles).
- Apex + www unified — www 301 → apex.

## 2. Security headers (set in `next.config.ts`)

```
Strict-Transport-Security  max-age=63072000; includeSubDomains; preload
X-Content-Type-Options     nosniff
X-Frame-Options            SAMEORIGIN
X-XSS-Protection           0                    (deprecated; kept off explicitly)
Referrer-Policy            strict-origin-when-cross-origin
Permissions-Policy         camera=(), microphone=(), geolocation=(), interest-cohort=()
X-DNS-Prefetch-Control     on
Content-Security-Policy    (see §3)
```

## 3. Content Security Policy (starting policy)

```
default-src 'self';
script-src  'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com;
style-src   'self' 'unsafe-inline';
font-src    'self' data:;
img-src     'self' data: https:;
connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com https://va.vercel-scripts.com;
frame-src   'self' https://www.google.com https://maps.google.com;
media-src   'self';
object-src  'none';
base-uri    'self';
form-action 'self';
frame-ancestors 'self';
```

Notes:
- `'unsafe-inline'` on `script-src` remains only because Next.js injects inline hydration scripts. Nonces are the correct future upgrade — track as post-launch improvement.
- `frame-src` allows Google Maps embed on `/contact/` only.
- No ElevenLabs / WebSocket allowances (unlike Honeywell reference).
- No `unsafe-eval`.

## 4. Secrets management

- `.env.local` never committed. `.gitignore` covers `.env*` except `.env.example`.
- Secrets live in Vercel dashboard; separate `preview` and `production` scopes.
- Server-only vars never prefixed `NEXT_PUBLIC_`.
- `RESEND_API_KEY`, `SALES_NOTIFICATION_EMAIL`, `CONTACT_NOTIFICATION_EMAIL` are server-only.
- No secret is logged.

## 5. API-route hardening

`/api/quote` and `/api/contact`:

1. **Method allow-list.** POST only; 405 for anything else.
2. **Content-type check.** Reject non-JSON.
3. **Zod validation.** Full schema, `strict()`. Reject unknown keys.
4. **Honeypot field.** Hidden `<input name="company_website">`. If filled, return 200 fake-success and log a low-priority `spam_attempt` event.
5. **Rate limit.** 5 submissions per IP per 15 minutes via `lib/ratelimit.ts` (in-memory Map for v1; Vercel KV if traffic warrants).
6. **Origin check.** `Referer` / `Origin` must match `NEXT_PUBLIC_SITE_URL`.
7. **File upload validation.** Max 8 MB; MIME allow-list `application/pdf`, `image/png`, `image/jpeg`, `application/dwg`, `application/dxf`; extension double-check; sniff first bytes; never persist under the user-supplied filename (rename to `<uuid>.<ext>`).
8. **Storage.** Files go into Resend attachments only (attached to the sales notification email). No public URL. No S3 bucket on v1.
9. **Email dispatch.** Resend server-side. Errors bubble to a 500 with a generic message.
10. **Structured logs.** `console.log` only in dev; production uses `console.error` with request ID + sanitised metadata (never full payload).

## 6. Client-side hygiene

- No user input rendered as HTML (`dangerouslySetInnerHTML` limited to trusted static content, e.g. JSON-LD).
- All external links: `rel="noopener noreferrer"` when `target="_blank"`.
- No inline event handlers in JSX (React handles this; watch for anti-patterns).

## 7. Cookies + tracking

- No cookies on v1 outside GA4 defaults.
- No first-party session cookie (no login).
- Consent banner: minimal, blocks GA4 pre-consent for EU/UK visitors (detected by GA4-side geo). India visitors: implicit consent per DPDP Act 2023 for legitimate business analytics — **NEEDS VERIFICATION** by counsel; when in doubt, show the banner globally.

## 8. Dependency hygiene

- Renovate / Dependabot enabled for weekly dependency PRs.
- `npm audit` in CI on every PR; `high`/`critical` fail the build.
- No package with < 1 000 weekly downloads unless justified in code review.

## 9. GitHub repository

- Branch protection on `main`: PR required, ≥ 1 approval, CI green, no force-push.
- Secrets scanning enabled (GitHub default).
- Signed commits recommended (not enforced on v1).
- No admin bypass except for the repo owner.

## 10. DNS + registrar

- Registrar 2FA mandatory.
- DNS: SPF (Resend), DKIM (Resend), DMARC (start `p=none`, upgrade to `p=quarantine` after 30 clean days).
- Add CAA record restricting cert issuers to Let's Encrypt / Vercel's issuer.

## 11. What we won't do

- No custom crypto.
- No user accounts / password store.
- No storing uploaded drawings on public cloud storage.
- No exposing GST or Aadhaar-style PII on the site.

## 12. Incident response

- If a suspected breach appears, rotate `RESEND_API_KEY`, revoke the compromised token in Vercel, pull the affected preview, and file an incident note in the repo under `docs/incidents/`.
- If a spam wave hits `/api/quote`, tighten rate limit to 2 / 30 min, add hCaptcha behind a feature flag, and open a follow-up PR.
