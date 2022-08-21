/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  daisyui: {
    themes: [
      {
        light: {
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
      // {
      //   dark: {
      //   "primary": "#36D399",
      //   "secondary": "#3ABFF8",
      //   "accent": "#1FB2A6",
      //   "neutral": "#191D24",
      //   "base-100": "#ffff",
      //   "info": "#3ABFF8",
      //   "success": "#36D399",
      //   "warning": "#FBBD23",
      //   "error": "#F87272",
      //   },
      // },
    ],
  },
  plugins: [
    require("daisyui"),
    require("tw-elements/dist/plugin"),
    require("flowbite/plugin"),
  ],
};
