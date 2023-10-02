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
import type { GetStaticProps, NextPage } from "next";
import { Member, getMembers } from "../lib/member-fetch";
import { Layout } from "../components/layout";
import { SNSLink } from "../components/sns-link";
import { Title } from "../components/title";

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

const MembersPage: NextPage<MembersPageProps> = ({ members }) => {
  const cardBg = useColorModeValue("gray.100", "gray.700");

  return (
    <Layout pageName="限界開発鯖 - メンバー紹介">
      <Title>メンバー紹介</Title>
      <Grid gap={2} templateColumns="repeat(auto-fill, minmax(15em, 1fr))">
        {members.map((member) => (
          <GridItem key={member.username} borderRadius="3xl" bgColor={cardBg}>
            <MemberCard {...member} />
          </GridItem>
        ))}
      </Grid>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<MembersPageProps> = async () => {
  const members = await getMembers();
  return {
    props: { members },
  };
};

export default MembersPage;
