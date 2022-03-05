module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B2431",
        secondary: "#FFD1EB",
        tertiary: "#1E488F",
      },
      zIndex: {
        "-1": "-1",
      },
      spacing: {
        '128': '40rem',
        '256': '80rem',
      },
    },
    fontFamily: {
      'sansSerif': ['Source Sans Pro', 'sans-serif']
    }
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  plugins: [],
}
