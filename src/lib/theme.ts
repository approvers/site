import { StyleFunctionProps, mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

export const boldUnderline = "linear(transparent 70%, shadowed 0%)";

export const theme = extendTheme({
  font: {
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
  semanticTokens: {
    colors: {
      highlighted: {
        default: "green.700",
        _dark: "green.200",
      },
      shadowed: {
        default: "green.200",
        _dark: "green.700",
      },
      boldUnderline: "linear(transparent 70%, shadowed 0%)",
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: mode("gray.900", "gray.50")(props),
        bg: mode("gray.200", "gray.900")(props),
      },
      "::selection": {
        bg: "green.600",
      },
    }),
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
    initialColorMode: "light",
    useSystemColorMode: true,
  },
});
