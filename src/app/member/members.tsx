"use client";

import {
  Avatar,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Member } from "../lib/member-fetch";
import { SNSLink } from "../components/sns-link";

const alternative = "/alternative.png";

const MemberCard = ({ username, associatedLinks }: Member): JSX.Element => {
  const sortedAssociatedLinks = [...associatedLinks];
  sortedAssociatedLinks.sort((a, b) => a.type.localeCompare(b.type));
  const githubIndex = sortedAssociatedLinks.findIndex(({ type }) => type === "github");
  const avatar =
    githubIndex === -1
      ? alternative
      : `https://github.com/${sortedAssociatedLinks[githubIndex].name}.png`;

  return (
    <Flex align="center" gap={4} h="100%" p={4}>
      <Avatar flex="0 0 auto" name={username} src={avatar} />
      <VStack alignItems="self-start" flex="1 1" wordBreak="break-all" spacing={0.5}>
        <Heading as="b" fontSize="2xl">
          {username}
        </Heading>
        <HStack spacing={4}>
          {sortedAssociatedLinks.map((link, i) => (
            <SNSLink key={i} {...link} />
          ))}
        </HStack>
      </VStack>
    </Flex>
  );
};

type MembersPageProps = {
  members: readonly Member[];
};

export const Members = ({ members }: MembersPageProps) => {
  const cardBg = useColorModeValue("gray.100", "gray.700");

  return (
    <Grid gap={2} templateColumns="repeat(auto-fill, minmax(15em, 1fr))">
      {members.map((member) => (
        <GridItem key={member.discordId} borderRadius="3xl" bgColor={cardBg}>
          <MemberCard {...member} />
        </GridItem>
      ))}
    </Grid>
  );
};
