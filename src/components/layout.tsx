import type { FC, ReactNode } from "react";
import { Footer } from "./footer";
import Head from "next/head";
import { Header } from "./header";
import styles from "../scss/components/layout.module.scss";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
const siteImage = `https://${baseUrl}/android-chrome-512x512.png`;
const siteName = "限界開発鯖";

const SeoMetas: FC<{ pageName: string; description: string }> = ({ pageName, description }) => (
  <>
    <meta name="description" content={description} />
    <meta name="name" content={pageName} />
    <meta name="image" content={siteImage} />
  </>
);

const OgpMetas: FC<{ pageName: string; description: string }> = ({ pageName, description }) => (
  <>
    <meta property="og:title" content={pageName} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={siteImage} />
    <meta property="og:locale" content="ja_JP" />
    <meta property="og:site_name" content={siteName} />
  </>
);

const TwitterCardMetas: FC<{ pageName: string; description: string }> = ({
  pageName,
  description,
}) => (
  <>
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={pageName} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={siteImage} />
  </>
);

const IconMetas: FC = () => (
  <>
    <link rel="apple-touch-icon" sizes="180x180" href={"/apple-touch-icon.png"} />
    <link rel="icon" type="image/png" sizes="32x32" href={"/favicon-32x32.png"} />
    <link rel="icon" type="image/png" sizes="16x16" href={"/favicon-16x16.png"} />
    <link rel="mask-icon" href={"/safari-pinned-tab.svg"} color="#000000" />
  </>
);

export const Layout: FC<{ pageName: string; description?: string; children: ReactNode }> = ({
  pageName,
  children,
  description = "Over Limit Development",
}) => (
  <div className={styles.page}>
    <Head>
      <title>{pageName}</title>
      <SeoMetas pageName={pageName} description={description} />
      <OgpMetas pageName={pageName} description={description} />
      <TwitterCardMetas pageName={pageName} description={description} />
      <IconMetas />
      <link rel="manifest" href={"/site.webmanifest"} />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000000" />
    </Head>
    <Header />
    <main className={styles.wrapper}>{children}</main>
    <Footer />
  </div>
);
