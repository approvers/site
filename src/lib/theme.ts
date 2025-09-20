import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        body: {
          value: `YakuHanJP,
            Roboto,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Oxygen,
            Ubuntu,
            Cantarell,
            "Fira Sans",
            "Droid Sans",
            "Helvetica Neue",
            sans-serif`,
        },
      },
      gradients: {
        boldUnderline: { value: "linear-gradient(transparent 70%, {colors.shadowed} 0%)" },
      },
    },
    semanticTokens: {
      colors: {
        highlighted: {
          value: { base: "{colors.green.700}", _dark: "{colors.green.200}" },
        },
        shadowed: {
          value: { base: "{colors.green.200}", _dark: "{colors.green.700}" },
        },
      },
    },
  },
  globalCss: {
    "::selection": {
      bg: { base: "green.300", _dark: "green.600" },
    },
  },
});
