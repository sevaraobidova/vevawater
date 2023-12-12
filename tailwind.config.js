/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      'light-black': '#414042',
      'black': '#000',
      'white': '#fff',
      'blue': ' #1CBBEE',
      'gray-light': '#F2F4F7',
      'gray': '#E4EAF3',
      'gray-dark': '#ffffff4d',
      'gray-inactive': '#98A2B3', //disabled text in this color
      'red': '#E9573F',
      'green': '#62BB00'
    },
    fontFamily: {
      rf: ['RF Tone', 'Graphik', 'sans-serif'],
    },
    fontSize: {
      'h1': '3.5rem',
      'h2': '2rem',
      'h3': '1.5rem',
      'h4': '1.25rem',
      'h5': '1rem',
      'h6': '0.875rem',
    },
    fontWeight: {
      'roman': '300',
      'bold': '700',
      'link': '400',
    },


    extend: {
      borderRadius: {
        '4xl': '2,5rem', //40px
        '5xl': '6.25rem',  // 100px
        '6xl': '62.5rem', //1000px
      }

    },
  },
  plugins: [],
}

