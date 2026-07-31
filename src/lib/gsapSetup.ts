"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

let registered = false;

export function registerGsap() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger, SplitText);
  registered = true;
}

/** The site's signature easing curves — used instead of default eases everywhere. */
export const EASE = {
  out: "expo.out",
  inOut: "power4.inOut",
  soft: "power2.out",
  overshoot: "back.out(1.6)",
} as const;

export { gsap, ScrollTrigger, SplitText };
