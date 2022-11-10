import { Box, Link } from "@chakra-ui/react";

import NextLink from "next/link";
import { useContext } from "react";
import { yearContext } from "../lib/year-context";

export const Footer = (): JSX.Element => {
  const year = useContext(yearContext);
  return (
    <Box as="footer" p={4} textAlign="center" borderColor="shadowed" borderTopWidth="2px">
      <NextLink href="/policy" passHref>
        <Link mr={2} color="highlighted" fontStyle="normal">
          プライバシーポリシー
        </Link>
      </NextLink>
      - (c) {year} Approvers
    </Box>
  );
};
