import { Layout } from "../components/layout";
import { Link } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Title } from "../components/title";
import styles from "../scss/pages/policy.module.scss";

const PolicyPage: NextPage = () => (
  <Layout pageName="限界開発鯖 - プライバシーポリシー">
    <Title>プライバシーポリシー</Title>
    <section className={styles.policyText}>
      <p>当サイトは Google アナリティクスを使用しております。</p>

      <p>
        取得するデータは当サイトの改善に役立てる事のみに使用するとし、
        <span className={styles.color}>
          個人の特定やその他個人の不利益に関わることは致しません。
        </span>
      </p>

      <p>
        規約の詳細に関しましては、
        <Link href="https://marketingplatform.google.com/about/analytics/terms/jp/" isExternal>
          Google アナリティクス利用規約
        </Link>
        や
        <Link href="https://policies.google.com/technologies/ads?hl=ja" isExternal>
          Google ポリシーと規約
        </Link>
        のページをご覧ください。
      </p>
    </section>
  </Layout>
);

export default PolicyPage;
