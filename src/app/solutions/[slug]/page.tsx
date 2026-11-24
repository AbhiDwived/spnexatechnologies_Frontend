import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  SolutionHero,
  SolutionIntro,
  SolutionWhyUs,
  SolutionCtaBanner,
  SolutionHowItWorks,
} from "@/components/sections/solution";
import { ServiceStatsBar, ServiceAwards, ServiceContact, ServiceProcess } from "@/components/sections/service";
import { solutionDetails, getSolutionDetail } from "@/data/solutionDetails";

export function generateStaticParams() {
  return solutionDetails.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/solutions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const detail = getSolutionDetail(slug);
  if (!detail) return {};
  return {
    title: `${detail.navLabel} - SP Nexa Technologies`,
    description: detail.metaDescription,
  };
}

export default async function SolutionDetailPage({ params }: PageProps<"/solutions/[slug]">) {
  const { slug } = await params;
  const detail = getSolutionDetail(slug);
  if (!detail) notFound();

  const illustrationLabel = detail.navLabel.replace(" App", "").slice(0, 8).toUpperCase();

  return (
    <>
      <Header showHero={false} />
      <SolutionHero detail={detail} />
      <ServiceStatsBar detail={detail} />
      <SolutionIntro detail={detail} />
      <ServiceAwards />
      <SolutionWhyUs detail={detail} />
      <SolutionCtaBanner
        variant="dark"
        heading={detail.ctaBannerHeading}
        paragraph={detail.ctaBannerParagraph}
        ctaLabel={detail.ctaBannerLabel}
        illustrationLabel={illustrationLabel}
      />
      <ServiceProcess detail={detail} />
      <SolutionHowItWorks navLabel={detail.navLabel} />
      <SolutionCtaBanner
        variant="light"
        heading={detail.finalCtaHeading}
        ctaLabel={detail.finalCtaLabel}
        illustrationLabel={illustrationLabel}
      />
      <ServiceContact />
      <Footer />
    </>
  );
}
