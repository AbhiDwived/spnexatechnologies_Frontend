"use client";

import React from "react";

export default function UiUxStats() {
  const stats = [
    {
      value: "15+",
      label: "YEARS OF EXPERIENCE",
    },
    {
      value: "380+",
      label: "CUSTOMIZED SOFTWARE",
    },
    {
      value: "820+",
      label: "AI INTEGRATION IN EXISTING SOFTWARE",
    },
    {
      value: "55+",
      label: "SOFTWARE UPGRADATION",
    },
  ];

  return (
    <section className="bg-[#2B59FF] bg-gradient-to-r from-[#2952E8] via-[#2F5AFF] to-[#3662FF] text-white py-8 sm:py-10 px-4 border-y border-white/10">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/25">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center text-center px-4 py-4 md:py-1 ${
                idx === 0 || idx === 1 ? "pb-4 md:pb-1" : "pt-4 md:pt-1"
              }`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-none mb-1.5 sm:mb-2">
                {item.value}
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-white/95 uppercase tracking-wider max-w-[190px] leading-snug">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
