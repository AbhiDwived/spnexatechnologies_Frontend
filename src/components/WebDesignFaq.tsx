"use client";

import React, { useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const webFaqsData: FaqItem[] = [
  {
    id: 1,
    question: "Why is responsive web design important?",
    answer:
      "Responsive design ensures your website looks and functions perfectly on desktops, tablets, and mobile devices, providing a seamless experience for all users and improving SEO performance.",
  },
  {
    id: 2,
    question: "How does good web design impact user experience?",
    answer:
      "Effective web design guides visitors naturally through intuitive navigation, fast page loads, readable typography, and visual hierarchy, turning casual visitors into engaged paying customers.",
  },
  {
    id: 3,
    question: "What is a design system and why do I need one?",
    answer:
      "A design system is a comprehensive library of reusable UI components, colors, typography, and guidelines that ensures absolute visual consistency and accelerates development as your brand grows.",
  },
  {
    id: 4,
    question: "How long does it take to design a website?",
    answer:
      "A standard custom web design project typically takes between 2 to 4 weeks depending on the complexity, number of unique templates, custom illustrations, and feedback rounds.",
  },
  {
    id: 5,
    question: "Will my website be optimized for performance and SEO?",
    answer:
      "Yes, our designs are engineered with clean code architecture, lightweight assets, semantic HTML5, fast core web vitals, and mobile-first search engine optimization.",
  },
  {
    id: 6,
    question: "Can I update the website myself after it's built?",
    answer:
      "Yes, we build our web solutions with modern CMS and modular components, allowing your team to easily update copy, blog articles, media, and banners without technical assistance.",
  },
];

export default function WebDesignFaq() {
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
            Frequently Asked Questions About Web Design
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium">
            Explore how usability impacts overall brand success.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {webFaqsData.map((faq) => {
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
