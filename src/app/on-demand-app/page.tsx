import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import OnDemandHero from "@/components/OnDemandHero";
import OnDemandIndustriesCards from "@/components/OnDemandIndustriesCards";
import DatabaseAwards from "@/components/DatabaseAwards";
import SalonStats from "@/components/SalonStats";
import OnDemandSuccessGrid from "@/components/OnDemandSuccessGrid";
import OnDemandRobotBanner from "@/components/OnDemandRobotBanner";
import OnDemandProcessDiagram from "@/components/OnDemandProcessDiagram";
import OnDemandPartnerSection from "@/components/OnDemandPartnerSection";
import OnDemandHowItWorks from "@/components/OnDemandHowItWorks";
import OnDemandLatestBlogs from "@/components/OnDemandLatestBlogs";
import TrickleFooter from "@/components/TrickleFooter";

export const metadata: Metadata = {
  title: "On Demand App Development Company | Trickle Solutions",
  description:
    "Leading on-demand app development company crafting scalable multi-service mobile applications across beauty, food delivery, telemedicine, e-commerce, and logistics.",
};

export default function OnDemandAppPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col font-sans antialiased selection:bg-[#1D70B8] selection:text-white">
      {/* Top Navbar */}
      <Navbar defaultActive="Solutions" />

      {/* 1. On Demand App Development Company Hero Section */}
      <OnDemandHero />

      {/* 2. Custom On-Demand App Development for Every Business (4 Pale Blue Cards) */}
      <OnDemandIndustriesCards />

      {/* 3. Awards Section */}
      <DatabaseAwards />

      {/* 4. Stats Counter Strip (Warm Orange -> Teal Gradient matching screenshot) */}
      <SalonStats />

      {/* 5. Delivering Success with Top-Tier On-Demand App Development Services (3x2 Grid) */}
      <OnDemandSuccessGrid />

      {/* 6. Take A Lead On The Market with a Revolutionary On-Demand App (Robot Banner) */}
      <OnDemandRobotBanner />

      {/* 7. Process of Crafting On Demand Application (Staggered Connected Workflow) */}
      <OnDemandProcessDiagram />

      {/* 8. Why is Trickle Your Trusted Partner for On-Demand Mobile App Development? */}
      <OnDemandPartnerSection />

      {/* 9. How Our On-Demand App Development Company Works */}
      <OnDemandHowItWorks />

      {/* 10. Our Latest Blog & News */}
      <OnDemandLatestBlogs />

      {/* 11. Footer */}
      <TrickleFooter />
    </main>
  );
}
