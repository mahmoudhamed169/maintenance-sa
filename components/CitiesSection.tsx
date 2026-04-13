import Link from "next/link";
import { Mountain, Building2, Home } from "lucide-react";
import { cities } from "@/lib/data";

const cityIcons = [Mountain, Building2, Home];

export default function CitiesSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            مناطق الخدمة
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
            نخدم منطقة عسير بالكامل
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            فرق متخصصة في كل مدينة، جاهزة للوصول إليك في أسرع وقت ممكن
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cities.map((city, i) => {
            const CityIcon = cityIcons[i];
            return (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="group relative overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-5 text-white hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-6 -translate-x-6" />
                <div className="relative">
                  <div className="flex items-center gap-10 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <CityIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{city.name}</h3>
                      <p className="text-blue-100 text-sm">{city.region}</p>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm mb-6 mt-8">
                    {city.population}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {city.neighborhoods.slice(0, 3).map((n) => (
                      <span
                        key={n}
                        className="text-xs bg-white/20 rounded-full px-3 py-1"
                      >
                        {n}
                      </span>
                    ))}
                    <span className="text-xs bg-white/20 rounded-full px-3 py-1">
                      +المزيد
                    </span>
                  </div>
                  <span className="flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all">
                    عرض تفاصيل المدينة
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
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
