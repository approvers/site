import { GetStaticProps, NextPage } from "next";
import { Link, VStack } from "@chakra-ui/react";
import { Link as LinkData, getLinks } from "../lib/link-fetch";
import { Layout } from "../components/layout";
import { Title } from "../components/title";
import { boldUnderline } from "../lib/theme";

const LinkPage: NextPage<{ links: readonly LinkData[] }> = ({ links }) => (
  <Layout pageName="限界開発鯖 - リンク">
    <Title>限界リンク集</Title>
    <VStack>
      {links.map(({ name, url }, index) => (
        <Link
          key={index}
          href={url}
          isExternal
          fontSize="2xl"
          fontWeight="bold"
          bgGradient={boldUnderline}
        >
          {name}
        </Link>
      ))}
    </VStack>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const links = await getLinks();
  return { props: { links } };
};

export default LinkPage;
