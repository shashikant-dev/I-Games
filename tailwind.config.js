/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand colors remain consistent across themes
        brand: {
          primary: {
            DEFAULT: '#8B2CD9',
            light: '#9D47E5',
            dark: '#6B21A8'
          },
          secondary: {
            DEFAULT: '#FFD000',
            light: '#FFE14D',
            dark: '#E6BB00'
          }
        },
        // Theme-specific colors
        theme: {
          // Backgrounds
          bg: {
            primary: {
              DEFAULT: 'var(--bg-primary)',
              hover: 'var(--bg-primary-hover)'
            },
            secondary: {
              DEFAULT: 'var(--bg-secondary)',
              hover: 'var(--bg-secondary-hover)'
            }
          },
          // Text colors
          text: {
            primary: 'var(--text-primary)',
            secondary: 'var(--text-secondary)',
            tertiary: 'var(--text-tertiary)'
          },
          // Border colors
          border: {
            DEFAULT: 'var(--border-default)',
            hover: 'var(--border-hover)'
          },
          // Action colors
          action: {
            primary: 'var(--action-primary)',
            hover: 'var(--action-hover)',
            disabled: 'var(--action-disabled)'
          }
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}