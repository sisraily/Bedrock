/// <reference types="vitest" />
import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRefresh()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTest.js"],
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/cypress/**",
      "**/.{idea,git,cache,output,temp}/**",
      "**/lib/**",
    ],
    coverage: {
      reporter: ["text", "json", "html"],
      lines: 91,
      functions: 88,
      branches: 91,
      statements: 91,
      exclude: [
        "**/node_modules/**",
        "**/dist/**",
        "**/cypress/**",
        "**/.{idea,git,cache,output,temp}/**",
        "**/lib/**",
        "**/__tests__/**",
      ],
    },
  },
});
