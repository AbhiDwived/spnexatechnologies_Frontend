import { contactPageInfo } from "@/data/contactPage";

// Address / phone / email / rating block + a real, functional Google
// Maps search link (built from the transcribed address) rather than a
// static map screenshot — a non-interactive image would misrepresent
// itself as a live map, so a working link stands in instead (same
// photo/asset tradeoff applied everywhere else in this project, adapted
// for a case where a "fake" substitute would actively mislead).
export function ContactInfo() {
  const stars = Math.round(contactPageInfo.rating);

  return (
    <section className="contact-info">
      <div className="container contact-info__inner">
        <div className="contact-info__card">
          <h2>Our Office</h2>
          {contactPageInfo.addressLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p>
            <a href={`tel:${contactPageInfo.phone.replace(/\s+/g, "")}`}>{contactPageInfo.phone}</a>
          </p>
          <p>
            <a href={`mailto:${contactPageInfo.email}`}>{contactPageInfo.email}</a>
          </p>

          <div className="contact-info__rating" aria-label={`Rated ${contactPageInfo.rating} out of 5`}>
            <span aria-hidden="true">{"★".repeat(stars)}{"☆".repeat(5 - stars)}</span>
            <span className="contact-info__rating-text">
              {contactPageInfo.rating} ({contactPageInfo.reviewCount} reviews)
            </span>
          </div>

          <a
            href={contactPageInfo.mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline-pill contact-info__map-link"
          >
            Open in Google Maps <span className="btn__arrow-circle">&rarr;</span>
          </a>
        </div>

        <div className="contact-info__map" aria-hidden="true">
          <span>Find us on Google Maps</span>
        </div>
      </div>
    </section>
  );
}
