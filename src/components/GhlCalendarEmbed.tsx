"use client";

import Script from "next/script";
import { site } from "@/content/site";

const calendar = site.ghl.calendar;

export function GhlCalendarEmbed() {
  return (
    <div className="w-full overflow-hidden rounded-[20px] bg-white">
      <iframe
        src={calendar.src}
        id={calendar.iframeId}
        title={calendar.title}
        scrolling="no"
        className="block w-full border-0"
        style={{ width: "100%", minHeight: 720, overflow: "hidden" }}
      />
      <Script src={calendar.scriptSrc} strategy="lazyOnload" />
    </div>
  );
}
