import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";

const services = [
  {
    title: "Імплантація зубів",
    description:
      "Straumann, Nobel, протоколи All-on-4 та All-on-6. Заздалегідь знаєте, як буде виглядати результат — завдяки 3D-плануванню.",
    href: "/services/implantaciya",
  },
  {
    title: "Естетична стоматологія",
    description:
      "Вініри E-max, цифрове моделювання посмішки, відбілювання. Дизайн посмішки під ваше обличчя, не шаблон.",
    href: "/services/estetychna-stomatologiya",
  },
  {
    title: "Ортодонтія",
    description:
      "Прозорі елайнери Invisalign, брекет-системи. Лікар-ортодонт із 10+ роками практики.",
    href: "/services/ortodontiya",
  },
  {
    title: "Хірургічна стоматологія",
    description:
      "Видалення зубів мудрості, аугментація кістки, синус-ліфтинг — під мікроскопом і анестезією.",
    href: "/services/hirurgiya",
  },
  {
    title: "Дитяча стоматологія",
    description:
      "Окремий кабінет, ігрова зона, лікар, який вміє говорити з дітьми. Перший візит — безкоштовно.",
    href: "/services/dytiacha-stomatologiya",
  },
  {
    title: "Лікування уві сні",
    description:
      "Анестезіолог, реанімаційне обладнання, повний цикл лікування за один візит. Прокинулись — все готово.",
    href: "/services/terapiya-ta-profilaktyka",
  },
];

export function ServicesPreviewSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container className="flex flex-col gap-12">
        <SectionHeader
          label="ПОСЛУГИ"
          title="Те, з чим до нас приходять найчастіше."
          linkHref="/services"
          linkLabel="Усі послуги →"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </Container>
    </section>
  );
}
