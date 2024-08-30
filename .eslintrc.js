module.exports = {
  extends: ["prettier"],
  plugins: ["chakra-ui"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
    "sort-imports": "error",
    "chakra-ui/props-order": "error",
    "chakra-ui/props-shorthand": "error",
    "chakra-ui/require-specific-component": "error",
  },
  ignorePatterns: [".eslintrc.js"],
};
