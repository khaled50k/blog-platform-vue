/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: true,
  },
  content: [],
  // darkMode:true,
  theme: {
    extend: {
      colors: {
        primary: "#6b4ce6",
        secondary: "#4A90E2",
        // Add more colors as needed
      },
    },
    fontSize: {
      sm: "0.7rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
  },
  plugins: [
    // ...
    require("@tailwindcss/forms"),
    // require("@tailwindcss/typography"),
  ],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
};
