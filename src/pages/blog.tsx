import {
  Avatar,
  Button,
  Flex,
  HStack,
  Heading,
  Link,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import { Metadata, getSortedBlogMetadata } from "../lib/blog-fetch";
import { DateString } from "../components/date";
import { Layout } from "../components/layout";
import NextLink from "next/link";
import { Title } from "../components/title";

const BlogCard = ({ id, title, date, author }: Metadata): JSX.Element => (
  <HStack borderBottom="2px" borderRight="1px" borderColor="shadowed">
    <NextLink href={`/blog/${id}`} passHref>
      <Link fontStyle="normal" textDecoration="none">
        <Avatar name={title} flex="0 0 sm" />
      </Link>
    </NextLink>
    <VStack flex="1 1" margin={2} padding={2} spacing="0.5" alignItems="self-start">
      <NextLink href={`/blog/${id}`} passHref>
        <Link fontStyle="normal" textDecoration="none">
          <Heading as="h3" fontSize="lg">
            {title}
          </Heading>
        </Link>
      </NextLink>
      <Flex alignItems="self-end" flexWrap="wrap" width="100%" gap={2}>
        <Text>{author}</Text>
        <DateString dateString={date} />
        <Spacer />
        <NextLink href={`/blog/${id}`} passHref>
          <Link>
            <Button size="sm">記事を読む &rarr;</Button>
          </Link>
        </NextLink>
      </Flex>
    </VStack>
  </HStack>
);

const BlogPage: NextPage<{ blogs: Metadata[] }> = ({ blogs }) => (
  <Layout pageName="限界開発鯖 - ブログ">
    <Title>ブログ</Title>
    <SimpleGrid columns={1} gap={4}>
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
