import { Container, Link } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import { Layout } from "../components/layout";
import React from "react";
import { Subtitle } from "../components/title";

export default function ErrorPage() {
  return (
    <Layout title="404 Not found">
      <Container>
        <Subtitle>ページが見つかりません。</Subtitle>
        <Link as={GatsbyLink} color="highlighted" to="/">
          トップページへ戻る
        </Link>
      </Container>
    </Layout>
  );
}
