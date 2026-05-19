export type ServiceDetailStat = { value: string; label: string };

export type ServiceDetailStep = { num: string; title: string; text: string };

export type ServiceDetailMaterial = {
  name: string;
  country: string;
  description: string;
};

export type ServiceDetailDoctor = {
  name: string;
  role: string;
  meta: string;
  href: string;
};

export type ServiceDetailCase = {
  title: string;
  meta: string;
  href: string;
};

export type ServiceDetailPriceRow = { name: string; price: string };

export type ServiceDetailFaq = { q: string; a: string };

export type ServiceDetail = {
  categorySlug: string;
  categoryTitle: string;
  slug: string;
  label: string;
  title: string;
  description: string;
  heroStats: ServiceDetailStat[];
  imageLabel: string;
  processTitle?: string;
  processSteps: ServiceDetailStep[];
  materials?: ServiceDetailMaterial[];
  materialsTitle?: string;
  doctorsTitle?: string;
  doctors: ServiceDetailDoctor[];
  casesTitle?: string;
  cases: ServiceDetailCase[];
  priceTitle: string;
  priceRows: ServiceDetailPriceRow[];
  priceNote?: string;
  faqs: ServiceDetailFaq[];
  ctaTitle: string;
  ctaText: string;
};
