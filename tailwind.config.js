/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B2CD9', // Brightened for better contrast
          light: '#9D47E5',   // Adjusted light variant
          dark: '#6B21A8'     // Original color as dark variant
        },
        secondary: {
          DEFAULT: '#FFD000', // Brightened yellow for better contrast
          light: '#FFE14D',   // Lighter yellow
          dark: '#E6BB00'     // Darker yellow
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}