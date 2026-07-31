import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { testimonials } from "@/data/testimonials";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.slug === slug);
  if (!study) return {};

  const title = `${study.client} — ${study.headline} | Saurabh Sharma`;
  return {
    title,
    description: study.summary,
    openGraph: { title, description: study.summary },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.slug === slug);
  if (!study) notFound();

  const relatedTestimonial = testimonials.find((t) =>
    study.client.toLowerCase().includes(t.company.toLowerCase().split(" ")[0].toLowerCase())
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.headline,
    about: study.client,
    author: { "@type": "Person", name: site.name },
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="section-dark pb-20 pt-40">
        <div className="container-fluid">
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-2 text-sm text-muted-on-dark hover:text-text-light"
          >
            <ArrowLeft className="h-4 w-4" /> Back to case studies
          </Link>

          <p className="text-eyebrow mt-8 text-signal">{study.industry}</p>
          <h1 className="font-display mt-4 max-w-3xl text-[clamp(2rem,5vw,3.6rem)] leading-tight">
            {study.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-muted-on-dark">{study.summary}</p>

          <div className="mt-14 grid grid-cols-2 gap-6 border-t border-line-dark pt-10 md:grid-cols-4">
            {study.metrics.map((m) => (
              <div key={m.label}>
                <p className="font-mono-data text-2xl text-signal sm:text-3xl">{m.value}</p>
                <p className="mt-2 text-xs text-muted-on-dark">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light py-20">
        <div className="container-fluid max-w-3xl">
          <Reveal>
            <p className="text-eyebrow text-signal-ink">Programme timeline</p>
          </Reveal>
          <div className="mt-10 space-y-10 border-l border-ink/10 pl-8">
            {study.timeline.map((step, i) => (
              <Reveal key={step.phase} delay={i * 0.08} className="relative">
                <span className="absolute -left-[2.55rem] top-1 h-3 w-3 rounded-full bg-signal" />
                <p className="font-display text-lg">{step.phase}</p>
                <p className="mt-2 text-muted-on-light">{step.detail}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-16 rounded-3xl border border-ink/10 bg-paper-dim p-8">
            <p className="text-eyebrow text-signal-ink">Result</p>
            <p className="font-display mt-3 text-xl leading-relaxed">{study.result}</p>
          </Reveal>

          {relatedTestimonial && (
            <Reveal delay={0.3} className="mt-10 border-l-2 border-signal/60 pl-6">
              <p className="text-lg italic text-ink/80">&ldquo;{relatedTestimonial.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold">
                {relatedTestimonial.name}, {relatedTestimonial.role} — {relatedTestimonial.company}
              </p>
            </Reveal>
          )}
        </div>
      </section>

      <section className="section-dark py-20">
        <div className="container-fluid flex flex-col items-center gap-6 text-center">
          <h2 className="font-display max-w-xl text-3xl leading-tight">
            Want a similar breakdown for your business?
          </h2>
          <MagneticButton>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-signal-deep px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-signal-ink"
            >
              Book a Discovery Call <ArrowUpRight className="h-4 w-4" />
            </Link>
          </MagneticButton>
        </div>
      </section>
    </article>
  );
}
