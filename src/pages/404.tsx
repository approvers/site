import { Container, Link } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React from "react";

import { Layout } from "../components/layout";
import { Subtitle } from "../components/title";

export default function ErrorPage() {
  return (
    <Layout title="404 Not found">
      <Container>
        <Subtitle>ページが見つかりません。</Subtitle>
        <Link color="highlighted" asChild>
          <GatsbyLink to="/">トップページへ戻る</GatsbyLink>
        </Link>
      </Container>
    </Layout>
  );
}
