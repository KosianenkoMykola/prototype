export type BlogCategory =
  | "implantaciya"
  | "estetyka"
  | "ortodontiya"
  | "porady"
  | "dytiacha"
  | "do-ta-pislya";

export type BlogPostListItem = {
  slug: string;
  category: BlogCategory;
  categoryLabel: string;
  title: string;
  author: string;
  readTime: string;
  date?: string;
};

export type BlogPostDetail = BlogPostListItem & {
  authorRole: string;
  excerpt: string;
  toc: { id: string; label: string }[];
  intro: string;
  sections: { heading: string; body: string }[];
  related: { title: string; readTime: string; slug: string }[];
};

export const blogFilters: { id: "all" | BlogCategory; label: string }[] = [
  { id: "all", label: "Усі категорії (48)" },
  { id: "implantaciya", label: "Імплантація (12)" },
  { id: "estetyka", label: "Естетика (9)" },
  { id: "ortodontiya", label: "Ортодонтія (7)" },
  { id: "porady", label: "Поради (11)" },
  { id: "dytiacha", label: "Дитяча (5)" },
  { id: "do-ta-pislya", label: "До та після (4)" },
];

export const featuredPost = {
  slug: "yak-obraty-implant",
  categoryLabel: "РЕДАКЦІЯ ОБРАЛА",
  title:
    "Як обрати імплант: Straumann, Nobel чи Osstem — і чому різниця у ціні виправдана",
  excerpt:
    "Розбираємо три найпопулярніших бренди — приживлюваність, конструкція, гарантія, ціна. Без маркетингу — тільки факти.",
  author: "Д-р Томаш Вуйцик",
  readTime: "6 хв читання",
  date: "28 квітня",
};

export const blogPosts: BlogPostListItem[] = [
  {
    slug: "viniri-vs-luminiry",
    category: "implantaciya",
    categoryLabel: "ІМПЛАНТАЦІЯ",
    title: "Вініри vs люмініри: чим вони відрізняються насправді",
    author: "Д-р Каміла Новак",
    readTime: "4 хв",
  },
  {
    slug: "pislia-vydalennia-mudrosti",
    category: "porady",
    categoryLabel: "ПОРАДИ",
    title: "Що робити після видалення зуба мудрості: чек-лист на 7 днів",
    author: "Д-р Пьотр Левандовський",
    readTime: "5 хв",
  },
  {
    slug: "invisalign-dorosli",
    category: "ortodontiya",
    categoryLabel: "ОРТОДОНТІЯ",
    title: "Інвізалайн для дорослих: для кого це працює, а для кого — ні",
    author: "Д-р Анна Ковальська",
    readTime: "7 хв",
  },
  {
    slug: "chomu-ne-hollywood-viniri",
    category: "estetyka",
    categoryLabel: "ЕСТЕТИКА",
    title: "Чому я не роблю «голлівудські» вініри і що пропоную натомість",
    author: "Д-р Каміла Новак",
    readTime: "5 хв",
  },
  {
    slug: "pershyi-vizyt-dytyny",
    category: "dytiacha",
    categoryLabel: "ДИТЯЧА",
    title: "Перший візит дитини: як підготувати і не зіпсувати",
    author: "Д-р Якуб Зелінський",
    readTime: "6 хв",
  },
  {
    slug: "likar-prodaje-zayve",
    category: "porady",
    categoryLabel: "ПОРАДИ",
    title: "Як зрозуміти, що ваш лікар продає вам зайве",
    author: "Редакція",
    readTime: "8 хв",
  },
  {
    slug: "kistkova-plastyka",
    category: "implantaciya",
    categoryLabel: "ІМПЛАНТАЦІЯ",
    title: "Кісткова пластика: коли потрібна, скільки коштує",
    author: "Д-р Томаш Вуйцик",
    readTime: "6 хв",
  },
  {
    slug: "keis-rekonstrukciya",
    category: "do-ta-pislya",
    categoryLabel: "ДО ТА ПІСЛЯ",
    title: "Кейс: повна реконструкція посмішки за 3 місяці",
    author: "Редакція",
    readTime: "4 хв",
  },
  {
    slug: "skilky-trymayutsya-viniri",
    category: "estetyka",
    categoryLabel: "ЕСТЕТИКА",
    title: "Скільки реально тримаються вініри і що впливає на термін",
    author: "Д-р Каміла Новак",
    readTime: "5 хв",
  },
];

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const articleDetail: Omit<BlogPostDetail, keyof BlogPostListItem> = {
  authorRole: "Хірург, імплантолог",
  excerpt: featuredPost.excerpt,
  toc: [
    { id: "1", label: "1. Що таке імплант — основи" },
    { id: "2", label: "2. Straumann: швейцарська точність" },
    { id: "3", label: "3. Nobel Biocare: американський масштаб" },
    { id: "4", label: "4. Osstem: корейський прагматизм" },
    { id: "5", label: "5. Як обрати: 6 критеріїв" },
    { id: "6", label: "6. Скільки це коштує насправді" },
    { id: "7", label: "7. Висновки" },
  ],
  intro:
    "«Скільки коштує імплант?» — найчастіше запитання, яке я чую на консультаціях. Складність у тому, що відповідь «від 4 800 zł» — це лише вершина айсберга. Ціна формується з 4-5 факторів, і бренд імпланту — лише один із них. За 18 років практики я працював із усіма трьома брендами, які найчастіше зустрічаються на польському ринку. У цій статті — порівняння без маркетингу.",
  sections: [
    { heading: "1. Що таке імплант — основи", body: lorem },
    { heading: "2. Straumann: швейцарська точність", body: lorem },
    { heading: "3. Nobel Biocare: американський масштаб", body: lorem },
    { heading: "4. Osstem: корейський прагматизм", body: lorem },
  ],
  related: [
    { title: "Кісткова пластика: коли потрібна", readTime: "6 хв читання", slug: "kistkova-plastyka" },
    { title: "All-on-4: для кого це підходить", readTime: "5 хв читання", slug: "yak-obraty-implant" },
    { title: "Як готуватись до імплантації", readTime: "4 хв читання", slug: "yak-obraty-implant" },
  ],
};

export function filterBlogPosts(category: "all" | BlogCategory): BlogPostListItem[] {
  if (category === "all") return blogPosts;
  return blogPosts.filter((p) => p.category === category);
}

export function getBlogPostBySlug(slug: string): BlogPostDetail | undefined {
  if (slug === featuredPost.slug) {
    return {
      slug: featuredPost.slug,
      category: "implantaciya",
      categoryLabel: "ІМПЛАНТАЦІЯ",
      title: featuredPost.title,
      author: featuredPost.author,
      readTime: "6 хв читання",
      date: featuredPost.date,
      ...articleDetail,
    };
  }
  const item = blogPosts.find((p) => p.slug === slug);
  if (!item) return undefined;
  return {
    ...item,
    authorRole: "Лікар Neolith",
    excerpt: item.title,
    toc: [{ id: "1", label: "Основне" }],
    intro: "Стаття в підготовці. Зверніться за консультацією — лікар відповість на ваші питання безкоштовно онлайн.",
    sections: [{ heading: "Основне", body: lorem }],
    related: [
      { title: featuredPost.title, readTime: "6 хв читання", slug: featuredPost.slug },
    ],
  };
}

export const allBlogSlugs = [featuredPost.slug, ...blogPosts.map((p) => p.slug)];
