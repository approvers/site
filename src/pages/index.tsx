import type { NextPage } from "next";
import { Questions } from "../components/questions";
import styles from "../scss/pages/index.module.scss";
import { Layout } from "../components/layout";
import { Subtitle } from "../components/title";

const Home: NextPage = () => (
  <Layout pageName="限界開発鯖">
    <h1 className={styles.splash}>
      <em>&dagger;限界開発鯖&dagger;</em> へようこそ！
    </h1>
    <Subtitle>Over Limit Development</Subtitle>
    <Questions />
  </Layout>
);

export default Home;
