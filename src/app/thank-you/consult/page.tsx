import type { Metadata } from "next";
import { Check, Phone } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SkipLink } from "@/components/SkipLink";
import { Button } from "@/components/Button";
import { copy } from "@/content/copy";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Consultation Confirmed | Badlands TMS",
  description:
    "Thank you for booking a consultation with Badlands TMS. Our team looks forward to speaking with you.",
};

export default function ThankYouConsultPage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        <section className="bl-section" aria-labelledby="thank-you-heading">
          <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
            <div className="bl-fade-up mx-auto max-w-xl text-center">
              <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-bl-sage text-white">
                <Check className="h-7 w-7" aria-hidden strokeWidth={2.5} />
              </span>
              <p className="section-eyebrow mt-6">{copy.thankYouConsult.eyebrow}</p>
              <h1
                id="thank-you-heading"
                className="mt-3 !normal-case !tracking-tight"
              >
                {copy.thankYouConsult.headline}
              </h1>
              <p className="text-lead mt-4">{copy.thankYouConsult.description}</p>
            </div>

            <div className="bl-fade-up mx-auto mt-10 max-w-lg rounded-card border border-bl-sage/20 bg-bl-mist px-6 py-8 sm:px-8">
              <h2 className="!text-lg !normal-case !tracking-tight">
                {copy.thankYouConsult.nextStepsHeading}
              </h2>
              <ul className="mt-4 space-y-3 text-left">
                {copy.thankYouConsult.nextSteps.map((step) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 text-sm leading-relaxed text-bl-slate"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bl-sage" aria-hidden />
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button href="/">{copy.thankYouConsult.backHome}</Button>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-bl-charcoal/15 bg-white px-5 py-3 text-sm font-semibold text-bl-charcoal transition hover:bg-bl-sage-light"
              >
                <Phone className="h-4 w-4 text-bl-sage-deep" aria-hidden />
                {copy.thankYouConsult.callCta} {site.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
