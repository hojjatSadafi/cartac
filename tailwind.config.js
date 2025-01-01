/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      container:{
        "center":true,
        "padding":"1rem"
      },
      colors:{
        "primary":"#4CAF50",

        "background":"#eeeeee",
        "darkBackground":"#121212",

        "surface":{
          "100":"#fafafa",
          "200":"#f8f8f8",
          "300":"#f3f3f3",
          "400":"#e3e3e3",
          "500":"#cdcdcd",
          "600":"#a2a2a2",
          "700":"#767676",
        },

        "darksurface":{
          "100":"#8b8b8b",
          "200":"#717171",
          "300":"#575757",
          "400":"#3f3f3f",
          "500":"#282828",
        },
        "darkSurfaceTonal":{
          "100":"#939390",
          "200":"#7a7977",
          "300":"#62615e",
          "400":"#4b4a46",
          "500":"#353430",
        },

        "textColor":"#292524",
        "darkTextColor":"#ECDFCC",
        "thinTextColor":"#57534e",
        "darkThinTextColor":"#a8a29e",
      },

      fontFamily:{
        "dana":"Dana",
        "danaBold":"DanaBold",
        "danaExtraBlack":"DanaExtraBlack",
        "morabba":"Morabba",
      }
      
    },
  },
  plugins: [],
}

