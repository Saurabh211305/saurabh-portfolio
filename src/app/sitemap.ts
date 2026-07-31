import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/caseStudies";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/contact", "/case-studies"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  const caseStudyRoutes = caseStudies.map((cs) => ({
    url: `${site.url}/case-studies/${cs.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}
