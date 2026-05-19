"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  implantCases,
  implantDoctors,
  implantFaqs,
  materials,
  priceRows,
  processSteps,
} from "./data";

const heroStats = [
  { value: "98.4%", label: "приживлюваність" },
  { value: "10 років", label: "гарантія" },
  { value: "від 4 800 zł", label: "під ключ" },
];

export function ImplantationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Головна", href: "/" },
          { label: "Послуги", href: "/services" },
          { label: "Імплантація" },
        ]}
      />

      {/* Hero */}
      <section className="bg-white py-12 md:py-16">
        <Container className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="flex flex-1 flex-col gap-8">
            <p className="text-xs font-semibold tracking-[2px] text-neolith-gray-600 uppercase">
              ІМПЛАНТАЦІЯ
            </p>
            <h1 className="text-4xl font-bold leading-tight text-neolith-black md:text-[48px] md:leading-[58px]">
              Імплант, який працює як ваш зуб.
            </h1>
            <p className="max-w-[540px] text-base leading-7 text-neolith-gray-600">
              Працюємо тільки з імплантами Straumann (Швейцарія) і Nobel Biocare
              (США) — це світовий стандарт. До встановлення — 3D-сканування і
              цифрове планування, щоб ви знали результат заздалегідь.
            </p>
            <div className="flex flex-wrap gap-8 border-y border-neolith-gray-200 py-6">
              {heroStats.map((s) => (
                <div key={s.label}>
                  <p className="text-xl font-bold text-neolith-black md:text-2xl">
                    {s.value}
                  </p>
                  <p className="text-[13px] text-neolith-gray-400">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/consultation">Записатись на консультацію</Button>
              <Button href="/prices" variant="secondary">
                Дізнатись вартість
              </Button>
            </div>
          </div>
          <ImagePlaceholder
            label="Фото / 3D-візуалізація імпланту"
            aspect="square"
            className="w-full max-w-[540px] lg:shrink-0"
          />
        </Container>
      </section>

      {/* Process */}
      <section className="bg-neolith-gray-50 py-16 md:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeader
            label="ЯК ПРОХОДИТЬ ЛІКУВАННЯ"
            title="Шість кроків до результату."
          />
          <div className="flex flex-col gap-4">
            {processSteps.map((step) => (
              <article
                key={step.num}
                className="flex gap-6 rounded border border-neolith-gray-200 bg-white p-7 md:gap-10 md:px-8 md:py-7"
              >
                <span className="shrink-0 text-[32px] font-bold leading-none text-neolith-gray-400">
                  {step.num}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-neolith-black">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-[22px] text-neolith-gray-600">
                    {step.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Materials */}
      <section className="bg-white py-16 md:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeader
            label="МАТЕРІАЛИ І БРЕНДИ"
            title="Перевірені часом та якістю партнери."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {materials.map((m) => (
              <article
                key={m.name}
                className="flex flex-col rounded border border-neolith-gray-200 bg-white p-7"
              >
                <ImagePlaceholder
                  label="Лого бренду"
                  aspect="video"
                  className="mb-6 h-20 min-h-0"
                />
                <h3 className="text-xl font-semibold text-neolith-black">
                  {m.name}
                </h3>
                <p className="mt-1 text-[13px] text-neolith-gray-400">
                  {m.country}
                </p>
                <p className="mt-3 text-sm leading-[22px] text-neolith-gray-600">
                  {m.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Doctors */}
      <section className="bg-neolith-gray-50 py-16 md:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeader
            label="ВАШ ЛІКАР"
            title="Імплантологи нашої команди."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {implantDoctors.map((d) => (
              <Link
                key={d.name}
                href={d.href}
                className="flex gap-6 rounded border border-neolith-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <ImagePlaceholder
                  label="Портрет"
                  aspect="portrait"
                  className="h-40 w-[140px] shrink-0 min-h-0"
                />
                <div className="flex flex-col justify-center gap-1">
                  <p className="text-lg font-semibold text-neolith-black">
                    {d.name}
                  </p>
                  <p className="text-sm text-neolith-gray-600">{d.role}</p>
                  <p className="mt-2 text-xs leading-relaxed text-neolith-gray-600">
                    {d.meta}
                  </p>
                  <span className="mt-3 text-sm font-medium text-neolith-black">
                    Профіль лікаря →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Cases */}
      <section className="bg-white py-16 md:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeader
            label="РЕЗУЛЬТАТИ"
            title="Кейси імплантації."
            linkHref="/cases"
            linkLabel="Усі кейси →"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {implantCases.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group overflow-hidden rounded border border-neolith-gray-200 bg-white transition-shadow hover:shadow-md"
              >
                <div className="flex h-[240px]">
                  <div className="flex flex-1 items-center justify-center bg-neolith-gray-100 text-sm text-neolith-gray-600">
                    ДО
                  </div>
                  <div className="flex flex-1 items-center justify-center bg-neolith-gray-200 text-sm text-neolith-gray-600">
                    ПІСЛЯ
                  </div>
                </div>
                <div className="px-4 py-4">
                  <p className="font-medium text-neolith-black">{c.title}</p>
                  <p className="mt-1 text-xs text-neolith-gray-600">{c.meta}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Price */}
      <section className="bg-neolith-gray-50 py-16 md:py-20">
        <Container className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold tracking-[2px] text-neolith-gray-600 uppercase">
              ВАРТІСТЬ
            </p>
            <h2 className="text-3xl font-bold text-neolith-black md:text-[40px] md:leading-[48px]">
              Скільки коштує імплантація.
            </h2>
          </div>
          <div className="overflow-hidden rounded border border-neolith-gray-200 bg-white">
            {priceRows.map((row, i) => (
              <div
                key={row.name}
                className={`flex items-center justify-between gap-4 px-7 py-5 ${
                  i > 0 ? "border-t border-neolith-gray-200" : ""
                }`}
              >
                <span className="text-sm text-neolith-black">{row.name}</span>
                <span className="shrink-0 text-sm font-semibold text-neolith-black">
                  {row.price}
                </span>
              </div>
            ))}
          </div>
          <p className="text-sm text-neolith-gray-600">
            Можлива розстрочка 0% на 12 місяців. Точна вартість — після огляду.
          </p>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-20">
        <Container className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold tracking-[2px] text-neolith-gray-600 uppercase">
              FAQ
            </p>
            <h2 className="text-3xl font-bold text-neolith-black md:text-[40px] md:leading-[48px]">
              Найчастіші запитання.
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {implantFaqs.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded border border-neolith-gray-200 bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left"
                  >
                    <span className="font-medium text-neolith-black">
                      {item.q}
                    </span>
                    <span className="text-2xl leading-none text-neolith-gray-400">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="border-t border-neolith-gray-200 px-7 pb-6 text-sm leading-[22px] text-neolith-gray-600">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-neolith-gray-50 py-16 md:py-24">
        <Container className="flex flex-col gap-8">
          <h2 className="max-w-3xl text-3xl font-bold leading-tight text-neolith-black md:text-[40px] md:leading-[50px]">
            Готові обговорити свій випадок?
          </h2>
          <p className="max-w-2xl text-base leading-7 text-neolith-gray-600">
            Опишіть ситуацію, прикріпіть фото — лікар відповість, скільки
            імплантів вам потрібно і яка орієнтовна вартість. Безкоштовно.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/consultation">
              Безкоштовна онлайн-консультація
            </Button>
            <Button href="/consultation" variant="secondary">
              Записатись на огляд
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
