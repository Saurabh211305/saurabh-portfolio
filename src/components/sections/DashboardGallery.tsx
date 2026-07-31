"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { cn } from "@/lib/utils";
import { dashboards } from "@/data/dashboards";

function BlurUpImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn(
        "h-auto w-full transition-all duration-700 ease-out",
        loaded ? "scale-100 opacity-100 blur-0" : "scale-105 opacity-0 blur-md"
      )}
      sizes="(min-width: 768px) 45vw, 90vw"
      loading="lazy"
      onLoad={() => setLoaded(true)}
    />
  );
}

export function DashboardGallery() {
  return (
    <section className="section-dark py-28">
      <div className="container-fluid">
        <Reveal>
          <p className="text-eyebrow text-signal">Straight from the ad accounts</p>
        </Reveal>
        <SplitReveal
          as="h2"
          className="font-display mt-4 max-w-2xl text-[clamp(2rem,4.5vw,3.4rem)] leading-tight text-text-light"
        >
          No mockups. These are real reporting screens from live campaigns.
        </SplitReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {dashboards.map((d, i) => (
            <Reveal key={d.src} delay={i * 0.05}>
              <figure className="reticle overflow-hidden rounded-2xl border border-white/10 bg-ink-soft">
                <ClipReveal direction={i % 2 === 0 ? "left" : "right"}>
                  <BlurUpImage src={d.src} alt={d.alt} width={d.width} height={d.height} />
                </ClipReveal>
                <figcaption className="flex items-center justify-between px-6 py-5 text-sm text-muted-on-dark">
                  <span>{d.caption}</span>
                  <span className="text-index shrink-0 pl-4 text-xs text-signal/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
