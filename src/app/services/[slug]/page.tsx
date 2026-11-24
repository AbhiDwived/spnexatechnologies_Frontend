import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  ServiceHero,
  ServiceBenefits,
  ServiceStatsBar,
  ServiceFaq,
  ServiceContact,
  ServiceAwards,
  ServiceProcess,
} from "@/components/sections/service";
import { serviceDetails, getServiceDetail } from "@/data/serviceDetails";

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const detail = getServiceDetail(slug);
  if (!detail) return {};
  return {
    title: `${detail.navLabel} - Trickle Solutions`,
    description: detail.metaDescription,
  };
}

export default async function ServiceDetailPage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const detail = getServiceDetail(slug);
  if (!detail) notFound();

  return (
    <>
      <Header showHero={false} />
      <ServiceHero detail={detail} />
      <ServiceBenefits detail={detail} />
      <ServiceStatsBar detail={detail} />
      {detail.showAwards && <ServiceAwards />}
      <ServiceFaq detail={detail} />
      <ServiceProcess detail={detail} />
      <ServiceContact />
      <Footer />
    </>
  );
}
