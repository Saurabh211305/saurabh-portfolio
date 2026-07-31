"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { industries } from "@/data/metrics";

const deepExpertise = [
  {
    title: "Real Estate",
    detail: "Luxury developments, off-plan sales, and international brokerages — from Hyderabad to Dubai.",
    stat: "10x–15x ROI",
    href: "/case-studies/prestige-group",
  },
  {
    title: "Healthcare",
    detail: "12-month acquisition programmes for premier hospital groups, built around treatment intent.",
    stat: "6M–8M impressions/mo",
    href: "/case-studies/yashoda-hospitals",
  },
  {
    title: "Fashion & Retail",
    detail: "Full-funnel D2C programmes from cold awareness through loyalty and repeat purchase.",
    stat: "20x ROAS",
    href: "/case-studies/rare-rabbit",
  },
];

export function IndustriesFunnel() {
  return (
    <section className="section-light py-28">
      <div className="container-fluid">
        <Reveal>
          <p className="text-eyebrow text-signal-ink">Where the work happens</p>
          <h2 className="font-display mt-4 max-w-2xl text-[clamp(2rem,4vw,3.2rem)] leading-tight">
            Broad enough to have seen your category. Deep enough to already know it.
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-12 flex flex-wrap gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-ink/12 bg-paper-dim px-4 py-2 text-sm text-ink/75"
            >
              {industry}
            </span>
          ))}
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {deepExpertise.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <Link
                href={item.href}
                className="group flex h-full flex-col justify-between rounded-3xl border border-ink/10 bg-surface p-8 transition-colors hover:border-signal/50"
              >
                <div>
                  <p className="font-mono-data text-signal-ink text-sm">{item.stat}</p>
                  <h3 className="font-display mt-3 text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted-on-light">{item.detail}</p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-transform group-hover:translate-x-1">
                  Read the case study <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
