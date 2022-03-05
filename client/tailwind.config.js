module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B2431",
        secondary: "#EB89D0FC",
        tertiary: "#1E488F",
        green: colors.emerald,
      },
      zIndex: {
        "-1": "-1",
      },
      fontFamily: {
        'sansSerif': ['Source Sans Pro', 'sans-serif']
      }
    },
  },
  plugins: [],
}
