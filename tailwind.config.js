/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1B1D22",
          light: "#23262B",
        },
        sand: {
          DEFAULT: "#F3EDE4",
          dark: "#E7DFD1",
        },
        gold: {
          DEFAULT: "#C9922B",
          light: "#E0AE55",
          dark: "#A2731D",
        },
        maroon: {
          DEFAULT: "#8C2F39",
          light: "#A6414C",
          dark: "#6E2229",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "route-line":
          "repeating-linear-gradient(90deg, currentColor 0 14px, transparent 14px 26px)",
      },
    },
  },
  plugins: [],
};
