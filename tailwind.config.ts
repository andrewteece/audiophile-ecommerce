import { type Config } from 'tailwindcss';
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
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',

        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',

        'primary-light': '#FBAF85',

        secondary: 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',

        destructive: 'hsl(var(--destructive))',
        'destructive-foreground': 'hsl(var(--destructive-foreground))',

        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',

        popover: 'hsl(var(--popover))',
        'popover-foreground': 'hsl(var(--popover-foreground))',

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
    plugin(function ({ addBase }) {
      addBase({
        ':root': {
          '--background': '0 0% 98%', // #FAFAFA
          '--foreground': '0 0% 6%', // #101010

          '--muted': '0 0% 95%', // #F1F1F1
          '--muted-foreground': '0 0% 40%',

          '--border': '0 0% 90%',
          '--input': '0 0% 90%',
          '--ring': '22 65% 57%', // primary hue

          '--primary': '22 65% 57%', // #D87D4A
          '--primary-foreground': '0 0% 100%', // #ffffff

          '--secondary': '0 0% 90%',
          '--secondary-foreground': '0 0% 0%',

          '--destructive': '0 100% 50%',
          '--destructive-foreground': '0 0% 100%',

          '--accent': '0 0% 95%',
          '--accent-foreground': '0 0% 6%',

          '--popover': '0 0% 100%',
          '--popover-foreground': '0 0% 6%',

          '--card': '0 0% 100%',
          '--card-foreground': '0 0% 6%',
        },
        '.dark': {
          '--background': '0 0% 6%', // #101010
          '--foreground': '0 0% 98%', // #FAFAFA

          '--muted': '0 0% 15%',
          '--muted-foreground': '0 0% 70%',

          '--border': '0 0% 20%',
          '--input': '0 0% 20%',
          '--ring': '22 65% 57%',

          '--primary': '22 65% 57%',
          '--primary-foreground': '0 0% 100%',

          '--secondary': '0 0% 25%',
          '--secondary-foreground': '0 0% 100%',

          '--destructive': '0 100% 60%',
          '--destructive-foreground': '0 0% 100%',

          '--accent': '0 0% 20%',
          '--accent-foreground': '0 0% 100%',

          '--popover': '0 0% 6%',
          '--popover-foreground': '0 0% 98%',

          '--card': '0 0% 10%',
          '--card-foreground': '0 0% 98%',
        },
      });
    }),
  ],
};

export default config;
