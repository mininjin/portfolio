/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig} */

const config = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
        highlight: "var(--highlight-color)",
        "tertiary.5": "var(--tertiary-color-5)",
        "primary.5": "var(--primary-color-5)",
        "secondary.5": "var(--secondary-color-5)",
        "primary.75": "var(--primary-color-75)",
        "secondary.75": "var(--secondary-color-75)",
        "tertiary.75": "var(--tertiary-color-75)",
        "highlight.5": "var(--highlight-color-5)",
        "highlight.75": "var(--highlight-color-75)",
      },
      spacing: {
        4.5: "1.125rem",
      },
      zIndex: {
        100: 100,
      },
      fontFamily: {
        title: "var(--title-font)",
        subtitle: "var(--subtitle-font)",
        body: "var(--body-font)",
      },
    },
  },
  plugins: [],
};

module.exports = config;
