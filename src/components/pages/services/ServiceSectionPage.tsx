"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { ServiceCategory } from "./data";
import { sectionCases, sectionDoctors, sectionFaqs, subServiceHref } from "./data";

type Props = {
  category: ServiceCategory;
};

export function ServiceSectionPage({ category }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Головна", href: "/" },
          { label: "Послуги", href: "/services" },
          { label: category.title },
        ]}
      />

      {/* Hero — розділ послуг */}
      <section className="bg-white pb-16 pt-12 md:pb-20 md:pt-16">
        <Container className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold tracking-[2px] text-neolith-gray-600 uppercase">
              ПОСЛУГИ
            </p>
            <h1 className="text-4xl font-bold leading-tight text-neolith-black md:text-[56px] md:leading-[64px]">
              {category.title}
            </h1>
            <p className="max-w-[700px] text-lg leading-[30px] text-neolith-gray-600">
              {category.description}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {category.subServices.map((sub) => (
              <Link
                key={sub.slug}
                href={subServiceHref(category.slug, sub.slug)}
                className="flex flex-col justify-between rounded border border-neolith-gray-200 bg-white p-6 transition-shadow hover:shadow-md min-h-[150px]"
              >
                <h2 className="text-lg font-semibold leading-snug text-neolith-black">
                  {sub.title}
                </h2>
                <span className="mt-6 text-sm font-medium text-neolith-black">
                  Детальніше →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Кейси */}
      <section className="bg-neolith-gray-50 py-16 md:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeader
            label="ДО ТА ПІСЛЯ"
            title="Кейси клініки по цьому напрямку"
            linkHref="/cases"
            linkLabel="Усі кейси →"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sectionCases.map((c) => (
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
                  <p className="font-semibold text-neolith-black">{c.title}</p>
                  <p className="text-xs text-neolith-gray-600">{c.doctor}</p>
                  <p className="text-xs text-neolith-gray-600">{c.duration}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Лікарі */}
      <section className="bg-white py-16 md:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeader
            label="КОМАНДА"
            title="Лікарі цього напрямку"
            linkHref="/doctors"
            linkLabel="Усі лікарі →"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sectionDoctors.map((d) => (
              <Link
                key={d.name}
                href={d.href}
                className="group overflow-hidden rounded border border-neolith-gray-200 bg-white transition-shadow hover:shadow-md"
              >
                <ImagePlaceholder label="Портрет" aspect="portrait" className="min-h-[360px] rounded-none" />
                <div className="space-y-1 p-5">
                  <p className="font-semibold text-neolith-black">{d.name}</p>
                  <p className="text-sm text-neolith-gray-600">{d.specialty}</p>
                  <p className="text-xs text-neolith-gray-400">{d.experience}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-neolith-gray-50 py-16 md:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeader
            label="ВІДПОВІДІ НА ЗАПИТАННЯ"
            title="Те, що питають перед першим візитом."
          />
          <div className="flex flex-col gap-3">
            {sectionFaqs.map((item, i) => {
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
                    <span className="font-medium text-neolith-black">{item.q}</span>
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
      <section className="bg-white py-16 md:py-24">
        <Container className="flex flex-col items-center gap-8 text-center">
          <h2 className="max-w-xl text-3xl font-bold text-neolith-black md:text-[40px] md:leading-[50px]">
            Не знаєте, з чого почати?
          </h2>
          <p className="max-w-md text-base leading-7 text-neolith-gray-600">
            Опишіть проблему — лікар підкаже, що робити. Безкоштовно, протягом 24 годин.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/consultation">Безкоштовна онлайн-консультація</Button>
            <Button href="/consultation" variant="secondary">
              Записатись на огляд
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
