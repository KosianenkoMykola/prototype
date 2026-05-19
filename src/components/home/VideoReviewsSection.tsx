import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeader } from "@/components/ui/SectionHeader";

const reviews = [
  { name: "Анна, 34", treatment: "Імплантація 2 зубів" },
  { name: "Марцін, 41", treatment: "Повна реконструкція посмішки" },
  { name: "Олена, 29", treatment: "Вініри + відбілювання" },
];

export function VideoReviewsSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container className="flex flex-col gap-12">
        <SectionHeader label="ВІДГУКИ ПАЦІЄНТІВ" title="Історії наших пацієнтів." />
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.name} className="overflow-hidden rounded border border-neolith-gray-200">
              <ImagePlaceholder label="▶ Відеовідгук" aspect="video" className="min-h-[320px] rounded-none w-full" />
              <div className="border-t border-neolith-gray-200 px-6 py-5">
                <p className="font-semibold text-neolith-black">{r.name}</p>
                <p className="text-sm text-neolith-gray-600">{r.treatment}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="text-xs text-neolith-gray-400">
          Відеовідгуки зʼявляться у перші 5 місяців роботи клініки.
        </p>
      </Container>
    </section>
  );
}
