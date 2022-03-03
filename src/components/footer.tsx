import { Box, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const Footer = (): JSX.Element => (
  <Box as="footer" p={4} textAlign="center" borderColor="shadowed" borderTopWidth="2px">
    <NextLink href="/policy" passHref>
      <Link mr={2} color="highlighted" fontStyle="normal">
        プライバシーポリシー
      </Link>
    </NextLink>
    - (c) 2021 Approvers
  </Box>
);
