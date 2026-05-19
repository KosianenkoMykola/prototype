import type { ServiceDetail } from "./service-detail-types";

const defaultProcess = (topic: string): ServiceDetail["processSteps"] => [
  {
    num: "01",
    title: "Безкоштовна онлайн-консультація",
    text: `Опишіть ситуацію — лікар оцінить, чи підходить вам ${topic}, і які є варіанти.`,
  },
  {
    num: "02",
    title: "Огляд і діагностика",
    text: "3D-сканування, фото, аналіз. Ви бачите план до початку лікування.",
  },
  {
    num: "03",
    title: "План лікування",
    text: "Етапи, терміни, повна вартість — без прихованих платежів.",
  },
  {
    num: "04",
    title: "Лікування",
    text: "Процедури за протоколом клініки. Можливо під седацією.",
  },
  {
    num: "05",
    title: "Контроль і гарантія",
    text: "Контрольні візити та гарантія на виконану роботу.",
  },
];

const defaultFaqs: ServiceDetail["faqs"] = [
  {
    q: "Скільки коштує консультація?",
    a: "Перша онлайн-консультація — безкоштовно. Очний огляд — вартість озвучує адміністратор.",
  },
  {
    q: "Чи можна оплатити в розстрочку?",
    a: "Так, розстрочка 0% на 12 місяців та поетапна оплата за планом лікування.",
  },
  {
    q: "Чи боляче?",
    a: "Сучасна анестезія та седація роблять процедури комфортними. Дискомфорт мінімальний.",
  },
  {
    q: "Яка гарантія?",
    a: "Гарантія на роботу — до 10 років, залежно від типу послуги.",
  },
];

/** Повний контент імплантації (фрейм 03) */
const implantStraumann: ServiceDetail = {
  categorySlug: "implantaciya",
  categoryTitle: "Імплантація",
  slug: "implant-straumann-pid-klyuch",
  label: "ІМПЛАНТАЦІЯ",
  title: "Імплант Straumann під ключ.",
  description:
    "Працюємо тільки з імплантами Straumann (Швейцарія) — світовий стандарт приживлюваності. До встановлення — 3D-сканування і цифрове планування.",
  heroStats: [
    { value: "98.4%", label: "приживлюваність" },
    { value: "10 років", label: "гарантія" },
    { value: "від 6 200 zł", label: "під ключ" },
  ],
  imageLabel: "Фото / 3D-візуалізація імпланту",
  processSteps: [
    {
      num: "01",
      title: "Безкоштовна онлайн-консультація",
      text: "Прикріплюєте фото — лікар каже, що з вами і чи підходите для імплантації.",
    },
    {
      num: "02",
      title: "Огляд і 3D-сканування",
      text: "Конусно-променева томографія. Ви бачите щелепу у 3D.",
    },
    {
      num: "03",
      title: "Цифрове планування",
      text: "Моделювання положення імпланту. Макет результату до операції.",
    },
    {
      num: "04",
      title: "Встановлення імпланту",
      text: "30–60 хвилин. Безболісно. Можливо під сном.",
    },
    {
      num: "05",
      title: "Приживлення (3–6 місяців)",
      text: "Тимчасова коронка. Контроль кожні 4–6 тижнів.",
    },
    {
      num: "06",
      title: "Постійна коронка",
      text: "Цирконієва або керамічна коронка на цифровий зліпок.",
    },
  ],
  materials: [
    {
      name: "Straumann",
      country: "Швейцарія",
      description: "Найвища приживлюваність — 98.6%. Безстрокова гарантія від виробника.",
    },
    {
      name: "Nobel Biocare",
      country: "США / Швеція",
      description: "Піонери імплантації. Різьба TiUnite — приживлюється швидше.",
    },
    {
      name: "Osstem",
      country: "Південна Корея",
      description: "Бюджетна альтернатива. Якісно, з прогнозованим результатом.",
    },
  ],
  doctors: [
    {
      name: "Д-р Томаш Вуйцик",
      role: "Хірург, імплантолог",
      meta: "18 років практики • 2 400+ імплантів",
      href: "/doctors/kamila-novak",
    },
    {
      name: "Д-р Каміла Новак",
      role: "Естетична імплантологія",
      meta: "14 років практики • front zone",
      href: "/doctors/kamila-novak",
    },
  ],
  cases: [
    { title: "Імплант + коронка, 1 одиниця", meta: "д-р Томаш • 2 місяці", href: "/cases/implant-koronka" },
    { title: "Імплантація 4 верхніх зубів", meta: "д-р Томаш • 5 місяців", href: "/cases/implant-koronka" },
    { title: "All-on-4, нижня щелепа", meta: "д-р Томаш • 3 місяці", href: "/cases/all-on-4-nizhnya" },
  ],
  priceTitle: "Скільки коштує імплант Straumann.",
  priceRows: [
    { name: "Імплант Straumann + коронка цирконій", price: "6 200 zł" },
    { name: "Кісткова пластика (при потребі)", price: "від 2 400 zł" },
    { name: "3D-сканування і планування", price: "Безкоштовно" },
  ],
  faqs: [
    {
      q: "Чи боляче ставити імплант?",
      a: "Ні — під місцевою анестезією або седацією. Легкий дискомфорт 2–3 дні.",
    },
    {
      q: "Скільки часу займає весь процес?",
      a: "Від імпланту до коронки — 3–6 місяців.",
    },
    {
      q: "Який термін гарантії?",
      a: "10 років від клініки. Straumann — безстрокова гарантія виробника.",
    },
    ...defaultFaqs.slice(0, 2),
  ],
  ctaTitle: "Готові обговорити свій випадок?",
  ctaText:
    "Опишіть ситуацію, прикріпіть фото — лікар відповість, скільки імплантів потрібно і яка вартість. Безкоштовно.",
};

function makeDetail(
  partial: Pick<
    ServiceDetail,
    "categorySlug" | "categoryTitle" | "slug" | "label" | "title" | "description"
  > & {
    heroStats?: ServiceDetail["heroStats"];
    imageLabel?: string;
    processSteps?: ServiceDetail["processSteps"];
    materials?: ServiceDetail["materials"];
    doctors?: ServiceDetail["doctors"];
    cases?: ServiceDetail["cases"];
    priceTitle?: string;
    priceRows?: ServiceDetail["priceRows"];
    faqs?: ServiceDetail["faqs"];
    ctaTitle?: string;
    ctaText?: string;
  }
): ServiceDetail {
  const category = partial.categoryTitle;
  return {
    heroStats: [
      { value: "60 хв", label: "консультація" },
      { value: "10 років", label: "гарантія" },
      { value: "від 300 zł", label: "огляд" },
    ],
    imageLabel: "Фото процедури",
    processSteps: defaultProcess(category.toLowerCase()),
    doctors: [
      {
        name: "Д-р Каміла Новак",
        role: category,
        meta: "14 років практики",
        href: "/doctors/kamila-novak",
      },
    ],
    cases: [
      {
        title: `Кейс: ${partial.title.replace(/\.$/, "")}`,
        meta: "Neolith • реальний пацієнт",
        href: "/cases/viniry-e-max-8",
      },
    ],
    priceTitle: `Вартість: ${partial.title.replace(/\.$/, "")}`,
    priceRows: [
      { name: partial.title.replace(/\.$/, ""), price: "за планом" },
      { name: "Консультація онлайн", price: "Безкоштовно" },
      { name: "3D-сканування", price: "400 zł" },
    ],
    faqs: defaultFaqs,
    ctaTitle: "Не знаєте, з чого почати?",
    ctaText: "Опишіть проблему — лікар підкаже, що робити. Безкоштовно, протягом 24 годин.",
    ...partial,
  };
}

export const serviceDetails: ServiceDetail[] = [
  implantStraumann,
  makeDetail({
    categorySlug: "implantaciya",
    categoryTitle: "Імплантація",
    slug: "implant-nobel-biocare",
    label: "ІМПЛАНТАЦІЯ",
    title: "Імплант Nobel Biocare.",
    description:
      "Nobel Biocare — піонери імплантології, протоколи All-on-4. Висока первинна стабільність і передбачуваний результат.",
    heroStats: [
      { value: "98%", label: "приживлюваність" },
      { value: "10 років", label: "гарантія" },
      { value: "від 6 800 zł", label: "під ключ" },
    ],
    materials: implantStraumann.materials,
    doctors: implantStraumann.doctors,
    priceRows: [
      { name: "Імплант Nobel + коронка", price: "6 800 zł" },
      { name: "All-on-4", price: "від 32 000 zł" },
      { name: "Планування", price: "Безкоштовно" },
    ],
  }),
  makeDetail({
    categorySlug: "implantaciya",
    categoryTitle: "Імплантація",
    slug: "all-on-4",
    label: "ІМПЛАНТАЦІЯ",
    title: "All-on-4.",
    description:
      "Повне відновлення зубного ряду на 4 імплантах. Фіксований протез за один день після операції — за показаннями.",
    heroStats: [
      { value: "1 день", label: "тимчасовий протез" },
      { value: "3 міс", label: "до постійного" },
      { value: "від 32 000 zł", label: "щелепа" },
    ],
    processSteps: implantStraumann.processSteps,
    materials: implantStraumann.materials,
    doctors: implantStraumann.doctors,
    cases: implantStraumann.cases,
    priceRows: [
      { name: "All-on-4 верхня щелепа", price: "від 32 000 zł" },
      { name: "All-on-4 нижня щелепа", price: "від 32 000 zł" },
      { name: "Діагностика", price: "Безкоштовно" },
    ],
  }),
  makeDetail({
    categorySlug: "implantaciya",
    categoryTitle: "Імплантація",
    slug: "kistkova-plastyka",
    label: "ІМПЛАНТАЦІЯ",
    title: "Кісткова пластика.",
    description:
      "Нарощування кістки перед імплантацією. Синус-ліфтинг, аугментація — під мікроскопом і 3D-плануванням.",
    heroStats: [
      { value: "3–6 міс", label: "до імпланту" },
      { value: "98%", label: "успіх" },
      { value: "від 2 400 zł", label: "процедура" },
    ],
    doctors: implantStraumann.doctors,
    priceRows: [
      { name: "Кісткова пластика", price: "від 2 400 zł" },
      { name: "Синус-ліфтинг", price: "від 3 600 zł" },
      { name: "КТ-діагностика", price: "400 zł" },
    ],
  }),
  makeDetail({
    categorySlug: "estetychna-stomatologiya",
    categoryTitle: "Естетична стоматологія",
    slug: "viniri-e-max",
    label: "ЕСТЕТИКА",
    title: "Вініри E-max.",
    description:
      "Керамічні вініри преміум-класу. Цифровий дизайн посмішки — бачите результат до початку лікування.",
    heroStats: [
      { value: "6 тиж", label: "термін" },
      { value: "10 років", label: "гарантія" },
      { value: "від 2 600 zł", label: "1 вінір" },
    ],
    doctors: [
      {
        name: "Д-р Каміла Новак",
        role: "Естетична стоматологія",
        meta: "1 800+ вінірів • DSD",
        href: "/doctors/kamila-novak",
      },
    ],
    cases: [
      { title: "Вініри E-max, 8 одиниць", meta: "д-р Каміла • 6 тижнів", href: "/cases/viniry-e-max-8" },
    ],
    priceRows: [
      { name: "Вінір E-max, 1 одиниця", price: "2 600 zł" },
      { name: "Цифрове моделювання", price: "1 200 zł" },
      { name: "Консультація", price: "Безкоштовно" },
    ],
  }),
  makeDetail({
    categorySlug: "estetychna-stomatologiya",
    categoryTitle: "Естетична стоматологія",
    slug: "digital-smile-design",
    label: "ЕСТЕТИКА",
    title: "Цифрове моделювання посмішки.",
    description: "DSD — ви бачите майбутню посмішку на 3D-моделі ще до будь-яких втручань.",
  }),
  makeDetail({
    categorySlug: "estetychna-stomatologiya",
    categoryTitle: "Естетична стоматологія",
    slug: "vidbilyuvannya-zoom",
    label: "ЕСТЕТИКА",
    title: "Професійне відбілювання Zoom.",
    description: "Відбілювання в клініці за 1 візит. Безпечно для емалі, результат до 8 відтінків.",
    heroStats: [
      { value: "1 візит", label: "процедура" },
      { value: "8 відт", label: "результат" },
      { value: "від 1 400 zł", label: "курс" },
    ],
    priceRows: [
      { name: "Zoom відбілювання", price: "1 400 zł" },
      { name: "Домашній капа-набір", price: "600 zł" },
    ],
  }),
  makeDetail({
    categorySlug: "estetychna-stomatologiya",
    categoryTitle: "Естетична стоматологія",
    slug: "kompozytni-restavraciyi",
    label: "ЕСТЕТИКА",
    title: "Композитні реставрації.",
    description: "Естетичне відновлення зубів композитом. Мінімально інвазивно, за один візит.",
  }),
  makeDetail({
    categorySlug: "ortodontiya",
    categoryTitle: "Ортодонтія",
    slug: "invisalign-povny-kurs",
    label: "ОРТОДОНТІЯ",
    title: "Invisalign — повний курс.",
    description: "Прозорі елайнери. Майже непомітно. Точне цифрове планування руху зубів.",
    heroStats: [
      { value: "9–18 міс", label: "курс" },
      { value: "Diamond", label: "провайдер" },
      { value: "від 12 000 zł", label: "курс" },
    ],
    doctors: [
      {
        name: "Д-р Анна Ковальська",
        role: "Ортодонтія",
        meta: "Invisalign Diamond Provider",
        href: "/doctors",
      },
    ],
    cases: [
      { title: "Інвізалайн, 9 місяців", meta: "д-р Анна", href: "/cases/invisalign-9-misyaciv" },
    ],
    priceRows: [
      { name: "Invisalign повний курс", price: "від 12 000 zł" },
      { name: "Ретейнери", price: "включено" },
    ],
  }),
  makeDetail({
    categorySlug: "ortodontiya",
    categoryTitle: "Ортодонтія",
    slug: "brekety-metal",
    label: "ОРТОДОНТІЯ",
    title: "Брекет-система металева.",
    description: "Класична ефективна система. Підходить для складних випадків прикусу.",
  }),
  makeDetail({
    categorySlug: "ortodontiya",
    categoryTitle: "Ортодонтія",
    slug: "brekety-keramika",
    label: "ОРТОДОНТІЯ",
    title: "Брекет-система керамічна.",
    description: "Менш помітні за металеві. Та сама ефективність при естетичнішому вигляді.",
  }),
  makeDetail({
    categorySlug: "ortodontiya",
    categoryTitle: "Ортодонтія",
    slug: "reteinery",
    label: "ОРТОДОНТІЯ",
    title: "Ретейнери після лікування.",
    description: "Закріплення результату після брекетів або елайнерів. Нероз'ємні та знімні варіанти.",
  }),
  makeDetail({
    categorySlug: "terapiya-ta-profilaktyka",
    categoryTitle: "Терапія та профілактика",
    slug: "chystka-poliruvannya",
    label: "ТЕРАПІЯ",
    title: "Чистка + полірування.",
    description: "Професійна гігієна. Видалення нальоту і каменю. Полірування емалі.",
    priceRows: [
      { name: "Чистка + полірування", price: "450 zł" },
      { name: "Air-Flow", price: "350 zł" },
    ],
  }),
  makeDetail({
    categorySlug: "terapiya-ta-profilaktyka",
    categoryTitle: "Терапія та профілактика",
    slug: "likuvannya-kariiesu",
    label: "ТЕРАПІЯ",
    title: "Лікування карієсу.",
    description: "Терапевтичне лікування під мікроскопом. Збереження максимуму тканини зуба.",
  }),
  makeDetail({
    categorySlug: "terapiya-ta-profilaktyka",
    categoryTitle: "Терапія та профілактика",
    slug: "likuvannya-kanaliv",
    label: "ТЕРАПІЯ",
    title: "Лікування кореневих каналів.",
    description: "Ендодонтія під мікроскопом Zeiss. Прогнозоване збереження зуба.",
    doctors: [
      {
        name: "Д-р Магдалена Кравчик",
        role: "Ендодонтія",
        meta: "13 років практики",
        href: "/doctors",
      },
    ],
  }),
  makeDetail({
    categorySlug: "terapiya-ta-profilaktyka",
    categoryTitle: "Терапія та профілактика",
    slug: "restavraciya-perednih",
    label: "ТЕРАПІЯ",
    title: "Реставрація передніх зубів.",
    description: "Естетична реставрація композитом або керамікою в зоні посмішки.",
  }),
  makeDetail({
    categorySlug: "hirurgiya",
    categoryTitle: "Хірургія",
    slug: "vydalennia-mudrosti",
    label: "ХІРУРГІЯ",
    title: "Видалення зуба мудрості.",
    description: "Атравматичне видалення під мікроскопом. Можливо під седацією.",
    doctors: [
      {
        name: "Д-р Пьотр Левандовський",
        role: "Хірургія",
        meta: "16 років практики",
        href: "/doctors",
      },
    ],
    cases: [
      { title: "Видалення зубів мудрості (4)", meta: "д-р Пьотр", href: "/cases/vidalennya-mudrosti" },
    ],
  }),
  makeDetail({
    categorySlug: "hirurgiya",
    categoryTitle: "Хірургія",
    slug: "sinus-lifting",
    label: "ХІРУРГІЯ",
    title: "Синус-ліфтинг.",
    description: "Підняття дна верхньощелепного синуса для імплантації. 3D-планування.",
    priceRows: [
      { name: "Синус-ліфтинг", price: "від 3 600 zł" },
      { name: "КТ", price: "400 zł" },
    ],
  }),
  makeDetail({
    categorySlug: "hirurgiya",
    categoryTitle: "Хірургія",
    slug: "rezekciya-vershivky",
    label: "ХІРУРГІЯ",
    title: "Резекція верхівки кореня.",
    description: "Збереження зуба при запаленні верхівки. Мікрохірургічний підхід.",
  }),
  makeDetail({
    categorySlug: "hirurgiya",
    categoryTitle: "Хірургія",
    slug: "frenuloplasty",
    label: "ХІРУРГІЯ",
    title: "Frenuloplasty.",
    description: "Корекція вуздечки губи або язика. Швидке загоєння, мінімальна травма.",
  }),
  makeDetail({
    categorySlug: "dytiacha-stomatologiya",
    categoryTitle: "Дитяча стоматологія",
    slug: "pershyi-vizyt",
    label: "ДИТЯЧА",
    title: "Перший візит — знайомство.",
    description: "Безкоштовне знайомство з лікарем і кабінетом. Без лікування — тільки адаптація.",
    heroStats: [
      { value: "0 zł", label: "перший візит" },
      { value: "ігрова", label: "зона" },
      { value: "UA", label: "мова" },
    ],
    doctors: [
      {
        name: "Д-р Якуб Зелінський",
        role: "Дитяча стоматологія",
        meta: "9 років практики",
        href: "/doctors",
      },
    ],
  }),
  makeDetail({
    categorySlug: "dytiacha-stomatologiya",
    categoryTitle: "Дитяча стоматологія",
    slug: "profilaktychnyi-ohlyad",
    label: "ДИТЯЧА",
    title: "Профілактичний огляд.",
    description: "Регулярний огляд, навчання гігієні, фторування за потреби.",
  }),
  makeDetail({
    categorySlug: "dytiacha-stomatologiya",
    categoryTitle: "Дитяча стоматологія",
    slug: "likuvannya-molochnogo",
    label: "ДИТЯЧА",
    title: "Лікування молочного зуба.",
    description: "Безболісно, у спокійній атмосфері. Лазер Waterlase за показаннями.",
  }),
  makeDetail({
    categorySlug: "dytiacha-stomatologiya",
    categoryTitle: "Дитяча стоматологія",
    slug: "hermetizaciya-fisur",
    label: "ДИТЯЧА",
    title: "Герметизація фісур.",
    description: "Захист жувальних зубів від карієсу. Швидка профілактична процедура.",
  }),
];

export function getServiceDetail(
  categorySlug: string,
  serviceSlug: string
): ServiceDetail | undefined {
  return serviceDetails.find(
    (s) => s.categorySlug === categorySlug && s.slug === serviceSlug
  );
}

export function getAllServiceDetailParams(): { categorySlug: string; serviceSlug: string }[] {
  return serviceDetails.map((s) => ({
    categorySlug: s.categorySlug,
    serviceSlug: s.slug,
  }));
}

export function serviceDetailHref(categorySlug: string, serviceSlug: string): string {
  return `/services/${categorySlug}/${serviceSlug}`;
}
