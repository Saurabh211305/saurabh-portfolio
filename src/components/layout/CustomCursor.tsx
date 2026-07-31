"use client";

import { useEffect, useRef, useState } from "react";

const HOVER_SELECTOR = 'a, button, [role="button"], input, textarea, select';

export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState("");

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
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      rafId = requestAnimationFrame(render);
    }

    function onOver(e: PointerEvent) {
      const target = (e.target as HTMLElement)?.closest(HOVER_SELECTOR);
      if (target) {
        setActive(true);
        setLabel(target.getAttribute("data-cursor-text") ?? "");
      }
    }
    function onOut(e: PointerEvent) {
      const target = (e.target as HTMLElement)?.closest(HOVER_SELECTOR);
      if (target) {
        setActive(false);
        setLabel("");
      }
    }

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", onOver);
    window.addEventListener("pointerout", onOut);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerout", onOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center mix-blend-difference md:flex"
    >
      <div
        className="flex items-center justify-center rounded-full border border-[#f7f6f2] text-[9px] font-medium uppercase tracking-[0.2em] text-[#f7f6f2] transition-all duration-300 ease-out"
        style={{
          width: active ? 64 : 18,
          height: active ? 64 : 18,
        }}
      >
        {active && label ? label : null}
      </div>
      {!active && (
        <>
          <span className="absolute h-3 w-px bg-[#f7f6f2]" />
          <span className="absolute h-px w-3 bg-[#f7f6f2]" />
        </>
      )}
    </div>
  );
}
