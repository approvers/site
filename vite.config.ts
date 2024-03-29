import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    // NOTE: https://github.com/chakra-ui/chakra-ui/issues/6783#issuecomment-1283788233
    deps: {
      fallbackCJS: true,
    },
  },
});
