import { Avatar, Center, Flex, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const Header = (): JSX.Element => (
  <Center w="100%" p={4} borderBottom="2px" borderColor="green.600">
    <NextLink href="/" passHref>
      <Link>
        <Flex alignItems="center">
          <Avatar
            src="/android-chrome-192x192.png"
            mr={2}
            width={8}
            height={8}
            borderRadius="37%"
          />
          <Heading as="span">Approvers</Heading>
        </Flex>
      </Link>
    </NextLink>
  </Center>
);
