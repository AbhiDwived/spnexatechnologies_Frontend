import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import GroceryHero from "@/components/GroceryHero";
import UiUxStats from "@/components/UiUxStats";
import GroceryNecessary from "@/components/GroceryNecessary";
import DatabaseAwards from "@/components/DatabaseAwards";
import GroceryPartnerStats from "@/components/GroceryPartnerStats";
import GroceryTapSuccess from "@/components/GroceryTapSuccess";
import GroceryProcess from "@/components/GroceryProcess";
import PortfolioCtaBanner from "@/components/PortfolioCtaBanner";
import TrickleFooter from "@/components/TrickleFooter";

export const metadata: Metadata = {
  title: "Grocery Delivery App Development Company | Trickle Solutions",
  description:
    "Prominent grocery app development company offering custom grocery delivery mobile applications that provide hassle-free grocery shopping experiences.",
};

export default function GroceryDeliveryAppPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col font-sans antialiased selection:bg-emerald-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar defaultActive="Solutions" />

      {/* 1. Grocery Delivery App Development Company Hero Section */}
      <GroceryHero />

      {/* 2. Stats Counter Strip (15+, 380+, 820+, 55+) */}
      <UiUxStats />

      {/* 3. Grocery Delivery App Development Necessary for Grocery App Company */}
      <GroceryNecessary />

      {/* 4. Awards Section */}
      <DatabaseAwards />

      {/* 5. Why is Trickle Solutions Your Trusted Partner in Grocery Delivery App Development? */}
      <GroceryPartnerStats />

      {/* 6. Tap Into Success with Your Own Grocery App */}
      <GroceryTapSuccess />

      {/* 7. How Our Grocery App Development Company Works */}
      <GroceryProcess />

      {/* 8. Ready to take the first step / Your ideas deserve the right attention. */}
      <PortfolioCtaBanner />

      {/* 9. Footer */}
      <TrickleFooter />
    </main>
  );
}
