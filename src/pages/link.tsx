import { ExternalLink } from "../components/link";
import { Layout } from "../components/layout";
import React from "react";
import { VStack } from "@chakra-ui/react";
import links from "../../data/links.yaml";

export default function Page() {
  return (
    <Layout title="リンク">
      <VStack>
        {(links as unknown as { name: string; url: string }[]).map(({ name, url }, index) => (
          <ExternalLink
            key={index}
            fontSize="2xl"
            fontWeight="bold"
            bgGradient="boldUnderline"
            href={url}
          >
            {name}
          </ExternalLink>
        ))}
      </VStack>
    </Layout>
  );
}
