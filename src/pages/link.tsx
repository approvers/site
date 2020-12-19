import { Layout } from "../components/layout";
import { NextPage } from "next";
import { Title } from "../components/title";
import styles from "../scss/pages/link.module.scss";

const LinkPage: NextPage = () => (
  <Layout pageName="限界開発鯖 - リンク">
    <Title>限界リンク集</Title>
    <section className={styles.linkText}></section>
  </Layout>
);

export default LinkPage;
