/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screen: {
        s: "375px",
      },
      colors: {
        primary: "#25092c",
        secondary: "#07F307",
        binance_black: "#111518ff",
        binance_ash: "#111518ff",
        binance_yellow: "#fcd535ff",
        binance_white: "#eaecefff",
        // binance_green: "#14cb85ff",
        binance_green: "#38A312",
        binance_brightash: "#6b7f96ff",
        bluish: "#449bc0",
        lightyellow: "#fff47a",
        midorange: "#f69d3c",
        background: "#F1E5C4",
      },
    },
  },
  plugins: [],
};
