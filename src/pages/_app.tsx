import { GOOGLE_ANALYTICS_ID, notifyShowingPage } from "../lib/google-analytics";

import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import Script from "next/script";
import { theme } from "../lib/theme";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { yearContext } from "../lib/year-context";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
      />
      <Script strategy="afterInteractive" id="send-ga">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "${GOOGLE_ANALYTICS_ID}", {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <yearContext.Provider value={new Date().getFullYear()}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </yearContext.Provider>
    </>
  );
};

export default Page;
