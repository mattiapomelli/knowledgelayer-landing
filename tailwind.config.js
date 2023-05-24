const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Rubik", ...fontFamily.sans],
      },
      colors: {
        "base-content-neutral": "hsl(var(--bc) / 0.6)",
      },
      dropShadow: {
        default: "3px 3px 0px hsl(var(--bc))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-radix")(),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#F9FE79",
          "primary-focus": "#f2e54e",
          "primary-content": "#000000",
          accent: "#BF9DF6",
          success: "#3cdea2",
          "--btn-text-case": "none",
          "--rounded-btn": "0.75rem",
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#F9FE79",
          "primary-content": "#000000",
          accent: "#9050F9",
          success: "#3cdea2",
          "success-content": "#000000",
          "base-content": "#ffffff",
          "base-100": "#111111",
          "base-300": "#2f3642",
          "--btn-text-case": "none",
          "--rounded-btn": "0.75rem",
        },
      },
    ],
  },
};
