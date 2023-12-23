/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        akshay: ["Mina", "sans-serif"],
      },
      animation: {
        dheere: "bounce 3s linear infinite",
      },
    },
  },
  plugins: [],
};
