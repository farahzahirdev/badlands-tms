import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SkipLink } from "@/components/SkipLink";
import { GhlEmbed } from "@/components/GhlEmbed";
import { Button } from "@/components/Button";
import { copy } from "@/content/copy";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Book a Free Consultation | Badlands TMS",
  description:
    "Book a free 10-minute consultation with Badlands TMS in Bend, Oregon. Discuss Deep TMS candidacy and next steps with our physician-led team.",
};

export default function BookConsultPage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        <section className="bl-section" aria-labelledby="book-consult-heading">
          <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
            <div className="bl-fade-up mx-auto max-w-2xl text-center">
              <p className="section-eyebrow">{copy.bookConsult.eyebrow}</p>
              <h1
                id="book-consult-heading"
                className="mt-3 !normal-case !tracking-tight"
              >
                {copy.bookConsult.headline}
              </h1>
              <p className="text-lead mt-4">{copy.bookConsult.description}</p>
            </div>

            <div className="bl-fade-up mx-auto mt-10 max-w-3xl" style={{ animationDelay: "100ms" }}>
              <div className="overflow-hidden rounded-card border border-bl-charcoal/8 bg-white p-4 shadow-lift sm:p-6">
                <GhlEmbed
                  html={site.ghl.calendarEmbedHtml}
                  placeholderTitle={site.ghl.calendarName}
                  placeholderBody={copy.bookConsult.placeholderNote}
                  caption={site.ghl.calendarName}
                  minHeight="640px"
                />
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button href="/" variant="secondary">
                {copy.bookConsult.backHome}
              </Button>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-bl-charcoal/15 bg-white px-5 py-3 text-sm font-semibold text-bl-charcoal transition hover:bg-bl-sage-light"
              >
                <Phone className="h-4 w-4 text-bl-sage-deep" aria-hidden />
                {copy.bookConsult.callPrompt} {site.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
