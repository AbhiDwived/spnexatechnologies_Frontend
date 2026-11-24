import type { SVGProps } from "react";
import type { ServiceBenefitIconName } from "@/types";

type IconProps = SVGProps<SVGSVGElement>;

// White, line-art icons for the service-page "Benefits" grid — same
// construction as IndustryIcons.tsx, but stroked white to sit on the
// section's dark blue background (Figma node 50:26 reference).
const commonProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#ffffff",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  width: 56,
  height: 56,
};

// Two stacked device frames — "User Interface (UI) Design".
function UiDesignIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <rect x="2" y="4" width="20" height="16" rx="1.5" />
      <path d="M2 8h20" />
      <circle cx="4.6" cy="6" r="0.5" fill="#fff" stroke="none" />
      <circle cx="6.4" cy="6" r="0.5" fill="#fff" stroke="none" />
      <circle cx="8.2" cy="6" r="0.5" fill="#fff" stroke="none" />
      <rect x="4.5" y="10.5" width="6.5" height="7" rx="0.8" />
      <rect x="13" y="10.5" width="6.5" height="3" rx="0.8" />
      <rect x="13" y="14.5" width="6.5" height="3" rx="0.8" />
    </svg>
  );
}

// Phone with a dashed cursor interaction — "Mobile App UI/UX".
function MobileUiIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <rect x="4" y="2.5" width="11" height="19" rx="2.2" />
      <path d="M8 19h3" />
      <rect x="9.5" y="8" width="4" height="3.2" rx="0.6" />
      <path d="M9.5 13.5h4" />
      <path d="M14.5 15.5l5 1.5-2 .8 3 3-1.3 1.3-3-3-.8 2z" />
    </svg>
  );
}

// Two phones linked by a looping arrow — "Prototyping & Wireframing".
function PrototypingIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <rect x="2" y="7" width="8" height="12" rx="1.6" />
      <path d="M4.5 16.5h3" />
      <rect x="14" y="3" width="8" height="12" rx="1.6" />
      <path d="M16.5 12.5h3" />
      <path d="M10.2 16c2.6 0 3.8-1.4 3.8-3.5" />
      <path d="M12.7 14.3l1.3 2.2 2.2-1.3" />
    </svg>
  );
}

// A touch point radiating connections — "Interaction & Experience Design".
function InteractionIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M11 15.5V8a1.5 1.5 0 0 1 3 0v5.2" />
      <path d="M14 13V6.6a1.5 1.5 0 0 1 3 0V13" />
      <path d="M17 13.2V9a1.5 1.5 0 0 1 3 0v6c0 3.6-2.2 6.5-6 6.5s-5.6-1.6-7-4l-2.1-3.6c-.5-.9-.1-1.8.8-2.1.8-.3 1.5 0 2 .8l1.3 2" />
      <circle cx="5.5" cy="5.5" r="2" />
    </svg>
  );
}

// Phone + tablet adapting to one another — "Responsive & Adaptive Design".
function ResponsiveIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <rect x="2" y="3" width="13" height="16" rx="1.6" />
      <path d="M6 16.5h5" />
      <rect x="13.5" y="10" width="8.5" height="11" rx="1.4" />
      <path d="M16.3 18.5h2.9" />
      <path d="M9.5 19v2M6 21h7" />
    </svg>
  );
}

// A monitor with a magnifying glass — "SEO & Performance Optimized Design".
function SeoPerformanceIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <rect x="2" y="4" width="20" height="13.5" rx="1.6" />
      <path d="M8 21h8M12 17.5V21" />
      <circle cx="10.5" cy="10" r="3.4" />
      <path d="M12.9 12.4L16 15.5" />
    </svg>
  );
}

// Server rack / API brackets — "Backend & API Development".
function BackendApiIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <rect x="4" y="3" width="16" height="6" rx="1.4" />
      <rect x="4" y="15" width="16" height="6" rx="1.4" />
      <circle cx="7.5" cy="6" r="0.6" fill="#fff" stroke="none" />
      <circle cx="7.5" cy="18" r="0.6" fill="#fff" stroke="none" />
      <path d="M9 12l-2.5 -2M9 12l-2.5 2M15 12l2.5 -2M15 12l2.5 2" />
    </svg>
  );
}

// Cloud with a building — "Cloud & Enterprise Solutions".
function CloudEnterpriseIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M6.5 16a3.8 3.8 0 0 1 .4-7.6 5 5 0 0 1 9.6-1.3A4 4 0 0 1 17 15.9" />
      <rect x="9" y="17" width="3" height="4" />
      <rect x="13" y="15" width="3" height="6" />
    </svg>
  );
}

// Shopping cart with a coin — "E-commerce & Payment Integration".
function EcommercePaymentIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M3 4h2l2.2 11h9.6L19 8H6" />
      <circle cx="9.5" cy="19.5" r="1.3" />
      <circle cx="16" cy="19.5" r="1.3" />
      <circle cx="17.5" cy="6" r="3" fill="none" />
      <path d="M17.5 4.8v2.4M16.6 6.4h1.8" />
    </svg>
  );
}

// Rising bars with a trend arrow — "Analytics & Performance Optimization".
function AnalyticsPerformanceIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M4 20V13M10.5 20V9M17 20v-6" />
      <path d="M4 10l5.5 -5 4 3L21 3" />
      <path d="M21 3h-4.5M21 3v4.5" />
    </svg>
  );
}

// Android robot — "Custom Android App Development".
function AndroidRobotIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M7 10.5V17a1.5 1.5 0 0 0 1.5 1.5h7A1.5 1.5 0 0 0 17 17v-6.5z" />
      <path d="M7 13H4.8M17 13h2.2" />
      <path d="M9 6.5l-1-1.7M15 6.5l1-1.7" />
      <ellipse cx="12" cy="7.5" rx="5" ry="3" />
      <circle cx="10" cy="7.2" r="0.6" fill="#fff" stroke="none" />
      <circle cx="14" cy="7.2" r="0.6" fill="#fff" stroke="none" />
      <path d="M9.5 20.5v-2M14.5 20.5v-2" />
    </svg>
  );
}

// Card with a lock — "Secure Payment Integration".
function SecurePaymentIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <rect x="2.5" y="5" width="14" height="10" rx="1.6" />
      <path d="M2.5 8.5h14" />
      <rect x="14.5" y="12" width="7.5" height="6" rx="1.2" />
      <path d="M16.5 12v-2a1.8 1.8 0 0 1 3.5 0v2" />
    </svg>
  );
}

// Magnifier over a bar chart — "Analytics & Insights".
function AnalyticsInsightsIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M4 20v-5M9 20v-9M14 20v-3" />
      <circle cx="16.5" cy="9.5" r="4" />
      <path d="M19.3 12.3L22 15" />
    </svg>
  );
}

// Globe with language marks — "Multi-Language & Multi-Currency Support".
function MultiLanguageIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18" />
      <text x="12" y="13.5" textAnchor="middle" fontSize="6" fill="#fff" stroke="none">
        $
      </text>
    </svg>
  );
}

// Apple-style rounded phone — "Custom iOS App Development".
function IosAppIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <rect x="6" y="2.5" width="12" height="19" rx="3" />
      <path d="M10 5.5h4" />
      <circle cx="12" cy="18" r="1.2" />
      <path d="M9.2 9.3a3.2 3.2 0 0 1 5.6 0" />
    </svg>
  );
}

// Storefront bag with an upward arrow — "App Store Deployment".
function AppStoreDeploymentIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M5 8l1-4h12l1 4" />
      <rect x="4" y="8" width="16" height="12" rx="1.6" />
      <path d="M12 12v5M9.2 14.4L12 11.5l2.8 2.9" />
    </svg>
  );
}

// Two linked building blocks — "Enterprise iOS Solutions".
function EnterpriseSolutionsIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <rect x="3" y="9" width="7" height="12" />
      <rect x="14" y="3" width="7" height="18" />
      <path d="M5.5 12.5h2M5.5 15.5h2M5.5 18.5h2" />
      <path d="M16.5 6.5h2M16.5 9.5h2M16.5 12.5h2M16.5 15.5h2" />
    </svg>
  );
}

// Gear with a magnifier — "SEO Optimization".
function SeoOptimizationIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <circle cx="10.5" cy="10.5" r="6.2" />
      <path d="M10.5 6v1.4M10.5 13.6V15M6 10.5h1.4M13.6 10.5H15M7.3 7.3l1 1M12.7 13.7l1 1M7.3 13.7l1-1M12.7 7.3l1-1" />
      <path d="M15 15l5.5 5.5" />
    </svg>
  );
}

// Social media icon cluster — "Social Media Marketing".
function SocialMediaIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="12" cy="18" r="3" />
      <path d="M8.5 7.5L15.5 7.5M8 8.5l3 7M16 8.5l-3 7" />
    </svg>
  );
}

// Envelope with a chat bubble — "Email Marketing".
function EmailMarketingIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <rect x="2.5" y="5" width="14" height="11" rx="1.6" />
      <path d="M2.5 6.5l7 5.5 7-5.5" />
      <path d="M15.5 13.5h6v4.5a1.2 1.2 0 0 1-1.2 1.2H17l-2.5 2v-2H15a1.5 1.5 0 0 1-1.5-1.5v-2.3a1.9 1.9 0 0 1 2-1.9z" />
    </svg>
  );
}

// Browser window with a dollar sign — "PPC Advertising".
function PpcAdvertisingIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <rect x="2.5" y="4" width="19" height="14" rx="1.6" />
      <path d="M2.5 8h19" />
      <circle cx="5" cy="6" r="0.6" fill="#fff" stroke="none" />
      <circle cx="7.2" cy="6" r="0.6" fill="#fff" stroke="none" />
      <circle cx="15" cy="13" r="3.4" />
      <path d="M15 11v4.3M13.6 12.3h1.9a1 1 0 0 1 0 2h-1.6a1 1 0 0 0 0 2h2" />
    </svg>
  );
}

// Bar chart with a database cylinder — "Database Performance Optimization".
function DbPerformanceIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <ellipse cx="7" cy="5.5" rx="4.5" ry="2" />
      <path d="M2.5 5.5v8c0 1.1 2 2 4.5 2s4.5-.9 4.5-2v-8" />
      <path d="M2.5 9.5c0 1.1 2 2 4.5 2s4.5-.9 4.5-2" />
      <path d="M15 20v-4M18 20v-7M21 20v-3" />
    </svg>
  );
}

// Lock inside a circuit — "Data Security & Compliance".
function DataSecurityIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <rect x="9" y="11" width="6" height="5" rx="1" />
      <path d="M10.3 11v-1.6a1.7 1.7 0 0 1 3.4 0V11" />
      <path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21" />
    </svg>
  );
}

// Magnifier over a report page — "Analytics & Reporting".
function AnalyticsReportingIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <rect x="3" y="3" width="13" height="16" rx="1.4" />
      <path d="M6 7.5h7M6 11h7M6 14.5h4" />
      <circle cx="16.5" cy="16.5" r="3.5" />
      <path d="M19 19l2.5 2.5" />
    </svg>
  );
}

// Wrench over a rising chart — "Scalability & Maintenance".
function ScalabilityMaintenanceIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M3 20l6-6M10 13l4-4" />
      <path d="M12.3 8.7a2.6 2.6 0 0 1 3.5-3.4l-1.8 1.8 1 1 1.8-1.8a2.6 2.6 0 0 1-3.4 3.5l-4.6 4.6a1.3 1.3 0 0 1-1.9-1.9z" />
      <path d="M14 20v-5M18 20v-8M10 20v-2" />
    </svg>
  );
}

// Magnifier over a keyword list — "Keyword Research" (SEO placeholder page).
function KeywordResearchIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M4 7h11M4 11h8M4 15h5" />
      <circle cx="16.5" cy="15.5" r="4" />
      <path d="M19.3 18.3L22 21" />
    </svg>
  );
}

// Chain links — "Link Building" (SEO placeholder page).
function LinkBuildingIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M9 15l6-6" />
      <rect x="2.5" y="10.5" width="7" height="4" rx="2" transform="rotate(-45 6 12.5)" />
      <rect x="14.5" y="9.5" width="7" height="4" rx="2" transform="rotate(-45 18 11.5)" />
    </svg>
  );
}

// Browser window with a gear — "Custom Web Development".
function CustomWebDevIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <rect x="2" y="4" width="20" height="16" rx="1.6" />
      <path d="M2 8h20" />
      <circle cx="4.6" cy="6" r="0.5" fill="#fff" stroke="none" />
      <circle cx="6.4" cy="6" r="0.5" fill="#fff" stroke="none" />
      <circle cx="12" cy="15" r="2.6" />
      <path d="M12 10.6v1.4M12 17v1.4M15.6 12.6l-1.2.7M9.6 13.7l-1.2.7M16.4 13.7l-1.2-.7M8.4 12.6l1.2.7" />
    </svg>
  );
}

// Shield with a speed/trend mark — "Performance & Security Optimization".
function PerformanceSecurityIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M12 2.5l8 3v6c0 5.2-3.4 8.7-8 9.5-4.6-.8-8-4.3-8-9.5v-6z" />
      <path d="M8 13.5l2.4 2.4L16 10" />
    </svg>
  );
}

// Gear inside a page outline — "On-Page SEO".
function OnPageSeoIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M6 2.5h8l4 4v14.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1z" />
      <path d="M14 2.5v4h4" />
      <circle cx="11.5" cy="15" r="2.4" />
      <path d="M11.5 11.2v1.2M11.5 17.6v1.2M14.4 12.9l-1 .6M9.6 15.9l-1 .6M14.4 17.1l-1-.6M9.6 14.1l-1-.6" />
    </svg>
  );
}

// Monitor with a cog — "Technical SEO".
function TechnicalSeoIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <rect x="2" y="4" width="20" height="13.5" rx="1.6" />
      <path d="M8 21h8M12 17.5V21" />
      <circle cx="12" cy="10.5" r="3" />
      <path d="M12 6.8v1.1M12 12.6v1.1M15 10.5h-1.1M9.1 10.5H8M14 8.5l-.8.8M10.8 11.7l-.8.8M14 12.5l-.8-.8M10.8 9.3l-.8-.8" />
    </svg>
  );
}

// Chain link with a rising bar — "Off-Page SEO".
function OffPageSeoIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M10 14l4-4" />
      <rect x="3.5" y="9.5" width="6.5" height="3.6" rx="1.8" transform="rotate(-45 6.75 11.3)" />
      <rect x="14" y="7" width="6.5" height="3.6" rx="1.8" transform="rotate(-45 17.25 8.8)" />
      <path d="M4 20.5h4v-4M9 20.5l3-5" />
    </svg>
  );
}

// Document with a play/engagement mark — "Content Optimization & Marketing".
function ContentOptimizationIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M5 2.5h9l5 5v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-18a1 1 0 0 1 1-1z" />
      <path d="M14 2.5v5h5" />
      <path d="M7.5 14.5h4" />
      <circle cx="14.5" cy="15.5" r="3" />
      <path d="M13.5 14.2l2.2 1.3-2.2 1.3z" fill="#fff" stroke="none" />
    </svg>
  );
}

const SERVICE_ICON_MAP: Record<ServiceBenefitIconName, (props: IconProps) => React.JSX.Element> = {
  "ui-design": UiDesignIcon,
  "mobile-ui": MobileUiIcon,
  prototyping: PrototypingIcon,
  interaction: InteractionIcon,
  responsive: ResponsiveIcon,
  "seo-performance": SeoPerformanceIcon,
  "backend-api": BackendApiIcon,
  "cloud-enterprise": CloudEnterpriseIcon,
  "ecommerce-payment": EcommercePaymentIcon,
  "analytics-performance": AnalyticsPerformanceIcon,
  "android-robot": AndroidRobotIcon,
  "secure-payment": SecurePaymentIcon,
  "analytics-insights": AnalyticsInsightsIcon,
  "multi-language": MultiLanguageIcon,
  "ios-app": IosAppIcon,
  "app-store-deployment": AppStoreDeploymentIcon,
  "enterprise-solutions": EnterpriseSolutionsIcon,
  "seo-optimization": SeoOptimizationIcon,
  "social-media": SocialMediaIcon,
  "email-marketing": EmailMarketingIcon,
  "ppc-advertising": PpcAdvertisingIcon,
  "db-performance": DbPerformanceIcon,
  "data-security": DataSecurityIcon,
  "analytics-reporting": AnalyticsReportingIcon,
  "scalability-maintenance": ScalabilityMaintenanceIcon,
  "keyword-research": KeywordResearchIcon,
  "link-building": LinkBuildingIcon,
  "custom-web-dev": CustomWebDevIcon,
  "performance-security": PerformanceSecurityIcon,
  "on-page-seo": OnPageSeoIcon,
  "technical-seo": TechnicalSeoIcon,
  "off-page-seo": OffPageSeoIcon,
  "content-optimization": ContentOptimizationIcon,
};

interface ServiceIconProps {
  icon: ServiceBenefitIconName;
}

export function ServiceIcon({ icon }: ServiceIconProps) {
  const Icon = SERVICE_ICON_MAP[icon];
  return <Icon />;
}
