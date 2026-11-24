import { UxIllustration } from "./UxIllustration";
import { WebDesignIllustration } from "./WebDesignIllustration";
import { WebDevelopmentIllustration } from "./WebDevelopmentIllustration";
import { AppDevelopmentIllustration } from "./AppDevelopmentIllustration";
import { AndroidIllustration } from "./AndroidIllustration";
import { IosIllustration } from "./IosIllustration";
import { DigitalMarketingIllustration } from "./DigitalMarketingIllustration";
import { DatabaseAnalysisIllustration } from "./DatabaseAnalysisIllustration";
import { SeoIllustration } from "./SeoIllustration";

// Shared slug -> hero illustration lookup. Each service slug gets its own
// hand-drawn illustration approximation, built from its reference PDF
// (Figma's API was rate limited throughout, so none of these are exported
// vector assets). Both the service detail page hero (ServiceHero) and the
// homepage "Our Services" tabbed panel (Services) key off this same map so
// a slug's artwork only has to be registered in one place.
export const SERVICE_ILLUSTRATIONS: Record<string, () => React.JSX.Element> = {
  "ui-ux-design": UxIllustration,
  "web-design": WebDesignIllustration,
  "web-development": WebDevelopmentIllustration,
  "app-development": AppDevelopmentIllustration,
  "android-development": AndroidIllustration,
  "ios-development": IosIllustration,
  "digital-marketing": DigitalMarketingIllustration,
  "database-analysis": DatabaseAnalysisIllustration,
  seo: SeoIllustration,
};
