import { Subtitle, Title } from "../components/title";
import { Layout } from "../components/layout";
import Link from "next/link";
import { NextPage } from "next";
import styles from "../scss/pages/404.module.scss";

const PageError: NextPage = () => (
  <Layout pageName="404 Not found">
    <Title>404 Not found</Title>
    <Subtitle>ページが見つかりません。</Subtitle>
    <Link href="/">
      <a className={styles.topLink}>トップページへ戻る</a>
    </Link>
  </Layout>
);

export default PageError;
