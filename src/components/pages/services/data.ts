export type SubService = {
  title: string;
  href: string;
};

export type ServiceCategory = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  subServices: SubService[];
};

/** Категорії для індексу /services (замість фрейму «Каталог») */
export const serviceCategories: ServiceCategory[] = [
  {
    slug: "estetychna-stomatologiya",
    title: "Естетична стоматологія",
    subtitle: "Дизайн посмішки під ваше обличчя",
    description:
      "Вініри E-max, цифрове моделювання посмішки, відбілювання. Дизайн посмішки під ваше обличчя, не шаблон.",
    subServices: [
      { title: "Вініри E-max", href: "/services/estetychna-stomatologiya" },
      { title: "Цифрове моделювання посмішки", href: "/services/estetychna-stomatologiya" },
      { title: "Професійне відбілювання Zoom", href: "/services/estetychna-stomatologiya" },
      { title: "Композитні реставрації", href: "/services/estetychna-stomatologiya" },
    ],
  },
  {
    slug: "implantaciya",
    title: "Імплантація",
    subtitle: "Прогнозований результат із 3D-плануванням",
    description:
      "Straumann, Nobel, протоколи All-on-4 та All-on-6. Заздалегідь знаєте, як буде виглядати результат — завдяки 3D-плануванню.",
    subServices: [
      { title: "Імплант Straumann під ключ", href: "/services/implantation" },
      { title: "Імплант Nobel Biocare", href: "/services/implantation" },
      { title: "All-on-4", href: "/services/implantation" },
      { title: "Кісткова пластика", href: "/services/implantation" },
    ],
  },
  {
    slug: "ortodontiya",
    title: "Ортодонтія",
    subtitle: "Прозоро, точно, без поспіху",
    description:
      "Invisalign, брекет-системи. Лікар-ортодонт із 10+ роками практики. Прозорі елайнери та фіксовані системи.",
    subServices: [
      { title: "Invisalign — повний курс", href: "/services/ortodontiya" },
      { title: "Брекет-система металева", href: "/services/ortodontiya" },
      { title: "Брекет-система керамічна", href: "/services/ortodontiya" },
      { title: "Ретейнери після лікування", href: "/services/ortodontiya" },
    ],
  },
  {
    slug: "terapiya-ta-profilaktyka",
    title: "Терапія та профілактика",
    subtitle: "Здоровʼя зубів — це регулярність",
    description:
      "Профілактика, лікування карієсу, ендодонтія. Регулярний догляд і своєчасне втручання без зайвих процедур.",
    subServices: [
      { title: "Чистка + полірування", href: "/services/terapiya-ta-profilaktyka" },
      { title: "Лікування карієсу", href: "/services/terapiya-ta-profilaktyka" },
      { title: "Лікування кореневих каналів", href: "/services/terapiya-ta-profilaktyka" },
      { title: "Реставрація передніх зубів", href: "/services/terapiya-ta-profilaktyka" },
    ],
  },
  {
    slug: "hirurgiya",
    title: "Хірургія",
    subtitle: "Складні випадки під мікроскопом",
    description:
      "Видалення зубів мудрості, синус-ліфтинг, резекція. Хірургічні втручання під мікроскопом і сучасною анестезією.",
    subServices: [
      { title: "Видалення зуба мудрості", href: "/services/hirurgiya" },
      { title: "Синус-ліфтинг", href: "/services/hirurgiya" },
      { title: "Резекція верхівки кореня", href: "/services/hirurgiya" },
      { title: "Frenuloplasty", href: "/services/hirurgiya" },
    ],
  },
  {
    slug: "dytiacha-stomatologiya",
    title: "Дитяча стоматологія",
    subtitle: "Спокійно, ігрово, безболісно",
    description:
      "Окремий кабінет, ігрова зона, лікар, який вміє говорити з дітьми. Перший візит — безкоштовно.",
    subServices: [
      { title: "Перший візит — знайомство", href: "/services/dytiacha-stomatologiya" },
      { title: "Профілактичний огляд", href: "/services/dytiacha-stomatologiya" },
      { title: "Лікування молочного зуба", href: "/services/dytiacha-stomatologiya" },
      { title: "Герметизація фісур", href: "/services/dytiacha-stomatologiya" },
    ],
  },
];

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((c) => c.slug === slug);
}

export const sectionCases = [
  {
    title: "Вініри E-max, 8 одиниць",
    doctor: "Лікар: д-р Каміла Новак",
    duration: "Термін лікування: 6 тижнів",
    href: "/cases/viniry-e-max-8",
  },
  {
    title: "All-on-4 верхня щелепа",
    doctor: "Лікар: д-р Томаш Вуйцик",
    duration: "Термін лікування: 3 місяці",
    href: "/cases/viniry-e-max-8",
  },
  {
    title: "Імплантація + керамічна коронка",
    doctor: "Лікар: д-р Каміла Новак",
    duration: "Термін лікування: 4 місяці",
    href: "/cases/viniry-e-max-8",
  },
  {
    title: "Інвізалайн, 9 місяців",
    doctor: "Лікар: д-р Анна Ковальська",
    duration: "Термін лікування: 9 місяців",
    href: "/cases/viniry-e-max-8",
  },
];

export const sectionDoctors = [
  {
    name: "Д-р Каміла Новак",
    specialty: "Естетична стоматологія, вініри",
    experience: "14 років практики",
    href: "/doctors/kamila-novak",
  },
  {
    name: "Д-р Томаш Вуйцик",
    specialty: "Імплантологія, хірургія",
    experience: "18 років практики",
    href: "/doctors/kamila-novak",
  },
  {
    name: "Д-р Анна Ковальська",
    specialty: "Ортодонтія, Invisalign",
    experience: "11 років практики",
    href: "/doctors",
  },
  {
    name: "Д-р Якуб Зелінський",
    specialty: "Дитяча стоматологія",
    experience: "9 років практики",
    href: "/doctors",
  },
];

export const sectionFaqs = [
  {
    q: "Скільки коштує консультація?",
    a: "Перша онлайн-консультація — безкоштовно. Очний огляд з діагностикою — вартість озвучує адміністратор.",
  },
  {
    q: "Як проходить лікування під сном?",
    a: "Під контролем анестезіолога у клініці з реанімаційним обладнанням. Можна пройти кілька етапів за один візит.",
  },
  {
    q: "Чи можна оплатити в розстрочку?",
    a: "Так, доступна розстрочка 0% на 12 місяців та поетапна оплата за планом лікування.",
  },
  {
    q: "Чи приймаєте іноземних пацієнтів? Якою мовою спілкуєтеся?",
    a: "Так. Команда спілкується українською, польською та англійською.",
  },
  {
    q: "Яка гарантія на ваші роботи?",
    a: "Гарантія до 10 років на імплантацію та протезування — залежно від типу роботи.",
  },
  {
    q: "Як записатись на безкоштовну онлайн-консультацію?",
    a: "Заповніть форму на сайті або зателефонуйте — лікар відповість протягом 24 годин.",
  },
];
