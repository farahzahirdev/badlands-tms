import Image from "next/image";
import { Clock, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";

const quickLinks = [
  { href: "#approach", label: copy.header.nav.approach },
  { href: "#tms", label: copy.header.nav.tms },
  { href: "#doctor", label: copy.header.nav.doctor },
  { href: "#benefits", label: copy.header.nav.benefits },
  { href: "#faq", label: copy.header.nav.faq },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-bl-charcoal/8 bg-gradient-to-b from-white to-bl-mist pb-8">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-14">
          <div className="col-span-2 text-center sm:text-left lg:col-span-1">
            <Image
              src={site.logo}
              alt={site.name}
              width={240}
              height={80}
              className="mx-auto h-14 w-auto sm:mx-0 sm:h-16"
            />
            <p className="text-small mx-auto mt-4 max-w-xs leading-relaxed sm:mx-0">
              {copy.footer.tagline}
            </p>
            <a href="#contact" className="btn-primary mt-6 inline-flex">
              {copy.header.inquiryCta}
            </a>
            <div className="mt-5 flex items-center justify-center gap-3 sm:justify-start">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Badlands TMS on Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-bl-charcoal/10 bg-white text-bl-charcoal shadow-soft transition hover:border-bl-sage/40 hover:bg-bl-sage-light hover:text-bl-sage-deep"
              >
                <Facebook className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          <div className="col-span-2 mx-auto grid w-full max-w-md grid-cols-2 gap-6 px-2 sm:max-w-none sm:gap-10 sm:px-0 lg:contents">
            <div className="pl-1 text-left sm:pl-0">
              <h3 className="section-eyebrow mb-4">{copy.footer.contactHeading}</h3>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-2.5 text-sm text-bl-charcoal/85 sm:gap-3">
                  <span className="bl-icon-badge shrink-0 p-2 sm:p-2.5">
                    <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
                  </span>
                  <span className="pt-1.5 leading-snug sm:pt-1.5">{site.phone}</span>
                </li>
                <li>
                  <a
                    href={site.emailHref}
                    className="group inline-flex items-start gap-2.5 text-sm font-medium text-bl-charcoal transition hover:text-bl-sage-deep sm:items-center sm:gap-3"
                  >
                    <span className="bl-icon-badge shrink-0 p-2 sm:p-2.5">
                      <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
                    </span>
                    <span className="break-all pt-1.5 leading-snug sm:pt-0">{site.email}</span>
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-bl-charcoal/85 sm:gap-3">
                  <span className="bl-icon-badge shrink-0 p-2 sm:p-2.5">
                    <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
                  </span>
                  <span className="pt-1.5 leading-relaxed sm:pt-1.5">
                    <span className="block font-medium text-bl-charcoal">{site.hours.days}</span>
                    <span className="block text-bl-slate">{site.hours.time}</span>
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-bl-charcoal/85 sm:gap-3">
                  <span className="bl-icon-badge shrink-0 p-2 sm:p-2.5">
                    <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
                  </span>
                  <span className="pt-1.5 leading-relaxed">{site.address}</span>
                </li>
              </ul>
            </div>

            <div className="text-left">
              <h3 className="section-eyebrow mb-4">{copy.footer.quickLinksHeading}</h3>
              <ul className="grid gap-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="nav-link text-bl-charcoal/80 hover:text-bl-sage-deep">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-card border border-bl-charcoal/8 bg-white/80 px-5 py-5 shadow-soft sm:px-6">
          <p className="text-[12px] leading-relaxed text-bl-slate/75">{copy.footer.notEmergency}</p>
          <p className="mt-2 text-[12px] leading-relaxed text-bl-slate/70">{copy.footer.disclaimer}</p>
          <p className="mt-2 text-[12px] leading-relaxed text-bl-slate/70">{copy.footer.oregonNote}</p>
          <p className="mt-4 border-t border-bl-charcoal/8 pt-4 text-xs text-bl-slate/80">
            © {year} {site.name}. {copy.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
