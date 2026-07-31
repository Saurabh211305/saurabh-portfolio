"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isCoarsePointer || prefersReduced || !ref.current) return;

    const el = ref.current;
    let x = 0;
    let y = 0;
    let rafId: number;

    function move(e: PointerEvent) {
      x = e.clientX;
      y = e.clientY;
    }

    function render() {
      el.style.transform = `translate3d(${x - 12}px, ${y - 12}px, 0)`;
      rafId = requestAnimationFrame(render);
    }

    window.addEventListener("pointermove", move);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-6 w-6 rounded-full mix-blend-difference md:block"
      style={{ background: "#f5f4f2" }}
    />
  );
}
