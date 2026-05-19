import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { aboutStats, equipment } from "./data";

export function AboutPage() {
  return (
    <main>
      <section className="bg-white py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold tracking-[2px] text-neolith-gray-600 uppercase">
              ПРО НАС
            </p>
            <h1 className="text-4xl font-bold leading-tight text-neolith-black md:text-[56px] md:leading-[64px]">
              Ми створили простір, де комфорт на першому місці.
            </h1>
            <p className="max-w-[540px] text-lg leading-[30px] text-neolith-gray-600">
              Neolith — це стоматологія, побудована навколо однієї простої ідеї:
              пацієнт має розуміти, що з ним відбувається.
            </p>
          </div>
          <ImagePlaceholder
            label="Великий портрет команди / інтер'єр"
            aspect="hero"
            className="min-h-[480px] w-full lg:min-h-[620px]"
          />
        </Container>
      </section>

      <section className="border-t border-neolith-gray-200 bg-neolith-gray-50 py-16 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <SectionHeader
            label="ФІЛОСОФІЯ"
            title="Стоматологія має бути місцем, куди хочеться повертатись."
          />
          <p className="text-base leading-7 text-neolith-gray-600 lg:pt-9">
            Ми не приймаємо 30 пацієнтів на день. Не пропонуємо «акції на
            імплантацію». Не намагаємось бути «найкращою клінікою для всієї
            родини». Ми маємо команду з 6 лікарів, які глибоко знають своє.
            Працюємо тільки з матеріалами топ-сегменту. Беремо стільки
            пацієнтів, скільки можемо приймати без поспіху — щоб у вас було 60
            хвилин на консультацію, а не 15. Так, це коштує дорожче. Але це
            чесна ціна за рівень роботи, який ми робимо.
          </p>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeader label="У ЦИФРАХ" title="Як виглядає 6 років роботи." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {aboutStats.map((s) => (
              <div
                key={s.label}
                className="rounded border border-neolith-gray-200 bg-neolith-gray-50 p-8"
              >
                <p className="text-3xl font-bold text-neolith-black md:text-[40px]">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-neolith-gray-600">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-neolith-gray-200 bg-neolith-gray-50 py-16 md:py-20">
        <Container className="flex flex-col gap-4">
          <SectionHeader
            label="КЛІНІКА"
            title="Як виглядає простір, у який ви приходите."
          />
          <div className="grid gap-4 lg:grid-cols-4 lg:grid-rows-2">
            <ImagePlaceholder
              label="Інтер'єр — рецепція"
              aspect="video"
              className="col-span-2 row-span-2 row-start-1 w-full h-full"
            />
            <ImagePlaceholder
              label="Кабінет 1"
              aspect="video"
              className="col-start-3 row-start-1 col-span-2 w-full"
            />
            <ImagePlaceholder
              label="Кабінет 2"
              aspect="video"
              className="col-start-3 row-start-2 col-span-2 w-full"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Лабораторія / 3D-сканер",
              "Дитячий кабінет",
              "Зала очікування",
              "Стерилізаційна",
            ].map((label) => (
              <ImagePlaceholder
                key={label}
                label={label}
                aspect="video"
                className="min-h-[220px] w-full"
              />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button href="/consultation" variant="secondary">
              Віртуальний 3D-тур клінікою
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeader label="ОБЛАДНАННЯ" title="Лише найкраще обладнання." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {equipment.map((item) => (
              <div
                key={item.title}
                className="rounded border border-neolith-gray-200 bg-neolith-gray-50 p-7"
              >
                <ImagePlaceholder
                  label="Фото"
                  aspect="video"
                  className="mb-6 h-[160px] rounded w-full"
                />
                <h3 className="font-semibold text-neolith-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-neolith-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
