/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Verification theme
        cream: "#FAF7EF",
        paper: "#FFFDF6",
        navy: {
          DEFAULT: "#17457A",
          deep: "#0E2C50",
          mid: "#1D5A9B",
          soft: "#E1EBF7",
        },
        stamp: "#C8372D",
        ink: "#101B28",
        // Legacy palette (older components still reference these)
        primary: "#222831",
        secondary: "#00ADB5",
        textPrimary: "#EEE",
        textSecondary: "rgba(238, 238, 238, 0.75)",
        accent: "rgba(57, 62, 70, 0.75)",
        hoverSecondary: "#027378",
        hoverPrimary: "#292d33",
        divider: "rgba(238, 238, 238, 0.10)",
        icons: "#393E46",
        overlay: "rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        display: ["Oswald", "Archivo", "Arial Narrow", "sans-serif"],
        sans: ["Inter", "system-ui", "Segoe UI", "sans-serif"],
      },
      screens: {
        xs: "420px",
        xl: "1170px",
      },
    },
  },
  plugins: [],
};
