import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://maintenance-sa.vercel.app/sitemap.xml",
    host: "https://maintenance-sa.vercel.app",
  };
}
