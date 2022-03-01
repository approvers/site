import { Box, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const Footer = (): JSX.Element => (
  <Box as="footer" textAlign="center" p={4} borderTop="2px" borderColor="shadowed">
    <NextLink href="/policy" passHref>
      <Link mr={2} fontStyle="normal" color="highlighted">
        プライバシーポリシー
      </Link>
    </NextLink>
    - (c) 2021 Approvers
  </Box>
);
