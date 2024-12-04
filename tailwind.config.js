/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          light: "#fddc5c", // Light gold
          DEFAULT: "#996515", // Standard gold
          dark: "#604806", // Dark gold
        },
        ivory: "#fffff0", // Soft ivory background
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"], // Elegant serif font
        sans: ["Open Sans", "sans-serif"], // Modern sans-serif font
        Gambarino: ["Gambarino", "sans-serif"], // Modern sans-serif font
        Allura: ["allura-regular", "sans-serif"], // Modern sans-serif font
      },
      boxShadow: {
        goldGlow:
          "0 4px 6px -1px rgba(212, 175, 55, 0.5), 0 2px 4px -2px rgba(212, 175, 55, 0.3)", // Soft gold glow
      },
    },
  },
  plugins: [],
};
