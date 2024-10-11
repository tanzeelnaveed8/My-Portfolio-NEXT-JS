import type { Config } from "tailwindcss";

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0D1117', // Background
        light: '#C9D1D9', // Text Color
        accent: '#58A6FF', // Accent
        primary: '#1F6FEB', // Buttons, Links
      },
    },
  },
  plugins: [],
}
