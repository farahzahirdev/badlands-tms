type GhlEmbedProps = {
  html: string;
  placeholderTitle: string;
  placeholderBody: string;
  minHeight?: string;
  caption?: string;
};

/**
 * Renders a GHL embed when HTML is provided; otherwise a clear placeholder.
 * Paste embed HTML into `site.ghl.*EmbedHtml` when assets arrive.
 */
export function GhlEmbed({
  html,
  placeholderTitle,
  placeholderBody,
  minHeight = "520px",
  caption,
}: GhlEmbedProps) {
  if (html.trim()) {
    return (
      <div
        className="ghl-embed w-full overflow-hidden"
        style={{ minHeight }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <div
      className="flex w-full flex-col items-center justify-center rounded-card border border-dashed border-bl-sage/40 bg-bl-mist/80 px-6 py-16 text-center"
      style={{ minHeight }}
      role="status"
    >
      <p className="font-heading text-lg font-semibold text-bl-charcoal">
        {placeholderTitle}
      </p>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-bl-slate">
        {placeholderBody}
      </p>
      {caption ? (
        <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-bl-sage-deep">
          {caption}
        </p>
      ) : null}
    </div>
  );
}
