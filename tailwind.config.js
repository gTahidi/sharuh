/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: { "100": "#fefcfb", "200": "rgba(0, 0, 0, 0.4)" },
        "primary-o": "#fa7436",
        "color-off": "#999",
        darkgray: "rgba(153, 153, 153, 0.56)",
        paragraph: "#666",
        "primary-b": "#222",
        ghostwhite: "#f7f8fc",
        black: "#000",
        "color-b-1": "#444",
        slategray: "#4e4e73",
        dimgray: "rgba(102, 102, 102, 0.08)",
        white2: "#fff",
        mistyrose: "#ffe7db",
        chocolate: "#fd8d3a",
      },
      fontFamily: {
        "paragraph-20": "Poppins",
        "section-title": "Volkhov",
        inter: "Inter",
        roboto: "Roboto",
        "open-sans": "'Open Sans'",
      },
      borderRadius: { small: "5px", base: "10px" },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "48px",
    },
  },
  corePlugins: { preflight: false },
};
