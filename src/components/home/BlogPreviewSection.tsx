import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeader } from "@/components/ui/SectionHeader";

const posts = [
  {
    category: "ІМПЛАНТАЦІЯ",
    title: "Як обрати імплант: Straumann, Nobel чи Osstem",
    readTime: "6 хв читання",
    href: "/blog/yak-obraty-implant",
  },
  {
    category: "ІМПЛАНТАЦІЯ",
    title: "Вініри vs люмініри: чим вони відрізняються насправді",
    readTime: "4 хв читання",
    href: "/blog/viniri-vs-luminiry",
  },
  {
    category: "ПОРАДИ",
    title: "Що робити після видалення зуба мудрості: чек-лист на 7 днів",
    readTime: "5 хв читання",
    href: "/blog/pislia-vydalennia-mudrosti",
  },
];

export function BlogPreviewSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container className="flex flex-col gap-12">
        <SectionHeader
          label="БЛОГ"
          title="Розбираємось у деталях."
          linkHref="/blog"
          linkLabel="Усі статті →"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              className="group overflow-hidden rounded border border-neolith-gray-200 bg-white transition-shadow hover:shadow-md"
            >
              <ImagePlaceholder label="Обкладинка" aspect="video" className="rounded-none w-full" />
              <div className="flex flex-col gap-2 p-7">
                <p className="text-[11px] font-semibold tracking-wide text-neolith-gray-600 uppercase">
                  {post.category}
                </p>
                <h3 className="text-lg font-semibold leading-snug text-neolith-black group-hover:opacity-80">
                  {post.title}
                </h3>
                <p className="text-xs text-neolith-gray-400">{post.readTime}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
