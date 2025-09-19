import { Avatar, Center, Flex, Heading } from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";

export const Header = (): JSX.Element => (
  <Center as="header" w="100%" p={4} borderColor="shadowed" borderBottomWidth="2px">
    <Flex as={Link} align="center" to="/">
      <Avatar.Root>
        <Avatar.Fallback name="Approversロゴ" />
        <Avatar.Image w={8} h={8} mr={2} borderRadius="37%" src="/android-chrome-192x192.png" />
      </Avatar.Root>
      <Heading as="span">Approvers</Heading>
    </Flex>
  </Center>
);
