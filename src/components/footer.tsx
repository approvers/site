import { Box, Link } from "@chakra-ui/react";

import React, { useContext } from "react";
import { Link as GatsbyLink } from "gatsby";
import { yearContext } from "../lib/year-context";

export const Footer = (): JSX.Element => {
  const year = useContext(yearContext);
  return (
    <Box
      as="footer"
      p={4}
      textAlign="center"
      borderColor="shadowed"
      borderTopWidth="2px"
      data-testid="footer"
    >
      <Link as={GatsbyLink} mr={2} color="highlighted" fontStyle="normal" href="/policy">
        プライバシーポリシー
      </Link>
      - (c) {year} Approvers
    </Box>
  );
};
