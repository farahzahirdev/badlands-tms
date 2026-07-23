import { Clock, MapPin, Mail, Phone } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { GhlInquiryForm } from "./GhlInquiryForm";
import { Button } from "./Button";

export function Contact() {
  return (
    <section id="contact" className="bl-section" aria-labelledby="contact-heading">
      <div className="mx-auto grid max-w-content gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-8">
        <div className="bl-fade-up space-y-6">
          <p className="section-eyebrow">{copy.contact.eyebrow}</p>
          <h2 id="contact-heading">{copy.contact.headline}</h2>
          <p className="text-lead">{copy.contact.description}</p>

          <div className="flex flex-wrap gap-3">
            <Button href={site.routes.bookConsult}>{copy.ctas.bookConsult}</Button>
            <Button href={site.phoneHref} variant="secondary">
              {copy.ctas.call} {site.phone}
            </Button>
          </div>

          <ul className="space-y-4">
            <li>
              <a
                href={site.phoneHref}
                className="group flex items-start gap-3 rounded-xl p-2 transition hover:bg-bl-sage-light/60"
              >
                <span className="bl-icon-badge p-2.5">
                  <Phone className="h-4 w-4" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-bl-slate">
                    {copy.contact.phoneLabel}
                  </span>
                  <span className="mt-0.5 block font-medium text-bl-charcoal group-hover:text-bl-sage-deep">
                    {site.phone}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={site.emailHref}
                className="group flex items-start gap-3 rounded-xl p-2 transition hover:bg-bl-sage-light/60"
              >
                <span className="bl-icon-badge p-2.5">
                  <Mail className="h-4 w-4" aria-hidden />
                </span>
                <span className="pt-2 font-medium text-bl-charcoal group-hover:text-bl-sage-deep">
                  {site.email}
                </span>
              </a>
            </li>
            <li>
              <div className="flex items-start gap-3 rounded-xl p-2">
                <span className="bl-icon-badge p-2.5">
                  <Clock className="h-4 w-4" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-bl-slate">
                    {copy.contact.hoursLabel}
                  </span>
                  <span className="mt-0.5 block font-medium text-bl-charcoal">
                    {site.hours.days}
                  </span>
                  <span className="block text-sm text-bl-slate">{site.hours.time}</span>
                </span>
              </div>
            </li>
            <li>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-xl p-2 transition hover:bg-bl-sage-light/60"
              >
                <span className="bl-icon-badge p-2.5">
                  <MapPin className="h-4 w-4" aria-hidden />
                </span>
                <span className="pt-1.5 leading-relaxed text-bl-charcoal group-hover:text-bl-sage-deep">
                  {site.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </a>
            </li>
          </ul>

          <div className="overflow-hidden rounded-card border border-bl-charcoal/8 bg-white shadow-soft">
            <div className="relative aspect-[16/8] w-full bg-bl-mist sm:aspect-[16/7]">
              <iframe
                title={`Map of ${site.name} at ${site.address}`}
                src={site.mapsEmbedUrl}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 border-t border-bl-charcoal/8 px-4 py-3 text-sm font-semibold text-bl-charcoal transition hover:bg-bl-sage-light/60 hover:text-bl-sage-deep"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-bl-sage-deep" aria-hidden />
                Open in Google Maps
              </span>
              <span aria-hidden>→</span>
            </a>
          </div>

          <p className="text-small text-bl-slate">{copy.contact.trustLine}</p>
        </div>

        <div className="bl-fade-up" style={{ animationDelay: "120ms" }}>
          <div className="overflow-hidden rounded-card border border-bl-charcoal/8 bg-white shadow-lift">
            <div className="border-b border-bl-charcoal/8 bg-bl-sage-light/50 px-6 py-5 sm:px-7">
              <p className="font-heading text-lg font-semibold text-bl-charcoal">
                {copy.contact.formTitle}
              </p>
              <p className="mt-1 text-sm text-bl-slate">{copy.contact.formSubtitle}</p>
            </div>
            <div className="bg-white p-0">
              <GhlInquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
