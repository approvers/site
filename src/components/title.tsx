import { Heading } from "@chakra-ui/react";
import type { ReactNode } from "react";

export const Title = ({ children }: { children?: ReactNode }): JSX.Element => (
  <Heading mt={8} mb={8} as="h1" fontSize="2xl" w="100%" textAlign="center">
    {children}
  </Heading>
);

export const Subtitle = ({ children }: { children?: ReactNode }): JSX.Element => (
  <Heading fontSize="xl" lineHeight="xl">
    {children}
  </Heading>
);
