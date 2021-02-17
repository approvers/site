import { ExternalLink } from "../components/external-link";
import { Layout } from "../components/layout";
import { NextPage } from "next";
import { Title } from "../components/title";
import styles from "../scss/pages/link.module.scss";

type Links = readonly { name: string; url: string }[];

const links: Links = [
  { name: "GitHub", url: "https://github.com/approvers" },
  { name: "公式 Twitter", url: "https://twitter.com/UFIApprovers" },
  { name: "公式 YouTube", url: "https://www.youtube.com/channel/UCUtr3DOhkcuunsHrAJyWylA" },
  { name: "Qiita", url: "https://qiita.com/organizations/approvers" },
  { name: "HackMD", url: "https://hackmd.io/@approvers" },
  { name: "npm", url: "https://www.npmjs.com/org/approvers" },
  { name: "connpass", url: "https://approvers.connpass.com/" },
  { name: "BinTray", url: "https://bintray.com/approvers" },
  { name: "KeyBase", url: "https://keybase.io/team/approvers" },
];

const LinkPage: NextPage = () => (
  <Layout pageName="限界開発鯖 - リンク">
    <Title>限界リンク集</Title>
    <ul className={styles.linkText}>
      {links.map(({ name, url }, index) => (
        <li key={index}>
          <ExternalLink href={url}>{name}</ExternalLink>
        </li>
      ))}
    </ul>
  </Layout>
);

export default LinkPage;
