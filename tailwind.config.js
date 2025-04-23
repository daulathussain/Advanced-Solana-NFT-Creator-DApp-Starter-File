// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#13101A",
        "background-lighter": "#1E1B2E",
        "background-light": "#2A2541",
        fuchsia: {
          500: "#d946ef",
          600: "#c026d3",
          700: "#a21caf",
        },
        purple: {
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
        },
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(to right, var(--tw-gradient-stops))",
        "gradient-waves": "url('/waves-bg.svg')",
      },
      animation: {
        float: "float 15s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      boxShadow: {
        neon: '0 0 5px theme("colors.purple.500"), 0 0 20px theme("colors.purple.500")',
      },
    },
  },
  plugins: [],
};
