import { Metadata, Viewport } from "next";
import { Box } from "@chakra-ui/react";
import { Footer } from "./components/footer";
import { GoogleAnalytics } from "./components/google-analytics";
import { Header } from "./components/header";
import { Navigation } from "./components/navigation";
import { Providers } from "./providers";
import { Suspense } from "react";
import { roboto } from "./fonts";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
const siteImage = "/android-chrome-512x512.png";
const siteName = "限界開発鯖";

console.log(baseUrl);

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={roboto.className}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.3.1/dist/css/yakuhanjp.min.css"
          media="print"
        />
        <IconMetas />
        <link rel="manifest" href={"/site.webmanifest"} />
      </head>
      <body>
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
        <Providers>
          <Navigation links={headerLinks} />
          <Header />
          <Box mt={16} mr={[8, 16]} mb={16} ml={[8, 16]}>
            {children}
          </Box>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
