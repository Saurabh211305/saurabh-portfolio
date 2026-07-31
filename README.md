# Saurabh Sharma — The AdSurgeon

Premium personal-brand website for Saurabh Sharma, a performance marketing
strategist. Next.js (App Router) + TypeScript + Tailwind CSS v4, animated
with Framer Motion and Lenis smooth scroll.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/
    page.tsx                    — Home (16 sections)
    about/, contact/            — standalone pages
    case-studies/               — index + case-studies/[slug] detail pages
    sitemap.ts, robots.ts       — SEO file conventions
    icon.tsx, opengraph-image.tsx — generated favicon / OG image
  components/
    sections/                   — one component per homepage/page section
    motion/                     — Reveal, TextReveal, Counter, MagneticButton, TiltCard
    layout/                     — Navbar, Footer, Preloader, CustomCursor, StickyCta
    ui/                         — Button, Badge (CVA-based)
    icons/                      — LinkedinIcon (lucide-react ships no brand icons)
  data/                         — caseStudies, testimonials, metrics, faq, dashboards
  lib/site.ts                   — single source of truth for contact info / links
public/images/dashboards/       — real Ads Manager / GA screenshots (see below)
```

## Content: what's real

Every number, case study, and testimonial on this site is pulled directly
from two source documents provided by the client (a results deck and a
portfolio PDF) — nothing is fabricated:

- **6 case studies** (`src/data/caseStudies.ts`): Rare Rabbit, Prestige
  Group, Yashoda Hospitals, ASE Sports, Haus & Haus Group (Dubai), and the
  Times of India property exhibition — real budgets, ROAS, and revenue
  figures.
- **6 testimonials** (`src/data/testimonials.ts`): named, with role and
  company, quoted verbatim from the source portfolio deck.
- **6 dashboard screenshots** (`public/images/dashboards/`): cropped and
  compressed directly from real Meta/Google Ads Manager and e-commerce
  reporting screens in the results deck — not mockups.

## Known placeholders — fix before launch

- **`site.calendly`** in `src/lib/site.ts` is a placeholder URL
  (`calendly.com/saurabhperformancemarketer21`). Replace with the real
  scheduling link before this goes live — the "Book directly on Calendly"
  CTA on `/contact` currently points nowhere real.
- **Contact form submission** (`ContactForm.tsx`) currently opens a
  pre-filled `mailto:` link rather than posting to a backend — there is no
  email/CRM service wired up. Before launch, replace with a real endpoint
  (e.g. Resend, Formspree) if silent, trackable lead capture is needed.
- **`site.url`** in `src/lib/site.ts` (`https://saurabhsharma.com`) is a
  placeholder used for metadata/sitemap generation — update once the real
  production domain is known.

## Design system

- **Palette**: near-black ink (`--ink`) and warm paper (`--paper`) as the
  two section backgrounds, with a single coral-red accent (`--signal`).
  The accent has three contrast-tuned variants — `--signal` (bright, for
  dark backgrounds and large text only), `--signal-deep` (button
  backgrounds), and `--signal-ink` (small text on light backgrounds) — see
  the comment in `globals.css`. This split exists because the bright
  accent alone fails WCAG AA (4.5:1) for small text on the light
  background and for white button labels; each variant is tuned for its
  specific use.
- **Type**: Bricolage Grotesque (display) + Inter (body/UI) + JetBrains
  Mono (data/stat figures).
- **Motion**: Lenis smooth scroll, Framer Motion for reveals/hover/counters,
  full reduced-motion support throughout (`prefers-reduced-motion` disables
  the preloader countdown, marquee, and cursor).
