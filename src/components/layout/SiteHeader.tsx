import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "./MobileNav";

const nav = [
  { label: "Послуги", href: "/services" },
  { label: "Лікарі", href: "/doctors" },
  { label: "Кейси", href: "/cases" },
  { label: "Прайс", href: "/prices" },
  { label: "Про клініку", href: "/about" },
  { label: "Блог", href: "/blog" },
  { label: "Контакти", href: "/contacts" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-neolith-gray-200 bg-white">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="text-[22px] font-bold tracking-[3px] text-neolith-gray-900"
        >
          NEOLITH
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-neolith-gray-900 xl:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:opacity-70">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <MobileNav />
          <a
            href="tel:+48000000000"
            className="hidden text-sm font-semibold text-neolith-gray-900 sm:block"
          >
            +48 000 000 000
          </a>
          <Button href="/consultation" className="px-6! py-3!">
            Записатись
          </Button>
        </div>
      </Container>
    </header>
  );
}
