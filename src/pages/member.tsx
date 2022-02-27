import { Avatar, HStack, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import { Member, getMembers } from "../lib/member-fetch";
import { Layout } from "../components/layout";
import { SNSLink } from "../components/sns-link";
import { Title } from "../components/title";

const alternative = "/alternative.png";

const MemberCard = ({ name, role, links, avatar }: Member): JSX.Element => (
  <HStack h={16} spacing={4}>
    <Avatar src={avatar == "" ? alternative : avatar} name={name} />
    <VStack spacing={0.5} alignItems="self-start">
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
  </HStack>
);

type MembersPageProps = {
  members: readonly Member[];
};

const MembersPage: NextPage<MembersPageProps> = ({ members }) => (
  <Layout pageName="限界開発鯖 - メンバー紹介">
    <Title>メンバー紹介</Title>
    <SimpleGrid columns={[1, 2, 2, 3, 4]} spacing={16}>
      {members.map((member) => (
        <MemberCard key={member.name} {...member} />
      ))}
    </SimpleGrid>
  </Layout>
);

export const getStaticProps: GetStaticProps<MembersPageProps> = async () => {
  const members = await getMembers();
  return {
    props: { members },
  };
};

export default MembersPage;
