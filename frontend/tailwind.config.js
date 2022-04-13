/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig} */

const config = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
        "tertiary.5": "var(--tertiary-color-5)",
        highlight: "var(--highlight-color)",
        "highlight.5": "var(--highlight-color-5)",
        "highlight.75": "var(--highlight-color-75)",
      },
      spacing: {
        4.5: "1.125rem",
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
