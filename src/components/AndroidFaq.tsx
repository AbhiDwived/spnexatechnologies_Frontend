"use client";

import React, { useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const androidFaqsData: FaqItem[] = [
  {
    id: 1,
    question: "What platforms do you develop for?",
    answer:
      "We build native Android applications for smartphones, tablets, Android Wear, Android Auto, and Smart TVs using modern Kotlin and Java frameworks adhering to Google's latest architecture guidelines.",
  },
  {
    id: 2,
    question: "Can we customize features and tool support?",
    answer:
      "Yes, our Android development services are 100% bespoke. From custom camera modules and biometric authentication to Bluetooth IoT connectivity, we tailor every feature to your exact business requirements.",
  },
  {
    id: 3,
    question: "Do you handle UI/UX design for Android apps?",
    answer:
      "Absolutely. Our design team adheres strictly to Google Material Design 3 guidelines to craft fluid, accessible, and high-converting Android interfaces that feel native to Android users.",
  },
  {
    id: 4,
    question: "Can existing apps be migrated to Android?",
    answer:
      "Yes! We can seamlessly migrate iOS or legacy web applications to native Android or cross-platform architectures like Flutter and React Native without downtime or data loss.",
  },
  {
    id: 5,
    question: "Do you integrate third-party APIs and SDKs?",
    answer:
      "Yes, we integrate third-party payment gateways (Google Pay, Stripe, Razorpay), CRM tools, Google Maps, Firebase, social logins, and custom cloud APIs with bank-grade encryption.",
  },
];

export default function AndroidFaq() {
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
            Frequently Asked Questions About Android Development
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium">
            Explore how usability impacts overall brand success.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {androidFaqsData.map((faq) => {
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
