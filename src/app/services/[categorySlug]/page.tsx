import { notFound } from "next/navigation";
import { ServiceSectionPage } from "@/components/pages/services/ServiceSectionPage";
import { getCategoryBySlug } from "@/components/pages/services/data";

type Props = {
  params: Promise<{ categorySlug: string }>;
};

export function generateStaticParams() {
  return [
    { categorySlug: "estetychna-stomatologiya" },
    { categorySlug: "implantaciya" },
    { categorySlug: "ortodontiya" },
    { categorySlug: "terapiya-ta-profilaktyka" },
    { categorySlug: "hirurgiya" },
    { categorySlug: "dytiacha-stomatologiya" },
  ];
}

export default async function ServiceSectionRoute({ params }: Props) {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  return <ServiceSectionPage category={category} />;
}
