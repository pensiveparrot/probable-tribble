module.exports = {
    plugins: [
      "react",
      "@typescript-eslint"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    },
    settings: {
      react: {
        pragma: "Angular",
        version: "detect"
      }
    }
  };