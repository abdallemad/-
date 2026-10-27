import type { MetadataRoute } from "next";

// ← استبدل بـ URL الموقع الحقيقي على Vercel بعد النشر
const BASE_URL = "https://fabrika-dakrns.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
