import { services } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import ContactSection from "@/components/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "جميع خدمات الصيانة المنزلية | أبها وخميس مشيط",
  description:
    "جميع خدمات صيانة الأجهزة المنزلية في منطقة عسير: مكيفات، غسالات، ثلاجات، بوتاجازات، أفران، ميكروويف، سخانات، كهرباء وسباكة منزلية.",
  alternates: { canonical: "https://www.techfix-aseer.com/services" },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gray-50 dark:bg-dark-card/30 border-b border-gray-100 dark:border-dark-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            جميع خدمات{" "}
            <span className="gradient-text">الصيانة المنزلية</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            نصلح جميع الأجهزة المنزلية بأيدي فنيين متخصصين ومعتمدين في أبها،
            خميس مشيط وأحد رفيدة
          </p>
        </div>
      </section>

      {/* All Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
