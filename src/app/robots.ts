import type { MetadataRoute } from "next";

// ← استبدل بـ URL الموقع الحقيقي على Vercel بعد النشر
const BASE_URL = "https://fabrika-dakrns.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
