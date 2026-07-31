import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { expertise, industries } from "@/data/metrics";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `About | ${site.name} — ${site.brand}`,
  description:
    "Saurabh Sharma is a performance marketing strategist working across 20+ industries in India and the UAE, combining data insights with design thinking.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="section-dark pb-20 pt-40">
        <div className="container-fluid">
          <Reveal>
            <p className="text-eyebrow text-signal">About</p>
          </Reveal>
          <SplitReveal
            as="h1"
            className="font-display mt-4 max-w-3xl text-[clamp(2.2rem,5.5vw,4.4rem)] leading-tight text-text-light"
          >
            I help businesses reach their full potential with a brand identity that&apos;s authentic to who they are.
          </SplitReveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-muted-on-dark">
              Every brand comes with its own unique challenges, and hence
              requires its own expertise. I combine data insights with design
              thinking to build strategies and experiences that transform
              businesses — across real estate, healthcare, hospitality,
              fashion, edtech, and a dozen other categories, in India and the
              UAE.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-light py-24">
        <div className="container-fluid grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              title: "Mission",
              detail:
                "Partnering with customers for their success across diverse fields and economies — companies and individuals alike.",
            },
            {
              title: "Vision",
              detail:
                "To operate at the level of a premier agency: comprehensive online marketing strategy, digital sales solutions, and internet brand management, domestically and internationally.",
            },
            {
              title: "Motto",
              detail:
                "Fresh ideas shape the future, add value, and signal change — blending strategy, design, and engaging experience into one system.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1} className="reticle rounded-3xl border border-ink/10 bg-surface p-8">
              <h2 className="font-display text-2xl">{item.title}</h2>
              <p className="mt-3 text-muted-on-light">{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-light border-t border-line-light py-24">
        <div className="container-fluid">
          <Reveal>
            <p className="text-eyebrow text-signal-ink">Full expertise range</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((group, i) => (
              <Reveal key={group.category} delay={i * 0.05} className="bg-surface p-8">
                <h3 className="font-display text-lg">{group.category}</h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-muted-on-light">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-24">
        <div className="container-fluid">
          <Reveal>
            <p className="text-eyebrow text-signal">Industries worked with</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-white/15 px-4 py-2 text-sm text-text-light/85"
              >
                {industry}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-light py-24">
        <div className="container-fluid flex flex-col items-center gap-6 text-center">
          <h2 className="font-display max-w-xl text-3xl leading-tight">
            Let&apos;s see if there&apos;s a fit for your business.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-signal-deep px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-signal-ink"
          >
            Book a Discovery Call <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
