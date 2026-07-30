/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        board: {
          DEFAULT: "#16211C",
          raised: "#1E2C24",
          line: "#2B3A31",
        },
        chalk: {
          DEFAULT: "#EDE8DC",
          dim: "#A9B3AA",
          faint: "#78857C",
        },
        amber: {
          DEFAULT: "#E3A23C",
          dim: "#8A6626",
        },
        teal: {
          DEFAULT: "#4FA89A",
          dim: "#2E5F57",
        },
        coral: {
          DEFAULT: "#E0714A",
        },
        dust: {
          DEFAULT: "#6E8FB0",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'IBM Plex Sans'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      backgroundImage: {
        "chalk-noise":
          "radial-gradient(circle at 1px 1px, rgba(237,232,220,0.035) 1px, transparent 0)",
      },
      backgroundSize: {
        grain: "3px 3px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
