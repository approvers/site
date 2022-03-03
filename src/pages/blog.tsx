import {
  Avatar,
  Button,
  Flex,
  HStack,
  Heading,
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
  <HStack borderColor="shadowed" borderRight="1px" borderBottom="2px">
    <NextLink href={`/blog/${id}`} passHref>
      <a>
        <Avatar flex="0 0 sm" name={title} />
      </a>
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
        <Text>{author}</Text>
        <DateString dateString={date} />
        <Spacer />
        <NextLink href={`/blog/${id}`} passHref>
          <a>
            <Button size="sm">記事を読む &rarr;</Button>
          </a>
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
