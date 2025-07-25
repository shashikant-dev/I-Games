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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, #E5E7EB 1px, transparent 1px), linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)',
      },
      textShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.25)',
        'DEFAULT': '0 2px 4px rgba(0, 0, 0, 0.25)',
        'lg': '0 2px 6px rgba(0, 0, 0, 0.35)',
      },
      colors: {
        // Brand colors remain consistent across themes
        brand: {
          primary: {
            DEFAULT: '#3B82F6',    // Changed from #8B2CD9
            light: '#60A5FA',      // Lighter blue (changed from #9D47E5)
            dark: '#2563EB'        // Darker blue (changed from #6B21A8)
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
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-lg': {
          textShadow: '0 2px 6px rgba(0, 0, 0, 0.35)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
        '.line-clamp-1': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '1',
        },
        '.line-clamp-2': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '2',
        },
        '.line-clamp-3': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '3',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}