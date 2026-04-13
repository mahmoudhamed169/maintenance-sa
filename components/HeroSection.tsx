import CTAButtons from "./CTAButton";

export default function HeroSection() {
  const stats = [
    { value: "+5000", label: "عميل راضٍ" },
    { value: "+10", label: "سنوات خبرة" },
    { value: "3", label: "مدن رئيسية" },
    { value: "100%", label: "ضمان الجودة" },
  ];

  return (
    <section className="relative overflow-hidden hero-gradient py-20 sm:py-28 lg:py-36">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              متاح الآن • خدمة سريعة خلال ساعة
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-gray-900 dark:text-white">فني صيانة</span>{" "}
            <span className="gradient-text">أجهزة منزلية</span>
            <br />
            <span className="text-gray-900 dark:text-white">
              في أبها وخميس مشيط
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            نصلح جميع الأجهزة المنزلية بسرعة واحترافية عالية. مكيفات، غسالات،
            ثلاجات، بوتاجازات وكل ما تحتاجه في أبها، خميس مشيط وأحد رفيدة.
          </p>

          <div className="flex justify-center mb-14">
            <CTAButtons size="lg" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white dark:bg-dark-card rounded-2xl px-4 py-4 shadow-sm border border-gray-100 dark:border-dark-border"
              >
                <div className="text-2xl font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="text-green-500">✓</span> ضمان 3 أشهر
            </span>
            <span className="hidden sm:block text-gray-300 dark:text-gray-700">|</span>
            <span className="flex items-center gap-1.5">
              <span className="text-green-500">✓</span> قطع غيار أصلية
            </span>
            <span className="hidden sm:block text-gray-300 dark:text-gray-700">|</span>
            <span className="flex items-center gap-1.5">
              <span className="text-green-500">✓</span> فنيون معتمدون
            </span>
            <span className="hidden sm:block text-gray-300 dark:text-gray-700">|</span>
            <span className="flex items-center gap-1.5">
              <span className="text-green-500">✓</span> أسعار شفافة
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
