/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'berk': "Berkshire Swash",
      'oswald': "Oswald",
    },
    extend: {
      colors: {
        "primary-orange": "#FB6600",
        "primary-red": "#E51D00",
        "accent-orange": "#FE3500",
        "accent-black": "#161617",
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
};
