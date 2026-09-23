/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './Portofolio.html',
    './Portfolio Ai Engineer/**/*.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'void-black': '#050508',
        'void-dark': '#0A0A0F',
        'neon-pink': '#FF2D8F',
        'neon-blue': '#00D4FF',
        'neon-green': '#00FF94',
        bg: {
          primary: '#050816',
          secondary: '#0F172A',
          tertiary: '#1E293B'
        },
        accent: {
          blue: '#3B82F6',
          purple: '#8B5CF6',
          cyan: '#06B6D4'
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    }
  },
  plugins: []
}