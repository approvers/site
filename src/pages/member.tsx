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

const MemberCard = ({ name, role, links, avatar }: Member): JSX.Element => (
  <Flex p={4} gap={4} h="100%" alignItems="center">
    <Avatar flex="0 0 auto" src={avatar == "" ? alternative : avatar} name={name} />
    <VStack flex="1 1" spacing={0.5} alignItems="self-start" wordBreak="break-all">
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

const MembersPage: NextPage<MembersPageProps> = ({ members }) => {
  const cardBg = useColorModeValue("gray.200", "gray.700");

  return (
    <Layout pageName="限界開発鯖 - メンバー紹介">
      <Title>メンバー紹介</Title>
      <Grid templateColumns="repeat(auto-fill, minmax(15em, 1fr))" gap={2}>
        {members.map((member) => (
          <GridItem key={member.name} bgColor={cardBg} borderRadius="3xl">
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
