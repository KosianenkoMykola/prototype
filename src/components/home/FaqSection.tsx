"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const faqs = [
  {
    q: "Скільки коштує консультація?",
    a: "Перша онлайн-консультація — безкоштовно. Очний огляд з діагностикою — за попередньою домовленістю, вартість озвучує адміністратор.",
  },
  {
    q: "Як проходить лікування під сном?",
    a: "Проводиться під контролем анестезіолога у клініці з реанімаційним обладнанням. Ви засинаєте — прокидаєтесь з виконаним планом лікування.",
  },
  {
    q: "Чи можна оплатити в розстрочку?",
    a: "Так, доступні варіанти розстрочки та поетапної оплати за планом лікування.",
  },
  {
    q: "Чи приймаєте іноземних пацієнтів? Якою мовою спілкуєтеся?",
    a: "Так. Команда спілкується українською, польською та англійською.",
  },
  {
    q: "Яка гарантія на ваші роботи?",
    a: "Гарантія до 10 років на імплантацію та протезування — залежно від типу роботи.",
  },
  {
    q: "Як записатись на безкоштовну онлайн-консультацію?",
    a: "Заповніть форму на сайті або зателефонуйте — лікар відповість протягом 24 годин.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 md:py-20">
      <Container className="flex flex-col gap-12">
        <SectionHeader
          label="ВІДПОВІДІ НА ЗАПИТАННЯ"
          title="Те, що питають перед першим візитом."
        />
        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded border border-neolith-gray-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
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
  );
}
