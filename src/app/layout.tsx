import type { Metadata, Viewport } from "next";
import { Baloo_Bhaijaan_2, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-arabic",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const baloo = Baloo_Bhaijaan_2({
  variable: "--font-baloo",
  subsets: ["arabic", "latin"],
});

const title = "فبريكا — مغسلة سجاد وبطاطين في دكرنس | من الباب للباب";
const description =
  "أكبر مغسلة سجاد وبطاطين في دكرنس. بنستلم من باب بيتك ونرجّعلك حاجتك جديدة لحد الباب. تغطية كاملة لدكرنس وخط المنزلة وخط المنصورة.";

// ← استبدل بـ URL الموقع الفعلي على Vercel بعد النشر
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fabrika-dakrns.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "ar_EG",
    type: "website",
    // ← ضع الصورة الحقيقية في /public/og-image.jpg (1200×630)
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "فبريكا — مغسلة سجاد وبطاطين دكرنس" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#8C1F33",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description,
  telephone: site.phoneNumber,
  address: {
    "@type": "PostalAddress",
    addressLocality: "دكرنس",
    addressRegion: "الدقهلية",
    addressCountry: "EG",
  },
  areaServed: ["دكرنس", "المنزلة", "المنصورة"],
  sameAs: [site.facebook],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${ibmPlexArabic.variable} ${baloo.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
