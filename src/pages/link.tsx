import { GetStaticProps, NextPage } from "next";
import { Link as LinkData, getLinks } from "../lib/link-fetch";
import { Layout } from "../components/layout";
import { Link } from "@chakra-ui/react";
import { Title } from "../components/title";
import styles from "../scss/pages/link.module.scss";

const LinkPage: NextPage<{ links: readonly LinkData[] }> = ({ links }) => (
  <Layout pageName="限界開発鯖 - リンク">
    <Title>限界リンク集</Title>
    <ul className={styles.linkText}>
      {links.map(({ name, url }, index) => (
        <li key={index}>
          <Link
            href={url}
            isExternal
            textDecoration="underline"
            fontStyle="italic"
            fontWeight="bold"
          >
            {name}
          </Link>
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
