import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";

type InlineCtaProps = {
  prompt?: string;
  cta?: string;
  href?: string;
  secondaryCta?: string;
  secondaryHref?: string;
  className?: string;
};

export function InlineCta({
  prompt = copy.inlineCta.prompt,
  cta = copy.inlineCta.cta,
  href = site.routes.inquiry,
  secondaryCta,
  secondaryHref,
  className = "",
}: InlineCtaProps) {
  return (
    <div
      className={`bl-fade-up mx-auto mt-12 max-w-xl rounded-card border border-bl-sage/20 bg-bl-sage-light/40 px-6 py-8 text-center sm:px-8 ${className}`}
    >
      <p className="text-lead text-bl-charcoal">{prompt}</p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
        <Button href={href}>{cta}</Button>
        {secondaryCta && secondaryHref ? (
          <Button href={secondaryHref} variant="secondary">
            {secondaryCta}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
