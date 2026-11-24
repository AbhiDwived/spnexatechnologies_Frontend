import { serviceContactInfo } from "@/data/serviceContact";

// "From dream to reality..." intro — matches Portfolio.pdf's header
// (headline + "Passionately crafted and built with love" + contact
// buttons, with a photo collage on the right: one large arch-topped photo
// of a couple on the left of the collage, and two smaller circular photos
// stacked beside it). The source collage uses 3 unlicensed stock photos;
// this recreates the real composition's SHAPE (arch + 2 circles, same
// relative size/position) with gradient fills standing in for the photos,
// the same tradeoff made everywhere else in this project where a PDF
// showed a stock photo this project has no rights to reuse.
export function PortfolioHero() {
  return (
    <section className="portfolio-hero">
      <div className="container portfolio-hero__inner">
        <div className="portfolio-hero__content">
          <h1 className="portfolio-hero__title">
            From dream to reality, we take pride in our involvement with these apps.
          </h1>
          <h2 className="portfolio-hero__subtitle">
            Passionately crafted and <span>built</span> with love
          </h2>
          <p className="portfolio-hero__desc">
            In addition to technology and software solutions, Trickle offers services to startups,
            global brands, and Fortune 500 companies.
          </p>

          <div className="portfolio-hero__contact-row">
            <a href={`tel:${serviceContactInfo.phone.replace(/\s+/g, "")}`} className="btn btn--pill-dark">
              {serviceContactInfo.phone}
            </a>
            <a href={`mailto:${serviceContactInfo.email}`} className="btn btn--pill-dark">
              {serviceContactInfo.email}
            </a>
          </div>
          <a href="/contact" className="btn btn--primary">
            Get In Touch <span className="btn__arrow-circle">&rarr;</span>
          </a>
        </div>

        <div className="portfolio-hero__visual" aria-hidden="true">
          <div className="portfolio-hero__arch" />
          <div className="portfolio-hero__circles">
            <div className="portfolio-hero__circle portfolio-hero__circle--a" />
            <div className="portfolio-hero__circle portfolio-hero__circle--b" />
          </div>
        </div>
      </div>
    </section>
  );
}
