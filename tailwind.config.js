// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-default)",
        secondary: "var(--color-secondary)",
      },
      boxShadow: {
        md: "0px 0px 3px 3px #2e57e840",
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        128: "32rem",
        144: "36rem",
      },
      fontSize: {
        // xs: ".75rem",
        // sm: ".875rem",
        // tiny: ".875rem",
        // base: "1rem",
        // lg: "1.125rem",
        // xl: "1.25rem",
        // "3xl": "1.875rem",
        // "4xl": "2.25rem",
        // "5xl": "3rem",
        // "6xl": "4rem",
        // "7xl": "5rem",
        // ...defaultTheme.fontSize,
        // "2xl": ["1.4rem", "2.4rem"],
      },
    },

    // fontSize: {
    //   // xs: ".75rem",
    //   // sm: ".875rem",
    //   // tiny: ".875rem",
    //   // base: "1rem",
    //   // lg: "1.125rem",
    //   // xl: "1.25rem",
    //   // "3xl": "1.875rem",
    //   // "4xl": "2.25rem",
    //   // "5xl": "3rem",
    //   // "6xl": "4rem",
    //   // "7xl": "5rem",
    //   // ...defaultTheme.fontSize,
    //   // "2xl": ["1.4rem", "2.4rem"],
    // },

    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: ".8rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "745px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1425px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
