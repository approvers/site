import { Avatar, Center, Flex, Heading } from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";
import logo from "../../assets/android-chrome-192x192.png";

export const Header = (): JSX.Element => (
  <Center
    as="header"
    w="100%"
    p={4}
    borderColor="shadowed"
    borderBottomWidth="2px"
    data-testid="header"
  >
    <Flex align="center" asChild>
      <Link to="/">
        <Avatar.Root size="sm" mr={2} borderRadius="37%">
          <Avatar.Fallback name="Approversロゴ" />
          <Avatar.Image src={logo} />
        </Avatar.Root>
        <Heading as="span">Approvers</Heading>
      </Link>
    </Flex>
  </Center>
);
