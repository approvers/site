import { ExternalLink } from "../components/external-link";
import { Layout } from "../components/layout";
import { NextPage } from "next";
import { Title } from "../components/title";
import styles from "../scss/pages/link.module.scss";

type Links = Record<string, string>;

const links: Links = {
  GitHub: "https://github.com/approvers",
  "公式 Twitter": "https://twitter.com/UFIApprovers",
  "公式 YouTube": "https://www.youtube.com/channel/UCUtr3DOhkcuunsHrAJyWylA",
  connpass: "https://approvers.connpass.com/",
  Qiita: "https://qiita.com/organizations/approvers",
  BinTray: "https://bintray.com/approvers",
  npm: "https://www.npmjs.com/org/approvers",
  HackMD: "https://hackmd.io/@approvers",
};

const LinkPage: NextPage = () => (
  <Layout pageName="限界開発鯖 - リンク">
    <Title>限界リンク集</Title>
    <ul className={styles.linkText}>
      {Object.entries(links).map(([name, url], index) => (
        <li key={index}>
          <ExternalLink href={url}>{name}</ExternalLink>
        </li>
      ))}
    </ul>
  </Layout>
);

export default LinkPage;
