"use client";

import {
  Avatar,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Member } from "../lib/member-fetch";
import { SNSLink } from "../components/sns-link";

const alternative = "/alternative.png";

const MemberCard = ({ name, role, links, avatar }: Member): JSX.Element => (
  <Flex align="center" gap={4} h="100%" p={4}>
    <Avatar flex="0 0 auto" name={name} src={avatar == "" ? alternative : avatar} />
    <VStack alignItems="self-start" flex="1 1" wordBreak="break-all" spacing={0.5}>
      <Heading as="b" fontSize="2xl">
        {name}
      </Heading>
      <Text>{role}</Text>
      <HStack spacing={4}>
        {links.map((link, i) => (
          <SNSLink key={i} {...link} />
        ))}
      </HStack>
    </VStack>
  </Flex>
);

type MembersPageProps = {
  members: readonly Member[];
};

export const Members = ({ members }: MembersPageProps) => {
  const cardBg = useColorModeValue("gray.100", "gray.700");

  return (
    <Grid gap={2} templateColumns="repeat(auto-fill, minmax(15em, 1fr))">
      {members.map((member) => (
        <GridItem key={member.name} borderRadius="3xl" bgColor={cardBg}>
          <MemberCard {...member} />
        </GridItem>
      ))}
    </Grid>
  );
};
