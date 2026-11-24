import type { NavLink, SocialLink } from "@/types";
import { getServiceDetail } from "@/data/serviceDetails";
import { getSolutionDetail } from "@/data/solutionDetails";

// Display order for the "Solutions" dropdown — the 9 solution detail
// pages (src/app/solutions/[slug]/page.tsx), grouped the same way the
// source PDFs/screenshots arrived: lifestyle/booking apps first, then
// delivery apps, then real estate, then the two added later (Ecommerce,
// Healthcare) appended at the end — 9 items lays out as 5 rows x 2
// columns, matching the Services dropdown's own shape exactly.
const SOLUTION_NAV_ORDER = [
  "fitness",
  "on-demand",
  "salon",
  "pickup-and-delivery",
  "food-delivery",
  "grocery-delivery",
  "real-estate",
  "ecommerce",
  "healthcare",
];

// The dropdown's display order — chosen for this build, not something the
// real design specifies beyond the 6-item layout glimpsed in About.pdf's
// screenshot (which this list now extends to all 9 service pages,
// grouped "build" services first, then "grow/maintain" services).
const SERVICE_NAV_ORDER = [
  "ui-ux-design",
  "web-design",
  "web-development",
  "app-development",
  "android-development",
  "ios-development",
  "digital-marketing",
  "database-analysis",
  "seo",
];

// Hrefs are rooted ("/#about", not "#about") because these links now need
// to work from any page, not just the homepage — a plain "#about" would
// target a (non-existent) anchor on whatever page it's clicked from
// instead of navigating back to the homepage section.
export const navLinks: NavLink[] = [
  { label: "Home", href: "/#home", active: true },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/#services",
    children: SERVICE_NAV_ORDER.map((slug) => {
      const service = getServiceDetail(slug);
      if (!service) {
        throw new Error(`navigation.ts: no serviceDetails entry for slug "${slug}"`);
      }
      return { label: service.navLabel, href: `/services/${service.slug}` };
    }),
  },
  {
    label: "Solutions",
    href: "/#solutions",
    children: SOLUTION_NAV_ORDER.map((slug) => {
      const solution = getSolutionDetail(slug);
      if (!solution) {
        throw new Error(`navigation.ts: no solutionDetails entry for slug "${slug}"`);
      }
      return { label: solution.navLabel, href: `/solutions/${solution.slug}` };
    }),
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

export const heroSocialLinks: SocialLink[] = [
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "YouTube", href: "#", icon: "youtube" },
];

export const footerSocialLinks: SocialLink[] = heroSocialLinks;
