"use client";

import { useLayoutEffect, useRef } from "react";
import { registerGsap, gsap, SplitText, EASE } from "@/lib/gsapSetup";

type SplitRevealProps = {
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  children: string;
  by?: "words" | "lines" | "chars";
  start?: string;
};

/**
 * Scroll-scrubbed word/line reveal — each unit brightens from muted to full
 * opacity as it crosses the trigger point, rather than a blanket fade-in.
 */
export function SplitReveal({
  as: Tag = "p",
  className,
  children,
  by = "words",
  start = "top 85%",
}: SplitRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      gsap.set(el, { opacity: 1 });
      return;
    }

    registerGsap();

    const ctx = gsap.context(() => {
      const split = new SplitText(el, {
        type: by,
        wordsClass: "split-word",
        linesClass: "split-line",
        charsClass: "split-char",
      });
      const targets = by === "lines" ? split.lines : by === "chars" ? split.chars : split.words;

      gsap.set(targets, { opacity: 0.16, y: 10 });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        ease: EASE.out,
        duration: 0.8,
        stagger: 0.035,
        scrollTrigger: {
          trigger: el,
          start,
          end: "bottom 60%",
          scrub: 0.6,
        },
      });

      return () => split.revert();
    }, el);

    return () => ctx.revert();
  }, [by, start, children]);

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
