import Link from "next/link";
import { Container } from "@/components/ui/Container";

const reviews = [
  {
    stars: "★★★★★",
    text: "Найкраща клініка, в якій я була за 15 років. Лікар Каміла все пояснила, показала 3D-модель, не було жодного болю. Ставила вініри — результат бомба.",
    author: "Олена К.",
  },
  {
    stars: "★★★★★",
    text: "Bardzo profesjonalny zespół. Dr Tomasz przeprowadził mi implantację. Cena adekwatna do jakości, polecam każdemu.",
    author: "Marcin W.",
  },
  {
    stars: "★★★★★",
    text: "Came from London for treatment — saved ~60% compared to UK prices. Quality is at least as good. Anna, the case manager, was amazing.",
    author: "John M.",
  },
];

export function GoogleReviewsSection() {
  return (
    <section className="bg-neolith-gray-50 py-16 md:py-20">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold tracking-[2px] text-neolith-gray-600 uppercase">
              GOOGLE ВІДГУКИ
            </p>
            <p className="text-3xl font-bold text-neolith-black md:text-[32px]">
              4.9 ★★★★★ • 127 відгуків
            </p>
          </div>
          <Link
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-neolith-black hover:opacity-70"
          >
            Дивитись на Google →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.author}
              className="rounded border border-neolith-gray-200 bg-white p-7"
            >
              <p className="text-lg text-amber-500">{r.stars}</p>
              <p className="mt-4 text-sm leading-[22px] text-neolith-gray-600">
                {r.text}
              </p>
              <p className="mt-6 text-sm font-medium text-neolith-black">
                {r.author}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
