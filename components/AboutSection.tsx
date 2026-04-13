import {
  Zap,
  Trophy,
  Gem,
  BadgeDollarSign,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

const features: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Zap,
    title: "استجابة سريعة",
    desc: "نصل إليك خلال ساعة من تلقي طلبك في أي حي من أحياء أبها وخميس مشيط",
  },
  {
    icon: Trophy,
    title: "فنيون معتمدون",
    desc: "جميع فنيينا حاصلون على شهادات معتمدة وخبرة أكثر من 10 سنوات",
  },
  {
    icon: Gem,
    title: "قطع غيار أصلية",
    desc: "نستخدم قطع الغيار الأصلية فقط من الشركات المصنعة مع ضمان معتمد",
  },
  {
    icon: BadgeDollarSign,
    title: "أسعار شفافة",
    desc: "نقدم تقييم مجاني وأسعار واضحة بدون رسوم مخفية أو مفاجآت",
  },
  {
    icon: ShieldCheck,
    title: "ضمان 3 أشهر",
    desc: "نضمن جميع أعمالنا لمدة 3 أشهر كاملة على الإصلاح وقطع الغيار",
  },
  {
    icon: Clock,
    title: "خدمة 7 أيام",
    desc: "نعمل 7 أيام في الأسبوع من 8 صباحاً حتى 10 مساءً بدون إجازات",
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
              من نحن
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
              أكثر من 10 سنوات من الخبرة في صيانة الأجهزة المنزلية
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              تك فيكس للصيانة المنزلية هي الشركة الرائدة في منطقة عسير لخدمات
              صيانة الأجهزة المنزلية. منذ تأسيسنا، قدمنا خدماتنا لأكثر من 5000
              عميل في أبها وخميس مشيط وأحد رفيدة.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              فريقنا من الفنيين المتخصصين والمعتمدين مدرب على أحدث التقنيات
              والمعدات، ونلتزم بأعلى معايير الجودة في كل عملية صيانة نقوم بها.
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">+5000</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  عميل سعيد
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200 dark:bg-gray-700" />
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">+10</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  سنوات خبرة
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200 dark:bg-gray-700" />
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">98%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  رضا العملاء
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white dark:bg-dark-card rounded-2xl p-5 border border-gray-100 dark:border-dark-border"
              >
                <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-3">
                  <f.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1.5">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
