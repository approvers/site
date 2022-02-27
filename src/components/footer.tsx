import { Center, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const Footer = (): JSX.Element => (
  <Center w="100%" p={4} borderTop="2px" borderColor="green.600">
    <NextLink href="/policy" passHref>
      <Link color="green.900">プライバシーポリシー</Link>
    </NextLink>{" "}
    - (c) 2021 Approvers
  </Center>
);
