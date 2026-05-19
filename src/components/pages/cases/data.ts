export type CaseCategory =
  | "implantaciya"
  | "viniri"
  | "ortodontiya"
  | "rekonstrukciya"
  | "dytiachi"
  | "hirurgiya";

export type CaseListItem = {
  slug: string;
  title: string;
  patient: string;
  doctor: string;
  duration: string;
  category: CaseCategory;
};

export type CaseTimelineStep = {
  period: string;
  text: string;
};

export type CaseCostRow = {
  label: string;
  price: string;
};

export type CaseDetail = CaseListItem & {
  categoryLabel: string;
  specialty: string;
  visits: string;
  storyTitle: string;
  story: string;
  timeline: CaseTimelineStep[];
  totalCost: string;
  costNote: string;
  costRows: CaseCostRow[];
};

export const caseFilters: { id: "all" | CaseCategory; label: string }[] = [
  { id: "all", label: "Усі кейси" },
  { id: "implantaciya", label: "Імплантація" },
  { id: "viniri", label: "Вініри" },
  { id: "ortodontiya", label: "Ортодонтія" },
  { id: "rekonstrukciya", label: "Реконструкція" },
  { id: "dytiachi", label: "Дитячі" },
];

export const casesList: CaseListItem[] = [
  {
    slug: "viniry-e-max-8",
    title: "Вініри E-max, 8 одиниць",
    patient: "Анна, 34",
    doctor: "д-р Каміла Новак",
    duration: "6 тижнів",
    category: "viniri",
  },
  {
    slug: "all-on-4-nizhnya",
    title: "All-on-4 нижня щелепа",
    patient: "Маріуш, 58",
    doctor: "д-р Томаш Вуйцик",
    duration: "3 місяці",
    category: "implantaciya",
  },
  {
    slug: "implant-koronka",
    title: "Імплант + цирконієва коронка",
    patient: "Олег, 42",
    doctor: "д-р Томаш Вуйцик",
    duration: "4 місяці",
    category: "implantaciya",
  },
  {
    slug: "invisalign-9-misyaciv",
    title: "Інвізалайн, 9 місяців",
    patient: "Малгожата, 27",
    doctor: "д-р Анна Ковальська",
    duration: "9 місяців",
    category: "ortodontiya",
  },
  {
    slug: "rekonstrukciya-perednih",
    title: "Реконструкція передніх зубів",
    patient: "Олена, 41",
    doctor: "д-р Каміла Новак",
    duration: "5 тижнів",
    category: "rekonstrukciya",
  },
  {
    slug: "vidalennya-mudrosti",
    title: "Видалення зубів мудрості (4)",
    patient: "Петр, 31",
    doctor: "д-р Пьотр Левандовський",
    duration: "1 візит",
    category: "hirurgiya",
  },
  {
    slug: "vidbilyuvannya-viniri",
    title: "Відбілювання Zoom + 4 вініри",
    patient: "Магда, 28",
    doctor: "д-р Каміла Новак",
    duration: "2 місяці",
    category: "viniri",
  },
  {
    slug: "dytiache-likuvannya",
    title: "Лікування у дитини, 8 років",
    patient: "Маленька Зося",
    doctor: "д-р Якуб Зелінський",
    duration: "3 візити",
    category: "dytiachi",
  },
  {
    slug: "kompozyt-6-zubiv",
    title: "Композитні реставрації, 6 зубів",
    patient: "Якуб, 39",
    doctor: "д-р Магдалена Кравчик",
    duration: "2 тижні",
    category: "rekonstrukciya",
  },
];

const caseDetails: Record<string, Omit<CaseDetail, keyof CaseListItem>> = {
  "viniry-e-max-8": {
    categoryLabel: "КЕЙС • ЕСТЕТИЧНА СТОМАТОЛОГІЯ",
    specialty: "Естетична стоматологія",
    visits: "5",
    storyTitle: "«Я довго відкладала.»",
    story:
      "«Я працюю у консалтингу — багато виступаю перед клієнтами. Завжди соромилась посміхатись на повну. Зуби були нерівні, з пігментацією від кави і вина. До 33 років переконувала себе, що це нормально. Коли вирішила робити вініри, пішла на консультацію у три клініки. У двох мені одразу запропонували комплект із 20 вінірів — це здалось перебором. Каміла подивилась і сказала: «Вам потрібно 8. Решта — здорові зуби, не чіпайте їх». Цифрова модель показала, як це буде виглядати. Спочатку не повірила, що це я. Через 6 тижнів — це була я, тільки впевненіша.»",
    timeline: [
      { period: "Тиждень 0", text: "Консультація, 3D-сканування, цифрове моделювання" },
      { period: "Тиждень 1", text: "Узгодження дизайну вінірів — Анна обрала відтінок та форму" },
      { period: "Тиждень 2", text: "Препарування зубів, встановлення тимчасових вінірів (3 години)" },
      { period: "Тиждень 4", text: "Примірка постійних вінірів" },
      { period: "Тиждень 6", text: "Фінальна фіксація, контрольне фото, передача гарантії" },
    ],
    totalCost: "21 800 zł",
    costNote: "8 вінірів E-max + цифрове моделювання + контроль",
    costRows: [
      { label: "Консультація + сканування", price: "Безкоштовно" },
      { label: "Цифрове моделювання посмішки", price: "1 200 zł" },
      { label: "8 вінірів E-max", price: "20 800 zł" },
      { label: "Контрольні візити (3)", price: "Безкоштовно" },
    ],
  },
};

const defaultDetail = (
  item: CaseListItem
): Omit<CaseDetail, keyof CaseListItem> => ({
  categoryLabel: "КЕЙС",
  specialty: "Стоматологія",
  visits: "—",
  storyTitle: "Історія пацієнта",
  story: `Пацієнт ${item.patient} звернувся до клініки Neolith. Лікування проводив ${item.doctor}. Термін лікування — ${item.duration}. Детальний протокол узгоджується індивідуально після огляду та діагностики.`,
  timeline: [
    { period: "Крок 1", text: "Консультація та діагностика" },
    { period: "Крок 2", text: "План лікування та узгодження" },
    { period: "Крок 3", text: "Основні етапи лікування" },
    { period: "Крок 4", text: "Контроль та завершення" },
  ],
  totalCost: "За планом",
  costNote: "Орієнтовна вартість після огляду",
  costRows: [
    { label: "Консультація", price: "Безкоштовно онлайн" },
    { label: "План лікування", price: "Безкоштовно" },
  ],
});

export function getCaseBySlug(slug: string): CaseDetail | undefined {
  const item = casesList.find((c) => c.slug === slug);
  if (!item) return undefined;
  const detail = caseDetails[slug] ?? defaultDetail(item);
  return { ...item, ...detail };
}

export function filterCases(category: "all" | CaseCategory): CaseListItem[] {
  if (category === "all") return casesList;
  return casesList.filter((c) => c.category === category);
}
