import { ServiceDetailPage } from "@/components/pages/services/ServiceDetailPage";
import { getServiceDetail } from "@/components/pages/services/service-details";

/** @deprecated Use /services/implantaciya/implant-straumann-pid-klyuch */
export function ImplantationPage() {
  const service = getServiceDetail("implantaciya", "implant-straumann-pid-klyuch");
  if (!service) return null;
  return <ServiceDetailPage service={service} />;
}
