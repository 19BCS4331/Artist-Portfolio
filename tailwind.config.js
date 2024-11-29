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
        'artist-purple': {
          50: '#f3e5f5',
          100: '#e1bee7',
          200: '#ce93d8',
          300: '#ba68c8',
          400: '#ab47bc',
          500: '#9c27b0',
          600: '#8e24aa',
          700: '#7b1fa2',
          800: '#6a1b9a',
          900: '#4a148c',
        },
      },
      backgroundImage: {
        'purple-gradient': 'linear-gradient(to right, #8e24aa, #4a148c)',
        'purple-gradient-light': 'linear-gradient(to right, #ce93d8, #9c27b0)',
      },
      animation: {
        'subtle-float': 'float 3s ease-in-out infinite',
        'subtle-spin': 'spin 5s linear infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'glow-pulse': {
          '0%, 100%': {
            opacity: 0.8,
            transform: 'scale(1)',
          },
          '50%': {
            opacity: 0.95,
            transform: 'scale(1.05)',
          },
        },
      },
      fontFamily: {
        londrina: ['Londrina Shadow', 'cursive'],
        playfair: ['Playfair Display', 'serif'],
        alexbrush: ['Alex Brush', 'cursive'],
        limelight: ['Limelight', 'cursive'],
        lexend: ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
