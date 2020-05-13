import Head from "next/head";
import { Header } from "../components/header";
import { Layout } from "../components/layout";
import { NextPage } from "next";
import styles from "../sass/pages/index.module.sass";

const Home: NextPage = () => (
  <>
    <Head>
      <title>限界開発鯖</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <Header />
      <main className={styles.homeMainContents}>
        <h1 className={styles.title}>
          <em>†限界開発鯖†</em> へようこそ！
        </h1>
        <p className={styles.subtitle}>Over Limit Development</p>
      </main>
    </Layout>
  </>
);

export default Home;
