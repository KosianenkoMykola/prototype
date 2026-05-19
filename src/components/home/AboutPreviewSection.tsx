import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function AboutPreviewSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container className="flex flex-col gap-16">
        <SectionHeader
          label="ПРО НАС"
          title="Клініка, яка закриває всі потреби."
          linkHref="/doctors"
          linkLabel="Усі лікарі →"
        />
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl font-bold leading-tight text-neolith-black md:text-[44px] md:leading-[1.2]">
              Ми створили Neolith, бо стоматологія може бути інакшою
            </h3>
            <p className="max-w-[540px] text-base leading-7 text-neolith-gray-600">
              Більшість людей відкладають похід до стоматолога — через страх, зайнятість або
              відчуття що «ще потерплю». Neolith ми будували з однієї ідеї: стоматологія має
              бути місцем, куди хочеться повертатись.
            </p>
          </div>
          <ImagePlaceholder label="Фото / 3D-візуалізація імпланту" aspect="hero" className="min-h-full w-full" />
        </div>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ImagePlaceholder label="Фото / 3D-візуалізація імпланту" aspect="hero" className="order-2 lg:order-1 min-h-full w-full" />
          <div className="order-1 flex flex-col gap-6 lg:order-2">
            <h3 className="text-3xl font-bold leading-tight text-neolith-black md:text-[44px]">
              Місце, куди хочеться повертатись
            </h3>
            <p className="max-w-[540px] text-base leading-7 text-neolith-gray-600">
              Тут немає зайвих процедур і прихованих цін. Є лікарі, які обрали Neolith свідомо —
              і пацієнти, що повертаються роками.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/consultation">Записатись на консультацію</Button>
              <Button href="/about" variant="secondary">
                Детальніше про клініку
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
