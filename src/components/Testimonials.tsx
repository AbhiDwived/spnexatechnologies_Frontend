"use client";

import React, { useState } from "react";

const reviews = [
  {
    quote:
      "ShivamSoft transformed our legacy banking software into a high-performance, cloud-native microservice architecture. Their engineering precision, speed, and 24/7 dedication exceeded our highest expectations.",
    name: "Alexander Wright",
    role: "CTO, FinTech Global Inc.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    quote:
      "The UI/UX design and mobile app created by ShivamSoft helped us scale from 10k to over 500k active monthly users. The Next.js web application is blazingly fast!",
    name: "Sophia Martinez",
    role: "VP Product, E-Commerce Cloud",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    quote:
      "Their agile process and bi-weekly sprint demos kept us completely aligned throughout the 6-month development cycle. Highly recommended software partner!",
    name: "David Chen",
    role: "Founder & CEO, HealthTech AI",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const current = reviews[currentIndex];

  return (
    <section className="py-20 px-4 bg-white border-b border-slate-100 relative">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            What Our Client Say About Us
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 lg:p-12 shadow-xl relative">
          {/* Big Quote Mark */}
          <div className="text-blue-600/15 text-7xl font-serif font-black absolute top-6 left-8 pointer-events-none">
            “
          </div>

          <div className="relative z-10 space-y-6 text-center max-w-3xl mx-auto">
            {/* Rating Stars */}
            <div className="flex justify-center gap-1 text-amber-400 text-lg">
              {[...Array(current.rating)].map((_, i) => (
                <i key={i} className="bi bi-star-fill"></i>
              ))}
            </div>

            {/* Review Quote Text */}
            <p className="text-slate-700 text-lg md:text-xl font-medium leading-relaxed italic">
              &quot;{current.quote}&quot;
            </p>

            {/* Author Profile */}
            <div className="flex flex-col items-center justify-center pt-4">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-600 shadow-md mb-3"
              />
              <div className="font-extrabold text-slate-900 text-base">{current.name}</div>
              <div className="text-blue-600 text-xs font-semibold">{current.role}</div>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex justify-center items-center gap-3 pt-6">
              <button
                onClick={prevReview}
                className="w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors flex items-center justify-center shadow-sm"
                aria-label="Previous review"
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              <div className="flex gap-1.5">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      currentIndex === i ? "bg-blue-600 w-6" : "bg-slate-300"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextReview}
                className="w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors flex items-center justify-center shadow-sm"
                aria-label="Next review"
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
