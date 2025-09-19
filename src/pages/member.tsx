import { Avatar, Flex, Grid, GridItem, HStack, Heading, VStack } from "@chakra-ui/react";
import { PageProps, graphql } from "gatsby";
import { Layout } from "../components/layout";
import { Member } from "../lib/member-fetch";
import React from "react";
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
      <Avatar.Root>
        <Avatar.Fallback name={username} />
        <Avatar.Image flex="0 0 auto" src={avatar} />
      </Avatar.Root>
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

export const query = graphql`
  query Members {
    allMember {
      nodes {
        discordId
        username
        associatedLinks {
          type
          name
        }
      }
    }
  }
`;

export default function Page(props: PageProps<Queries.MembersQuery>) {
  const members = props.data.allMember.nodes;
  return (
    <Layout title="メンバー紹介">
      <Grid gap={2} templateColumns="repeat(auto-fill, minmax(15em, 1fr))">
        {members.map((member) => (
          <GridItem
            key={member.discordId}
            borderRadius="3xl"
            _dark={{ bgColor: "gray.700" }}
            bgColor="gray.100"
          >
            <MemberCard {...member} />
          </GridItem>
        ))}
      </Grid>
    </Layout>
  );
}
