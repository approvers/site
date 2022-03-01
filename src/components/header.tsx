import { Avatar, Center, Flex, Heading } from "@chakra-ui/react";
import NextLink from "next/link";

export const Header = (): JSX.Element => (
  <Center as="header" w="100%" p={4} borderBottom="2px" borderColor="shadowed">
    <NextLink href="/">
      <a>
        <Flex alignItems="center">
          <Avatar
            src="/android-chrome-192x192.png"
            mr={2}
            width={8}
            height={8}
            borderRadius="37%"
            name="Approversロゴ"
          />
          <Heading as="span">Approvers</Heading>
        </Flex>
      </a>
    </NextLink>
  </Center>
);
