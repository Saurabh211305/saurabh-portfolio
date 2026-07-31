"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import { MagneticButton } from "@/components/motion/MagneticButton";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 800);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:block">
      <MagneticButton>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-signal text-white shadow-xl shadow-signal/30 transition-transform hover:scale-105"
          aria-label="Message on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </MagneticButton>
    </div>
  );
}
