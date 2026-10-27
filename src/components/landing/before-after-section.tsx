"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/ui/animated-section";

// ← ضع الصور في /public/media/before-after/
// مثال: before: "/media/before-after/compare-01-before.jpg"
//        after:  "/media/before-after/compare-01-after.jpg"
// اتركهم null لإظهار placeholder حتى تضيف الصور الحقيقية
const comparisons = [
  {
    id: 1,
    label: "سجادة صالون",
    before: null as string | null,
    after: null as string | null,
    beforeAlt: "سجادة صالون قبل الغسيل",
    afterAlt: "سجادة صالون بعد الغسيل في فبريكا",
  },
  {
    id: 2,
    label: "موكيت",
    before: null as string | null,
    after: null as string | null,
    beforeAlt: "موكيت قبل التنظيف",
    afterAlt: "موكيت بعد التنظيف في فبريكا",
  },
  {
    id: 3,
    label: "بطانية شتوي",
    before: null as string | null,
    after: null as string | null,
    beforeAlt: "بطانية شتوي قبل الغسيل",
    afterAlt: "بطانية شتوي بعد الغسيل في فبريكا",
  },
];

function CompareSlider({
  label,
  before,
  after,
  beforeAlt,
  afterAlt,
}: {
  label: string;
  before: string | null;
  after: string | null;
  beforeAlt: string;
  afterAlt: string;
}) {
  const [position, setPosition] = useState(50);

  return (
    // dir="ltr" so the clip-path percentage maps left-to-right regardless of page RTL
    <div dir="ltr" className="flex flex-col gap-3">
      <div className="relative aspect-[4/3] select-none overflow-hidden rounded-2xl bg-secondary">
        {/* Before side (right = worn) */}
        <div className="absolute inset-0">
          {before ? (
            <Image src={before} alt={beforeAlt} fill className="object-cover" loading="lazy" />
          ) : (
            <div className="flex h-full items-center justify-center bg-muted text-muted-foreground">
              {/* ← صورة "قبل" — /public/media/before-after/compare-{id:02d}-before.jpg */}
              <div className="flex flex-col items-center gap-2 p-4 text-center">
                <span className="rounded-full bg-foreground/10 px-3 py-1 text-sm font-bold">قبل</span>
                <span className="text-xs opacity-50">صورة placeholder</span>
              </div>
            </div>
          )}
        </div>

        {/* After side (left = clean) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          {after ? (
            <Image src={after} alt={afterAlt} fill className="object-cover" loading="lazy" />
          ) : (
            <div className="flex h-full items-center justify-center bg-secondary text-muted-foreground">
              {/* ← صورة "بعد" — /public/media/before-after/compare-{id:02d}-after.jpg */}
              <div className="flex flex-col items-center gap-2 p-4 text-center">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">بعد</span>
                <span className="text-xs opacity-50">صورة placeholder</span>
              </div>
            </div>
          )}
        </div>

        {/* Labels */}
        <span className="pointer-events-none absolute top-3 right-3 z-10 rounded-full bg-foreground/70 px-3 py-1 font-heading text-sm font-bold text-background">
          قبل
        </span>
        <span className="pointer-events-none absolute top-3 left-3 z-10 rounded-full bg-card px-3 py-1 font-heading text-sm font-bold text-primary shadow">
          بعد
        </span>

        {/* Range input */}
        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label={`قارني ${label} قبل وبعد الغسيل`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={position}
          className="peer absolute inset-0 z-10 size-full cursor-ew-resize opacity-0"
        />

        {/* Drag handle */}
        <div
          className="pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 bg-card/80 shadow-[0_0_0_1px_rgb(0_0_0/0.15)] peer-focus-visible:[&>span]:ring-4 peer-focus-visible:[&>span]:ring-gold"
          style={{ left: `${position}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-card text-primary shadow-lg">
            <ChevronsLeftRight className="size-5" aria-hidden="true" />
          </span>
        </div>
      </div>

      <p className="text-center font-heading text-base font-bold text-foreground">{label}</p>
    </div>
  );
}

export function BeforeAfterSection() {
  return (
    <section id="before-after" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="قبل وبعد"
          title="اسحبي وشوفي الفرق بنفسك"
          subtitle="صور حقيقية من شغل فبريكا — اسحبي العلامة لشمال أو يمين."
        />

        <AnimatedSection className="mt-12 grid gap-6 md:grid-cols-3">
          {comparisons.map((item) => (
            <CompareSlider
              key={item.id}
              label={item.label}
              before={item.before}
              after={item.after}
              beforeAlt={item.beforeAlt}
              afterAlt={item.afterAlt}
            />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
