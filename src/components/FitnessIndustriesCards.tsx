"use client";

import React from "react";

export default function FitnessIndustriesCards() {
  const categories = [
    {
      title: "Yoga & Meditation App",
      desc: "Guided mindfulness audio tracks, multi-level yoga sequences, calming timer intervals, and daily streak tracking.",
      icon: "bi-flower1",
    },
    {
      title: "Fitness & Workout App",
      desc: "Interactive video exercise libraries, gym & home training schedules, rep counters, and progress strength graphs.",
      icon: "bi-lightning-charge-fill",
    },
    {
      title: "Diet & Nutrition App",
      desc: "Automated calorie goals, macro nutrient breakdowns, barcode meal scanners, and clean personalized recipe planners.",
      icon: "bi-apple",
    },
    {
      title: "Activity Tracking App",
      desc: "Real-time wearable synchronization tracking daily steps, sleep cycles, heart-rate zones, and marathon challenges.",
      icon: "bi-smartwatch",
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 bg-white text-slate-900">
      <div className="container max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight mb-2">
            Customized Fitness App <br className="hidden sm:inline" />
            Development for Every Business
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm font-medium mb-0">
            Build engaging workout and wellness solutions designed to boost user motivation and long-term retention.
          </p>
        </div>

        {/* 4 Soft Pale-Blue Vertical Cards matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {categories.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#EBF4FB] border border-blue-100 rounded-2xl p-6 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-start"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#1D70B8] text-white flex items-center justify-center text-sm shadow-xs shrink-0">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-[#0B2545] mb-0">
                  {item.title}
                </h3>
              </div>

              <p className="text-slate-600 text-xs leading-relaxed mb-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
