module.exports = {
  extends: [
    "react-app",
    "plugin:cypress/recommended"
  ],
  globals: {
    jest: true,
  },
  plugins: ["cypress"],
  env: {
    "cypress/globals": true,
  },
};
