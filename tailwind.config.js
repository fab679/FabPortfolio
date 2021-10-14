module.exports = {
  mode: "jit",
  content: [],
  theme: {
    extend: {
      fontFamily: {
        Akronim: ["Akronim"],
        comfortaa: ["Comfortaa"],
        georgia: ["Georgia"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
