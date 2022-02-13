import Link from "next/link";
import styles from "../scss/components/header.module.scss";

export const Header = (): JSX.Element => (
  <header className={styles.headerLayout}>
    <Link href="/">
      <a className={styles.hero}>
        <img src="/android-chrome-192x192.png" width={192} height={192} alt="Approversロゴ"></img>
        Approvers
      </a>
    </Link>
  </header>
);
