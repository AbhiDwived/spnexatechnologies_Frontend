import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PickupHero from "@/components/PickupHero";
import UiUxStats from "@/components/UiUxStats";
import PickupNecessary from "@/components/PickupNecessary";
import DatabaseAwards from "@/components/DatabaseAwards";
import PickupFingertips from "@/components/PickupFingertips";
import PickupTapSuccess from "@/components/PickupTapSuccess";
import PickupProcess from "@/components/PickupProcess";
import PortfolioCtaBanner from "@/components/PortfolioCtaBanner";
import TrickleFooter from "@/components/TrickleFooter";

export const metadata: Metadata = {
  title: "Pickup and Delivery App Development Company | Trickle Solutions",
  description:
    "Trusted pickup and delivery app development company crafting custom courier, parcel tracking, route optimization, and on-demand logistics mobile applications.",
};

export default function PickupAndDeliveryAppPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col font-sans antialiased selection:bg-emerald-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar defaultActive="Solutions" />

      {/* 1. Pickup and Delivery App Development Company Hero Section */}
      <PickupHero />

      {/* 2. Stats Counter Strip (15+, 380+, 820+, 55+) */}
      <UiUxStats />

      {/* 3. Pickup and Delivery App Development Necessary for Pickup and Delivery App Company */}
      <PickupNecessary />

      {/* 4. Awards Section */}
      <DatabaseAwards />

      {/* 5. Seamless Pickup and Delivery App at Your Fingertips */}
      <PickupFingertips />

      {/* 6. Tap Into Success with Your Own Pickup and Delivery App */}
      <PickupTapSuccess />

      {/* 7. How Our Pickup and Delivery App Development Company Works */}
      <PickupProcess />

      {/* 8. Ready to take the first step / Your ideas deserve the right attention. */}
      <PortfolioCtaBanner />

      {/* 9. Footer */}
      <TrickleFooter />
    </main>
  );
}
