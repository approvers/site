import { Header } from "../components/header";
import { NextPage } from "next";
import { Questions } from "../components/questions";
import styles from "../scss/pages/index.module.scss";
import { Layout } from "../components/layout";

const Home: NextPage = () => (
  <>
    <Layout pageName="限界開発鯖">
      <Header />
      <main className={styles.homeMainContents}>
        <h1 className={styles.title}>
          <em>&dagger;限界開発鯖&dagger;</em> へようこそ！
        </h1>
        <h2 className={styles.subtitle}>Over Limit Development</h2>
        <Questions />
      </main>
    </Layout>
  </>
);

export default Home;
