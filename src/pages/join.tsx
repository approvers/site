import { NextPage } from "next";
import { Header } from "../components/header";
import { Layout } from "../components/layout";
import styles from "../sass/pages/join.module.sass";

const JoinPage: NextPage = () => (
  <>
    <Layout>
      <Header />
      <main className={styles.joinPage}>
        <h1 className={styles.title}>参加方法</h1>
        <section className={styles.joinText}>
          <p>
            弊サーバーは、<span className={styles.color}>完全紹介制</span>となっています。
          </p>
          <p>知り合いのメンバーに連絡を取って、招待リンクを受け取ってください。</p>
        </section>
      </main>
    </Layout>
  </>
);

export default JoinPage;
