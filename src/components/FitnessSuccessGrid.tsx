"use client";

import React from "react";
import Link from "next/link";

export default function FitnessSuccessGrid() {
  const services = [
    {
      title: "Personal Trainer & Gym Coaching Apps",
      desc: "1-on-1 training video sessions, custom routine builders, client progress metrics, and subscription billing.",
      date: "Coaching",
    },
    {
      title: "HIIT & Strength Workout Apps",
      desc: "High-definition guided training flows with interval timers, rest cues, and personalized weight recommendations.",
      date: "Workouts",
    },
    {
      title: "AI Form & Posture Tracking Platforms",
      desc: "Computer vision exercise form feedback, real-time rep counting, and smart voice coaching prompts.",
      date: "AI Wellness",
    },
    {
      title: "Corporate Wellness & Challenges Apps",
      desc: "Organization step leaderboards, habit rewards, wearable integration, and employee engagement dashboards.",
      date: "Enterprise",
    },
    {
      title: "Macro Counter & Meal Planning Apps",
      desc: "Intuitive nutrition logs, keto/vegan diet filters, automated shopping lists, and hydration reminders.",
      date: "Nutrition",
    },
    {
      title: "Wearable Watch Sync & Telemetry Apps",
      desc: "Seamless syncing with Apple Watch, Garmin, and Fitbit to track heart rate, pace, and recovery scores.",
      date: "Wearables",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 bg-white text-slate-900">
      <div className="container max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
            Delivering Success with Top-Tier On-Demand App <br className="hidden sm:inline" />
            Development Services
          </h2>
        </div>

        {/* 3x2 Showcase Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="h-44 overflow-hidden bg-slate-950">
                  <img
                    src="/images/blog-app-dev-card.png"
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-left space-y-2">
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug group-hover:text-[#1D70B8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-0">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-slate-400 font-semibold">{item.date}</span>
                <Link
                  href="/contact"
                  className="font-bold text-[#1D70B8] hover:text-[#0B2545] transition-colors text-decoration-none"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
