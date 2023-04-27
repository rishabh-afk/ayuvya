/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 0px 10px 0px rgba(0,0,0,0.5);",
      },
    },
  },
  plugins: [],
};
