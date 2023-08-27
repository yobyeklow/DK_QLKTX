/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        multi: ["Mulish", "sans-serif"],
        prata: ["Prata", "serif"],
        gilda: ["Gilda Display", "serif"],
        lexend: ["Lexend Deca", "sans-serif"],
      },
      colors: {
        bgColor: "#c7c6b3",
        darkGray: "#375c45",
        brownColor: "#a58356",
        tanColor: "#d8aa84",
        blackBgOpacity: "rgb(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
