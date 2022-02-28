import { Container, Link } from "@chakra-ui/react";
import { Subtitle, Title } from "../components/title";
import { Layout } from "../components/layout";
import NextLink from "next/link";
import { NextPage } from "next";

const PageError: NextPage = () => (
  <Layout pageName="404 Not found">
    <Title>404 Not found</Title>
    <Container>
      <Subtitle>ページが見つかりません。</Subtitle>
      <NextLink href="/" passHref>
        <Link color="highlighted">トップページへ戻る</Link>
      </NextLink>
    </Container>
  </Layout>
);

export default PageError;
