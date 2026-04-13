"use client";
import { useState } from "react";
import { faqs } from "@/lib/data";

export default function FAQSection({ items }: { items?: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const list = items || faqs;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            الأسئلة الشائعة
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
            أسئلة يسألها عملاؤنا
          </h2>
        </div>
        <div className="space-y-3">
          {list.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-right"
              >
                <span className="font-semibold text-gray-900 text-sm sm:text-base">
                  {faq.q}
                </span>
                <span
                  className={`text-blue-500 transition-transform duration-200 mr-4 flex-shrink-0 ${
                    open === i ? "rotate-180" : ""
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <div className="h-px bg-gray-100 mb-4" />
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}