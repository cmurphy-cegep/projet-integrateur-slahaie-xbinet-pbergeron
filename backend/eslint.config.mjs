import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {files: ["**/*.{js,mjs,cjs,vue}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unused-vars": ["warn"],
      "no-undef": [0,false],
      "no-constant-binary-expression": [0,false],
      "constructor-super": [0,false],
      "max-params": ["error",5],
      "no-duplicate-imports": ["error"],
      "no-unused-labels": ["error"],
      "max-lines": ["error",250],
      "max-lines-per-function": ["error",200],
      "no-unreachable": ["error"]
    }
  }
];

