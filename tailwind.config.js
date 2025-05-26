/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#EFF6FF',
        text: '#1E293B',
        primary: '#3B82F6',
        secondary: '#2563EB',
        accent: '#14B8A6',
        highlight: '#FFF7ED',
        dark: {
          background: '#0F172A',
          text: '#F1F5F9',
          primary: '#60A5FA',
          secondary: '#3B82F6',
          accent: '#2DD4BF',
          highlight: '#1E293B',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      screens: {
        lg: '992px',
      },
      listStyleType: {
        disc: 'disc',
        decimal: 'decimal',
      },
    },
  },
  plugins: [],
};