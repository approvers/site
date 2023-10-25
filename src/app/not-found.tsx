import { Container, Link } from "@chakra-ui/react";
import { Metadata, NextPage } from "next";
import NextLink from "next/link";
import { Subtitle } from "./components/title";

export const metadata: Metadata = { title: "404 Not found" };

const PageError: NextPage = () => (
  <Container>
    <Subtitle>ページが見つかりません。</Subtitle>
    <Link as={NextLink} color="highlighted" href="/">
      トップページへ戻る
    </Link>
  </Container>
);

export default PageError;
