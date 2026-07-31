"use client";

import { Reveal } from "@/components/motion/Reveal";

const clients = [
  "Rare Rabbit",
  "Prestige Group",
  "Yashoda Hospitals",
  "ASE Sports",
  "Haus & Haus Group",
  "Simplilearn",
  "FoodWorks Supermart",
  "Moustache Escapes",
  "Times of India",
  "Digital Nest",
  "Aamaya Indian Restaurant",
  "Nancy & Rishabh Law Firm",
];

export function TrustedBy() {
  const marqueeItems = [...clients, ...clients];

  return (
    <section className="section-light relative overflow-hidden border-b border-line-light py-14">
      <div className="container-fluid">
        <Reveal>
          <p className="text-eyebrow text-center text-muted-on-light">
            Trusted by founders and marketing leaders across 20+ industries
          </p>
        </Reveal>
      </div>

      <div className="relative mt-10 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex shrink-0 items-center gap-14 pr-14">
          {marqueeItems.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display shrink-0 whitespace-nowrap text-2xl italic text-ink/30"
            >
              {name}
            </span>
          ))}
        </div>
        <div className="animate-marquee flex shrink-0 items-center gap-14 pr-14" aria-hidden>
          {marqueeItems.map((name, i) => (
            <span
              key={`dup-${name}-${i}`}
              className="font-display shrink-0 whitespace-nowrap text-2xl italic text-ink/30"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 34s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; }
        }
      `}</style>
    </section>
  );
}
