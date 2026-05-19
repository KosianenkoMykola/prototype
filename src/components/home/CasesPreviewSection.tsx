import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const cases = [
  {
    title: "Вініри E-max, 8 одиниць",
    doctor: "Анна, 34 • д-р Каміла Новак",
    duration: "Термін: 6 тижнів",
    href: "/cases/viniry-e-max-8",
  },
  {
    title: "All-on-4 нижня щелепа",
    doctor: "Маріуш, 58 • д-р Томаш Вуйцик",
    duration: "Термін: 3 місяці",
    href: "/cases/all-on-4-nizhnya",
  },
  {
    title: "Імплант + цирконієва коронка",
    doctor: "Олег, 42 • д-р Томаш Вуйцик",
    duration: "Термін: 4 місяці",
    href: "/cases/implant-koronka",
  },
  {
    title: "Інвізалайн, 9 місяців",
    doctor: "Малгожата, 27 • д-р Анна Ковальська",
    duration: "Термін: 9 місяців",
    href: "/cases/invisalign-9-misyaciv",
  },
];

export function CasesPreviewSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container className="flex flex-col gap-12">
        <SectionHeader
          label="ДО ТА ПІСЛЯ"
          title="Реальні роботи наших лікарів."
          linkHref="/cases"
          linkLabel="Усі кейси →"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group overflow-hidden rounded border border-neolith-gray-200 bg-white transition-shadow hover:shadow-md"
            >
              <div className="flex h-[200px]">
                <div className="flex flex-1 items-center justify-center bg-neolith-gray-100 text-sm text-neolith-gray-600">
                  ДО
                </div>
                <div className="flex flex-1 items-center justify-center bg-neolith-gray-200 text-sm text-neolith-gray-600">
                  ПІСЛЯ
                </div>
              </div>
              <div className="space-y-1 p-4">
                <p className="font-semibold text-neolith-black group-hover:opacity-80">{c.title}</p>
                <p className="text-xs text-neolith-gray-600">{c.doctor}</p>
                <p className="text-xs text-neolith-gray-600">{c.duration}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
