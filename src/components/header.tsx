import { Avatar, Center, Flex, Heading } from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";

export const Header = (): JSX.Element => (
  <Center as="header" w="100%" p={4} borderColor="shadowed" borderBottomWidth="2px">
    <Flex as={Link} align="center" to="/">
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
  </Center>
);
