import { ReactNode, FC } from "react";
import Head from "next/head";
import styles from "../sass/wrapper.module.sass";

const siteImage = "";
const siteName = "限界開発鯖";

export const Layout: FC<{ pageName: string; description?: string; children: ReactNode }> = ({
  pageName,
  children,
  description = "Over Limit Development",
}) => (
  <div className={styles.page}>
    <Head>
      <title>{pageName}</title>
      <meta name="description" content={description} />
      <meta name="name" content={pageName} />
      <meta name="image" content={siteImage} />

      <meta property="og:title" content={pageName} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:site_name" content={siteName} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageName} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={siteImage} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <div className={styles.wrapper}>{children}</div>
  </div>
);
