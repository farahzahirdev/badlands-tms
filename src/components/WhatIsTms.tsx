import {
  Activity,
  ArrowDownToLine,
  Brain,
  Check,
  Pill,
  type LucideIcon,
} from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";

const topicIcons: LucideIcon[] = [Brain, Activity, Pill, ArrowDownToLine];

export function WhatIsTms() {
  return (
    <section id="tms" className="bl-section" aria-labelledby="tms-heading">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="bl-section-header bl-fade-up">
          <p className="section-eyebrow">{copy.whatIsTms.eyebrow}</p>
          <h2 id="tms-heading" className="mt-3">
            {copy.whatIsTms.headline}
          </h2>
          <p className="text-lead mt-4">{copy.whatIsTms.description}</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12">
          {copy.whatIsTms.topics.map((topic, i) => {
            const Icon = topicIcons[i] ?? Brain;
            return (
              <article
                key={topic.title}
                className="bl-fade-up rounded-card border border-bl-charcoal/8 bg-bl-mist/50 p-5 text-center sm:p-6 sm:text-left"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-bl-sage-light text-bl-sage-deep">
                  <Icon className="h-5 w-5" aria-hidden strokeWidth={1.75} />
                </span>
                <h3 className="text-lg text-bl-charcoal">{topic.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bl-slate">{topic.body}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 grid items-start gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12">
          <div className="bl-fade-up space-y-5">
            <div className="rounded-card border border-bl-sage/20 bg-bl-sage-light/40 p-5 sm:p-6">
              <h3 className="font-heading text-lg font-semibold text-bl-charcoal">
                {copy.whatIsTms.brainsway.headline}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-bl-slate">
                {copy.whatIsTms.brainsway.description}
              </p>
              <ul className="mt-4 space-y-2">
                {copy.whatIsTms.brainsway.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-bl-charcoal">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-bl-sage-deep" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bl-fade-up space-y-3">
            <div className="overflow-hidden rounded-image border border-bl-charcoal/8 bg-bl-charcoal shadow-card">
              <div className="relative aspect-video w-full">
                <iframe
                  title={site.brainswayVideoTitle}
                  src={`${site.brainswayVideoEmbedUrl}?rel=0`}
                  className="absolute inset-0 h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
            <p className="text-sm font-medium text-bl-slate">{site.brainswayVideoTitle}</p>
            <div className="flex justify-center pt-2 lg:justify-start">
              <Button href="#contact">{copy.whatIsTms.cta}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
