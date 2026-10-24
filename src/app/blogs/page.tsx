import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogHero from "@/components/BlogHero";
import BlogList from "@/components/BlogList";
import BlogConsultation from "@/components/BlogConsultation";
import PortfolioCtaBanner from "@/components/PortfolioCtaBanner";
import TrickleFooter from "@/components/TrickleFooter";

export const metadata: Metadata = {
  title: "Blogs & Insights | Trickle Solutions",
  description:
    "Welcome to the Trickle Solutions IT Comprehensive Information Hub, your go-to destination for the latest in technology and innovation.",
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col font-sans antialiased selection:bg-blue-500 selection:text-white">
      {/* Sticky Navigation Bar with active tab set to Blogs */}
      <Navbar defaultActive="Blogs" />

      {/* Blogs Hero Section: Hands Typing Banner & Information Hub */}
      <BlogHero />

      {/* Blog Articles Grid with Load More button */}
      <BlogList />

      {/* Let's Build It Right: 30-min Consultation Request Form */}
      <BlogConsultation />

      {/* Ready to take the first step: Pointing Man Banner */}
      <PortfolioCtaBanner />

      {/* Trickle Solutions Footer */}
      <TrickleFooter />
    </main>
  );
}
