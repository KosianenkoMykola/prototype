import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    num: "01",
    title: "Безкоштовна онлайн-консультація",
    text: "Опишіть проблему, прикріпіть фото. Лікар відповість протягом 24 годин — без оплати.",
  },
  {
    num: "02",
    title: "Огляд і діагностика",
    text: "3D-сканування, аналіз стану, фотопротокол. Зрозумієте, що з вами насправді.",
  },
  {
    num: "03",
    title: "План лікування з цінами",
    text: "Чіткий план: етапи, терміни, варіанти, повна вартість. Без сюрпризів у кінці.",
  },
  {
    num: "04",
    title: "Лікування за планом",
    text: "Один кейс-менеджер супроводжує вас увесь шлях. Можливе лікування під сном.",
  },
  {
    num: "05",
    title: "Гарантія та супровід",
    text: "Гарантія до 10 років на роботи. Контроль кожні 6 місяців — безкоштовно.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container className="flex flex-col gap-12">
        <SectionHeader
          label="ЯК ВСЕ ВІДБУВАЄТЬСЯ"
          title="Шлях від першого дзвінка до результату."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <article
              key={step.num}
              className="rounded border border-neolith-gray-200 bg-neolith-gray-50 p-7"
            >
              <span className="text-[32px] font-bold text-neolith-gray-400">
                {step.num}
              </span>
              <h3 className="mt-4 text-base font-semibold text-neolith-black">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-[22px] text-neolith-gray-600">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
