"use client";

import React, { useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const iosFaqsData: FaqItem[] = [
  {
    id: 1,
    question: "Can you create custom iOS apps?",
    answer:
      "Yes, we build 100% bespoke, natively optimized iOS applications tailored to your specific business goals, brand aesthetics, and target audience needs using modern Swift and SwiftUI.",
  },
  {
    id: 2,
    question: "Do you handle UI/UX design for iOS apps?",
    answer:
      "Yes, our design team strictly follows Apple's Human Interface Guidelines (HIG) to create fluid animations, intuitive navigation, dark mode support, and exceptional user experiences.",
  },
  {
    id: 3,
    question: "What platforms do you develop for?",
    answer:
      "We build applications across the entire Apple ecosystem: iPhone (iOS), iPad (iPadOS), Apple Watch (watchOS), Apple TV (tvOS), and macOS, ensuring seamless continuity.",
  },
  {
    id: 4,
    question: "Do you integrate third-party services and APIs?",
    answer:
      "Yes, we integrate Apple Pay, iCloud sync, Face ID/Touch ID biometrics, CoreML, ARKit, custom backend REST & GraphQL APIs, and major third-party payment and analytics SDKs.",
  },
  {
    id: 5,
    question: "How do you ensure app performance?",
    answer:
      "We leverage Xcode Instruments to optimize memory allocation, CPU load, and battery consumption, ensuring your app runs smoothly at 60/120 FPS with minimal latency.",
  },
];

export default function IosFaq() {
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
            Frequently Asked Questions About iOS Development
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium">
            Explore how usability impacts overall brand success.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {iosFaqsData.map((faq) => {
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
