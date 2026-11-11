"use client";

import React, { useState } from "react";
import Image from "next/image";

const reviews = [
  {
    quote:
      "Hi there. Just wanted to give a quick shoutout to Pankaj and Deepak from Devherds. They've done amazing work for me over the past year and a half now, and they never disappoint. Honestly, they are diamonds in the rough. If you're ever looking to create a startup or produce some good work, they're definitely the people for you. So I would highly recommend them.",
    name: "Alexander McCaig",
    role: "Co-Founder & CEO,Tartle",
    avatar: "/images/testimonial-alexander.png",
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
    <section className="bg-white py-10 relative">
      <div className="w-full px-[100px]">
        {/* Heading — left-aligned, exact from Figma */}
        <h2 className="text-[50px] font-extrabold text-black mb-8 leading-normal">
          What Our Client Say About Us
        </h2>

        <div className="flex items-start gap-6">
          {/* Quote icon */}
          <div className="shrink-0 mt-2">
            <Image src="/images/testimonial-quote.png" alt="quote" width={61} height={46} />
          </div>

          {/* Quote text */}
          <p className="text-[20px] text-black font-normal leading-relaxed flex-1">
            {current.quote}
          </p>

          {/* Right side: reviewer + nav */}
          <div className="shrink-0 flex flex-col items-start gap-3 min-w-[140px]">
            {/* Reviewer */}
            <div className="flex flex-col items-start">
              <div className="w-[51px] h-[47px] overflow-hidden mb-2">
                <Image
                  src={current.avatar}
                  alt={current.name}
                  width={51}
                  height={47}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-[18px] text-black font-normal leading-normal">{current.name}</p>
              <p className="text-[12px] text-black/45 font-normal">{current.role}</p>
            </div>

            {/* Navigation arrows */}
            <div className="flex items-center gap-2 mt-2">
              <button
                onClick={prevReview}
                className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-slate-100 transition-colors bg-white"
                aria-label="Previous review"
              >
                <i className="bi bi-arrow-left text-base"></i>
              </button>
              <button
                onClick={nextReview}
                className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-slate-100 transition-colors bg-white"
                aria-label="Next review"
              >
                <i className="bi bi-arrow-right text-base"></i>
              </button>
            </div>

            {/* All Reviews */}
            <div className="text-right w-full mt-auto">
              <a href="#" className="text-[16px] text-black font-semibold hover:text-blue-600 text-decoration-none">
                All Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
