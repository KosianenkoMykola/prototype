import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const items = [
  {
    num: "01",
    title: "Цифрова стоматологія",
    text: "3D-сканування, мікроскоп, цифрове планування лікування — усе для прогнозованого результату.",
  },
  {
    num: "02",
    title: "Лікування уві сні",
    text: "Власна команда анестезіологів. Можна вирішити все одним візитом, поки ви спите.",
  },
  {
    num: "03",
    title: "Преміум-матеріали",
    text: "Кераміка E-max, цирконій Prettau, імпланти Straumann та Nobel — без компромісів.",
  },
  {
    num: "04",
    title: "Команда спеціалістів",
    text: "Кожен лікар — фокус на своїй спеціалізації. Ваш план лікування проходить через 2-3 експертів.",
  },
  {
    num: "05",
    title: "Сервіс, який ви відчуєте",
    text: "Один кейс-менеджер, прозорий план із цінами, нагадування, підтримка після лікування.",
  },
];

export function AdvantagesSection() {
  return (
    <section className="bg-neolith-gray-50 py-16 md:py-20">
      <Container className="flex flex-col gap-12">
        <SectionHeader
          label="ЧОМУ NEOLITH"
          title={
            <>
              П&apos;ять причин, чому пацієнти повертаються
              <br />
              і рекомендують нас своїм рідним.
            </>
          }
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => (
            <article
              key={item.num}
              className="flex flex-col gap-4 rounded border border-neolith-gray-200 bg-white p-8"
            >
              <span className="text-[32px] font-bold text-neolith-gray-400">{item.num}</span>
              <h3 className="text-lg font-semibold leading-[26px] text-neolith-black">
                {item.title}
              </h3>
              <p className="text-sm leading-[22px] text-neolith-gray-600">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
