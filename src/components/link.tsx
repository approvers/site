import React, { ComponentProps } from "react";
import { Link as ChakraLink, chakra, defineRecipe } from "@chakra-ui/react";

const linkRecipe = defineRecipe({
  base: {
    fontStyle: "italic",
    textDecoration: "underline",
  },
});

export const Link: (props: ComponentProps<ChakraLink>) => React.JSX.Element = chakra(
  ChakraLink,
  linkRecipe,
);

export const ExternalLink = (props: ComponentProps<typeof Link>): React.JSX.Element => (
  <Link target="_blank" rel="noopener noreferrer" {...props} />
);
