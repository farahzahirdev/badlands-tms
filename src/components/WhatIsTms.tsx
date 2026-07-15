import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";

export function WhatIsTms() {
  return (
    <section id="tms" className="bl-section" aria-labelledby="tms-heading">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="bl-fade-up space-y-5">
            <p className="section-eyebrow">{copy.whatIsTms.eyebrow}</p>
            <h2 id="tms-heading">{copy.whatIsTms.headline}</h2>
            <p className="text-lead">{copy.whatIsTms.description}</p>

            <div className="overflow-hidden rounded-image border border-bl-charcoal/8 bg-bl-charcoal shadow-card">
              <div className="relative aspect-video w-full">
                <iframe
                  title={site.brainswayVideoTitle}
                  src={`${site.brainswayVideoEmbedUrl}?rel=0`}
                  className="absolute inset-0 h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
            <p className="text-sm font-medium text-bl-slate">{site.brainswayVideoTitle}</p>
          </div>

          <div className="space-y-5">
            {copy.whatIsTms.steps.map((step, i) => (
              <article
                key={step.title}
                className="bl-fade-up rounded-card border border-bl-charcoal/8 bg-bl-mist/50 p-5 sm:p-6"
                style={{ animationDelay: `${(i + 1) * 70}ms` }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-bl-sage-deep">
                  Step {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 text-lg">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bl-slate">{step.body}</p>
              </article>
            ))}
            <div className="flex justify-center pt-2 lg:justify-start">
              <Button href="#contact">{copy.whatIsTms.cta}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
