import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Neolith — Стоматологія преміум-класу, Вроцлав",
  description:
    "Цифрова стоматологія, лікування під сном і команда лікарів преміум-класу у Вроцлаві.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
