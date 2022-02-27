import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { GOOGLE_ANALYTICS_ID, notifyShowingPage } from "../lib/google-analytics";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";

const theme = extendTheme({
  font: {
    body: `YakuHanJP,
    Roboto,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Oxygen,
    Ubuntu,
    Cantarell,
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    sans-serif`,
  },
});

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
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default Page;
