import { type ReactNode } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

function ServiceIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className="size-16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function ServicesSection() {
  const services = [
    {
      icon: (
        <ServiceIcon>
          <path d="M14 8v6M23 8v6M32 8v6M41 8v6M50 8v6M14 50v6M23 50v6M32 50v6M41 50v6M50 50v6" />
          <rect x="9" y="14" width="46" height="36" rx="3" />
          <path d="M32 22 44 32 32 42 20 32Z" className="fill-gold/50" />
        </ServiceIcon>
      ),
      title: "السجاد",
      description:
        "كل الأنواع والمقاسات — صوف، حرير، صناعي. من سجادة الصالون الكبيرة لسجادة الصلاة، بترجع زي الجديدة.",
    },
    {
      icon: (
        <ServiceIcon>
          <path d="M22 18h30a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H22" className="fill-gold/50" />
          <ellipse cx="22" cy="34" rx="12" ry="16" />
          <ellipse cx="22" cy="34" rx="6" ry="8" />
          <path d="M22 34h.01" />
        </ServiceIcon>
      ),
      title: "الموكيت",
      description: "تنضيف عميق للموكيت بكل المقاسات، وبنشتغل على البقع والريحة لحد ما يرجع نضيف.",
    },
    {
      icon: (
        <ServiceIcon>
          <rect x="10" y="12" width="44" height="12" rx="6" />
          <rect x="10" y="26" width="44" height="12" rx="6" className="fill-gold/50" />
          <rect x="10" y="40" width="44" height="12" rx="6" />
        </ServiceIcon>
      ),
      title: "البطاطين",
      description:
        "البطاطين والمفارش الشتوي اللي مبتدخلش غسالة البيت — بترجع نضيفة وناعمة وريحتها حلوة.",
    },
  ];

  return (
    <section id="services" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="خدماتنا"
          title="بنغسل إيه؟"
          subtitle="كل الحاجات التقيلة اللي غسيلها في البيت بيهدّ الحيل."
        />

        <StaggerContainer className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <StaggerItem
              key={service.title}
              className="flex flex-col rounded-3xl bg-card p-7 shadow-sm"
            >
              <div className="text-primary">{service.icon}</div>
              <h3 className="mt-5 font-heading text-2xl font-extrabold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
