/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaria: 'var(--primaria)',
        'primaria-hover': 'var(--primaria-hover)',
        secundaria: 'var(--secundaria)',
        'secundaria-hover': 'var(--secundaria-hover)',
        'fundo-card': 'var(--fundo-card)',
        'texto-principal': 'var(--texto-principal)',
        'texto-secundario': 'var(--texto-secundario)',
        branco: 'var(--branco)',
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}