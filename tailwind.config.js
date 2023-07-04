/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': 'var(--tw-box-shadow)'
      },
      colors: {
        grayInput: 'rgba(247,247,247,var(--tw-bg-opacity))',
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      'xxl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '2xxl': '2560px',
      // => @media (min-width: 2560px) { ... }
    }
  },
  plugins: [],
}
