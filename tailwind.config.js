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
        ink: '#1f1f1d',
        paper: '#fffaf2',
        cream: '#f6efe3',
        coral: '#ff9d91',
        sage: '#d8e4c6',
        sky: '#dbe9f4',
        butter: '#f3d36b',
        clay: '#e8b58f',
        primary: '#1f1f1d',
        secondary: '#d8e4c6',
        accent: '#ff9d91',
      },
      gradients: {
        'primary-gradient': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        'accent-gradient': 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
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
