/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: { fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] }, boxShadow: { glow: '0 0 60px rgba(59,130,246,.16)' } } },
  plugins: []
}
