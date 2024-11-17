/// <reference types="vitest/config" />

import { defineConfig, configDefaults } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: ["./vitest-setup.ts"],
    globals: true,
    exclude: [...configDefaults.exclude],
  },
});
