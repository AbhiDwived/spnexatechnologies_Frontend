import type { ServiceProcessStep } from "@/types";
import { ProcessIcon } from "@/components/icons/ProcessIcons";

interface ServiceProcessProps {
  /** Only `process` is read — this also serves SolutionDetail pages
   * (Fitness, On-Demand), which share this same optional `process` shape
   * without the rest of ServiceDetail. */
  detail: {
    process?: {
      heading: string;
      description: string;
      steps: ServiceProcessStep[];
    };
  };
}

// "Process of Creating ___" 6-step flow diagram (Android & Custom iOS
// Development pages). The Figma reference draws this as an irregular
// zigzag with dashed connector arrows; this is a simplified two-row,
// three-column recreation (Figma's API was rate-limited while this was
// built) — same 6 steps and left-to-right-then-down-and-across flow, not
// pixel-exact positioning.
export function ServiceProcess({ detail }: ServiceProcessProps) {
  if (!detail.process) return null;
  const { heading, description, steps } = detail.process;
  const [row1, row2] = [steps.slice(0, 3), steps.slice(3, 6)];

  return (
    <section className="svc-process">
      <div className="container">
        <h2 className="section-title">{heading}</h2>
        <p className="svc-process__desc">{description}</p>

        <div className="svc-process__grid">
          <div className="svc-process__row">
            {row1.map((step, i) => (
              <div className="svc-process__step-wrap" key={step.id}>
                <div className="svc-process__step">
                  <span className="svc-process__icon">
                    <ProcessIcon icon={step.icon} />
                  </span>
                  <span className="svc-process__label">{step.label}</span>
                </div>
                {i < row1.length - 1 && <span className="svc-process__arrow svc-process__arrow--h" aria-hidden="true" />}
              </div>
            ))}
          </div>

          <span className="svc-process__arrow svc-process__arrow--v" aria-hidden="true" />

          <div className="svc-process__row">
            {row2.map((step, i) => (
              <div className="svc-process__step-wrap" key={step.id}>
                <div className="svc-process__step">
                  <span className="svc-process__icon">
                    <ProcessIcon icon={step.icon} />
                  </span>
                  <span className="svc-process__label">{step.label}</span>
                </div>
                {i < row2.length - 1 && <span className="svc-process__arrow svc-process__arrow--h" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
