/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'dark-bg':'hsl(0 0% 30% / 0.25)',
        'back-bg':'hsl(0 0% 0% / 0.25)',
        "custom-red": "rgb(239, 65, 2)"

      }
    },
    backgroundImage:{
      'hero-image':'linear-gradient(rgba(0, 13, 26, 0.6),rgba(0, 13, 26, 0.6)), url("../../src/images/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface.jpg")',
      // 'fanzone-image':'linear-gradient(rgba(72.5, 11, 11, 0.6),rgba(72.5, 11, 11, 0.6)), url("../../src/images/football-player-wearing-number-10-jersey.jpg")',
      'fanzone-image':'linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url("../../src/images/table-setting.jpg")',
      'store-image':'linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url("../../src/images/4EC98E23-61DD-40EE-9324-24DC4E8EF990.JPG")',
      'store1-image':'linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url("../../src/images/AD3A0A60-9DDD-470A-8C63-D75CEBA7C9A3.JPG")',
      'store2-image':'linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url("../../src/images/27CB4CA2-112B-4EA3-AD17-B2ED510DC7D4.JPG")',
      'store3-image':'linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url("../../src/images/593B3768-AA83-489A-B2A3-FFB9FB22AB27.JPG")',
     
      'store4-image':'linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url("../../src/images/CECD1280-A101-4968-BA05-2D575FB03FA9.JPG")',
      'contact-image':'linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url("../../src/images/AB7651F4-19FA-458F-B5D0-0C1E9E4EED33.JPG")',
      'about-image': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../../src/images/abt.png")',
      'contact-image-two': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../../src/images/petr-machacek-BeVGrXEktIk-unsplash.jpg")'

    },
    fontFamily:{
      "garamond":[ "Cormorant Garamond, serif"],
      "montserrat":[ 'Montserrat', 'sans-serif'],
      "serif": ['sans-serif']
    }
  },
  plugins: [],
}
