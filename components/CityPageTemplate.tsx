import { services, faqs, PHONE } from "@/lib/data";
import CTAButtons from "@/components/CTAButton";
import ServiceCard from "@/components/ServiceCard";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Zap, Trophy, ThumbsUp, Headphones } from "lucide-react";

interface CityPageTemplateProps {
  city: {
    slug: string;
    name: string;
    nameEn: string;
    region: string;
    description: string;
    mapEmbed: string;
    lat: string;
    lng: string;
    population: string;
    neighborhoods: string[];
  };
}

export default function CityPageTemplate({ city }: CityPageTemplateProps) {
  const cityFaqs = [
    {
      q: `هل تخدمون جميع أحياء ${city.name}؟`,
      a: `نعم، نغطي جميع أحياء ومناطق ${city.name} بالكامل بما فيها: ${city.neighborhoods.join("، ")} وغيرها من الأحياء.`,
    },
    {
      q: `كم يستغرق وصول الفني في ${city.name}؟`,
      a: `نحرص على الوصول إليك في ${city.name} خلال ساعة واحدة من تلقي الطلب، وذلك بفضل انتشار فرقنا في مختلف أحياء المدينة.`,
    },
    {
      q: `ما هي أوقات الخدمة في ${city.name}؟`,
      a: `نعمل في ${city.name} 7 أيام في الأسبوع من الساعة 8 صباحاً حتى 10 مساءً، مع توفر خدمة الطوارئ على مدار الساعة.`,
    },
    {
      q: `هل أسعاركم في ${city.name} ثابتة؟`,
      a: `نقدم تقييماً مجانياً وأسعاراً شفافة بدون رسوم مخفية. تبدأ أسعار الصيانة من 50 ريال حسب نوع الجهاز والعطل.`,
    },
  ];

  const whyUs = [
    {
      icon: Zap,
      title: `أسرع استجابة في ${city.name}`,
      desc: `لدينا فرق متواجدة في مختلف أحياء ${city.name} لضمان أسرع وصول ممكن إليك`,
    },
    {
      icon: Trophy,
      title: "خبرة محلية متعمقة",
      desc: `نعرف ${city.name} جيداً ونفهم احتياجات سكانها من خدمات الصيانة`,
    },
    {
      icon: ThumbsUp,
      title: "ثقة عملاء المدينة",
      desc: `أكثر من 1000 عميل راضٍ من ${city.name} يثق بنا لصيانة أجهزتهم`,
    },
    {
      icon: Headphones,
      title: "دعم مستمر",
      desc: `فريق دعم متخصص لمتابعة عملاء ${city.name} وضمان رضاهم الكامل`,
    },
  ];

  return (
    <>
      <LocalBusinessSchema city={city.name} lat={city.lat} lng={city.lng} />

      {/* Hero */}
      <section className="py-16 sm:py-24 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-blue-700">
                  خدمة متاحة في {city.name}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                فني صيانة أجهزة منزلية{" "}
                <span className="gradient-text">{city.name}</span>
              </h1>

              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                خدمات صيانة احترافية لجميع الأجهزة المنزلية في {city.name}،{" "}
                {city.region}. فنيون معتمدون يصلونك خلال ساعة واحدة.
              </p>

              <div className="flex flex-wrap gap-3 mb-8 text-sm text-gray-600">
                {city.neighborhoods.slice(0, 4).map((n) => (
                  <span
                    key={n}
                    className="bg-gray-100 px-3 py-1.5 rounded-full"
                  >
                    📍 {n}
                  </span>
                ))}
                <span className="bg-gray-100 px-3 py-1.5 rounded-full">
                  + المزيد
                </span>
              </div>

              <CTAButtons
                size="lg"
                message={`السلام عليكم، أريد فني صيانة في ${city.name}`}
              />

              <div className="grid grid-cols-3 gap-4 mt-10">
                {[
                  { v: "+1000", l: `عميل في ${city.name}` },
                  { v: "ساعة", l: "وقت الوصول" },
                  { v: "3 أشهر", l: "ضمان الإصلاح" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="text-center bg-white rounded-2xl p-4 border border-gray-100"
                  >
                    <div className="text-xl font-bold gradient-text">{s.v}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 h-80 lg:h-96">
              <iframe
                src={city.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`خريطة ${city.name}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            خدمات الصيانة في {city.name}
          </h2>
          <p className="text-gray-600 mb-10">
            نقدم جميع خدمات الصيانة المنزلية في {city.name} بأعلى مستويات الجودة
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                لماذا نحن الخيار الأول في {city.name}؟
              </h2>
              <div className="space-y-4">
                {whyUs.map((f) => (
                  <div key={f.title} className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <f.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {f.title}
                      </h3>
                      <p className="text-sm text-gray-600">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                اطلب فني صيانة في {city.name} الآن
              </h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                لا تدع عطل الجهاز يعطل يومك! اتصل بنا الآن ونرسل لك فنياً
                محترفاً في {city.name} خلال ساعة واحدة فقط.
              </p>
              <CTAButtons
                size="lg"
                message={`أريد فني صيانة في ${city.name}`}
              />
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm text-blue-100">
                  ✓ تقييم مجاني • ✓ ضمان 3 أشهر • ✓ قطع غيار أصلية
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <FAQSection items={cityFaqs} />
      <ContactSection />
    </>
  );
}
