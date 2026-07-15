import { copy } from "@/content/copy";

export function Conditions() {
  return (
    <section id="conditions" className="bl-section" aria-labelledby="conditions-heading">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="bl-section-header bl-fade-up">
          <p className="section-eyebrow">{copy.conditions.eyebrow}</p>
          <h2 id="conditions-heading" className="mt-3">
            {copy.conditions.headline}
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3 lg:mt-14">
          {copy.conditions.items.map((item, i) => (
            <article
              key={item.title}
              className="bl-fade-up text-center"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="mx-auto mb-4 h-1 w-10 bg-bl-sage" aria-hidden />
              <h3 className="text-xl">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-bl-slate">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
