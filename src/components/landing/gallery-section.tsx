"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronRight, ChevronLeft, Camera } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

// ← ضع الصور في /public/media/gallery/
// غيّر src من null إلى المسار بعد إضافة الصورة (مثلاً: "/media/gallery/gallery-01.jpg")
const galleryItems = [
  { id: 1, title: "سجادة صوف", src: null as string | null, alt: "سجادة صوف بعد الغسيل في فبريكا" },
  { id: 2, title: "موكيت", src: null as string | null, alt: "موكيت نظيف بعد الغسيل" },
  { id: 3, title: "بطانية شتوي", src: null as string | null, alt: "بطانية شتوي بعد التنظيف" },
  { id: 4, title: "سجادة صالون كبيرة", src: null as string | null, alt: "سجادة صالون كبيرة بعد الغسيل" },
  { id: 5, title: "سجادة شرقي", src: null as string | null, alt: "سجادة شرقي بعد الغسيل" },
  { id: 6, title: "موكيت ممر", src: null as string | null, alt: "موكيت ممر نظيف" },
  { id: 7, title: "بطانية قطيفة", src: null as string | null, alt: "بطانية قطيفة بعد التنظيف" },
  { id: 8, title: "سجادة حريري", src: null as string | null, alt: "سجادة حريري بعد الغسيل" },
];

function PlaceholderItem({ title }: { title: string }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 bg-secondary text-muted-foreground">
      {/* ← ضع الصورة هنا — أسماء الملفات في /public/media/gallery/ */}
      <Camera className="size-8 opacity-30" aria-hidden="true" />
      <span className="px-2 text-center text-sm font-medium">{title}</span>
    </div>
  );
}

export function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null);
  const count = galleryItems.length;

  const close = useCallback(() => setSelected(null), []);
  const prev = useCallback(
    () => setSelected((i) => (i !== null ? (i - 1 + count) % count : null)),
    [count]
  );
  const next = useCallback(
    () => setSelected((i) => (i !== null ? (i + 1) % count : null)),
    [count]
  );

  useEffect(() => {
    if (selected === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight" || e.key === "ArrowUp") prev();
      if (e.key === "ArrowLeft" || e.key === "ArrowDown") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selected, close, prev, next]);

  // lock body scroll when lightbox is open
  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <section id="gallery" className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="معرض الأعمال"
          title="شغلنا بيتكلم عن نفسه"
          subtitle="صور حقيقية من شغل فبريكا — سجاجيد وموكيت وبطاطين بعد الغسيل."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelected(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-secondary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
              aria-label={`افتحي صورة ${item.title}`}
            >
              {item.src ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <PlaceholderItem title={item.title} />
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                <p className="font-heading text-sm font-bold text-white">{item.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="معرض الصور"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-4 end-4 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="أغلقي معرض الصور"
          >
            <X className="size-6" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute start-4 top-1/2 -translate-y-1/2 flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="الصورة السابقة"
          >
            <ChevronRight className="size-6" />
          </button>

          {/* Image */}
          <div
            className="relative max-h-[80vh] w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-secondary">
              {galleryItems[selected].src ? (
                <Image
                  src={galleryItems[selected].src!}
                  alt={galleryItems[selected].alt}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-muted-foreground">
                  <Camera className="size-16 opacity-30" aria-hidden="true" />
                  <span className="font-heading text-lg font-bold">
                    {galleryItems[selected].title}
                  </span>
                  <span className="text-sm opacity-50">
                    الصورة الحقيقية هتظهر هنا بعد الإضافة
                  </span>
                </div>
              )}
            </div>
            <p className="mt-3 text-center font-heading text-lg font-bold text-white">
              {galleryItems[selected].title}
              <span className="ms-2 text-sm font-normal text-white/50">
                {selected + 1} / {count}
              </span>
            </p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute end-4 top-1/2 -translate-y-1/2 flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="الصورة التالية"
          >
            <ChevronLeft className="size-6" />
          </button>
        </div>
      )}
    </section>
  );
}
