import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import StatsCounter from "@/components/StatsCounter";
import ProcessFlow from "@/components/ProcessFlow";
import WhyChooseUs from "@/components/WhyChooseUs";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import Testimonials from "@/components/Testimonials";
import LatestBlogs from "@/components/LatestBlogs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Reusable Navbar Component */}
      <Navbar />

      {/* Hero Section Component */}
      <Hero />

      {/* Services Section Component (Dark Navy with Pill Filters & Mockup) */}
      <Services />

      {/* Stats Counter & 15+ Years Badge Component */}
      <StatsCounter />

      {/* 6-Step Process Flow Component */}
      <ProcessFlow />

      {/* Why Choose Us Component */}
      <WhyChooseUs />

      {/* Industries We Serve & Vertical Stepper Component */}
      <IndustriesWeServe />

      {/* Client Testimonials Component */}
      <Testimonials />

      {/* Latest Blogs Grid Component */}
      <LatestBlogs />

      {/* Reusable Multi-Column Footer Component */}
      <Footer />
    </main>
  );
}
