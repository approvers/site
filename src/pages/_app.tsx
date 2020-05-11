import App from "next/app";
import "../sass/global.sass";

export default class Page extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
