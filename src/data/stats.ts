import type { StatItem } from "@/types";

export const statItems: StatItem[] = [
  { id: "projects", value: "1500+", label: "Projects Delivered", icon: "rocket" },
  { id: "startups", value: "150+", label: "Startups Served", icon: "building" },
  { id: "clients", value: "800+", label: "Happy Clients", icon: "clients" },
  { id: "team", value: "450+", label: "Team Members", icon: "team" },
];

export const yearsOfExperience = {
  value: "15+",
  label: "Years of Experience",
  icon: "trophy" as const,
};
