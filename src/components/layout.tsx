import { Box } from "@chakra-ui/react";
import { Footer } from "./footer";
import { Header } from "./header";
import { Navigation } from "./navigation";
import { Providers } from "./providers";
import React from "react";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
const siteImage = "/android-chrome-512x512.png";
const siteName = "限界開発鯖";

console.log(baseUrl);

export const metadata = {
  icons: [siteImage],
  title: {
    default: siteName,
    template: `${siteName} - %s`,
  },
  openGraph: {
    type: "website",
    title: siteName,
    siteName: siteName,
    images: [siteImage],
    locale: "ja_JP",
  },
  twitter: {
    card: "summary",
    title: siteName,
    images: [siteImage],
  },
};

const IconMetas = (): JSX.Element => (
  <>
    <link rel="apple-touch-icon" sizes="180x180" href={"/apple-touch-icon.png"} />
    <link rel="icon" type="image/png" sizes="32x32" href={"/favicon-32x32.png"} />
    <link rel="icon" type="image/png" sizes="16x16" href={"/favicon-16x16.png"} />
    <link rel="mask-icon" href={"/safari-pinned-tab.svg"} color="#000000" />
  </>
);

const headerLinks = [
  {
    name: "ホーム",
    url: "/",
  },
  {
    name: "メンバー",
    url: "/member",
  },
  {
    name: "ブログ",
    url: "/blog",
  },
  {
    name: "リンク",
    url: "/link",
  },
] as const;

export function Layout({ title, children }: { title: string; children: React.ReactNode }) {
  const titleText = title === "" ? siteName : `${siteName} - ${title}`;
  return (
    <>
      <html lang="ja" />
      <title>{titleText}</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.3.1/dist/css/yakuhanjp.min.css"
        media="print"
      />
      <IconMetas />
      <link rel="manifest" href={"/site.webmanifest"} />
      <Providers>
        <Navigation links={headerLinks} />
        <Header />
        <Box mt={16} mr={[8, 16]} mb={16} ml={[8, 16]}>
          {children}
        </Box>
        <Footer />
      </Providers>
    </>
  );
}
