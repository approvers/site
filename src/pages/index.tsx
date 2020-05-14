import Head from "next/head";
import { Header } from "../components/header";
import { NextPage } from "next";
import styles from "../sass/pages/index.module.sass";

const Home: NextPage = () => (
  <>
    <Head>
      <title>限界開発鯖</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.homeWrapper}>
      <Header />
      <main className={styles.homeMainContents}>
        <h1 className={styles.title}>
          <em>†限界開発鯖†</em> へようこそ！
        </h1>
        <h2 className={styles.subtitle}>Over Limit Development</h2>
        <div>
          <section className={styles.aboutUs}>
            <h3>
              <span>Q</span>限界開発鯖ってなに?
            </h3>
            <p>
              <span>A</span>限界開発鯖は限界高専生が限界状態で開発を行っているDiscord鯖です。
            </p>
          </section>
          <section className={styles.aboutUs}>
            <h3>
              <span>Q</span>限界開発鯖の雰囲気が知りたい！
            </h3>
            <p>
              <span>A</span>こちらへどうぞ →{" "}
              <a
                href="https://twitter.com/search?q=%23限界開発鯖&src=typed_query"
                className={styles.genkaiLink}
              >
                #限界開発鯖
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  </>
);

export default Home;
