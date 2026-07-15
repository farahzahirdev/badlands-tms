import Image from "next/image";
import { copy } from "@/content/copy";

const logos = [
  { src: "/images/insurance/Aetna.png", alt: "Aetna" },
  { src: "/images/insurance/Bluecross.png", alt: "Blue Cross" },
  { src: "/images/insurance/cigna.png", alt: "Cigna" },
  { src: "/images/insurance/UnitedHealthCare.png", alt: "UnitedHealthcare" },
  { src: "/images/insurance/Optum.png", alt: "Optum" },
  { src: "/images/insurance/Providence.png", alt: "Providence" },
  { src: "/images/insurance/regence.png", alt: "Regence" },
  { src: "/images/insurance/tricare.png", alt: "Tricare" },
  { src: "/images/insurance/pacificsource.png", alt: "PacificSource" },
  { src: "/images/insurance/FirstchoiceHealth.png", alt: "First Choice Health" },
  { src: "/images/insurance/ModaLogo-1.png", alt: "Moda" },
];

function LogoTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-12 px-6 sm:gap-16 sm:px-8"
      aria-hidden={ariaHidden || undefined}
    >
      {logos.map((logo) => (
        <li key={`${ariaHidden ? "dup-" : ""}${logo.alt}`} className="shrink-0">
          <Image
            src={logo.src}
            alt={ariaHidden ? "" : logo.alt}
            width={160}
            height={64}
            className="h-11 w-auto max-w-none object-contain brightness-0 opacity-55 sm:h-12"
          />
        </li>
      ))}
    </ul>
  );
}

export function InsuranceStrip() {
  return (
    <section
      aria-label="Insurance partners"
      className="border-y border-bl-charcoal/8 bg-bl-mist py-12 sm:py-14"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-bl-charcoal sm:text-base">
          {copy.insuranceStrip.label}
        </p>

        <div className="relative mt-8 overflow-hidden sm:mt-10">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-bl-mist to-transparent sm:w-16"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-bl-mist to-transparent sm:w-16"
            aria-hidden
          />

          <div className="bl-marquee-track">
            <LogoTrack />
            <LogoTrack ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
}
