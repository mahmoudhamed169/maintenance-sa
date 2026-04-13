import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import CitiesSection from "@/components/CitiesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "فني صيانة أجهزة منزلية أبها | خميس مشيط | أحد رفيدة",
  description:
    "خدمات صيانة أجهزة منزلية احترافية في أبها وخميس مشيط وأحد رفيدة. تصليح مكيفات، غسالات، ثلاجات، بوتاجازات وكل الأجهزة المنزلية. فنيون معتمدون، ضمان 3 أشهر، نصلك خلال ساعة.",
  alternates: { canonical: "https://www.techfix-aseer.com" },
};

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <HeroSection />
      <ServicesGrid limit={8} />
      <CitiesSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
