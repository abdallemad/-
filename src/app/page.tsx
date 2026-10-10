import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { WorriesSection } from "@/components/landing/worries-section";
import { ServicesSection } from "@/components/landing/services-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { CoverageSection } from "@/components/landing/coverage-section";
import { FaqSection } from "@/components/landing/faq-section";
import { CtaSection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";
import { MobileCtaBar } from "@/components/landing/mobile-cta-bar";
import { MotionProvider } from "@/components/ui/animated-section";

export default function Home() {
  return (
    <MotionProvider>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <WorriesSection />
        <ServicesSection />
        <HowItWorksSection />
        <CoverageSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      <MobileCtaBar />
    </MotionProvider>
  );
}
