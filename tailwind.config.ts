import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#F97316',
          light:   '#FB923C',
          dark:    '#EA580C',
          50:      '#fff7ed',
          100:     '#ffedd5',
          200:     '#fed7aa',
          500:     '#F97316',
          600:     '#EA580C',
        },
        navy: {
          DEFAULT: '#0F172A',
          light:   '#1E293B',
          50:      '#f8fafc',
        },
        purple: {
          DEFAULT: '#7C3AED',
          light:   '#8B5CF6',
          50:      '#f5f3ff',
          100:     '#ede9fe',
          200:     '#ddd6fe',
        },
        teal: {
          DEFAULT: '#0D9488',
          50:      '#f0fdfa',
          200:     '#99f6e4',
        },
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        card:   '0 4px 12px rgba(0,0,0,0.08)',
        hover:  '0 10px 30px rgba(0,0,0,0.12)',
        orange: '0 8px 24px rgba(249,115,22,0.30)',
        purple: '0 8px 24px rgba(124,58,237,0.30)',
      },
      animation: {
        'fade-in':   'fadeIn 0.5s ease-out forwards',
        'slide-up':  'slideUp 0.6s ease-out forwards',
        'float':     'float 5s ease-in-out infinite',
        'pulse-glow':'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeIn:    { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp:   { from: { opacity: '0', transform: 'translateY(30px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        float:     { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-16px)' } },
        pulseGlow: { '0%,100%': { boxShadow: '0 0 20px rgba(249,115,22,0.3)' }, '50%': { boxShadow: '0 0 40px rgba(249,115,22,0.6)' } },
      },
    },
  },
  plugins: [],
};

export default config;
