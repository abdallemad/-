"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BrandMark } from "@/components/landing/brand-mark";
import { WhatsAppButton } from "@/components/landing/cta-buttons";
import { site } from "@/lib/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "بنغسل إيه؟", href: "#services" },
    { name: "من الباب للباب", href: "#how-it-works" },
    { name: "بنوصل فين؟", href: "#coverage" },
    { name: "أسئلة", href: "#faq" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex h-18 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="#hero" className="flex items-center gap-2.5">
            <BrandMark />
            <span className="flex flex-col leading-tight">
              <span className="font-heading text-2xl font-extrabold text-primary">{site.name}</span>
              <span className="text-xs font-medium text-muted-foreground">{site.tagline}</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <WhatsAppButton className="hidden h-11 px-5 text-base shadow-none md:inline-flex">
            احجزي استلام
          </WhatsAppButton>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="-me-2 flex size-12 items-center justify-center text-foreground transition-colors hover:text-primary md:hidden"
            aria-label={isOpen ? "اقفلي القايمة" : "افتحي القايمة"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="size-7" /> : <Menu className="size-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-border/50 py-4 text-lg font-medium text-foreground transition-colors last:border-b-0 hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
