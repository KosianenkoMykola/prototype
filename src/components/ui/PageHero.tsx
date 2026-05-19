import { Container } from "./Container";

type Props = {
  label: string;
  title: string | React.ReactNode;
  description?: string;
  children?: React.ReactNode;
  dark?: boolean;
};

export function PageHero({ label, title, description, children, dark = false }: Props) {
  return (
    <section
      className={`py-16 md:py-24 ${dark ? "bg-neolith-black text-white" : "bg-white"}`}
    >
      <Container className="flex flex-col gap-6">
        <p
          className={`text-xs font-semibold tracking-[2px] uppercase ${
            dark ? "text-neolith-gray-400" : "text-neolith-gray-600"
          }`}
        >
          {label}
        </p>
        <h1
          className={`max-w-4xl text-4xl font-bold leading-tight md:text-[56px] md:leading-[64px] ${
            dark ? "text-white" : "text-neolith-black"
          }`}
        >
          {title}
        </h1>
        {description && (
          <p
            className={`max-w-2xl text-lg leading-[30px] ${
              dark ? "text-neolith-gray-400" : "text-neolith-gray-600"
            }`}
          >
            {description}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
