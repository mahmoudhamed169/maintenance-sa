import { PHONE, BUSINESS_NAME } from "@/lib/data";

interface LocalBusinessSchemaProps {
  city?: string;
  lat?: string;
  lng?: string;
}

export default function LocalBusinessSchema({
  city = "أبها",
  lat = "18.2164",
  lng = "42.4967",
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS_NAME,
    description: `خدمات صيانة أجهزة منزلية في ${city}، منطقة عسير، السعودية`,
    telephone: PHONE,
    url: "https://www.techfix-aseer.com",
    areaServed: ["أبها", "خميس مشيط", "أحد رفيدة", "منطقة عسير"],
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressRegion: "منطقة عسير",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: lat,
      longitude: lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "22:00",
      },
    ],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "5000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "خدمات الصيانة المنزلية",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "صيانة مكيفات" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "صيانة غسالات" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "صيانة ثلاجات" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "صيانة بوتاجازات" } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
