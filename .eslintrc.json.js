module.exports = {
  root: true,
  overrides: [
    {
      files: ["**/*.json"],
      parser: "jsonc-eslint-parser",
      plugins: ["jsonc"],
      extends: ["plugin:jsonc/recommended-with-json"],
    },
  ],
};
