import { ReactNode, FC } from "react";
import Head from "next/head";

export const Layout: FC<{ pageName: string; children: ReactNode }> = ({ pageName, children }) => (
  <>
    <Head>
      <title>{pageName}</title>
    </Head>
    <div>{children}</div>
    <style jsx>{`
      div {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `}</style>
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
          Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </>
);
