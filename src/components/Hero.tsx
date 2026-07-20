import Image from "next/image";
import { copy } from "@/content/copy";
import { Button } from "./Button";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="bl-hero">
      <div className="bl-hero-shell">
        <div className="bl-hero-card">
          <div className="bl-hero-media" aria-hidden>
            <Image
              src="/images/hero-site.jpg"
              alt=""
              fill
              priority
              quality={92}
              className="object-cover object-[center_42%]"
              sizes="100vw"
            />
          </div>
          <div className="bl-hero-tint" aria-hidden />
          <div className="bl-hero-scrim" aria-hidden />

          <div className="bl-hero-inner">
            <div className="mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8">
              <div className="bl-fade-up mx-auto max-w-[780px] space-y-4 text-center text-white sm:space-y-5 lg:mx-0 lg:space-y-6 lg:text-left">
                <p className="font-heading text-xl font-semibold tracking-tight text-bl-sage sm:text-2xl">
                  {copy.hero.brand}
                </p>
                <div
                  className="mx-auto h-px w-14 origin-center bg-bl-sage animate-draw-line lg:mx-0 lg:origin-left"
                  aria-hidden
                />
                <h1
                  id="hero-heading"
                  className="!text-[clamp(2.1rem,8vw,3.25rem)] !leading-[1.14] !tracking-[-0.03em] !text-white"
                  style={{
                    fontFamily:
                      "freight-sans-pro, var(--font-source-sans), system-ui, sans-serif",
                  }}
                >
                  {copy.hero.headline}
                </h1>
                <p className="mx-auto mt-1 max-w-[50ch] text-base leading-[1.7] text-white/90 sm:text-lg lg:mx-0 lg:leading-[1.75]">
                  {copy.hero.subheadline}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-1 lg:justify-start lg:pt-2">
                  <Button
                    href="#contact"
                    variant="primary"
                    className="!rounded-full !bg-white !text-bl-charcoal hover:!bg-bl-sage-light"
                  >
                    {copy.hero.primaryCta}
                  </Button>
                  <Button
                    href="#contact"
                    variant="secondary"
                    className="!rounded-full !border-white/40 !bg-transparent !text-white hover:!border-white/60 hover:!bg-white/10"
                  >
                    {copy.hero.secondaryCta}
                  </Button>
                </div>

                <ul
                  className="flex flex-wrap items-center justify-center gap-2 pt-1 lg:justify-start"
                  aria-label="Treatment highlights"
                >
                  {copy.hero.chips.map((chip) => (
                    <li
                      key={chip}
                      className="rounded-full border border-white/35 bg-white/[0.08] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>

                <p className="mx-auto max-w-md text-sm leading-relaxed text-white/75 lg:mx-0">
                  {copy.hero.sessionNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
