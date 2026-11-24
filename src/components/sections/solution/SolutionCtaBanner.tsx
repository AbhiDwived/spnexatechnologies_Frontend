import { SolutionIllustration } from "./SolutionIllustration";

interface SolutionCtaBannerProps {
  heading: string;
  paragraph?: string;
  ctaLabel: string;
  /** "dark" = navy-gradient banner ("Tap Into Success with Your Own ___
   * App"); "light" = pale-blue banner ("Ready to take the first step").
   * Both variants appear, in that order, on every one of the 7 reference
   * PDFs. */
  variant: "dark" | "light";
  illustrationLabel: string;
  /** Where the CTA button points. Defaults to the in-page "#service-contact"
   * anchor used by every /services and /solutions page (each of which
   * renders a <ServiceContact id="service-contact"> at the bottom). Pages
   * without that section (e.g. /portfolio, /contact) pass "/contact" instead. */
  ctaHref?: string;
}

export function SolutionCtaBanner({
  heading,
  paragraph,
  ctaLabel,
  variant,
  illustrationLabel,
  ctaHref = "#service-contact",
}: SolutionCtaBannerProps) {
  return (
    <section className={`sol-cta sol-cta--${variant}`}>
      <div className="container sol-cta__inner">
        <div className="sol-cta__content">
          <h2 className="sol-cta__heading">{heading}</h2>
          {paragraph && <p className="sol-cta__desc">{paragraph}</p>}
          <a href={ctaHref} className="btn btn--pill-white">
            {ctaLabel} <span className="btn__arrow-circle">&rarr;</span>
          </a>
        </div>
        <div className="sol-cta__visual" aria-hidden="true">
          <SolutionIllustration label={illustrationLabel} />
        </div>
      </div>
    </section>
  );
}
