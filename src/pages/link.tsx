import { Link, VStack } from "@chakra-ui/react";
import { Layout } from "../components/layout";
import React from "react";
import { boldUnderline } from "../lib/theme";
import links from "../../data/links.yaml";

export default function Page() {
  return (
    <Layout title="リンク">
      <VStack>
        {(links as unknown as { name: string; url: string }[]).map(({ name, url }, index) => (
          <Link
            key={index}
            fontSize="2xl"
            fontWeight="bold"
            bgGradient={boldUnderline}
            href={url}
            isExternal
          >
            {name}
          </Link>
        ))}
      </VStack>
    </Layout>
  );
}
