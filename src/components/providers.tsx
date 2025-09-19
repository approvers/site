import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "../utils/color-mode";
import React from "react";
import { system } from "../lib/theme";
import { yearContext } from "../lib/year-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <yearContext.Provider value={new Date().getFullYear()}>
      <ChakraProvider value={system}>
        <ColorModeProvider children={children} />
      </ChakraProvider>
    </yearContext.Provider>
  );
}
