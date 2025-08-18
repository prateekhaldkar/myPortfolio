/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',                    // Vite / CRA root HTML
    './public/index.html',             // (agar hai)
    './src/**/*.{js,jsx,ts,tsx}',      // React files
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  safelist: [
    // keep only what you REALLY need to force-include
    'text-pink-100','text-pink-200','text-pink-300','text-pink-400',
    'text-pink-500','text-pink-600','text-pink-700','text-pink-800','text-pink-900',
    // (optional) if paranoid about visibility toggles:
    'hidden','block','lg:hidden','lg:block'
  ],
  theme: {
    extend: {
      colors: {
        orng: '#f36d06',
        orngl: '#e9a673',
        clifford: '#da373d',
        primary: {
          50:'#eff6ff',100:'#dbeafe',200:'#bfdbfe',300:'#93c5fd',400:'#60a5fa',
          500:'#3b82f6',600:'#2563eb',700:'#1d4ed8',800:'#1e40af',900:'#1e3a8a',950:'#172554'
        }
      },
      fontFamily: {
        body: [
          'Inter','ui-sans-serif','system-ui','-apple-system','Segoe UI','Roboto',
          'Helvetica Neue','Arial','Noto Sans','sans-serif','Apple Color Emoji',
          'Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'
        ],
        sans: [
          'Inter','ui-sans-serif','system-ui','-apple-system','Segoe UI','Roboto',
          'Helvetica Neue','Arial','Noto Sans','sans-serif','Apple Color Emoji',
          'Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'
        ]
      }
    }
  },
  darkMode: 'class',
  plugins: [require('daisyui')],
}
