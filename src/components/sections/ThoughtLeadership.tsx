"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";

const topics = [
  {
    title: "Why most ad accounts waste budget in the first 30 days",
    tag: "Media Buying",
  },
  {
    title: "The ROAS math agencies don't show you on the call",
    tag: "Analytics",
  },
  {
    title: "Scaling from ₹1L to ₹40L in monthly spend without losing efficiency",
    tag: "Scaling",
  },
];

export function ThoughtLeadership() {
  return (
    <section className="section-light py-28">
      <div className="container-fluid">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-eyebrow text-signal-ink">Thought leadership</p>
            <h2 className="font-display mt-4 max-w-xl text-[clamp(2rem,4vw,3.2rem)] leading-tight">
              Notes from the ad accounts
            </h2>
          </div>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink"
          >
            Follow on LinkedIn <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {topics.map((topic, i) => (
            <Reveal key={topic.title} delay={i * 0.08}>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="Read"
                className="reticle group flex h-full flex-col justify-between rounded-3xl border border-ink/10 bg-surface p-8 transition-colors hover:border-signal/50"
              >
                <div>
                  <span className="text-index text-xs text-signal-ink">0{i + 1}</span>
                  <p className="text-eyebrow mt-3 text-muted-on-light">{topic.tag}</p>
                  <h3 className="font-display mt-4 text-xl leading-snug">{topic.title}</h3>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-transform group-hover:translate-x-1">
                  Read on LinkedIn <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
