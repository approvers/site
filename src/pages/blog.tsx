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
import type { GetStaticProps, NextPage } from "next";
import { Metadata, getSortedBlogMetadata } from "../lib/blog-fetch";
import { DateString } from "../components/date";
import { Layout } from "../components/layout";
import NextLink from "next/link";
import { Title } from "../components/title";

const BlogCard = ({ id, title, date, author, authorId }: Metadata): JSX.Element => (
  <HStack borderColor="shadowed" borderRightWidth="1px" borderBottomWidth="2px">
    <NextLink href={`/blog/${id}`} passHref>
      <Avatar as="a" flex="0 0 sm" name={title} />
    </NextLink>
    <VStack alignItems="self-start" flex="1 1" p={2} spacing="0.5">
      <NextLink href={`/blog/${id}`} passHref>
        <a>
          <Heading as="h3" fontSize="lg">
            {title}
          </Heading>
        </a>
      </NextLink>
      <Flex align="self-end" wrap="wrap" gap={2} w="100%">
        <Link href={`https://github.com/${authorId}`}>{author}</Link>
        <DateString dateString={date} />
        <Spacer />
        <NextLink href={`/blog/${id}`} passHref>
          <Button as="a" size="sm">
            記事を読む &rarr;
          </Button>
        </NextLink>
      </Flex>
    </VStack>
  </HStack>
);

const BlogPage: NextPage<{ blogs: Metadata[] }> = ({ blogs }) => (
  <Layout pageName="限界開発鯖 - ブログ">
    <Title>ブログ</Title>
    <SimpleGrid gap={4} columns={1}>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </SimpleGrid>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await getSortedBlogMetadata();
  return { props: { blogs } };
};

export default BlogPage;
