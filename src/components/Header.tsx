"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";

const navLinks = [
  { href: "/#approach", label: copy.header.nav.approach },
  { href: "/#tms", label: copy.header.nav.tms },
  { href: "/#doctor", label: copy.header.nav.doctor },
  { href: "/#benefits", label: copy.header.nav.benefits },
  { href: "/#faq", label: copy.header.nav.faq },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <div
        className={`bl-nav-wrap relative ${open ? "z-[70]" : ""} ${scrolled ? "is-scrolled" : ""}`}
      >
        <nav
          className={`bl-nav-bar ${scrolled ? "is-scrolled" : ""}`}
          aria-label="Main"
        >
          <a
            href="/"
            className={`relative z-10 flex shrink-0 items-center rounded-full transition ${
              scrolled
                ? "bg-transparent px-0 py-0 shadow-none"
                : "bg-white/95 px-1.5 py-0.5 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.35)]"
            }`}
            aria-label={`${site.name} home`}
          >
            <Image
              src={site.logo}
              alt={site.name}
              width={200}
              height={67}
              className="h-10 w-auto sm:h-11"
              priority
            />
          </a>

          <div className="bl-nav-pill">
            <div className="flex items-center gap-0.5 px-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-[0.85rem] py-2 text-sm font-semibold text-bl-charcoal transition hover:bg-bl-sage-light hover:text-bl-sage-deep"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href={site.routes.bookConsult}
              className="inline-flex items-center rounded-full bg-bl-sage px-4 py-2 text-sm font-semibold text-white transition hover:bg-bl-sage-dark"
            >
              {copy.header.inquiryCta}
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(39,42,43,0.12)] bg-transparent py-1.5 pl-3.5 pr-1.5 text-sm font-semibold text-bl-charcoal transition hover:bg-bl-sage-light"
              aria-label={`Call ${site.phone}`}
            >
              <span className="hidden xl:inline">{copy.ctas.call}</span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-bl-sage text-white">
                <Phone className="h-3.5 w-3.5" aria-hidden />
              </span>
            </a>
          </div>

          <button
            type="button"
            className="relative z-[80] inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-bl-charcoal shadow-[0_8px_24px_-16px_rgba(0,0,0,0.35)] lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div
            id="mobile-nav"
            className="absolute left-[clamp(1.1rem,3.5vw,2.5rem)] right-[clamp(1.1rem,3.5vw,2.5rem)] top-full z-[70] mt-2 flex flex-col gap-[0.9rem] rounded-3xl border border-[rgba(39,42,43,0.1)] bg-white px-[1.3rem] py-[1.1rem] shadow-[0_20px_50px_-30px_rgba(0,0,0,0.4)] lg:hidden"
          >
            <div className="mb-1">
              <span className="text-sm font-semibold text-bl-charcoal">Menu</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="rounded-xl px-3 py-3 text-base font-semibold text-bl-charcoal hover:bg-bl-sage-light"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.routes.bookConsult}
              onClick={close}
              className="mt-1 inline-flex items-center justify-center rounded-full bg-bl-sage px-5 py-3 text-sm font-semibold text-white"
            >
              {copy.header.inquiryCta}
            </a>
            <a
              href={site.phoneHref}
              onClick={close}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-bl-charcoal/15 px-5 py-3 text-sm font-semibold text-bl-charcoal"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {copy.ctas.call} {site.phone}
            </a>
          </div>
        )}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[55] bg-bl-charcoal/30 lg:hidden"
          onClick={close}
          aria-hidden
        />
      )}
    </>
  );
}
