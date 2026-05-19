"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Послуги", href: "/services" },
  { label: "Лікарі", href: "/doctors" },
  { label: "Кейси", href: "/cases" },
  { label: "Прайс", href: "/prices" },
  { label: "Про клініку", href: "/about" },
  { label: "Блог", href: "/blog" },
  { label: "Контакти", href: "/contacts" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="rounded border border-neolith-gray-200 px-3 py-2 text-sm font-medium"
        aria-expanded={open}
      >
        Меню
      </button>
      {open && (
        <nav className="absolute left-0 right-0 top-20 z-40 border-b border-neolith-gray-200 bg-white px-5 py-4 shadow-lg">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-sm font-medium text-neolith-gray-900"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
