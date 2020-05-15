import { Layout } from "../components/layout";
import { NextPage, GetStaticProps } from "next";
import { getMembers, Member } from "../lib/member-fetch";
import { FC } from "react";
import { SNSLink } from "../components/sns-link";
import { Paper } from "../components/paper";
import { Header } from "../components/header";
import styles from "../sass/pages/member.module.sass";

const alternative = "/alternative.png";

const MemberCard: FC<Member> = ({ name, role, links, avatar }) => (
  <>
    <Paper>
      <img src={avatar == "" ? alternative : avatar} alt={name} className={styles.avatar} />
      <div className={styles.text}>
        <h4 className={styles.name}>{name}</h4>
        <p>{role}</p>
        <div className={styles.linksContainer}>
          {links.map((link, i) => (
            <SNSLink key={i} {...link} />
          ))}
        </div>
      </div>
    </Paper>
  </>
);

type MembersPageProps = {
  members: Member[];
};

const MembersPage: NextPage<MembersPageProps> = ({ members }) => (
  <>
    <Layout pageName="限界開発鯖 - メンバー紹介">
      <Header />
      <main className={styles.wrapper}>
        <h1 className={styles.title}>メンバー紹介</h1>
        <div className={styles.memberMainContents}>
          {members.map((member) => (
            <MemberCard key={member.name} {...member} />
          ))}
        </div>
      </main>
    </Layout>
  </>
);

export const getStaticProps: GetStaticProps<MembersPageProps> = async () => {
  const members = await getMembers();
  return {
    props: { members },
  };
};

export default MembersPage;
