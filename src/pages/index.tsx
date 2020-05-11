import Head from "next/head";
import { Header } from "../components/header";
import { Layout } from "../components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>限界開発鯖</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header />

        <main>
          <h1 className="title">
            <em>限界開発鯖</em> へようこそ！
          </h1>

          <p className="subtitle">Over Limit Development</p>
        </main>

        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
          </a>
        </footer>
      </Layout>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .subtitle {
          text-align: center;
        }

        .subtitle {
          line-height: 1.5;
          font-style: italic;
          font-size: 1.5rem;
        }

        .logo {
          height: 1em;
        }
      `}</style>
    </>
  );
}
