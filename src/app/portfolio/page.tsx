import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PortfolioHero, PortfolioGrid } from "@/components/sections/portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Blogs } from "@/components/sections/Blogs";
import { SolutionCtaBanner } from "@/components/sections/solution";

export const metadata: Metadata = {
  title: "Portfolio - Trickle Solutions",
  description:
    "A look at the apps Trickle Solutions has designed, built, and shipped for its clients — from shopping and delivery to fitness and coworking.",
};

export default function PortfolioPage() {
  return (
    <>
      <Header showHero={false} />
      <PortfolioHero />
      <PortfolioGrid />
      <Testimonials />
      <SolutionCtaBanner
        variant="light"
        heading={"Ready to take the first step\nYour ideas deserve the right attention."}
        ctaLabel="Start Your Project"
        illustrationLabel="PORTFOLIO"
        ctaHref="/contact"
      />
      <Blogs />
      <Footer />
    </>
  );
}
