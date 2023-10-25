"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./lib/theme";
import { yearContext } from "./lib/year-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <yearContext.Provider value={new Date().getFullYear()}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </yearContext.Provider>
  );
}
