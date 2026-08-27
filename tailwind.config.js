/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans Variable"', '"Aptos"', '"Segoe UI"', 'sans-serif'],
        serif: ['var(--font-instrument-serif)', 'Georgia', '"Times New Roman"', 'serif'],
      },
      colors: {
        ink: '#1f1f1d',
        paper: '#fffaf2',
        cream: '#f6efe3',
        coral: '#ff9d91',
        sage: '#d8e4c6',
        sky: '#dbe9f4',
        butter: '#f3d36b',
        clay: '#e8b58f',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
