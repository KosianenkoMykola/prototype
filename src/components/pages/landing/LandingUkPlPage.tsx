import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  landingBenefits,
  landingCases,
  landingDoctors,
  landingJourneySteps,
  landingProcessSteps,
  landingTestimonials,
} from "./data";

export function LandingUkPlPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-black py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-8">
            <p className="text-xs font-semibold tracking-[2px] text-white uppercase">
              ДЛЯ УКРАЇНЦІВ У ПОЛЬЩІ
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-[48px] md:leading-[58px]">
              Стоматологія, де з вами говорять рідною.
            </h1>
            <p className="max-w-[540px] text-lg leading-[30px] text-white">
              Ви переїхали і не хочете лікувати зуби «у когось знайомого». У нас —
              українськомовні лікарі, ціни прозоро, документи польські (для NFZ і страхових
              компаній).
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/consultation" variant="secondary">Безкоштовна консультація українською</Button>
              <Button href="/contacts" className="border-white border text-white hover:bg-white/10">
                Записатись
              </Button>
            </div>
          </div>
          <ImagePlaceholder label="Фото / простір клініки" aspect="square" className="min-h-[400px] lg:min-h-[540px] w-full" />
        </Container>
      </section>

      {/* Benefits */}
      <section className="border-t border-neolith-gray-200 bg-neolith-gray-50 py-16 md:py-20">
        <Container className="flex flex-col gap-12">
          <h2 className="text-3xl font-bold text-neolith-black md:text-[40px] md:leading-[50px]">
            Чому українці обирають Neolith у Вроцлаві.
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {landingBenefits.map((b) => (
              <div key={b.num} className="rounded border border-neolith-gray-200 bg-white p-7">
                <p className="text-3xl font-bold text-neolith-black">{b.num}</p>
                <h3 className="mt-3 text-lg font-semibold text-neolith-black">{b.title}</h3>
                <p className="mt-2 text-sm leading-6 text-neolith-gray-600">{b.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process — як це зазвичай виглядає */}
      <section className="bg-white py-16 md:py-20">
        <Container className="flex flex-col gap-12">
          <h2 className="text-3xl font-bold text-neolith-black md:text-[40px]">Як це зазвичай виглядає.</h2>
          <div className="flex flex-col divide-y divide-neolith-gray-200 rounded border border-neolith-gray-200">
            {landingProcessSteps.map((step) => (
              <div key={step.num} className="grid gap-4 px-8 py-6 sm:grid-cols-[80px_1fr]">
                <span className="text-2xl font-bold text-neolith-black">{step.num}</span>
                <div>
                  <h3 className="font-semibold text-neolith-black">{step.title}</h3>
                  <p className="mt-1 text-sm text-neolith-gray-600">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-neolith-gray-50 py-16 md:py-20">
        <Container className="flex flex-col gap-12">
          <h2 className="text-3xl font-bold text-neolith-black md:text-[40px]">
            Що кажуть наші пацієнти-українці.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {landingTestimonials.map((t) => (
              <blockquote
                key={t.name}
                className="rounded border border-neolith-gray-200 bg-white p-7"
              >
                <p className="text-amber-500">★★★★★</p>
                <p className="mt-4 text-sm leading-6 text-neolith-gray-600">{t.text}</p>
                <footer className="mt-6">
                  <p className="font-medium text-neolith-black">{t.name}</p>
                  <p className="text-xs text-neolith-gray-600">{t.meta}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      {/* Video reviews */}
      <section className="bg-white py-16 md:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeader label="ВІДГУКИ ПАЦІЄНТІВ" title="Історії з власних слів." />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Анна, 34", sub: "Імплантація 2 зубів" },
              { name: "Марцін, 41", sub: "Повна реконструкція посмішки" },
              { name: "Олена, 29", sub: "Вініри + відбілювання" },
            ].map((v) => (
              <article key={v.name} className="overflow-hidden rounded border border-neolith-gray-200">
                <ImagePlaceholder label="▶ Відеовідгук" aspect="video" className="min-h-[360px] rounded-none w-full" />
                <div className="space-y-1 p-5">
                  <p className="font-medium text-neolith-black">{v.name}</p>
                  <p className="text-sm text-neolith-gray-600">{v.sub}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="text-center text-xs text-neolith-gray-600">
            Відеовідгуки зʼявляться у перші 5 місяців роботи клініки.
          </p>
        </Container>
      </section>

      {/* Cases */}
      <section className="bg-neolith-gray-50 py-16 md:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeader
            label="ДО ТА ПІСЛЯ"
            title="Реальні роботи наших лікарів."
            linkHref="/cases"
            linkLabel="Усі кейси →"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {landingCases.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group overflow-hidden rounded border border-neolith-gray-200 bg-white"
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

      {/* Doctors */}
      <section className="bg-white py-16 md:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeader
            label="КОМАНДА"
            title="Лікарі, які розмовляють українською."
            linkHref="/doctors"
            linkLabel="Усі лікарі →"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {landingDoctors.map((d) => (
              <div
                key={d.name}
                className="overflow-hidden rounded border border-neolith-gray-200 bg-white"
              >
                <ImagePlaceholder label="Портрет" aspect="portrait" className="min-h-[280px] rounded-none w-full" />
                <div className="space-y-1 p-5">
                  <p className="font-semibold text-neolith-black">{d.name}</p>
                  <p className="text-sm text-neolith-gray-600">{d.specialty}</p>
                  <p className="text-xs text-neolith-gray-600">{d.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Journey 5 steps */}
      <section className="border-t border-neolith-gray-200 bg-neolith-gray-50 py-16 md:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeader
            label="ЯК ВСЕ ВІДБУВАЄТЬСЯ"
            title="Шлях від першого дзвінка до результату."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {landingJourneySteps.map((s) => (
              <div
                key={s.num}
                className="rounded border border-neolith-gray-200 bg-white p-6"
              >
                <p className="text-3xl font-bold text-neolith-black">{s.num}</p>
                <h3 className="mt-3 font-semibold text-neolith-black">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-neolith-gray-600">{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* About blocks */}
      <section className="bg-white py-16 md:py-20">
        <Container className="flex flex-col gap-16">
          <SectionHeader
            label="ПРО НАС"
            title="Клініка, яка закриває всі потреби."
            linkHref="/about"
            linkLabel="Усі лікарі →"
          />
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <h3 className="text-3xl font-bold leading-tight text-neolith-black md:text-[40px]">
                Ми створили Neolith, бо стоматологія може бути інакшою
              </h3>
              <p className="text-base leading-7 text-neolith-gray-600">
                Більшість людей відкладають похід до стоматолога — через страх, зайнятість або
                відчуття що «ще потерплю». Neolith ми будували з однієї ідеї: стоматологія має
                бути місцем, куди хочеться повертатись.
              </p>
            </div>
            <ImagePlaceholder label="Фото / 3D-візуалізація імпланту" aspect="hero" className="min-h-[400px]" />
          </div>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ImagePlaceholder label="Фото / 3D-візуалізація імпланту" aspect="hero" className="min-h-[400px] order-2 lg:order-1" />
            <div className="order-1 flex flex-col gap-6 lg:order-2">
              <h3 className="text-3xl font-bold leading-tight text-neolith-black md:text-[40px]">
                Місце, куди хочеться повертатись
              </h3>
              <p className="text-base leading-7 text-neolith-gray-600">
                Тут немає зайвих процедур і прихованих цін. Є лікарі, які обрали Neolith свідомо
                — і пацієнти, що повертаються роками.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/consultation">Записатись на консультацію</Button>
                <Button href="/about" variant="secondary">
                  Детальніше про клініку
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#404040] py-20 text-center text-white md:py-28">
        <Container className="mx-auto flex max-w-3xl flex-col items-center gap-8">
          <h2 className="text-3xl font-bold md:text-[40px] md:leading-[50px]">
            Запишіться на безкоштовну консультацію українською.
          </h2>
          <p className="text-base leading-7 text-white/80">
            Опишіть ситуацію — лікар відповість на українській, з урахуванням ваших обставин у
            Польщі. Без оплати, без зобовʼязань.
          </p>
          <Button href="/consultation" variant="secondary">
            Написати лікарю українською
          </Button>
        </Container>
      </section>
    </main>
  );
}
