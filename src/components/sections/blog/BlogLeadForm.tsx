"use client";

import { budgetOptions } from "@/data/serviceContact";

// "Let's Build It Right." consultation-booking form — matches Blogs.pdf's
// own lead form (Full Name / Email / Phone / Budget / Select Industry /
// Quick Enquiry), distinct from the shared ServiceContact form used on
// every service/solution page. No backend wired up, same as every other
// form on this site. A recheck against the PDF found this section sits on
// a pink/magenta gradient background with a couple of angled phone-mockup
// photos decorating each side (not the flat gray this page had) — added
// below as simple CSS phone shapes, the same abstraction already used for
// every other missing-photo slot in this project.
const industryOptions = [
  "E-commerce",
  "Healthcare",
  "Real Estate",
  "Food & Delivery",
  "Fitness & Wellness",
  "Other",
];

export function BlogLeadForm() {
  return (
    <section className="blog-leadform">
      <div className="blog-leadform__decor" aria-hidden="true">
        <span className="blog-leadform__phone blog-leadform__phone--a" />
        <span className="blog-leadform__phone blog-leadform__phone--b" />
      </div>
      <div className="container">
        <h2 className="blog-leadform__heading">Let&apos;s Build It Right.</h2>
        <p className="blog-leadform__sub">
          Book your free 30 min product consultation with us this week.
          <br />
          We look forward to meeting you!
        </p>

        <form className="blog-leadform__card" onSubmit={(event) => event.preventDefault()}>
          <input type="text" placeholder="Full Name" className="svc-input" />
          <input type="email" placeholder="Email Address" className="svc-input" />
          <input type="tel" placeholder="Phone Number" className="svc-input" />
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
          <select className="svc-input svc-input--select" defaultValue="">
            <option value="" disabled>
              Select Industry
            </option>
            {industryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <textarea placeholder="Enter Your Quick Enquiry" className="svc-input svc-input--textarea" rows={3} />

          <ul className="blog-leadform__notes">
            <li>In just 2 mins you will get a response</li>
            <li>Your idea is 100% protected by our Non Disclosure Agreement</li>
          </ul>

          <button type="submit" className="btn btn--primary blog-leadform__submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
