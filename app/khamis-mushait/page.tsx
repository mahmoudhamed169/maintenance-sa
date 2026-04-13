import { cities } from "@/lib/data";
import CityPageTemplate from "@/components/CityPageTemplate";
import type { Metadata } from "next";

const city = cities.find((c) => c.slug === "khamis-mushait")!;

export const metadata: Metadata = {
  title: "فني صيانة أجهزة منزلية خميس مشيط | تصليح مكيفات وغسالات",
  description:
    "خدمات صيانة أجهزة منزلية في خميس مشيط. تصليح مكيفات، غسالات، ثلاجات وبوتاجازات في جميع أحياء خميس مشيط. فنيون معتمدون، ضمان 3 أشهر، نصلك خلال ساعة.",
  keywords: [
    "فني صيانة خميس مشيط",
    "تصليح مكيفات خميس مشيط",
    "صيانة غسالات خميس مشيط",
    "تصليح ثلاجات خميس مشيط",
    "صيانة أجهزة منزلية خميس مشيط",
    "فني مكيفات خميس مشيط",
    "كهربائي خميس مشيط",
  ],
  alternates: { canonical: "https://www.techfix-aseer.com/khamis-mushait" },
};

export default function KhamisMushaitPage() {
  return <CityPageTemplate city={city} />;
}
