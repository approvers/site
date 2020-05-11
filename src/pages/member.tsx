import {Layout} from '../components/layout';
import {NextPage, GetStaticProps} from 'next';
import {getMembers, Member} from '../lib/member-fetch';
import {FC} from 'react';
import {SNSLink} from '../components/sns-link';
import {Paper} from '../components/paper';
import {Header} from '../components/header';

const MemberCard: FC<Member> = ({name, role, links}) => (
  <>
    <Paper>
      <h4>{name}</h4>
      <p>{role}</p>
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
      p {
        max-width: 8em;
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

const MembersPage: NextPage<MembersPageProps> = ({members}) => (
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
    <style jsx>{`
      main {
        display: flex;
        align-items: center;
        flex-flow: column;
      }
      div {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 90vw;
      }
    `}</style>
  </>
);

export const getStaticProps: GetStaticProps<MembersPageProps> = async () => {
  const members = await getMembers();
  return {
    props: {members},
  };
};

export default MembersPage;
