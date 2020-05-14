import { Header } from "../components/header";
import { NextPage } from "next";
import { Questions } from "../components/questions";
import styles from "../sass/pages/index.module.sass";

const Home: NextPage = () => (
  <>
    <div className={styles.homeWrapper}>
      <Header />
      <main className={styles.homeMainContents}>
        <h1 className={styles.title}>
          <em>†限界開発鯖†</em> へようこそ！
        </h1>
        <h2 className={styles.subtitle}>Over Limit Development</h2>
        <Questions />
      </main>
    </div>
  </>
);

export default Home;
