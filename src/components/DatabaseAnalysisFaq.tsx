"use client";

import React, { useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const databaseAnalysisFaqsData: FaqItem[] = [
  {
    id: 1,
    question: "What is Database Analysis?",
    answer:
      "Database Analysis is the process of examining, optimizing, and managing your databases to ensure data accuracy, performance, and security, helping your business make informed decisions.",
  },
  {
    id: 2,
    question: "Why does my business need Database Analysis?",
    answer:
      "It prevents system bottlenecks, eliminates redundant data, accelerates query speeds, enforces compliance, and guarantees that your mission-critical applications remain fast and reliable.",
  },
  {
    id: 3,
    question: "What types of databases can you analyze?",
    answer:
      "We support both relational and NoSQL databases, including PostgreSQL, MySQL, Microsoft SQL Server, Oracle, MongoDB, DynamoDB, Redis, and cloud data warehouses like Snowflake and BigQuery.",
  },
  {
    id: 4,
    question: "How often should databases be analyzed?",
    answer:
      "We recommend regular quarterly comprehensive audits along with continuous real-time telemetry monitoring to prevent schema degradation and catch slow queries before they impact users.",
  },
  {
    id: 5,
    question: "Do you provide maintenance after analysis?",
    answer:
      "Yes, our database administrators provide ongoing indexing, automated backup management, security patch deployment, query performance tuning, and 24/7 disaster recovery support.",
  },
];

export default function DatabaseAnalysisFaq() {
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
            Frequently Asked Questions About Database Analysis
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium">
            Explore how usability impacts overall brand success.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {databaseAnalysisFaqsData.map((faq) => {
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
