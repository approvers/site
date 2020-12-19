import { Header } from "../components/header";
import { Layout } from "../components/layout";
import { NextPage } from "next";
import styles from "../scss/pages/link.module.scss";

const LinkPage: NextPage = () => (
  <>
    <Layout pageName="限界開発鯖 - リンク">
      <Header />
      <main className={styles.joinPage}>
        <h1 className={styles.title}>限界リンク集</h1>
        <section className={styles.linkText}></section>
      </main>
    </Layout>
  </>
);

export default LinkPage;
