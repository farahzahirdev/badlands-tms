import { Check } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";

export function Candidate() {
  return (
    <section
      id="candidate"
      className="bl-section bl-section-alt"
      aria-labelledby="candidate-heading"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="bl-section-header bl-fade-up">
          <p className="section-eyebrow">{copy.candidate.eyebrow}</p>
          <h2 id="candidate-heading" className="mt-3">
            {copy.candidate.headline}
          </h2>
          <p className="text-lead mt-4">{copy.candidate.description}</p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2 lg:mt-12">
          {copy.candidate.signs.map((sign, i) => (
            <li
              key={sign}
              className="bl-fade-up flex items-start gap-3 rounded-card border border-bl-sage/15 bg-white px-5 py-4 shadow-soft"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bl-sage text-white">
                <Check className="h-3.5 w-3.5" aria-hidden strokeWidth={2.5} />
              </span>
              <span className="text-sm font-medium leading-relaxed text-bl-charcoal">{sign}</span>
            </li>
          ))}
        </ul>

        <p className="text-small mx-auto mt-8 max-w-2xl text-center">{copy.candidate.note}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href={site.routes.inquiry}>{copy.candidate.cta}</Button>
          <Button href={site.phoneHref} variant="secondary">
            {copy.ctas.call} {site.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
