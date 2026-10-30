import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        school: {
          blue: "#0A3D62",   
          gold: "#F39C12",   
          light: "#F8F9FA",
          dark: "#2C3E50"
        }
      },
    },
  },
  plugins: [],
};
export default config;