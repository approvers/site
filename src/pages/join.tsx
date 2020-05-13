import { NextPage } from "next";
import { Header } from "../components/header";
import { Layout } from "../components/layout";
import styles from "../sass/wrapper.module.sass";

const JoinPage: NextPage = () => (
  <>
    <Layout>
      <Header />
      <main className={styles.mainContents}>
        <h1>参加方法</h1>
        <section>
          <p>弊サーバーは、完全紹介制となっています。</p>
          <p>知り合いのメンバーに連絡を取って、招待リンクを受け取ってください。</p>
        </section>
      </main>
    </Layout>
  </>
);

export default JoinPage;
