"use client";

import { type ReactNode } from "react";
import { cn } from "cn";
import { MessageCircle, Phone } from "lucide-react";
import { phoneLink, whatsappLink } from "@/lib/site";
import { trackCallClick, trackWhatsAppClick } from "@/lib/analytics";

const base =
  "inline-flex h-14 items-center justify-center gap-2.5 rounded-full px-7 font-heading text-lg font-bold whitespace-nowrap transition-all outline-none focus-visible:ring-4 focus-visible:ring-ring/40 active:translate-y-px";

export function WhatsAppButton({
  children = "احجزي على واتساب",
  message,
  className,
}: {
  children?: ReactNode;
  message?: string;
  className?: string;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackWhatsAppClick}
      className={cn(
        base,
        "bg-whatsapp text-white shadow-lg shadow-whatsapp/25 hover:bg-whatsapp/90",
        className
      )}
    >
      <MessageCircle className="size-6 shrink-0" aria-hidden="true" />
      {children}
    </a>
  );
}

export function CallButton({
  children = "اتصلي بينا",
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={phoneLink}
      onClick={trackCallClick}
      className={cn(
        base,
        "border-2 border-primary/25 bg-card text-primary hover:border-primary/50 hover:bg-secondary",
        className
      )}
    >
      <Phone className="size-5 shrink-0" aria-hidden="true" />
      {children}
    </a>
  );
}
