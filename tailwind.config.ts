import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      keyframes: {
        fadeIn: { from: { opacity: "0", transform: "scale(.95)" } },
        fadeOut: { to: { opacity: "0", transform: "scale(.95)" } },
      },
      animation: {
        fadeIn: "fadeIn 0.1s ease-out",
        fadeOut: "fadeOut 0.15s ease-out forwards",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#624DE3",
        light: {
          "select-bg": "#E0E0E0",
          background: "#fff",
          gray: "#9e9e9e",
          "table-odd": "#F7F6FE",
        },
        dark: {
          "select-bg": "#141432",
          background: "#1D1E42",
          gray: "#fff",
          "table-odd": "#26264F",
        },
      },
    },
  },
  plugins: [],
};
export default config;
