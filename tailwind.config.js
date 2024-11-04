/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Pixelify-Regular':['Pixelify-Regular'],
        'Pixelify-Medium':['Pixelify-Medium'],
        'Pixelify-SemiBold':['Pixelify-SemiBold'],
        'Pixelify-Bold':['Pixelify-Bold'],

      }
    },
  },
  plugins: [],
}

