import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f8ff',
          100: '#e9f2ff',
          500: '#4f8dff',
          600: '#3f72d1',
          700: '#315aab'
        },
        mint: '#b6f0d9',
        peach: '#ffd5b8'
      },
      borderRadius: {
        xl2: '1.25rem',
        xl3: '1.5rem'
      },
      boxShadow: {
        soft: '0 8px 24px rgba(79,141,255,0.16)'
      }
    }
  },
  plugins: []
};

export default config;
