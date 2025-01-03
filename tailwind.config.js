/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        royalBlue: "#1D3557", // Custom color
        lightGray: "#E0E0E0", // Custom color
        deepYellow: "#FDCB6E", // Custom color
      },
      fontFamily: {
        Roboto: ["Roboto", "ui-sans-serif", "system-ui"],
        Playfair: ["Playfair Display", "ui-serif", "Georgia"],
      },
    },
  },
  plugins: [],
};
