import { NextPage } from "next";
import { Header } from "../components/header";
import { Layout } from "../components/layout";
import styles from "../scss/pages/policy.module.scss";

const policyPage: NextPage = () => (
  <>
    <Layout pageName="限界開発鯖 - 当サイトについて">
      <Header />
      <main className={styles.policyPage}>
        <h1 className={styles.title}>プライバシーポリシー</h1>
        <section className={styles.policyText}>
          <p className={styles.textindent1em}>
            当サイトでは、主に今後のサイトの改善に役立てるため、 Google
            LLCが提供しているアクセス分析ツール「Google Analytics」を
            使用したアクセス解析を行っております。
          </p>

          <p className={styles.textindent1em}>
            Google Analyticsでは、当サイトが発行したCookie等を用いて、
            アクセス状況や閲覧環境といったWebサイトの利用データを収集しております。
          </p>

          <p className={styles.textindent1em}>
            Cookieの利用につきましては、Google Analyticsのプライバシーポリシーと
            規約に基づいております。
          </p>

          <p className={styles.textindent1em}>
            <span className={styles.color}>
              取得したデータの使用は当サイトの改善に役立てるために限り、その他の
              目的での使用は一切致しません。
            </span>
            また、このデータは匿名で取得されているため、 個人の特定等は一切致しません。
          </p>

          <p className={styles.textindent1em}>
            規約の詳細に関しましては、
            <a href="https://marketingplatform.google.com/about/analytics/terms/jp/">
              Google アナリティクス利用規約
            </a>
            や<a href="https://policies.google.com/technologies/ads?hl=ja">Googleポリシーと規約</a>
            のページをご覧ください。
          </p>

          <p className={styles.textindent1em}>
            また、上記までで挙げた機能はCookieを無効にすることでデータの収集を拒否
            することができますので、お使いのブラウザの設定をご確認ください。
          </p>
        </section>
      </main>
    </Layout>
  </>
);

export default policyPage;
