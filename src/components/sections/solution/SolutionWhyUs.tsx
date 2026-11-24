import type { SolutionDetail } from "@/types";
import { ServiceIcon } from "@/components/icons/ServiceIcons";

interface SolutionWhyUsProps {
  detail: SolutionDetail;
}

// Rotated across the points below so the grid doesn't repeat one icon 4
// (or 6, on the Salon page) times in a row — these are existing, generic
// service-icon glyphs, not bespoke per-point icons (see
// SolutionIllustration.tsx for the same reuse-over-bespoke tradeoff).
const WHY_ICONS = ["analytics-insights", "scalability-maintenance", "secure-payment", "cloud-enterprise"] as const;

// "Why is Trickle your trusted partner for ___?" section. Reuses the
// /services pages' "svc-benefits" grid classes exactly, since it's the
// same shape (a heading over a grid of icon + title + description
// cards) as the 4-point sections in the solution PDFs — Food Delivery's
// "Increased Revenue / Brand Visibility / Contactless Operations / Costs
// Saving" points, for instance.
export function SolutionWhyUs({ detail }: SolutionWhyUsProps) {
  return (
    <section className="svc-benefits">
      <div className="container">
        <h2 className="section-title section-title--white svc-benefits__heading">{detail.whyHeading}</h2>
        {detail.whySubheading && <p className="sol-why__sub">{detail.whySubheading}</p>}

        <div className="svc-benefits__grid">
          {detail.whyPoints.map((point, index) => {
            const isIconFirst = index % 2 === 0;
            const icon = WHY_ICONS[index % WHY_ICONS.length];
            return (
              <div className="svc-benefit" key={point.id}>
                {isIconFirst && (
                  <div className="svc-benefit__icon">
                    <ServiceIcon icon={icon} />
                  </div>
                )}
                <h3>{point.title}</h3>
                <p>{point.description}</p>
                {!isIconFirst && (
                  <div className="svc-benefit__icon">
                    <ServiceIcon icon={icon} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
