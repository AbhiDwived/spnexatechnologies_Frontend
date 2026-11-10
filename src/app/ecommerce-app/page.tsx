import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import EcommerceHero from "@/components/EcommerceHero";
import UiUxStats from "@/components/UiUxStats";
import EcommerceTopRated from "@/components/EcommerceTopRated";
import DatabaseAwards from "@/components/DatabaseAwards";
import EcommerceTapSuccess from "@/components/EcommerceTapSuccess";
import EcommerceProcess from "@/components/EcommerceProcess";
import PortfolioCtaBanner from "@/components/PortfolioCtaBanner";
import TrickleFooter from "@/components/TrickleFooter";

export const metadata: Metadata = {
  title: "E-commerce App Development Company | Trickle Solutions",
  description:
    "Experienced Ecommerce mobile app development company providing bespoke and end-to-end solutions to build a strong online presence and convert browsers into buyers.",
};

export default function EcommerceAppPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col font-sans antialiased selection:bg-[#1D70B8] selection:text-white">
      {/* Top Navbar */}
      <Navbar defaultActive="Solutions" />

      {/* 1. Hero Section */}
      <EcommerceHero />

      {/* 2. Stats Counter Strip (15+, 380+, 820+, 55+) */}
      <UiUxStats />

      {/* 3. Our Top-Rated Ecommerce Development Solutions */}
      <EcommerceTopRated />

      {/* 4. Awards Section */}
      <DatabaseAwards />

      {/* 5. Tap Into Success with Your Own E-Commerce App */}
      <EcommerceTapSuccess />

      {/* 6. How Our Ecommerce App Development Company Works */}
      <EcommerceProcess />

      {/* 7. Ready to take the first step / Your ideas deserve the right attention. */}
      <PortfolioCtaBanner />

      {/* 8. Footer */}
      <TrickleFooter />
    </main>
  );
}
