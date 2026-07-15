import Image from "next/image";
import { copy } from "@/content/copy";

export function TeamExtras() {
  return (
    <section className="bl-section" aria-labelledby="extras-heading">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="bl-section-header bl-fade-up">
          <p className="section-eyebrow">{copy.teamExtras.eyebrow}</p>
          <h2 id="extras-heading" className="mt-3">
            {copy.teamExtras.headline}
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-14">
          {copy.teamExtras.items.map((item, i) => (
            <article
              key={item.name}
              className="bl-fade-up flex gap-5 rounded-card border border-bl-charcoal/8 bg-bl-mist/60 p-5 sm:p-6"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl sm:h-28 sm:w-28">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </div>
              <div>
                <h3 className="text-xl">{item.name}</h3>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-bl-sage-deep">
                  {item.role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-bl-slate">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
