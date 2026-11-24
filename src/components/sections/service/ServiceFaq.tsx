"use client";

import { useState } from "react";
import type { ServiceDetail } from "@/types";

interface ServiceFaqProps {
  detail: ServiceDetail;
}

// Accordion FAQ (Figma node 50:26) — first item open by default, matching
// the reference design; only one item is expanded at a time.
export function ServiceFaq({ detail }: ServiceFaqProps) {
  const [openId, setOpenId] = useState<string | null>(detail.faq[0]?.id ?? null);

  return (
    <section className="svc-faq">
      <div className="container">
        <h2 className="section-title">{detail.faqHeading}</h2>
        <p className="section-sub">{detail.faqSubheading}</p>

        <div className="svc-faq__list">
          {detail.faq.map((item) => {
            const isOpen = item.id === openId;
            return (
              <div className={`svc-faq__item${isOpen ? " svc-faq__item--open" : ""}`} key={item.id}>
                <button
                  type="button"
                  className="svc-faq__question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  {item.question}
                  <span className="svc-faq__toggle" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && <p className="svc-faq__answer">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
