import { Heading } from "@chakra-ui/react";
import type { ReactNode } from "react";

export const Title = ({ children }: { children?: ReactNode }): JSX.Element => (
  <Heading as="h1" w="100%" mt={8} mb={8} fontSize="2xl" textAlign="center">
    {children}
  </Heading>
);

export const Subtitle = ({ children }: { children?: ReactNode }): JSX.Element => (
  <Heading fontSize="xl" lineHeight="xl">
    {children}
  </Heading>
);
