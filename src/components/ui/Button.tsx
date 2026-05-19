import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-neolith-black text-white hover:bg-neolith-gray-900 px-7 py-4 text-sm font-semibold rounded",
  secondary:
    "bg-white border border-neolith-black text-neolith-black hover:bg-neolith-gray-50 px-7 py-4 text-sm font-semibold rounded",
  ghost: "text-neolith-black hover:opacity-70 text-sm font-semibold",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: Props) {
  const classes = `${variants[variant]} inline-flex items-center justify-center transition-colors ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
