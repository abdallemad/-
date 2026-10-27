import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export function FaqSection() {
  const faqs = [
    {
      question: "بتيجوا لحد البيت فعلاً؟",
      answer:
        "أيوه. الخدمة من الباب للباب: بنستلم الحاجة من باب بيتك، وبعد الغسيل بنرجّعها لحد الباب.",
    },
    {
      question: "بتغطّوا أنهي مناطق؟",
      answer:
        "دكرنس كلها، وخط المنزلة، وخط المنصورة. ولو مش متأكدة من بلدك ابعتيلنا اسمها على واتساب.",
    },
    {
      question: "بتغسلوا إيه بالظبط؟",
      answer: "السجاد بكل أنواعه ومقاساته، والموكيت، والبطاطين والمفارش الشتوي.",
    },
    {
      question: "الغسيل بياخد قد إيه وقت؟",
      answer:
        "في العادة من ٢٤ لـ٤٨ ساعة من وقت الاستلام لحد التوصيل. في حالات الطلب الكبير ممكن يزيد شوية ونعلمك مسبقاً.",
    },
    {
      question: "السعر بيتحسب إزاي؟",
      answer:
        "حسب نوع ومقاس الحاجة. ابعتيلنا صورة أو المقاس على واتساب ونقولك السعر قبل ما نستلم.",
    },
    {
      question: "أحجز إزاي؟",
      answer:
        "برسالة واتساب أو مكالمة. قوليلنا عندك إيه وعنوانك فين، ونتفق على معاد الاستلام.",
    },
  ];

  return (
    <section id="faq" className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow="قبل ما تحجزي" title="أسئلة بتتسأل كتير" />

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-border bg-background open:border-primary/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-heading text-xl font-bold text-foreground [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Plus
                  className="size-6 shrink-0 text-primary transition-transform group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-5 pb-5 text-lg leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
