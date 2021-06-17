import type { FC } from "react";
import Link from "next/link";
import styles from "../scss/components/header.module.scss";

export const Header: FC = () => (
  <header className={styles.headerLayout}>
    <Link href="/">
      <a className={styles.hero}>
        <img src="/android-chrome-512x512.png"></img>
        Approvers
      </a>
    </Link>
  </header>
);
