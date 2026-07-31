"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { site } from "@/lib/site";

export function PremiumCta() {
  return (
    <section className="section-dark relative overflow-hidden py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/15 blur-[160px]"
      />
      <div className="container-fluid relative text-center">
        <Reveal>
          <p className="text-eyebrow text-signal">Let&apos;s talk growth</p>
          <h2 className="font-display mx-auto mt-6 max-w-3xl text-[clamp(2.2rem,6vw,4.6rem)] leading-[1.02]">
            Ready to see these numbers on your own account?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-on-dark">
            A discovery call costs nothing and takes 20 minutes. Bring your
            current numbers — leave with a plan.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-signal-deep px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-signal-ink"
            >
              Book a Discovery Call <ArrowUpRight className="h-4 w-4" />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-white/60"
            >
              WhatsApp {site.phone}
            </a>
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
