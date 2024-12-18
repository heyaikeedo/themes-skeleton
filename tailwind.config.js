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
        "main": 'rgb(var(--color-main) / <alpha-value>)',
        "content": 'rgb(var(--color-content) / <alpha-value>)',
        "content-dimmed": 'rgb(var(--color-content-dimmed) / <alpha-value>)',
        "content-super-dimmed": 'rgb(var(--color-content-super-dimmed) / <alpha-value>)',

        "line": 'rgb(var(--color-line) / <alpha-value>)',
        "line-dimmed": 'rgb(var(--color-line-dimmed) / <alpha-value>)',
        "line-super-dimmed": 'rgb(var(--color-line-super-dimmed) / <alpha-value>)',

        "intermediate": 'rgb(var(--color-intermediate) / <alpha-value>)',
        "intermediate-content": 'rgb(var(--color-intermediate-content) / <alpha-value>)',
        "intermediate-content-dimmed": 'rgb(var(--color-intermediate-content-dimmed) / <alpha-value>)',

        "button": 'rgb(var(--color-button) / <alpha-value>)',
        "button-content": 'rgb(var(--color-button-content) / <alpha-value>)',

        "button-dimmed": 'rgb(var(--color-button-dimmed) / <alpha-value>)',
        "button-dimmed-content": 'rgb(var(--color-button-dimmed-content) / <alpha-value>)',

        "button-accent": 'rgb(var(--color-button-accent) / <alpha-value>)',
        "button-accent-content": 'rgb(var(--color-button-accent-content) / <alpha-value>)',

        "gradient-start": 'rgb(var(--color-gradient-start) / <alpha-value>)',
        "gradient-end": 'rgb(var(--color-gradient-end) / <alpha-value>)',
        "gradient-content": 'rgb(var(--color-gradient-content) / <alpha-value>)',

        "info": 'rgb(var(--color-info) / <alpha-value>)',
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

