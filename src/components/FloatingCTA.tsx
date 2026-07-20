"use client";

import { copy } from "@/content/copy";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 sm:left-auto sm:right-5 sm:bottom-5 sm:w-auto">
      <a
        href="#contact"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-bl-sage px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition hover:bg-bl-sage-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bl-sage sm:w-auto"
      >
        {copy.floatingCta.inquiry}
      </a>
    </div>
  );
}
