import { ReactNode, FC } from "react";
import styles from "../sass/wrapper.module.sass";
import Head from "next/head";

export const Layout: FC<{ pageName: string; children: ReactNode }> = ({ pageName, children }) => (
  <div className={styles.wrapper}>
    <Head>
      <title>{pageName}</title>
    </Head>
    {children}
  </div>
);
