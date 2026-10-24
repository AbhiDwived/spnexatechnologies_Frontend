"use client";

import React, { useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const webDevFaqsData: FaqItem[] = [
  {
    id: 1,
    question: "What is Web Development?",
    answer:
      "Web development is the process of building, creating, and maintaining websites or web applications. It covers both the front end (what users see) and the back end (server, database, and logic).",
  },
  {
    id: 2,
    question: "Why Does My Business Need Professional Web Development?",
    answer:
      "Professional web development ensures your site is fast, secure, scalable, and search-engine optimized. It builds trust with customers, handles traffic spikes, and integrates critical business tools seamlessly.",
  },
  {
    id: 3,
    question: "Which Technologies Do You Use?",
    answer:
      "We leverage modern high-performance stacks including Next.js, React, Node.js, TypeScript, Python, PostgreSQL, and cloud infrastructure like AWS and Vercel to build durable, scalable platforms.",
  },
  {
    id: 4,
    question: "Can You Make My Website Responsive?",
    answer:
      "Yes, all websites we develop are mobile-first and fully responsive, adapting seamlessly to desktop monitors, laptops, tablets, and smartphones with optimal loading speed.",
  },
  {
    id: 5,
    question: "How Do You Keep My Website Secure?",
    answer:
      "We implement SSL encryption, secure OAuth/JWT authentication, database sanitization against injection attacks, DDoS mitigation, and adhere to strict OWASP security standards.",
  },
  {
    id: 6,
    question: "Will My Website Be Scalable for Future Growth?",
    answer:
      "Yes, our architectures use modular microservices and cloud-native serverless components that scale automatically to support millions of concurrent users effortlessly.",
  },
];

export default function WebDevFaq() {
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
            Frequently Asked Questions About Web Development
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium">
            Explore how usability impacts overall brand success.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {webDevFaqsData.map((faq) => {
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
