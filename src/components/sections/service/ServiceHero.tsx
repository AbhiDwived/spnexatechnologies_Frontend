import type { ServiceDetail } from "@/types";
import { UxIllustration } from "./UxIllustration";
import { SERVICE_ILLUSTRATIONS } from "./serviceIllustrations";

interface ServiceHeroProps {
  detail: ServiceDetail;
}

// Service detail page hero. Each slug gets its own hand-drawn illustration
// approximation, built from its reference PDF (Figma's API was rate
// limited throughout, so none of these are exported vector assets) — see
// serviceIllustrations.ts for the shared slug -> illustration map.
export function ServiceHero({ detail }: ServiceHeroProps) {
  const Illustration = SERVICE_ILLUSTRATIONS[detail.slug] ?? UxIllustration;
  return (
    <section className="svc-hero">
      <div className="container svc-hero__inner">
        <div className="svc-hero__content">
          <h1 className="svc-hero__title">{detail.heroTitle}</h1>
          <span className="svc-hero__swash" aria-hidden="true" />
          <p className="svc-hero__desc">{detail.heroDescription}</p>

          <ul className="svc-hero__list">
            {detail.heroBullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>

          <a href="#service-contact" className="btn btn--outline-pill svc-hero__cta">
            Contact Us Now <span className="btn__arrow-circle">&rarr;</span>
          </a>
        </div>

        <div className="svc-hero__visual" aria-hidden="true">
          <Illustration />
        </div>
      </div>
    </section>
  );
}
