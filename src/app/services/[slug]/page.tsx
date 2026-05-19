import { notFound } from "next/navigation";
import { ServiceSectionPage } from "@/components/pages/services/ServiceSectionPage";
import { getCategoryBySlug } from "@/components/pages/services/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [
    { slug: "estetychna-stomatologiya" },
    { slug: "implantaciya" },
    { slug: "ortodontiya" },
    { slug: "terapiya-ta-profilaktyka" },
    { slug: "hirurgiya" },
    { slug: "dytiacha-stomatologiya" },
  ];
}

export default async function ServiceSectionRoute({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return <ServiceSectionPage category={category} />;
}
