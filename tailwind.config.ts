import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#a1a1aa",
          400: "#71717a",
          500: "#52525b",
          600: "#3f3f46",
          700: "#1a1a1a",
          800: "#121212",
          900: "#0a0a0a",
          950: "#050505",
        },
        ember: {
          DEFAULT: "#FF6B35",
          deep: "#E63946",
        },
        dusk: {
          from: "#7C3AED",
          to: "#1E3A8A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      fontSize: {
        body: ["1.0625rem", { lineHeight: "1.75" }],
        headline: ["clamp(2.25rem, 6vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.04em" }],
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #FF6B35 0%, #E63946 100%)",
        "dusk-gradient": "linear-gradient(135deg, #7C3AED 0%, #1E3A8A 100%)",
        "hero-overlay":
          "linear-gradient(90deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.72) 48%, rgba(10,10,10,0.35) 100%)",
        "hero-overlay-mobile":
          "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.92) 70%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 107, 53, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
