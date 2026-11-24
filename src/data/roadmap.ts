import type { RoadmapStep } from "@/types";

export const roadmapSteps: RoadmapStep[] = [
  {
    id: "planning",
    title: "Planning",
    items: ["Initial Conversation", "Requirement Analysis", "Define Scope"],
  },
  {
    id: "design",
    title: "Design",
    items: ["User Flows", "Wireframes", "Brand Integration", "Mockups", "Prototypes"],
  },
  {
    id: "development",
    title: "Development",
    items: ["Architecture", "Coding", "DB Design", "API’s", "Weekly Sprints"],
  },
  {
    id: "testing",
    title: "Testing",
    items: [
      "Regression Testing",
      "Load Testing",
      "Device Testing",
      "Usability Testing",
      "Reporting",
    ],
  },
  {
    id: "deployment",
    title: "Deployment",
    items: ["Deployment Plan", "Release to Production"],
  },
  {
    id: "maintenance",
    title: "Maintenance",
    items: ["Feedbacks", "Revisions & Debugging"],
  },
];
