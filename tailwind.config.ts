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
        cream: "#FEF5E5",
        "cream-dark": "#f5ede0",
        dark: "#0d0d0d",
        "dark-soft": "#141414",
        primary: "#31BB95",
        "primary-hover": "#54BC79",
        muted: "#707F7F",
        "card-bg": "#141414",
        border: "rgba(255,255,255,0.08)",
        "border-light": "rgba(112,127,127,0.2)",
        accent: "#31BB95",
        "accent-hover": "#54BC79",
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "Roboto", "sans-serif"],
        roboto: ["var(--font-roboto)", "Roboto", "sans-serif"],
        bebas: ["var(--font-roboto)", "Roboto", "sans-serif"],
        syne: ["var(--font-roboto)", "Roboto", "sans-serif"],
      },
      animation: {
        "ticker-roll": "tickerRoll 30s linear infinite",
        "scroll-slide": "scrollSlide 2s infinite",
        pulse: "pulse 1.5s infinite",
      },
      keyframes: {
        tickerRoll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        scrollSlide: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        panBg: {
          from: { transform: "scale(1.05) translate(0, 0)" },
          to: { transform: "scale(1.08) translate(-2%, -1%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
