export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  headline: string;
  summary: string;
  metrics: { label: string; value: string }[];
  timeline: { phase: string; detail: string }[];
  result: string;
  logoInitial: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "rare-rabbit",
    client: "Rare Rabbit",
    industry: "Fashion & Retail",
    headline: "20x ROAS on a 6-month full-funnel build",
    summary:
      "A phased awareness-to-conversion program for a menswear fashion brand, moving from cold audience research through retargeting, loyalty, and full-funnel scaling.",
    metrics: [
      { label: "Final ROAS", value: "20x" },
      { label: "Revenue generated", value: "₹6,00,00,000" },
      { label: "Programme length", value: "6 months" },
      { label: "Repeat purchase lift", value: "+15%" },
    ],
    timeline: [
      { phase: "Month 1", detail: "Audience research, pixel + tracking setup, awareness campaigns across Meta and Google Display." },
      { phase: "Month 2", detail: "Lookalike refinement, content marketing, engagement campaigns; website traffic up 30%." },
      { phase: "Month 3", detail: "Conversion campaigns launched with dynamic product ads and cart-abandonment flows." },
      { phase: "Month 4–5", detail: "Scaled high-performing ad sets, sequential retargeting, influencer collaboration, UGC and email marketing." },
      { phase: "Month 6", detail: "Full-funnel campaigns, advanced segmentation, expansion into new geographic markets." },
    ],
    result: "Achieved a final ROAS of 20x and established Rare Rabbit as a leading brand in its category.",
    logoInitial: "RR",
  },
  {
    slug: "prestige-group",
    client: "Prestige Group",
    industry: "Luxury Real Estate",
    headline: "10x–15x ROI across three luxury developments",
    summary:
      "A six-month strategy for Prestige High Fields, Prestige Ivy League, and Apartments @ The Prestige City Hyderabad — moving from brand awareness to disciplined lead generation.",
    metrics: [
      { label: "ROI range", value: "10x–15x" },
      { label: "Peak monthly impressions", value: "10M–30M" },
      { label: "Avg. cost per lead", value: "₹800–1,000" },
      { label: "CTR", value: "10–12%" },
    ],
    timeline: [
      { phase: "Month 1–2", detail: "Brand story and USP definition, Meta advertising, OTT ads, audience segmentation. Website traffic +20%, OTT engagement 12%." },
      { phase: "Month 3–4", detail: "Lead generation campaigns across Facebook Lead Ads and Google Ads, remarketing audiences built. Brand recall +30%." },
      { phase: "Month 5–6", detail: "A/B tested creative, budget reallocated to top performers, lookalike scaling for revenue generation." },
    ],
    result: "Sustained 10x–15x return on ad spend at scale, with monthly spend up to ₹40,00,000.",
    logoInitial: "PG",
  },
  {
    slug: "yashoda-hospitals",
    client: "Yashoda Hospitals",
    industry: "Healthcare",
    headline: "A 12-month, 40-week acquisition engine for a premier hospital group",
    summary:
      "A phased healthcare marketing programme spanning branding, search, YouTube, HNI targeting, NRI campaigns, and remarketing — built around treatment-intent audiences.",
    metrics: [
      { label: "Monthly impressions", value: "6M–8M" },
      { label: "CTR", value: "8–10%" },
      { label: "Avg. cost per lead", value: "₹200–300" },
      { label: "Budget managed", value: "₹3,00,000/mo" },
    ],
    timeline: [
      { phase: "Weeks 1–8", detail: "Branding and awareness via meta-advertising and OTT, transitioning into Facebook lead-generation ads." },
      { phase: "Weeks 9–24", detail: "Search and Performance Max campaigns for specific treatments; YouTube ads and HNI app advertising introduced." },
      { phase: "Weeks 25–40", detail: "Lookalike and NRI campaigns for international patients, remarketing and price-sensitive promotions to maximise ROI." },
    ],
    result: "Diversified, treatment-specific lead sources with a stable sub-₹300 cost per lead at scale.",
    logoInitial: "YH",
  },
  {
    slug: "ase-sports",
    client: "ASE Sports",
    industry: "Sports & Fitness Retail",
    headline: "200% conversion growth in 120 days",
    summary:
      "A fast-moving performance media programme that compounded month over month — from ₹703K in 15 days to a sustained 10x ROAS.",
    metrics: [
      { label: "Conversion growth", value: "+200% / 120 days" },
      { label: "Revenue, first 15 days", value: "₹703K" },
      { label: "ROAS, month 2", value: "10x" },
      { label: "Revenue, 2 months", value: "₹803K" },
    ],
    timeline: [
      { phase: "Days 1–15", detail: "Initial campaign launch: ₹703K in revenue at 7x ROAS." },
      { phase: "Month 1", detail: "Scaled to ₹649K revenue at 10x ROAS." },
      { phase: "Month 2", detail: "₹803K cumulative revenue, 10x ROAS sustained, 10.52% purchase conversion rate." },
      { phase: "Day 120", detail: "200% increase in conversion rate versus baseline." },
    ],
    result: "A compounding, month-over-month performance curve rather than a single campaign spike.",
    logoInitial: "AS",
  },
  {
    slug: "haus-and-haus",
    client: "Haus & Haus Group",
    industry: "Real Estate — Dubai, UAE",
    headline: "1,205 qualified leads from a $266K programme in Dubai",
    summary:
      "International paid media for one of Dubai's established real estate brokerages, combining high-intent Google Search with Meta lead generation.",
    metrics: [
      { label: "Ad spend", value: "$266,000" },
      { label: "Qualified leads", value: "1,205" },
      { label: "Google Ads conversions", value: "359" },
      { label: "Reported ROI", value: "10x+" },
    ],
    timeline: [
      { phase: "Search", detail: "High-intent Google Ads campaigns focused on lower CPC and higher purchase intent." },
      { phase: "Meta", detail: "Lead generation campaigns layered on top of search demand capture." },
      { phase: "Optimisation", detail: "Continuous bid and audience refinement across three consecutive reporting cycles." },
    ],
    result: "Consistent, real-estate-grade lead quality across Dubai's competitive off-plan and resale market.",
    logoInitial: "HH",
  },
  {
    slug: "times-of-india-exhibition",
    client: "Times of India — Property Exhibition",
    industry: "Real Estate — Event Activation",
    headline: "450 registrations against a target of 150, on half the budget",
    summary:
      "A short, high-pressure activation campaign for a property exhibition, built to drive registrations against a fixed budget ceiling.",
    metrics: [
      { label: "Registrations delivered", value: "450" },
      { label: "Target", value: "150" },
      { label: "Budget allocated", value: "₹2,00,000" },
      { label: "Budget spent", value: "₹1,00,000" },
    ],
    timeline: [
      { phase: "Planning", detail: "Budget ceiling of ₹2 lakh set against an expectation of ~150 registrations." },
      { phase: "Execution", detail: "Targeted campaign delivered 3x the expected volume." },
      { phase: "Result", detail: "Only half the allocated budget was spent to hit the final number." },
    ],
    result: "450 registrations at 50% of budget — a 3x outcome against the original target.",
    logoInitial: "TOI",
  },
];
