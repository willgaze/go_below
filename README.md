# Go Below

Premium UK underground construction — bespoke subterranean living, wellness,
entertainment, automotive and protective spaces.

Next.js 16 · React 19 · TypeScript · Tailwind CSS

## Running it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run typecheck    # tsc --noEmit
npx eslint src       # lint
```

## Before this goes live

Two files hold everything that needs real values.

### 1. `src/lib/site.ts` — company facts

Every unconfirmed value is `null`, and the UI omits anything unset. Nothing
here may be guessed.

| Field | Effect while null |
|---|---|
| `email` | Enquiry form returns a clear 503 instead of pretending to send |
| `whatsapp` | Floating WhatsApp button does not render |
| `phone` | Phone links omitted from nav and footer |
| `registeredName`, `companyNumber` | Footer shows "Go Below" with no company details |
| `address` | No `LocalBusiness` schema is emitted |

`accreditations` and `projects` are **empty arrays by design**. Only add
entries that can be evidenced.

> The previous version of this site reportedly carried "200+ projects
> completed", "ISO 9001" and "15+ years". None of that is substantiated, so
> none of it exists here. An early-stage brand is better served by being
> obviously careful than by numbers a prospective client could disprove.

### 2. `public/images/MANIFEST.md` — photography

No images exist yet. Every slot renders a designed placeholder carrying its
shot brief. See the manifest for the list and how to drop real files in.

### 3. Environment

Copy `.env.example` to `.env.local`:

- `RESEND_API_KEY` — from resend.com
- `ENQUIRY_FROM` — a verified sender on your Resend domain

The destination inbox is `site.email`, not an env var, so all company facts
live in one place.

## Structure

```
src/
  app/
    layout.tsx          fonts, metadata, no fabricated schema
    page.tsx            the homepage argument, in order
    globals.css         palette tokens and the reveal animation
    robots.ts
    sitemap.ts
    api/enquiry/        Resend handler; fails loudly when unconfigured
  components/
    Plate.tsx           image slot — real photo or designed placeholder
    Reveal.tsx          scroll reveal (IntersectionObserver, not Framer)
    Nav / Hero / Possibilities / Engineering / Protection /
    Descent / Process / Enquiry / Footer / WhatsAppButton
  lib/
    site.ts             company facts — the honesty boundary
    images.ts           image registry — the photography boundary
```

## Decisions worth knowing

**No ShadCN.** The previous build needed Tailwind/ShadCN compatibility fixes.
Components here are hand-rolled, which removes that failure class entirely.

**No Framer Motion.** The brief asks for restraint, and the page is
image-heavy. `Reveal` is an IntersectionObserver and a CSS transition. Content
is visible by default, so nothing is trapped invisible if the observer never
fires.

**Warm darks, not blue-black.** The palette's charcoals are brown-based and
sit alongside as much limestone and timber as ink. Photography is meant to
supply most of the colour.

**Protection sits after the lifestyle case** on the homepage — deliberately.
The site should read as premium construction that can also build a shelter,
not a bunker company with a spa attached.
