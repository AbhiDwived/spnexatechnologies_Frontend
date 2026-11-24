import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const testimonial = testimonials[0];

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Client Say About Us</h2>

        <div className="testimonial">
          <Image
            src="/assets/images/quote-icon.png"
            alt=""
            width={61}
            height={46}
            className="testimonial__quote-mark"
          />
          <p className="testimonial__text">{testimonial.quote}</p>

          <div className="testimonial__author">
            <Image
              src={testimonial.avatar.src}
              alt={testimonial.avatar.alt}
              width={testimonial.avatar.width}
              height={testimonial.avatar.height}
              className="testimonial__avatar"
            />
            <div>
              <p className="testimonial__name">{testimonial.authorName}</p>
              <p className="testimonial__role">{testimonial.authorRole}</p>
            </div>
          </div>

          <div className="testimonial__nav">
            <button type="button" className="nav-circle" aria-label="Previous">
              &larr;
            </button>
            <button type="button" className="nav-circle" aria-label="Next">
              &rarr;
            </button>
          </div>
          <a href="#" className="testimonial__all">
            All Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
