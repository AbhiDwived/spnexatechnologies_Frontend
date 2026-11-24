import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogHero, BlogArchiveGrid, BlogLeadForm } from "@/components/sections/blog";
import { SolutionCtaBanner } from "@/components/sections/solution";

export const metadata: Metadata = {
  title: "Blogs - SP Nexa Technologies",
  description:
    "SP Nexa Technologies IT Comprehensive Information Hub — insightful articles, tutorials, and resources on software development, programming languages, web development, and more.",
};

export default function BlogsPage() {
  return (
    <>
      <Header showHero={false} />
      <BlogHero />
      <BlogArchiveGrid />
      <BlogLeadForm />
      <SolutionCtaBanner
        variant="light"
        heading={"Ready to take the first step\nYour ideas deserve the right attention."}
        ctaLabel="Start Your Project"
        illustrationLabel="BLOGS"
        ctaHref="/contact"
      />
      <Footer />
    </>
  );
}
