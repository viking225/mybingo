import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import myBingoPlugin from '@mybingo/eslint-plugin'

export default [
  {
    ignores: [".expo/*", "packages/**"]
  },
  {
    plugins: {
      myBingoPlugin
    }
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
      "react/jsx-uses-react": "off",
      'myBingoPlugin/disable-div-in-jsx': 'error'
    },
  },
];
