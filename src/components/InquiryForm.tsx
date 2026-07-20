"use client";

import { FormEvent, useState } from "react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";

type InquiryFormProps = {
  id?: string;
  compact?: boolean;
};

function RequiredMark() {
  return (
    <span className="text-bl-sage-deep" aria-hidden>
      {" "}
      *
    </span>
  );
}

export function InquiryForm({ id = "inquiry-form", compact = false }: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    // Placeholder until GoHighLevel form embed is available.
    const data = new FormData(e.currentTarget);
    const fullName = String(data.get("fullName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const dateOfBirth = String(data.get("dateOfBirth") || "").trim();
    const bestTimeToCall = String(data.get("bestTimeToCall") || "").trim();
    const hearAboutUs = String(data.get("hearAboutUs") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!fullName || !email || !phone || !dateOfBirth || !bestTimeToCall || !hearAboutUs) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(`Deep TMS Inquiry — ${fullName}`);
    const body = encodeURIComponent(
      [
        `Full Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Date of Birth: ${dateOfBirth}`,
        `Best Time To Call: ${bestTimeToCall}`,
        `How Did You Hear About Us?: ${hearAboutUs}`,
        message ? `Message: ${message}` : "",
        "",
        `Source: Badlands TMS landing page`,
      ]
        .filter(Boolean)
        .join("\n"),
    );

    try {
      window.location.href = `${site.emailHref}?subject=${subject}&body=${body}`;
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        id={id}
        className={`rounded-card border border-bl-sage/30 bg-bl-sage-light/60 ${
          compact ? "p-5" : "p-6 sm:p-7"
        }`}
        role="status"
      >
        <p className="font-heading text-lg font-semibold text-bl-charcoal">
          {copy.form.successTitle}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-bl-slate">{copy.form.successBody}</p>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      className={`space-y-4 ${compact ? "p-5 sm:p-6" : "p-6 sm:p-7"}`}
      noValidate
    >
      <div>
        <label htmlFor={`${id}-fullName`} className="bl-label">
          {copy.form.fullName}
          <RequiredMark />
        </label>
        <input
          id={`${id}-fullName`}
          name="fullName"
          type="text"
          autoComplete="name"
          required
          placeholder={copy.form.fullName}
          className="bl-field"
        />
      </div>

      <div>
        <label htmlFor={`${id}-email`} className="bl-label">
          {copy.form.email}
          <RequiredMark />
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder={copy.form.email}
          className="bl-field"
        />
      </div>

      <div>
        <label htmlFor={`${id}-phone`} className="bl-label">
          {copy.form.phone}
          <RequiredMark />
        </label>
        <input
          id={`${id}-phone`}
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          placeholder={copy.form.phone}
          className="bl-field"
        />
      </div>

      <div>
        <label htmlFor={`${id}-dob`} className="bl-label">
          {copy.form.dateOfBirth}
          <RequiredMark />
        </label>
        <input
          id={`${id}-dob`}
          name="dateOfBirth"
          type="date"
          required
          className="bl-field"
        />
      </div>

      <div>
        <label htmlFor={`${id}-bestTime`} className="bl-label">
          {copy.form.bestTimeToCall}
          <RequiredMark />
        </label>
        <select
          id={`${id}-bestTime`}
          name="bestTimeToCall"
          required
          defaultValue=""
          className="bl-field"
        >
          <option value="" disabled>
            {copy.form.bestTimeToCall}
          </option>
          {copy.form.bestTimeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={`${id}-hear`} className="bl-label">
          {copy.form.hearAboutUs}
          <RequiredMark />
        </label>
        <input
          id={`${id}-hear`}
          name="hearAboutUs"
          type="text"
          required
          placeholder={copy.form.hearAboutUs}
          className="bl-field"
        />
      </div>

      <div>
        <label htmlFor={`${id}-message`} className="bl-label">
          {copy.form.message}
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={compact ? 3 : 4}
          placeholder={copy.form.message}
          className="bl-field resize-y"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          {copy.form.error}
        </p>
      )}

      <button
        type="submit"
        className="btn-primary w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? copy.form.submitting : copy.form.submit}
      </button>
    </form>
  );
}
