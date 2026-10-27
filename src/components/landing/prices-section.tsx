import { Info } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/ui/animated-section";
import { WhatsAppButton } from "@/components/landing/cta-buttons";
import { priceList, priceNote } from "@/lib/prices";

export function PricesSection() {
  return (
    <section id="prices" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="الأسعار"
          title="أسعار بسيطة وواضحة"
          subtitle="الأسعار تبدأ من كذا — السعر النهائي حسب المقاس والنوع."
        />

        <AnimatedSection className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <table className="w-full text-start">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="px-6 py-4 text-start font-heading text-base font-bold text-foreground">
                  نوع الخدمة
                </th>
                <th className="px-6 py-4 text-start font-heading text-base font-bold text-foreground">
                  الوحدة
                </th>
                <th className="px-6 py-4 text-start font-heading text-base font-bold text-foreground">
                  يبدأ من
                </th>
              </tr>
            </thead>
            <tbody>
              {priceList.map((row, i) => (
                <tr
                  key={row.type}
                  className={i < priceList.length - 1 ? "border-b border-border" : ""}
                >
                  <td className="px-6 py-4 font-heading text-lg font-bold text-foreground">
                    {row.type}
                  </td>
                  <td className="px-6 py-4 text-base text-muted-foreground">{row.unit}</td>
                  <td className="px-6 py-4 font-heading text-lg font-bold text-primary">
                    {row.startingPrice === "..."
                      ? <span className="text-muted-foreground text-sm">— قريباً —</span>
                      : `${row.startingPrice} جنيه`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </AnimatedSection>

        <div className="mt-5 flex items-start gap-2.5 rounded-2xl border border-border bg-card p-4 text-sm text-muted-foreground">
          <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <p>{priceNote}</p>
        </div>

        <div className="mt-8 flex justify-center">
          <WhatsAppButton
            message="السلام عليكم، عايزة أعرف سعر غسيل "
            className="w-full sm:w-auto"
          >
            اسأل عن السعر على واتساب
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
