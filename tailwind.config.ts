import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#020b18",
          900: "#061325",
          800: "#0a1f3d",
          700: "#0e2d58",
          600: "#123a72",
          500: "#1a4d99",
        },
        gold: {
          300: "#f9dc7a",
          400: "#f5c842",
          500: "#e6b800",
          600: "#c9a200",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
export default config