import { notFound } from "next/navigation";
import { services, cities, PHONE, WHATSAPP } from "@/lib/data";
import CTAButtons from "@/components/CTAButton";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import { CheckCircle, AlertTriangle } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.name} في أبها وخميس مشيط | تك فيكس`,
    description: `متخصصون في ${s.name} في أبها، خميس مشيط وأحد رفيدة. ${s.shortDesc}. فنيون معتمدون، ضمان 3 أشهر، نصلك خلال ساعة.`,
    keywords: [
      ...s.keywords,
      `${s.name} أبها`,
      `${s.name} خميس مشيط`,
      `${s.name} أحد رفيدة`,
      "منطقة عسير",
    ],
    alternates: { canonical: `https://www.techfix-aseer.com/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { service: slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  const ServiceIcon = s.icon;

  const serviceFaqs = [
    {
      q: `كم تكلف ${s.name} في أبها؟`,
      a: `تبدأ تكلفة ${s.name} من 50 ريال حسب نوع العطل والجهاز. نقدم تقييماً مجانياً قبل أي إصلاح.`,
    },
    {
      q: `كم يستغرق إصلاح ${s.name}؟`,
      a: "تستغرق معظم الإصلاحات من 30 دقيقة إلى ساعتين. نسعى دائماً للإصلاح في نفس الزيارة.",
    },
    {
      q: `هل تقدمون ضماناً على ${s.name}؟`,
      a: "نعم، نقدم ضمان 3 أشهر على جميع أعمال الصيانة وقطع الغيار المستبدلة.",
    },
    {
      q: `هل تصلحون جميع ماركات ${s.name}؟`,
      a: "نعم، نصلح جميع الماركات العالمية والمحلية مع توفر قطع الغيار الأصلية.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.description,
    provider: {
      "@type": "LocalBusiness",
      name: "تك فيكس للصيانة المنزلية",
      telephone: PHONE,
      areaServed: ["أبها", "خميس مشيط", "أحد رفيدة"],
    },
    areaServed: "منطقة عسير",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mb-6">
              <ServiceIcon className="w-10 h-10 text-blue-600" />
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              {s.name} في <span className="gradient-text">أبها وخميس مشيط</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {s.description}
            </p>
            <CTAButtons
              size="lg"
              message={`السلام عليكم، أريد الاستفسار عن ${s.name}`}
            />

            <div className="flex flex-wrap gap-4 mt-8 text-sm text-gray-500">
              {[
                "ضمان 3 أشهر",
                "قطع غيار أصلية",
                "تقييم مجاني",
                "نصلك خلال ساعة",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            الأعطال التي نصلحها
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {s.problems.map((problem) => (
              <div
                key={problem}
                className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-gray-100"
              >
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                </div>
                <span className="font-medium text-gray-800">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {s.name} في منطقة عسير
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cities.map((city) => (
              <div
                key={city.slug}
                className="bg-white rounded-2xl p-6 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {s.name} {city.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  نقدم خدمة {s.name} في {city.name} بأعلى مستويات الجودة. فريقنا
                  في {city.name} جاهز للوصول إليك في أسرع وقت ممكن.
                </p>
                <a
                  href={`tel:${PHONE}`}
                  className="text-blue-600 font-semibold text-sm"
                >
                  اتصل بفني {city.name} ←
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            هل جهازك يحتاج إلى {s.name}؟ اتصل بنا الآن!
          </h2>
          <CTAButtons size="lg" message={`أريد طلب ${s.name}`} />
        </div>
      </section>

      <FAQSection items={serviceFaqs} />
      <ContactSection />
    </>
  );
}
