import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SalonHero from "@/components/SalonHero";
import SalonStats from "@/components/SalonStats";
import SalonBenefitsForm from "@/components/SalonBenefitsForm";
import DatabaseAwards from "@/components/DatabaseAwards";
import SalonRoiGrid from "@/components/SalonRoiGrid";
import SalonPanelsShowcase from "@/components/SalonPanelsShowcase";
import ContactTransformBanner from "@/components/ContactTransformBanner";
import TrickleFooter from "@/components/TrickleFooter";

export const metadata: Metadata = {
  title: "Salon App Development Company | Trickle Solutions",
  description:
    "Custom salon app development company delivering user-friendly salon appointment booking apps, stylist scheduling panels, and customer loyalty solutions.",
};

export default function SalonAppPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col font-sans antialiased selection:bg-[#1D70B8] selection:text-white">
      {/* Top Navbar */}
      <Navbar defaultActive="Solutions" />

      {/* 1. Salon App Development Company Hero Section */}
      <SalonHero />

      {/* 2. Stats Counter Strip (Warm Orange -> Teal Gradient matching reference) */}
      <SalonStats />

      {/* 3. Why is Salon Scheduling App Development Beneficial for Your Business? + Lead Form */}
      <SalonBenefitsForm />

      {/* 4. Awards Section */}
      <DatabaseAwards />

      {/* 5. Maximize Your Salon Business ROI with Our On-Demand Salon App Development Services */}
      <SalonRoiGrid />

      {/* 6. Launch a Top-notch Salon Booking Ordering System (Admin, Customer, Vendor Panels) */}
      <SalonPanelsShowcase />

      {/* 7. Unlock Effortless and Exceptional Digital Transformation Banner */}
      <ContactTransformBanner />

      {/* 8. Footer */}
      <TrickleFooter />
    </main>
  );
}
