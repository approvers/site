import "../scss/global.scss";
import * as gtag from "../lib/gtag";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Page = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string): void => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
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
