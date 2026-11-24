import type { SolutionDetail } from "@/types";
import { SolutionIllustration } from "./SolutionIllustration";

interface SolutionIntroProps {
  detail: SolutionDetail;
}

// "___ App Development Necessary for Every ___ Company" section — a
// white-background two-column block (copy + bullets + CTA on the left,
// a photo/illustration on the right) that 4 of the 7 reference PDFs
// (Food Delivery, Grocery Delivery, Pickup & Delivery, Real Estate) show
// right after the stats bar.
export function SolutionIntro({ detail }: SolutionIntroProps) {
  return (
    <section className="sol-intro">
      <div className="container">
        <h2 className="section-title">{detail.introHeading}</h2>

        <div className="sol-intro__grid">
          <div className="sol-intro__content">
            {detail.introParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <ul className="sol-intro__list">
              {detail.introBullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <a href="#service-contact" className="btn btn--primary">
              Contact Us Now <span className="btn__arrow-circle">&rarr;</span>
            </a>
          </div>

          <div className="sol-intro__visual" aria-hidden="true">
            <SolutionIllustration label={detail.navLabel.replace(" App", "").slice(0, 8).toUpperCase()} />
          </div>
        </div>
      </div>
    </section>
  );
}
