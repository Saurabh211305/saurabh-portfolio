"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { dashboards } from "@/data/dashboards";

export function DashboardGallery() {
  return (
    <section className="section-dark py-28">
      <div className="container-fluid">
        <Reveal>
          <p className="text-eyebrow text-signal">Straight from the ad accounts</p>
          <h2 className="font-display mt-4 max-w-2xl text-[clamp(2rem,4vw,3.2rem)] leading-tight">
            No mockups. These are real reporting screens from live campaigns.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {dashboards.map((d, i) => (
            <Reveal key={d.src} delay={i * 0.07}>
              <figure className="overflow-hidden rounded-2xl border border-white/10 bg-ink-soft">
                <Image
                  src={d.src}
                  alt={d.alt}
                  width={d.width}
                  height={d.height}
                  className="h-auto w-full"
                  sizes="(min-width: 768px) 45vw, 90vw"
                  loading="lazy"
                />
                <figcaption className="px-6 py-5 text-sm text-muted-on-dark">
                  {d.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
