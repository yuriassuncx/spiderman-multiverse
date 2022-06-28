/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'spiderBackground': "url('https://www.ubackground.com/_ph/86/348973984.jpg')",
        'spiderBackground-2': "url('src/assets/image 54.png')",
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
}
