import type { BlogPost } from "@/types";

// NOTE: built from Figma layout data only (text + positions) — the Figma
// API hit its rate limit before a verified screenshot/colors could be
// pulled for this section. Re-check against Figma once quota resets.
export const blogPosts: BlogPost[] = [
  {
    id: "taxi-booking-app-like-lyft",
    badge: "codefire",
    tag: "Blog",
    title: "Start Business With Taxi Booking App Like Lyft",
    excerpt:
      "Start Business With Taxi Booking App Like Lyft – The dynamic world of developing a taxi booking app akin to the renowned Lyft...",
    image: {
      src: "/assets/images/blog-1.png",
      alt: "",
      width: 368,
      height: 170,
    },
  },
  {
    id: "top-10-taxi-booking-apps-2024",
    badge: "codefire",
    tag: "Blog",
    title: "Top 10 Taxi Booking apps in 2024",
    excerpt:
      "Top 10 Taxi Booking Apps In 2024 – When was the last time you waited for a cab outside on the sidewalk? You mean, years ago? With the advent of taxi booking apps...",
    image: {
      src: "/assets/images/blog-2.png",
      alt: "",
      width: 368,
      height: 170,
    },
  },
  {
    id: "riding-innovation-taxi-guide",
    badge: "codefire",
    tag: "Blog",
    title: "Riding Innovation: The Comprehensive Guide to Taxi ....",
    excerpt:
      "Due to the fast growth of the world’s population, the transportation industry has experienced significant...",
    image: {
      src: "/assets/images/blog-3.png",
      alt: "",
      width: 368,
      height: 170,
    },
  },
];
