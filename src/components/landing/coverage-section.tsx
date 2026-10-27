import { cn } from "cn";
import { MapPin, Truck } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/ui/animated-section";
import { WhatsAppButton } from "@/components/landing/cta-buttons";

function LineStop({ name, className }: { name: string; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-3xl border-2 bg-card px-6 py-5 text-center md:w-56",
        className
      )}
    >
      <h3 className="font-heading text-2xl font-extrabold text-foreground">{name}</h3>
      <p className="mt-1 text-base text-muted-foreground">استلام وتوصيل لحد الباب</p>
    </div>
  );
}

function Road({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-16 items-center justify-center md:h-auto md:flex-1"
    >
      <div
        className={cn(
          "h-full border-s-4 border-dashed md:h-0 md:w-full md:border-s-0 md:border-t-4",
          className
        )}
      />
      <span className="absolute flex size-10 items-center justify-center rounded-full bg-background text-foreground">
        <Truck className={cn("size-6", flip && "-scale-x-100")} />
      </span>
    </div>
  );
}

export function CoverageSection() {
  return (
    <section id="coverage" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="بنوصل فين؟"
          title="دكرنس وخط المنزلة وخط المنصورة"
          subtitle="خدمة الاستلام والتوصيل من الباب للباب شغّالة في دكرنس وعلى الخطين."
        />

        <AnimatedSection className="mx-auto mt-12 flex max-w-4xl flex-col md:flex-row md:items-center">
          <LineStop name="خط المنزلة" className="border-primary/30" />
          <Road className="border-primary/50" />

          <div className="rounded-3xl bg-primary px-7 py-6 text-center text-primary-foreground shadow-xl md:w-60">
            <MapPin className="mx-auto size-8 text-gold" aria-hidden="true" />
            <h3 className="mt-2 font-heading text-3xl font-extrabold">دكرنس</h3>
            <p className="mt-1 text-base text-primary-foreground/80">
              المقر الرئيسي — تغطية كاملة
            </p>
          </div>

          <Road className="border-navy/50" flip />
          <LineStop name="خط المنصورة" className="border-navy/30" />
        </AnimatedSection>

        <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-5 rounded-3xl bg-secondary p-7 text-center">
          <p className="font-heading text-xl font-bold text-foreground">
            مش متأكدة إننا بنوصل لبلدك؟ ابعتيلنا اسم البلد وهنرد عليكي.
          </p>
          <WhatsAppButton
            message="السلام عليكم، عايزة أسأل: بتوصلوا لبلدنا؟ اسم البلد: "
            className="w-full sm:w-auto"
          >
            اسألينا على واتساب
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
