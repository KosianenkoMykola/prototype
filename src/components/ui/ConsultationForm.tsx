import { Button } from "./Button";

type Props = {
  className?: string;
  compact?: boolean;
};

export function ConsultationForm({ className = "", compact }: Props) {
  return (
    <form
      className={`rounded border border-neolith-gray-200 bg-white p-8 md:p-10 ${className}`}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="mb-7 flex flex-col gap-1">
        <h2 className="text-2xl font-bold text-neolith-black">Заповніть форму</h2>
        <p className="text-sm text-neolith-gray-600">Це займе 2 хвилини.</p>
      </div>
      <div className="flex flex-col gap-5">
        <label className="flex flex-col gap-2 text-sm text-neolith-black">
          Імʼя
          <input
            type="text"
            placeholder="Ваше імʼя"
            className="rounded border border-neolith-gray-200 px-4 py-3 text-base outline-none focus:border-neolith-black"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-neolith-black">
          Контакт для звʼязку
          <input
            type="text"
            placeholder="Телефон, email або @ у Telegram"
            className="rounded border border-neolith-gray-200 px-4 py-3 text-base outline-none focus:border-neolith-black"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-neolith-black">
          З чим звертаєтесь?
          <input
            type="text"
            placeholder="Болить зуб, хочу вініри, потрібна імплантація…"
            className="rounded border border-neolith-gray-200 px-4 py-3 text-base outline-none focus:border-neolith-black"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-neolith-black">
          Опис ситуації
          <textarea
            rows={compact ? 3 : 4}
            placeholder="Що болить, з якого часу, чи вже лікувалися…"
            className="resize-none rounded border border-neolith-gray-200 px-4 py-3 text-base outline-none focus:border-neolith-black"
          />
        </label>
        <button
          type="button"
          className="rounded border border-dashed border-neolith-gray-200 py-4 text-center text-sm text-neolith-gray-600 hover:border-neolith-gray-400"
        >
          📎 Прикріпити 1-3 фото зубів (опціонально, але рекомендуємо)
        </button>
        <Button type="submit" className="w-full justify-center">
          Надіслати — лікар відповість протягом 24 годин
        </Button>
        {!compact && (
          <p className="text-[11px] text-neolith-gray-400">
            Натискаючи кнопку, ви погоджуєтесь з політикою конфіденційності.
          </p>
        )}
      </div>
    </form>
  );
}
