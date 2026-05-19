import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { serviceCategories } from "./data";

export function ServicesIndexPage() {
  return (
    <main>
      <section className="bg-white py-16 md:py-24">
        <Container className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold tracking-[2px] text-neolith-gray-600 uppercase">
              ПОСЛУГИ
            </p>
            <h1 className="text-4xl font-bold leading-tight text-neolith-black md:text-[56px] md:leading-[64px]">
              Що ми вміємо. І чим це краще.
            </h1>
            <p className="max-w-[700px] text-lg leading-[30px] text-neolith-gray-600">
              Комплексна стоматологія — від профілактики до повного відновлення. Оберіть
              напрямок, щоб переглянути послуги, лікарів і кейси.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {serviceCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/services/${cat.slug}`}
                className="group flex flex-col gap-2 rounded border border-neolith-gray-200 bg-neolith-gray-50 p-8 transition-colors hover:border-neolith-black hover:bg-white md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h2 className="text-2xl font-bold text-neolith-black group-hover:opacity-80 md:text-[32px]">
                    {cat.title}
                  </h2>
                  <p className="mt-2 text-sm text-neolith-gray-600">{cat.subtitle}</p>
                </div>
                <span className="shrink-0 text-sm font-medium text-neolith-black">
                  Переглянути розділ →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
