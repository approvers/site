module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  plugins: ["chakra-ui"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
    "sort-imports": "error",
    "@next/next/no-img-element": "off",
    "chakra-ui/props-order": "error",
    "chakra-ui/props-shorthand": "error",
    "chakra-ui/require-specific-component": "error",
  },
  ignorePatterns: [".eslintrc.js"],
};
