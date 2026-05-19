import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { PageHero } from "@/components/ui/PageHero";

const doctors = [
  {
    name: "Д-р Каміла Новак",
    specialty: "Естетична стоматологія, вініри",
    experience: "14 років практики",
    href: "/doctors/kamila-novak",
  },
  {
    name: "Д-р Томаш Вуйцик",
    specialty: "Імплантологія, хірургія",
    experience: "18 років практики",
    href: "/doctors/kamila-novak",
  },
  {
    name: "Д-р Анна Ковальська",
    specialty: "Ортодонтія, Invisalign",
    experience: "11 років практики",
    href: "/doctors",
  },
  {
    name: "Д-р Якуб Зелінський",
    specialty: "Дитяча стоматологія",
    experience: "9 років практики",
    href: "/doctors",
  },
];

export function DoctorsPage() {
  return (
    <main>
      <PageHero
        label="ЛІКАРІ"
        title="Команда спеціалістів Neolith."
        description="Кожен лікар — фокус на своїй спеціалізації. Ваш план проходить через 2–3 експертів."
      />
      <section className="pb-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map((d) => (
              <Link
                key={d.name}
                href={d.href}
                className="group overflow-hidden rounded border border-neolith-gray-200 bg-white transition-shadow hover:shadow-md"
              >
                <ImagePlaceholder label="Портрет" aspect="portrait" className="min-h-[360px] rounded-none w-full" />
                <div className="space-y-1 p-5">
                  <p className="font-semibold text-neolith-black">{d.name}</p>
                  <p className="text-sm text-neolith-gray-600">{d.specialty}</p>
                  <p className="text-xs text-neolith-gray-400">{d.experience}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
