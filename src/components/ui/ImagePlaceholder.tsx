type Props = {
  label: string;
  className?: string;
  aspect?: "video" | "square" | "portrait" | "hero";
};

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  hero: "min-h-[280px] md:min-h-[620px]",
};

export function ImagePlaceholder({ label, className = "", aspect = "video" }: Props) {
  return (
    <div
      className={`flex items-center justify-center rounded bg-neolith-gray-100 text-sm font-medium text-neolith-gray-600 ${aspectClasses[aspect]} ${className}`}
    >
      {label}
    </div>
  );
}
