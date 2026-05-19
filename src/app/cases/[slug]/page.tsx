import { CaseDetailPage } from "@/components/pages/cases/CaseDetailPage";
import { casesList } from "@/components/pages/cases/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return casesList.map((c) => ({ slug: c.slug }));
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  return <CaseDetailPage slug={slug} />;
}
