import { GetStaticProps, NextPage } from "next";
import { Link, getLinks } from "../lib/link-fetch";
import { ExternalLink } from "../components/external-link";
import { Layout } from "../components/layout";
import { Title } from "../components/title";
import styles from "../scss/pages/link.module.scss";

const LinkPage: NextPage<{ links: readonly Link[] }> = ({ links }) => (
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

export const getStaticProps: GetStaticProps = async () => {
  const links = await getLinks();
  return { props: { links } };
};

export default LinkPage;
