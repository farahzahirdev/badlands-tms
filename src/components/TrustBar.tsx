import { Check } from "lucide-react";
import { copy } from "@/content/copy";

export function TrustBar() {
  return (
    <section
      aria-label="Why patients choose Badlands TMS"
      className="border-y border-bl-charcoal/8 bg-white py-8 sm:py-10"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.14em] text-bl-sage-deep">
          {copy.trustBar.eyebrow}
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {copy.trustBar.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.5 rounded-xl border border-bl-charcoal/8 bg-bl-mist/60 px-4 py-3 text-sm font-medium text-bl-charcoal"
            >
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bl-sage text-white">
                <Check className="h-3.5 w-3.5" aria-hidden strokeWidth={2.5} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
