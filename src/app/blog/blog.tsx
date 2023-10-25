"use client";
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
import { DateString } from "../components/date";
import { Metadata } from "../lib/blog-fetch";
import NextLink from "next/link";
import { Metadata as NextMetadata } from "next";
import type { NextPage } from "next";

export const metadata: NextMetadata = {
  title: "限界開発鯖 - ブログ",
};

const BlogCard = ({ id, title, date, author, authorId }: Metadata): JSX.Element => (
  <HStack borderColor="shadowed" borderRightWidth="1px" borderBottomWidth="2px">
    <Avatar as={NextLink} flex="0 0 sm" href={`/blog/${id}`} name={title} />
    <VStack alignItems="self-start" flex="1 1" p={2} spacing="0.5">
      <NextLink href={`/blog/${id}`}>
        <Heading as="h3" fontSize="lg">
          {title}
        </Heading>
      </NextLink>
      <Flex align="self-end" wrap="wrap" gap={2} w="100%">
        <Link href={`https://github.com/${authorId}`}>{author}</Link>
        <DateString dateString={date} />
        <Spacer />
        <Button as={NextLink} href={`/blog/${id}`} size="sm">
          記事を読む &rarr;
        </Button>
      </Flex>
    </VStack>
  </HStack>
);

export const Blog: NextPage<{ blogs: Metadata[] }> = ({ blogs }) => (
  <SimpleGrid gap={4} columns={1}>
    {blogs.map((blog) => (
      <BlogCard key={blog.id} {...blog} />
    ))}
  </SimpleGrid>
);
