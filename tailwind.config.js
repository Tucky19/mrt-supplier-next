/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        mrt: {
          bg: "#050814",
          "bg-alt": "#0b0f1f",
          primary: "#ff3b30",
          chip: "rgba(255,255,255,0.06)"
        }
      },
      boxShadow: {
        "mrt-card": "0 18px 45px rgba(0,0,0,0.6)"
      }
    }
  },
  plugins: []
};
