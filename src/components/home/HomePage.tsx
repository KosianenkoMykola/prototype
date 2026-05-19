import {
  AboutPreviewSection,
  AdvantagesSection,
  BlogPreviewSection,
  CasesPreviewSection,
  CtaFormSection,
  FaqSection,
  GoogleReviewsSection,
  HeroSection,
  ProcessSection,
  ServicesPreviewSection,
  TeamSection,
  VideoReviewsSection,
} from "@/components/home";

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <AdvantagesSection />
      <ServicesPreviewSection />
      <VideoReviewsSection />
      <CasesPreviewSection />
      <AboutPreviewSection />
      <TeamSection />
      <ProcessSection />
      <GoogleReviewsSection />
      <BlogPreviewSection />
      <FaqSection />
      <CtaFormSection />
    </main>
  );
}
