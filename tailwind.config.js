/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  './pages/**/*.{js,jsx}',
  './components/**/*.{js,jsx}',
  './app/**/*.{js,jsx}',
  './src/**/*.{js,jsx}',
];
export const theme = {
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

  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    borderRadius: {
      '4xl': '2,5rem', //40px
      '5xl': '6.25rem',  // 100px
      '6xl': '62.5rem', //1000px
    },
    keyframes: {
      "accordion-down": {
        from: { height: 0 },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: 0 },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
};
export const plugins = [require("tailwindcss-animate")];