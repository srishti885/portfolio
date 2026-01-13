/** @type {import('tailwindcss').Config} */
export default {
  // 1. Dark mode logic ko 'class' par set kiya (Toggle ke liye)
  darkMode: 'class', 
  
  // 2. Saari files track ho rahi hain
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      // 3. Custom Colors (Hacker Mode Colors)
      colors: {
        neural: {
          cyan: '#00c4cc',
          purple: '#7d2ae8',
          dark: '#050505',
        }
      },
      // 4. Custom Animations
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00c4cc' },
          '100%': { boxShadow: '0 0 20px #00c4cc' },
        }
      }
    },
  },
  
  plugins: [],
}