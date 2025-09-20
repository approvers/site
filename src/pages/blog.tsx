import {
  Avatar,
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import { graphql, Link as GatsbyLink, PageProps } from "gatsby";
import React from "react";

import { DateString } from "../components/date";
import { Layout } from "../components/layout";

function BlogCard({
  slug,
  frontmatter,
}: Queries.BlogEntriesQuery["allBlog"]["nodes"][number]): JSX.Element {
  const title = frontmatter?.title ?? "無題";
  return (
    <HStack borderColor="shadowed" borderRightWidth="1px" borderBottomWidth="2px">
      <Avatar.Root>
        <Avatar.Fallback name={title} />
        <Avatar.Image flex="0 0 sm" asChild>
          <GatsbyLink to={`/blog/${slug}`} />
        </Avatar.Image>
      </Avatar.Root>
      <VStack alignItems="self-start" flex="1 1" p={2} spaceY="0.5">
        <GatsbyLink to={`/blog/${slug}`}>
          <Heading as="h3" fontSize="lg">
            {title}
          </Heading>
        </GatsbyLink>
        <Flex align="self-end" wrap="wrap" gap={2} w="100%">
          {frontmatter?.author && frontmatter?.authorId && (
            <Link href={`https://github.com/${frontmatter.authorId}`}>{frontmatter.author}</Link>
          )}
          <DateString dateString={frontmatter?.date ?? ""} />
          <Spacer />
          <Button size="sm" asChild>
            <GatsbyLink to={`/blog/${slug}`}>記事を読む &rarr;</GatsbyLink>
          </Button>
        </Flex>
      </VStack>
    </HStack>
  );
}

export const query = graphql`
  query BlogEntries {
    allBlog {
      nodes {
        slug
        frontmatter {
          title
          date
          author
          authorId
        }
      }
    }
  }
`;

export default function Blog({ data }: PageProps<Queries.BlogEntriesQuery>) {
  const blogs = data.allBlog.nodes;
  return (
    <Layout title="ブログ">
      <SimpleGrid gap={4} columns={1}>
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} {...blog} />
        ))}
      </SimpleGrid>
    </Layout>
  );
}
