import Link from "next/link";
import styles from "../scss/components/header.module.scss";

export const Header = (): JSX.Element => (
  <header className={styles.headerLayout}>
    <Link href="/">
      <a className={styles.hero}>
        <img src="/android-chrome-512x512.png" width={512} height={512} alt="Approversロゴ"></img>
        Approvers
      </a>
    </Link>
  </header>
);
