import type { ServiceTab } from "@/types";
import { getServiceDetail } from "@/data/serviceDetails";

// Short tab-bar labels for the homepage "Our Services" panel, in the same
// order as the "Services" nav dropdown. Each tab's heading/description are
// pulled straight from that service's own detail page (serviceDetails.ts)
// rather than duplicated here, so the homepage panel and the /services/[slug]
// pages can't drift out of sync, and the CTA links to that same real page.
const TAB_LABELS: { slug: string; label: string }[] = [
  { slug: "ui-ux-design", label: "UI/UX Design" },
  { slug: "web-design", label: "Web Design" },
  { slug: "web-development", label: "Web Development" },
  { slug: "app-development", label: "App Development" },
  { slug: "android-development", label: "Android Development" },
  { slug: "ios-development", label: "Custom iOS Development" },
  { slug: "digital-marketing", label: "Digital Marketing" },
  { slug: "database-analysis", label: "Database Analysis" },
  { slug: "seo", label: "SEO" },
];

export const serviceTabs: ServiceTab[] = TAB_LABELS.map(({ slug, label }) => {
  const detail = getServiceDetail(slug);
  if (!detail) {
    throw new Error(`data/services.ts: no serviceDetails entry for slug "${slug}"`);
  }
  return {
    id: slug,
    label,
    heading: detail.heroTitle,
    description: detail.heroDescription,
    ctaLabel: "Learn More",
    slug,
  };
});
