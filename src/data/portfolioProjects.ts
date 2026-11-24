import type { PortfolioScreenKind } from "@/components/sections/portfolio/PortfolioAssets";

// Transcribed from Portfolio.pdf (a single very tall Figma export,
// rasterized and read in vertical slices for a pixel-level recheck against
// the live build). The real design is 7 full-bleed, alternating sections —
// not a 3-column card grid — each pairing two phone-screenshot mockups
// with a white info card that reuses the exact same "Nize" placeholder
// badge and the exact same filler paragraph (including its "uttse" typo)
// on every one of the 7 cards. That paragraph is reproduced here verbatim,
// per the explicit "100% match" request, rather than the honest per-project
// copy used in an earlier pass of this page.
export interface PortfolioProject {
  id: string;
  name: string;
  /** Two phone-mockup screen kinds (left, right) approximating that
   * project's real screenshots — see PortfolioAssets.tsx. */
  screens: [PortfolioScreenKind, PortfolioScreenKind];
  /** Section background gradient, approximated from the source render
   * (exact hex values weren't available from the PDF/Figma, since Figma's
   * API stayed rate-limited for this entire project). */
  bgFrom: string;
  bgTo: string;
  /** "View Case Study" button colors for this section. */
  buttonBg: string;
  buttonText: string;
}

const GENERIC_PARAGRAPH =
  "Do you also wish to improve your business’s online visibility? Trickle, an experienced ecommerce mobile app development company, offers end-to-end solutions to build a strong online presence. Our trained developers develop mobile apps that grab your customers’ attention and are visually appealing. We uttse the latest technologies to offer an advanced shopping experience and improve conversions. We will transform your app into a masterpiece.";

export const portfolioParagraph = GENERIC_PARAGRAPH;

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "nize-shopping",
    name: "Nize Shopping App",
    screens: ["product-grid", "cart-list"],
    bgFrom: "#6b6e73",
    bgTo: "#f4f5f6",
    buttonBg: "#14161a",
    buttonText: "#ffffff",
  },
  {
    id: "meetup",
    name: "meetup App",
    screens: ["match-detail", "chat-list"],
    bgFrom: "#d8ecfb",
    bgTo: "#eef8ff",
    buttonBg: "#bfe3fb",
    buttonText: "#0b1757",
  },
  {
    id: "teegot",
    name: "Teegot App",
    screens: ["grocery-grid", "cart-list"],
    bgFrom: "#cfe9b9",
    bgTo: "#8fc96b",
    buttonBg: "#4caf3c",
    buttonText: "#ffffff",
  },
  {
    id: "haircare",
    name: "Haircare App",
    screens: ["salon-list", "specialist-detail"],
    bgFrom: "#f3c4c4",
    bgTo: "#e46a6a",
    buttonBg: "#e05353",
    buttonText: "#ffffff",
  },
  {
    id: "carw",
    name: "carw App",
    screens: ["coworking-list", "space-detail"],
    bgFrom: "#cdeccb",
    bgTo: "#4caf50",
    buttonBg: "#2e7d32",
    buttonText: "#ffffff",
  },
  {
    id: "foodsly",
    name: "Foodsly App",
    screens: ["menu-grid", "item-detail"],
    bgFrom: "#8a1f1f",
    bgTo: "#c0392b",
    buttonBg: "#8d2020",
    buttonText: "#ffffff",
  },
  {
    id: "growfit",
    name: "Growfit App",
    screens: ["calorie-dashboard", "rings-tracking"],
    bgFrom: "#f7e9a0",
    bgTo: "#f2c94c",
    buttonBg: "#f0c239",
    buttonText: "#2a2d33",
  },
];
