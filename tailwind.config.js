/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      spacing:{
        "fw": "1440px"
      },
      screens:{
        'mobile': '600px',
        'c_tab': '800px',
        'c_large': '1200px',
        'desktop': '1440px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
