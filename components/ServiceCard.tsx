import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  slug: string;
  name: string;
  icon: LucideIcon;
  shortDesc: string;
}

export default function ServiceCard({
  slug,
  name,
  icon: Icon,
  shortDesc,
}: ServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group block bg-white rounded-2xl p-6 border border-gray-100 shadow-sm card-hover"
    >
      <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
        <Icon className="w-7 h-7 text-blue-600" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-4">{shortDesc}</p>
      <span className="text-sm font-semibold text-blue-600 flex items-center gap-1">
        تفاصيل الخدمة
        <svg
          className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform"
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
    </Link>
  );
}
