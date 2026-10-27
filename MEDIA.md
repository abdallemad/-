# دليل الـ Assets — فبريكا

## الأماكن اللي محتاج تحط فيها صور / فيديوهات / أسعار

---

### 1. og:image (صورة مشاركة السوشيال ميديا)
- المسار: `/public/og-image.jpg`
- الأبعاد الموصى بها: 1200 × 630 بكسل

---

### 2. معرض الأعمال — Gallery
- الملف: `src/components/landing/gallery-section.tsx`
- أضف الصور في: `/public/media/gallery/`
- غيّر `src: null` إلى المسار لكل عنصر

| الاسم المتوقع | العنوان |
|---|---|
| `/media/gallery/gallery-01.jpg` | سجادة صوف |
| `/media/gallery/gallery-02.jpg` | موكيت |
| `/media/gallery/gallery-03.jpg` | بطانية شتوي |
| `/media/gallery/gallery-04.jpg` | سجادة صالون كبيرة |
| `/media/gallery/gallery-05.jpg` | سجادة شرقي |
| `/media/gallery/gallery-06.jpg` | موكيت ممر |
| `/media/gallery/gallery-07.jpg` | بطانية قطيفة |
| `/media/gallery/gallery-08.jpg` | سجادة حريري |

---

### 3. قبل / بعد — Before-After
- الملف: `src/components/landing/before-after-section.tsx`
- أضف الصور في: `/public/media/before-after/`

| الاسم المتوقع | الوصف |
|---|---|
| `/media/before-after/compare-01-before.jpg` | سجادة صالون قبل |
| `/media/before-after/compare-01-after.jpg` | سجادة صالون بعد |
| `/media/before-after/compare-02-before.jpg` | موكيت قبل |
| `/media/before-after/compare-02-after.jpg` | موكيت بعد |
| `/media/before-after/compare-03-before.jpg` | بطانية شتوي قبل |
| `/media/before-after/compare-03-after.jpg` | بطانية شتوي بعد |

---

### 4. الفيديوهات — Videos
- الملف: `src/components/landing/videos-section.tsx`
- أضف الفيديوهات في: `/public/media/videos/`
- لكل فيديو، غيّر `localSrc` أو `embedUrl` من null إلى المسار

| الاسم المتوقع | النوع | الوصف |
|---|---|---|
| `/media/videos/poster-01.jpg` | صورة معاينة | عملية الغسيل |
| `/media/videos/poster-02.jpg` | صورة معاينة | الاستلام والتوصيل |
| `/media/videos/poster-03.jpg` | صورة معاينة | قبل وبعد |
| `/media/videos/video-01.mp4` | فيديو mp4 | عملية الغسيل (أو استخدم embedUrl) |
| `/media/videos/video-02.mp4` | فيديو mp4 | الاستلام والتوصيل |
| `/media/videos/video-03.mp4` | فيديو mp4 | قبل وبعد |

---

### 5. الأسعار
- الملف: `src/lib/prices.ts`
- غيّر قيمة `startingPrice` لكل نوع من `"..."` إلى السعر الحقيقي

---

### 6. آراء العملاء
- الملف: `src/components/landing/reviews-section.tsx`
- استبدل بيانات `reviews` array بآراء العملاء الحقيقية
- احذف إشعار الـ placeholder من الـ JSX

---

### 7. Sitemap URL
- الملف: `src/app/sitemap.ts` و `src/app/robots.ts`
- استبدل `BASE_URL` بـ URL الموقع الفعلي على Vercel
