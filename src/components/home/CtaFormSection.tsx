import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CtaFormSection() {
  return (
    <section className="bg-neolith-gray-50 py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col justify-center gap-6">
            <h2 className="text-3xl font-bold leading-tight text-neolith-black md:text-[40px] md:leading-[50px]">
              Запишіться на безкоштовну онлайн-консультацію.
            </h2>
            <p className="max-w-md text-base leading-[26px] text-neolith-gray-600">
              Прикріпіть фото — лікар відповість, що з вами та які варіанти лікування.
            </p>
          </div>
          <form className="rounded border border-neolith-gray-200 bg-white p-10">
            <div className="flex flex-col gap-6">
              <label className="flex flex-col gap-2 text-sm text-neolith-black">
                Імʼя
                <input
                  type="text"
                  placeholder="Ваше імʼя"
                  className="rounded border border-neolith-gray-200 px-4 py-3 text-base outline-none focus:border-neolith-black"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-neolith-black">
                Телефон або email
                <input
                  type="text"
                  placeholder="+48 000 000 000"
                  className="rounded border border-neolith-gray-200 px-4 py-3 text-base outline-none focus:border-neolith-black"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-neolith-black">
                Опис ситуації (за бажанням)
                <input
                  type="text"
                  placeholder="Розкажіть коротко, що турбує…"
                  className="rounded border border-neolith-gray-200 px-4 py-3 text-base outline-none focus:border-neolith-black"
                />
              </label>
              <button
                type="button"
                className="rounded border border-dashed border-neolith-gray-200 py-3 text-sm text-neolith-gray-600 hover:border-neolith-gray-400"
              >
                📎 Прикріпити фото або скан (не обовʼязково)
              </button>
              <Button type="submit" className="w-full justify-center">
                Надіслати — лікар відповість протягом 24 годин
              </Button>
              <p className="text-[11px] text-neolith-gray-400">
                Натискаючи кнопку, ви погоджуєтесь з політикою конфіденційності.
              </p>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
