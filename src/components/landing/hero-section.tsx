import { Check, Truck } from "lucide-react";
import { BeforeAfterCarpet } from "@/components/landing/before-after-carpet";
import { CallButton, WhatsAppButton } from "@/components/landing/cta-buttons";

const promises = [
  "استلام وتوصيل لحد باب البيت",
  "سجاد وموكيت وبطاطين",
  "دكرنس وخط المنزلة وخط المنصورة",
];

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(60rem_32rem_at_85%_-10%,var(--secondary),transparent)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-10 pb-16 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:pt-20 lg:pb-24">
        <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-700">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-4 py-1.5 font-heading text-base font-bold text-primary">
            <span className="size-2 rounded-full bg-gold" aria-hidden="true" />
            أكبر مغسلة سجاد وبطاطين في دكرنس
          </p>

          <h1 className="font-heading text-[2.6rem] leading-[1.25] font-extrabold text-balance text-foreground sm:text-5xl sm:leading-[1.25] xl:text-6xl xl:leading-[1.2]">
            سجاجيدك وبطاطينك يرجعولك{" "}
            <span className="bg-[linear-gradient(transparent_64%,var(--gold)_64%,var(--gold)_92%,transparent_92%)] px-1 text-primary">
              جداد
            </span>
            .. وإنتي مرتاحة في بيتك
          </h1>

          <p className="mt-6 max-w-xl text-xl leading-relaxed text-muted-foreground">
            لا شيل ولا نشر ولا وجع ضهر. بنستلم من باب بيتك، نغسل وننشّف عندنا في
            خلال ٢٤–٤٨ ساعة، ونرجّعلك حاجتك نضيفة وريحتها حلوة لحد الباب.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton>احجزي استلام على واتساب</WhatsAppButton>
            <CallButton />
          </div>

          <ul className="mt-8 flex flex-col gap-2.5 text-base font-medium text-foreground sm:flex-row sm:flex-wrap sm:gap-x-6">
            {promises.map((promise) => (
              <li key={promise} className="flex items-center gap-2">
                <Check className="size-5 shrink-0 text-whatsapp" aria-hidden="true" />
                {promise}
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative">
          <div className="rounded-[2rem] bg-secondary p-5 pb-14 sm:p-8 sm:pb-16">
            <BeforeAfterCarpet />
            <figcaption className="mt-5 flex items-center justify-between gap-3 text-sm text-muted-foreground">
              <span className="font-heading text-base font-bold text-foreground">
                اسحبي وشوفي الفرق
              </span>
              <span>رسم توضيحي</span>
            </figcaption>
          </div>

          <div className="absolute -bottom-6 start-5 flex items-center gap-3 rounded-2xl bg-navy px-4 py-3 text-primary-foreground shadow-xl sm:start-8">
            <span className="flex size-10 items-center justify-center rounded-full bg-gold text-navy">
              <Truck className="size-5" aria-hidden="true" />
            </span>
            <span className="font-heading text-base leading-tight font-bold">
              من الباب للباب
              <span className="block text-sm font-medium text-primary-foreground/75">
                إحنا اللي بنيجي وبنرجّع
              </span>
            </span>
          </div>
        </figure>
      </div>

      <div aria-hidden="true" className="kilim-band" />
      <div aria-hidden="true" className="fringe text-gold" />
    </section>
  );
}
