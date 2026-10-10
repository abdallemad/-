import { AnimatedSection } from "@/components/ui/animated-section";
import { CallButton, WhatsAppButton } from "@/components/landing/cta-buttons";

const occasions = ["قبل العيد", "قبل دخلة الشتا", "جهاز العروسة", "بعد العزومات"];

export function CtaSection() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* The panel is drawn as a rug: fringe on both ends, woven bands inside. */}
        <AnimatedSection>
          <div aria-hidden="true" className="fringe mx-3 rotate-180 text-gold" />
          <div className="overflow-hidden rounded-md bg-primary text-primary-foreground shadow-2xl">
            <div aria-hidden="true" className="kilim-band" />
            <div className="m-3 border-2 border-gold/50 px-5 py-12 text-center sm:m-4 sm:px-10 sm:py-16">
              <h2 className="font-heading text-3xl leading-snug font-extrabold text-balance sm:text-5xl sm:leading-tight">
                جاهزة تفرشي سجادة ريحتها نضافة؟
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-xl leading-relaxed text-primary-foreground/85">
                ابعتيلنا دلوقتي ونتفق على معاد الاستلام من باب بيتك.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <WhatsAppButton className="shadow-black/20">احجزي على واتساب</WhatsAppButton>
                <CallButton className="border-transparent" />
              </div>

              <p className="mt-10 text-base text-primary-foreground/75">أنسب وقت للغسيل</p>
              <ul className="mt-3 flex flex-wrap justify-center gap-2.5">
                {occasions.map((occasion) => (
                  <li
                    key={occasion}
                    className="rounded-full border border-gold/50 px-4 py-1.5 font-heading text-base font-bold text-gold"
                  >
                    {occasion}
                  </li>
                ))}
              </ul>
            </div>
            <div aria-hidden="true" className="kilim-band" />
          </div>
          <div aria-hidden="true" className="fringe mx-3 text-gold" />
        </AnimatedSection>
      </div>
    </section>
  );
}
