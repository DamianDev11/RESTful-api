import { defineConfig } from "vite";

export default defineConfig({
  define: {
    "import.meta.vitest": "undefined",
  },
  test: {
    includeSource: ["src/**/*.{js,ts}"],
    globals: true,
    coverage: ["text", "json", "html"],
  },
});
