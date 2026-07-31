"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealInProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/** On-mount (not scroll-triggered) fade/slide-in, mirroring SplitIn's
 * rationale: above-the-fold hero content must animate immediately after
 * mount, since a whileInView trigger never fires for content that starts
 * outside the initial viewport (e.g. below a full-bleed mobile portrait). */
export function RevealIn({ children, delay = 0, y = 28, className }: RevealInProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: prefersReduced ? 0 : y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
