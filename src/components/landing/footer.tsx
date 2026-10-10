import Link from "next/link";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { BrandMark } from "@/components/landing/brand-mark";
import { phoneLink, site, whatsappLink } from "@/lib/site";

export function Footer() {
  const links = [
    { name: "بنغسل إيه؟", href: "#services" },
    { name: "من الباب للباب", href: "#how-it-works" },
    { name: "بنوصل فين؟", href: "#coverage" },
    { name: "أسئلة بتتسأل كتير", href: "#faq" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div aria-hidden="true" className="kilim-band" />
      <div className="mx-auto max-w-6xl px-5 pt-14 pb-28 sm:px-8 md:pb-10">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Column 1: Logo & Desc */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <BrandMark />
              <span className="font-heading text-3xl font-extrabold">{site.name}</span>
            </div>
            <p className="max-w-xs text-base leading-relaxed text-background/70">
              أكبر مغسلة سجاد وبطاطين في دكرنس. بنستلم من باب بيتك ونرجّعلك حاجتك جديدة لحد
              الباب.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 font-heading text-xl font-bold">روابط سريعة</h3>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-background/70 transition-colors hover:text-gold"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="mb-4 font-heading text-xl font-bold">كلمينا</h3>
            <ul className="flex flex-col gap-4 text-base text-background/70">
              <li className="flex items-center gap-3">
                <Phone className="size-5 text-gold" aria-hidden="true" />
                <a href={phoneLink} dir="ltr" className="transition-colors hover:text-gold">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="size-5 text-gold" aria-hidden="true" />
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  واتساب
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-5 text-gold" aria-hidden="true" />
                <span>{site.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-sm text-background/50">
            © 2026 {site.name} — جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
