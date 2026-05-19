"use client";

import { useState } from "react";
import { ConsultationForm } from "@/components/ui/ConsultationForm";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  consultationBenefits,
  consultationDoctors,
  consultationFaqs,
  consultationSteps,
} from "./data";

export function ConsultationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      {/* Hero: текст + форма */}
      <section className="bg-white py-12 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div className="flex flex-col gap-8 lg:py-8">
            <p className="text-xs font-semibold tracking-[2px] text-neolith-gray-600 uppercase">
              БЕЗКОШТОВНО • БЕЗ ЗОБОВʼЯЗАНЬ
            </p>
            <h1 className="text-4xl font-bold leading-tight text-neolith-black md:text-[48px] md:leading-[58px]">
              Опишіть проблему — лікар відповість протягом 24 годин.
            </h1>
            <p className="max-w-[540px] text-base leading-7 text-neolith-gray-600">
              Не треба їхати у клініку, щоб зрозуміти, з чим маємо справу. Прикріпіть фото,
              рентгенологічні зніми (за наявності) — наш лікар скаже, що з вами, які варіанти
              лікування і скільки це орієнтовно коштуватиме.
            </p>
            <ul className="flex flex-col gap-4">
              {consultationBenefits.map((b) => (
                <li key={b} className="flex gap-3 text-base text-neolith-black">
                  <span className="shrink-0 text-neolith-black">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <ConsultationForm />
        </Container>
      </section>

      {/* Як це працює */}
      <section className="border-t border-neolith-gray-200 bg-neolith-gray-50 py-16 md:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeader label="ЯК ЦЕ ПРАЦЮЄ" title="Чотири простих кроки." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {consultationSteps.map((step) => (
              <div
                key={step.num}
                className="rounded border border-neolith-gray-200 bg-white p-7"
              >
                <p className="text-3xl font-bold text-neolith-black">{step.num}</p>
                <h3 className="mt-3 text-lg font-semibold text-neolith-black">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-neolith-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Хто відповідає */}
      <section className="bg-white py-16 md:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeader label="ХТО ВІДПОВІДАЄ" title="Не менеджер. Не оператор. Лікар." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {consultationDoctors.map((d) => (
              <div
                key={d.name}
                className="flex items-center gap-4 rounded border border-neolith-gray-200 bg-neolith-gray-50 p-6"
              >
                <ImagePlaceholder label="Фото" className="h-[72px] w-[72px] shrink-0 rounded" />
                <div>
                  <p className="text-xs text-neolith-gray-600">{d.specialty}</p>
                  <p className="font-semibold text-neolith-black">{d.name}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-neolith-gray-200 bg-neolith-gray-50 py-16 md:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeader
            label="FAQ"
            title="Запитання, які виникають перед першою консультацією."
          />
          <div className="flex flex-col divide-y divide-neolith-gray-200 rounded border border-neolith-gray-200 bg-white">
            {consultationFaqs.map((faq, i) => (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left"
                >
                  <span className="font-medium text-neolith-black">{faq.q}</span>
                  <span className="text-2xl text-neolith-gray-400">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <p className="border-t border-neolith-gray-100 px-7 pb-6 text-sm leading-6 text-neolith-gray-600">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
