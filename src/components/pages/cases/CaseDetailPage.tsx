import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getCaseBySlug } from "./data";

type Props = {
  slug: string;
};

export function CaseDetailPage({ slug }: Props) {
  const caseData = getCaseBySlug(slug);
  if (!caseData) notFound();

  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Головна", href: "/" },
          { label: "Кейси", href: "/cases" },
          { label: caseData.title },
        ]}
      />

      {/* Hero */}
      <section className="bg-white py-10 md:py-14">
        <Container className="flex flex-col gap-8">
          <p className="text-xs font-semibold tracking-[2px] text-neolith-gray-600 uppercase">
            {caseData.categoryLabel}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-neolith-black md:text-[48px] md:leading-[58px]">
            {caseData.title}
            <span className="mt-2 block text-2xl font-normal text-neolith-gray-600 md:text-[32px] md:leading-[40px]">
              {caseData.patient}
            </span>
          </h1>
          <div className="flex flex-wrap gap-10 border-t border-neolith-gray-200 pt-6">
            <div>
              <p className="text-[11px] font-semibold tracking-wide text-neolith-gray-600 uppercase">
                Лікар
              </p>
              <p className="mt-1 font-medium text-neolith-black">
                {caseData.doctor.replace("д-р ", "Д-р ")}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-wide text-neolith-gray-600 uppercase">
                Спеціалізація
              </p>
              <p className="mt-1 font-medium text-neolith-black">
                {caseData.specialty}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-wide text-neolith-gray-600 uppercase">
                Тривалість
              </p>
              <p className="mt-1 font-medium text-neolith-black">
                {caseData.duration}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-wide text-neolith-gray-600 uppercase">
                Кількість візитів
              </p>
              <p className="mt-1 font-medium text-neolith-black">
                {caseData.visits}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Before / After */}
      <section className="bg-white pb-16">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <ImagePlaceholder
              label="ДО — фронтальне фото"
              aspect="video"
              className="min-h-[360px] md:min-h-[480px] w-full"
            />
            <ImagePlaceholder
              label="ПІСЛЯ — фронтальне фото"
              aspect="video"
              className="min-h-[360px] md:min-h-[480px] w-full"
            />
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="bg-neolith-gray-50 py-16 md:py-20">
        <Container className="flex flex-col md:flex-row items-start justify-between gap-10 lg:gap-20">
          <SectionHeader label="ІСТОРІЯ" title={caseData.storyTitle} />
          <p className="text-base leading-7 text-neolith-gray-600 lg:pt-9 max-w-xl">
            {caseData.story}
          </p>
        </Container>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16 md:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeader
            label="ХІД ЛІКУВАННЯ"
            title="Що відбувалось крок за кроком."
          />
          <div className="flex flex-col divide-y divide-neolith-gray-200 rounded border border-neolith-gray-200">
            {caseData.timeline.map((step) => (
              <div
                key={step.period}
                className="grid gap-4 px-6 py-5 sm:grid-cols-[140px_1fr] sm:items-center"
              >
                <span className="font-medium text-neolith-black">
                  {step.period}
                </span>
                <p className="text-neolith-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Cost */}
      <section className="border-t border-neolith-gray-200 bg-neolith-gray-50 py-16 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold tracking-[2px] text-neolith-gray-600 uppercase">
              ВАРТІСТЬ КЕЙСУ
            </p>
            <p className="text-5xl font-bold text-neolith-black md:text-[64px] md:leading-[72px]">
              {caseData.totalCost}
            </p>
            <p className="text-base text-neolith-gray-600">
              {caseData.costNote}
            </p>
          </div>
          <div className="rounded border border-neolith-gray-200 bg-white p-7">
            <div className="flex flex-col divide-y divide-neolith-gray-100">
              {caseData.costRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-4 py-4"
                >
                  <span className="text-sm text-neolith-black">
                    {row.label}
                  </span>
                  <span className="shrink-0 text-sm font-medium text-neolith-black">
                    {row.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-neolith-black py-16 text-white md:py-24">
        <Container className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold md:text-[40px] md:leading-[48px]">
            Бажаєте обговорити ваш кейс?
          </h2>
          <p className="max-w-[700px] text-base leading-7 text-white/80">
            Опишіть, що вас турбує — лікар скаже, як це можна вирішити у вашому
            випадку. Безкоштовно, протягом 24 годин.
          </p>
          <Button
            href="/consultation"
            className="w-fit bg-white text-neolith-black hover:bg-neolith-gray-100"
          >
            Безкоштовна онлайн-консультація
          </Button>
        </Container>
      </section>
    </main>
  );
}
