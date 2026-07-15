import { copy } from "@/content/copy";
import { Button } from "./Button";

export function Benefits() {
  return (
    <section id="benefits" className="bl-section bl-section-alt" aria-labelledby="benefits-heading">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="bl-section-header bl-fade-up">
          <p className="section-eyebrow">{copy.benefits.eyebrow}</p>
          <h2 id="benefits-heading" className="mt-3">
            {copy.benefits.headline}
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {copy.benefits.items.map((item, i) => (
            <article
              key={item.title}
              className="bl-fade-up rounded-card border border-bl-sage/15 bg-white p-6 shadow-soft"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="mb-3 h-1 w-8 bg-bl-sage" aria-hidden />
              <h3 className="text-lg text-bl-sage-deep">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-bl-slate">{item.body}</p>
            </article>
          ))}
        </div>

        <p className="text-small mx-auto mt-8 max-w-2xl text-center text-bl-slate/80">
          {copy.benefits.note}
        </p>
        <div className="mt-8 text-center">
          <Button href="#contact">{copy.benefits.cta}</Button>
        </div>
      </div>
    </section>
  );
}
