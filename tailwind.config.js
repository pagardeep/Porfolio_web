/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#64ffda',     // Brittany's signature green
        dark: '#0a192f',
        light: '#ccd6f6',
        slate: '#8892b0',
      },
      fontFamily: {
        mono: ['"SF Mono"', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}