import { cities } from "@/lib/data";
import CityPageTemplate from "@/components/CityPageTemplate";
import type { Metadata } from "next";

const city = cities.find((c) => c.slug === "ahad-rafidah")!;

export const metadata: Metadata = {
  title: "فني صيانة أجهزة منزلية أحد رفيدة | تصليح مكيفات وثلاجات",
  description:
    "خدمات صيانة أجهزة منزلية في أحد رفيدة. تصليح مكيفات، غسالات، ثلاجات في جميع أحياء أحد رفيدة. فنيون معتمدون، ضمان 3 أشهر، أسعار مناسبة.",
  keywords: [
    "فني صيانة أحد رفيدة",
    "تصليح مكيفات أحد رفيدة",
    "صيانة غسالات أحد رفيدة",
    "تصليح ثلاجات أحد رفيدة",
    "صيانة أجهزة منزلية أحد رفيدة",
    "فني مكيفات أحد رفيدة",
  ],
  alternates: { canonical: "https://www.techfix-aseer.com/ahad-rafidah" },
};

export default function AhadRafidahPage() {
  return <CityPageTemplate city={city} />;
}
