import { Layout } from "../components/layout";
import { NextPage, GetStaticProps } from "next";
import { getMembers, Member } from "../lib/member-fetch";
import { Card } from "../components/card";
import { FC } from "react";
import { SNSLink } from "../components/sns-link";
import { Paper } from "../components/paper";
import { Header } from "../components/header";

const MemberCard: FC<Member> = ({ name, role, links }) => (
  <>
    <Paper>
      <h4>{name}</h4>
      {role}
      <div className="links_container">
        {links.map((link, i) => (
          <SNSLink key={i} {...link} />
        ))}
      </div>
    </Paper>
    <style jsx>{`
      .links_container {
        display: flex;
        flex-spacing: space-between;
        margin: 0.4em 0 0 0;
      }

      a {
        color: white;
      }
    `}</style>
  </>
);

type MembersPageProps = {
  members: Member[];
};

const MembersPage: NextPage<MembersPageProps> = ({ members }) => (
  <>
    <Layout>
      <Header />
      <main>
        <h1>メンバー紹介</h1>
        <div>
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
