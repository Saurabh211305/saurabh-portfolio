import type { Metadata } from "next";
import { Mail, Phone, Calendar } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact | ${site.name}`,
  description:
    "Book a discovery call with Saurabh Sharma — performance marketing strategist across real estate, healthcare, hospitality, fashion and edtech.",
};

const channels = [
  { icon: Calendar, label: "Book directly on Calendly", value: "Schedule a 20-minute call", href: site.calendly },
  { icon: Phone, label: "WhatsApp", value: site.phone, href: site.whatsapp },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: LinkedinIcon, label: "LinkedIn", value: "Connect professionally", href: site.linkedin },
];

export default function ContactPage() {
  return (
    <div className="section-dark min-h-screen pb-28 pt-40">
      <div className="container-fluid grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <Reveal>
            <p className="text-eyebrow text-signal">Get in touch</p>
            <h1 className="font-display mt-4 text-[clamp(2.2rem,5vw,3.6rem)] leading-tight">
              Let&apos;s see what precision can do for your budget.
            </h1>
            <p className="mt-6 max-w-md text-muted-on-dark">
              Fill out the form, or reach out directly — whichever is faster
              for you.
            </p>
          </Reveal>

          <div className="mt-12 space-y-4">
            {channels.map((channel, i) => (
              <Reveal key={channel.label} delay={i * 0.06}>
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 p-5 transition-colors hover:border-signal/50"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 text-signal">
                    <channel.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted-on-dark">{channel.label}</span>
                    <span className="block font-medium text-text-light">{channel.value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15} className="rounded-3xl bg-paper p-8 text-ink md:p-12">
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
