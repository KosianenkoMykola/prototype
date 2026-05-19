import { serviceDetailHref } from "./service-details";

export type SubService = {
  slug: string;
  title: string;
};

export type ServiceCategory = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  subServices: SubService[];
};

/** Категорії для індексу /services (фрейм 02 — Розділ послуг) */
export const serviceCategories: ServiceCategory[] = [
  {
    slug: "estetychna-stomatologiya",
    title: "Естетична стоматологія",
    subtitle: "Дизайн посмішки під ваше обличчя",
    description:
      "Вініри E-max, цифрове моделювання посмішки, відбілювання. Дизайн посмішки під ваше обличчя, не шаблон.",
    subServices: [
      { slug: "viniri-e-max", title: "Вініри E-max" },
      { slug: "digital-smile-design", title: "Цифрове моделювання посмішки" },
      { slug: "vidbilyuvannya-zoom", title: "Професійне відбілювання Zoom" },
      { slug: "kompozytni-restavraciyi", title: "Композитні реставрації" },
    ],
  },
  {
    slug: "implantaciya",
    title: "Імплантація",
    subtitle: "Прогнозований результат із 3D-плануванням",
    description:
      "Straumann, Nobel, протоколи All-on-4 та All-on-6. Заздалегідь знаєте, як буде виглядати результат — завдяки 3D-плануванню.",
    subServices: [
      { slug: "implant-straumann-pid-klyuch", title: "Імплант Straumann під ключ" },
      { slug: "implant-nobel-biocare", title: "Імплант Nobel Biocare" },
      { slug: "all-on-4", title: "All-on-4" },
      { slug: "kistkova-plastyka", title: "Кісткова пластика" },
    ],
  },
  {
    slug: "ortodontiya",
    title: "Ортодонтія",
    subtitle: "Прозоро, точно, без поспіху",
    description:
      "Invisalign, брекет-системи. Лікар-ортодонт із 10+ роками практики. Прозорі елайнери та фіксовані системи.",
    subServices: [
      { slug: "invisalign-povny-kurs", title: "Invisalign — повний курс" },
      { slug: "brekety-metal", title: "Брекет-система металева" },
      { slug: "brekety-keramika", title: "Брекет-система керамічна" },
      { slug: "reteinery", title: "Ретейнери після лікування" },
    ],
  },
  {
    slug: "terapiya-ta-profilaktyka",
    title: "Терапія та профілактика",
    subtitle: "Здоровʼя зубів — це регулярність",
    description:
      "Профілактика, лікування карієсу, ендодонтія. Регулярний догляд і своєчасне втручання без зайвих процедур.",
    subServices: [
      { slug: "chystka-poliruvannya", title: "Чистка + полірування" },
      { slug: "likuvannya-kariiesu", title: "Лікування карієсу" },
      { slug: "likuvannya-kanaliv", title: "Лікування кореневих каналів" },
      { slug: "restavraciya-perednih", title: "Реставрація передніх зубів" },
    ],
  },
  {
    slug: "hirurgiya",
    title: "Хірургія",
    subtitle: "Складні випадки під мікроскопом",
    description:
      "Видалення зубів мудрості, синус-ліфтинг, резекція. Хірургічні втручання під мікроскопом і сучасною анестезією.",
    subServices: [
      { slug: "vydalennia-mudrosti", title: "Видалення зуба мудрості" },
      { slug: "sinus-lifting", title: "Синус-ліфтинг" },
      { slug: "rezekciya-vershivky", title: "Резекція верхівки кореня" },
      { slug: "frenuloplasty", title: "Frenuloplasty" },
    ],
  },
  {
    slug: "dytiacha-stomatologiya",
    title: "Дитяча стоматологія",
    subtitle: "Спокійно, ігрово, безболісно",
    description:
      "Окремий кабінет, ігрова зона, лікар, який вміє говорити з дітьми. Перший візит — безкоштовно.",
    subServices: [
      { slug: "pershyi-vizyt", title: "Перший візит — знайомство" },
      { slug: "profilaktychnyi-ohlyad", title: "Профілактичний огляд" },
      { slug: "likuvannya-molochnogo", title: "Лікування молочного зуба" },
      { slug: "hermetizaciya-fisur", title: "Герметизація фісур" },
    ],
  },
];

export function subServiceHref(categorySlug: string, subSlug: string): string {
  return serviceDetailHref(categorySlug, subSlug);
}

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
    href: "/cases/all-on-4-nizhnya",
  },
  {
    title: "Імплантація + керамічна коронка",
    doctor: "Лікар: д-р Каміла Новак",
    duration: "Термін лікування: 4 місяці",
    href: "/cases/implant-koronka",
  },
  {
    title: "Інвізалайн, 9 місяців",
    doctor: "Лікар: д-р Анна Ковальська",
    duration: "Термін лікування: 9 місяців",
    href: "/cases/invisalign-9-misyaciv",
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
