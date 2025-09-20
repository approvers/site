import { Container, Text } from "@chakra-ui/react";
import { ExternalLink } from "../components/link";
import { Layout } from "../components/layout";
import React from "react";

export default function PolicyPage() {
  return (
    <Layout title="プライバシーポリシー">
      <Container
        as="section"
        css={{
          "& p": {
            margin: "0.6em",
            lineHeight: 1.7,
            textIndent: "1em",
          },
        }}
      >
        <Text>当サイトは Google アナリティクスを使用しております。</Text>

        <Text>
          取得するデータは当サイトの改善に役立てる事のみに使用するとし、
          <Text as="span" bgGradient="boldUnderline">
            個人の特定やその他個人の不利益に関わることは致しません。
          </Text>
        </Text>

        <Text>
          規約の詳細に関しましては、
          <ExternalLink href="https://marketingplatform.google.com/about/analytics/terms/jp/">
            Google アナリティクス利用規約
          </ExternalLink>
          や
          <ExternalLink href="https://policies.google.com/technologies/ads?hl=ja">
            Google ポリシーと規約
          </ExternalLink>
          のページをご覧ください。
        </Text>
      </Container>
    </Layout>
  );
}
