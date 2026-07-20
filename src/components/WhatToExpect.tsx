import { Check } from "lucide-react";
import { copy } from "@/content/copy";

export function WhatToExpect() {
  return (
    <section
      id="what-to-expect"
      className="bl-section bl-section-alt"
      aria-labelledby="expect-heading"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="bl-section-header bl-fade-up">
          <p className="section-eyebrow">{copy.whatToExpect.eyebrow}</p>
          <h2 id="expect-heading" className="mt-3">
            {copy.whatToExpect.headline}
          </h2>
          <p className="text-lead mt-4">{copy.whatToExpect.description}</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3 lg:mt-12">
          {copy.whatToExpect.phases.map((phase, i) => (
            <article
              key={phase.title}
              className="bl-fade-up rounded-card border border-bl-sage/15 bg-white p-6 shadow-soft"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="mb-3 h-1 w-8 bg-bl-sage" aria-hidden />
              <h3 className="text-lg text-bl-sage-deep">{phase.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {phase.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-bl-slate">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-bl-sage-deep"
                      aria-hidden
                      strokeWidth={2.5}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
