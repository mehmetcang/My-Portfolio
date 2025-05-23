/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        background: 'var(--background-color)',
        textColor: 'var(--text-color)',
      },
      fontSize: {
        'heading': 'var(--font-size-heading)',
        'subheading': 'var(--font-size-subheading)',
        'body': 'var(--font-size-body)',
        'base': 'var(--font-size-base)',
      },
    },
  },
  plugins: [],
}; 