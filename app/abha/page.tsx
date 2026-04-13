import { cities } from "@/lib/data";
import CityPageTemplate from "@/components/CityPageTemplate";
import type { Metadata } from "next";

const city = cities.find((c) => c.slug === "abha")!;

export const metadata: Metadata = {
  title: "فني صيانة أجهزة منزلية أبها | تصليح مكيفات وغسالات وثلاجات",
  description:
    "خدمات صيانة أجهزة منزلية احترافية في أبها. تصليح مكيفات، غسالات، ثلاجات، بوتاجازات في جميع أحياء أبها. فنيون معتمدون، نصلك خلال ساعة، ضمان 3 أشهر. اتصل الآن!",
  keywords: [
    "فني صيانة أجهزة منزلية أبها",
    "تصليح مكيفات أبها",
    "صيانة غسالات أبها",
    "تصليح ثلاجات أبها",
    "فني صيانة أبها",
    "صيانة بوتاجاز أبها",
    "كهربائي منزلي أبها",
    "فني مكيفات أبها",
  ],
  alternates: { canonical: "https://www.techfix-aseer.com/abha" },
};

export default function AbhaPage() {
  return <CityPageTemplate city={city} />;
}
