import { Center, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const Footer = (): JSX.Element => (
  <Center w="100%" p={4} borderTop="2px" borderColor="shadowed">
    <NextLink href="/policy" passHref>
      <Link mr={2} fontStyle="normal" color="highlighted">
        プライバシーポリシー
      </Link>
    </NextLink>
    - (c) 2021 Approvers
  </Center>
);
