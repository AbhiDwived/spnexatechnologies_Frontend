// Shared domain types for the Trickle Solutions marketing site.
// Centralizing these keeps the /data content files and the components
// that render them in sync without duplicating shape definitions.

export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
  /** Hover/tap dropdown items rendered under this top-level link (e.g. "Services"). */
  children?: { label: string; href: string }[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "instagram" | "facebook" | "linkedin" | "youtube";
}

export interface ServiceTab {
  id: string;
  /** Short tab-bar label (e.g. "App Development"). */
  label: string;
  heading: string;
  description: string;
  ctaLabel: string;
  /** Matches a ServiceDetail.slug — links the tab's CTA to /services/[slug]
   * and its illustration to the shared SERVICE_ILLUSTRATIONS map. */
  slug: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export type StatIconName =
  | "rocket"
  | "building"
  | "clients"
  | "team"
  | "trophy";

export interface StatItem {
  id: string;
  value: string;
  label: string;
  icon: StatIconName;
}

export interface RoadmapStep {
  id: string;
  title: string;
  items: string[];
}

export interface WhyChooseCard {
  id: string;
  title: string;
  description: string;
  variant?: "dark" | "default";
}

export type IndustryIconName = "education" | "grocery" | "ecommerce" | "salon";

export interface IndustryCard {
  id: string;
  icon: IndustryIconName;
  title: string;
  description: string;
  ctaLabel: string;
}

export interface IndustryPhotoCard {
  image: ImageAsset;
  ctaLabel: string;
}

export interface IndustryAltRow {
  id: string;
  icon: IndustryIconName;
  title: string;
  description: string;
  ctaLabel: string;
  image: ImageAsset;
  photoVariant: "a" | "b";
}

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  avatar: ImageAsset;
}

export interface BlogPost {
  id: string;
  badge: string;
  tag: string;
  title: string;
  excerpt: string;
  image: ImageAsset;
}

export interface FooterColumn {
  id: string;
  heading: string;
  links: { label: string; href: string }[];
}

// Individual service detail pages (/services/[slug]), one per entry in
// the "Services" nav dropdown — and also the source of truth for the
// homepage's "Our Services" tabbed panel (data/services.ts), which derives
// each tab's heading/description/illustration from here rather than
// duplicating placeholder copy.

export type ServiceBenefitIconName =
  | "ui-design"
  | "mobile-ui"
  | "prototyping"
  | "interaction"
  | "responsive"
  | "seo-performance"
  | "backend-api"
  | "cloud-enterprise"
  | "ecommerce-payment"
  | "analytics-performance"
  | "android-robot"
  | "secure-payment"
  | "analytics-insights"
  | "multi-language"
  | "ios-app"
  | "app-store-deployment"
  | "enterprise-solutions"
  | "seo-optimization"
  | "social-media"
  | "email-marketing"
  | "ppc-advertising"
  | "db-performance"
  | "data-security"
  | "analytics-reporting"
  | "scalability-maintenance"
  | "keyword-research"
  | "link-building"
  | "custom-web-dev"
  | "performance-security"
  | "on-page-seo"
  | "technical-seo"
  | "off-page-seo"
  | "content-optimization";

// Process-flow step icon, shared across any service page that renders a
// "Process of Creating ___" diagram (currently Android & Custom iOS
// Development — Figma nodes referenced via their PDFs). The middle step's
// label is the only one that changes per page ("App/Android/IOS
// Development"); the icon set itself is fixed.
export type ServiceProcessStepIcon =
  | "requirement-gathering"
  | "ui-ux-designing"
  | "development"
  | "testing"
  | "deployment"
  | "support-maintenance";

export interface ServiceProcessStep {
  id: string;
  icon: ServiceProcessStepIcon;
  label: string;
}

export interface ServiceBenefit {
  id: string;
  icon: ServiceBenefitIconName;
  title: string;
  description: string;
}

export interface ServiceStat {
  id: string;
  value: string;
  label: string;
}

export interface ServiceFaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  navLabel: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  heroBullets: string[];
  benefitsHeading: string;
  benefits: ServiceBenefit[];
  stats: ServiceStat[];
  /** Shown on About, Android Development, Custom iOS Development, and
   * Database Analysis so far — the same 3 badges every time. */
  showAwards?: boolean;
  /** "Process of Creating ___" 6-step flow diagram — Android & Custom iOS
   * Development only, so far. */
  process?: {
    heading: string;
    description: string;
    steps: ServiceProcessStep[];
  };
  faqHeading: string;
  faqSubheading: string;
  faq: ServiceFaqItem[];
}

// Individual "Solution" detail pages (/solutions/[slug]), one per entry in
// the new "Solutions" nav dropdown — industry/use-case app builds (Fitness,
// On-Demand, Salon, Pickup & Delivery, Food Delivery, Grocery Delivery,
// Real Estate), transcribed from each one's reference PDF export the same
// way the /services pages were built. Four of the seven reference PDFs
// (Food Delivery, Grocery Delivery, Pickup & Delivery, Real Estate) share
// one clean, consistent section layout end to end; the other three
// (Fitness, On-Demand, Salon) use a richer, more bespoke layout in their
// own PDFs (extra feature-card grids, a 6-step process diagram, a blog
// section, an admin/customer-app showcase, an inline lead form). Rather
// than hand-building three more one-off page layouts on top of the four
// already-reusable sections, every solution page uses the shared
// four-PDF layout — hero, intro, stats, awards, "why us", two CTA
// banners, contact, footer — with each page's own real copy pulled from
// its actual PDF. ServiceProcess's existing optional 6-step diagram is
// reused as-is (same `process` shape) for the two pages whose PDF has one
// (Fitness, On-Demand).
export interface SolutionWhyPoint {
  id: string;
  title: string;
  description: string;
}

export interface SolutionDetail {
  slug: string;
  navLabel: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  heroBullets: string[];
  introHeading: string;
  introParagraphs: string[];
  introBullets: string[];
  stats: ServiceStat[];
  whyHeading: string;
  whySubheading: string;
  whyPoints: SolutionWhyPoint[];
  ctaBannerHeading: string;
  ctaBannerParagraph: string;
  ctaBannerLabel: string;
  finalCtaHeading: string;
  finalCtaLabel: string;
  process?: {
    heading: string;
    description: string;
    steps: ServiceProcessStep[];
  };
}
