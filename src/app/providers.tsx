"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./lib/theme";
import { yearContext } from "./lib/year-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <yearContext.Provider value={new Date().getFullYear()}>
      <LazyMotion features={domAnimation}>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </LazyMotion>
    </yearContext.Provider>
  );
}
