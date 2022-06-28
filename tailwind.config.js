/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'spiderBackground': "url('https://www.xtrafondos.com/en/descargar.php?id=8751&resolucion=1920x1080')",
        'spiderBackground-2': "url('src/assets/image 54.png')",
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
}
