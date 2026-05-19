import Link from "next/link";

type Props = {
  label: string;
  title: string | React.ReactNode;
  linkHref?: string;
  linkLabel?: string;
  className?: string;
};

export function SectionHeader({
  label,
  title,
  linkHref,
  linkLabel,
  className = "",
}: Props) {
  return (
    <div
      className={`flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between ${className}`}
    >
      <div className="flex flex-col gap-4">
        <p className="text-xs font-semibold tracking-[2px] text-neolith-gray-600 uppercase">
          {label}
        </p>
        <h2 className="max-w-4xl text-3xl font-bold leading-tight text-neolith-black md:text-[40px] md:leading-[50px]">
          {title}
        </h2>
      </div>
      {linkHref && linkLabel && (
        <Link
          href={linkHref}
          className="shrink-0 text-sm font-medium text-neolith-black hover:opacity-70"
        >
          {linkLabel}
        </Link>
      )}
    </div>
  );
}
