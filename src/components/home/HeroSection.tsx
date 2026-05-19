import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const stats = [
  { value: "12+ років", label: "досвіду" },
  { value: "3 000+", label: "пацієнтів" },
  { value: "4.9/5", label: "Google rating" },
];

export function HeroSection() {
  return (
    <section className="bg-white py-12 md:py-20">
      <Container className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        <div className="flex flex-1 flex-col gap-8">
          <p className="text-xs font-semibold tracking-[2px] text-neolith-gray-600 uppercase">
            СТОМАТОЛОГІЯ ПРЕМІУМ-КЛАСУ • ВРОЦЛАВ
          </p>
          <h1 className="text-4xl font-bold leading-tight text-neolith-black md:text-[56px] md:leading-[64px]">
            Посмішка, яка змінює
            <br />
            те, як ви живете.
          </h1>
          <p className="max-w-[580px] text-lg leading-[30px] text-neolith-gray-600">
            Цифрова стоматологія, лікування під сном і команда лікарів, які працюють
            тільки з преміум-протоколами. Без болю, без поспіху, з повним розумінням
            того, чого ви очікуєте.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/consultation">Записатись на консультацію</Button>
            <Button href="/consultation" variant="secondary">
              Безкоштовна онлайн-консультація
            </Button>
          </div>
          <div className="flex flex-wrap gap-8 pt-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-xl font-bold text-neolith-black">{stat.value}</p>
                <p className="text-[13px] text-neolith-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <ImagePlaceholder
          label="Фото клініки / команди"
          aspect="hero"
          className="w-full lg:w-[560px] lg:shrink-0"
        />
      </Container>
    </section>
  );
}
