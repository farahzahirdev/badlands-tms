import { copy } from "@/content/copy";
import { Button } from "./Button";

type InlineCtaProps = {
  prompt?: string;
  cta?: string;
  className?: string;
};

export function InlineCta({
  prompt = copy.inlineCta.prompt,
  cta = copy.inlineCta.cta,
  className = "",
}: InlineCtaProps) {
  return (
    <div
      className={`bl-fade-up mx-auto mt-12 max-w-xl rounded-card border border-bl-sage/20 bg-bl-sage-light/40 px-6 py-8 text-center sm:px-8 ${className}`}
    >
      <p className="text-lead text-bl-charcoal">{prompt}</p>
      <div className="mt-5">
        <Button href="#contact">{cta}</Button>
      </div>
    </div>
  );
}
