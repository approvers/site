import { Layout } from "../components/layout";
import type { NextPage } from "next";
import { Title } from "../components/title";
import styles from "../scss/pages/join.module.scss";

const JoinPage: NextPage = () => (
  <Layout pageName="限界開発鯖 - 参加方法">
    <Title>参加方法</Title>
    <section className={styles.joinText}>
      <p>
        弊サーバーは、<span className={styles.color}>完全紹介制</span>となっています。
      </p>
      <p>知り合いのメンバーに連絡を取って、招待リンクを受け取ってください。</p>
    </section>
  </Layout>
);

export default JoinPage;
