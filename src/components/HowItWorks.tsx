import { copy } from "@/content/copy";
import { InlineCta } from "./InlineCta";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bl-section bl-section-alt" aria-labelledby="how-heading">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="bl-section-header bl-fade-up">
          <p className="section-eyebrow">{copy.howItWorks.eyebrow}</p>
          <h2 id="how-heading" className="mt-3">
            {copy.howItWorks.headline}
          </h2>
        </div>

        <ol className="mt-12 grid gap-8 sm:grid-cols-3 lg:mt-14 lg:gap-10">
          {copy.howItWorks.steps.map((step, i) => (
            <li
              key={step.step}
              className="bl-fade-up relative text-center"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <p className="font-heading text-4xl font-semibold text-[#88B2A9]">
                {step.step}
              </p>
              <h3 className="mt-2 text-xl">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-bl-slate">{step.description}</p>
            </li>
          ))}
        </ol>

        <InlineCta
          prompt={copy.howItWorks.inlineCta.prompt}
          cta={copy.howItWorks.inlineCta.cta}
        />
      </div>
    </section>
  );
}
