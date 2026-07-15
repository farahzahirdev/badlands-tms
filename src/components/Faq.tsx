"use client";

import { useId, useState } from "react";
import { copy } from "@/content/copy";

function FaqItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <div
      className={`rounded-card border border-bl-charcoal/8 bg-white px-5 py-4 transition-shadow duration-300 ${
        open ? "shadow-soft" : "shadow-none"
      }`}
    >
      <button
        type="button"
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between gap-4 text-left font-heading text-base font-semibold text-bl-charcoal"
      >
        <span>{question}</span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bl-sage-light text-bl-sage-deep transition-transform duration-300 ease-out ${
            open ? "rotate-45" : "rotate-0"
          }`}
          aria-hidden
        >
          +
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="grid transition-[grid-template-rows] duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0 overflow-hidden">
          <p
            className={`pr-8 text-sm leading-relaxed text-bl-slate transition-[opacity,transform,margin] duration-300 ease-out motion-reduce:transition-none ${
              open
                ? "mt-3 translate-y-0 opacity-100"
                : "mt-0 -translate-y-1 opacity-0"
            }`}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="bl-section bl-section-alt !pt-8 sm:!pt-10 lg:!pt-12"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="bl-section-header bl-fade-up">
          <p className="section-eyebrow">{copy.faq.eyebrow}</p>
          <h2 id="faq-heading" className="mt-3">
            {copy.faq.headline}
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-3 lg:mt-12">
          {copy.faq.items.map((item, index) => (
            <FaqItem
              key={item.q}
              question={item.q}
              answer={item.a}
              open={openIndex === index}
              onToggle={() =>
                setOpenIndex((current) => (current === index ? null : index))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
