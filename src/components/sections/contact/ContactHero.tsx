"use client";

import { budgetOptions } from "@/data/serviceContact";

// Dark two-column hero matching Contact_us.pdf: headline + "For
// Business"/"For Career" pill toggle on the left, a white contact-form
// card on the right (Name / Email / Phone / "What's your project
// about?" / Submit Now). No backend wired up, same as every other form
// on this site.
export function ContactHero() {
  return (
    <section className="contact-hero" id="contact-form">
      <div className="container contact-hero__inner">
        <div className="contact-hero__content">
          <p className="contact-hero__eyebrow">Contact Us</p>
          <h1 className="contact-hero__title">Unleash Your Business Potential Now!</h1>
          <p className="contact-hero__desc">
            Tell us a little about your project and our team will get back to you shortly.
          </p>

          <div className="contact-hero__pills" role="group" aria-label="Reason for contact">
            <button type="button" className="contact-hero__pill contact-hero__pill--active">
              For Business
            </button>
            <button type="button" className="contact-hero__pill">
              For Career
            </button>
          </div>
        </div>

        <form className="contact-hero__card" onSubmit={(event) => event.preventDefault()}>
          <h2 className="contact-hero__card-heading">Get In Touch</h2>
          <input type="text" placeholder="Your Name" className="svc-input" />
          <input type="email" placeholder="Email Address" className="svc-input" />
          <input type="tel" placeholder="Phone Number" className="svc-input" />
          <select className="svc-input svc-input--select" defaultValue="">
            <option value="" disabled>
              Project Budget
            </option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <textarea
            placeholder="What's your project about?"
            className="svc-input svc-input--textarea"
            rows={3}
          />
          <button type="submit" className="btn btn--primary contact-hero__submit">
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
}
