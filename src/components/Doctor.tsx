import Image from "next/image";
import { copy } from "@/content/copy";
import { Button } from "./Button";

export function Doctor() {
  return (
    <section id="doctor" className="bl-section bl-section-alt" aria-labelledby="doctor-heading">
      <div className="mx-auto grid max-w-content items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8">
        <div className="bl-fade-up space-y-5 text-center lg:text-left">
          <p className="section-eyebrow">{copy.doctor.eyebrow}</p>
          <h2 id="doctor-heading">{copy.doctor.headline}</h2>
          <div>
            <p className="font-heading text-2xl font-semibold text-bl-charcoal">{copy.doctor.name}</p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-bl-sage-deep">
              {copy.doctor.role}
            </p>
          </div>
          <p className="mx-auto max-w-2xl leading-relaxed text-bl-slate lg:mx-0">{copy.doctor.bio}</p>
          <div className="flex justify-center lg:justify-start">
            <Button href="#contact">{copy.doctor.cta}</Button>
          </div>
        </div>

        <div className="bl-fade-up mx-auto w-full max-w-md lg:mx-0" style={{ animationDelay: "100ms" }}>
          <div className="overflow-hidden rounded-image bg-bl-sage-light shadow-card">
            <Image
              src="/images/dr-brown.jpeg"
              alt="Chad Brown, M.D., Pediatric and Adult Psychiatrist"
              width={644}
              height={644}
              className="aspect-square w-full object-cover object-top"
              sizes="(max-width: 1024px) 90vw, 40vw"
              priority
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 grid max-w-content gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:mt-16 lg:grid-cols-4 lg:px-8">
        {copy.doctor.stats.map((stat, i) => (
          <div
            key={stat.label}
            className="bl-fade-up rounded-card border border-bl-sage/20 bg-white px-5 py-6 text-center shadow-soft"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <p className="font-heading text-3xl font-semibold text-bl-sage-deep">{stat.value}</p>
            <p className="mt-2 text-sm text-bl-slate">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
