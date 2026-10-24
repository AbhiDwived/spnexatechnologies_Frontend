"use client";

import React, { useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const appDevFaqsData: FaqItem[] = [
  {
    id: 1,
    question: "What is App Development?",
    answer:
      "App development is the process of creating software applications that run on mobile devices (iOS, Android) or web browsers. It includes front-end UI design, robust back-end APIs, cloud infrastructure, and continuous testing to ensure peak performance.",
  },
  {
    id: 2,
    question: "Why Does My Business Need Mobile App Development?",
    answer:
      "A dedicated mobile app drives direct customer engagement, improves brand loyalty, enables push notifications, supports offline capabilities, and unlocks higher conversion rates compared to standard mobile websites.",
  },
  {
    id: 3,
    question: "Which Technologies Do You Use?",
    answer:
      "We build native and cross-platform applications using Flutter, React Native, Swift (iOS), Kotlin (Android), Node.js, Python, and cloud services on AWS, Firebase, and Google Cloud.",
  },
  {
    id: 4,
    question: "Can You Make My App Work on Both iOS & Android?",
    answer:
      "Yes! We specialize in cross-platform development using Flutter and React Native, allowing you to deploy a unified, native-performing app to both Apple App Store and Google Play Store simultaneously from a single codebase.",
  },
  {
    id: 5,
    question: "How Do You Keep My App Secure?",
    answer:
      "We incorporate enterprise-grade security protocols: end-to-end encryption, secure token authentication (OAuth/JWT), biometric authorization, data masking, and adherence to OWASP and industry security standards.",
  },
  {
    id: 6,
    question: "Will My App Be Scalable for Future Growth?",
    answer:
      "Absolutely. Our app architectures rely on modular microservices, serverless backends, and auto-scaling cloud databases engineered to seamlessly accommodate millions of active users and heavy transactional loads.",
  },
];

export default function AppDevFaq() {
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
            Frequently Asked Questions About App Development
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium">
            Explore how usability impacts overall brand success.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {appDevFaqsData.map((faq) => {
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
