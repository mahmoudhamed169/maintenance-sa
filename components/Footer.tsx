import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { PHONE, WHATSAPP, BUSINESS_NAME, services } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                ت
              </div>
              <span className="font-bold text-white text-lg">
                {BUSINESS_NAME}
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              متخصصون في صيانة وإصلاح جميع الأجهزة المنزلية في منطقة عسير بخبرة
              أكثر من 10 سنوات.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" /> {PHONE}
            </a>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">خدماتنا</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-blue-500">›</span> {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">مناطق الخدمة</h3>
            <ul className="space-y-2">
              {[
                { href: "/abha", label: "صيانة أجهزة أبها" },
                { href: "/khamis-mushait", label: "صيانة أجهزة خميس مشيط" },
                { href: "/ahad-rafidah", label: "صيانة أجهزة أحد رفيدة" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-blue-500">›</span> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-bold text-white mt-6 mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "الرئيسية" },
                { href: "/services", label: "جميع الخدمات" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-blue-500">›</span> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">تواصل معنا</h3>
            <div className="space-y-4">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-gray-800 group-hover:bg-blue-600 flex items-center justify-center transition-colors flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">للاتصال المباشر</div>
                  <div>{PHONE}</div>
                </div>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-gray-800 group-hover:bg-green-600 flex items-center justify-center transition-colors flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">واتساب</div>
                  <div>راسلنا الآن</div>
                </div>
              </a>

              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">نخدم</div>
                  <div>منطقة عسير - السعودية</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">ساعات العمل</div>
                  <div>8 ص - 10 م • 7 أيام</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {year} {BUSINESS_NAME}. جميع الحقوق محفوظة.
          </p>
          <p className="text-xs text-gray-500">
            صيانة أجهزة منزلية في أبها | خميس مشيط | أحد رفيدة | منطقة عسير
          </p>
        </div>
      </div>
    </footer>
  );
}
