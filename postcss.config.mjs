const config = {
  theme: {
    extend: {
      keyframes: {
        myanim: {
          "0%": { transform: "translate(-30px)" },
          "100%": { transform: "translate(0px)" },
        },
      },
      animation: {
        myanim: "myanim 1s fadein forwards",
      },
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
