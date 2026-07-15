"use client";

import { Phone } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 flex gap-2 sm:left-auto sm:right-5 sm:bottom-5 sm:w-auto">
      <a
        href={site.phoneHref}
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-bl-charcoal px-5 py-3.5 text-sm font-semibold text-white shadow-lift transition hover:bg-bl-charcoal-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bl-sage sm:flex-none"
        aria-label={`${copy.floatingCta.call} ${site.phone}`}
      >
        <Phone className="h-4 w-4" aria-hidden />
        {copy.floatingCta.call}
      </a>
      <a
        href="#contact"
        className="inline-flex flex-[1.4] items-center justify-center gap-2 rounded-full bg-bl-sage px-5 py-3.5 text-sm font-semibold text-white shadow-lift transition hover:bg-bl-sage-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bl-sage sm:flex-none"
      >
        {copy.floatingCta.book}
      </a>
    </div>
  );
}
