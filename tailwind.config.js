/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        volkhov: ['Volkhov', 'serif'],
        circular: ['Circular Std', 'sans-serif'],
        spartan: ['League Spartan', 'sans-serif'],
      },
      colors: {
        customGray: '#2C3959',
      },
    },
  },
  plugins: [],
};
