import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bl: {
          sage: "#6F978E",
          "sage-dark": "#6F978E",
          "sage-deep": "#5A827A",
          "sage-light": "#E8F1EF",
          "sage-soft": "#D4E5E1",
          charcoal: "#272A2B",
          "charcoal-soft": "#3D4142",
          mist: "#F5F8F7",
          slate: "#5C6668",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        heading: ["brandon-grotesque", "var(--font-outfit)", "system-ui", "sans-serif"],
        body: ["freight-sans-pro", "var(--font-outfit)", "system-ui", "sans-serif"],
        slab: ["var(--font-slab)", "var(--font-outfit)", "system-ui", "sans-serif"],
        neusa: ["brandon-grotesque", "var(--font-outfit)", "sans-serif"],
      },
      fontSize: {
        "bl-body": ["1.0625rem", { lineHeight: "1.75" }],
        "bl-large": ["1.25rem", { lineHeight: "1.65" }],
        "bl-small": ["0.9375rem", { lineHeight: "1.65" }],
        "bl-h1": [
          "clamp(2.35rem, calc((3.75 - 1) * 1.2vw + 1rem), 3.75rem)",
          { lineHeight: "1.08", letterSpacing: "-0.03em" },
        ],
        "bl-h2": [
          "clamp(1.875rem, calc((2.75 - 1) * 1.2vw + 1rem), 2.75rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em" },
        ],
        "bl-h3": [
          "clamp(1.375rem, calc((1.75 - 1) * 1.2vw + 1rem), 1.75rem)",
          { lineHeight: "1.3", letterSpacing: "-0.01em" },
        ],
        "bl-h4": [
          "clamp(0.8125rem, calc((0.9375 - 1) * 1.2vw + 1rem), 0.9375rem)",
          { lineHeight: "1.4", letterSpacing: "0.1em" },
        ],
      },
      maxWidth: {
        content: "1300px",
      },
      borderRadius: {
        card: "1.25rem",
        image: "1.5rem",
      },
      boxShadow: {
        soft: "0 2px 16px -4px rgba(39, 42, 43, 0.08)",
        card: "0 8px 32px -10px rgba(39, 42, 43, 0.12)",
        lift: "0 20px 48px -16px rgba(39, 42, 43, 0.16)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(1.25rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "draw-line": {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.8s ease-out both",
        "draw-line": "draw-line 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
