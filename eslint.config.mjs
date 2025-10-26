import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react: pluginReact
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "@/quotes": ["error", "double"],
      "@/semi": ["error", "always"]
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }
];
