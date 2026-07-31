"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const pillars = [
  {
    title: "Mission",
    detail:
      "Partnering with customers for their success across diverse fields and economies — companies and individuals alike.",
  },
  {
    title: "Vision",
    detail:
      "To operate at the level of a premier agency — comprehensive online marketing strategy, digital sales, and internet brand management, domestically and internationally.",
  },
  {
    title: "Method",
    detail:
      "Data insights and design thinking combined — every strategy is built on analytics first, creative second, never the other way round.",
  },
];

export function AboutJourney() {
  return (
    <section className="section-dark py-28">
      <div className="container-fluid grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <p className="text-eyebrow text-signal">About</p>
          <h2 className="font-display mt-4 text-[clamp(2rem,4vw,3.2rem)] leading-tight">
            The AdSurgeon
          </h2>
          <p className="mt-6 max-w-md text-muted-on-dark">
            I help businesses reach their full potential by building a brand
            identity that&apos;s authentic and reflective of who they are. Every
            brand comes with its own challenges — and its own version of what
            growth should look like.
          </p>
          <p className="mt-4 max-w-md text-muted-on-dark">
            Across real estate, healthcare, hospitality, fashion, edtech and a
            dozen other categories, the throughline is the same: strategy
            before spend, analytics before assumption.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-text-light"
          >
            Read the full story <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 gap-6">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className="border-l-2 border-signal/60 pl-6">
              <h3 className="font-display text-xl text-text-light">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-on-dark">{p.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
