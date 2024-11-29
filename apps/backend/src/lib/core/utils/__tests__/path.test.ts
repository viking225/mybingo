import { __filename, __dirname } from "../path";

describe("Given utils", () => {
  describe("When running filename", () => {
    test("Then it should return filename", () => {
      const result = __filename(import.meta.url);
      expect(result).toContain("/lib/core/utils/");
    });
  });

  describe("When running __dirname", () => {
    test("Then it should return dirname", () => {
      const result = __dirname(import.meta.url);
      expect(
        /\/mybingo\/apps\/backend\/src\/lib\/core\/utils$/.test(result),
      ).toBe(true);
    });
  });
});
