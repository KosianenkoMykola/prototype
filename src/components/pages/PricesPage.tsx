import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

const categories = [
  {
    title: "Консультації та діагностика",
    items: [
      { name: "Онлайн-консультація", price: "безкоштовно" },
      { name: "Огляд + 3D-сканування", price: "від 400 zł" },
      { name: "КТ / панорамний знімок", price: "від 250 zł" },
    ],
  },
  {
    title: "Імплантація",
    items: [
      { name: "Імплант Straumann", price: "від 4 500 zł" },
      { name: "Коронка на імпланті", price: "від 3 200 zł" },
      { name: "All-on-4 (арх)", price: "від 38 000 zł" },
    ],
  },
  {
    title: "Естетика",
    items: [
      { name: "Вінір E-max", price: "від 2 800 zł" },
      { name: "Відбілювання", price: "від 1 200 zł" },
      { name: "Цифровий дизайн посмішки", price: "від 600 zł" },
    ],
  },
];

export function PricesPage() {
  return (
    <main>
      <PageHero
        label="ПРАЙС"
        title="Прозорі ціни без прихованих доплат."
        description="Точну вартість озвучуємо після діагностики та погодження плану лікування."
      />
      <section className="pb-20">
        <Container className="flex flex-col gap-12">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h2 className="mb-6 text-xl font-bold text-neolith-black">{cat.title}</h2>
              <ul className="divide-y divide-neolith-gray-200 rounded border border-neolith-gray-200 bg-white">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between gap-4 px-6 py-5"
                  >
                    <span className="text-neolith-black">{item.name}</span>
                    <span className="shrink-0 font-semibold text-neolith-black">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="text-sm text-neolith-gray-400">
            * Ціни орієнтовні. Фінальна вартість — у персональному плані лікування.
          </p>
        </Container>
      </section>
    </main>
  );
}
