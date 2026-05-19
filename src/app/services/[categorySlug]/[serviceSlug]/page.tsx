import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/pages/services/ServiceDetailPage";
import { getServiceDetail, getAllServiceDetailParams } from "@/components/pages/services/service-details";

type Props = {
  params: Promise<{ categorySlug: string; serviceSlug: string }>;
};

export function generateStaticParams() {
  return getAllServiceDetailParams();
}

export default async function ServiceDetailRoute({ params }: Props) {
  const { categorySlug, serviceSlug } = await params;
  const service = getServiceDetail(categorySlug, serviceSlug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
