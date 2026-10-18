/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"TikTok Sans Variable"', '"Aptos"', '"Segoe UI"', 'sans-serif'],
        serif: ['"TikTok Sans Variable"', '"Aptos"', '"Segoe UI"', 'sans-serif'],
      },
      colors: {
        ink: '#151326',
        paper: '#fbfaff',
        cream: '#f2eff9',
        coral: '#ff7d78',
        sage: '#dce8ff',
        sky: '#e8ddff',
        butter: '#d8b4fe',
        clay: '#ffd6c8',
        night: '#0b0715',
        grape: '#8f68ff',
        lilac: '#c6a7ff',
        lilacbg: '#f0ebff',
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
}