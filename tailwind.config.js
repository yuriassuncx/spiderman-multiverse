/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'spiderBackground': "url('https://images8.alphacoders.com/104/1043461.jpg')",
        'spiderBackground-2': "url('src/assets/image 54.png')",
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
}
