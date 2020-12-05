import { Layout } from "../components/layout";
import type { NextPage } from "next";
import { Questions } from "../components/questions";
import { Subtitle } from "../components/title";
import styles from "../scss/pages/index.module.scss";

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
