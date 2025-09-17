/********************
 * Tailwind config with exact breakpoints
 ********************/
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        // Custom exact ranges using raw queries for requirements
        xs: { max: "480px" },
        sm: { min: "481px", max: "768px" },
        md: { min: "769px", max: "1024px" },
        lg: { min: "1025px" },
      },
      colors: {
        bg: {
          DEFAULT: "#ffffff",
          dark: "#0b1220",
        },
        popover: {
          DEFAULT: "#f7f7f8",
          dark: "#111827",
        },
        textc: { DEFAULT: "#0f172a", dark: "#e5e7eb" },
        muted: { DEFAULT: "#475569", dark: "#9ca3af" },
        primary: { DEFAULT: "#2563eb", dark: "#60a5fa" },
        accent: { DEFAULT: "#16a34a", dark: "#22c55e" },
        danger: { DEFAULT: "#dc2626", dark: "#f87171" },
        borderc: { DEFAULT: "#e5e7eb", dark: "#1f2937" },
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,0.06), 0 2px 8px rgba(15,23,42,0.08)",
        cardHover: "0 8px 24px rgba(15,23,42,0.12)",
        cardDark: "0 1px 2px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.6)",
        cardDarkHover: "0 8px 24px rgba(0,0,0,0.6)",
      },
      borderRadius: { xl: "12px" },
      transitionDuration: { fast: "150ms", base: "200ms" },
    },
  },
};
