import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import RealEstateHero from "@/components/RealEstateHero";
import UiUxStats from "@/components/UiUxStats";
import RealEstateNecessary from "@/components/RealEstateNecessary";
import DatabaseAwards from "@/components/DatabaseAwards";
import RealEstateTapSuccess from "@/components/RealEstateTapSuccess";
import RealEstateProcess from "@/components/RealEstateProcess";
import PortfolioCtaBanner from "@/components/PortfolioCtaBanner";
import TrickleFooter from "@/components/TrickleFooter";

export const metadata: Metadata = {
  title: "Real Estate App Development Company | Trickle Solutions",
  description:
    "Top-notch real estate app development services. Our team develops custom real estate apps that streamline operations, improve client engagement, and drive business growth.",
};

export default function RealEstateAppPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col font-sans antialiased selection:bg-[#1D70B8] selection:text-white">
      {/* Top Navbar */}
      <Navbar defaultActive="Solutions" />

      {/* 1. Real Estate App Development Company Hero Section */}
      <RealEstateHero />

      {/* 2. Stats Counter Strip (15+, 380+, 820+, 55+) */}
      <UiUxStats />

      {/* 3. Real Estate App Development Necessary for Every Real Estate Company */}
      <RealEstateNecessary />

      {/* 4. Awards Section */}
      <DatabaseAwards />

      {/* 5. Tap Into Success with Your Own Real Estate App */}
      <RealEstateTapSuccess />

      {/* 6. How Our Real Estate App Development Company Works */}
      <RealEstateProcess />

      {/* 7. Ready to take the first step / Your ideas deserve the right attention. */}
      <PortfolioCtaBanner />

      {/* 8. Footer */}
      <TrickleFooter />
    </main>
  );
}
