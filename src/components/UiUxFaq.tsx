"use client";

import React, { useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqsData: FaqItem[] = [
  {
    id: 1,
    question: "What is the difference between UI and UX design?",
    answer:
      "UI (User Interface) design focuses on the look and feel of an app or website (colors, typography, buttons, layout). UX (User Experience) design focuses on usability, flow, and how users interact with the product. Together, they ensure a product is both beautiful and functional.",
  },
  {
    id: 2,
    question: "Why is UI/UX design important for my business?",
    answer:
      "Good UI/UX design directly impacts your bottom line by increasing user engagement, improving conversion rates, and reducing bounce rates. Intuitive design reduces user friction, fosters brand loyalty, and accelerates customer acquisition.",
  },
  {
    id: 3,
    question: "Do you create designs for both web and mobile apps?",
    answer:
      "Yes, we specialize in cross-platform design across responsive web platforms, iOS, Android, and tablet applications. Our team ensures consistent design language and optimal user experiences across all devices and screen sizes.",
  },
  {
    id: 4,
    question: "Can you provide prototypes before development?",
    answer:
      "Yes, we produce interactive, clickable high-fidelity prototypes in Figma and Adobe XD before writing any code. This allows stakeholders and target users to test navigation, user flows, and interface logic early, saving significant development time and cost.",
  },
  {
    id: 5,
    question: "How do you ensure the design matches my brand identity?",
    answer:
      "We establish a comprehensive design system including typography scales, color schemes, component libraries, and brand guidelines that authentically represent and amplify your company's unique identity.",
  },
  {
    id: 6,
    question: "Can you redesign my existing app or website?",
    answer:
      "Yes, our team performs detailed UX audits and heuristic evaluations to diagnose usability bottlenecks and redesign existing applications into modern, high-performing digital products.",
  },
];

export default function UiUxFaq() {
  // First item open by default matching screenshot
  const [openIds, setOpenIds] = useState<number[]>([1]);

  const toggleFaq = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="relative py-14 sm:py-20 px-4 bg-gradient-to-b from-[#F0F7FF] via-[#E6F0FA] to-[#DCEDFC] overflow-hidden">
      {/* Subtle light architectural ray / curve background effect */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 0 C300 200, 600 600, 720 800"
            stroke="#93C5FD"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M1540 0 C1140 200, 840 600, 720 800"
            stroke="#93C5FD"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <circle cx="720" cy="400" r="500" stroke="#BFDBFE" strokeWidth="1" opacity="0.4" />
        </svg>
      </div>

      <div className="container max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2545] tracking-tight mb-2">
            Frequently Asked Questions About UI/UX
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium">
            Explore how usability impacts operational success
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {faqsData.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                style={{ borderRadius: "8px" }}
                className="bg-[#083363] border border-[#144983] shadow-md transition-all overflow-hidden"
              >
                {/* Header Toggle Button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-5 sm:px-6 py-4 flex items-center justify-between text-left cursor-pointer transition-colors hover:bg-[#0b3d75]/50 border-0 bg-transparent"
                >
                  <span className="text-xs sm:text-sm lg:text-[15px] font-semibold text-white tracking-wide pr-4">
                    {faq.question}
                  </span>
                  <span className="text-white text-base sm:text-lg font-bold shrink-0 w-6 h-6 flex items-center justify-center">
                    {isOpen ? "—" : "+"}
                  </span>
                </button>

                {/* Expanded Answer Content */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-4 sm:pb-5 pt-1 text-blue-100 text-xs sm:text-[13px] leading-relaxed border-t border-white/10 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
