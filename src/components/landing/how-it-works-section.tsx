import { DoorOpen, Droplets, MessageCircle, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { WhatsAppButton } from "@/components/landing/cta-buttons";

export function HowItWorksSection() {
  const steps = [
    {
      number: "١",
      icon: <MessageCircle className="size-6" aria-hidden="true" />,
      title: "ابعتيلنا على واتساب",
      description: "قوليلنا عندك إيه وعنوانك فين، ونتفق سوا على معاد الاستلام.",
    },
    {
      number: "٢",
      icon: <DoorOpen className="size-6" aria-hidden="true" />,
      title: "نستلم من باب بيتك",
      description: "بنيجي لحد الباب في المعاد وإحنا اللي بنشيل. إنتي متنزليش ولا تشيلي حاجة.",
    },
    {
      number: "٣",
      icon: <Droplets className="size-6" aria-hidden="true" />,
      title: "نغسل وننشّف عندنا",
      description: "تنضيف عميق في المغسلة بأحدث المعدات، وتنشيف كامل.",
    },
    {
      number: "٤",
      icon: <Sparkles className="size-6" aria-hidden="true" />,
      title: "ترجعلك جديدة لحد الباب",
      description: "نضيفة وناشفة وريحتها حلوة — جاهزة تتفرش على طول.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-navy py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="من الباب للباب"
          title="إنتي تبعتي رسالة.. وإحنا نعمل الباقي"
          subtitle="٤ خطوات وحاجتك ترجعلك جديدة لحد باب البيت."
        />

        <StaggerContainer className="mt-14 grid gap-8 lg:grid-cols-4 lg:gap-6">
          {steps.map((step) => (
            <StaggerItem
              key={step.number}
              className="relative flex gap-5 after:absolute after:start-7 after:top-16 after:-bottom-6 after:border-s-2 after:border-dashed after:border-gold/40 last:after:hidden lg:flex-col lg:gap-0 lg:after:start-18 lg:after:top-7 lg:after:bottom-auto lg:after:w-[calc(100%-3rem)] lg:after:border-s-0 lg:after:border-t-2"
            >
              <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gold font-heading text-2xl font-extrabold text-navy">
                {step.number}
              </div>
              <div className="lg:mt-6">
                <div className="flex items-center gap-2.5 text-gold">
                  {step.icon}
                  <h3 className="font-heading text-xl font-bold text-primary-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-2 text-lg leading-relaxed text-primary-foreground/75">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-14 flex justify-center">
          <WhatsAppButton className="w-full sm:w-auto">ابدئي بأول خطوة</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
