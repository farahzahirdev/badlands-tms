import Image from "next/image";
import { copy } from "@/content/copy";

export function ClinicExperience() {
  return (
    <section
      id="clinic"
      className="bl-section"
      aria-labelledby="clinic-heading"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="bl-section-header bl-fade-up">
          <p className="section-eyebrow">{copy.clinic.eyebrow}</p>
          <h2 id="clinic-heading" className="mt-3">
            {copy.clinic.headline}
          </h2>
          <p className="text-lead mt-4">{copy.clinic.description}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {copy.clinic.images.map((item, i) => (
            <figure
              key={item.src}
              className="bl-fade-up overflow-hidden rounded-image border border-bl-charcoal/8 bg-white shadow-card"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <figcaption className="px-4 py-3.5">
                <p className="text-sm font-semibold text-bl-charcoal">{item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-bl-slate">{item.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
