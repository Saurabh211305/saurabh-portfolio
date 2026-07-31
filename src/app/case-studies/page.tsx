import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Case Studies | ${site.name}`,
  description:
    "Real client programmes with real ROAS, revenue, and lead numbers — real estate, healthcare, hospitality, fashion, and edtech.",
};

export default function CaseStudiesPage() {
  return (
    <div className="section-dark min-h-screen pb-28 pt-40">
      <div className="container-fluid">
        <Reveal>
          <p className="text-eyebrow text-signal">All case files</p>
        </Reveal>
        <SplitReveal
          as="h1"
          className="font-display mt-4 max-w-2xl text-[clamp(2.2rem,5.5vw,4.4rem)] leading-tight text-text-light"
        >
          Every number on this site traces back to one of these programmes.
        </SplitReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 0.06}>
              <Link
                href={`/case-studies/${cs.slug}`}
                data-cursor-text="Open"
                className="reticle group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-ink-soft p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-index text-xs text-muted-on-dark">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-eyebrow text-muted-on-dark">{cs.industry}</span>
                  </div>
                  <h2 className="font-display mt-4 text-xl leading-snug text-text-light">
                    {cs.headline}
                  </h2>
                  <p className="mt-3 text-sm text-muted-on-dark">{cs.client}</p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-signal transition-transform group-hover:translate-x-1">
                  Read case study <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
