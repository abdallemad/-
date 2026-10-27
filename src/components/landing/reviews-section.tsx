import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

// ← هذه بيانات placeholder — استبدلها بآراء العملاء الحقيقية
const reviews = [
  {
    id: 1,
    name: "أم محمد",
    city: "دكرنس",
    rating: 5,
    text: "والله خدمة ممتازة، السجادة رجعت زي الجديدة وريحتها حلوة. وجاهزة في يوم.",
  },
  {
    id: 2,
    name: "أم أحمد",
    city: "المنزلة",
    rating: 5,
    text: "سهّلوا عليّ كتير. جم استلموا من الباب ورجّعوا في الميعاد. هنكرر التجربة.",
  },
  {
    id: 3,
    name: "أم خالد",
    city: "المنصورة",
    rating: 5,
    text: "البطاطين رجعت ناعمة وريحة الغسيل حلوة. سعر كويس وخدمة أحسن.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`تقييم ${count} من 5 نجوم`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${i < count ? "fill-gold text-gold" : "fill-muted text-muted"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="آراء العملاء"
          title="بيقولوا إيه عننا؟"
        />

        {/* Placeholder notice — remove after adding real reviews */}
        <p className="mt-4 text-center text-sm text-muted-foreground">
          ⚠️ هذه آراء نموذجية — ستُستبدل بآراء العملاء الحقيقية
        </p>

        <StaggerContainer className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <StaggerItem
              key={review.id}
              className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6"
            >
              <Stars count={review.rating} />
              <p className="flex-1 text-lg leading-relaxed text-foreground">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-2 border-t border-border pt-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-secondary font-heading text-base font-extrabold text-primary">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading text-base font-bold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.city}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
