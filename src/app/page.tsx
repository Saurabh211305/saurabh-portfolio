import { Hero } from "@/components/sections/Hero";
import { LiveMetrics } from "@/components/sections/LiveMetrics";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { IndustriesFunnel } from "@/components/sections/IndustriesFunnel";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ExpertiseEcosystem } from "@/components/sections/ExpertiseEcosystem";
import { GrowthFramework } from "@/components/sections/GrowthFramework";
import { InternationalExperience } from "@/components/sections/InternationalExperience";
import { DashboardGallery } from "@/components/sections/DashboardGallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { AboutJourney } from "@/components/sections/AboutJourney";
import { RoiCalculator } from "@/components/sections/RoiCalculator";
import { ComparisonFrame } from "@/components/sections/ComparisonFrame";
import { Faq } from "@/components/sections/Faq";
import { PremiumCta } from "@/components/sections/PremiumCta";
import { ThoughtLeadership } from "@/components/sections/ThoughtLeadership";

export default function Home() {
  return (
    <>
      <Hero />
      <LiveMetrics />
      <TrustedBy />
      <IndustriesFunnel />
      <CaseStudies />
      <ExpertiseEcosystem />
      <GrowthFramework />
      <InternationalExperience />
      <DashboardGallery />
      <Testimonials />
      <AboutJourney />
      <RoiCalculator />
      <ComparisonFrame />
      <Faq />
      <PremiumCta />
      <ThoughtLeadership />
    </>
  );
}
