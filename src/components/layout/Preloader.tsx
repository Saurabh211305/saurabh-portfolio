"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (done) return;
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + Math.random() * 18 + 6, 100);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 350);
        }
        return next;
      });
    }, 110);
    return () => clearInterval(interval);
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink text-text-light"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <span className="font-display text-sm tracking-[0.3em] text-white/60">
            THE ADSURGEON
          </span>
          <span className="font-mono-data mt-6 text-6xl text-white">
            {Math.floor(progress)}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
