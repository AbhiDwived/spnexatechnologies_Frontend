import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PortfolioHero from "@/components/PortfolioHero";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import PortfolioTestimonial from "@/components/PortfolioTestimonial";
import PortfolioCtaBanner from "@/components/PortfolioCtaBanner";
import PortfolioLatestBlogs from "@/components/PortfolioLatestBlogs";
import TrickleFooter from "@/components/TrickleFooter";

export const metadata: Metadata = {
  title: "Portfolio | Trickle Solutions",
  description:
    "From dream to reality, we take pride in our involvement with these apps. Explore our featured mobile and web applications passionately crafted with love.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col font-sans antialiased selection:bg-blue-500 selection:text-white">
      {/* Sticky Navigation Bar with active tab set to Portfolio */}
      <Navbar defaultActive="Portfolio" />

      {/* Hero Section: Dream to Reality Title, Badges, and Photo Collage */}
      <PortfolioHero />

      {/* 7 Interactive App Case Studies (Alternating Colorful Backgrounds & Phone Mockups) */}
      <PortfolioShowcase />

      {/* What Our Client Say About Us: Testimonial */}
      <PortfolioTestimonial />

      {/* Blue CTA Banner: Ready to take the first step */}
      <PortfolioCtaBanner />

      {/* Latest Blogs Section */}
      <PortfolioLatestBlogs />

      {/* Trickle Solutions Footer */}
      <TrickleFooter />
    </main>
  );
}
