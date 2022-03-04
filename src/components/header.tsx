import { Avatar, Center, Flex, Heading } from "@chakra-ui/react";
import NextLink from "next/link";

export const Header = (): JSX.Element => (
  <Center as="header" w="100%" p={4} borderColor="shadowed" borderBottomWidth="2px">
    <NextLink href="/" passHref>
      <Flex as="a" align="center">
        <Avatar
          w={8}
          h={8}
          mr={2}
          borderRadius="37%"
          name="Approversロゴ"
          src="/android-chrome-192x192.png"
        />
        <Heading as="span">Approvers</Heading>
      </Flex>
    </NextLink>
  </Center>
);
