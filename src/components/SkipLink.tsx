import { copy } from "@/content/copy";

export function SkipLink() {
  return (
    <a href="#main-content" className="skip-link">
      {copy.skipLink}
    </a>
  );
}
