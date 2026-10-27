import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { WorriesSection } from "@/components/landing/worries-section";
import { ServicesSection } from "@/components/landing/services-section";
import { BeforeAfterSection } from "@/components/landing/before-after-section";
import { GallerySection } from "@/components/landing/gallery-section";
import { VideosSection } from "@/components/landing/videos-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { CoverageSection } from "@/components/landing/coverage-section";
import { PricesSection } from "@/components/landing/prices-section";
import { ReviewsSection } from "@/components/landing/reviews-section";
import { FaqSection } from "@/components/landing/faq-section";
import { CtaSection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";
import { MobileCtaBar } from "@/components/landing/mobile-cta-bar";
import { WhatsAppFloat } from "@/components/landing/whatsapp-float";
import { MotionProvider } from "@/components/ui/animated-section";

export default function Home() {
  return (
    <MotionProvider>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <WorriesSection />
        <ServicesSection />
        <BeforeAfterSection />
        <GallerySection />
        <VideosSection />
        <HowItWorksSection />
        <CoverageSection />
        <PricesSection />
        <ReviewsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      <MobileCtaBar />
      <WhatsAppFloat />
    </MotionProvider>
  );
}
