import type { SolutionDetail } from "@/types";
import { SolutionIllustration } from "./SolutionIllustration";

interface SolutionHeroProps {
  detail: SolutionDetail;
}

// Solution detail page hero — reuses the /services pages' "svc-hero"
// layout and classes exactly (same markup shape, same CSS), since every
// one of the 7 reference PDFs opens with the same hero pattern a
// /services page does: title, description, a short bullet list, a
// "Contact Us Now" CTA, and an illustration.
export function SolutionHero({ detail }: SolutionHeroProps) {
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
          <SolutionIllustration label={detail.navLabel.replace(" App", "").slice(0, 8).toUpperCase()} />
        </div>
      </div>
    </section>
  );
}
