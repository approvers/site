import "../scss/global.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { notifyShowingPage } from "../lib/gtag";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Page = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", notifyShowingPage);
    return () => {
      router.events.off("routeChangeComplete", notifyShowingPage);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default Page;
