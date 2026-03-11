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
        moduleA: '#3B82F6', // blue
        moduleB: '#8B5CF6', // purple  
        moduleC: '#10B981', // green
        priorityHigh: '#EF4444', // red
        priorityMedium: '#F59E0B', // yellow
        priorityLow: '#6B7280', // gray
        interactive: '#06B6D4', // cyan
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}