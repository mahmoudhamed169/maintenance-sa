import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  metadataBase: new URL("https://maintenance-sa.vercel.app/"),
  title: {
    default: "فني صيانة أجهزة منزلية أبها | خميس مشيط | أحد رفيدة",
    template: "%s | تك فيكس للصيانة المنزلية",
  },
  description:
    "خدمات صيانة أجهزة منزلية احترافية في أبها، خميس مشيط، وأحد رفيدة. تصليح مكيفات، غسالات، ثلاجات، بوتاجازات وجميع الأجهزة المنزلية. اتصل الآن!",
  keywords: [
    "فني صيانة أجهزة منزلية أبها",
    "تصليح مكيفات أبها",
    "صيانة غسالات خميس مشيط",
    "تصليح ثلاجات أحد رفيدة",
    "فني صيانة قريب مني",
    "صيانة أجهزة منزلية السعودية",
    "فني كهرباء منزلية",
    "صيانة مكيفات خميس مشيط",
    "منطقة عسير",
  ],
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://maintenance-sa.vercel.app",
    siteName: "تك فيكس للصيانة المنزلية",
    title: "فني صيانة أجهزة منزلية | أبها - خميس مشيط - أحد رفيدة",
    description:
      "خدمات صيانة أجهزة منزلية احترافية في منطقة عسير. نصل إليك خلال ساعة.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://maintenance-sa.vercel.app" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* ✅ Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="e5hjWPM3GMxDIgj8uc9c9nZIsDUVVlgCeK67Nc-l1-s"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-white text-gray-900"
        style={{
          fontFamily:
            "'IBM Plex Sans Arabic', 'Noto Sans Arabic', Arial, sans-serif",
        }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
