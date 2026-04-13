import Link from "next/link";
import { PHONE, WHATSAPP } from "@/lib/data";
import { MessageCircle, Phone } from "lucide-react";

interface CTAButtonsProps {
  size?: "sm" | "md" | "lg";
  message?: string;
}

export default function CTAButtons({
  size = "md",
  message = "السلام عليكم، أريد الاستفسار عن خدمات الصيانة",
}: CTAButtonsProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
      <a
        href={`tel:${PHONE}`}
        className={`flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-200 hover:-translate-y-0.5 ${sizeClasses[size]}`}
      >
        <Phone className="w-4 h-4" />
        <span>اتصل الآن</span>
      </a>
      <a
        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-bold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-200 hover:-translate-y-0.5 ${sizeClasses[size]}`}
      >
         <MessageCircle className="w-4 h-4" />
        <span>واتساب</span>
      </a>
    </div>
  );
}
