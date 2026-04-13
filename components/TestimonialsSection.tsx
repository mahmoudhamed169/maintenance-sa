import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
            آراء العملاء
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            ماذا يقول عملاؤنا؟
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            أكثر من 5000 عميل راضٍ عن خدماتنا في منطقة عسير
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-gray-100 dark:border-dark-border shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                "{t.text}"
              </p>

              <div className="border-t border-gray-100 dark:border-dark-border pt-4 flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900 dark:text-white text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{t.city}</div>
                </div>
                <span className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-lg">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
