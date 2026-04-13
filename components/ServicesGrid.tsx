import { services } from "@/lib/data";
import ServiceCard from "./ServiceCard";
import Link from "next/link";

export default function ServicesGrid({ limit }: { limit?: number }) {
  const displayed = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            خدماتنا
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
            جميع خدمات الصيانة المنزلية
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نقدم خدمة شاملة لصيانة وإصلاح جميع الأجهزة المنزلية بأيدي فنيين
            متخصصين ومعتمدين في منطقة عسير
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {displayed.map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>
        {limit && services.length > limit && (
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-bold transition-colors"
            >
              عرض جميع الخدمات
              <svg
                className="w-4 h-4 rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
