import Image from "next/image";
import { copy } from "@/content/copy";
import { Button } from "./Button";

export function Familiar() {
  return (
    <section id="approach" className="bl-section" aria-labelledby="familiar-heading">
      <div className="mx-auto grid max-w-content items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="bl-fade-up relative order-2 mx-auto w-full max-w-sm sm:max-w-md lg:order-1 lg:mx-0 lg:max-w-none">
          <div className="relative overflow-hidden rounded-image shadow-card">
            <Image
              src="/images/depression.png"
              alt={copy.familiar.imageAlt}
              width={1200}
              height={900}
              className="aspect-[4/5] max-h-[360px] w-full object-cover sm:aspect-[5/4] sm:max-h-[380px] lg:aspect-[5/6] lg:max-h-none"
              sizes="(max-width: 1024px) 28rem, 50vw"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-bl-charcoal/45"
              aria-hidden
            />
            <p
              className="absolute inset-0 flex items-center justify-center px-5 text-center font-heading text-[clamp(1.35rem,3.5vw,2.15rem)] font-semibold leading-tight tracking-tight text-white sm:px-8"
              aria-hidden
            >
              {copy.familiar.imageCaption}
            </p>
          </div>
        </div>

        <div
          className="bl-fade-up order-1 mx-auto w-full max-w-xl space-y-5 text-center lg:order-2 lg:mx-0 lg:max-w-none lg:text-left"
          style={{ animationDelay: "80ms" }}
        >
          <p className="section-eyebrow">{copy.familiar.eyebrow}</p>
          <h2 id="familiar-heading">{copy.familiar.headline}</h2>
          <p className="text-lead mx-auto lg:mx-0">{copy.familiar.description}</p>
          <p className="mx-auto text-sm leading-relaxed text-bl-slate lg:mx-0">
            {copy.familiar.hopeNote}
          </p>

          <ul className="mx-auto max-w-md space-y-5 pt-2 text-left lg:mx-0 lg:max-w-none">
            {copy.familiar.pillars.map((pillar) => (
              <li key={pillar.title} className="border-l-2 border-bl-sage pl-4">
                <h3 className="text-lg">{pillar.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-bl-slate">{pillar.body}</p>
              </li>
            ))}
          </ul>

          <div className="flex justify-center pt-2 lg:justify-start">
            <Button href="#contact">{copy.hero.primaryCta}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
