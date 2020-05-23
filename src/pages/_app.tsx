import { AppProps } from "next/app";
import Head from "next/head";
import "../sass/global.sass";

const Page = ({ Component, pageProps }: AppProps): JSX.Element => {
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
