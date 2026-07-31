# Saurabh Sharma — The AdSurgeon

Premium personal-brand website for Saurabh Sharma, a performance marketing
strategist. Next.js (App Router) + TypeScript + Tailwind CSS v4, animated
with Framer Motion + GSAP (ScrollTrigger, SplitText) + Lenis smooth scroll.

## Concept

**"The AdSurgeon" as precision diagnostics.** Not literally medical —
the site reads like a diagnostic instrument surfacing real performance
data with surgical precision: monospace "readout" numerals, hairline
crosshair/reticle marks framing key content, case studies presented as
numbered "case files," and a single incision-red accent against
near-black and clinical white. This was built after studying 20
reference sites the client sent (8 premium Framer portfolio templates +
12 high-end animated real-estate/hospitality sites) in detail — screenshotting,
inspecting real CSS/motion values, and extracting concrete, buildable
techniques rather than a generic "modern site" pass. See `git log` for
the redesign commit for the full research synthesis.

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
    motion/                     — Reveal, TextReveal, SplitIn, SplitReveal, ClipReveal,
                                   AnimatedReticle, Counter, MagneticButton, TiltCard
    layout/                     — Navbar, Footer, Preloader, CustomCursor, StickyCta
    ui/                         — Button, Badge (CVA-based)
    icons/                      — LinkedinIcon (lucide-react ships no brand icons)
  data/                         — caseStudies, testimonials, metrics, faq, dashboards
  lib/site.ts                   — single source of truth for contact info / links
  lib/gsapSetup.ts              — GSAP plugin registration + shared easing curves
public/images/dashboards/       — real Ads Manager / GA screenshots (see below)
```

## Motion system

- **Engine**: Lenis drives the actual scroll; GSAP's ticker calls
  `lenis.raf()` and `lenis.on('scroll', ScrollTrigger.update)` keeps
  ScrollTrigger in sync — see `useLenis.ts`. No `scrollerProxy` needed
  since Lenis animates native `window` scroll by default.
- **`SplitIn`**: on-mount word stagger-in for above-the-fold content
  (the hero headline) — fires on a timer, not a scroll trigger.
- **`SplitReveal`**: scroll-scrubbed word-by-word opacity reveal for
  every other section headline — brightens as it crosses the trigger,
  rather than a blanket fade.
- **`ClipReveal`**: clip-path "shutter" reveal for images (dashboard
  screenshots, the Dubai reporting screenshot) instead of a plain fade.
- **`AnimatedReticle`**: SVG stroke-draw crosshair, the recurring
  precision-instrument motif.
- **Pinned scroll section**: the Growth Framework section
  (`GrowthFramework.tsx`) uses a CSS `position: sticky` panel (not GSAP
  `pin: true`, to stay conflict-free with Lenis) with `ScrollTrigger`
  only tracking progress to drive which of the 5 stages is active.
- **Custom easing** (`lib/gsapSetup.ts` `EASE` export) is used instead
  of default eases throughout: `expo.out` for reveals, `power4.inOut`
  for clip-path transitions.
- All of the above degrade to instant/static states under
  `prefers-reduced-motion: reduce`.

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

- **Palette**: near-black ink (`--ink: #050505`) and clinical paper
  (`--paper: #f7f6f2`) as the two section backgrounds, with a single
  incision-red accent (`--signal: #e8302a`). The accent has three
  contrast-tuned variants — `--signal` (bright, dark backgrounds + large
  text only), `--signal-deep` (button backgrounds with white labels),
  and `--signal-ink` (small text on light backgrounds) — see the comment
  in `globals.css`. This split exists because the bright accent alone
  fails WCAG AA (4.5:1) for small text on the light background and for
  white button labels; each variant is tuned for its specific use and
  was verified against the actual WCAG contrast formula, not eyeballed.
- **Type**: Fraunces (display serif, variable — used at large sizes with
  weight/italic contrast within a single headline) + Inter (body/UI) +
  JetBrains Mono (data readouts, index labels, eyebrows).
- **Recurring motifs**: `.reticle` (CSS corner brackets), `.text-index`
  (numbered "case file" labels), `.bg-grid` (faint diagnostic grid),
  `.animate-scan` (instrument scan-line) — all defined in `globals.css`.
- Full reduced-motion support throughout (`prefers-reduced-motion`
  disables the preloader countdown, marquee, cursor, and every
  scroll-triggered animation, falling back to the final static state).
