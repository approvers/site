import Link from "next/link";
import { Layout } from "../components/layout";
import { Title } from "../components/title";
import { Subtitle } from "../components/title";
import { NextPage } from "next";
import styles from "../scss/pages/blog.module.scss";

const PageError: NextPage = () => (
  <Layout pageName="404 - Not found">
    <Title>404 Not found</Title>
    <Subtitle>ページが見つかりません。</Subtitle>
    <Link href="/">
      <a className={styles.pageLink}>トップページへ戻る</a>
    </Link>
  </Layout>
);

export default PageError;
