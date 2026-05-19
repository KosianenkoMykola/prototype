import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { getBlogPostBySlug } from "./data";

type Props = {
  slug: string;
};

export function ArticlePage({ slug }: Props) {
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Головна", href: "/" },
          { label: "Блог", href: "/blog" },
          { label: "Імплантація" },
        ]}
      />

      <section className="bg-white py-10 md:py-14">
        <Container className="max-w-4xl">
          <p className="text-xs font-semibold tracking-[2px] text-neolith-gray-600 uppercase">
            {post.categoryLabel}
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-neolith-black md:text-[40px] md:leading-[50px]">
            {post.title}
          </h1>
          <div className="mt-8 flex items-center gap-4">
            <ImagePlaceholder label="" className="h-12 w-12 shrink-0 rounded-full" />
            <div>
              <p className="font-medium text-neolith-black">{post.author}</p>
              <p className="text-sm text-neolith-gray-600">
                {post.authorRole}
                {post.date ? ` • ${post.date}` : ""} • {post.readTime}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-12">
        <Container>
          <ImagePlaceholder label="Обкладинка статті" aspect="video" className="min-h-[400px] md:min-h-[560px] w-full" />
        </Container>
      </section>

      <section className="bg-white pb-20">
        <Container className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          <aside className="hidden lg:block">
            <nav className="sticky top-28 rounded border border-neolith-gray-200 bg-neolith-gray-50 p-6">
              <p className="text-[11px] font-semibold tracking-wide text-neolith-gray-600 uppercase">
                У ЦІЙ СТАТТІ
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {post.toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#section-${item.id}`}
                      className="text-sm text-neolith-black hover:opacity-70"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <article className="max-w-[760px] space-y-10">
            <p className="text-base leading-7 text-neolith-gray-600">{post.intro}</p>
            {post.sections.map((section, i) => (
              <div key={section.heading} id={`section-${post.toc[i]?.id ?? i}`} className="space-y-4">
                <h2 className="text-2xl font-bold text-neolith-black">{section.heading}</h2>
                <p className="text-base leading-7 text-neolith-gray-600">{section.body}</p>
              </div>
            ))}
          </article>
        </Container>
      </section>

      <section className="border-t border-neolith-gray-200 bg-neolith-gray-50 py-12">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 rounded border border-neolith-gray-200 bg-white p-8 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <ImagePlaceholder label="Фото" className="h-24 w-24 shrink-0 rounded" />
              <div>
                <p className="text-lg font-semibold text-neolith-black">
                  Хочете обговорити свій випадок з автором?
                </p>
                <p className="mt-1 text-sm text-neolith-gray-600">
                  {post.author} — {post.authorRole}. Прийом у Neolith, Вроцлав.
                </p>
              </div>
            </div>
            <Button href="/consultation">Записатись</Button>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container className="flex flex-col gap-10">
          <h2 className="text-3xl font-bold text-neolith-black">Читати далі</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {post.related.map((r) => (
              <Link
                key={r.title}
                href={`/blog/${r.slug}`}
                className="group overflow-hidden rounded border border-neolith-gray-200 bg-white transition-shadow hover:shadow-md"
              >
                <ImagePlaceholder label="Обкладинка" aspect="video" className="h-[200px] rounded-none w-full" />
                <div className="p-6">
                  <p className="font-semibold text-neolith-black group-hover:opacity-80">{r.title}</p>
                  <p className="mt-2 text-xs text-neolith-gray-600">{r.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
