/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'spiderBackground': "url('src/assets/bg-1.png')",
        'spiderBackground-2': "url('src/assets/image 54.png')",
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
}
