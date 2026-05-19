"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { BlogArticleCard } from "./BlogArticleCard";
import {
  blogFilters,
  featuredPost,
  filterBlogPosts,
  type BlogCategory,
} from "./data";

export function BlogPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | BlogCategory>("all");
  const filtered = filterBlogPosts(activeFilter);

  return (
    <main>
      <section className="bg-white py-16 md:py-24">
        <Container className="flex flex-col gap-6">
          <p className="text-xs font-semibold tracking-[2px] text-neolith-gray-600 uppercase">
            БЛОГ
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-neolith-black md:text-[56px] md:leading-[64px]">
            Розбираємось у деталях.
          </h1>
          <p className="max-w-[700px] text-lg leading-[30px] text-neolith-gray-600">
            Статті від наших лікарів — без копірайтерів, без води. Про матеріали, процеси,
            помилки, які ми бачимо у клініці щодня.
          </p>
        </Container>
      </section>

      <section className="border-t border-neolith-gray-200 bg-white pb-4">
        <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 items-center gap-3 rounded border border-neolith-gray-200 px-5 py-3.5">
            <span aria-hidden>🔍</span>
            <input
              type="search"
              placeholder="Шукати по статтях"
              className="w-full bg-transparent text-base outline-none placeholder:text-neolith-gray-600"
            />
          </div>
          <button
            type="button"
            className="flex shrink-0 items-center gap-2 rounded border border-neolith-gray-200 px-5 py-3.5 text-sm text-neolith-black"
          >
            Спочатку новіші <span className="text-xs">▼</span>
          </button>
        </Container>
      </section>

      <section className="bg-white pb-6">
        <Container>
          <div className="flex flex-wrap gap-3">
            {blogFilters.map((f) => (
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

      <section className="bg-white pb-12">
        <Container>
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group grid overflow-hidden rounded border border-neolith-gray-200 bg-white transition-shadow hover:shadow-md lg:grid-cols-[600px_1fr]"
          >
            <ImagePlaceholder label="Обкладинка" aspect="video" className="rounded-none min-h-full w-full" />
            <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
              <p className="text-[11px] font-semibold tracking-wide text-neolith-gray-600 uppercase">
                {featuredPost.categoryLabel}
              </p>
              <h2 className="text-2xl font-bold leading-snug text-neolith-black group-hover:opacity-80 md:text-[28px]">
                {featuredPost.title}
              </h2>
              <p className="text-sm leading-6 text-neolith-gray-600">{featuredPost.excerpt}</p>
              <p className="text-sm text-neolith-gray-600">
                {featuredPost.author} • {featuredPost.readTime} • {featuredPost.date}
              </p>
            </div>
          </Link>
        </Container>
      </section>

      <section className="bg-white pb-12">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <BlogArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-neolith-gray-200 bg-white py-10">
        <Container className="flex items-center justify-center gap-2">
          <button type="button" className="rounded border border-neolith-gray-200 px-4 py-2.5 text-sm">
            ←
          </button>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              className={`rounded border px-4 py-2.5 text-sm ${
                n === 1
                  ? "border-neolith-black bg-neolith-black text-white"
                  : "border-neolith-gray-200 text-neolith-black"
              }`}
            >
              {n}
            </button>
          ))}
          <button type="button" className="rounded border border-neolith-gray-200 px-4 py-2.5 text-sm">
            →
          </button>
        </Container>
      </section>
    </main>
  );
}
