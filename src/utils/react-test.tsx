import React, { ReactNode } from "react";
import { RenderOptions, RenderResult, render } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";
import { system } from "../lib/theme";
import { yearContext } from "../lib/year-context";

const Providers = ({ children }: { children: ReactNode }): React.JSX.Element => (
  <yearContext.Provider value={new Date().getFullYear()}>
    <ChakraProvider value={system}>
      <ColorModeProvider children={children} />
    </ChakraProvider>
  </yearContext.Provider>
);

export const customRender = (ui: ReactNode, options?: RenderOptions): RenderResult =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";
export { customRender as render };
