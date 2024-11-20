import { __filename, __dirname } from "../utils.ts";

describe("Given utils", () => {
  describe("When running filename", () => {
    test("Then it should return filename", () => {
      const result = __filename();
      expect(/\/mybingo\/apps\/server\/src\/utils.ts$/.test(result)).toBe(true);
    });
  });

  describe("When running __dirname", () => {
    test("Then it should return dirname", () => {
      const result = __dirname();
      console.log(result);
      expect(/\/mybingo\/apps\/server\/src$/.test(result)).toBe(true);
    });
  });
});
