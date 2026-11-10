import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FitnessHero from "@/components/FitnessHero";
import FitnessIndustriesCards from "@/components/FitnessIndustriesCards";
import DatabaseAwards from "@/components/DatabaseAwards";
import SalonStats from "@/components/SalonStats";
import FitnessSuccessGrid from "@/components/FitnessSuccessGrid";
import FitnessBanner from "@/components/FitnessBanner";
import FitnessProcessDiagram from "@/components/FitnessProcessDiagram";
import FitnessPartnerSection from "@/components/FitnessPartnerSection";
import FitnessHowItWorks from "@/components/FitnessHowItWorks";
import FitnessLatestBlogs from "@/components/FitnessLatestBlogs";
import TrickleFooter from "@/components/TrickleFooter";

export const metadata: Metadata = {
  title: "Fitness App Development Company | Trickle Solutions",
  description:
    "Leading fitness app development company crafting custom workout, nutrition, meditation, activity tracking, and wearable-integrated wellness mobile applications.",
};

export default function FitnessAppPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col font-sans antialiased selection:bg-orange-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar defaultActive="Solutions" />

      {/* 1. Fitness App Development Company Hero Section */}
      <FitnessHero />

      {/* 2. Customized Fitness App Development for Every Business (4 Pale Blue Cards) */}
      <FitnessIndustriesCards />

      {/* 3. Awards Section */}
      <DatabaseAwards />

      {/* 4. Stats Counter Strip (Warm Orange -> Teal Gradient matching reference) */}
      <SalonStats />

      {/* 5. Delivering Success with Top-Tier Fitness App Development Services (3x2 Grid) */}
      <FitnessSuccessGrid />

      {/* 6. Level-Up Your Fitness Brand with Us! (Athlete Stretch Banner) */}
      <FitnessBanner />

      {/* 7. Process of Creating Fitness Application (Staggered Connected Workflow) */}
      <FitnessProcessDiagram />

      {/* 8. Why is Trickle Your Trusted Partner for Fitness Mobile App Development? */}
      <FitnessPartnerSection />

      {/* 9. How Our Fitness App Development Company Works */}
      <FitnessHowItWorks />

      {/* 10. Our Latest Blog & News */}
      <FitnessLatestBlogs />

      {/* 11. Footer */}
      <TrickleFooter />
    </main>
  );
}
