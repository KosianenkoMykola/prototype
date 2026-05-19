import Link from "next/link";

type Crumb = { label: string; href?: string };

type Props = {
  items: Crumb[];
};

export function Breadcrumbs({ items }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-neolith-gray-200 bg-white py-6">
      <ol className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-2 px-5 text-sm text-neolith-gray-600 md:px-20">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <span className="text-neolith-gray-400">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-neolith-black">
                {item.label}
              </Link>
            ) : (
              <span className="text-neolith-black">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
