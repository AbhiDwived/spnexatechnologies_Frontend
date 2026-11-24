import Image from "next/image";
import { industryCards, industryPhotoCard } from "@/data/industries";
import { IndustryIcon } from "@/components/icons/IndustryIcons";

// Card-grid "Industries We Serve" layout (Figma node 26:196).
export function Industries() {
  const [education, grocery, ecommerce, salon] = industryCards;

  return (
    <section className="industries" id="solutions">
      <div className="container">
        <div className="industries__grid">
          <article className="industry-card industry-card--education">
            <div className="industry-card__icon">
              <IndustryIcon icon={education.icon} />
            </div>
            <h3>{education.title}</h3>
            <p>{education.description}</p>
            <a href="#" className="btn btn--pill-sm">
              {education.ctaLabel}
            </a>
          </article>

          <div className="industries__heading">
            <h2 className="section-title section-title--white">Industries We Serve</h2>
            <Image
              src="/assets/images/underline-swash.png"
              alt=""
              width={220}
              height={20}
              className="industries__swash"
            />
          </div>

          <article className="industry-card industry-card--grocery">
            <div className="industry-card__icon">
              <IndustryIcon icon={grocery.icon} />
            </div>
            <h3>{grocery.title}</h3>
            <p>{grocery.description}</p>
            <a href="#" className="btn btn--pill-sm">
              {grocery.ctaLabel}
            </a>
          </article>

          <article className="industry-card industry-card--ecommerce">
            <div className="industry-card__icon">
              <IndustryIcon icon={ecommerce.icon} />
            </div>
            <h3>{ecommerce.title}</h3>
            <p>{ecommerce.description}</p>
            <a href="#" className="btn btn--pill-sm">
              {ecommerce.ctaLabel}
            </a>
          </article>

          <div className="industry-card industry-card--photo">
            <Image
              src={industryPhotoCard.image.src}
              alt={industryPhotoCard.image.alt}
              width={industryPhotoCard.image.width}
              height={industryPhotoCard.image.height}
            />
            <a href="#" className="btn btn--pill-sm industry-card__overlay-btn">
              {industryPhotoCard.ctaLabel}
            </a>
          </div>

          <article className="industry-card industry-card--salon">
            <div className="industry-card__icon">
              <IndustryIcon icon={salon.icon} />
            </div>
            <h3>{salon.title}</h3>
            <p>{salon.description}</p>
            <a href="#" className="btn btn--pill-sm">
              {salon.ctaLabel}
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
