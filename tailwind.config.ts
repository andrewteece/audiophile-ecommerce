import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',

        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        'primary-light': '#FBAF85',

        secondary: 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',

        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',

        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',

        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        ':root': {
          '--background': '0 0% 98%',
          '--foreground': '0 0% 6%',
          '--muted': '0 0% 95%',
          '--muted-foreground': '0 0% 40%',
          '--border': '0 0% 90%',
          '--input': '0 0% 90%',
          '--ring': '22 65% 57%',
          '--primary': '22 65% 57%',
          '--primary-foreground': '0 0% 100%',
          '--secondary': '0 0% 90%',
          '--secondary-foreground': '0 0% 0%',
          '--accent': '0 0% 95%',
          '--accent-foreground': '0 0% 6%',
          '--card': '0 0% 100%',
          '--card-foreground': '0 0% 6%',
        },
        '.dark': {
          '--background': '0 0% 6%',
          '--foreground': '0 0% 98%',
          '--muted': '0 0% 15%',
          '--muted-foreground': '0 0% 70%',
          '--border': '0 0% 20%',
          '--input': '0 0% 20%',
          '--ring': '22 65% 57%',
          '--primary': '22 65% 57%',
          '--primary-foreground': '0 0% 100%',
          '--secondary': '0 0% 25%',
          '--secondary-foreground': '0 0% 100%',
          '--accent': '0 0% 20%',
          '--accent-foreground': '0 0% 100%',
          '--card': '0 0% 10%',
          '--card-foreground': '0 0% 98%',
        },
      });
    }),
  ],
};

export default config;
