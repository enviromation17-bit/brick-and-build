/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#152A54",
        navyDeep: "#0E1D3D",
        navy2: "#1C3564",
        paper: "#FAF8F3",
        paper2: "#FFFFFF",
        slate: "#5B6472",
        slateLight: "#B7BFC9",
        line: "#E5E1D6",
        lineDark: "rgba(255,255,255,0.15)",
        gold: "#B8935A",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "ui-serif", "Georgia", "serif"],
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        pill: "999px",
      },
      boxShadow: {
        lift: "0 24px 60px rgba(14,29,61,0.22)",
      },
      maxWidth: {
        container: "1400px",
      },
    },
  },
  plugins: [],
};
