import { NextPage } from "next";
import { Layout } from "../components/layout";
import { ExternalLink } from "../components/externalLink";
import styles from "../scss/pages/policy.module.scss";

const PolicyPage: NextPage = () => (
  <>
    <Layout pageName="限界開発鯖 - プライバシーポリシー">
      <main className={styles.policyPage}>
        <h1 className={styles.title}>プライバシーポリシー</h1>
        <section className={styles.policyText}>
          <p className={styles.textindent1em}>
            当サイトは Google アナリティクスを使用しております。
          </p>

          <p className={styles.textindent1em}>
            取得するデータは当サイトの改善に役立てる事のみに使用するとし、
            <span className={styles.color}>
              個人の特定やその他個人の不利益に関わることは致しません。
            </span>
          </p>

          <p className={styles.textindent1em}>
            規約の詳細に関しましては、
            <ExternalLink
              href="https://marketingplatform.google.com/about/analytics/terms/jp/"
              className={styles.link}
            >
              Google アナリティクス利用規約
            </ExternalLink>
            や
            <ExternalLink
              href="https://policies.google.com/technologies/ads?hl=ja"
              className={styles.link}
            >
              Google ポリシーと規約
            </ExternalLink>
            のページをご覧ください。
          </p>
        </section>
      </main>
    </Layout>
  </>
);

export default PolicyPage;
