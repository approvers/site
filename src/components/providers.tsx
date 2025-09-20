import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

import { system } from "../lib/theme";
import { yearContext } from "../lib/year-context";
import { ColorModeProvider } from "../utils/color-mode";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <yearContext.Provider value={new Date().getFullYear()}>
      <ChakraProvider value={system}>
        <ColorModeProvider children={children} />
      </ChakraProvider>
    </yearContext.Provider>
  );
}
