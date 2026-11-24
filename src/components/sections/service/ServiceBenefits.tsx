import type { ServiceDetail } from "@/types";
import { ServiceIcon } from "@/components/icons/ServiceIcons";

interface ServiceBenefitsProps {
  detail: ServiceDetail;
}

// Figma node 50:26's benefits grid alternates icon position per column:
// columns 0 and 2 show the icon above the heading, columns 1 and 3 show it
// below the paragraph — a zig-zag reproduced here with `isIconFirst`.
export function ServiceBenefits({ detail }: ServiceBenefitsProps) {
  return (
    <section className="svc-benefits">
      <div className="container">
        <h2 className="section-title section-title--white svc-benefits__heading">
          {detail.benefitsHeading}
        </h2>

        <div className="svc-benefits__grid">
          {detail.benefits.map((benefit, index) => {
            const isIconFirst = index % 2 === 0;
            return (
              <div className="svc-benefit" key={benefit.id}>
                {isIconFirst && (
                  <div className="svc-benefit__icon">
                    <ServiceIcon icon={benefit.icon} />
                  </div>
                )}
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
                {!isIconFirst && (
                  <div className="svc-benefit__icon">
                    <ServiceIcon icon={benefit.icon} />
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
