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
      animation: {
        fadeInUp: "fadeInUp 3s ease-out forwards", // Fade-in animation
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(50px)" }, // Start off invisible and moved down
          "100%": { opacity: 1, transform: "translateY(0)" }, // End visible and in place
        },
      },
    },
    plugins: [],
  },
};
