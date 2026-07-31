"use client";

import { useLayoutEffect, useRef } from "react";
import { registerGsap, gsap, SplitText, EASE } from "@/lib/gsapSetup";

/** On-mount (not scroll-triggered) word stagger-in — for above-the-fold
 * content like the hero, which must animate immediately after the
 * preloader clears rather than waiting for a scroll trigger. */
export function SplitIn({
  as: Tag = "h1",
  className,
  children,
  delay = 0,
}: {
  as?: "h1" | "h2" | "p" | "span";
  className?: string;
  children: string;
  delay?: number;
}) {
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
      const split = new SplitText(el, { type: "words", wordsClass: "split-word" });
      gsap.set(split.words, { opacity: 0, y: 24, filter: "blur(6px)" });
      gsap.to(split.words, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: EASE.out,
        stagger: 0.045,
        delay,
      });
      return () => split.revert();
    }, el);

    return () => ctx.revert();
  }, [delay, children]);

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
