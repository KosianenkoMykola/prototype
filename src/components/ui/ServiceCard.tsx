import Link from "next/link";
import { ImagePlaceholder } from "./ImagePlaceholder";

type Props = {
  title: string;
  description: string;
  href: string;
};

export function ServiceCard({ title, description, href }: Props) {
  return (
    <article className="flex flex-col overflow-hidden rounded border border-neolith-gray-200 bg-white">
      <ImagePlaceholder label="Фото послуги" aspect="video" className="rounded-none" />
      <div className="flex flex-col gap-3 p-7">
        <h3 className="text-xl font-semibold text-neolith-black">{title}</h3>
        <p className="text-sm leading-[22px] text-neolith-gray-600">{description}</p>
        <Link href={href} className="text-sm font-medium text-neolith-black hover:opacity-70">
          Детальніше →
        </Link>
      </div>
    </article>
  );
}
