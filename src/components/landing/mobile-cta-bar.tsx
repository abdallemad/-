import { CallButton, WhatsAppButton } from "@/components/landing/cta-buttons";

/** Booking bar pinned to the bottom of the screen on phones. */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <div className="flex gap-2.5">
        <WhatsAppButton className="h-12 flex-1 px-4 shadow-none">احجزي على واتساب</WhatsAppButton>
        <CallButton className="h-12 px-5">اتصال</CallButton>
      </div>
    </div>
  );
}
