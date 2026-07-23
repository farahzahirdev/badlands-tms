import Image from "next/image";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";
import { InlineCta } from "./InlineCta";

const logos = [
  "/images/insurance/Aetna.png",
  "/images/insurance/Bluecross.png",
  "/images/insurance/cigna.png",
  "/images/insurance/UnitedHealthCare.png",
  "/images/insurance/tricare.png",
  "/images/insurance/ModaLogo-1.png",
  "/images/insurance/Providence.png",
  "/images/insurance/regence.png",
];

export function Insurance() {
  return (
    <section id="insurance" className="bl-section bl-section-alt" aria-labelledby="insurance-heading">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="bl-fade-up overflow-hidden rounded-card border border-bl-sage/20 bg-white px-6 py-10 shadow-soft sm:px-10 sm:py-12 lg:px-14">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-eyebrow">{copy.insurance.eyebrow}</p>
            <h2
              id="insurance-heading"
              className="mt-3 !text-[clamp(2rem,4.5vw,3rem)]"
            >
              {copy.insurance.headline}
            </h2>
            <p className="text-lead mt-4">{copy.insurance.description}</p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-12">
            {logos.map((src) => (
              <Image
                key={src}
                src={src}
                alt=""
                width={160}
                height={64}
                className="h-10 w-auto object-contain brightness-0 sm:h-12"
              />
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-xl text-center text-sm text-bl-slate">
            {copy.insurance.note}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href={site.routes.inquiry}>{copy.insurance.cta}</Button>
            <Button href={site.phoneHref} variant="secondary">
              {copy.ctas.call} {site.phone}
            </Button>
          </div>
        </div>

        <InlineCta
          prompt={copy.insurance.inlineCta.prompt}
          cta={copy.insurance.inlineCta.cta}
          href={site.routes.inquiry}
          secondaryCta={copy.ctas.call}
          secondaryHref={site.phoneHref}
          className="mt-8 bg-white"
        />
      </div>
    </section>
  );
}
