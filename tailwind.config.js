import theme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["!./node_modules/**/*", "./**/*.twig", "./src/**/*.{js,css}"],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: "1.5rem"
      }
    },
    extend: {
      colors: {
        "primary": 'rgb(var(--color-primary) / <alpha-value>)',
        "secondary": 'rgb(var(--color-secondary) / <alpha-value>)',
      },
      fontFamily: {
        primary: 'var(--font-family-primary)',
        secondary: 'var(--font-family-secondary)',
      },
    },
  },
  plugins: [
  ],
}

