import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FoodHero from "@/components/FoodHero";
import UiUxStats from "@/components/UiUxStats";
import FoodNecessary from "@/components/FoodNecessary";
import DatabaseAwards from "@/components/DatabaseAwards";
import FoodPartnerSection from "@/components/FoodPartnerSection";
import FoodTapSuccess from "@/components/FoodTapSuccess";
import FoodProcess from "@/components/FoodProcess";
import PortfolioCtaBanner from "@/components/PortfolioCtaBanner";
import TrickleFooter from "@/components/TrickleFooter";

export const metadata: Metadata = {
  title: "Food Delivery App Development Company | Trickle Solutions",
  description:
    "Experienced food delivery app development company crafting tailored restaurant and on-demand food ordering mobile apps with live tracking and contactless operations.",
};

export default function FoodDeliveryAppPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col font-sans antialiased selection:bg-orange-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar defaultActive="Solutions" />

      {/* 1. Food Delivery App Development Company Hero Section */}
      <FoodHero />

      {/* 2. Stats Counter Strip (15+, 380+, 820+, 55+) */}
      <UiUxStats />

      {/* 3. Food Delivery App Development Necessary for Food App Company */}
      <FoodNecessary />

      {/* 4. Awards Section */}
      <DatabaseAwards />

      {/* 5. Why is Trickle Solutions Your Trusted Partner in Food Delivery App Development? */}
      <FoodPartnerSection />

      {/* 6. Tap Into Success with Your Own Food Delivery App */}
      <FoodTapSuccess />

      {/* 7. How Our Food Delivery App Development Company Works */}
      <FoodProcess />

      {/* 8. Ready to take the first step / Your ideas deserve the right attention. */}
      <PortfolioCtaBanner />

      {/* 9. Footer */}
      <TrickleFooter />
    </main>
  );
}
