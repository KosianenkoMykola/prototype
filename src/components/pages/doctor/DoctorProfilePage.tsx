import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { kamilaNovak } from "./data";

export function DoctorProfilePage() {
  const doctor = kamilaNovak;

  return (
    <main>
      {/* Hero */}
      <section className="bg-white py-12 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_540px] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-8">
            <p className="text-xs font-semibold tracking-[2px] text-neolith-gray-600 uppercase">
              {doctor.specialtyLabel}
            </p>
            <h1 className="text-4xl font-bold leading-tight text-neolith-black md:text-[56px] md:leading-[64px]">
              {doctor.name}
            </h1>
            <p className="max-w-[540px] text-lg leading-[30px] text-neolith-gray-600">
              {doctor.tagline}
            </p>
            <div className="flex flex-wrap gap-10 border-t border-neolith-gray-200 pt-6">
              {doctor.stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-neolith-black md:text-[28px]">{s.value}</p>
                  <p className="text-sm text-neolith-gray-600">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/consultation">Записатись до д-р Новак</Button>
              <Button href="/consultation" variant="secondary">
                Онлайн-консультація
              </Button>
            </div>
          </div>
          <ImagePlaceholder
            label="Великий портрет лікаря"
            aspect="portrait"
            className="min-h-[480px] w-full lg:min-h-[620px]"
          />
        </Container>
      </section>

      {/* About */}
      <section className="border-t border-neolith-gray-200 bg-white py-16 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <SectionHeader label="ПРО ЛІКАРЯ" title={doctor.about.title} />
          <p className="text-base leading-7 text-neolith-gray-600 lg:pt-9">{doctor.about.text}</p>
        </Container>
      </section>

      {/* Education */}
      <section className="bg-neolith-gray-50 py-16 md:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeader
            label="ОСВІТА І СЕРТИФІКАЦІЇ"
            title="Моє безперервне навчання."
          />
          <div className="flex flex-col divide-y divide-neolith-gray-200 rounded border border-neolith-gray-200 bg-white">
            {doctor.education.map((item) => (
              <div
                key={item.year}
                className="grid gap-4 px-6 py-5 sm:grid-cols-[72px_1fr] sm:items-center sm:gap-8"
              >
                <span className="text-lg font-semibold text-neolith-black">{item.year}</span>
                <div>
                  <p className="font-medium text-neolith-black">{item.title}</p>
                  <p className="text-sm text-neolith-gray-600">{item.place}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-white py-16 md:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeader
            label="ПОСЛУГИ, ЯКІ Я ВИКОНУЮ"
            title="Те, на чому я спеціалізуюсь."
          />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {doctor.services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="flex min-h-[131px] flex-col justify-between rounded border border-neolith-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
              >
                <h3 className="text-sm font-semibold leading-snug text-neolith-black">{s.title}</h3>
                <span className="text-xs font-medium text-neolith-black">Детальніше →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Cases */}
      <section className="bg-neolith-gray-50 py-16 md:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeader label="МОЇ РОБОТИ" title="Кейси, виконані особисто." />
          <div className="grid gap-6 md:grid-cols-3">
            {doctor.cases.map((c) => (
              <article
                key={c.title}
                className="overflow-hidden rounded border border-neolith-gray-200 bg-white"
              >
                <div className="flex h-[240px]">
                  <div className="flex flex-1 items-center justify-center bg-neolith-gray-100 text-sm text-neolith-gray-600">
                    ДО
                  </div>
                  <div className="flex flex-1 items-center justify-center bg-neolith-gray-200 text-sm text-neolith-gray-600">
                    ПІСЛЯ
                  </div>
                </div>
                <div className="space-y-1 p-4">
                  <p className="font-medium text-neolith-black">{c.title}</p>
                  <p className="text-xs text-neolith-gray-600">{c.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Reviews */}
      <section className="bg-white py-16 md:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeader label="ВІДГУКИ ПРО Д-Р НОВАК" title="Те, що пишуть пацієнти." />
          <div className="grid gap-6 md:grid-cols-3">
            {doctor.reviews.map((r) => (
              <blockquote
                key={r.author}
                className="flex flex-col gap-4 rounded border border-neolith-gray-200 bg-neolith-gray-50 p-7"
              >
                <p className="text-amber-500" aria-hidden>
                  ★★★★★
                </p>
                <p className="flex-1 text-sm leading-6 text-neolith-gray-600">{r.text}</p>
                <footer className="text-sm font-medium text-neolith-black">{r.author}</footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-neolith-black py-16 text-white md:py-24">
        <Container className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold md:text-[40px] md:leading-[48px]">
            Записатись до д-р Новак
          </h2>
          <p className="max-w-[700px] text-base leading-7 text-white/80">
            Зазвичай вікно для запису — 2-3 тижні наперед. Якщо хочете швидше — можна на
            консультацію до іншого лікаря команди.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/consultation" className="bg-white text-neolith-black hover:bg-neolith-gray-100">
              Записатись
            </Button>
            <Button href="/consultation" variant="secondary" className="border-white text-white hover:bg-white/10">
              Безкоштовна онлайн-консультація
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
