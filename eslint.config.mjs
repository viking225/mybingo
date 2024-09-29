import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
  {
    ignores: [".expo/*"]
  },
  {
    files: ["src/**/*.{js,mjs,cjs,ts,jsx,tsx}", "App.js"],
    languageOptions: { globals: globals.browser },
  },
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off"
    },
  },

];