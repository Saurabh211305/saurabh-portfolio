"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { Counter } from "@/components/motion/Counter";

const uaeStats = [
  { value: 266, prefix: "$", suffix: "K", label: "Ad spend managed in Dubai" },
  { value: 1205, suffix: "", label: "Qualified leads generated" },
  { value: 359, suffix: "", label: "High-intent Google Ads conversions" },
];

export function InternationalExperience() {
  return (
    <section className="section-light py-28">
      <div className="container-fluid grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="text-eyebrow text-signal-ink">International experience</p>
          <SplitReveal
            as="h2"
            className="font-display mt-4 text-[clamp(2rem,4vw,3.2rem)] leading-tight"
          >
            Beyond India — running real estate media in Dubai&apos;s most competitive market.
          </SplitReveal>
          <p className="mt-6 max-w-lg text-muted-on-light">
            For Haus &amp; Haus Group and other UAE developers, campaigns spanned
            Emaar, Aldar and Sobha communities across Meta and Google — competing
            directly against Dubai&apos;s largest brokerages on cost-per-lead and
            lead quality.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-line-light pt-8">
            {uaeStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-mono-data text-2xl font-semibold text-ink">
                  <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-xs text-muted-on-light">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="relative">
          <ClipReveal className="reticle rounded-3xl border border-ink/10 shadow-2xl shadow-ink/10">
            <Image
              src="/images/dashboards/dubai-results-june.webp"
              alt="Meta Ads Manager results for a Dubai real estate client showing lead volume across Emaar, Aldar and Sobha campaigns"
              width={1800}
              height={1012}
              className="h-auto w-full"
              sizes="(min-width: 1024px) 45vw, 90vw"
            />
          </ClipReveal>
          <span className="absolute -bottom-5 -left-5 hidden rounded-full bg-ink px-5 py-3 text-xs font-semibold text-white shadow-xl md:block">
            Dubai, UAE — live reporting
          </span>
        </div>
      </div>
    </section>
  );
}
