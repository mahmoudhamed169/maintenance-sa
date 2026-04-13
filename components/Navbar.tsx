"use client";
import { useState } from "react";
import Link from "next/link";
import { PHONE, WHATSAPP, BUSINESS_NAME } from "@/lib/data";
import { MessageCircle, Phone } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "الرئيسية" },
    { href: "/services", label: "خدماتنا" },
    { href: "/abha", label: "أبها" },
    { href: "/khamis-mushait", label: "خميس مشيط" },
    { href: "/ahad-rafidah", label: "أحد رفيدة" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
              ف
            </div>
            <span className="font-bold text-lg text-gray-900 hidden sm:block">
              {BUSINESS_NAME}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE}`}
              className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>اتصل الآن</span>
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg text-gray-600"
              aria-label="القائمة"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden py-3 border-t border-gray-100">
            <div className="space-y-0.5 mb-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-xl transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="h-px bg-gray-100 mx-4 mb-3" />
            <div className="flex gap-2 px-4 pb-2">
              <a
                href={`tel:${PHONE}`}
                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-sm font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>اتصل الآن</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl text-sm font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <span>واتساب</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
