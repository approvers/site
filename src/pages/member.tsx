import type { GetStaticProps, NextPage } from "next";
import { Member, getMembers } from "../lib/member-fetch";
import { Avatar } from "../components/avatar";
import type { FC } from "react";
import { Layout } from "../components/layout";
import { Paper } from "../components/paper";
import { SNSLink } from "../components/sns-link";
import { Title } from "../components/title";
import styles from "../scss/pages/member.module.scss";

const alternative = "/alternative.png";

const MemberCard: FC<Member> = ({ name, role, links, avatar }) => (
  <Paper>
    <Avatar src={avatar == "" ? alternative : avatar} name={name} />
    <div>
      <h4 className={styles.name}>{name}</h4>
      <p>{role}</p>
      <div className={styles.linksContainer}>
        {links.map((link, i) => (
          <SNSLink key={i} {...link} />
        ))}
      </div>
    </div>
  </Paper>
);

type MembersPageProps = {
  members: readonly Member[];
};

const MembersPage: NextPage<MembersPageProps> = ({ members }) => (
  <Layout pageName="限界開発鯖 - メンバー紹介">
    <Title>メンバー紹介</Title>
    <div className={styles.memberMainContents}>
      {members.map((member) => (
        <MemberCard key={member.name} {...member} />
      ))}
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps<MembersPageProps> = async () => {
  const members = await getMembers();
  return {
    props: { members },
  };
};

export default MembersPage;
