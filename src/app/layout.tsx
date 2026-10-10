import type { Metadata, Viewport } from "next";
import { Baloo_Bhaijaan_2, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

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
  "أكبر مغسلة سجاد وبطاطين في دكرنس. بنستلم من باب بيتك ونرجّعلك حاجتك جديدة لحد الباب. تغطية كاملة لدكرنس وخط المنزلة وخط دمياط.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "ar_EG",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#8C1F33",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${ibmPlexArabic.variable} ${baloo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
