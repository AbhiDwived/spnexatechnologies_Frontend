import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import AboutWhoWeAre from "@/components/AboutWhoWeAre";
import AboutStats from "@/components/AboutStats";
import AwardsSection from "@/components/AwardsSection";
import TrickleFooter from "@/components/TrickleFooter";

export const metadata: Metadata = {
  title: "About Us | Trickle Solutions",
  description:
    "Trickle Solutions is the first natively iterative agency built for your true digital exploration. Learn more about our mission, vision, team, achievements, and awards.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A3D78] text-slate-100 flex flex-col font-sans antialiased selection:bg-blue-500 selection:text-white">
      {/* Sticky Navigation Bar with active tab set to About */}
      <Navbar defaultActive="About" />

      {/* Hero Section: Office Collaboration Banner & Overlapping Title */}
      <AboutHero />

      {/* Who We Are: Developer Portrait, Philosophy, Mission & Vision, and CTA */}
      <AboutWhoWeAre />

      {/* Stats Section: 4 Dashed Stat Cards + 15+ Years Experience Orb */}
      <AboutStats />

      {/* Awards Section: GoodFirms, Top 1000 Companies, Clutch */}
      <AwardsSection />

      {/* TS Trickle Solutions Footer */}
      <TrickleFooter />
    </main>
  );
}
