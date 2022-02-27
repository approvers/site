import { Center, Heading } from "@chakra-ui/react";
import type { ReactNode } from "react";

export const Title = ({ children }: { children?: ReactNode }): JSX.Element => (
  <Center p={8}>
    <Heading as="h1" fontSize="2xl">
      {children}
    </Heading>
  </Center>
);

export const Subtitle = ({ children }: { children?: ReactNode }): JSX.Element => (
  <Heading fontSize="xl" lineHeight="xl">
    {children}
  </Heading>
);
