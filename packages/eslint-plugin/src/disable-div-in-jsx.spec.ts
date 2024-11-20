import { RuleTester } from "@typescript-eslint/rule-tester";
import { rule } from "./disable-div-in-jsx";
const test = new RuleTester({
  languageOptions: {
    parser: "@typescript-eslint/parser",
  },
  files: ["*.ts"],
});

test.run("disable-div-in-jsx", rule, {
  valid: [
    { code: `<view test-id="all"></view>` },
    { code: `<span test-id="all"></span>` },
    { code: `<input test-id="all"/>` },
  ],
  invalid: [
    {
      code: `<div
                    class="2000"
                    test-id="all">
                    my big div
                </div>`,
      output: `<View
                    class="2000"
                    test-id="all">
                    my big div
                </View>`,
      errors: [{ messageId: "avoidDiv" }],
    },
    {
      code: `<div test-id="all"></div>`,
      output: '<View test-id="all"></View>',
      errors: [{ messageId: "avoidDiv" }],
    },
    {
      code: `<div test-id="all"/>`,
      output: '<View test-id="all"/>',
      errors: [{ messageId: "avoidDiv" }],
    },
  ],
});

afterAll(() => {
  console.log("All tests were runned");
});
