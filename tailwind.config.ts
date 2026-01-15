import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Cinzel', 'serif'],
        body: ['var(--font-body)', 'Montserrat', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: 'var(--color-gold)',
          light: 'var(--color-gold-light)',
          dark: 'var(--color-gold-dark)',
        },
        bronze: 'var(--color-bronze)',
        terracotta: {
          DEFAULT: 'var(--color-terracotta)',
          light: 'var(--color-terracotta-light)',
        },
        sage: {
          DEFAULT: 'var(--color-sage)',
          light: 'var(--color-sage-light)',
          dark: 'var(--color-sage-dark)',
        },
        olive: {
          DEFAULT: 'var(--color-olive)',
          dark: 'var(--color-olive-dark)',
        },
        clay: 'var(--color-clay)',
        sand: {
          DEFAULT: 'var(--color-sand)',
          light: 'var(--color-sand-light)',
        },
        charcoal: 'var(--color-charcoal)',
        fog: 'var(--color-fog)',
        mist: 'var(--color-mist)',
      },
      backgroundImage: {
        'gradient-sunset': 'var(--gradient-sunset)',
        'gradient-earth': 'var(--gradient-earth)',
        'gradient-forest': 'var(--gradient-forest)',
        'gradient-gold': 'var(--gradient-gold)',
        'gradient-mist': 'var(--gradient-mist)',
        'gradient-overlay': 'var(--gradient-overlay)',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        medium: 'var(--shadow-medium)',
        hard: 'var(--shadow-hard)',
        premium: 'var(--shadow-premium)',
        gold: 'var(--shadow-gold)',
      },
      spacing: {
        xs: 'var(--space-xs)',
        sm: 'var(--space-sm)',
        md: 'var(--space-md)',
        lg: 'var(--space-lg)',
        xl: 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)',
      },
      transitionDuration: {
        fast: 'var(--transition-fast)',
        base: 'var(--transition-base)',
        slow: 'var(--transition-slow)',
        premium: 'var(--transition-premium)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { opacity: '0.6' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
