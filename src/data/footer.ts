import type { FooterColumn } from "@/types";

export const footerColumns: FooterColumn[] = [
  {
    id: "company",
    heading: "Company",
    links: [
      { label: "Who We Are", href: "/about" },
      { label: "Career", href: "#" },
      { label: "Contact Us", href: "/contact" },
      { label: "Case Study", href: "/portfolio" },
      { label: "Blog", href: "/blogs" },
      { label: "Free Quote", href: "/contact" },
    ],
  },
  {
    id: "development-services",
    heading: "Development Services",
    links: [
      { label: "App Development", href: "#" },
      { label: "AI Development", href: "#" },
      { label: "Chatbot Development", href: "#" },
      { label: "Software Development", href: "#" },
      { label: "Digital Product Engineering", href: "#" },
      { label: "Blockchain Testing Services", href: "#" },
    ],
  },
  {
    id: "advance-technologies",
    heading: "Advance Technologies",
    links: [
      { label: "Blockchain", href: "#" },
      { label: "Web3", href: "#" },
      { label: "Artificial Intelligence Integration", href: "#" },
      { label: "Internet of Things", href: "#" },
      { label: "Machine Learning", href: "#" },
      { label: "DevOps Services Company", href: "#" },
    ],
  },
];

export const footerContact = {
  email: "info@tricklesolutions.com",
  phone: "+91 925 218-4451",
};
