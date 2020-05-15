import { AppProps } from "next/app";
import "../sass/global.sass";

const Page = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default Page;
