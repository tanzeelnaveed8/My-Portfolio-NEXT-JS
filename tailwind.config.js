// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Include your pages
    './components/**/*.{js,ts,jsx,tsx}', // Include your components
    './app/**/*.{js,ts,jsx,tsx}', // Include the app directory if used
  ],
  theme: {
    extend: {
      colors: {
        dark: '#000000',
        light: '#FFFFFF',
        primary: '#1D4ED8',
      },
    },
  },
  plugins: [],
};

