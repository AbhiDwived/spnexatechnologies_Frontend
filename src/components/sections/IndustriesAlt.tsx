import Image from "next/image";
import { industryAltRows } from "@/data/industries";
import { IndustryIcon } from "@/components/icons/IndustryIcons";

// Second, distinct "Industries We Serve" layout from the Figma file
// (full-width alternating list with diagonal photos, Figma node 35:15).
// See ASSETS_NEEDED.md for the exact placeholder -> Figma asset mapping.
export function IndustriesAlt() {
  return (
    <section className="industries-alt">
      <h2 className="industries-alt__title">Industries We Serve</h2>

      {industryAltRows.map((row) => (
        <div className="industries-alt__row" key={row.id}>
          <div className="industries-alt__text">
            <div className="industry-card__icon">
              <IndustryIcon icon={row.icon} />
            </div>
            <h3>{row.title}</h3>
            <p>{row.description}</p>
            <a href="#" className="btn btn--pill-sm btn--pill-dark">
              {row.ctaLabel}
            </a>
          </div>
          <div className={`industries-alt__photo industries-alt__photo--${row.photoVariant}`}>
            <Image
              src={row.image.src}
              alt={row.image.alt}
              width={row.image.width}
              height={row.image.height}
            />
          </div>
        </div>
      ))}

      <div className="industries-alt__cta">
        <a href="#" className="btn btn--pill-sm btn--pill-dark">
          Explore More &rarr;
        </a>
      </div>
    </section>
  );
}
