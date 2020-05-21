import { AppProps } from "next/app";
import Head from "next/head";
import "../sass/global.sass";

const Page = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default Page;
