module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["airbnb", "plugin:prettier/recommended"],
  rules: {
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "no-console": 1,
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "react/prop-types": 0,
    "no-unused-vars": 1,
    "react/no-array-index-key": 0,
    "no-alert": 0,
    "import/no-unresolved": 0,
    "prettier/prettier": 0,
  },
  parser: "babel-eslint",
};
