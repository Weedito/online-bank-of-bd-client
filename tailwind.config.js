/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js', "./node_modules/flowbite/**/*.js"],
  daisyui: {
    themes: [
      {
        my_theme: {
          primary: "#006837",
          secondary: "#FF556B",
          accent: "#1FB2A6",
          neutral: "#191D24",
          "base-100": "#ffff",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      {
        my_dark: {
          primary: "#EE1D51",
          secondary: "#F04A7D",
          accent: "#0284C7",
          info: "#0284C7",
          neutral: "#282e3f",
          warning: "#E2E8F0",
          "base-100": "#0f1729",
          "base-200": "#162032",
          "base-300": "#1E293B",
        },
      },
      "light",
      "dracula",
    ],
  },
  theme: {
    fontFamily: {
      'sans': ['Qwigley'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['Francois One'],
      'header': ['Ubuntu'],
      'sub': ['Josefin Sans'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    extend: {},
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      },
     
    },
  },
  plugins: [require("daisyui"), require('tw-elements/dist/plugin'), require('flowbite/plugin')],
};
