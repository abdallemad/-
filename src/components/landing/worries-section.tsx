import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

export function WorriesSection() {
  const worries = [
    {
      worry: "السجادة تقيلة ومش قادرة أشيلها",
      answer: "متشيليش حاجة. بنستلمها من على باب بيتك وإحنا اللي بنشيل.",
    },
    {
      worry: "مفيش سطح ولا مكان أنشر فيه",
      answer: "الغسيل والتنشيف كله عندنا في المغسلة، وبترجعلك ناشفة وجاهزة تتفرش.",
    },
    {
      worry: "البطاطين مبتدخلش الغسالة",
      answer: "بنغسل البطاطين والمفارش الشتوي التقيلة، وبترجع ناعمة وريحتها حلوة.",
    },
    {
      worry: "مش فاضية أودّي وأجيب",
      answer: "رسالة واتساب واحدة وإحنا نيجي لحد عندك، ونرجّع الحاجة لحد الباب.",
    },
  ];

  return (
    <section id="worries" className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="عارفين تعبك"
          title="غسيل السجاد والبطاطين مش شغلانتك لوحدك"
          subtitle="كل اللي كان بيتعبك في غسيلهم، إحنا بنعمله مكانك."
        />

        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2">
          {worries.map((item) => (
            <StaggerItem
              key={item.worry}
              className="rounded-3xl border border-border bg-background p-6 sm:p-7"
            >
              <p className="font-heading text-xl font-bold text-primary">{item.worry}</p>
              <p className="mt-3 border-s-4 border-gold ps-4 text-lg leading-relaxed font-medium text-foreground">
                {item.answer}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
