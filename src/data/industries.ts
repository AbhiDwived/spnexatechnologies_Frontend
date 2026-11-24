import type { IndustryAltRow, IndustryCard, IndustryPhotoCard } from "@/types";

export const industryCards: IndustryCard[] = [
  {
    id: "education",
    icon: "education",
    title: "Education App Development",
    description:
      "Devherds serves schools, colleges, and edtech companies by developing education apps that include features such as virtual classrooms, online assessment, tracking of student progress, and interactive content.",
    ctaLabel: "Explore more",
  },
  {
    id: "grocery",
    icon: "grocery",
    title: "Grocery Delivery App Development",
    description:
      "We build effective grocery delivery applications that cater to the fast-growing demand of online shopping. Our solutions include inventory management, real-time tracking, secure payment gateways, and user-friendly interfaces.",
    ctaLabel: "Explore more",
  },
  {
    id: "ecommerce",
    icon: "ecommerce",
    title: "E-commerce App Development",
    description:
      "We develop dynamic e-commerce apps that sell and increase customer experiences. Our solutions include product catalogs, shopping carts, multiple payment gateways, and customer reviews.",
    ctaLabel: "Explore more",
  },
  {
    id: "salon",
    icon: "salon",
    title: "Salon App Development",
    description:
      "Our salon application development services emphasize the ease of appointment booking and customer management for beauty and wellness businesses.",
    ctaLabel: "Explore more",
  },
];

export const industryPhotoCard: IndustryPhotoCard = {
  image: {
    src: "/assets/images/salon-photo-1.png",
    alt: "Salon service",
    width: 526,
    height: 335,
  },
  ctaLabel: "More Serve",
};

// Second, distinct "Industries We Serve" layout from the Figma file
// (full-width alternating list with diagonal photos). Rebuilt from a
// reference screenshot since the Figma API rate limit blocked a verified
// design-context pull — see ASSETS_NEEDED.md for exact replacement assets.
export const industryAltRows: IndustryAltRow[] = [
  {
    id: "education",
    icon: "education",
    title: "Education App Development",
    description:
      "Devherds serves schools, colleges, and edtech companies by developing education apps that include features such as virtual classrooms, online assessment, tracking of student progress, and interactive content.",
    ctaLabel: "Explore More →",
    photoVariant: "a",
    image: {
      src: "/assets/images/industries-alt-education.png",
      alt: "",
      width: 700,
      height: 420,
    },
  },
  {
    id: "grocery",
    icon: "grocery",
    title: "Grocery Delivery App Development",
    description:
      "We build effective grocery delivery applications that cater to the fast-growing demand of online shopping. Our solutions include inventory management, real-time tracking, secure payment gateways, and user-friendly interfaces.",
    ctaLabel: "Explore More →",
    photoVariant: "b",
    image: {
      src: "/assets/images/industries-alt-grocery.png",
      alt: "",
      width: 700,
      height: 420,
    },
  },
  {
    id: "ecommerce",
    icon: "ecommerce",
    title: "E-commerce App Development",
    description:
      "We develop dynamic e-commerce apps that sell and increase customer experiences. Our solutions include product catalogs, shopping carts, multiple payment gateways, and customer reviews.",
    ctaLabel: "Explore More →",
    photoVariant: "a",
    image: {
      src: "/assets/images/industries-alt-ecommerce.png",
      alt: "",
      width: 700,
      height: 420,
    },
  },
  {
    id: "salon",
    icon: "salon",
    title: "Salon App Development",
    description:
      "Our salon application development services emphasize the ease of appointment booking and customer management for beauty and wellness businesses.",
    ctaLabel: "Explore More →",
    photoVariant: "b",
    image: {
      src: "/assets/images/industries-alt-salon.png",
      alt: "",
      width: 700,
      height: 420,
    },
  },
];
