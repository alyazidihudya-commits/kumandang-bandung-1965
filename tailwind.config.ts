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
          50: "#f4f4f5",
          100: "#e4e4e7",
          200: "#a1a1aa",
          300: "#71717a",
          400: "#52525b",
          500: "#3f3f46",
          600: "#27272a",
          700: "#1c1c1f",
          800: "#141416",
          900: "#0b0b0c",
          950: "#050506",
        },
        accent: {
          DEFAULT: "#22d3ee",
          muted: "#67e8f9",
          dim: "#0891b2",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
