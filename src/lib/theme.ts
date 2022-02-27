import { extendTheme } from "@chakra-ui/react";

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
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
});
