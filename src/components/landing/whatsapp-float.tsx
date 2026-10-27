"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { trackWhatsAppClick } from "@/lib/analytics";

/**
 * زرار واتساب عائم — يظهر على الديسكتوب في الزاوية السفلية اليمنى.
 * على الموبايل يختفي لأن MobileCtaBar يغطي نفس الوظيفة.
 */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackWhatsAppClick}
      aria-label="تواصلي معنا على واتساب"
      className="fixed bottom-6 right-6 z-40 hidden size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-whatsapp/30 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp/40 md:flex"
    >
      <MessageCircle className="size-7" aria-hidden="true" />
    </a>
  );
}
