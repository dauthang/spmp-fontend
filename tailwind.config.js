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
  },
  plugins: [],
}
