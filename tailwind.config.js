/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'spiderBackground': "url('https://w0.peakpx.com/wallpaper/100/764/HD-wallpaper-spider-man-spider-man-no-way-home-spider-man.jpg')",
        'spiderBackground-2': "url('src/assets/image 54.png')",
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
}
