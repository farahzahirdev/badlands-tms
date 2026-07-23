import { Phone } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";
import { GhlCalendarEmbed } from "./GhlCalendarEmbed";

export function BookConsult() {
  return (
    <section
      id="book-consult"
      className="bl-section bl-section-alt !pt-8 sm:!pt-10 lg:!pt-12"
      aria-labelledby="book-consult-heading"
    >
      <div className="mx-auto grid max-w-content items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div className="bl-fade-up space-y-5 text-center lg:sticky lg:top-28 lg:text-left">
          <p className="section-eyebrow">{copy.bookConsult.eyebrow}</p>
          <h2 id="book-consult-heading">{copy.bookConsult.headline}</h2>
          <p className="text-lead mx-auto max-w-xl lg:mx-0">
            {copy.bookConsult.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1 lg:justify-start">
            <Button href={site.phoneHref} variant="secondary">
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden />
                {copy.bookConsult.callPrompt} {site.phone}
              </span>
            </Button>
            <Button href={site.routes.inquiry} variant="primary">
              {copy.ctas.submitInquiry}
            </Button>
          </div>
        </div>

        <div className="bl-fade-up" style={{ animationDelay: "100ms" }}>
          <div className="overflow-hidden rounded-card border border-bl-charcoal/8 bg-white p-2 shadow-lift sm:p-3">
            <GhlCalendarEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
