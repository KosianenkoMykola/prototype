"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { contactBlocks } from "./data";

export function ContactsPage() {
  return (
    <main>
      <section className="bg-white py-16 md:py-24">
        <Container className="flex flex-col gap-6">
          <p className="text-xs font-semibold tracking-[2px] text-neolith-gray-600 uppercase">
            ЯК ЗВʼЯЗАТИСЬ
          </p>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-neolith-black md:text-[56px] md:leading-[64px]">
            Вроцлав, центр. Зручно дістатися.
          </h1>
        </Container>
      </section>

      <section className="bg-white pb-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-10">
              {contactBlocks.map((block) => (
                <div key={block.label}>
                  <p className="text-[11px] font-semibold tracking-wide text-neolith-gray-600 uppercase">
                    {block.label}
                  </p>
                  <div className="mt-2 space-y-1 text-base text-neolith-black">
                    {block.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex min-h-[520px] items-center justify-center rounded border border-neolith-gray-200 bg-neolith-gray-100 text-sm text-neolith-gray-600">
              Карта Google Maps
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-neolith-gray-200 bg-neolith-gray-50 py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold leading-tight text-neolith-black md:text-[40px] md:leading-[50px]">
              Напишіть нам. Відповімо протягом години.
            </h2>
            <p className="text-base leading-7 text-neolith-gray-600">
              Опишіть, що вас турбує — лікар оцінить ситуацію і скаже що саме потрібно.
            </p>
          </div>
          <form
            className="rounded border border-neolith-gray-200 bg-white p-8 md:p-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-5">
              {[
                { label: "Імʼя", placeholder: "Ваше імʼя" },
                { label: "Контакт (телефон, email)", placeholder: "+48…" },
                { label: "Тема звернення", placeholder: "Запис, питання…" },
              ].map((field) => (
                <label key={field.label} className="flex flex-col gap-2 text-sm text-neolith-black">
                  {field.label}
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    className="rounded border border-neolith-gray-200 px-4 py-3 outline-none focus:border-neolith-black"
                  />
                </label>
              ))}
              <label className="flex flex-col gap-2 text-sm text-neolith-black">
                Повідомлення
                <textarea
                  rows={4}
                  placeholder="Ваше повідомлення…"
                  className="resize-none rounded border border-neolith-gray-200 px-4 py-3 outline-none focus:border-neolith-black"
                />
              </label>
              <Button type="submit" className="w-full justify-center">
                Надіслати
              </Button>
            </div>
          </form>
        </Container>
      </section>
    </main>
  );
}
