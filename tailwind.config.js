/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{jsx,tsx}",
    "./components/**/*.{jsx,tsx}",
  ],
  theme: {
    colors: {
      "nintendo-red": "#dd2020",
      "nintendo-blue": "#00C3E3",
      "background-white": "#F4F7F5",
      "background-white-light": "#fbfcfb",
      "background-white-dark": "#dcdedd",
      "font-color": "#2F323A",
      "font-color-light": "#595b61",
      "font-color-dark": "#26282e",
    },
  },
  plugins: [],
};
