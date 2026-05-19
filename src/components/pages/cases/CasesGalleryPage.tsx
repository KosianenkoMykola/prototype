"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { CaseCard } from "./CaseCard";
import { caseFilters, filterCases, type CaseCategory } from "./data";

export function CasesGalleryPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | CaseCategory>("all");
  const filtered = filterCases(activeFilter);

  return (
    <main>
      {/* Hero */}
      <section className="bg-white py-16 md:py-24">
        <Container className="flex flex-col gap-6">
          <p className="text-xs font-semibold tracking-[2px] text-neolith-gray-600 uppercase">
            ДО ТА ПІСЛЯ
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-neolith-black md:text-[56px] md:leading-[64px]">
            Кожна посмішка — нова історія.
          </h1>
          <p className="max-w-[700px] text-lg leading-[30px] text-neolith-gray-600">
            Реальні роботи наших лікарів. Познайомтесь з історіями пацієнтів, які вже
            змінили свою посмішку і життя на краще.
          </p>
        </Container>
      </section>

      {/* Filters */}
      <section className="bg-white pb-6">
        <Container>
          <div className="flex flex-wrap gap-3">
            {caseFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`rounded px-[18px] py-2.5 text-sm font-medium transition-colors ${
                  activeFilter === f.id
                    ? "bg-neolith-black text-white"
                    : "border border-neolith-gray-200 bg-white text-neolith-black hover:border-neolith-black"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Grid */}
      <section className="bg-white pb-20 pt-6">
        <Container>
          {filtered.length === 0 ? (
            <p className="py-12 text-center text-neolith-gray-600">
              У цій категорії поки немає кейсів.
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((c) => (
                <CaseCard key={c.slug} caseItem={c} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
