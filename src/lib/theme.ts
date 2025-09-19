import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        body: `YakuHanJP,
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
      gradients: {
        boldUnderline: { value: "linear(transparent 70%, {shadowed} 0%)" },
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
  components: {
    Link: {
      baseStyle: {
        fontStyle: "italic",
        textDecoration: "underline",
      },
    },
  },
  config: {
    initialColorMode: "system",
    useSystemColorMode: false,
  },
});
