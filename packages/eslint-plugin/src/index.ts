import { rule as disableDivInJsx } from "./disable-div-in-jsx";

const plugin = {
  meta: {
    name: "@mybingo/eslint-plugin",
  },
  rules: {
    "disable-div-in-jsx": disableDivInJsx,
  },
};

export default plugin;
