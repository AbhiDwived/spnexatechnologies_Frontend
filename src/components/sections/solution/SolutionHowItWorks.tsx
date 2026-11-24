import { ProcessIcon } from "@/components/icons/ProcessIcons";

interface SolutionHowItWorksProps {
  /** e.g. "Fitness App" — used in the "How Our ___ Development Company
   * Works" heading. */
  navLabel: string;
}

// "How Our ___ Development Company Works" 4-step strip — identical
// across all 7 reference PDFs, word-for-word (only the page's own name
// in the heading changes), so these 4 steps are shared content rather
// than per-solution data, the same way Awards and the stats bar are.
const STEPS: { id: string; icon: Parameters<typeof ProcessIcon>[0]["icon"]; title: string; description: string }[] = [
  {
    id: "submitting-order",
    icon: "requirement-gathering",
    title: "Submitting Your Order",
    description: "Selecting and submitting is the foremost thing that a user needs to do.",
  },
  {
    id: "defining-reliance",
    icon: "testing",
    title: "Defining True Reliance",
    description: "You are setting up a meeting with the developer to clarify what you need in your product.",
  },
  {
    id: "ui-frontend",
    icon: "development",
    title: "UI design & Frontend Coding",
    description: "Implement and structure highly professional UI design along with front-end programming codes.",
  },
  {
    id: "fast-preview",
    icon: "deployment",
    title: "Fast Preview",
    description:
      "Gets the fastest and earliest preview of what's going on in the project. Keep a check to make your desired changes if needed.",
  },
];

export function SolutionHowItWorks({ navLabel }: SolutionHowItWorksProps) {
  return (
    <section className="sol-how">
      <div className="container">
        <h2 className="section-title">How Our {navLabel} Development Company Works</h2>
        <p className="sol-how__sub">Top most priority is Transparency</p>

        <div className="sol-how__grid">
          {STEPS.map((step) => (
            <div className="sol-how__step" key={step.id}>
              <div className="sol-how__icon">
                <ProcessIcon icon={step.icon} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
