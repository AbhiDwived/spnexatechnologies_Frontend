"use client";

import { serviceContactInfo, budgetOptions } from "@/data/serviceContact";

// Shared "Contact Us" block for every service detail page (Figma node
// 50:26). The form has no backend wired up yet — same as the rest of the
// site's CTAs — so it's a plain, unconnected form for now.
export function ServiceContact() {
  return (
    <section className="svc-contact" id="service-contact">
      <div className="container">
        <h2 className="section-title section-title--white">Contact Us</h2>

        <div className="svc-contact__card">
          <form className="svc-contact__form" onSubmit={(event) => event.preventDefault()}>
            <input type="text" placeholder="Enter Your Name" className="svc-input" />
            <input type="tel" placeholder="Enter Your Mobile" className="svc-input" />
            <input type="email" placeholder="Enter Your Email" className="svc-input" />
            <select className="svc-input svc-input--select" defaultValue="">
              <option value="" disabled>
                Budget
              </option>
              {budgetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <textarea placeholder="Enter Your Quick Enquiry" className="svc-input svc-input--textarea" rows={3} />
            <button type="submit" className="btn btn--primary svc-contact__submit">
              Submit
            </button>
          </form>

          <div className="svc-contact__info">
            <div className="svc-contact__row">
              <span className="svc-contact__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </span>
              <div>
                <h4>Email</h4>
                <p>{serviceContactInfo.email}</p>
              </div>
            </div>

            <div className="svc-contact__row">
              <span className="svc-contact__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="7" y="2" width="10" height="20" rx="2" />
                  <path d="M11 18h2" />
                </svg>
              </span>
              <div>
                <h4>Call Us</h4>
                <p>{serviceContactInfo.phone}</p>
              </div>
            </div>

            <div className="svc-contact__row">
              <span className="svc-contact__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z" />
                  <circle cx="12" cy="9.5" r="2.4" />
                </svg>
              </span>
              <div>
                <h4>Address</h4>
                {serviceContactInfo.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
