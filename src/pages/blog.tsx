import {
  Avatar,
  Button,
  Flex,
  HStack,
  Heading,
  Link,
  SimpleGrid,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import { Link as GatsbyLink, PageProps, graphql } from "gatsby";
import { DateString } from "../components/date";
import { Layout } from "../components/layout";
import React from "react";

function BlogCard({
  id,
  frontmatter,
}: Queries.BlogEntriesQuery["allMarkdownRemark"]["nodes"][number]): JSX.Element {
  const title = frontmatter?.title ?? "無題";
  return (
    <HStack borderColor="shadowed" borderRightWidth="1px" borderBottomWidth="2px">
      <Avatar as={GatsbyLink} flex="0 0 sm" name={title} to={`/blog/${id}`} />
      <VStack alignItems="self-start" flex="1 1" p={2} spacing="0.5">
        <GatsbyLink to={`/blog/${id}`}>
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
          <Button as={GatsbyLink} size="sm" to={`/blog/${id}`}>
            記事を読む &rarr;
          </Button>
        </Flex>
      </VStack>
    </HStack>
  );
}

export const query = graphql`
  query BlogEntries {
    allMarkdownRemark(sort: { frontmatter: { date: ASC } }) {
      nodes {
        id
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
  const blogs = data.allMarkdownRemark.nodes;
  return (
    <Layout title="ブログ">
      <SimpleGrid gap={4} columns={1}>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </SimpleGrid>
    </Layout>
  );
}
