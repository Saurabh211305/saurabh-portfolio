"use client";

import { Reveal } from "@/components/motion/Reveal";

const steps = [
  { n: "01", title: "Research", detail: "Audience, competitor and market analysis before a single rupee is spent." },
  { n: "02", title: "Strategy", detail: "Channel mix, budget allocation and a month-by-month growth plan tied to revenue." },
  { n: "03", title: "Launch", detail: "Creative, tracking and campaigns built and shipped across the right platforms." },
  { n: "04", title: "Optimize", detail: "Weekly performance reviews, A/B testing, and budget reallocation to what's working." },
  { n: "05", title: "Scale", detail: "Lookalikes, new markets and full-funnel expansion once the model is proven." },
];

const stack = [
  "Meta Ads Manager",
  "Google Ads",
  "YouTube Ads",
  "Google Analytics 4",
  "Looker Studio",
  "Power BI",
  "Tableau",
  "Meta Pixel / CAPI",
];

export function GrowthFramework() {
  return (
    <section className="section-dark py-28">
      <div className="container-fluid">
        <Reveal>
          <p className="text-eyebrow text-signal">The growth framework</p>
          <h2 className="font-display mt-4 max-w-2xl text-[clamp(2rem,4vw,3.2rem)] leading-tight">
            The same five-stage system, applied to every case study on this page.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-0 border-t border-line-dark md:grid-cols-5">
          {steps.map((step, i) => (
            <Reveal
              key={step.n}
              delay={i * 0.08}
              className="border-b border-line-dark px-2 py-8 md:border-b-0 md:border-r md:px-6 md:last:border-r-0"
            >
              <p className="font-mono-data text-signal text-sm">{step.n}</p>
              <h3 className="font-display mt-4 text-lg">{step.title}</h3>
              <p className="mt-3 text-sm text-muted-on-dark">{step.detail}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-20 border-t border-line-dark pt-10">
          <p className="text-eyebrow text-muted-on-dark">Tooling &amp; stack</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {stack.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/15 px-4 py-2 text-sm text-text-light/85"
              >
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
