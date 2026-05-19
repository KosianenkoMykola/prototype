import Link from "next/link";
import { Container } from "@/components/ui/Container";

const services = [
  { label: "Імплантація", href: "/services/implantaciya" },
  { label: "Естетична стоматологія", href: "/services" },
  { label: "Ортодонтія", href: "/services" },
  { label: "Дитяча стоматологія", href: "/services" },
  { label: "Хірургія", href: "/services" },
  { label: "Лікування під сном", href: "/services" },
];

const clinic = [
  { label: "Про нас", href: "/about" },
  { label: "Лікарі", href: "/doctors" },
  { label: "Кейси", href: "/cases" },
  { label: "Прайс", href: "/prices" },
  { label: "Блог", href: "/blog" },
  { label: "Онлайн-консультація", href: "/consultation" },
];

export function SiteFooter() {
  return (
    <footer className="bg-neolith-black text-white">
      <Container className="flex flex-col gap-12 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <p className="text-[28px] font-bold tracking-[4px]">NEOLITH</p>
            <div className="text-sm leading-[22px] text-neolith-gray-400">
              <p>Стоматологія преміум-класу.</p>
              <p>Вроцлав, Польща.</p>
            </div>
          </div>
          <FooterColumn title="ПОСЛУГИ" links={services} />
          <FooterColumn title="КЛІНІКА" links={clinic} />
          <div className="flex flex-col gap-4">
            <p className="text-[13px] font-semibold tracking-wide text-white uppercase">
              КОНТАКТИ
            </p>
            <div className="flex flex-col gap-0 text-sm text-neolith-gray-400">
              <p>вул. Прикладна 12, Вроцлав</p>
              <a href="tel:+48000000000" className="hover:text-white">
                +48 000 000 000
              </a>
              <a href="mailto:hello@neolith.pl" className="hover:text-white">
                hello@neolith.pl
              </a>
              <p>Пн-Сб: 9:00–20:00</p>
              <p>Нд: вихідний</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-neolith-border pt-8 text-xs text-neolith-gray-400 sm:flex-row sm:justify-between">
          <p>© 2026 Neolith. Усі права захищені.</p>
          <p>Політика конфіденційності • Cookies</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[13px] font-semibold tracking-wide text-white uppercase">
        {title}
      </p>
      <ul className="flex flex-col gap-0 text-sm text-neolith-gray-400">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="block py-0.5 hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
