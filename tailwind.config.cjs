/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayishBlue: "hsl(217, 19%, 38%)",
        "grayishBlue-d": "hsl(217, 19%, 24%)",
        "blue-d": "hsl(218, 23%, 16%)",
        "cyan-l": "hsl(193, 38%, 86%)",
        neonGreen: "hsl(150, 100%, 66%)",
      },
      fontSize: {
        quote: "28px",
      },
      boxShadow: {
        dice: "0px 0px 35px 0px hsl(150, 100%, 66%)",
      },
    },
    fontFamily: {
      body: ['"Manrope"', "sans-serif"],
    },
  },
  plugins: [],
};
